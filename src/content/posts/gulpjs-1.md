---
title: 'gulp.js初体验 - 自动编译/刷新/Release'
published: 2016-03-25 20:34:33
tags:
  - dev
  - Front-End-Dev
---

# Intro:
1. gulp能做什么
2. 利用gulp编译stylus，本地预览，自动刷新，自动提升版本并Release
3. 心得


<!-- more -->


# gulp能做什么

半个月前朋友提醒我说可以开始学习构建了，学习grunt，gulp，当时我对这些一无所知，对于构建的理解，只是处于minify html/css/js，uglify js等，想想这些不都已经有了很多现成的工具吗，然后又去grunt,gulp主页逛了，完全看不懂主页上的getting started要干什么


然而最近在尝试使用bootstrap与学习angularjs，想要试试自己搞一个小型的CRUD的app，我发现，我需要一个工具，能帮我处理这些框架中的sass，less，需要一个工具能帮我自动从framework文件夹编译成result并放入dist，而且我也根本无法脱离stylus的语法了（汗），单独编译以及手动整理真是太花费人的时间了，完全不能专注于写代码

于是诞生了以下需求：

* 编译sass,less,stylus
* 帮我把编译好的内容自动替换掉旧的dist
* 灵活的http-server，最好能在我修改源文件的时候自动编译好自动刷新

打开搜索引擎，发现gulp似乎在一阵之前很火热啊，于是稍稍学习了一下gulp

gulp的官方入门，我感觉不是很好，因为他只告诉了你如何安装插件233（误，好吧，看了一圈又一圈的博客，终于理解了gulp想让我们用它干什么了

1. 编写构建任务
2. 执行构建任务

其实核心就这两样

然后在任务中我们能干什么呢，gulp给我们了一些api

1. 从文档中读取流（.src）
2. 将流传到某个插件中让他读取（.pipe）
3. 最后把插件中输出的流我们把它变回文件（gulp.pipe(gulp.dest())）

怪不得叫流式自动化构建，玛德，就不能说正常人的语言吗！

gulp还给我们提供了一个watch api，用来在任务中挂起并监视文件变动

# 利用gulp的任务

> [gulp-stylus](https://www.npmjs.com/package/gulp-stylus)
> [gulp-sourcemap](https://www.npmjs.com/package/gulp-sourcemaps)
> [gulp-browserSync](https://github.com/gulpjs/gulp/blob/master/docs/recipes/server-with-livereload-and-css-injection.md)
> [利用gulp提升版本号并自动发布](https://github.com/gulpjs/gulp/blob/master/docs/recipes/automate-release-workflow.md)
> [将任务分不同文件存放 - 我最喜欢的特性](https://github.com/gulpjs/gulp/blob/master/docs/recipes/split-tasks-across-multiple-files.md)

哈哈以上都是官方的api文档，其实了解了gulp怎么运作之后，编写属于自己的任务还是挺简单的

~~抄写~~仿照官方的编译stylus与sourcemap，写了个自己的compile任务

```javascript
var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	sourceMaps = require('gulp-sourcemaps'),
	runSequence = require('run-sequence');

gulp.task('compile-stylus', function() {
	//non-minified用作查看是否是编译问题而不是compress问题
	gulp
		.src('src/stylus/*.styl')
		.pipe(stylus({
			'include css': true
		}))
		.pipe(gulp.dest('src/debuggable/css/'));
	var taskReturn =
		gulp
		.src('src/stylus/*.styl')
		.pipe(sourceMaps.init())
		.pipe(stylus({
			'include css': true,
			'compress': true
		}))
		.pipe(sourceMaps.write('../../debug-maps'))//cwd:src/dist/css/
		.pipe(gulp.dest('src/dist/css/'));
	return taskReturn;
});

gulp.task('compile', function(callback) {
	runSequence(
		'compile-stylus',
		function(error) {
			if (error) {
				console.log(error.message);
			} else {
				console.log('compile finished!');
			}
			callback(error);
		});
});
```

然而我发现其实生成了sourcemap，chrome的调试工具就很棒的帮我们自动对应到了stylus上了，所以好像输出一下那个编译后文件并没有什么卵用了。。。

# 心得

**注意！**
gulp有个坑就是在相对路径时，不要加'./'，以及注意调用路径，第一次写任务的时候被坑惨了，还以为是自己哪里写错了or getting started过时了

gulp的运行时路径就是你cmd/gitbash的路径，不是相对于js的路径（**使用require-dir的小伙伴们要注意了**）

还有个坑就是自动更新版本并提交的那个中文文档有问题，插件被换掉了，所以按照中文文档写的任务是跑不起来会提示错（好像是fs.end不是一个function）

用了gulp之后，感觉真是爽爆了233