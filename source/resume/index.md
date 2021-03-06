---
title: "简历 Resume"
date: 2016-09-18 14:02:14
update_date: 2017-04-08 12:53:14
comments: false
---


<style>
  #print {
    float: right;
    margin-top: -34px;
    background: rgb(65, 132, 243);
    color: #FFF;
    border: 0;
    outline: 0;
    padding: 0 16px;
    border-radius: 2px;
    font-size: 14px;
    line-height: 36px;
    cursor: pointer;
    transition: .3s all ease;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);    
  }
  #print:hover {
    background: rgba(65, 132, 243,.8);
  }
  #print:focus {
    background: #3a78de;
  }
  #print:active {
    background: #3264b7;
    box-shadow: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12), 0 5px 5px -3px rgba(0,0,0,.4);
  }
  @media print {
    #comments, #footer,.article-share,.right-col,#print {
      display: none;
    }
    #container .mid-col {
      right: 0;
    }
    .article {
      margin: 0;
      box-shadow: none;
    }
    body {
      background: #FFF;
    }
  }
</style>

<button id="print" onclick="print();ga('send','event','click','resumeDownload')">打印 / 下载 PDF</button>

## 徐毅鑫
[邮箱](mailto:xingoxu@foxmail.com) &nbsp;&nbsp;&nbsp; 
<!-- (+86) <script type="text/javascript" src="https://od8634671.qnssl.com/phone.js"></script> &nbsp;&nbsp;&nbsp; 方向：高级前端工程师 -->
  
  
## 教育背景
- 2013.9 - 2017.6  上海第二工业大学  软件工程  本科

## 技能描述
- 熟悉 HTML5/CSS3/JavaScript(ES5,ES2015)主流标准 熟练掌握构建响应式布局 解决常见浏览器兼容问题 注重细节 追求像素级对齐
- 熟悉 jQuery/Vue.js/Bootstrap 了解 Angularjs 1.4/React.js/Router/Vuex/Redux 等框架
- 熟悉 Less 了解 Stylus 了解 webpack/gulp.js 能看文档从0编写构建文件 了解前端组件化 工程化
- 了解 Nodejs/Express.js/Java/PHP 构建Restful API
- 了解 MSSQL/MySQL 关系型数据库 了解http协议 懂得前后端交互
- 熟悉 git

## 工作经历

> 2017.04.17 - 2017.12.20 拉扎斯网络科技（上海）有限公司 （饿了么） 前端工程师
> - 利用各种前端框架完成即时配送系统的前端开发，使用 CI 持续构建并发布
> - 参与开发 Element 等公司内各种基础前端项目
> - 使用 Zeplin 与设计师一起还原设计稿

## 证书荣誉
- 日本语能力测试JLPT N2
- 大学英语四六级（523,517）
- 初级程序员（软考）
- 第七届蓝桥杯全国软件和信息技术专业人才大赛个人赛上海赛区省赛一等奖　全国三等奖
- 以310分通过第六次CCF CSP软件能力认证（算法与数据结构） 
- 获得2015年、2016年校级三等奖学金
　　

<!-- ## 实习经历
> 2016.06.20 - 2017.04.14 上海凌梦科技有限公司（萌购） 前端（实习）
> - 使用 Zeplin/PS 高度还原设计稿 独立完成活动专题页面 举例： [轻文轻小说](http://www.030buy.net/special/2016.9.6.qwqxs/) &nbsp; [螺旋境界线](http://www.030buy.net/special/2016.8.9.hh/) &nbsp; [清恋](http://www.030buy.net/special/2017.3.16.ql/)
> - 使用 PHP/Vue/Less/gulp.js 协助完成[萌购 - 任你购](http://rennigou.jp/)的前台用户页面与后台管理
> - 使用 canvas2D 为登录界面增加动画 [直达](https://user.030buy.net/login)
> - 使用 webpack/vue 1/PHP 独立完成萌购Android/IOS App内所有内嵌网页并与原生客户端交互 -->

## 简单作品/开源项目
> 除标明外 web项目均使用webpack 2 / ES2015，并采用响应式布局
　　
  
　　
> [Canvas Contribution](https://github.com/xingoxu/canvas-contribution) - **Canvas2D / ES2015 / NPMpackage**
一个使用canvas生成github contribution的npm package
　　
  
　　
> [PS4 Wallpaper Helper](http://works.xingoxu.com/ps4helper/) - **Electron/Express.js/socket.io**
一个帮助更换PS4壁纸的小程序
- PS4 Side 使用socket.io使得PC端更改壁纸后迅速在页面上展示出新图片
- PC Side Express.js起本地服务器 Vue.js做前端i18n
- 使用electron-builder打包二进制文件，Run everywhere
　　
  
　　
> [日系剁手网站价格综合对比工具](http://works.xingoxu.com/buy-calc/) - **React.js**
一个综合价格计算工具，实现了单价与合计总价对比，[微博](http://weibo.com/1804320382/E51AYqS9e)获得 9187 转发，2438 个赞，阅读量 278.8 万
- React.js 的组件，状态的理解
- React.js Virtual dom的几个事件的使用
- Fetch API
　　
  
　　
> [学生事务管理中心](https://dev.xingoxu.cn) - **Node.js/Express.js/Angular.js/Gulp.js/Bootstrap**
一个简单的登录，权限控制与增删改查，以及附带简单的成绩页面抓取
- Express.js做路由，Angular.js做前端双向绑定，加速开发，gulp.js构建
- Angular.js的$scope, controller, directive, service的理解
- Request 抓取页面，使用jsdom进行页面处理并返回json片段
- 使用forever.js保持在线运行
- MySQL保存数据，Redis保存Session
　　
  
　　
> [个人博客页面](https://blog.xingoxu.com/) - **HTML/CSS/JS**
- HTML/CSS/JS的基本学习
- jQuery的使用
- ejs stylus requirejs的基本使用
- Travis Ci 持续化构建
　　
  
　　
> [Pixiv扒原图](https://github.com/xingoxu/pixivDownloader-WPF) - **C#**
- 多线程的交互处理
- HTTP 的GET/POST/DELETE/PUT方法

