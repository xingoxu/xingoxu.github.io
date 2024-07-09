---
title: 聊聊管理番剧动画片这件事
published: 2024-07-08
# description: ''
image: 'https://staticimg.xingoxu.com/i/4078851e-1b0b-49d0-94b6-6420b3353faa.jpg'
tags: 
  - notes
# category: ''
draft: false 
---


我刚开始看动画的时候也是B站或者优酷这些流媒体看的，最开始从国外录电视，翻译添加字幕重新压制再上传各个视频网站然后被我们所观看到。之后就各种政策变化，以及有了一些版权意识之后，一些没有引入版权，又或是动画本身有一些镜头并不符合国内情势被剪辑的事情发生之后，我看动画的方式就从在线变成了找资源下载看了。而后又对DVD，高清，蓝光等事情产生了兴趣，以及喜欢的动画如果想再回去看看的话又不想每次再翻回去看这一点之后开始研究 PT 等等的事情。

与此同时也购入了人生第一台 NAS ，群晖ds215j之后，到我卖掉我的DS916这期间，找番看番离不开动漫花园和幼儿园等网站，但也只停留在下载，使用 PotPlayer / IINA 播放阶段，即使之后一个人生活也是在客厅里放了一台电脑接上电视机观看。

搬新家之后买了很多新的家用电器，攒了很多家电积分后没有想买的东西了，于是去买了个原价率最高的「Chromecast with Google TV」来玩，但接上后发现完全就是一个播放流媒体的工具，然而下载党 & 抠逼并不愿意为流媒体多付一分钱的情况下研究播放下载了的番剧，但群晖自己的 Video Station 会预转码占用硬盘空间，加上也没有系统性的整合剧集非常不好用，以前对转码的认知也停留在很肤浅的阶段，认为转了码画质就低下了，所以大多数情况下也还是继续打开电脑来播放下载的动画。

又过了两三年左右我自己使用 OMV 为底组装了自己的 NAS，一方面想着如何盘活客厅里的 Chromecast ，另一方面从开电脑到打开共享文件夹从乱七八糟的PT的文件夹名找到自己要看的番剧到找字幕解压再看其实步骤很多，对心理负担很大，会容易让自己不太想看电视了。因此能否使用简单操作快速播放 NAS 中的番剧文件，并且还要能实时转码推流，并保持做种是做这件事情的目的与动力。

以上就是这篇文章的背景，那么开始动手。

<!-- more -->

# jellyfin 

大数据果然没有让人失望，在组装 NAS 的时候就给我推送了很多有关这方面的文章，而我让我了解到了 jellyfin 这样东西。

关于 jellyfin 是什么，大家 Google 一搜就能搜出来了，他对我的好处无非就是
- 实时推流
- 支持外挂字幕
- 喂影片数据简单

