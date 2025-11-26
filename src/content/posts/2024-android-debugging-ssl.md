---
title: 2024 年如何中间人 Android 网络请求
published: 2024-07-09
# description: ''
# image: ''
tags:
  - dev
  - android
# category: ''
draft: false
---

不像 iOS，在 Android 下，设置完了代理并安装与信任了自签证书后并不能让 Apps 信任被中间人了的网络请求。这篇文章是记录了 2023 ~ 2024 年我是如何中间人 Android 的网络请求的。

<!-- more -->

# 背景

Android 从6版本开始，系统就会默认所有 Apps 的 https 网络请求都变成了只信任系统区证书，而不相信用户自己安装的证书。这提升了 Android 设备的安全性，但也让我们无法再简单的窥探 Apps 的请求内容。

以前我会使用 Xposed Framework，但 Xposed 好久不更新，后继的 LSPosed 等等也是风波不停，只是为了中间人 app 的请求，是否有更优雅的方式。

# [apk-mitm](https://github.com/shroudedcode/apk-mitm)

这是唯一非 root 也能使用的工具，原理是反向apk后植入hook并动态信任 https 请求。

好处

- 不需要 root

坏处

- webview 的内容无法被中间人
- App 可能并不会按预期的工作

# [Frida](https://frida.re/docs/android/)

专为反向而生的 Frida 在运行时hook内存并强行信任证书。

# 手机端准备工作

下载对应的 binary 推送到手机

```bash
# 16.1.8 改成对应版本
adb push ./frida-server-16.1.8-android-arm64 /data/local/tmp
```

切到 root 权限进入 adb shell

```bash
adb root && adb shell "chmod 755 /data/local/tmp/frida-server*" && adb shell "/data/local/tmp/frida-server-16.1.8-android-arm64 &"
```

要注意 Pixel 等手机有时可能在 adb root 时报错

```txt
adbd cannot run as root in production builds
```

使用 su -c 或者一行一行手动敲命令↓

```bash
adb shell
# 进入 Android shell后切换超级用户模式
su
# 付与 frida server 执行权限
chmod 755 /data/local/tmp/frida-server*
# 启动 frida server
/data/local/tmp/frida-server-16.1.8-android-arm64 &

# 按 Control + C退出
# 敲两次 exit 退出 shell
exit
exit
```

至此手机端的准备工作就完成了

# 电脑端准备工作

电脑端也要安装命令行，首先安装 Python 3后，执行

```bash
pip install frida-tools
```

结束

# 启动脚本

Frida 服务器只是监听内存并劫持，在启动时也需要指定动作，
我搜到的一个比较全的脚本是 [frida-multiple-unpinning](https://codeshare.frida.re/@akabe1/frida-multiple-unpinning/)

启动命令

```bash
# apk.packagename是包名
frida -U -f apk.packagename --codeshare akabe1/frida-multiple-unpinning
```

同时，Frida 也支持 Work Profile或多用户，添加`--aux="uid=(int)10"`参数来启动

```bash
frida -U --aux="uid=(int)10" -f apk.packagename --codeshare akabe1/frida-multiple-unpinning
```

10 代表 Work Profile，多用户的情况下可以查看用户 uid 后打开即可。

执行命令后应用自动启动，此时 SSL 已经被绕过并可以使用 Charles 等分析请求内容。

# References

> [It's all about Bypassing Android SSL Pinning and Intercepting Proxy Unaware applications.](https://kishorbalan.medium.com/its-all-about-android-ssl-pinning-bypass-and-intercepting-proxy-unaware-applications-91689c0763d8)  
> [Android | Frida](https://frida.re/docs/android/)
