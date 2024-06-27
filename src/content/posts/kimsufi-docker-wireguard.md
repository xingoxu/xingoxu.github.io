---
title: 解决在 Ubuntu 24 中用 Docker 安装服务器端 Wireguard 的一个问题
published: 2024-06-27
# description: ''
# image: ''
tags:
  - dev
  - kimsufi
  - docker
  - wireguard
  - iptables
# category: ''
draft: false 
---

# 背景

[前文](/2024/01/transmission-under-vpn/)提到了客户端使用 Wireguard 在 Docker 中连接 VPN 后将整个做种使用服务器网络的过程。但很不幸，这台 Kimsufi 的杜甫在上上个礼拜莫名其妙的失联了。期初我以为是网络问题或者可能死机了暂时性无法访问，一开始还能 ping 通于是在面板上操作了重启，重启过后无论是在中国大陆这边去 ping 还是在日本这边去 ping 都没有办法通，而且没有任何可 ping 通的迹象，遂重装。

# 问题1 ip6tables 报错

```yaml:docker-compose.yml
services:
  wireguard:
    image: linuxserver/wireguard:1.0.20210914
    container_name: wireguard
    cap_add:
      - NET_ADMIN
      # - SYS_MODULE
    environment:
      - TZ=Asia/Tokyo
      - SERVERPORT= #optional
      - PEERS= #optional
      - SERVERURL= #Wireguard VPN server address
      - ALLOWEDIPS=
    volumes:
      - ./wireguard-server/config:/config
      - /etc/localtime:/etc/localtime:ro
      - /usr/src:/usr/src # location of kernel headers
      # - /lib/modules:/lib/modules
    network_mode: "host"
    restart: unless-stopped
```

因为之前就已经容器化过了，所以直接敲

```bash
docker compose up -d && docker-compose logs -f
```

结果启动后出现如下报错，而且宿主机的 IPv4 还没办法从外面 ping 通了

```
ip6tables v1.8.7 (legacy): can't initialize ip6tables table `filter': Table does not exist (do you need to insmod?)
Perhaps ip6tables or your kernel needs to be upgraded.
```

很明显是 ip6tables 的有点问题，搜了一些文档进行自查后有可能是 ip6_tables 模块没有载入

```bash
modprobe ip6_tables
```

开机载入后启动容器便能成功启动

# 问题2 客户端只能访问 IPv6 地址但无法访问 IPv4

客户端没有办法访问公网 IPv4 地址，但是能 ping 通并访问宿主机的服务，真是让人头大，怎么会有这么奇怪的问题。

能够 ping 通宿主机说明客户端和宿主机的连接成功建立， Wireguard 端应该是没有问题，那么问题应该是出在宿主机的内部包转发上，宿主机的 `wg0.conf` 一动也没动过，网卡名也设置成通用的，怎么会不通也是很不明白。

```ini:wg0.conf
[Interface]
...
PostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -A FORWARD -o %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eno+ -j MASQUERADE
PostUp = ip6tables -A FORWARD -i eno+ -o %i -j ACCEPT; ip6tables -A FORWARD -i %i -j ACCEPT;
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -D FORWARD -o %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eno+ -j MASQUERADE
PostDown = ip6tables -D FORWARD -i eno+ -o %i -j ACCEPT; ip6tables -D FORWARD -i %i -j ACCEPT;
```

第一句是允许 wg0（建立的nic）上进出包，后面那句是开启NAT转发，一切看起来都没有什么问题，在互联网上搜搜索索也没搜出来什么结果，于是问了新出的 Claude 3.5，也是来回问了好几回，最后给了的几个方案中有了这个解决方法

```bash
iptables -I DOCKER-USER -i eno0 -o wg0 -j ACCEPT
iptables -I DOCKER-USER -i wg0 -o eno0 -j ACCEPT
```

在宿主机的 bash 中敲入后客户端就马上能 ping 通 v4 地址了，于是上网搜索后发现 [reddit 的这个帖子](https://www.reddit.com/r/WireGuard/comments/g7puj0/why_i_could_not_connect_via_wireguard_to_internet/) 并稍微瞄了一眼 Docker 官方文档，看来是某个升级后导入的措施，可能是容器中建立的网卡怕影响到宿主机的网络所做的改动吧。

# 太长不看

首先第一个问题感觉不太像是 Ubuntu 会有的问题，因此怀疑是不是 kimsufi 修改的镜像问题（因为网络部分确实是有被修改），上述两个问题合在一起，有了以下解决方案。

首先编写 iptables.rules

```ini:/root/iptables/iptables.rules
*filter

-I DOCKER-USER -o wg0 -j ACCEPT
-I DOCKER-USER -i wg0 -j ACCEPT

COMMIT
```

其次编写启动脚本

```bash:/root/startup.sh
#!/bin/bash

modprobe ip6_tables
iptables-restore -v -n /root/iptables/iptables.rules
```

然后给这个脚本上个服务保证开机启动 & 出错再运行

```ini:/etc/systemd/system/myscript.service
[Unit]
Description=My Startup Script
Before=network-online.target
Wants=network.target

[Service]
Type=oneshot
ExecStart=/root/startup.sh
ExecReload=/root/startup.sh
RemainAfterExit=yes
Restart=on-failure
RestartSec=3s

[Install]
WantedBy=multi-user.target
```

`ip6_tables` 模块需要在 docker 容器启动前便加载因此选择在`network-online.target` 前这个时间点运行脚本，但此时 docker 服务本身并不一定已经启动，因此如果才还原 iptables 的时候如果报错则让脚本自动再运行

Ubuntu 24 默认内核允许 10s 内运行 5 次因此注意 `RestartSec` 不要小于 2s 。

最后让服务开机启动
```bash
systemctl enable myscript.service
```




# 余谈

这台机器第一次重装过后刚安装好 docker 和 zsh，还在操作 ssh 呢，结果唐突失联，再次面板操作重装后又被告知硬件出现了问题。待 kimsufi 那边检查过后重新安装完成后发现 500G 的硬盘变成了 1.8T 真是受宠若惊，本以为是主机坏了给我开了台新的但 CPU 和内存大小也没变 ~~不管反正给了就要用满~~

另外每次重装机器，虽然已经做了容器化，但还要配 ssh 和安装 docker 这件事让我很是心烦，即使弄好也会出现像上面的奇怪问题 ~~也怪自己从 Ubuntu 22 改成了 24~~，不知道有没有什么解决方案适合自己