jellyfin 如何搭建这个应该没有什么问题吧，最简单的 docker compose 一起就好了，唯一要注意的是硬解的话 docker 内驱动要装好
我现在用的是 [nyanmisaka/jellyfin](https://hub.docker.com/r/nyanmisaka/jellyfin/) 的镜像，已经带了 Intel QSV 驱动，但是最近 jellyfin 升级到了10.9+，而他的镜像还没更新，也许之后再不更新的话我可能就会换回 linuxserver 镜像了。

## 插件

- [Bangumi](https://github.com/kookxiang/jellyfin-plugin-bangumi)

这个插件可以让jellyfin自己搜索到 bgm.tv 上的数据下载展示，而不需要手动去喂数据制作 nfo 文件了。

- Kodi Sync Queue

这个插件是用来同步 Kodi 和 jellyfin 的内容，在 kodi 中也能看 jellyfin 的内容，具体在后边也会说

# 硬链

那么 jellyfin 有了之后我们不能让 jellyfin 在原来的文件夹里大做文章，首先问题是很有可能无法识别，如果下载下来的视频文件名太过奇葩，jellyfin其实有可能无法识别集数。
但最要命的，其实是那些个PT文件夹名，那种真的是jellyfin完全查不到的话也就不会jellyfin中显示，或者乱显示了。同时源文件夹也会乱乱的，整理起来也会更乱。
还有一些什么蓝光带的无字幕OPED特典啊，访谈啊什么的也会被jellyfin抓取，但又识别不出来的话或者被乱识别的话也没有办法在jellyfin自己的系统中好好显示。

那么最妥当的办法是，硬链一个出来之后把那些不要的文件删除，只留下推流的东西就可以了，如果识别不出来再把文件名改一改就可以了。

首先是硬链，我现在用的工具是 [hlink](https://github.com/likun7981/hlink)，配置好源文件夹和目标文件夹后点一下启动几秒钟就做好了几千几万个文件的硬链，同时默认配置已经是符合jellyfin的那些文件了，其次这个工具可以配置缓存，硬链过一次之后，源文件不改的情况下，下次启动任务后都不会再硬链过去，也就是不会把你整理过了的文件再让他们重头多来一次。


# 重命名

大多数情况下，jellyfin 已经可以识别季数集数，但日本的动画其实很不系统，有的时候算季，有的时候一开始就说要做多久的动画所以就没有季，有的时候呢换个名字出续集，bgm.tv 的数据和老外的AniDB的数据也有时并不一致。季的问题还算好，总集篇的问题可真让人头大，有时算 0.5 集，有时算中间集，有时不算集。各个字幕组或者是压制在做的时候也是各做各的。

因此有这样那样问题的存在也就导致了并没有办法可以全自动的去对这个动画重命名，但能够用脚本去做的事情还是自动化掉，这样看剧才能看得舒服。

## 收拾 Extra

首先要收拾的就是那些OPED啊，送的特典视频啊，什么访谈啊，什么CM啊，新建一个Extra文件夹扔进去就行了（不看的话删了也可以）（我相信没什么人会看的）。

## Episode-ReName

一般来讲粗看一下如果集数和bgm.tv的一致的话把字幕文件和视频放在一起，文件名保持一致也就不需要重命名了，但有的时候首先视频的集数要是和bgm不一样，或者季不一样，又或者字幕文件和视频文件不是一个文件名的话，那我推荐这个一键脚本，做的算比较好的，把要重命名的视频文件和字幕文件放在s1或者season 1类似于这样的文件夹下，然后执行脚本就行了。这个脚本的效果就是会把 `ajfkdjkfjdlajf 01 jfkdajfkd.mkv` 重命名成 `S01E01.mkv`，字幕的话，`jlkf23jinvnsvpsa 01 fjdklajfkl.chs.srt` 重命名成 `S01E01.chs.srt`，保留语言并且和视频一致而且可以让 jellyfin 识别。

我一般是用 python 容器做这样的事情

```bash
git clone https://github.com/Nriver/Episode-ReName.git


docker run --rm -it \
-v /srv/mergerfs/all_disk_pool/jellyfin:/jellyfin \
-v /path/to/anime:/path/to/anime \
-v $(pwd):/rename \
--workdir="/rename" \
python:3-alpine \
sh -c "python3 -m pip install -r requirements.txt --user && pip3 install py-rename && sh"
```

`py-rename` 这个包我之后再提，但这边你应该注意到我用的是 mergerfs，而硬链在 mergerfs 上跨硬盘也能创建。

然后对准要重命名的文件夹

```bash
python3 EpisodeReName.py --overwrite 0 --path "/jellyfin/.../s1"
```

这边 `overwrite` 参数指定之后，如果有两个文件都被重命名成了相同集数，也就是识别错误了的话，会取消重命名操作。

另外他还支持偏移集数，比如刚才说到其实是第二季分开的，但是字幕组在做的时候连续编号了，又或者反过来，又或者总集篇没算进集数等等，可以参考[这里](https://github.com/Nriver/Episode-ReName?tab=readme-ov-file#-%E5%A4%9A%E5%AD%A3%E7%95%AA%E5%89%A7tmdb%E9%9B%86%E6%95%B0%E9%80%82%E9%85%8D)，写个all.txt单独批量增加集数重命名一下。

## py-rename

然后是 `py-rename` 这个包，其实是单纯的正则匹配重命名，专治👆🏻这个匹配不出来或者匹配错的，手动写规则去重命名。

cd 到要修改文件名的文件夹底下，首先预览

```bash
py-rename -n rename '(.+)第(\d{2})話([^.]+)\.([\w\.]+).ass' 'S01E\2.\4.ass'
```

然后去除 `-n` 参数就会重命名了

```bash
py-rename rename '(.+)第(\d{2})話([^.]+)\.([\w\.]+).ass' 'S01E\2.\4.ass'
```

还是比较安心的👍🏻

# Kodi

到这边 jellyfin 自己的配置就可以了，这个时候在任何设备打开 Chrome 就已经可以看了，但我的最终目的还是要在 Chromecast 上串流。

在 Android TV 上有几个选择，

- [Jellyfin for Android TV](https://play.google.com/store/apps/details?id=org.jellyfin.androidtv)
- Kodi + Jellyfin
- Jellyfin 在安卓上的客户端去强行安装到 Android TV 上（例如 [Findroid](https://github.com/jarnedemeulemeester/findroid)）

## Jellyfin for Android TV

官方客户端其实还可以的，我试了一下到目前为止没什么问题，属于保底手段吧。但感觉好多不需要转码的流也转了码，或者字幕效果其实不是很好可定制型比较差，主打一个能看。

## Jellyfin for Kodi

Kodi 的话本身播放器属于就很强大，可以配置源

- https://kodi.jellyfin.org/

加入源之后再从 zip 安装扩展 Kodi Jellyfin Addons / Jellyfin for Kodi

另外官方推荐在服务器上安装 `Kodi Sync Queue` 这个插件（在刚才安装bgm.tv插件的地方），可以保持库的同步。

Kodi 20 + 10.8.3 的时候我配置好看了，也没什么问题， 但最近 Kodi 升级成了 21 之后，官方插件可能也升级了吧，有些动画没有了声音，在界面里开启强制转码也不行，我怀疑是音频部分并没有写进判断语句导致音频流不转码。。。所以暂时这个作罢。

## Findroid

是最近新出的 Android 第三方 jellyfin 客户端，尝试了一下使用 Native 的播放器的话，画质给转的好多马赛克，开启了 mpv 播放器之后，画质是有了但卡的不行，卡帧。那只好冷藏起来咯。


# 参考

本文鸣谢如下先辈提供情报

> [理想影音库构建之路（二）：关于老番管理这件事](https://blog.kaaass.net/archives/1607)
> [安卓TV端Kodi部署Jellyfin，使用Jellyfin打造最强媒体中心（篇二）](https://post.smzdm.com/p/a99vlpmp/#cl_3)
> [py-rename](https://github.com/jinalharia/py_rename)
> [Episode-ReName](https://github.com/Nriver/Episode-ReName)
