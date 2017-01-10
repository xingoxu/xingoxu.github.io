---
title: 'Hexo主题Paper White'
date: 2016-03-12 03:44:46
categories:
  - works
  - Front-End-Dev
---

欢迎有爱自取啦

最后更新： 2016.01.09

<!-- more -->

# Paper White - A Hexo Theme
================


ReadMe 请[移步](https://github.com/xingoxu/hexo-theme-paper-white)

此处将集中显示各种奇奇怪怪 demo

# embed code
```javascript
	//载入分享模块
	if (paperWhiteConfig.canShare) {
		require(['/js/share.js'], function(share) {
			share.init();
			share.shareLinks.push({
				id: 'download', //暂时都能下载，如有不能下载的需求移动至init进行克隆数组等操作
				label: '下载',
				url:'{{raw_image_url}}', 
				download: true 
			});
			photoSwipeOption.shareEl = true;
			photoSwipeOption.shareButtons = share.shareLinks;
		});
	}
```

# embed gist
<script src="https://gist.github.com/xingoxu/9ef5d5a262f796daad94.js"></script>

# jsfiddle
<script async src="//jsfiddle.net/pq98medb/1/embed/js,html,css,result/dark/"></script>

# table

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机     | \$1600 |   5     |
| 手机        |   \$12   |   12   |
| 管线        |    \$1    |  234  |

