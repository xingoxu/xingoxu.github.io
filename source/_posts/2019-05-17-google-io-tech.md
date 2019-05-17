---
title: 2019 Google IO Web 前端内容总结
categories:
  - dev
  - Front-End-Dev
date: 2019-05-17 16:55:59
---

# Web 新产品 / 新技术
- web.dev
  - https://web.dev
  - 一个可以用来学习框架、性能、各种 Web 技术的地方
  - 还有实战 Codelab
  - 正在进行多国翻译
- Lighthouse Performance Budgets
  - https://developers.google.com/web/tools/lighthouse/audits/budgets
  - 在Lighthouse中设定性能预算，让Lighthouse在测试性能时使用并打分
- PWA Desktop
  - PWA现在可以各大桌面平台系统中安装了
- Trusted Web Activity
  - https://developers.google.com/web/updates/2019/02/using-twa
  - Chrome Custom Tab 的升级版，不再显示标题栏
  - 一个常见的使用场景是在已有的App中去使用PWA来打包家族应用并打造原生体验
  - 在网页中可以使用schema url来与App通信
  - App可以在网址后附上参数给网页发送数据
- Perception Toolkit
  - https://web.dev/perception-toolkit
  - 一个工具包使用Shape Detection API去扫描条码或者获取实物信息
  - 从网站的 meta 信息展示相关卡片
  - 提供了WebAssembly版以向下兼容
- Puppeteer with Firefox
  - 可以使用Firefox进行自动化了
  - `npm i puppeteer-firefox`

<!-- more -->

# Web 将来可以使用的新功能 / 新Web API / 新 JavaScript API 等

## Chrome Only (目前为止，没有写入w3c标准)
- Lazy loading
  - 在图片和iframe中添加 loading="lazy" 属性来让浏览器自动懒加载
  - Chrome 75 启用
- Portals
  - https://web.dev/hands-on-portals
  - 一个新tag，类似iframe，以提供转到网页中嵌入内容的无缝体验
  - 可以在Chrome Canary体验
- Web Packaging
  - https://github.com/WICG/webpackage
  - 对网页进行签名打包，在不同服务器上部署，使得浏览器可以不仅在源服务器上获取内容（p2p的感觉）
  - 暂时没有任何 demo
- Paint Holding
  - 同一网站切换页面时将保持之前的绘制不会白屏一次
  - Chrome Canary 可预览
- Cookie Changes upcoming in Chrome 76
  - https://web.dev/samesite-cookies-explained
  - 没有添加Same-Site的Cookie将会自动适用`Same-Site=LAX`

Chrome 正在开发的

- [原生文件系统](https://github.com/WICG/native-file-system)
- [无需提前申请即可存储文件在本地](https://bugs.chromium.org/p/chromium/issues/detail?id=897276)
- [基于短信的验证](https://github.com/sso-google/sms-otp-retrieval)

> 关联Session： What’s New with Chrome and the Web (Google I/O ’19)

# Web API

- 开发中
  - 分享 -> Web Share API (Shipped) -> Web Share Target (v2) (Working)
  - media control on System level -> mediaSession API (Shipped)
  - 检测条码与形状 -> Shape Detection API (FaceDetect / BarcodeDetect both shipped in Chrome Canary) 
  - App Badging (App上的数字) -> window.Badge / window.ExperimentalBadge (Origin Trial 78)
  - 唤醒锁 -> (Screen wake lock / System wake lock) -> Wake Lock (In Development)
  - 文件操作 -> File Picker -> chooseFileSystemEntries (propse stage / In Development)
  - 访问串口设备（例如打印机） -> Serial API (Proposed API)
  - HID 设备访问 -> WebHID (Proposed API / In Development)
  - 访问通讯录 -> Contacts Picker (Proposed API / Experimenting)
  - 访问安装字体列表 -> Proposed / In Development

- 很快实装
  - 剪贴板复制与粘贴图片 
  - [基于短信的手机号验证流程](https://bit.ly/sms-verification-explainer)
  - 基于时间的推送通知API

> 在 Chrome 中可参与试用并参与反馈
> https://developers.chrome.com/origintrials

> Web API 可在 Project hugu 参阅进度 [Project hugu](https://bugs.chromium.org/p/chromium/issues/list?can=2&q=proj-fugu&sort=m&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified)

> 相关Session： Unlocking New Capabilities for the Web (Google I/O ’19)

# JavaScript API / Syntax
- 类的私有字段 (已实装) - working on privatter method and getters and setters
- String.prototype.matchAll (已实装)
- 数字分隔 (Chrome 75)
- BigInt (Chrome 74 与 Firefox nightly 与 node 实装 & transpiler available)
- Array.prototype.flat (in chrome firefox safari node)
- 从 Entries 反转化为 Object  (in chrome firefox safari node )
- globalThis (in chrome firefox safari node )
- 正在将数字排序的稳定性写入标准
- 多国语言相关
  - Intl.RelativeTimeFormat -> today yesterday tomorrow (in chrome firefox node)
  - Intl.ListFormat -> ex. A, B or C  (in chrome node)
  - Intl.DateTimeFormat -> ex. May, 5  (in chrome)
  - Intl.Locale -> Internal Translation (in chrome node)
- Promise.allSettled (in chrome 76 nightly) / Promise.any
- WeakRef and finalizers (in chrome with flags) & 写入标准

> 关联Session： What’s new in JavaScript (Google I/O ’19)

# 经验分享与性能提升

Chrome 想为各个框架提供一些API这样他们在连续执行分块任务时同时相应用户输入

- Scheduling API
  - https://github.com/WICG/main-thread-scheduling
  - https://github.com/WICG/is-input-pending
  - https://github.com/WICG/display-locking


Google 分享了他们在性能上的一些做法和建议

- 阶段式SSR
- 捕获JS完全加载前的用户点击
- 保持初始大小的JS
- 交互驱动懒加载组件
- 建立依赖关系图，声明性加载功能，同时获取数据

Google 的性能建议

1. 懒加载
2. 响应式图片（根据设备像素密度等加载不同分辨率图片）
3. 图片CDN
4. 延迟第三方JS
5. 移除代价巨大的库
6. 分离代码
7. 避免Web Font字体闪烁
8. Prefetch
9. Preconnect
10. Preload
11. 首屏关键CSS
12. gzip -> Brotli 
13. 响应式加载JS（适应不同浏览器分别加载不同JS）

以及使用Lighthouse 与设定性能预算 LightWallet

# 其他

更多性能、How to、以及Web内容可参照
https://www.youtube.com/playlist?list=PLNYkxOF6rcIATmAmz7HcCzongGvQEtx8i

<!-- Google 的架构建议
1. 为不断发展的Web API而设计程序
2. 避免惩罚新浏览器（polyfill等）
3. 持续服务器缓存，保持高CDN命中率
4. 避免重大修改并增强现有工具 -->



