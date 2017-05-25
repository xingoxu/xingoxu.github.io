title: 重配置WNDR4300手记
categories:
  - maintaince
  - router-config
date: 2015-12-31 18:20:58
---
给路由器迁移的时候，发现了一个SS的问题，导致自己踩雷又从头配置了一遍。。。（作死小能手前来报到）

<!-- more -->

# 缘由
今天是美好的12.31号，也是在学校的最后一个学习日（下周起为考试周），心情异常高兴，自然是要把学校那个很好的路由器带回家咯，虽然曾有过一次不同环境配置的经验，但今天居然掉坑了
## 环境说明
家庭：上海电信光纤接入，光猫自带路由，不可更改，想要自接无线路由出墙需要无线路由再分配一次DHCP
学校：上海电信光纤接入，光猫不自带路由，自己拨号

---

到家直接更改接口处的LAN与WAN，分别改成如图所示：
![LAN](https://ooo.0o0.ooo/2017/05/24/59254648ca777.png)
![WAN-1](https://ooo.0o0.ooo/2017/05/24/592546679bdb8.png)
![WAN-2](https://ooo.0o0.ooo/2017/05/24/5925467479b82.png)

172.168.x.x是很容易想到的除开192的一个地址，虽然属于B类地址，然而现在并没有被卖掉，也被大家广而使用，因此也并没有什么特别的不妥，大不了以后要是有人指向他了，咱就改成192之后的呗

改完之后发现网能上了，也能顺利出去了，但踏马的路由器设置进不去了，诶怎么都进不去，把网断了，踏马的还是进不去，断网前不停地转圈圈，一直<code>waiting For 172.168.1.1...</code>断网后显示<code>Connection Reset</code>，亲你是在逗我吗！这叫个什么事！什么叫网上的去路由器设置上不去，狗带！

仔细想想，想来想去，还是没有想出个啥道理，以为自己哪里设置没改过来，只好重置

# 重配置

## 语言的更改
重置完后的第一件事情是要将英语改成中文，虽然咱英文不烂，但网络有些专有名词看起来再过一遍脑子还是挺吃力的，关于为什么要改语言，就要追溯到上一个作死贴[WNDR4300救砖（openwrt）](https://blog.xingoxu.com/2015/09/router-rebuild-2015/)![新浪 - 笑哭](http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/34/xiaoku_thumb.gif)，15.05官方固件踏马没带中文！话题回来，首先我们要做的是

```
opkg update
```

但这个狗带的电信尼玛又作死了！openwrt.org开不开，奇慢无比，而且15.05的openwrt在配置里可以看到是有签名校验的，想了很久，去搜了一下可行性，最后还是用镜像站吧，还是ustc的大学站，不错啊，你们这个镜像站啊，excited！啧啧

将软件包配置改成如下：

原：

```
dest root /
dest ram /tmp
lists_dir ext /var/opkg-lists
option overlay_root /overlay
src/gz chaos_calmer_base http://downloads.openwrt.org/chaos_calmer/15.05/ar71xx/nand/packages/base
src/gz chaos_calmer_luci http://downloads.openwrt.org/chaos_calmer/15.05/ar71xx/nand/packages/luci
src/gz chaos_calmer_packages http://downloads.openwrt.org/chaos_calmer/15.05/ar71xx/nand/packages/packages
src/gz chaos_calmer_routing http://downloads.openwrt.org/chaos_calmer/15.05/ar71xx/nand/packages/routing
src/gz chaos_calmer_telephony http://downloads.openwrt.org/chaos_calmer/15.05/ar71xx/nand/packages/telephony
src/gz chaos_calmer_management http://downloads.openwrt.org/chaos_calmer/15.05/ar71xx/nand/packages/management
option check_signature 1
```

改后：

```
dest root /
dest ram /tmp
lists_dir ext /var/opkg-lists
option overlay_root /overlay
src/gz chaos_calmer_base http://mirrors.ustc.edu.cn/openwrt/chaos_calmer/15.05/ar71xx/nand/packages/base
src/gz chaos_calmer_luci http://mirrors.ustc.edu.cn/openwrt/chaos_calmer/15.05/ar71xx/nand/packages/luci
src/gz chaos_calmer_packages http://mirrors.ustc.edu.cn/openwrt/chaos_calmer/15.05/ar71xx/nand/packages/packages
src/gz chaos_calmer_routing http://mirrors.ustc.edu.cn/openwrt/chaos_calmer/15.05/ar71xx/nand/packages/routing
src/gz chaos_calmer_telephony http://mirrors.ustc.edu.cn/openwrt/chaos_calmer/15.05/ar71xx/nand/packages/telephony
src/gz chaos_calmer_management http://mirrors.ustc.edu.cn/openwrt/chaos_calmer/15.05/ar71xx/nand/packages/management
option check_signature 1
```

好噜，上网再搜了一下，luci的最新的中文界面语言包的包名叫做<code>luci-i18n-base-zh-cn</code>，got后直接

```
opkg install luci-i18n-base-zh-cn
```

就好啦，安装基本包的时候也使用这几个镜像站，等到我们装完ss后再改回来升级安装包吧

## 打不开172.168.1.1原因的发现

之间一路顺风，安装各种依赖包ss chinadns什么的，这个因为之前 ~~作死过很多次~~ 装过很多次，所以还是比较知道的，待老夫配置好ss后启动试试效果，结果踏马的又开不开我的路由器配置界面啦！情况和开始的一样！哇擦！才想起来，172.168.x.x的地址会不会并没有被排除掉然后被ss接管了直接转发出去了，幸好这个时候putty是连接着的（ssh连接为何不受ip地址影响也是不懂了），赶紧关掉ss，发现路由器设置能进了，内心松下一口气，但我也很奇怪，为什么上次回来的时候路由器也是这样搞得一切正常呢。（后想起：ss openwrt版本呢2.3.1后不再自带ignore.list）

想来想去，好吧，也没有很好的系统层面上的解决方法，ss我也不知道她的实现方法是怎样的，先添加一下排除试试看吧，定位到ss的luci界面，直接在下面添加了排除，重启服务，发现一切正常，可以进入，明白了ss排除有效，因此我需要在ss的ignore.list将172.168.x.x这个域名段全部添加入，排除掉他，这样我内网传输也暂时不会有什么问题了。

putty定位到```/etc/ignore.list```（我的ignore.list设定在这里，你需要定位到自己设置的位置），vi打开

![ignore.list](https://ooo.0o0.ooo/2017/05/25/5926497f2e6de.png)

前面的四位ip地址姑且能理解，后面的16 18 19 24是什么鬼啊！后实验一番，想起计算机网络的内容（x

每个ip数字8位二进制，/后指的是指定到多少位忽略，比如

1.0.1.0/24 -> 00000001.00000000.00000001.00000000的前24位，也就是1.0.1.x会被忽略

所以如果我想要172.168.x.x忽略的话，则可以设定 172.168.0.0/16

重设定之后，重启发现一切正常，问题解决

# 安全性

咱刚才不是设置了镜像站么，如果镜像站被政要控制了，咱下下来的东西带有恶意脚本监控咋办，只好说，如果到那时，咱只能用能出去的电脑把包包都下下来再scp上传安装，我也试过，然而我并不知道安装顺序，出来了一些错误，什么找不到，那个找不到，唉，这东西对我这个linux门外汉实在是太高深了，只能希望那一天不要到来吧，也希望永远不要再重新配置这个路由器了。。。。我已经看到头大了。。。

# 结束记

明明下午计划好的是美好的补番行动，然而我却又把青春与生命献给了狗屎的电信，谴责一下万恶之源，拨号/公网ip还给家庭用户，会断你财路？你没AT&T T-Mobile有钱？你踏马想钱想太多了吧！我只想说不义之财不可得！早日飞妈！