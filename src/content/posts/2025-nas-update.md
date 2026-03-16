---
title: 论垃圾佬的养成，一次 NAS 硬件升级与客厅电脑的升级的流水账
published: 2026-03-16
description: '自 2020 年自组了 NAS 之后，2025 年 4 月份的某天下午，进行一个非常常规的寻找文件，双击文件准备打开某个 pdf 的时候，嗝愣一下，等了十几秒文件都没法打开，直到半分钟后，邮箱里传进来了几封报警邮件，一开发现掉盘了，而且仔细一看，好几封邮件，一掉还掉俩硬盘，心想我擦……这下坏事儿了。'
image: 'https://staticimg-v2.xingoxu.com/i/8WY98Zo2'
tags:
  - notes
---

## 起因

自 2020 年自组了 NAS 之后，2025 年 4 月份的某天下午，进行一个非常常规的寻找文件，双击文件准备打开某个 pdf 的时候，嗝愣一下，等了十几秒文件都没法打开，直到半分钟后，邮箱里传进来了几封报警邮件，一开发现掉盘了，而且仔细一看，好几封邮件，一掉还掉俩硬盘，心想我擦……这下坏事儿了。

情况可算是惨烈，自己组装的这台 NAS 用的是 xfs 的文件系统，在网上找恢复数据教程也啥都没出来，只有两个官方命令，先脱机然后挂载到 debian 下，然后 xfs_repair，这也就决定了要么硬盘全好，要么硬盘全毁。

其中一块硬盘好像没什么问题只是引导区掉了貌似，几秒就正常了，另一块就没那么好运了，提示无法修复，于是强行恢复后把磁盘上那些个扫出来的文件全部都拉到了 lost+found，结果还得一个一个去看文件内容才能知道是什么，才能进行恢复。

## 背景以及第一代自组 NAS

技术选型的时候倒也没想那么多，2020 年也是一次事故导致的想自组 NAS 的念头。在 2020 年前都是用的群晖 916，四盘位+x86 架构，能跑 docker 能跑一点点虚拟机其实也已经很满足了，但也有很多问题吧，一个是 nas 方面只起到了一个下载和分享文件的作用，硬解可以用自带的 video station 和 ffmpeg，但除此之外全是 cpu 软解，相当的卡（可能可以，当然也是我之前不会用来着）,另一个是运算上，我有一些用 headless chrome 的爬虫脚本，可以正常跑，速度很慢，也算能用，但每次升级 chrome 就会是非常头疼的一件事，以及跑 PT，因为怕日本的家宽版权原因，不敢直接挂 PT，所以我通了一层 wireguard 去做种，然而如果不小心把 image 给删了，很有可能要对里边的内容进行重新编译。

