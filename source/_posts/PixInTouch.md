title: PixInTouch发布页面
categories:
  - works
  - csharp-wpf
date: 2015-12-21 13:42:54
---


作为一个花了三个礼拜稍微有那么点心思的~~其实花了很多想法，然而根本看不出这是一个花了心思的作品~~，还是给他开个页面用来发布吧！

<!-- more -->

![](https://dn-xingoxu.qbox.me/works/pixivDownloader/screenshots/Capture3.PNG)


## 需求：
.Net Framework 4.5
（windows xp将不受支持，windows 7/8用户如您不确定是否拥有这个环境，请您移步[安装说明与使用](#instruction)）

## 功能：
1. 按您关注的作者的新作品/您的收藏（公开/非公开）进行浏览作品
2. 按您关注的作者（公开/非公开）的作品/收藏进行浏览作品
3. 按pixiv官方榜单的呈现方式进行浏览作品
4. 搜索某个关键词（以列表方式呈现不理想），以作者id浏览他的作品/收藏
5. 浏览到的作品集中、批量下载（原图）
6. 针对某幅作品的单独下载，漫画作品的挑页下载
7. 集中的下载管理器
8. 退出时的未下载完保存/手动保存未下载列表
9. 自定义的背景图与颜色

### 注意：
针对动图的下载不够完善，移动端的api只能获取到600x600的动图帧，如果要下载原图，还是需要登录网页版手动爬图！请您知悉！

## 下载：
* 作为一个github的开源项目，该软体的源代码托管在[这里](https://github.com/xingoxu/pixivDownloader-WPF)，您可以时刻关注这个项目的最新发展及手动修改编译打造属于您自己的扒图器！
* 您也可以点击[这里](https://github.com/xingoxu/pixivDownloader-WPF/releases)获得我为您编译的最新版本！

### 当前最新版本
[v0.9 beta4 may be the last one](https://github.com/xingoxu/pixivDownloader-WPF/releases/tag/v0.9beta4)
What's new?
- 下载前的确认对话框的自定义显示
- 移除了一些我们完全不需要的文件
  
[v0.9 beta3 given name](https://github.com/xingoxu/pixivDownloader-WPF/releases/tag/v0.9beta3)

What's new?
- 下载前的确认对话框自选文件夹
- 扒图器的更名与添加图标

[v0.9 beta2 little stabler?](https://github.com/xingoxu/pixivDownloader-WPF/releases/tag/v0.9beta2)

What's new?
- 修复可能导致空列表的默认参数问题

[v0.9 beta Acting Like a 5-year-old baby](https://github.com/xingoxu/pixivDownloader-WPF/releases/tag/v0.9beta)

What's new?
- 首次发布功能

<span id="instruction"></span>
## 安装使用与说明

本软体无需安装，直接打开pixiv_downloader.exe即可运行

windows 7/8用户如您不确定是否拥有.Net Framework 4.5的环境，请您按如下提示检查：
开始菜单（Start）->搜索（Search）->控制面板（Control Panel）->程序与功能（Programs and Features）
![Programs and Features](https://dn-xingoxu.qbox.me/works/pixivDownloader/setup-instructions/Capture.PNG)
在程序与功能面板的右上角进行搜索：.net framework
如您发现类似于如下的提示，则您已经安装了4.5版本
![search in Programs and Features](https://dn-xingoxu.qbox.me/works/pixivDownloader/setup-instructions/Capture2.PNG)

如您发现并没有.Net Framework或是版本不足4.5，请您移步至：
- [Microsoft .NET Framework 4.5.1 (Offline Installer) English](https://www.microsoft.com/en-us/download/details.aspx?id=40779)
- [Microsoft .NET Framework 4.5.1 (Offline Installer) Chinese](https://www.microsoft.com/zh-cn/download/details.aspx?id=40779)
进行安装

如您有使用的问题，欢迎在下方进行留言，我会回复！

