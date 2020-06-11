---
title: 群晖 NAS 打造自动电视录像服务器
categories:
  - dev
date: 2019-05-16 15:47:37
---


# 什么是录像服务器

录像服务器就是指将电脑接上电视天线，把电视节目自动录制下来并保存在硬盘上。在日本许多电视机都会自带录制功能，指定节目之后每周录制相同时间段的节目，或者指定条件，自动录制符合条件的节目。这次我们就要来尝试在NAS上搭建这么一个录制服务器。

# 为什么我们要搭建这样的服务器

既然电视机已经有了这样的功能，为什么还需要额外搭建这样的服务器呢。
电视机确实已经很强大，但我们也有串流需求，在家，在外边，在笔记本上随时随地都想收看录制的电视节目的话，只有一个电视机和收看设备的话很难做到。
搭建了这个服务器之后，我们还能实现在手机在电脑实时观看电视直播功能，画质当然与电视台一致。

# 为什么要放在NAS上

还不是为了拯救我那24小时开机的NAS但却只用来同步文件的电老虎吗

<!-- more -->

# 需要准备的东西

- 你的一台NAS
  - 我们需要在上边接上电视天线并运行录制程序
  - 需要能够运行Docker与虚拟机 （[你可以在这里查看兼容机型](https://www.synology.com/en-us/dsm/packages/Virtualization)）
- PLEX USB地上波天线 PX-S1UD V2.0
  - 一个作为录制电视的初始入门的USB天线
  - 不贵，约4530日元
  - 一根天线只能录制一个节目，需要录制多个电视节目可以买多个
  - [亚马逊购买链接](https://www.amazon.co.jp/gp/product/B0141NFWSG/)
- SCM IC读卡器
  - 用来读取 B-CAS 卡、1000日元左右
  - [亚马逊购买链接](https://www.amazon.co.jp/gp/product/B0085H4YZC/)
  - 注意这个发货并不一定是同一个品牌同一型号的读卡器，在之后的测试读卡器部分可能会出现一些问题，需要做好强大的心理准备
  - 也可以用SoftCAS，不过感觉不是很可靠以及有触犯法律风险，不在本篇讨论范围
- 大硬盘
  - 用来保存你的节目
- B-CAS 卡
  - 测试你可以从现在的电视上拿下来借用
  - 后期你可以从不用的中古电视或者DVD录像机上取下来借用
  - 亚马逊上可能有人出品，但买卖B-CAS卡可能触及法律风险需要注意
- 天线分波器 / 分配器、一根天线连接线
  - 把一根天线变成两根天线的东西，或者把地上波与BS/CS波分开的东西，根据个人需要进行购买，并不必须

# 注意

以下内容仅保证文章撰写时点的有效性，本文并不面向初级用户，请仅有一定动手能力以及自己能够解决途中出现的问题的读者进行搭建，并请自行负担出现的任何问题与责任。
电视节目的复制，传播可能触及相关法律，在使用时请十分注意。
由于参考了本文进行的操作发生的任何损失，作者不负担任何责任与赔偿。

# 架构说明

![架构](https://static.xingoxu.com/blog/sinaimg/005BYqpggy1g336pg2yuyj30fm0akgm2.jpg)

# NAS 准备

- 安装Docker
- 安装 Virtual Machine Manager
- 在虚拟机里安装Ubuntu 16或者18.04 或者随便你喜欢的发行版
  - 本文将以Ubuntu 18.04作为参考进行，其他发行版本请自行注意路径等
  - 但无论如何注意 Linux 内核版本必须高于3.15（原因下述）
  - 建议将虚拟机的Ubuntu设置成仅内网访问

# 准备天线

进入Ubuntu虚拟机，安装天线驱动，具体操作步骤：

```
$ wget http://plex-net.co.jp/plex/px-s1ud/PX-S1UD_driver_Ver.1.0.1.zip
$ unzip PX-S1UD_driver_Ver.1.0.1.zip
$ sudo cp PX-S1UD_driver_Ver.1.0.1/x64/amd64/isdbt_rio.inp /lib/firmware/
```
就算完成了

因为天线驱动最低支持3.15的Linux内核，而群晖的内核是3.10，导致没有办法将天线与调用天线驱动的内容放置在主机本体运行，才不得不使用了虚拟机这样的结构。

如果群晖之后升级到了3.15以上的内核，那可以尝试一下使用 https://github.com/Chinachu/docker-mirakurun-chinachu 的 Docker 镜像。

# 准备读卡器与B-CAS卡

在Ubuntu虚拟机内安装一些工具（之后也会使用到）与读卡器驱动

```
$ sudo apt-get install build-essential git cmake g++
$ sudo apt-get install pcscd libpcsclite-dev libccid pcsc-tools
```

安装完毕之后，使用 `sudo pcsc_scan` 命令，如果出现了 `Japanese Chijou Digital B-CAS Card (pay TV)` 类似的字样，那么B-CAS卡的安装和驱动就顺利完成了

笔者在这里碰到过两个问题，一个是B-CAS插反了，没读到芯片（汗），另一个是B-CAS卡无效问题。
B-CAS卡如果无效的话，是会顺利出线上述字样的，但是之后无法正常使用录制电视，可以将B-CAS插上电视看一下是否有错误提示。

另外如果使用的不是NEC读头的读卡器，可能会没法扫描出或者没法启动pcscd（参考的原文章作者碰到了这个问题），读者可以自行搜索相关方法或参考下方参考文章链接。

# 安装B-CAS解码用的相关库

由于日本地上波加密后进行广播，直接录制的话也没法播放和保存。因此我们需要在接收信号的同时使用B-CAS卡进行解码并无视加密。实现这个的是一个叫libarib25的库。

这个库需要编译。
```
$ wget https://github.com/stz2012/libarib25/archive/master.zip
$ unzip master.zip
$ cd libarib25-master
$ cmake .
$ make
$ sudo make install
```
完成安装

# 安装录像指令

我们需要安装recdvb这个录像指令，之后的录像管理都会调用这个指令来进行。
源代码是公开的但是没有放在github上，需要编译安装。

```
$ wget http://www13.plala.or.jp/sat/recdvb/recdvb-1.3.2.tgz
$ tar xvzf recdvb-1.3.2.tgz
$ cd recdvb-1.3.2
$ ./autogen.sh
$ ./configure --enable-b25
$ make 
$ sudo make install
```

完成安装。

安装之后就可以使用这个指令直接录制电视节目了。
比如
```
$ recdvb --b25 --strip <channel> <seconds> test.m2ts
```
channel根据地区，放送电波塔不同，数字不同，可以在[这里](http://www.maspro.co.jp/contact/channel.pdf)进行确认。

另外，可以使用
```
$ recdvb --b25 --strip --http <port>
```
指令，在本地起一个服务器推送流，
使用VLC或者IINA可以打开
```
http://[IPアドレス]:8080/[channel number]
```
channel number就是上边那个数字。

但，在这之前，
需要在Ubuntu虚拟机的`/etc/hosts`中设定连接者的ip域名（为了保证安全），
我的话并没有在外网访问Tuner Server的想法，并不需要这样的设定，因此修改源代码重新编译安装。

> 参考 https://nyanonon.hatenablog.com/entries/2015/11/17

按下 `Ctrl+C` 关闭推送流服务器。

# 安装mirakurun 建立Tuner Server

Mirakurun是一个Node.js编写的系统，具有同时多频道录像，多天线管理，优先度处理功能。
以及提供了各种API，以方便对应各种客户端的请求，在外网无法直接访问服务器也可以管理预约录制节目等。

安装Mirakurun可以参照
> https://github.com/Chinachu/Mirakurun/blob/master/doc/Platforms.md

以下内容方便参照部分搬运

## 安装 Node.js 10
> 请参照 https://github.com/nodesource/distributions/blob/master/README.md#debinstall

## 安装 PM2

```
sudo npm install pm2 -g
```

## 安装Mirakurun主程序

```
sudo npm install mirakurun -g --unsafe-perm --production
```

## 配置Mirakurun 

主要是对Tuner进行配置，
```
mirakurun config tuners
```

这里卡了很久，一直没法成功录制，但最终注释掉了一些奇怪的配置就搞定了

```yml
- name: PX-S1UD-1
  types:
    - GR
  command: recdev --b25 --strip <channel> - -
  isDisabled: false
```

```
mirakurun restart
```
重启mirakurun之后查看 pm2 log，如果没有错误正常开始Recording，表示搭建成功。

频道的话对Tuner设置成功之后会自己更新频道并更新节目列表，因此无需其他操作，一个天线的情况下耐心等待5分钟到10分钟左右即可。


到这里为止，我们所有服务端的设置基本就完成了，Mirakurun本身已经提供了API，可以通过API进行调用获得节目信息或者录制，也提供了Http流推送，来方便其他客户端进行录制。

API使用等可以参阅
> https://github.com/Chinachu/Mirakurun

# 安装Chinachu以及ffmpeg等软件

我们需要一个可视化客户端来帮助我们管理预约，对Mirakurun进行下达命令。
于是我们需要安装Chinachu。

由于这里开始，我们可以在Docker中也能完成这样的任务，搭建过程就省略，取而代之大家可以到

> https://github.com/xingoxu/docker-chinachu-vaapi-ffmpeg

查看DockerFile，或者参照DockerFile自行编写自己需要的脚本来进行搭建Chinachu。

如果读者按照我的镜像进行搭建，需要注意如下（自己编写Docker脚本时也需注意一些Docker问题）

- 时区问题
  - 需要挂载 `/etc/localtime:/etc/localtime:ro`
- Chinachu 的预约/设置数据
  - 挂载如下文件与目录以防止容器重建丢失数据、
  - ./chinachu/data:/chinachu/data
  - ./chinachu/rules.json:/chinachu/rules.json
  - ./chinachu/config.json:/chinachu/config.json
- 日志问题
  - Chinachu和pm2已经自带日志，就不需要Docker再帮我们兜一层日志了
  - 编写启动脚本 并设置入口点
```
#!/bin/bash

npm install
pm2-runtime processes.json > /dev/null
```

- 不要忘记挂载录像目录
  - /volume2/TVRecorded:/chinachu/recorded
- 不要忘记暴露端口

## 配置Chinachu设置

Chinachu的官方配置文档在这里
> https://github.com/Chinachu/Chinachu/wiki/Gamma-Configuration

基本没有什么太多需要注意的，将预设内容拷贝一份挂载进Docker就可以。

需要注意vaapi相关内容，下述。

之后就启动Docker容器吧，启动脚本就请各位自行挂载并启动了
也可以使用docker-compose来启动，`docker-compose up`

## 搭建成功

输入 NAS 地址和端口号后进入Chinachu界面并能看到节目表基本就算成功了。

![节目表](https://static.xingoxu.com/blog/sinaimg/6b8bbe7egy1g336sgurv5j224s17k1ky.jpg)


## 添加录制后转码脚本
录制后是m2ts的TS文件，我们可以利用 NAS 闲暇 CPU （x86架构的 nas 基本都具有硬件加速）将 TS 文件转换成 mp4，缩小文件体积保存等。

需要注意的是，如果我们需要使用vaapi（Intel CPU的硬件加速解码），那么我们在启动Docker时需要使用root权限，否则无法访问 `/dev/dri/renderD128`硬件。

但是录制后的文件的所有者就会变成root，其他应用程序读取或修改的时候会有一些问题，因此我推荐在录制后，转码后，可以自己编写脚本来重新设置权限。

```
$ chown <uid>:<gid> </path/to/file>
```

ffmpeg的相关参数我在这里贴出自己的进行共享，你当然也可以参照官方文档进行调整。

```
$ ffmpeg \
  -init_hw_device vaapi=intel:/dev/dri/renderD128 -hwaccel vaapi -hwaccel_output_format vaapi -hwaccel_device intel -filter_hw_device intel \
  -i /path/to/recorded/file \
  -analyzeduration 30M -probesize 30M \
  -vf 'format=nv12|vaapi,hwupload,deinterlace_vaapi' \
  -c:v h264_vaapi  \
  -threads 4 \
  /path/to/output/file
```

注：这里的环境PATH比较微妙，请一定使用绝对路径。

我写了一个 shell 脚本，将脚本命名成你喜欢的名称，假设 `afterRecord` ，不要忘记赋予执行权限，在 `config.json` 中修改

```
  "recordedCommand": "./userScripts/afterRecord",
```

你可以根据自己需求修改转码设置，或者添加LINE通知等功能，打造属于自己的录像服务器。

# 另外一些配置

## 给WebGUI设置访问权限

直接把 WebGUI 暴露在公网上还是很危险的，我们给界面添加一个密码输入，保证录像服务器只能自己用。

由于我用了 docker-compose ，可以很方便的添加 nginx 并设置反代

### 生成密码
```
$ sudo htpasswd -c /path/to/.htpasswd <username>
```

### 拷贝至服务器

在服务器上直接生成的可以跳过

### 修改nginx 配置 重启 docker

```
......
location / {
    proxy_pass   http://localhost:5601;
    auth_basic " Basic Authentication ";      
    auth_basic_user_file "/etc/nginx/.htpasswd";       
}
.....
```

```
$ docker-compose restart
```

刷新界面，此时应该被要求输入密码

## 添加索引

通过自己的脚本来创建的文件群晖是无法增加索引的，以至于在DLNA广播中无法显示我们转码或者录制的文件

假设我们的录像文件直接存储在`/path/to/record/folder`下面，我们可以编写脚本

```bash
#!/bin/bash

cd /path/to/record/folder

for mediafile in $(find /path/to/record/folder -maxdepth 1 -type f -mmin -<minutes> -not -name .DS_Store)
	do
		synoindex -a $mediafile
	done

```

其中第三行 `cd` 不可漏去，否则群晖不会在此文件夹中执行 `find` 。

保存脚本，假设 `reindexTVRecorded`，在 `控制面板 - 任务计划 - 新增 - 计划任务 - 用户脚本`，输入计划，输入任务运行脚本保存即可

![重新索引](https://static.xingoxu.com/blog/sinaimg/005BYqpggy1g336q15opxj31bx0u0wmy.jpg)

# 存在的问题（没有实现的需求）

- 字幕
  - 有部分电视台同时放送字幕，录制的TS是有字幕的，可以在VLC确认到
  - 但没有办法使用网上的通用方法比如assdumper提取出来，提取出来是空的
  - 暂时没有尝试使用 `Caption2Ass.exe`等windows程序
- 多国声道
  - 存在两个问题
  1. 使用双声道在单声道中分别放送两个国家的音源（多存在于NHK新闻）
  2. 使用多个流推送多国声道
  - 无论哪种情况，使用了网上的无论哪种包括
    `-filter_complex channelsplit` 或者
    `-dual_mono_mode main`
    都无法成功解决


对以上问题如果有办法解决的读者请联系我 m__m

# 结束

在手中有NAS的情况下1w不到搭建一个这样的录像服务器还是性价比很高的，之后就可以随时随地观看一些并不那么需要大屏幕观看的内容。

文章中还是充满了自己自身的需求，另外文章编写的时候已经间隔搭建完差不多有一个月左右的时间，有些细节可能没有办法很到位描写清楚，如果你有什么问题，可以在评论区留言。

# 参考

> [Raspberry Pi 3+Chinachuで地デジ録画サーバー構築](https://qiita.com/shotasano/items/3809b8f3e0b62d51d3c3)
> [Linuxの自宅サーバをテレビ化して家中どこでもテレビが見れる環境を作ろう(2)](https://ywnb.net/p/201612/3264)
> [通过Nginx反向代理配置Basic Authentication实现kibana的访问安全](https://www.jianshu.com/p/e62c2a1cd3ab)
> [2017/01/30 時点での録画サーバ構築手順](http://arc680.hatenablog.jp/entry/2017/01/31/005135)