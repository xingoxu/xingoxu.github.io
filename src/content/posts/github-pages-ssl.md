---
title: 给github pages上ssl(hexo可用)
published: 2015-04-17 03:01:59
tags:
  - maintaince
  - blog-setup
---

github pages已经支持https，可惜不支持自定义证书
我们可以用cloudflare cdn加速，顺便还能上他新推出的flexible ssl

<!-- more -->

# Getting Started

1. Sign up for Cloudflare if you don’t already have an account
2. Add your website, and make sure all automatically generated records match those on your registrar’s website

> If you already have a gh-pages website and are simply moving to https, you don’t need to do anything else
> If not, and are trying to set up your site at apex, create an A record pointing to Github’s IP addresses, else a CNAME pointing to your-username.github.io
Make sure there’s a CNAME file at the root of your gh-pages repo with your domain name

3. Go to your Domain Registrar’s website and change the Domain Name Servers to those Cloudflare provides you with
4. Finish Setting up your Domain on Cloudflare and go to the Domain Dashboard
5. Open the “Cloudflare Settings” for your domain, and change the SSL Setting to “Flexible SSL”

等待一个小时左右，Cloudflare就会为你的网站配上证书了

# 强制网页跳转https

在头代码中加入

```html
<link rel="canonical" href="<%- page.permalink %>">
<script type="text/javascript">
       var host = "blog.xingoxu.com";
       if ((host == window.location.host) && (window.location.protocol != "https:"))
           window.location.protocol = "https";
</script>
```

# Letting Search Engine know

Add these following in `_config.yml`:

```yml
url: https://www.yoursite.com   # with the https protocol
enforce_ssl: www.yoursite.com   # without any protocol
```
# Caution

CloudFlare提供的SSL服务是基于SNI技术的，也就是说，机子上是IE8及以下用户完全无法打开（Chrome使用证书为系统，所以在win7下IE8的Chrome浏览器也是无法打开的，无论版本），注意了

# Reference

> [Set Up SSL on Github Pages With Custom Domains for Free](https://sheharyar.me/blog/free-ssl-for-github-pages-with-custom-domains/)
> [Variables | Hexo](http://hexo.io/docs/variables.html)
