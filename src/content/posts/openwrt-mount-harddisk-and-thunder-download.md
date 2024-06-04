---
title: openwrt 挂载硬盘以及迅雷下载
published: 2015-03-03 03:27:12
tags:
  - maintaince
  - router-config
---

迅雷下载模块：
http://www.right.com.cn/forum/thread-157967-1-1.html

luci界面：
http://www.right.com.cn/forum/thread-135833-1-1.html
 
samba共享：
 
http://www.right.com.cn/forum/thread-151546-1-1.html
 

opkg update
opkg install luci-app-samba

修改/etc/config/samba
增加以下内容：
 
config sambashare
option ‘name’ ‘share’
option ‘path’ ‘/mnt’
option ‘read_only’ ‘no’
option ‘guest_ok’ ‘no’
option ‘create_mask’ ‘0700’
option ‘dir_mask’ ‘0700’


修改/etc/samba/smb.conf.template
 
guest ok = no
invalid users = root


修改后执行命令：
/etc/init.d/samba start
 
samba添加用户： 

smbpasswd -a root
设置密码
 
 
挂载硬盘：

opkg install以下包
 
kmod-usb-storage
kmod-usb-storage-extras 可选
block-mount
kmod-fs-ext4
kmod-fs-ntfs 只读不可写
 
插入记得挂载，putty 命令
mount /dev/sda(x) /mnt/sda(x)
卸载umount /dev/sda(x)
 
 
 
迅雷离线教程：
http://www.right.com.cn/forum/thread-115029-1-1.html
https://chrome.google.com/webstore/detail/thunderlixianassistant/eehlmkfpnagoieibahhcghphdbjcdmen
 