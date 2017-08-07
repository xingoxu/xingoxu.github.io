---
title: 交叉编译原版某不可描述程序为梅林某停更插件续命
categories:
  - dev
date: 2017-08-07 14:41:43
---


> Forked from [原文 and 非自审查版](http://telegra.ph/%E4%BA%A4%E5%8F%89%E7%BC%96%E8%AF%91%E5%8E%9F%E7%89%88shadowsocks%E4%B8%BAkoolshare%E6%A2%85%E6%9E%97ss%E6%8F%92%E4%BB%B6%E7%BB%AD%E5%91%BD-08-07)

# 准备环境

1. ubuntu 16.04
2. [原版梅林源码](https://github.com/RMerl/asuswrt-merlin)
3. 55-libev 源码

# 原理说明

解包梅林 55 插件发现，基本都是脚本，核心都是调用 55-redir ，因此猜测 55-redir 为原版 55 ，只需要更新原版 55 ，并在前端进行相应修改，便能对其续命

## ubuntu 16.04

不是很了解 linux，但是应该只要能够运行 arm-linux-gcc 的 linux 发行版都可以，但我在 ubuntu 16.04 下实验成功，因此这里写 ubuntu 16.04，当然 docker 是可以的（因为我就是在 macos 下用的 docker）

## 原版梅林源码

虽然是 koolshare 改版固件，但其还是合并了梅林的代码，因此可以使用梅林的交叉编译工具链

下载时，注意对应相对的梅林版本号，可以看一下固件发布时的说明

梅林的交叉编译工具链在梅林源码 `release/src-rt-6.x.4708/toolchains/hndtools-arm-linux-2.6.36-uclibc-4.5.3`，release 下应该是固件版本的不同，但几个固件版本下的 toolchains 均指向这个文件夹，应该是 toolchains 没有改变过

## 55-libev 源码

不解释

# 炼丹编译

## 镜像准备与 arm-linux-gcc

ubuntu 首先需要安装一些编译工具，如果对系统有洁癖的，推荐使用docker，我使用了别人写好的 DockerFile 的镜像

> [Asuswrt Merlin 固件交叉编译环境](https://github.com/mritd/dockerfile/tree/master/asuswrt-merlin-build)

启动并挂载源码，运行 `docker exec -it container-name zsh`

进入容器后尝试运行 `arm-linux-gcc`

如果出现 `arm-linux-gcc: no input files` 说明正常，进行下一步

如果出现 其他，请检查路径，权限，否则等下编译出来的可能是 ubuntu 的 55 （我之前编译时，解压后arm-linux-gcc没有运行权限，于是没法编译，给了权限就可以了）

## 编译 55 依赖与 55

编译 55 还有一些依赖需要安装，以下过程参阅
> [交叉编译55-libev](https://haoutil.com/topic/cross-compile-shadowsocks-libev)

需要编译 `mbedTLS`、`pcre`、`libsodium`、`libev`、`libudns`

按照原博文的编译后，最后编译 55 时死活没有检测到编译了libudns，怕是编译后文件夹没有添加到 `PATH` 中，当然刚才的博文里还提供了一键编译脚本，但那个一键编译脚本中判断参数的部分在ubuntu里报错，于是我就去了，直接写死环境 `arm-linux` 即可


fork了一下  

<script src="https://gist.github.com/xingoxu/a9dc40df528c57c792ee72f1409a6ebb.js"></script>


编译过程大约需要持续 5-10 分钟

![编译开始](https://i.loli.net/2017/08/07/5987eac266528.png)

![编译成功](https://i.loli.net/2017/08/07/5987f6bf102a1.png)


使用一键脚本编译的话，在 `dists/55-libev/bin` 中拿到 `ss-redir`，将他scp到路由器上，执行 `ss-redir -v`

![编译成功后运行ss-redir -v](https://i.loli.net/2017/08/07/5987e533d41aa.jpg)

出现以上则为成功

# 替换原插件并自行打包

Fork原插件repo

`base=shadowsocks`

`./ss/ssconfig.sh` 中将地址更换成自己的repo可以使用自动更新

`./version` 第一行是版本号  第二行是 tar.gz 的 hash值

`./bin` 55 的各种二进制执行文件，可以将刚才编译出来的东西都覆盖进来

`./webs/Main_Ss_Content.asp` 前端界面，加加密方式都在这里添加

