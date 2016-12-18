title: 解决一个OTA后安装Xposed发生No space left on device错误
categories:
  - tricks
  - android
date: 2015-12-31 18:22:18
---

# 遇见情况

Android 5.0.1->6.0.1 OTA并root后安装Xposed框架，却提示报错：
> cp: write error: No space left on device

<!-- more -->

第一次看见这样的错误提示，觉得很奇怪，明明手机剩余空间还有一半以上，后来爬贴才发现system分区分开来的，/system/App分区的可用空间居然小于20MB了

好吧，google也是可以的，只能删除一些谷歌的全家桶了

# 解决方法
使用任意可使用root权限的文件管理器，定位到/system/App下删除不使用的app的文件夹即可，腾出20M以上就可以了

# Reference
> [解决安装 XPOSED 时遇到的cp: write error: No space left on device](http://bbs.gfan.com/android-8198870-1-1.html)