/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","ebf41fb9f54ac5dc09d6a2944e03a0da"],["/2015/03/android-hostname-change/index.html","6a80672e00a8a0927d2c67730eac0320"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","e5cca9774b6257dacf20ba97e96e91c8"],["/2015/04/android-chrome-issues-with-webpage/index.html","6c1da76c38d1f77f4e2e20534427c372"],["/2015/04/cpp-study-log/index.html","1640f7be75b5732919dd43957ec642b6"],["/2015/04/github-pages-ssl/index.html","f551d7347aaa015a016240ecf888b2f1"],["/2015/04/hello-world/index.html","5e2d4f02378748c547cf19fc17e801e3"],["/2015/04/hexo-setup-log/index.html","0d6b603ccdcd71d410ea6862b945b3e0"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","8fb4e90edc8c8c3b37fd83f54e55dcf4"],["/2015/05/cpp-inherit/index.html","14d3af625be911c5de46fe4677e773a0"],["/2015/05/cpp-polymorphism/index.html","e0ba2f0984084d51ea3ca14986a1914c"],["/2015/09/android-root-ota/index.html","006f6eb432fae5de099d3e85f118fa12"],["/2015/09/java-learningNotes-1/index.html","b6b9cfcdbde23b61b10609c0067f5967"],["/2015/09/newblog-newlife-2015/index.html","70177f9c4b995339990ae4b69bbf7443"],["/2015/09/router-rebuild-2015/index.html","21f55a5bcfdc0403696dfa5578a97257"],["/2015/12/2015-12-21/index.html","bedbd469b5514c620b3d1d91c57909d2"],["/2015/12/PixInTouch/index.html","f252c0ca8baae5e8126d94d494fbd159"],["/2015/12/git-study-1/index.html","0ea0ac7445447f813607a7912ceb371b"],["/2015/12/hexo-backup-and-migrate/index.html","83f2b326b21b7656be5167222d40907a"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","ef79148f3a8242067717a291f90a8f4d"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","d5294d55ebb0510a4168e7132b94dac6"],["/2015/12/router-reconfig-2015/index.html","274ebc52443bf948bd459c4a15187eca"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","5fe91ed0e0f6cbbb18e317e9b68688c7"],["/2016/01/2016-stepping-further/index.html","75d19f48ea01250885cee7a378a5e1da"],["/2016/01/Android-Study-1-22/index.html","df0c3b1513147fd1f552f1416b619bea"],["/2016/03/2016-03-20/index.html","1fafdf383055ad779ff815691ca54349"],["/2016/03/GSC-535/index.html","121e16551b52980273a14cd231e4a5b9"],["/2016/03/gulpjs-1/index.html","15fbf7db3d048834a19ad5c8a03578cf"],["/2016/03/hexo-theme-paper-white/index.html","7d638155a3814c97961395d100afb043"],["/2016/04/2016-04-19/index.html","b0b407cc2fa880def86bd22152bb2f1a"],["/2016/06/2016-06-16/index.html","8572958f3af5aa9cb26f67f859304e46"],["/2016/09/2016-09-18/index.html","5781bab06d5064841119d52d65ddc70b"],["/2016/10/2016-10-27/index.html","4cd6e317dd2ac1c187595b00f864b97a"],["/2016/12/config-switchresx-and-2khidpi/index.html","480b8f7e87fb34c835a5c59c2ba2bf0f"],["/2016/12/improve-duoshuo/index.html","07b9cc5f2455aa068dbeec0ab4015e01"],["/2016/12/use-travis-ci-your-blog/index.html","7982d66ca0c7bffa02880a8717c1b13e"],["/2017/01/2017-iyahoi/index.html","5454b000e4310560c00f05ed98d64b68"],["/2017/01/webpack-amd/index.html","186377bcd7b7d540b98b50c03845d253"],["/2017/04/kotobukiya-syaoran/index.html","c3b0436099ad869df0a5cb1631c87e17"],["/2017/04/macbook-and-surface/index.html","a18a538ecfd709cf3871be293bac232e"],["/2017/04/uc-hyakuya-yuichiro/index.html","2e8f5099a3bf7b1630fdf361e0656ff2"],["/2017/06/noragami-seichijunrei/index.html","6193b14cda0047125a764a27a0077e66"],["/2017/08/cross-compile-55-libev/index.html","18e0d88d00ad51fe2359b379d918d8e4"],["/2017/08/explore-service-worker-working-lifetime/index.html","ba685ff2caf8c53b5b8851e126ba9087"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","f4888eceef41cce562f08a3f8da1ff4c"],["/2017/09/record-user-login-status-methods/index.html","57c05df52168e3304b42a8858d907b48"],["/2017/10/vue-typescript-early/index.html","585a756af4bde6a9ca0b1af22dd4ae46"],["/2018/04/2017-end/index.html","b5ef67a6e8ce7343749c08bcd11b465e"],["/2018/04/twitter-account-activity-api/index.html","3de44cb66b762880df0cd66097f635be"],["/2018/05/buddy-complex-seichijunrei/index.html","e31c9c660a0e35ab53e83f51cdbf0416"],["/404.html","e65a982590f3182b339a62f62982307a"],["/about/index.html","ca5bf47c14e88696f1e3439f33b0f9b7"],["/archives/2015/03/index.html","c3296d7b26fdf8b679cd17ad3828e0d4"],["/archives/2015/04/index.html","c674ed8b396f4fb8d403936f3f0be045"],["/archives/2015/05/index.html","ab3818632d8d50aec7fcd21b41a1bf01"],["/archives/2015/09/index.html","71526bcf70f9e72fa9eb13f8b4f3c91b"],["/archives/2015/12/index.html","e1ef9e5c4bb76a3effb9805907c331e1"],["/archives/2015/index.html","ccae86e106007fafa43831a2448a619c"],["/archives/2015/page/2/index.html","164c7d2c2321f0e960077ca16f6689a9"],["/archives/2015/page/3/index.html","e3319a17f76f287240c5f201aff9e50e"],["/archives/2016/01/index.html","76250d047c7ff1b427a6f4c8b5fa9287"],["/archives/2016/03/index.html","29d0308d73a6c094189bf5745c630490"],["/archives/2016/04/index.html","412dc8328a47e1d29ee8d41e1d3d51d1"],["/archives/2016/06/index.html","536cffca7d63f5e970717446fc471d0d"],["/archives/2016/09/index.html","7103afdd92322d151ca687eda95ae598"],["/archives/2016/10/index.html","c963c7a7b2da64ab6d9e1e2313670ad0"],["/archives/2016/12/index.html","1c27609b219a02ba7f72ddcb71038aa1"],["/archives/2016/index.html","2584960fc5efcc285819c8c560fa76d9"],["/archives/2016/page/2/index.html","f68a2f1bf59d0f48670e0812037ef03f"],["/archives/2017/01/index.html","4bbb42084951d5ab45e9113721d3566a"],["/archives/2017/04/index.html","7e3ecc268760635263fd849ad7367e03"],["/archives/2017/06/index.html","7843643d430f1034cf07ee754d3a8f6b"],["/archives/2017/08/index.html","81fd98cfe54358adf1d1ca22129e280a"],["/archives/2017/09/index.html","f3a2af9501162c435a1cb2c48ce025ab"],["/archives/2017/10/index.html","fdb0ad5e7f1576490f558e55b5d1531d"],["/archives/2017/index.html","e6c07b615fd41914c72997d56a1b6e72"],["/archives/2017/page/2/index.html","a8176fa6184d9bb28fcbe9a0d920b72b"],["/archives/2018/04/index.html","d0c994d6f5d860f3715f23267b554c1f"],["/archives/2018/05/index.html","aa26d719ac31c2fbefd294ab1f38eeae"],["/archives/2018/index.html","98e79d5c3f9e0330e6c34699cc8d3bb9"],["/archives/index.html","382043194af5721fa3fa9a1572cc9ba8"],["/archives/page/2/index.html","55b4bbd7ae701d643dccbd6a9d6ea302"],["/archives/page/3/index.html","b7c44a7040ed19f4c03302c75a42294b"],["/archives/page/4/index.html","9aa1caf0cee5032eb201ad6731a9d690"],["/archives/page/5/index.html","1cdb25368de5293db3a19eee2eae8612"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","f2be36b7d04738259c04878bcfcf3d2c"],["/categories/ACG/Music/self-copy/index.html","59acde27d1f54a00a22e0eaf1f8ef1d4"],["/categories/ACG/Travel/index.html","0609c7a21117145eecab6c9d7ee05bb2"],["/categories/ACG/figures/index.html","46237306589066e07ab77b9da841fb0c"],["/categories/ACG/index.html","e75072c273a2789c8498298a72929a4f"],["/categories/dev/Front-End-Dev/index.html","63dfd879fde5718b943a320d52785758"],["/categories/dev/HTML-CSS/index.html","79399e9d882047f436768beb531a0e1c"],["/categories/dev/android/index.html","5f8d2e3bd7ede46832813a71652d3d58"],["/categories/dev/cpp/index.html","8ecd8d3bf3c8d3aa201d207f911d2754"],["/categories/dev/git/index.html","e4457547cc094e23706e728cd17ead08"],["/categories/dev/index.html","782ff95b565efaee2b96293fb0177f89"],["/categories/dev/java/index.html","b07b1ec0f4f8350043cb745344224cdf"],["/categories/dev/page/2/index.html","6d2446aaf1d3fa766c54a27d4e5e650e"],["/categories/maintaince/blog-setup/index.html","5bd796f293c721fdd3c2ea5282086432"],["/categories/maintaince/index.html","b36b80ec2cce32d21db25fef22e07255"],["/categories/maintaince/macbook/index.html","d594f9adb7526ddeaa5de7f7f17d30b6"],["/categories/maintaince/router-config/index.html","33ece79e53e716d8d0d4f3fcbae26bde"],["/categories/notes/index.html","1f35d23bdcdea2c6a6862ba9e76a99de"],["/categories/tricks/android/index.html","ed9f6e5f9bbc086dad272f2b715a80e1"],["/categories/tricks/index.html","7954bf1b9bd01b76baf6aeb5f0b0fed1"],["/categories/uncategorized/index.html","b6bc5291604bdac51c30a45c390da407"],["/categories/works/Front-End-Dev/index.html","7a00d7c3db2eb5f3328b3905c5586d0c"],["/categories/works/csharp-wpf/index.html","f16c6f4d1e1ceb17ae2f3362c2b8bb06"],["/categories/works/index.html","0dfd07823497fdee3795618ab0fba5dc"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","8d65639c373f78b8e9ca5e8f159113ef"],["/ja/2015/03/WNDR4300-setup-log/index.html","3849b1ce943d4a17c85b25d8a2451c44"],["/ja/2015/03/android-hostname-change/index.html","31d187b59d4b21d5be250cdb5948ae58"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","07f3299f421c2fb8521c9717a1692e51"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","e13017f2cfc5bdeec6e4e229b455706f"],["/ja/2015/04/cpp-study-log/index.html","d3e915bf4c3bf861cb33db6a2c95bb9d"],["/ja/2015/04/github-pages-ssl/index.html","5fc0be690905a024a24a662551bdabfc"],["/ja/2015/04/hello-world/index.html","aabf0cf3145703bbee03064ac1565456"],["/ja/2015/04/hexo-setup-log/index.html","a3ba3c733e38edd19cb820a9ac59a12a"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","4358d1493cedf0c9d80a315fa7ca370b"],["/ja/2015/05/cpp-inherit/index.html","b7ead379a54cca79958bb5855067d928"],["/ja/2015/05/cpp-polymorphism/index.html","2fc7661de3f2af367617773dc5727ed3"],["/ja/2015/09/android-root-ota/index.html","d4b8c6335db45de8d1dfa584088b1bd9"],["/ja/2015/09/java-learningNotes-1/index.html","2ce16a2981840cc738a7453d8a74292a"],["/ja/2015/09/newblog-newlife-2015/index.html","ede01d3d960eff2db143a2db1481a6c3"],["/ja/2015/09/router-rebuild-2015/index.html","819ef59b7c7e0d933296d32b2b8ff906"],["/ja/2015/12/2015-12-21/index.html","1343678263db429a0009ae154b70f13e"],["/ja/2015/12/PixInTouch/index.html","1fd1be484a9da42f2867135dd3f6e884"],["/ja/2015/12/git-study-1/index.html","be406a241551053374a93a62afd25b61"],["/ja/2015/12/hexo-backup-and-migrate/index.html","f861514b12fcebb3bc8d53e48a3ad91b"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","3262308218324fe1716836d225fbe92f"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","f737481a6c353410df33a2dc46208d70"],["/ja/2015/12/router-reconfig-2015/index.html","83a09607f22a43541b3e845b3bb0b0ff"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","7ea352c22d7cf276651fb77379725348"],["/ja/2016/01/2016-stepping-further/index.html","05341ebd31b29735d48c43fc6f5c5812"],["/ja/2016/01/Android-Study-1-22/index.html","93dfc73a2db710d016044b750c1e7604"],["/ja/2016/03/2016-03-20/index.html","f32840fc7bcdc125e84ba85084ed4661"],["/ja/2016/03/GSC-535/index.html","681a2e7397a4b6423da270afff709860"],["/ja/2016/03/gulpjs-1/index.html","174ffd1a3306bcee2701a843a5e70f57"],["/ja/2016/03/hexo-theme-paper-white/index.html","6e094fd18de23a798b3be4b117395b92"],["/ja/2016/04/2016-04-19/index.html","9f0e91bc3418215048166b5ab6c93a8b"],["/ja/2016/06/2016-06-16/index.html","00cd2312650edba0e0d2e8c856fd8986"],["/ja/2016/09/2016-09-18/index.html","53eb4dc8d51958cb797425a3ef29186e"],["/ja/2016/10/2016-10-27/index.html","da4475a479e9ee010308fcf6bce79c1b"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","e563b059e0dd7faa8e0a011f3620833d"],["/ja/2016/12/improve-duoshuo/index.html","571e7c0a871e885a915cb8c30129cc98"],["/ja/2016/12/use-travis-ci-your-blog/index.html","f3e3fc32fa94996552ab156a62332b38"],["/ja/2017/01/2017-iyahoi/index.html","b3c2f55591310f0464bd3447a09dd9a3"],["/ja/2017/01/webpack-amd/index.html","b025bef0945419e36a1d060a6ef3a189"],["/ja/2017/04/kotobukiya-syaoran/index.html","ac528b8276f9ceed69cf0e621ec59701"],["/ja/2017/04/macbook-and-surface/index.html","d1769eddafb7efdac69e49110c847510"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","759b23cd4078ef41c126f1aeb65720e8"],["/ja/2017/06/noragami-seichijunrei/index.html","d49a43aa56615ee2d935507951400c5f"],["/ja/2017/08/cross-compile-55-libev/index.html","015334faa51495cc539d0046702ca916"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","ae6ba758e8792bc04ab5048b790b5d75"],["/ja/2017/08/hello-jp-world/index.html","d22c605d03bbf710a33fc36ae6464232"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","67155e5b6393d6249b9b5c3d00bf8443"],["/ja/2017/09/record-user-login-status-methods/index.html","db72898f60f688369d75c0e2e440655d"],["/ja/2017/10/vue-typescript-early/index.html","1bc1cad0b2d5e2794f27d76a27119016"],["/ja/2018/04/2017-end/index.html","22ae22c3b9e6c748027814165905ae0b"],["/ja/2018/04/twitter-account-activity-api/index.html","4b6bd4f700fbfe1738ac3c2595da9203"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","771293a416fff38adb5c601e03ce318a"],["/ja/404.html","461c4197700f505640ca8b65923c0d48"],["/ja/about/index.html","486df9a1795f4baf6c1ed3d7f62529dd"],["/ja/archives/2017/08/index.html","7786dc11976c94c2846571a2aada3059"],["/ja/archives/2017/09/index.html","7b672b9b8bfc9bf6b9c268cf8222c8a6"],["/ja/archives/2017/10/index.html","b4900425911b16f3a0ecbe80a49e27f4"],["/ja/archives/2017/index.html","769a8d71b77537a6e387d23bc0b0cc7b"],["/ja/archives/2018/04/index.html","c88b9f815863297a8120d42bd697e011"],["/ja/archives/2018/05/index.html","2d06ec12fe1684f8b5b0d71b3a21b9b0"],["/ja/archives/2018/index.html","c711d381c34fa0135ae67397db971dcd"],["/ja/archives/index.html","824bd35f12e54895a089d6dedc983c08"],["/ja/categories/ACG/Travel/index.html","a8e1700acacb7d2c2999ae35f6e69de5"],["/ja/categories/ACG/index.html","ea3521c82df42cfbd6d7426690b6f291"],["/ja/categories/dev/Front-End-Dev/index.html","25eff28c41794991115a430b4e308e6e"],["/ja/categories/dev/index.html","a5fcc36163f7aa0d162eb2b7acf4f8e5"],["/ja/categories/uncategorized/index.html","c0003698169cc07f898727aab6bafec6"],["/ja/index.html","a6ef55ff16c446ce394545b118636464"],["/ja/nihongo-test-page/index.html","5e82a70fc296a9af08e168c2aec8682a"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","95bee0c0f79f196f46b2ae06d51128ac"],["/page/2/index.html","42d6a5f810ad14139493f70033e4ac86"],["/page/3/index.html","96985fe051bde1e071ec2bf2d77fed65"],["/page/4/index.html","50e9bad7db703d7d08e729042732323b"],["/page/5/index.html","bef478aa24c35b46b4365bb6590f0434"],["/page/6/index.html","e786a7d3e16ae94bc19ef703cd194f16"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","a53e91c200d705239205672ccc4cfc3d"],["/zh-cn/archives/2015/03/index.html","6fcc63d0c62608a37a160514774ed487"],["/zh-cn/archives/2015/04/index.html","4e1e8aa5f48e16ef0db9df6dd21fb090"],["/zh-cn/archives/2015/05/index.html","367a4083c69883ed55d2360f98854f1a"],["/zh-cn/archives/2015/09/index.html","efc38630af6735f49542b4ee802aad31"],["/zh-cn/archives/2015/12/index.html","ae25518674cc6ba113a9e46e2e298222"],["/zh-cn/archives/2015/index.html","d26770d423cb8c490463027dc548f49b"],["/zh-cn/archives/2015/page/2/index.html","74d23aff4afda254f0e9a402168501e7"],["/zh-cn/archives/2015/page/3/index.html","efc1907eb9e70e6b7605e437ad7b5aba"],["/zh-cn/archives/2016/01/index.html","68add1d18c766c36e2637f5b24a650d5"],["/zh-cn/archives/2016/03/index.html","1ff6b93910ab4c6e951528c790b31b20"],["/zh-cn/archives/2016/04/index.html","61964324fdb7840eeb6c4d3d056cc3bb"],["/zh-cn/archives/2016/06/index.html","9eafca34c705a669c9df9791c1ce835f"],["/zh-cn/archives/2016/09/index.html","5c3323e1767d8887f5c3e6d72a516128"],["/zh-cn/archives/2016/10/index.html","a755cc629ae6ebe0793a324a3276be98"],["/zh-cn/archives/2016/12/index.html","e4d6ba1df78480f60743a8e2d426045d"],["/zh-cn/archives/2016/index.html","9cbe892fbee4bd4a3a2a96d3f0cdcc4d"],["/zh-cn/archives/2016/page/2/index.html","24b50de4324bbc6a143f8ede3c77f837"],["/zh-cn/archives/2017/01/index.html","6f1e3d4103629c2987f6af9fde94b2c6"],["/zh-cn/archives/2017/04/index.html","dec10c74d59a0de90a06dafbacaf54f0"],["/zh-cn/archives/2017/06/index.html","29f9f895fcea6f861c7bdd8e861ce148"],["/zh-cn/archives/2017/08/index.html","c586d2819d6e042d4f4b0d7c97f82d3a"],["/zh-cn/archives/2017/09/index.html","225c35dc0e8c63cce5ff50b127222de1"],["/zh-cn/archives/2017/10/index.html","1c67d50ee9d18bbd2e152db38aad7086"],["/zh-cn/archives/2017/index.html","8e6e8a3dc192672e0f8ebf8f960955f1"],["/zh-cn/archives/2017/page/2/index.html","ed74451feb1690cf30ef9805afac9e4f"],["/zh-cn/archives/2018/04/index.html","399f1e3bba2c3ca3e6ab5b624350d431"],["/zh-cn/archives/2018/05/index.html","88711850f4216fac578014523e8411e0"],["/zh-cn/archives/2018/index.html","3d4cac9f7f7dc9df332aa4df2b9eaa09"],["/zh-cn/archives/index.html","4e93ca5454c813e99874a3333d719b1d"],["/zh-cn/archives/page/2/index.html","3639e6a3beb3ddf093ca6cc74abacb37"],["/zh-cn/archives/page/3/index.html","b09daba7388447e31a5c7de712f4aa49"],["/zh-cn/archives/page/4/index.html","b2197ec499ebc4074ab6409739cd0d4a"],["/zh-cn/archives/page/5/index.html","4581faee20e6cdf9850a6ad15ba6402d"],["/zh-cn/categories/ACG/Music/index.html","85b3d92dabfa0084fb7e54059118b134"],["/zh-cn/categories/ACG/Music/self-copy/index.html","2d9a46010128fe99bdcd6fa1db099e50"],["/zh-cn/categories/ACG/Travel/index.html","dffe18c9dc5cb0e8c29ed79cd78be4ee"],["/zh-cn/categories/ACG/figures/index.html","5a3537a93e2bcd900b54d75838c19897"],["/zh-cn/categories/ACG/index.html","b1a1855722f6a1403a03876e72b3ab21"],["/zh-cn/categories/dev/Front-End-Dev/index.html","f66310af08980626b36866c354f1bc84"],["/zh-cn/categories/dev/HTML-CSS/index.html","7e0436d126ac402f9bb4ee3fb3c26484"],["/zh-cn/categories/dev/android/index.html","5a01465ed5b328a4b212c1dea3df52b3"],["/zh-cn/categories/dev/cpp/index.html","4dc6f0be2d159c279a3c8c64f218d9dd"],["/zh-cn/categories/dev/git/index.html","8e3c3fd8311be298ee29f1e6fbf4076d"],["/zh-cn/categories/dev/index.html","7160036cf6f406cc50ba136134848471"],["/zh-cn/categories/dev/java/index.html","f8565a7dedde717568ec6721a812917c"],["/zh-cn/categories/dev/page/2/index.html","455b61604a23cdb15d651895c2db336d"],["/zh-cn/categories/maintaince/blog-setup/index.html","5cebbdec71b974f2a9914976de46d1ee"],["/zh-cn/categories/maintaince/index.html","6f1398263c6c913f275769138ea90701"],["/zh-cn/categories/maintaince/macbook/index.html","39f8b3061bade734efca5480533ea403"],["/zh-cn/categories/maintaince/router-config/index.html","f996d8f6e88a6e4864ef059d0a352406"],["/zh-cn/categories/notes/index.html","60dbddc699d5b5caa8b2022d4c4ecdb2"],["/zh-cn/categories/tricks/android/index.html","1edb7a40f428ed64d295d29e81b5bc2e"],["/zh-cn/categories/tricks/index.html","e268b54751dd199609b5d17fb04435ee"],["/zh-cn/categories/uncategorized/index.html","b86a0f87d06932841dadd075100cac5f"],["/zh-cn/categories/works/Front-End-Dev/index.html","e901567ba1e294a62f4b4dac736fee60"],["/zh-cn/categories/works/csharp-wpf/index.html","3de7d2ae5279ff602e99b78659785baa"],["/zh-cn/categories/works/index.html","929acedc0cc40cf16f0279d8ff1c607a"],["/zh-cn/index.html","6059816423d45be88d4cd740d4c85093"],["/zh-cn/page/2/index.html","a048477dd09a20555553b1bc1831c4e9"],["/zh-cn/page/3/index.html","bf82f88d44fae7da2aad5d581fef3bf6"],["/zh-cn/page/4/index.html","49af2d205828f29cd540f59c78a387d5"],["/zh-cn/page/5/index.html","a5f3a0204fbfba3712024d89ea020e73"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"ooo.0o0.ooo"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.loli.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"i.loli.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"dn-xingoxu.qbox.me"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"od8634671.qnssl.com"});





/* eslint-enable */