![旧DS916](https://staticimg-v2.xingoxu.com/image/680439e5-f547-44df-ba32-42df7fbe27c2.jpg)

当然以上是不满的源头，导火索是我在新冠的时候买了一个 2.5G 的 USB 网卡，稍微整了一下驱动就在群晖上跑起来了，结果在两个月回国的期间，离回日本还有一个月的时间点上，手贱点了一下自带的网卡驱动升级…………于是，NAS 失联了…………在剩下的那一个月里疯狂去看各种自组 NAS 的代餐，

也是第一台自组 NAS 的由来，那同样两三千块我可以买一台更好的配置干嘛还用群晖啊反正我也就用那几个功能，其他的现有的系统也是点点点就解决了的事情。

### 硬件方案

第一代 NAS 的硬件选型是当时 2020 年比较乞丐的，

```
CPU: QSRL（Intel 10100T）
主板: asrock B460M
PCIE1: hp 561 flr拆机10G网卡
PCIE2: IT卡HBA模式直通卡
机箱: 用的 TANK 的那个小洋房，自带散热解决方案
内存: pdd买的寨条16g ddr4 x 2 → 后换成 crucial 32g x 2
电源: 益恒 250W 小1u

```

具体价格可能记不太清了，除了那个机箱 850 前后以外，内存大概 400 一根？，益恒电源大概是 270，因为收的也都是二手，整套也就 3000 吧应该。

![第一代自组NAS成品图](https://staticimg-v2.xingoxu.com/image/7019a572-76e3-496a-a51a-cc89c65c5d82.jpg)

当然组装第一台 NAS 中也有一些小插曲，比如闲鱼上收的便宜电源结果点不亮到电脑城帮忙调试一下确定是电源问题不是主板和 u 问题，收的第二台益恒电源发现线太短以及少 4pin 口子还是 sata 口子？（忘了）

转接线到货时间会比较长于是索性直接买了一台全新的反正也就 300 不到，点亮无问题之后带到日本后又发现装系统定时死机。最后跑内存测试连续跑两遍才出内存问题之后在日本也没办法退随即在日本煤炉上倒出去了（论我干过的缺德事，只能说 windows 比较强大吧内存有问题也能正常跑，所以这种寨条到底是谁在买）

![第一代NAS](https://staticimg-v2.xingoxu.com/image/0c21b411-cfc2-4340-a202-bb837de4ac0b.jpg)

所以中间也是有了很多的装机经验，比如内存不可以在拼多多买，就算买了也得连续跑两次内存压力测试。但也比较有意思的，在闲鱼上买的一个 SAS 8T 硬盘居然到现在还没挂，一直把他当垃圾处理所以放在下载池跑 PT 结果到现在也有 6 年了，之前就已经十万小时的通电时间了寿命也太长了……

当然今天回过头来看这些其实交了不少学费，还是不够垃圾佬。

### 软件方案

也算是看哔哩哔哩的 up 主们的抄作业吧，试了之后发现确实这样做很好也很符合自身需求，就是底层装 pve，然后开虚拟机装 nas 系统加直通硬件，这样的话其他虚拟机的运算任务基本不会妨碍 nas 自身的问题，nas 自己的任务就放在自己的机器里运行。

我并没有完全分离比如 nfs 或者 smb 拉出来然后在其他虚拟机上进行一个再加工这样，我还是会觉得有延时很怕文件会有 conflict，另一个是对性能上还是有一道心理过不去的坎，会觉得同一个主机上的文件我为什么要再走一遍网络层在那边加工的感觉好傻。

当然也在 nas 自己上不能解决的事情还是会分开来这样，比如另一个录制电视的 mirakurun 我就单开虚拟机的，他那个 recdvb 的编译莫名其妙就是 ubuntu 下能过，好多 debian 的系统也过不了，因为 debian 默认没开某些参数编译。结果 nas 的系统还是有这样那样的限制，那也是现在多虚拟机方案的好处。

nas 系统上选择的是 omv，起初一开始选择的是网红 NAS 系统 unraid，最终没有选择它的原因当然不是价格问题，当时才卖 99 人民币终生。当然定价问题是我对 unraid 这个东西将来发展的存疑之一，现在来看他已经回归正常定价还蛮 make sense，当时我对他的感受是诶有缓存池，有自动搬运缓存功能，然后文件是分散分布的，加上一个看起来挺合理的一个校验池，那么最后不采用 unraid 的理由还是那个采用的小众的 linux 版本，而不是用的人多的 debian 或者 fedora 系，又是闭源的，那如果驱动装不上，或者报错了，我又没办法知道是我的问题，还是驱动的问题，还是系统的问题。[事实上在 pve 下的 6.11+的 unraid 就没有办法使用 uhd 630 分出来的 vgpu](https://forums.unraid.net/topic/129315-unraid-611-freeze-with-i915-gpu-passthrough-on-proxmox/)，开机死机（之后有没有解决不是很清楚）。 那么我觉得最终结果就是还是会重蹈群辉的覆辙。

omv 这个系统上手后其实也就是个带图形界面的 debian 吧，正好卡在我的好球区，我对 smb/nfs 共享，以及一些杂七杂八的小命令记得不是很熟，那 omv 正好把那些都帮我做了图形界面，而那些我自定义的脚本 docker 容器等等又能很方便的去自己使用命令行启动。

最后最后采用的硬盘方案是 mergerfs，无校验。我当时自己觉得，我的重要文件都做了同步，每台电脑上都有一份不需要额外再进行备份，剩下的那些丢了可能也一辈子不会再 review 了吧，又能充分利用各种容量的硬盘挺好的。

### 对第一代 NAS 方案的反思

很多事情不试过不发生也是一辈子不知道，包括网上搜也不知道怎么搜出来。

比如 pve 或者其他的一些直通硬盘，PCIe 可以单独通，但是直连主板的那几个 SATA 口子是一起直通（能读到 SMART 的那种直通，也就是SATA控制器）的而不是一个口子一个口子通的，所以在策划硬件的时候也要想好自己的 nas 定位和使用分配。

又比如这次 xfs 文件系统挂了之后才觉得嗯，要找那些用的人多的，恢复数据教程或者就要做冗余的，至少要设想一下如果硬盘炸了是要一个怎样的操作方法去解决硬盘问题。以及也让我真正认识到了说辛辛苦苦收藏的那么多人类文明一旦某一天消失了，那也是找不回来的。
**特别特别是 mergerfs 这个文件系统**，上手时你觉得感觉硬盘均匀用的恰到好处，可以混合使用不同大小的硬盘，结果炸了一个的时候没有备份就只能看空文件夹在那边哭，或者 1.jpg，3.jpg，4.jpg 而没有 2.jpg 的那种空虚感。

### 掉盘后续

你很关心盘掉了之后我是怎么处理的吧以及那个坏掉的盘到底是什么情况吧。

怎么处理当然是一个文件一个文件看过去然后再把他们放回原来的位置 & 如果没有了就没有了咯。如果我知道哪些是没有了的，有些还能重新下的话就重新下了，最恐怖的是不知道什么文件掉了。那就，让他走吧。

关于原因其实我自己也不是很清楚，后来把丢失文件复制到其他硬盘上后我就把盘拿下来全盘扫描了结果是全部绿块没有坏道，SMART 就更是完全没有问题

唯一稍微有点可能性的是我的这套设备长时间（超过 5 个小时）运行后，就很有可能会发生无法关机的问题，无论是 pve 系统下还是 windows 下都有发生过，我开着 pve 的 log 查看后发现系统已经发出了 ACPI PowerOff 的指令但最后就卡在那边没有关机，另外在发出关机指令之前最后提示无法卸载/dev/的某个设备，给 chatGPT 分析了说是无伤大雅不会影响关机因为最后已经发出了 ACPI 关机指令了。

这个无法关机的问题还没查明白，那边为啥硬盘会炸也不明白。可能是让磁头没有正常归位的原因导致引导区或者寻道的一些这样那样的问题？如果你知道原因欢迎跟我联系。

不过反正不是 CPU 就是主板，就是直通卡或者 561flr 问题咯？（？都猜了个遍）另外这块炸了的硬盘格式化之后被我放到作为第二代 NAS 方案的冷备用了。

但是经过这次掉盘之后，我想我是必须吸取教训了，数据必须要备份，无论是做RAID也好，还是说unraid的snapraid方案也好，又或者是最傻的手动多媒体多介质备份也好，其实都是必须的，而不是说我就做了同步，剩下的那些内容就跟着缘分走吧。其实是不行的，有些东西失去了才会知道价值，然而数据无价。

## 第二代 NAS 方案

然后就很巧的是硬盘坏了之后的几个月之后的某一天忘了哪个平台给我推了个 epyc 7d12 的帖子还是视频吧（也有可能是我手贱自己搜的）

感觉很香啊服务器板 U 整套加起来也就 5000？正愁感觉原来的NAS拓展性比较差，这次性能拓展一次拉满。嗨没想到大船过海又过海，过完太平洋还得过日本海，于是说搞就搞。

### 硬件配置

硬件就直接抄的几个帖子的，我这边也贴一下自己的配置

```
CPU: EPYC 7D12
主板：SuperMicro H11SSL-i
内存：三星 16G * 4 DDR4 REG ECC
散热：金钱豹SP3
电源：长城巨龙 1200W
机箱：追风者 614
显卡：NVIDIA P4

```

当然因为是要保证在数据迁移过程中原本的那些脚本也要持续运行（我也是要上班的），所以还是又买了一个直通卡 + 561flr 网卡。

整套设备真的是可聊的太多了，首先大家可以去参阅一些我当时看的帖子 ↓

> [12盘位NAS机箱和AMD EPYC大船靠岸之存储整合方案](https://www.chiphell.com/thread-2509428-1-1.html)  
> [ALL IN ONE NAS 主机升级小记-2025](https://www.azimiao.com/11448.html)  
> [EPYC7D12 8盘3.5寸机械+多盘nvme闪存 【25G高性能】 NAS搭建方案分享](https://www.zhihu.com/tardis/bd/art/644202809)  
> [数框框狂喜，AMD 霄龙 EPYC 7D12 捡垃圾](https://lishuma.com/archives/5501)  
> [家庭服务器Step ZERO to ONE](https://xinalin.com/65/homeserver-step-zero-to-one) 这个是 7542，但为了了解 H11 这个主板也参照了这个

首先这套设备除了显卡和 PCIe 设备是找 js 买的整机，整套 4500 出头一点。之后替换成淘宝图。看了上边的几个帖子里说 7D12 因为是 OEM 的流出所以 H11 的某几个 BIOS rev 没法点亮什么的，那想着要是自己买没法确认点亮的情况下也没法退就比较麻烦了。那花点辛苦费让人帮忙装机 + 确认也不算贵了。

托朋友旅游从国内托运带到日本来，然后我去机场接机带回家的。你问我为啥不在日本买，那日本人又没有流出这些东西的途径也不收垃圾啊……其次是淘宝过境的话过关是个大问题，我也不是很想拆盲盒，万一被退了或者收了高额关税那也不是我们垃圾乞丐的作风了。

其次是店家装机确实点亮了，因为没有买硬盘所以店家进了BIOS拍了张图给我就当是点亮了。

我一开箱发现 reset 键没法用，然后风扇有个没转，然后装了 windows 测机发现 64G 只点亮了 32G。

嘛本身也是要加风扇和硬盘的，于是把线全理了才发现这神装机。

<div style="overflow-x:auto; white-space:nowrap; padding:10px 0; height: 220px;">
  <img src="https://staticimg-v2.xingoxu.com/i/jCt8FQ2e" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
  <img src="https://staticimg-v2.xingoxu.com/i/Ly1MNKto" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
  <img src="https://staticimg-v2.xingoxu.com/i/6J8gzpEj" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
  <img src="https://staticimg-v2.xingoxu.com/i/GlrE3oIk" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
  <img src="https://staticimg-v2.xingoxu.com/i/crDzX6hM" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
  <img src="https://staticimg-v2.xingoxu.com/i/9C7ZIdOG" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
  <img src="https://staticimg-v2.xingoxu.com/i/urwB1jPr" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
  <img src="https://staticimg-v2.xingoxu.com/i/YZ2F8DkZ" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
  <img src="https://staticimg-v2.xingoxu.com/i/6WDGSg2O" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
  <img src="https://staticimg-v2.xingoxu.com/i/SgCWd5Qu" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
  <img src="https://staticimg-v2.xingoxu.com/i/8fVmj6pF" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
  <img src="https://staticimg-v2.xingoxu.com/i/xDGtwGiZ" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
</div>

然后之最后，我又把所有的配置都换了一遍笑死。

首先是内存点亮问题，几个帖子也说了 7D12 是特殊 U 只能点外边两个，然后 js 给我装的是里边两个，嗨 BIOS 里正常显示进了系统就直接只有一半了。骚操作还有把那个风扇集线器自己插上自己，倒是妹短路。也是服了。

然后就是整套设备开起来，哇靠那~~呻吟~~声音震耳欲聋，就最低转速已经身如机房，嗡嗡嗡的。
金钱豹这个暴力风扇，转速也太高了，我估计店家主卖那些二手组装服务器给那些实验室做流体运算的，结果我要求改个 7D12 也是不知道其实是个 100W 都不到的 U。

开始只是想把这个风扇改成不那么静音的，也不知道有啥牌子的风扇是比较安静的，看那个形状还以为那个风扇是弯的好像换不了，直接找淘宝上卖 noctua 店家寻思问问啥大小的能换上去，店家直接给我推荐散热器了，店主真的很会做生意上来先说原价 500 多给我直接优惠 8 折，我网上一查发现啊确实比日本免税 and 其他淘宝店标价也要低，正好也有朋友要回一趟上海就一冲动直接买了。事实上后来我拆散热的时候就发现那风扇其实可以单独换，也就普通 12025 风扇。

换完了暴力风扇，就是整 P4 的散热问题，淘宝上买的 3D 侧吹的模具不用附赠的暴力风扇就算是 noctua 满速也是压不了 P4 的满载，于是只好把盖板拆了拿了两个 6025 风扇在那吹，那这样单槽卡就变成了双槽的厚度了，也是为了静音要做出的牺牲。

最后都整完了发现电源的声音比较大了，主要是空载室温 26 度时会有中频到高频的持续性的电流声，偶尔会伴有风扇刮到什么东西的摩擦声，而不开空调室温到 30 度以上时，电源的风扇就会很响，于是也又拖朋友正好换了个 1200W 的酷冷至尊解决。

内存其实还算够用，但也属于是抠着在用了，这次因为上了可以用 ECC 的平台的话就决定把 NAS 系统的那部分变成 truenas，毕竟是在卖给企业卖系统的话稳定性什么的应该是不错的。而且也看到很多人都在吹 zfs 等等。那么现在 16T*4 的一个阵列的话官方推荐最好要配 64G 左右的系统内存，但我也有其他虚机需要用到，所以内存我先是分配的 48G 的。巧也是巧偶尔手贱在日拍上搜了一下 ECC 内存，发现有人在卖 32 *4 的 REG ECC 内存，叠上平台券价格和国内也差不多，而且国内问了几家闲鱼和淘宝还说缺货。那就拿下换上了，也是一次点亮。

所以整个配置只有机箱主板和 CPU 是当初店家给我的，后来全是我又花了好多钱买风扇改散热改电源的，也是一身汗。

### 软件配置

pve → truenas zfs + 其他小鸡

两个pool，data pool 6盘位 RAIDZ2，下载pool就raid0啦

#### smfc

整体上沿用第一代的思想是底层 pve 然后加 truenas 来管理 nas 的文件，H11SSL 是带 IPMI 的主板，主板设置里设置成 optimal 就是消费级的自动了，但是不能拉曲线是比较麻烦，因为 p4 的显卡的温度是不会被 IPMI 给监控到的，因此风扇也是被控制的。因此要有一些工具进行一个读取 gpu 核心的温度然后进行程序化控制，我最后找到的是 [smfc](https://github.com/petersulyok/smfc)。

CPU Zone 是 FAN 数字，也就是FAN12345，GPU Zone 是 FAN 字母区，也就是AB。安装好 hwmon 和 nvidia-smi 和 ipmitool 的话配一下config就可以了。

另外我这边发现 smfc 启动时因为温度没有读到导致全部风扇置零，IPMI触发error后风扇满转速的问题。`systemctl restart smfc.service`重启一下就可以了，但是每次重启都会需要重启的话也是比较烦，可以添加一个服务。

```bash
systemctl enable smfc
# 创建延时重启脚本
cat << 'EOF' > /usr/local/bin/restart-smfc.sh
#!/bin/bash
sleep 5
systemctl restart smfc.service
EOF

# 设置脚本执行权限
chmod +x /usr/local/bin/restart-smfc.sh

# 创建systemd服务单元文件
cat << 'EOF' > /etc/systemd/system/restart-smfc-once.service
[Unit]
Description=Restart smfc.service once after boot
After=smfc.service

[Service]
Type=oneshot
ExecStart=/usr/local/bin/restart-smfc.sh
RemainAfterExit=yes
EOF

# 创建systemd timer单元文件
cat << 'EOF' > /etc/systemd/system/restart-smfc-once.timer
[Unit]
Description=Timer to restart smfc.service 15s after boot
Requires=restart-smfc-once.service

[Timer]
OnBootSec=15s
Unit=restart-smfc-once.service

[Install]
WantedBy=timers.target
EOF


# 重载systemd配置并启用timer
systemctl daemon-reload
systemctl enable restart-smfc-once.timer
systemctl start restart-smfc-once.timer

```

其他的话就是要注意一下内核的一些参数，zfs安装的proxmox已经使用`/etc/kernel/cmdline`，更新启动参数也是用 `proxmox-boot-tool refresh`，需要注意一下网上的其他教程。

P4 的使用教程可以看

> [在Proxmox VE下开启vGPU - Tesla P4为例](https://fairysen.com/844.html)  
> [vGPU在Proxmox VE下的配置与使用](https://xinalin.com/159/vgpu-configuration-on-pve)

#### 证书自动更新

truenas下的证书自动更新本来想写个脚本，发现已经有人写了，就拿过来用了

> https://github.com/danb35/deploy-freenas

#### 直通

根据主板手册架构图，H11SSL的SATA口是可以进行分区直通的，果然是服务器主板，所以SATA口上接了系统盘，也同时SATA口是可以接数据盘的，注意位置即可。
直通时可以使用以下命令查看在那个PCIe通道的控制器上。

```bash
udevadm info --query=all --name=/dev/sdg

```

## 第 2.5 代 NAS 方案

所以之前掉盘原因其实应该是没有办法究明了，因为 B460M 主板被我卖了，系统我也装成了 windows，开机一个月也没有不能关机的问题。
不过我留意到主板上有个针脚有点歪了，也许是那个问题？

### p4 → dg1

整体装好后，系统是没什么大问题，但是pve在2025.09推出9.0之后开始升级linux内核，也就是nvidia 16系的驱动会被deprecated，vgpu的方案很有可能之后是行不通的，不过我知道这个事情后才发现原来英伟达很早就计划废弃pascal架构的vgpu了。

well，暂时我只需要vgpu用来解码喂给chromecast，本来是想玩玩大模型和生图什么的，但是这样的话就存算分离比较合理，因为pve的系统和里边的truenas我毕竟是想要一直升级下去的。

于是我就各种狂搜，发现解码最好还是intel的卡，又低功耗，又便宜，就算不能sriov，直通进去总可以了吧，于是发现最强丐卡dg1，从此折腾没停过。

dg1是目前Intel独显之中应该说解码最好的，能打很多网游，加上支持硬解新款的AV1，对于NAS垃圾佬的话是极品了。

在买之前我就搜了很多，发现dg1是可以在pve下进行直通的，于是我也没有多看教程内容，dg1也便宜，直接闲鱼下单了三块。各版本都来一块。

![dg1全家福](https://staticimg-v2.xingoxu.com/i/Bi1Ci7gW)

两块是80eu，厂家不同，但是一块被动散热，一块是主动散热，其实发热并不会很厉害。96eu是俗称“满血版”dg1。其实dg1是英特尔Arc系列刚开始出显卡给厂商试试的版本，从驱动到点亮上都有着不少问题。

长话短说，经过插插拔拔各种折腾，三个版本都可以点亮和直通，但是稳定直通的条件是使用别人定制过的内核，但是怎么定制的没有公开。

> [PVE直通DG1/DG2并使用群晖SA6400驱动DG1/DG2教程](https://blog.kkk.rs/archives/28)

对于我来说，没有公开方法的内核比较危险，另一个pve在不停的更新，内核也会不停的更新，暴露在公网的服务，如果没有及时的update的话，也是很危险的。我在线上跑了两个月后，最后还是决定放弃了dg1而去升级我的系统。

其次，96eu版本非常不稳定，直通进truenas之后，确实是可以跑jellyfin的，但是24-48小时后，就没有办法再启动了。而且，重启truenas是没有用的，需要将整体的物理机关机断电，然后再开机才能够重新把96eu的这块卡给启动起来。

所以dg1这块卡如果用在windows的机器上，或者是不做虚拟化的话，还是不错的，但是谁不虚拟化去用这块卡的话，主板上不就浪费宝贵的一根PCI的槽吗。消费级主板本来通道就少，如果是服务器主板的话，不做虚拟化又太浪费了。整体系统构成也很容易翻车。

可惜了，我都把96eu的壳子给拆了然后去准备放进机箱的，谁知道翻车那么厉害。装回去然后又溢价卖给了日本人（缺德x2

### dg1 → A380

A380是相比于dg1之后的第二便宜的卡，相比dg1，价格x2，可是驱动和做工的话都是正式版本。A380一般是双槽卡，蓝戟和先锋各出了一款单槽半高卡，在闲鱼上会比双槽略贵小几十。

插上后点亮直通都没有问题。暂时只买了一块，之后如果有需要的话我个人还是会考虑可以购入的。不过也有一点小期待，手里还剩两块dg1，万一pve后期适配了呢。

最终整体配置如下

```
CPU：EPYC 7D12
主板：SuperMicro H11SSL-i
内存：三星 32G * 8 DDR4 REG ECC
散热：猫头鹰 NH-U14S TR4-SP3
电源：酷冷至尊 1250W
机箱：追风者 614
显卡：Intel A380

```

不得不说整体装完后，这一整套的空载就是100W，我的天，日本一个月的电费就是下不了1w日元了。

![简易式机架终于撑不住了](https://staticimg-v2.xingoxu.com/i/6CbdQiW2)
对咯也上了UPS，那段时间有很多的消费活动，就全都买好买满啦。
![最终构成](https://staticimg-v2.xingoxu.com/i/8WY98Zo2)
![TrueNAS 硬盘部分](https://staticimg-v2.xingoxu.com/i/UxYJBFhk)

## 附赠 算力机方案

有了新机器之后旧机器该怎么处理是一个比较头疼的事情，原来是一台9代+2080Ti的itx小机器，但是机箱灯条有问题，也有点嫌弃了，想把淘汰下来的机器两台合并成一台。

正好乔思伯出了N5这个新机箱，就打算做冷备的同时还能当成算力机。9代卖了，新淘了一张二手的z490，哐哐就装上了。

```
CPU：10400T ES QSRL
主板：ROG Z490
内存：crucial 32g x 2 + 以前机器上淘汰下来的8g x 2 ddr4
散热：以前9代机器上淘汰下来的下压式猫头鹰
电源：银欣HELA 1200W
机箱：乔思伯 N5
显卡：dg1 + ASUS 2080Ti + NVIDIA P4

```

300不到的板子，收到手之后打算装机，掀开nvme装甲一看，哇靠一块500G的三星970 EVO？开盖有奖了啊哈哈哈哈哈哈哈哈😂直接回本。

而且ROG的这块板子就是好啊，有5条PCIe的插槽，SAS卡，10Gbe网卡，加三张显卡，一整个满满当当，Wifi模块还被我用来转接了NVMe。太酷啦。

<div style="overflow-x:auto; white-space:nowrap; padding:10px 0; height: 220px;">
  <img src="https://staticimg-v2.xingoxu.com/i/AryrMRE8" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
  <img src="https://staticimg-v2.xingoxu.com/i/6xsOVEW3" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
</div>

使用dg1启动旧pve的时候有可能会报PCIe的总线错误，可以参考一下 Claude 是怎么解决这个问题的，我很奇怪我的大号机就没有这个问题。

<div style="overflow-x:auto; white-space:nowrap; padding:10px 0; height: 220px;">
  <img src="https://staticimg-v2.xingoxu.com/i/gjFLpkzE" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
  <img src="https://staticimg-v2.xingoxu.com/i/Rou2MZ1J" style="display:inline-block; height: 100%; margin:0 12px 0; border-radius:10px;">
</div>

> https://claude.ai/share/675ea345-7acd-478f-b69b-8fcd779c65b0

在系统选择上，一开始是想用PVE+直通进行一个鱼和熊掌兼得的想法，然而腾讯等各种反作弊系统是不答应啊。

> [打造 All in One 主机之让虚拟机也能通过 EAC 检测](https://blog.uuz.moe/2024/07/proxmox-ve-all-in-one-pass-easy-anti-cheat/)

> PVE使用Windows的话，鼠标和键盘如果直通给Windows，使用一会儿休眠就没反应的话，记得去硬件里边把休眠给关上，节能设置里也要关掉。

那么想想算了，这种都是道高一尺魔高一丈的猫捉老鼠游戏，于是考虑WinServer为底层，用Hyper-V去开omv。
但是我都已经研究到了怎么直通HyperV的过程了，发现有个蓝牙的手柄驱动怎么都安装不上。趁还没完全开始装其他软件，重装到了Win11看，发现，没这个驱动装不上的问题。这可又让我心凉了一大截，好吧还是老实Win11 Pro梭哈到底了。

> [【Windows使用】之--Hyper-V网卡、显卡直通等PCIe硬件直通](https://blog.vlinyu.com/archives/windows-hyper-v-discrete-device-assignment-dda)  
> [Windows Server 2022でもGPU-Pしたい！](https://qiita.com/key_1996/items/8fbce2e2a9ffdb101710)

> Hyper-V启动OMV的时候记得要用传统BIOS，以及Windows 11下是不支持硬件直通的，所以每个硬盘要单独挂载。

最后提一嘴，因为有多个硬盘，也不是做raid，希望我的冷备机的数据管理和原来omv下的mergerfs类似，但我不可能开着那样的HyperV虚拟机进行拷贝数据，以及打游戏的话肯定是不能开着HyperV的。于是我搜索发现了MergerFS在Windows下的Alternative - [StableBit DrivePool](https://stablebit.com/)。软件不贵，是买断制的，也可以试用30天，还不错。

## 后记

其实10月后就已经把整个构成完成了，但是买的三星NVMe 990Pro 2T带Heatsink的，经常有不断电就会掉盘的情况。不应该说掉盘，东西还在，但是如果不断电，主控就没有了反应，关机重启之后就又回复了正常。一开始还以为是买的PCIe转NVMe的板子有问题，后来更换了位置还是发现这块盘每过28天就无法读取SMART而掉盘。拆下来本来打算送修，后来网上一搜发现原来固件更新，日志写的也是相关问题，于是再插到算力机上进行更新这样。无语，我算力机的插槽也是满的啊，又是一顿折腾，还错把算力机的系统盘给拆下来格式化了。

这么一算我手上其实有7条NVMe的SSD了，谁知道2026开局居然PC配件大涨，内存涨SSD涨机械也跟着涨，不知道是该庆幸自己买得早幸运呢，还是该说奸商无德呢。

本文尽量去模仿[梨数码](https://lishuma.com/)的文风，希望阅读的你能够像看小说看笑话一样的阅读完本文，轻松又有干货。

这篇时长纵贯整个2025年的 nas 升级，前前后后折腾了不少，花了钱买了不少的配件，也花了自己很多的精力，尤其是在边减脂边打比赛的同时还去绞尽脑汁抽出时间在工作闲暇空隙去完成所有的事情，本以为应该也是非常值得骄傲的事情，但现在回头来看机器装好了，也懂得了很多知识，踩过了很多坑，然后呢，这些内容似乎对我的将来好像也没有什么重复利用的价值了。唉，感慨一下吧，以后就知道了，时间应该有更重要的事情去使用。

## 一些实用小链接

> [CPU Benchmarks](https://www.cpubenchmark.net/CPU_mega_page.html) 用来查 CPU 评分 TDP等
