---
title: Android 网卡（主机）显示名更改
published: 2015-03-02 01:45:17
tags:
  - tricks
  - android
---

逼格更高，路由器里显示手机名字2333333

<!-- more -->

 

1. 使用R.E.管理器，找到/system/build.prop文件，使用文本编辑器打开，在最后一行添加下面一行内容：

net.hostname=yourname

2. 重新启动手机

3. 登录到无线路由，看看dhcp的客户端列表是不是已经变了。
 

 

 

**注意！中间绝对不能有空格！可以有下划线和中横线**
