/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","5c38f2a61e9f6f5b038f57bc24e43268"],["/2015/03/android-hostname-change/index.html","f360bba7aa5cc074a81ab2e037cc4b89"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","21992ddf20fcf25a2125a97c6d4844d5"],["/2015/04/android-chrome-issues-with-webpage/index.html","44b3ae6c9007514fe22f0612a7b91ab6"],["/2015/04/cpp-study-log/index.html","90d26722ae84ead4471fbdeb9177d5ec"],["/2015/04/github-pages-ssl/index.html","f675726636206f28787becd9635a3634"],["/2015/04/hello-world/index.html","bf0519d4a369f4444d69f18deddca925"],["/2015/04/hexo-setup-log/index.html","9d135a72b102f5430da67d02b42440bb"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","a31de17762c8810df695d9f2ba963e02"],["/2015/05/cpp-inherit/index.html","b3bdcf3b8f816fde9bf4e590242b6051"],["/2015/05/cpp-polymorphism/index.html","97ad157b33c542503bd8260dc4aea209"],["/2015/09/android-root-ota/index.html","c5f8599b812c2871a5a29527b8b604ee"],["/2015/09/java-learningNotes-1/index.html","678bbf2138c340070937a2b6a90be2f9"],["/2015/09/newblog-newlife-2015/index.html","287de741069d2cfe4c21c48bc9fb917d"],["/2015/09/router-rebuild-2015/index.html","ba5c24a45fbaec757128ba9b99bc8238"],["/2015/12/2015-12-21/index.html","1644e94203161541a5a1c61b714c4ffb"],["/2015/12/PixInTouch/index.html","e30ee931824519e26bd1a187052b776c"],["/2015/12/git-study-1/index.html","570b3fae4c6dd0fa1b7544749bad9582"],["/2015/12/hexo-backup-and-migrate/index.html","9442a77a6b5d72174ddb4af9c6d4e699"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","2978436e9029f19b75d87e463a60e53f"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","4fa00d4e6c60ed591011a7314d938e06"],["/2015/12/router-reconfig-2015/index.html","af9cc9c6d472b35d81b94cef24b6938b"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","4e1b619db46cf6493c62a7d5f7b07a16"],["/2016/01/2016-stepping-further/index.html","6fa4c1d652becce810c4ea47f917ecf3"],["/2016/01/Android-Study-1-22/index.html","54266b37d2a6341105b757ad9c088277"],["/2016/03/2016-03-20/index.html","0123129f99c8a699c5311c2e3f0147a7"],["/2016/03/GSC-535/index.html","609862493ac85604a45d8688f2174187"],["/2016/03/gulpjs-1/index.html","999b3800dd0791bb4bbc7505378a45bf"],["/2016/03/hexo-theme-paper-white/index.html","a8d7fa72f25cab11bb714532b5e3b0d3"],["/2016/04/2016-04-19/index.html","2ea000beece4fb05ff7eeee03a0c66f5"],["/2016/06/2016-06-16/index.html","2cfc3b5767987c095803cb5f4f438342"],["/2016/09/2016-09-18/index.html","08808629d984dc011caf655d0cdf75d2"],["/2016/10/2016-10-27/index.html","91f1b4da2cd0586c1400c57b229eab7f"],["/2016/12/config-switchresx-and-2khidpi/index.html","b6d8b656418b6dfd8c2657fbf9a7a31d"],["/2016/12/improve-duoshuo/index.html","ed3d8c8b1c92e827ffccae776539270f"],["/2016/12/use-travis-ci-your-blog/index.html","5fb09e9a4511ebf29a5ba6b68f0c65cc"],["/2017/01/2017-iyahoi/index.html","4dad403d69cd19ea8361d5ea6fe3716f"],["/2017/01/webpack-amd/index.html","14b394e25e61211b78bb9c9b7669c4a4"],["/2017/04/kotobukiya-syaoran/index.html","9170afadd2b61fc8028953388dfe5b1a"],["/2017/04/macbook-and-surface/index.html","679647ba761e297e4ad52b5b102f56ef"],["/2017/04/uc-hyakuya-yuichiro/index.html","f470d476420e4eade518fa679c61bff1"],["/2017/06/noragami-seichijunrei/index.html","a8675a7f586be642d5c3d4a3247e6108"],["/2017/08/cross-compile-55-libev/index.html","df12005c7bd321aab309c16afd2ffa14"],["/2017/08/explore-service-worker-working-lifetime/index.html","8c38b97a6a143c9fadc1abf71d2408c0"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","b67855654af8a642c9712ef70f73e04c"],["/2017/09/record-user-login-status-methods/index.html","c5208c02c3a51d25a1ca6112d995d21e"],["/404.html","fb52faf54d8fa38529c84750f5c03703"],["/about/index.html","114123d946e8529f8ba784457fdb7886"],["/archives/2015/03/index.html","11db1419cfb9a9759588dd80495b6b64"],["/archives/2015/04/index.html","372b814a2860d83f53cdc3f2a43d0ed3"],["/archives/2015/05/index.html","95f8a0fa9d0178ab074d3cbb999a6d60"],["/archives/2015/09/index.html","1ae8e2df2d6991017062191371471a86"],["/archives/2015/12/index.html","bbc40a2f2cf43767ab97511c47b2413d"],["/archives/2015/index.html","ac2efb18fcbbbbc0f8cfc7634d164626"],["/archives/2015/page/2/index.html","9385bc66e467ab2a6a061a0b4b2d7c7d"],["/archives/2015/page/3/index.html","d55a8de4a768b7ebe8d2503c04f27591"],["/archives/2016/01/index.html","100d2da9eb0388959273b315147663fe"],["/archives/2016/03/index.html","24b02c5c5a070518134ca5ac27b55f20"],["/archives/2016/04/index.html","72a66b463e4b1d24b1adf7a374bf0483"],["/archives/2016/06/index.html","05937b648e8e42082d4d903878241c50"],["/archives/2016/09/index.html","5f4d1213934b6c35bc03130f0e972624"],["/archives/2016/10/index.html","31ab6b7e42eac1be7b342202bc1df119"],["/archives/2016/12/index.html","823b59529442a6664fb86bb307c9d03d"],["/archives/2016/index.html","4ddd05e878614ede9c0d41a06d0138cd"],["/archives/2016/page/2/index.html","c8913a4a412bbda0ec2c95cad1d55f42"],["/archives/2017/01/index.html","107dd66cd55665c13d8f65886712199b"],["/archives/2017/04/index.html","4e72aa4268a74ac9b3afaacfd83bf563"],["/archives/2017/06/index.html","ce8a709db7e22fb303261f333643d5b5"],["/archives/2017/08/index.html","eb8334970a1346a07d853ec28e6f6f6a"],["/archives/2017/09/index.html","9393210f8d61b8b0426e9e816553f8cd"],["/archives/2017/index.html","e6e59c4dfaa724f384118887f41ec2a4"],["/archives/index.html","d0bdadcecba6923e7770d80d45c36578"],["/archives/page/2/index.html","c10293734e755391bf5bf036de217da3"],["/archives/page/3/index.html","56ee5bcb19edd13f1777477e984bf9e6"],["/archives/page/4/index.html","2a0888513ef0ce2b079ea879d7384b10"],["/archives/page/5/index.html","86f7fffdc21bc3b7e1652a75d5f24f83"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","48ddaaf2a9c7d42a64d41cd6c70740cc"],["/categories/ACG/Music/self-copy/index.html","3a8b4cee9a338b9189abcfe9205faa6c"],["/categories/ACG/Travel/index.html","3305f859b33497d65200603ec8072ca7"],["/categories/ACG/figures/index.html","41e0b5c34bfaaae0286a7ee8466bb2ba"],["/categories/ACG/index.html","8d4ea50a348d0e0a85034618ece0c66a"],["/categories/dev/Front-End-Dev/index.html","a599cce5f2c38540196a31db6ad2f9d0"],["/categories/dev/HTML-CSS/index.html","efe3281cdeba4733aedc30ecc25778b6"],["/categories/dev/android/index.html","db0ba73e328a4a6fbcaed2a2f46d238a"],["/categories/dev/cpp/index.html","fc74e114d98d2885639911d6a6c82698"],["/categories/dev/git/index.html","62bc19faf9c6671acbd6881c0ce44139"],["/categories/dev/index.html","7493460e3a09aaa3ea6f1f7616467a7c"],["/categories/dev/java/index.html","459af1040410b8419e23d347b58cd380"],["/categories/dev/page/2/index.html","38883efb07b5535954c5b17cdb7f4fa8"],["/categories/maintaince/blog-setup/index.html","89e4e0f3318c3a9170fdceb443dc2c8b"],["/categories/maintaince/index.html","4146240148f59c868431862aa3a926dc"],["/categories/maintaince/macbook/index.html","283483d6c7aba68d61dc04ec95a94507"],["/categories/maintaince/router-config/index.html","57d2fdb1128196de4ffb4e09b228a75e"],["/categories/notes/index.html","dd4ceed94e3ec334befd91fbbc7b3f00"],["/categories/tricks/android/index.html","25fc5af5bd863d64e49e9c9bb826f2bb"],["/categories/tricks/index.html","f499e848a8cc18f75431800690b228a5"],["/categories/uncategorized/index.html","290d910f6d2f89ee551d0b3a0ccec716"],["/categories/works/Front-End-Dev/index.html","2742ddb846b3621ddb6bdce26933f151"],["/categories/works/csharp-wpf/index.html","2903467704a151c23e7c59c118194fa3"],["/categories/works/index.html","1330aee37772fa371de5e3c817c8c7ea"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","362b4d7e06a6c19966073722b2c69f1f"],["/ja/2015/03/WNDR4300-setup-log/index.html","460c916dd658da0f5f4c81e5b0cf29d7"],["/ja/2015/03/android-hostname-change/index.html","a90a29d0a33601b5dcfa5bff9f11c239"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","c516a721114d6b0d0540a955fe28d17d"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","de238b8f9a505114399fecc207799204"],["/ja/2015/04/cpp-study-log/index.html","ec5fa15864365d737afd6fbe02105f64"],["/ja/2015/04/github-pages-ssl/index.html","d280e6adee91920da4afad8eb9cfa8b8"],["/ja/2015/04/hello-world/index.html","377336271bf91ff41c1092e93897b7ed"],["/ja/2015/04/hexo-setup-log/index.html","34aa5cd35da7f5c81b248568d6d691d0"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","7491eb91b786d2243e6499f507d016f1"],["/ja/2015/05/cpp-inherit/index.html","d4b2b48c005c67c49dce01ecc91fbbd4"],["/ja/2015/05/cpp-polymorphism/index.html","67f7e92f115593b67679405145466d97"],["/ja/2015/09/android-root-ota/index.html","85388689bb0298cc419b9ff8efd2aaf3"],["/ja/2015/09/java-learningNotes-1/index.html","34112b89933b65e42758dad554c8b31c"],["/ja/2015/09/newblog-newlife-2015/index.html","fd173e465a35f4e260b66a2cff0ad4dd"],["/ja/2015/09/router-rebuild-2015/index.html","88f2b51e218c78749c02c6490e5d2851"],["/ja/2015/12/2015-12-21/index.html","7f30d0c00489f728d85740b202d615f0"],["/ja/2015/12/PixInTouch/index.html","e7678f65d10d2d848dbd8c4b02876cb1"],["/ja/2015/12/git-study-1/index.html","fcc6e199ca3a026a492f1eda2bd26d2c"],["/ja/2015/12/hexo-backup-and-migrate/index.html","f185094a2a2f96b2dbc06725bef26a37"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","926f79250073c929d3213f38e5c33fa3"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","5f35074d671a6bccf758595c896b5ec3"],["/ja/2015/12/router-reconfig-2015/index.html","993f1491fbdcea2aa6d75dd9cf48bba3"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","e66313519a7a357e329f4d513ee4a901"],["/ja/2016/01/2016-stepping-further/index.html","fd90cbcbdac7caf15c40b6fac2155cad"],["/ja/2016/01/Android-Study-1-22/index.html","2a71bdee24499f6e653d1ee457f48233"],["/ja/2016/03/2016-03-20/index.html","14eac3da9f789572aafeac6d212cffb7"],["/ja/2016/03/GSC-535/index.html","1ed86fc4066e37d44fe42d6dfa97f1e5"],["/ja/2016/03/gulpjs-1/index.html","151a82ac0d606cbb37f037749b8fd3f8"],["/ja/2016/03/hexo-theme-paper-white/index.html","cea4f6f2bac1ce173685e5db53adb3c2"],["/ja/2016/04/2016-04-19/index.html","b3eb81f867ea7e7faf59bd5931704a80"],["/ja/2016/06/2016-06-16/index.html","e3730ec5f46d408f46dd7176a9afc013"],["/ja/2016/09/2016-09-18/index.html","d9b1d3fdc07d93700d0ee971f08027b9"],["/ja/2016/10/2016-10-27/index.html","7fe0dccd6316d984e7050bc3eb056710"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","072916a74b99121517cdde7dcfd0efa6"],["/ja/2016/12/improve-duoshuo/index.html","d6eaec49fcd90b73b3c107677297a63a"],["/ja/2016/12/use-travis-ci-your-blog/index.html","b87ef9ea0c2f3a10246396d4354481ae"],["/ja/2017/01/2017-iyahoi/index.html","a9f82830d7706e4872ec092bf94cab59"],["/ja/2017/01/webpack-amd/index.html","93eec32367c19266fe1fe207aa144ff0"],["/ja/2017/04/kotobukiya-syaoran/index.html","021b04db1228a42f2f4ad74d9635172d"],["/ja/2017/04/macbook-and-surface/index.html","25af0e28129b2afe7d97d83dfe840590"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","0089098608cd4602dc7440a3b944bca6"],["/ja/2017/06/noragami-seichijunrei/index.html","26d297bb8b3ebe0ee4dd7e9099b2e471"],["/ja/2017/08/cross-compile-55-libev/index.html","5ce3155cbdd49a1d376cbc3ae709a6ca"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","bd05684e7b46d218c9265da0d017e976"],["/ja/2017/08/hello-jp-world/index.html","60ff2c7b29a267bef7015cbf9ec03e89"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","f9a982abdf0cea59538b684cc3ef2d69"],["/ja/2017/09/record-user-login-status-methods/index.html","8fb1a6900476a4d900e2539a199d5a61"],["/ja/404.html","c569bf0d67f70acd5b6b844ef4502cff"],["/ja/about/index.html","30fb592176ba1020be31cc9b359c0a7e"],["/ja/archives/2017/08/index.html","4efba0556a3b727aed24918a288e6fa9"],["/ja/archives/2017/index.html","f342a74ca6da6d07eff0b20ed59b429d"],["/ja/archives/index.html","bf528227e57486865942ea8bd4f23fac"],["/ja/categories/uncategorized/index.html","5b9e25c98fadc6ea47591099b0ef683e"],["/ja/index.html","e276489bb5cea975dc21f1c529e89902"],["/ja/nihongo-test-page/index.html","ab80bec0ebc734d807d6397c771cb89a"],["/ja/resume/index.html","2737976ac87064ba76cfd3c3814d12f7"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","ed4691b7074d5ab233bb93df12ceb049"],["/page/2/index.html","a88a481d6c35387b35fd81d506cb43f3"],["/page/3/index.html","e62a49de5d8fb7b134c55adb4a6e8627"],["/page/4/index.html","4130e85c3d0df3141917784fcc8b80f3"],["/page/5/index.html","c7bb8cf9b035d3b438e7de4c3a7b42dd"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","b7c66c2ae25b1ae7a8815f5d4eec7ecb"],["/zh-cn/archives/2015/03/index.html","6a4fb24cf151a6207e606824f082f236"],["/zh-cn/archives/2015/04/index.html","c31c0b8b11055ed289579be293024711"],["/zh-cn/archives/2015/05/index.html","b7508353574112a0f50a0da6e4ec0514"],["/zh-cn/archives/2015/09/index.html","486bb904c645065c652c881a4130257d"],["/zh-cn/archives/2015/12/index.html","3325940b81e141ad6214ba1013897000"],["/zh-cn/archives/2015/index.html","51c3e4417c0493e5d90aad4ee380fe00"],["/zh-cn/archives/2015/page/2/index.html","93416749345b374f88a4a01aec87e38a"],["/zh-cn/archives/2015/page/3/index.html","f6bf756131b17431f68b72812dd1875a"],["/zh-cn/archives/2016/01/index.html","bf2c69aba1bd9cf13c4e9e12f9c0b64d"],["/zh-cn/archives/2016/03/index.html","b47b4e0b3023a7afda1d103b4ec14357"],["/zh-cn/archives/2016/04/index.html","72505f09d272028276f0818b5906c1a2"],["/zh-cn/archives/2016/06/index.html","6caf0b01f12309374d42fb4efe060a1c"],["/zh-cn/archives/2016/09/index.html","3e1a4ca60f920db532028ce457fc048c"],["/zh-cn/archives/2016/10/index.html","75eb690e330bbdb739d7393cbfa5079a"],["/zh-cn/archives/2016/12/index.html","fdfed445932a401f6c167a652a0111f9"],["/zh-cn/archives/2016/index.html","bb8a6ffc5ca05ff9ab2e2f72084b9fcb"],["/zh-cn/archives/2016/page/2/index.html","ef96cb3ecb4bea3f3ed7679bc0956eed"],["/zh-cn/archives/2017/01/index.html","76d382b6fc5041155ce0886d1b2a4197"],["/zh-cn/archives/2017/04/index.html","7e1050b244cbc11c84cbb16b39c8529d"],["/zh-cn/archives/2017/06/index.html","f5fd1fef478f0f6ee565e698f3cf4fbd"],["/zh-cn/archives/2017/08/index.html","cd3fe37871a025670c2d33622f7dc17c"],["/zh-cn/archives/2017/09/index.html","45d477c28466c17d4db0a45b69ae1d89"],["/zh-cn/archives/2017/index.html","58039fa0549e12e66cd07e6f6caee673"],["/zh-cn/archives/index.html","dc811fd99a879dbcd9588e6c0dccb2d1"],["/zh-cn/archives/page/2/index.html","8f4afe1479b72df994fed67c6902ccd0"],["/zh-cn/archives/page/3/index.html","2b91ec92018e78a21a45f4485815cd4f"],["/zh-cn/archives/page/4/index.html","8997be7eacb6a5e178ae89ebe011665c"],["/zh-cn/archives/page/5/index.html","b5db512f06eb44f260743449e8422e02"],["/zh-cn/categories/ACG/Music/index.html","19a82f9d0373c6739c3b0e7274fe64e9"],["/zh-cn/categories/ACG/Music/self-copy/index.html","75505cdf3da54316bd82b6e20b9eaf14"],["/zh-cn/categories/ACG/Travel/index.html","bcff16fae55edb86015aa137ff2d876c"],["/zh-cn/categories/ACG/figures/index.html","09c31a9b131a635021f8ac8bf1c70769"],["/zh-cn/categories/ACG/index.html","e4ced56d60e59747b468b93918ac2e58"],["/zh-cn/categories/dev/Front-End-Dev/index.html","f61f356621c9dcc538520503c7922b66"],["/zh-cn/categories/dev/HTML-CSS/index.html","a57922972fa0b5d2417cfdcbd4d098fe"],["/zh-cn/categories/dev/android/index.html","041c2290cb9ef96ff81e62209d616681"],["/zh-cn/categories/dev/cpp/index.html","7ee17484c04e9d9beb5d15530584ce8f"],["/zh-cn/categories/dev/git/index.html","49a023159e3f40431d89d043f06dd4d7"],["/zh-cn/categories/dev/index.html","8d10d7284bc205b5f237b2136072cb40"],["/zh-cn/categories/dev/java/index.html","ce502838809af916fbd108815eae53b6"],["/zh-cn/categories/dev/page/2/index.html","037ab4118db9f020cea531c361f4fd53"],["/zh-cn/categories/maintaince/blog-setup/index.html","bd2e6a52929119c1819f0b904ee48f86"],["/zh-cn/categories/maintaince/index.html","e9b5ac6e01301bf85f6ffef38b142d94"],["/zh-cn/categories/maintaince/macbook/index.html","04f9d6bb64f0bcc03720f30105929de2"],["/zh-cn/categories/maintaince/router-config/index.html","1e2f5295a558974b44dad0db751cf123"],["/zh-cn/categories/notes/index.html","3693b678da5f7f99cfa53661ee7bc9ba"],["/zh-cn/categories/tricks/android/index.html","4195c38e9bc20bcbd9315352b85827c2"],["/zh-cn/categories/tricks/index.html","04dcfce91812b00f4c2512d904d21811"],["/zh-cn/categories/uncategorized/index.html","f0b3ae63ff564f9344213f1ea7e7f5dc"],["/zh-cn/categories/works/Front-End-Dev/index.html","8576ed65ccb7b1bd3c6ae536a45d715b"],["/zh-cn/categories/works/csharp-wpf/index.html","c185101643c3a4da2686f4c172e9e2a2"],["/zh-cn/categories/works/index.html","8cba8735c115f1b4cf21b844ea6f4ceb"],["/zh-cn/index.html","f2dc3d1cbc4ce43450a2519cae84401e"],["/zh-cn/page/2/index.html","d814ee734c1c481cf0b34d853e0de395"],["/zh-cn/page/3/index.html","697988eee8a80195719380b543e021d1"],["/zh-cn/page/4/index.html","67cee87656fb15d7722bd6a015d24a20"],["/zh-cn/page/5/index.html","f3c7d7b5ef3656097d60048ad1dcf60b"]];
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
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcss.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"i.loli.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"dn-xingoxu.qbox.me"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"od8634671.qnssl.com"});





/* eslint-enable */
