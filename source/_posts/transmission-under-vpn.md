---
title: VPN双栈环境下构建 Transmission PT 做种客户端
categories:
  - dev
date: 2024-01-21 10:07:32
---

# 背景

寻找技术上既能规避自家网络使用 BT 协议又能利用本地环境的大硬盘的解决方案

# 采用方案

Wireguard + Transmission

## 原因

以前一直使用 [docker-transmission-openvpn](https://github.com/haugene/docker-transmission-openvpn) 这个 repo 的 OpenVPN

但是
- wireguard 配置简单、现代化
- 想上 IPv6
- 可以自己控制 Transmission 的自由化

# 在 Docker 中安装 Transmission

使用 [`linuxserver/wireguard`](https://hub.docker.com/r/linuxserver/wireguard)  镜像启动 wireguard 并在镜像内安装 transmission

```yaml docker-compose.yml
version: '2.4'
services:
  transmission-wireguard:
    image: linuxserver/wireguard:1.0.20210914
    container_name: transmission-wireguard
    cap_add:
      - NET_ADMIN
    environment:
      - DOCKER_MODS=linuxserver/mods:universal-package-install
      - INSTALL_PACKAGES=dnsutils|traceroute|transmission|transmission-daemon|transmission-cli
      - USER=
      - PASS=
    volumes:
      - ./wireguard-config:/config
      - ./custom-cont-init.d:/custom-cont-init.d
    networks:
      - transmission
    ports:
      - 127.0.0.1:9091:9091
```

在 `wg0.conf` 中添加 PostUp / PreDown 脚本启动 Transmission

```conf wg0.conf
[Interface]
PrivateKey = PrivateKeyPrivateKeyPrivateKey
ListenPort = 54321
Address = 10.13.13.2/32, 2001:ipv6:public:address:1::2/128
# Cloudflare 1.1.1.1 DNS
DNS = 2606:4700:4700::1111, 1.1.1.1
PostUp = start.sh
PreDown = stop.sh

# server here
[Peer]
PublicKey = /pX3pc/Lwxc94O93sjKaAG/v0VJM5wkqr3HZxX6GD0Q=
PresharedKey = 5bQ18jyDGwtNyX37Iv6AiI9TDPo02oDzwMaIJM/SKgE=
AllowedIPs = 0.0.0.0/0, ::/0
Endpoint = [2001:ipv6:public:address:1::1]:54321
PersistentKeepalive = 20
```

```bash start.sh
s6-setuidgid abc transmission-daemon -f &
```

```bash stop.sh
echo "Stopping transmission..."
pid=$(pidof transmission-daemon)
if [ ! -z "$USER" ] && [ ! -z "$PASS" ]; then
  transmission-remote -n "$USER":"$PASS" --exit
else
  transmission-remote --exit
fi
# terminate when the transmission-daemon process dies
tail --pid=${pid} -f /dev/null
echo "Transmission exited."
```

# 问题 - 发现 PT 显示只有 IPv6 权限

启动做种之后在各大 PT 站发现自己只有 IPv6 权限，然而在容器内可以 ping 通 IPv4 地址（从延迟上来看也确实走了 VPN）

而在VPN服务器上同样也安装了 Transmission 客户端，但是却正常显示双栈权限

# 解决

## 调整优先级让 IPv4 优先 IPv6

Google 中搜索过后大多数的解决方案是添加一行 `precedence ::ffff:0:0/96 100` 到 `/etc/gai.conf` 文件中

但尝试之后并没有起到有效作用，于是常识在 `wg0.conf` 中不分配 IPv6 地址后拥有 IPv4 权限，一度尝试放弃准备起两个容器一个走 v4 一个走 v6

## 屏蔽做种服务器的 IPv6 DNS 响应

再次更换搜索词为 “双栈 transmission” 后，出现了一些结果，发现写到

> 需要通过更改 host 或者调整系统前缀策略让 BT 客户端通过 v4 连接 tracker


> 设置双栈做种时，先在本机网络适配器中关闭IPV6协议，然后ping一下tracker服务器，得到一个IPV4地址，将这个IPV4地址和tracker服务器域名写进系统的hosts文件，再开启IPV6协议即可。


这才醒悟到根本原因很有可能是 transmission 汇报的ip地址为网卡地址，种子服务器接收后不认可私网IPv4地址，于是开始屏蔽汇报服务器的AAAA地址

`custom-cont-init.d` 下新建安装启动 bind9 脚本
```bash start-bind9.sh
#!/bin/bash

DEBIAN_FRONTEND="noninteractive"
apt-get update
apt-get -o DPkg::Options::=--force-confdef install -y --no-install-recommends bind9 bind9-libs bind9-utils

named -c /etc/bind/named.conf
echo "nameserver 127.0.0.1" > /etc/resolv.conf

```

创建 `named.conf` 挂载进容器喂给 bind9

```bash named.conf
plugin query "/usr/lib/x86_64-linux-gnu/bind/filter-aaaa.so" {
  filter-aaaa-on-v4 yes;
  filter-aaaa-on-v6 yes;
};
```

容器挂载

```yaml docker-compose.yml
# ...前略
  volumes:
    - named.conf:/etc/bind/named.conf:ro
# ... 后略
```

后正常拥有双栈权限

# 问题 - IPv6的传入链接有问题

发现交换客户端中永远没有 IPv6 地址后，遂尝试 ping IPv6地址，无果，traceroute 之后发现停留在 VPN 服务器上不到达 container

# 解决 VPN服务器上安装NDP发现服务

Ubuntu 上 `apt -y install ndppd`

创建

```bash /etc/ndppd.conf
# eno0 is your NIC name like eth0 etc...
proxy eno0 {
  rule 2001:public:ipv6:address::/64 {
    static
  }
}
```

运行 `service ndppd restart` 就可以了。


# 参考

> [双栈做种](https://blog.lfalive.top/2021/06/17/PT/#%E5%8F%8C%E6%A0%88%E5%81%9A%E7%A7%8D)
> [双栈环境挂 PT 需注意](https://www.v2ex.com/t/497336)
> [关于IPv6的常识科普，以及VPS通过ndppd向母鸡广播小鸡内网IPv6邻居的方法教程](https://www.nodeseek.com/post-9473-1)

# 回顾

其实搭建这个东西是 2021 年做的事情了，当时这个东西还挂在群晖上还解决了 wireguard 代理 IPv6 路由表的奇怪问题，但现在回想整个过程，其实是对网络部分，与操作系统这边的实现细节并不清楚才会走了很多弯路，回想发生过有很多类似的事情，不刨根问底就会有“感觉上对这个东西应该很熟悉每天都在打交道”但为什么最后会有偏差的问题

另外整体一遍做过之后调试之后也对 IPv4 / IPv6 有了进一步的认识，对网络问题如何定位，查找也有了一些心得。

~~终于可以把 2021 年的 Chrome Tab 给关上了呢~~
