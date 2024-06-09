---
title: 两个Android Chrome的小坑
published: 2015-04-22 01:49:26
tags: # ['dev', 'HTML/CSS']
  - dev
  - HTML CSS
---

背景不支持fixed属性
标题栏沉浸
<!-- more -->

# 背景不支持fixed属性

安卓浏览器/安卓Chrome中对于background已经移除了fixed属性

解决方法：

* 第一种：

对div进行fixed

* 第二种（适用于body background）：

```html
html{
 height:100%;
 min-height:100%;
 }
body{
 min-height:100%;
 }
```

# 标题栏沉浸

支持Android 5.x下Chrome的标题栏沉浸颜色

![安卓Chrome沉浸主题色](https://ooo.0o0.ooo/2017/05/24/592546e52c39a.png)
![安卓Chrome沉浸主题色-任务列表显示](https://ooo.0o0.ooo/2017/05/24/592546f366eaa.png)

header中加入以下代码，选个喜欢的颜色

```html
<meta name="theme-color" content="#ffffff">
```

```html
<link rel="icon" sizes="192x192" href="nice-highres.png">
```

# Reference
> [支持Android 5.x下Chrome的标题栏沉浸颜色](http://ippotsuko.com/support-for-theme-color-in-chrome-39-for-android/)
> [background-size: cover not working in portrait on Android tablet](http://stackoverflow.com/questions/14876035/background-size-cover-not-working-in-portrait-on-android-tablet)