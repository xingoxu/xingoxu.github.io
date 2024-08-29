---
title: 2024-jellyfin-10.9-update
published: 2024-08-28
# description: ''
# image: ''
tags: 
  - notes
# category: ''
draft: false 
---


前两天刚谈到用 [nyanmisaka/jellyfin](https://hub.docker.com/r/nyanmisaka/jellyfin/) 的镜像做的 Jellyfin，但是 Jellyfin 的 Android TV 版本升级到最新之后只支持 10.9+ 以上版本的服务端，虽然也能把 Android TV 版本的 Jellyfin 降级到 10.8 兼容版本，但 Jellyfin 更新勤快，降级 TV 版本只是最后保底之策，将来如果有其他新特性，那么长痛不如短痛赶快升级到最新版本才是上策。

<!-- more -->

## TL;DR

从零重新根据向导起环境 + 设置库才能获得最正常的体验

## 尝试直接升级到 [jellyfin/jellyfin](https://hub.docker.com/r/jellyfin/jellyfin) 镜像

nyanmisaka 镜像是在官方镜像上进行的修改因此数据目录和官方镜像一致，可以直接升级，docker-compose 修改 image 值，compose up 一下就完成了。

但是发生了以下问题

1. 播放时不调用 GPU 加速，CPU 100%
2. 只有 Android TV 客户端在播放时中文字幕乱码，表现为 口口口
3. 部分番剧的 Extra 消失，或者上层文件夹并不是 Season X 的标准文件夹也会被吸收进正片一个文件夹并被刮削成标准集

### 播放时不调用 GPU 加速，CPU 100%

我的 CPU 是 10代 UHD 630，在查看 [Intel 支持](https://www.intel.com/content/www/us/en/docs/onevpl/developer-reference-media-intel-hardware/1-1/overview.html#CODECS-ENCODE-SUPPORT-FOR-10TH-GENERATION-INTEL-CORE) 后发现并不支持 AV1 的解码和编码，因此要将硬件加速部分的 AV1 的解码和编码部分的对钩去掉。

![硬件加速设置](https://staticimg.xingoxu.com/i/0bf96fe2-3107-4b20-a446-e8131fe1998c.jpg)

客户端再次播放时服务端调用了GPU，CPU的占用也得到了改善

### 中文字幕乱码

在 [nyanmisaka/jellyfin](https://hub.docker.com/r/nyanmisaka/jellyfin/) 的镜像的[说明](https://www.chiphell.com/thread-2375777-1-1.html)中，已经添加了中文支持，而且我也为了部分字幕的效果有设置了备用字体。

但在原版镜像下，即使我启用了备用字体，字幕还是乱码。

然而在网页端和在官方 Android App 以及第三方 Findroid 播放时没有乱码。

反复查看[官方文档](https://jellyfin.org/docs/general/administration/troubleshooting/#text-not-rendering-properly)也表示，字幕依赖客户端字体，乱码在开启备用字体后就能解决。


最后抱着尝试性的心态在容器内安装了 CJK 系统字体，重新启动 jellyfin 服务端后，Android TV 客户端已可正常渲染字幕。

```bash
apt-get install fonts-noto-cjk-extra
```

### Extra 文件夹不显示

没找到解决方案，没有人提 Issue 也很奇怪

## 更换为 [linuxserver/jellyfin](https://hub.docker.com/r/linuxserver/jellyfin) 镜像

因为用户权限问题，最后还是更换为了 linuxserver 的镜像

但是数据文件夹结构不同，首先参照[此 issue](https://github.com/jellyfin/jellyfin/issues/3717) 手动调整目录结构

然后修改 `docker-compose.yml`，添加安装字体包


## 最后

正常启动后发现无法修改库的任何配置，最后删除了数据文件夹重新扫描重建了库（寄）


