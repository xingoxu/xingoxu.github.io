title: WNDR4300救砖（openwrt）
categories:
  - maintaince
  - router-config
date: 2015-09-15 20:19:41
---

记一次作死把路由如何弄砖，又是如何救回来的过程

<!-- more -->

# 本教程适用于：
1. 砖前为openwrt
2. 救后为openwrt
3. 因为刷了sysupgrade变砖的

其他情况本救砖方法不一定有效，请三思而尝试

# 怎么变砖

14.07大容量固件下用15.05官方升级包升级，变砖

尼玛，这个大容量固件是你们自己官方出的好伐！！！

下次再也不敢盲目尝鲜了！ ![新浪表情-再见](http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/70/88_thumb.gif)


# 救砖方法

> 救砖方法参考：http://blog.csdn.net/zhiyuan411/article/details/41399273

1. 下载OpenWrt刷机包（要完整镜像，img的那种）：http://downloads.openwrt.org/ 
2. 下载TFTP软件：http://www.wayos.cn/down/other/tftp.rar
3. 把电脑用网线连在路由器，电脑改为固定IP：192.168.1.2，子网掩码：255.255.255.0，ip网关：192.168.1.1
4. WNDR4300用电源键断电
5. 用细针等物件按住reset键不放（reset键在4300的底部，序列号的的最左侧，是个小圆孔，标有：restore factory settings）
6. 按下4300电源键，通电
7. 直到电源灯由黄色闪烁到绿色闪烁，松开reset
8. 使用TFTP软件上传固件：路由器IP填192.168.1.1，密码留空，固件文件选择刚刚下载的OpenWrt刷机包那个img文件，点击“刷新固件”
9. 等待TFTP软件显示绿色圆点，表示刷机成功。再等待几分钟，就可以看到电源键变绿，4300起来了。
10. 此时，局域网已经支持DHCP，并可以通过 http://192.168.1.1 来进入luci管理平台，广域网口插入网线，设置后可以上网。

<br />

注：恢复后没有5G的配置项，解决办法：已经正常运行时，把4300断电，然后插电重启。就会看到5G的配置项。

# 最后再记

恢复后什么都没有了，要重头配置，在配置的过程中还发现了自己以前记录的一些问题

1. 除了要安装那些包外，还要安装ip iptables-mod-tproxy这两个包
2. ss包从luci开发者的github界面进入，不要从其他地方进入，傲娇的很luci。。。记得选择spec优化版本（？）
3. ss更新过后luci界面开发者就将地址只支持数字ip了，不再支持域名了（明明人家windows客户端优秀的不行
4. 尽管是2.3.2，但是新安装的（还是15.05的openwrt上）并没有看到UDP中继，然而ignore.list倒是要自己下载。。。
5. ignore.list下载方式在最下面
<br />

```shell
wget -O- 'http://ftp.apnic.net/apnic/stats/apnic/delegated-apnic-latest' | awk -F\| '/CN\|ipv4/ { printf("%s/%d\n", $4, 32-log($5)/log(2)) }' > /etc/ignore.list
```

> luci-ss界面关于不支持域名的issue：https://github.com/shadowsocks/openwrt-shadowsocks/issues/124