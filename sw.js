/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","464136f5df7ab72b2f5c1a68a83cce23"],["/2015/03/android-hostname-change/index.html","d3594f7a4191dbb63b7e459c58f77388"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","bfb4d5a9bb7f909e2ea68da77001587e"],["/2015/04/android-chrome-issues-with-webpage/index.html","b1db0e06f72f06448f01613d67a7489b"],["/2015/04/cpp-study-log/index.html","e343440d5a74792b2406be16c1840c03"],["/2015/04/github-pages-ssl/index.html","76fa318eb9d8e34caf61c37e1ce11ccc"],["/2015/04/hello-world/index.html","608b6945a7771aefba810b150e8cd3c7"],["/2015/04/hexo-setup-log/index.html","88c877ede7ebac102c3db1b939510339"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","e5823c7ce5f0d85ec4e01c43606722df"],["/2015/05/cpp-inherit/index.html","40893d08135e7139e71e14e11698a09f"],["/2015/05/cpp-polymorphism/index.html","6db6c48d462a19eb6f12234d1258738a"],["/2015/09/android-root-ota/index.html","64a101f598f765d9e30dfd73ee5e8947"],["/2015/09/java-learningNotes-1/index.html","e594131dd10738ed31e8b46c19025b39"],["/2015/09/newblog-newlife-2015/index.html","1e336da3d918a670fc0710decb01676c"],["/2015/09/router-rebuild-2015/index.html","2c20f0a45690a9975a4fad9418edfd04"],["/2015/12/2015-12-21/index.html","8525a98dd99cbcc722da994e10d54a9b"],["/2015/12/PixInTouch/index.html","416bf4843e0c52d63acc03f33c9d0a6c"],["/2015/12/git-study-1/index.html","587d9c67a99c6f569b37f241e9400344"],["/2015/12/hexo-backup-and-migrate/index.html","f6a777213db99617bb7ad30de7d37e29"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","059e56a3e38f03d6536d4a83357a16e9"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","2deb1e70e5cb25092a848cc94a7d6db3"],["/2015/12/router-reconfig-2015/index.html","997093ed0b335e0cf2466c8975b3b841"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","d03f018e6b7eafcaed618c0da5792b8f"],["/2016/01/2016-stepping-further/index.html","be09fbc386e2672fff81dc8c3aa53119"],["/2016/01/Android-Study-1-22/index.html","6fbca56846e8cc6c23998ba293b3ba79"],["/2016/03/2016-03-20/index.html","ed02a7fd940309827101be709d1c2146"],["/2016/03/GSC-535/index.html","e2313248d05e810709ffd5b23a942b53"],["/2016/03/gulpjs-1/index.html","38523bbf08ecdc512711e6216390c92e"],["/2016/03/hexo-theme-paper-white/index.html","96488ea1e86a8795685f3a81e61c8167"],["/2016/04/2016-04-19/index.html","f189e34b7dd761654c565d15be1b8cce"],["/2016/06/2016-06-16/index.html","5aace3d60871112bc91ba18c4af588e9"],["/2016/09/2016-09-18/index.html","b756b388b92ea06dd5e7ddfac6e399c3"],["/2016/10/2016-10-27/index.html","a31c6f83fcfbc44e4d1d682482692dae"],["/2016/12/config-switchresx-and-2khidpi/index.html","a8989e72741babf42bf8b3a1789c9bc3"],["/2016/12/improve-duoshuo/index.html","ce48cae02cb42a3b9551c05991182359"],["/2016/12/use-travis-ci-your-blog/index.html","f3ed8cdd374e36d7687a9247c07b72b8"],["/2017/01/2017-iyahoi/index.html","bcd80c962ec7a00aba20b895bdf3a84e"],["/2017/01/webpack-amd/index.html","a9c027d201a3b27dc57ea64a5c5360f7"],["/2017/04/kotobukiya-syaoran/index.html","d2c5ecfdbb793f9938d43d41b4e212ea"],["/2017/04/macbook-and-surface/index.html","b9edd83ee7ff7f31fee5cc1f23e9d01e"],["/2017/04/uc-hyakuya-yuichiro/index.html","80527352bcf84177a17afdb84be792f4"],["/2017/06/noragami-seichijunrei/index.html","1a6fd995f33ec3e8924e62cb62dcc2f1"],["/2017/08/cross-compile-55-libev/index.html","36a7471d31aeeb5ccf4232fa7b69c416"],["/2017/08/explore-service-worker-working-lifetime/index.html","a410e7a3e6d9614b08a143f3c49449ea"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","4582efde01f10883782440b1529492ae"],["/2017/09/record-user-login-status-methods/index.html","42ebdda09cad3fc82041f65b220ab902"],["/2017/10/vue-typescript-early/index.html","62ca48025983a5d30a8f2adf5d518df7"],["/2018/04/2017-end/index.html","816baf464e4282d3f797284736dfc9f4"],["/2018/04/twitter-account-activity-api/index.html","f658c40cf71d5beaa11f06578af3df7d"],["/2018/05/buddy-complex-seichijunrei/index.html","82838564b7d6954fc75ac1da12969977"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","9cd540bb1926deeb334ea6fac0483b02"],["/2019/05/2019-05-17-google-io-tech/index.html","fa7920c88c18ffadd6efddf1a6e56f4a"],["/404.html","19a1ab120dd000f8c0b9a86eeb1a4cbe"],["/about/index.html","cfa4ada32c6b4c2497a976348e3819db"],["/archives/2015/03/index.html","c7de0d2ea6ccdbd0216f6caba3336bbd"],["/archives/2015/04/index.html","93f3923452006f575ae6952ef7ffb958"],["/archives/2015/05/index.html","e38ee223b60da73af380683c6f2f22f9"],["/archives/2015/09/index.html","b82860193cf3823536dbbd682e188f62"],["/archives/2015/12/index.html","0e3788a9549a30c970f88b8115a8af23"],["/archives/2015/index.html","b895b8397fb098257a781f358d3f96a6"],["/archives/2015/page/2/index.html","2b395542e1a89fe6894adee31b666e13"],["/archives/2015/page/3/index.html","d847a74843ba8ccbf1c40c9ee61f3d1e"],["/archives/2016/01/index.html","278574d413e7b7a08ac1693e2acea69b"],["/archives/2016/03/index.html","139f5d777cc9d750742ee3533f2450a3"],["/archives/2016/04/index.html","7b60d4979afeba9985ac77f736ef5062"],["/archives/2016/06/index.html","18f6fda723ed540290d67a96c7eb9282"],["/archives/2016/09/index.html","de3394efa020d013211de103400d7f55"],["/archives/2016/10/index.html","60ce60b124b496a1e54cd6791ef78ffe"],["/archives/2016/12/index.html","95a4a5fc400ef052571865d9fbe1b617"],["/archives/2016/index.html","75def8beff6dd47628c7a7d186f282a2"],["/archives/2016/page/2/index.html","8628da500c5b04962f1bc03383ba3da5"],["/archives/2017/01/index.html","add336a76da673353c605ca07734dc87"],["/archives/2017/04/index.html","a2d216c1076661171cdbf63ae23f809f"],["/archives/2017/06/index.html","a2578872c3cd61502715b0d1e39a1275"],["/archives/2017/08/index.html","c1731a9f9e3fff86ab2ecd3fd72145a5"],["/archives/2017/09/index.html","27e2c3b4393175df2c609abb382a4cb6"],["/archives/2017/10/index.html","1b0ba9e09d69ce480884c520bd9c952d"],["/archives/2017/index.html","84434b479dcc4bc6b38409527720306c"],["/archives/2017/page/2/index.html","f723030d4ae4c55f4d94d227cdaa04c8"],["/archives/2018/04/index.html","f64c052ea86ddf00274e9468fcb90aa5"],["/archives/2018/05/index.html","6653ef70fad276798709e234f024173f"],["/archives/2018/index.html","63f2def7f8e0dceb5fdf4c113cb53802"],["/archives/2019/05/index.html","245fc8a481375fce92372f946423e725"],["/archives/2019/index.html","60b9bf630416d0f8205925bbcd1e55f1"],["/archives/index.html","72ad343999d3aa5ed6fda1938e6051c5"],["/archives/page/2/index.html","b80dcf134e3fcd6703b0636e4e8148e7"],["/archives/page/3/index.html","56e3d4d18e3e74f804d182e759ac2b4a"],["/archives/page/4/index.html","7cf1da99b2e66aaebd446e0526904ca0"],["/archives/page/5/index.html","3f87e7bf489f02425e562a10cc60623c"],["/archives/page/6/index.html","d605d71e6108a9ea7e83b983fcaf900f"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","e72b78019919493fcb67166a63f2e2ca"],["/categories/ACG/Music/self-copy/index.html","f8fcaec34b26df7813a2797b5bd0a737"],["/categories/ACG/Travel/index.html","0c11f28da6d643d898b714b65c53ea27"],["/categories/ACG/figures/index.html","97484c58dbb810aab6885a108822e8b3"],["/categories/ACG/index.html","67add78c730cd895b643c37935acd276"],["/categories/dev/Front-End-Dev/index.html","cfd787f6e9459dcb13b39fc798b49197"],["/categories/dev/HTML-CSS/index.html","ad0c11902f77dd948460abaaed3a77a5"],["/categories/dev/android/index.html","5f0cbe3d7cbdf98f3df2f72f88004e58"],["/categories/dev/cpp/index.html","ad53af224ccbcdd04f3c7624cc682299"],["/categories/dev/git/index.html","a42a84fd1dcf71e34fb46dc8e6e3d29c"],["/categories/dev/index.html","459a06b387de4b8440b00ea242f96101"],["/categories/dev/java/index.html","e4d4fd4bc12469c284af9d07ed63f0ae"],["/categories/dev/page/2/index.html","2e50a1cfbe416668b2a85c294816b5b3"],["/categories/maintaince/blog-setup/index.html","a384b86c2ae6be33b91f94e34bcb6723"],["/categories/maintaince/index.html","a0ff5cc56436524e0b8456284f317727"],["/categories/maintaince/macbook/index.html","85426f2c20651e042fd670945df507a3"],["/categories/maintaince/router-config/index.html","014a9c974a2bc866b027ccd8250c1774"],["/categories/notes/index.html","f3229d55c252d152a299e7a718455f9f"],["/categories/tricks/android/index.html","a4b2263fe727e7474cf56519b5660ebb"],["/categories/tricks/index.html","21f25e20dc52bb1ce104294fd42e1b5a"],["/categories/uncategorized/index.html","e4eaafd050dc0786d93299a72441f628"],["/categories/works/Front-End-Dev/index.html","729a2f90f83084d9185d12cccb239de3"],["/categories/works/csharp-wpf/index.html","5a29c1e3496c4f4ff4c1e1051ff4956b"],["/categories/works/index.html","697be4f2b8e35407c158f789900fdc52"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","170435c68b942ecaa0abb3bceb9bd1e5"],["/ja/2015/03/WNDR4300-setup-log/index.html","dcbe902da4d6610e4b6dbf4dc89be8de"],["/ja/2015/03/android-hostname-change/index.html","867b0076fcc9c0fa4ef27334bb0c5ce4"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","948b6ec0021b7325245a77dae3646eb6"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","069c7b6d530042a3157a3a4eaa3e5bea"],["/ja/2015/04/cpp-study-log/index.html","370e6fe9b0db45cb6876d5d6138daba8"],["/ja/2015/04/github-pages-ssl/index.html","7034ac2f4e8f80007945198f1ed1d69e"],["/ja/2015/04/hello-world/index.html","5220effb39c970b79c265ce7b09826c6"],["/ja/2015/04/hexo-setup-log/index.html","f5069683ed7c8cdb12caf37432273647"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","d6a3681df3a388f1bb9ecfd28bb2895b"],["/ja/2015/05/cpp-inherit/index.html","a1d6546f83e07b2b40b85ff4cc5a1166"],["/ja/2015/05/cpp-polymorphism/index.html","1e253cacf76289b89caf9c61b7923287"],["/ja/2015/09/android-root-ota/index.html","b79e27fd77179ef1e5e852b8c111e94b"],["/ja/2015/09/java-learningNotes-1/index.html","064969f8ec52eb40f7fecda4f6980734"],["/ja/2015/09/newblog-newlife-2015/index.html","6ea9f0d0319dba2a92ead1c1f30c88a5"],["/ja/2015/09/router-rebuild-2015/index.html","0471a9b84d7886ebd24db2e0cd5c738c"],["/ja/2015/12/2015-12-21/index.html","1a1c45616c4cdc456537e2645a1ef24c"],["/ja/2015/12/PixInTouch/index.html","e9f802ca9b0cc6afbd7bae66e87ddf41"],["/ja/2015/12/git-study-1/index.html","93b3f41ae796cf03125a7de72b8ef1bc"],["/ja/2015/12/hexo-backup-and-migrate/index.html","a80a2eb6d0ee5ada0d556558ba69e2ea"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","6704a8eb7d6d9f636b205edee00977db"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","a3d39db41ef51da30c5686db55419a08"],["/ja/2015/12/router-reconfig-2015/index.html","00b3fa6c9164bdb9197ceb012e5bbae9"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","e2590273a9cdc24648aa21a73b948910"],["/ja/2016/01/2016-stepping-further/index.html","e07e103479f7340b5fb97471387c86fc"],["/ja/2016/01/Android-Study-1-22/index.html","3d9fa4f00447aa428e983b7fccc8adb3"],["/ja/2016/03/2016-03-20/index.html","b4a0d3f7c49c85bc06968e70568077e1"],["/ja/2016/03/GSC-535/index.html","4c51044220e27ad4c7a5919686a286d5"],["/ja/2016/03/gulpjs-1/index.html","fe866749634c7c79d96ba2da417f96ed"],["/ja/2016/03/hexo-theme-paper-white/index.html","eabce60afdc2b2e3942eb9a0438e80ed"],["/ja/2016/04/2016-04-19/index.html","72efb4e40dff0233c46ea71fdb7a80e6"],["/ja/2016/06/2016-06-16/index.html","f82cbe9539c1bcb82c22d7e52a21c0be"],["/ja/2016/09/2016-09-18/index.html","ea8698bd7bec10535ae2fce8154ca453"],["/ja/2016/10/2016-10-27/index.html","d482e28f84e30c8ea6a75783dc5fe7e5"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","72fb6cbf2e9fe939a9b32f1a15da3dfe"],["/ja/2016/12/improve-duoshuo/index.html","2b989ff44d03e929218dc9afbeb6da3b"],["/ja/2016/12/use-travis-ci-your-blog/index.html","fd955c2ce541096f6475acceb22629cc"],["/ja/2017/01/2017-iyahoi/index.html","85b5d5ad4b608e35b531c29ceec6b43b"],["/ja/2017/01/webpack-amd/index.html","cc88552c0b8292e5d1fce2b7adb77ef2"],["/ja/2017/04/kotobukiya-syaoran/index.html","a9c303ccabed8bd1ca60a34317435456"],["/ja/2017/04/macbook-and-surface/index.html","d633499812a30f789fe4f980260221d6"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","ab0c5b1c0b249ece95acf16ebe4ee366"],["/ja/2017/06/noragami-seichijunrei/index.html","97fbbf53749d03c548f8266071c00572"],["/ja/2017/08/cross-compile-55-libev/index.html","d72e829abd96b3d8814967dbc8844413"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","7ade4dcf30dfd51ee9e8e6a0960c3bff"],["/ja/2017/08/hello-jp-world/index.html","1d2e08c19c7e3ca51612d894c42c10d9"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","870834fb04ca33b2f11913714316472d"],["/ja/2017/09/record-user-login-status-methods/index.html","5b7764255c88737c209760de394d3c3d"],["/ja/2017/10/vue-typescript-early/index.html","5fb49319239af9b9f8b9b7d630847245"],["/ja/2018/04/2017-end/index.html","f6b6e1e2434100451735e42da1e34057"],["/ja/2018/04/twitter-account-activity-api/index.html","5934dbb0fdf847143f80c2a8fa92a514"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","52571274bba96aef0af6a1e2291c8338"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","90989ec6f26aa271240b0abbf627cbac"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","9818a5988811910a69d40c6f67098287"],["/ja/404.html","9d6d64b3f73133e032494b7292de22cd"],["/ja/about/index.html","9e341f0d4da045fb7c14a2217378f658"],["/ja/archives/2017/08/index.html","21363f3473d74ef88553110634cae8c4"],["/ja/archives/2017/09/index.html","dfb00e4177c53a107bc84c45f36ee79e"],["/ja/archives/2017/10/index.html","6bfb9533f8f15ddaf1e7a34f370a116e"],["/ja/archives/2017/index.html","f76150f01c21975403305fa70f41d5c8"],["/ja/archives/2018/04/index.html","f34b2f451d0d7009cba4293776ed2045"],["/ja/archives/2018/05/index.html","158e66d7c34ca39712f3efa6c82a6261"],["/ja/archives/2018/index.html","68cd3850b197772c078ce0d991f7b1e3"],["/ja/archives/2019/05/index.html","f4bec843ee307bccc85085b94c38defe"],["/ja/archives/2019/index.html","a9e0f3b18cce0569675b03e51e31997c"],["/ja/archives/index.html","e5b6b01614ab3178751e9ec8695530f1"],["/ja/categories/ACG/Travel/index.html","414c276e8fbc93f47a7032d71e40d4c2"],["/ja/categories/ACG/index.html","e2eec66bffc0d48166accf1d14715944"],["/ja/categories/dev/Front-End-Dev/index.html","f3518dfaa33aa2b7a84e205f104f624a"],["/ja/categories/dev/index.html","536048f044f22e675930d2b53d90a467"],["/ja/categories/uncategorized/index.html","6455b2a8870ee88aa651be35b3a96b6d"],["/ja/index.html","c1d7b60ed9e85fd467d10f4726533267"],["/ja/nihongo-test-page/index.html","a61fb2ef5d924f29b0d0372dfe5cd285"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","69b9b30a364bbc36705ea0e2a43af618"],["/page/2/index.html","63a52aa452b1ef0eb779ec9b06b2baef"],["/page/3/index.html","619646028b07d553bc3f94fe11473f0f"],["/page/4/index.html","925718cf68b3d215e84c708540e91e1c"],["/page/5/index.html","d9ab7e892493f12aa64151380d2265f1"],["/page/6/index.html","089d90851fa2b5eff6e468147474848e"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","f48c276f098e166a763f2186ba82832c"],["/zh-cn/archives/2015/03/index.html","887d20d95b35c203c3b5ae918f1470d9"],["/zh-cn/archives/2015/04/index.html","70dae727ca1722f8576e95bb1edc9e4b"],["/zh-cn/archives/2015/05/index.html","6aa2f4bdf9964f0c5aba6b93bd35b097"],["/zh-cn/archives/2015/09/index.html","6d5ad8859bbac8b78380092b4112461a"],["/zh-cn/archives/2015/12/index.html","c0b51bdf6fc8bc2308de3db2bb0cfbd4"],["/zh-cn/archives/2015/index.html","2ee664ba0a2f59fd435c811aa566be05"],["/zh-cn/archives/2015/page/2/index.html","8ff3b9fa0db4f0b690814d6f1c4be8cf"],["/zh-cn/archives/2015/page/3/index.html","c43feb532baa8b5fb9bb1adce1932cc6"],["/zh-cn/archives/2016/01/index.html","8aa2648741331b07968ea9c47f37eed3"],["/zh-cn/archives/2016/03/index.html","79a2a50deed127978ec0abd99d87a46c"],["/zh-cn/archives/2016/04/index.html","0847fceb7e9d228cd3b1980882c7b3f1"],["/zh-cn/archives/2016/06/index.html","794979313b6101fcb1be166be71ca86d"],["/zh-cn/archives/2016/09/index.html","0230917c67dd0b500be2b4c1d3baf255"],["/zh-cn/archives/2016/10/index.html","4b7ab6cf45a6d0c142164b81d129c39c"],["/zh-cn/archives/2016/12/index.html","2a54879840a199b45c60e1ffce050c51"],["/zh-cn/archives/2016/index.html","8b10ef5ff9971f341cc1f1720c54ec57"],["/zh-cn/archives/2016/page/2/index.html","f4787df80273936e6f178435758920b1"],["/zh-cn/archives/2017/01/index.html","dd26019b0243937957bb982d763ec7e3"],["/zh-cn/archives/2017/04/index.html","8158534e9e4a695e41c1574b6970c9db"],["/zh-cn/archives/2017/06/index.html","e900fc0cf807a33493aaf80f2a50f6ee"],["/zh-cn/archives/2017/08/index.html","d3dec905a5d0ecfef411c86cabf595e4"],["/zh-cn/archives/2017/09/index.html","5f1cd78908c21c5be1151cb24290a63d"],["/zh-cn/archives/2017/10/index.html","befc7e60fc922b435cddeddd9792f7ef"],["/zh-cn/archives/2017/index.html","dbdb7ac8654eb0266d57effb5c69ca0b"],["/zh-cn/archives/2017/page/2/index.html","3104a85433f51913fa82f54a15ff8414"],["/zh-cn/archives/2018/04/index.html","70a117d454daa2c0ce5a5556ef32a830"],["/zh-cn/archives/2018/05/index.html","637d6186fb869ac311dae2d1f1b698a5"],["/zh-cn/archives/2018/index.html","f8c54b72e2371b9835d84f2c21956770"],["/zh-cn/archives/2019/05/index.html","7183bf28cf750bca5e203aa4ac9826e6"],["/zh-cn/archives/2019/index.html","d08b9171c67ea97a4ff622e898231615"],["/zh-cn/archives/index.html","ad0b5d2fbdf1a45e8ed04fec5de21f11"],["/zh-cn/archives/page/2/index.html","ec07e087e69d5211289ab7fbc2571910"],["/zh-cn/archives/page/3/index.html","4b9f294b7e06e2ea37d08c2ae9614866"],["/zh-cn/archives/page/4/index.html","c2d709497e699e4e49f2d6cb5505ce1e"],["/zh-cn/archives/page/5/index.html","643fe83fe92473542f96d75a9f217764"],["/zh-cn/archives/page/6/index.html","bed3de12b062de5134d8a306ecbc5481"],["/zh-cn/categories/ACG/Music/index.html","44a525d4169454d789c5c436e59d2f9e"],["/zh-cn/categories/ACG/Music/self-copy/index.html","6e38a0f3708eef93b98e5c09bae5fe58"],["/zh-cn/categories/ACG/Travel/index.html","49e4bcbf862020d569cedd1d29a9d446"],["/zh-cn/categories/ACG/figures/index.html","9ab5c442acb825cca32de1c5d3c676bd"],["/zh-cn/categories/ACG/index.html","584fd0cf3b412b85bbaefdc38b5745ef"],["/zh-cn/categories/dev/Front-End-Dev/index.html","da2af69f03ed7a489c40980d1f4d6608"],["/zh-cn/categories/dev/HTML-CSS/index.html","a8b154e78620e6cc926d8efd40037c8f"],["/zh-cn/categories/dev/android/index.html","89918f01839f8495b8381109aabcbcab"],["/zh-cn/categories/dev/cpp/index.html","446f78ca7fde504e68319f700d8661b3"],["/zh-cn/categories/dev/git/index.html","897c6d58471563fe3a991ce676f9ce58"],["/zh-cn/categories/dev/index.html","6b19666279530d3f74ae4c52f150d3c0"],["/zh-cn/categories/dev/java/index.html","7a7e677cbded1ab93578013f3a01659b"],["/zh-cn/categories/dev/page/2/index.html","fe7917aad2e8a74ae3a0a702ae31c0dd"],["/zh-cn/categories/maintaince/blog-setup/index.html","6dc96170b6ab092bb23d67c11a355443"],["/zh-cn/categories/maintaince/index.html","14199ef8cc6661e6ac7a599b82bb4f7d"],["/zh-cn/categories/maintaince/macbook/index.html","f1e52073cb4e8be09fe628793913cc3a"],["/zh-cn/categories/maintaince/router-config/index.html","d40914dcda0128f61c6ad0a8a48b515e"],["/zh-cn/categories/notes/index.html","b96d52c7600d4362eb411f9c925f4f1c"],["/zh-cn/categories/tricks/android/index.html","422d04f64dc31ce9c499e7253e4c3821"],["/zh-cn/categories/tricks/index.html","d855f1acb279e05296524f691475b2b9"],["/zh-cn/categories/uncategorized/index.html","7b677262269f2c2efd86351103d3bc74"],["/zh-cn/categories/works/Front-End-Dev/index.html","59b4e4809ba24c054adceb0a38e24946"],["/zh-cn/categories/works/csharp-wpf/index.html","bf93a0ff40e7a0f8ad375f80ed4c7305"],["/zh-cn/categories/works/index.html","04e5b2aca7cb7b37a40d020590306ef9"],["/zh-cn/index.html","8f134d92d5ea29ebdfb024c5620acde5"],["/zh-cn/page/2/index.html","a1bf72a487255688e7e09a0be12a56da"],["/zh-cn/page/3/index.html","e03d940a84ef96bfb667c273adec7eb6"],["/zh-cn/page/4/index.html","c68a785511d510209e52c48ba8bf85d3"],["/zh-cn/page/5/index.html","280d5ce2b182f51bfe18641d275c9442"],["/zh-cn/page/6/index.html","424e5398368c408d8658073469c8d4b6"]];
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
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"static.xingoxu.com"});





/* eslint-enable */
