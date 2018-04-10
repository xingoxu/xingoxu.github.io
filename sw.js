/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","9b2e210c621201ed1a6318b6c24d7f8b"],["/2015/03/android-hostname-change/index.html","1793ffe1876305d4b894c7e0ed950001"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","4fa2e256892aead72b4d8459425c4631"],["/2015/04/android-chrome-issues-with-webpage/index.html","85d05d8df39362ac104ee2bf62d4adf6"],["/2015/04/cpp-study-log/index.html","18df5c40277d8e660338c3a16f417389"],["/2015/04/github-pages-ssl/index.html","89cee0a89e8e9058ca7f48a9b07d79b9"],["/2015/04/hello-world/index.html","9c563684f5722e0b5898ba749460739d"],["/2015/04/hexo-setup-log/index.html","47d4720026f34f5271e064e60a510cc4"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","b5afbfc84728af784610b06592b57f4a"],["/2015/05/cpp-inherit/index.html","85a6d4e73cbd1d050a72a3321e48d5fc"],["/2015/05/cpp-polymorphism/index.html","394ca04627c53fa0d60dd50af20b291f"],["/2015/09/android-root-ota/index.html","84c04900d4279769fbb5b6909cce5255"],["/2015/09/java-learningNotes-1/index.html","1e4d7d90c813c2bd207fe2478ec17b47"],["/2015/09/newblog-newlife-2015/index.html","5297a3b1cc20ad341f220cc561bcd5f1"],["/2015/09/router-rebuild-2015/index.html","18eb838582821c3e882459a36a47411f"],["/2015/12/2015-12-21/index.html","add40ce12d26f11e5b021ec43de95e3d"],["/2015/12/PixInTouch/index.html","ac568eca1f1216d8e7a0db751436c852"],["/2015/12/git-study-1/index.html","7ae643907bee611bd690f0b76e3a8d76"],["/2015/12/hexo-backup-and-migrate/index.html","f1fa139f9aad74798c10e8e6cfc0fb86"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","a896b6bfb80e66bd94ece9c9849b1f94"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","3dbf5f32cae3c2d00c8e10d6353e8198"],["/2015/12/router-reconfig-2015/index.html","22a729d65c15ccc546acc3496403f12d"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","80bb431364ef71cc22cfd661b153ad8c"],["/2016/01/2016-stepping-further/index.html","baf2dc95f972ccdb7e0bbcec44d1e412"],["/2016/01/Android-Study-1-22/index.html","690d02bd8503327a791cc81e2f11c1a2"],["/2016/03/2016-03-20/index.html","c28bf702bc690c3046fa1733e27e6e25"],["/2016/03/GSC-535/index.html","787620a8bad7309c61fe9bceb029d8e2"],["/2016/03/gulpjs-1/index.html","db62b36cc9e819c8ee72380b977ffdb4"],["/2016/03/hexo-theme-paper-white/index.html","0144354f715fb70ed80fe91fe9f28a05"],["/2016/04/2016-04-19/index.html","a98372a21210237933cf74d59cf543a4"],["/2016/06/2016-06-16/index.html","c674ce4d9ab2422cae53ba0861cc7496"],["/2016/09/2016-09-18/index.html","eff569153dfa6e7cbf6814659e09fe49"],["/2016/10/2016-10-27/index.html","56d191889bae0ccc6978fd9f2e3229b4"],["/2016/12/config-switchresx-and-2khidpi/index.html","5a2b8f3dbc16b4f226f94d9f158060d7"],["/2016/12/improve-duoshuo/index.html","49fdf9e939ff14cec64a8f34b075dcaf"],["/2016/12/use-travis-ci-your-blog/index.html","1cad6cea99b159ec019067c09c99eb03"],["/2017/01/2017-iyahoi/index.html","ff0b86b6bc9e97f57a1c44b0b85235ec"],["/2017/01/webpack-amd/index.html","ffc4ee196cbdf856bf8fcef78d38c31a"],["/2017/04/kotobukiya-syaoran/index.html","de28822ee10b8876f8a6fc0595b01a8c"],["/2017/04/macbook-and-surface/index.html","7a45568544f88bb209c5058bddfe68e3"],["/2017/04/uc-hyakuya-yuichiro/index.html","49ba3dc20c9d606ab8aec46439d340c4"],["/2017/06/noragami-seichijunrei/index.html","3e2d769453544829e58274fbbdb60ba6"],["/2017/08/cross-compile-55-libev/index.html","d8a172aabe0dc890a12f957c352b87a7"],["/2017/08/explore-service-worker-working-lifetime/index.html","40dbcc19769f4fc2cdd102667fba81bf"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","42c0e60a1e34280db1838b7a5b3c0d28"],["/2017/09/record-user-login-status-methods/index.html","b461b7d2568d8ad27da4344dcf15adea"],["/2017/10/vue-typescript-early/index.html","48dd9361e931fd383533cd23940f6384"],["/2018/04/2017-end/index.html","127994b16e314421e900c41c0e3baad1"],["/404.html","c9f269f42f9454125857ef25ffd072d7"],["/about/index.html","4c13440d9348ca1027f07d07836d8b0c"],["/archives/2015/03/index.html","3ed23706aafe95a8c81ff06b479c7a38"],["/archives/2015/04/index.html","cb31c35409180455881e7f20355d7796"],["/archives/2015/05/index.html","b916789738b97b545fab33951d432a48"],["/archives/2015/09/index.html","088f7061c71d5bb8394f14bce338686d"],["/archives/2015/12/index.html","c6c0f897edcfd820d099e750d8f9ba2b"],["/archives/2015/index.html","e6a8efd14caa317d607424c06661a943"],["/archives/2015/page/2/index.html","806358c96946fbbcdb9b9f1b057d1989"],["/archives/2015/page/3/index.html","ecfd64b2a90eb09a4f9f6d02e9725c96"],["/archives/2016/01/index.html","32ff9b093617b23439d52125bed98040"],["/archives/2016/03/index.html","760eaa524ef415454551403a15ac2340"],["/archives/2016/04/index.html","0000805ba0f98d88069b43533e6187a1"],["/archives/2016/06/index.html","db3095befe1c9acf25150841aa97e92d"],["/archives/2016/09/index.html","10519176bb77f0b476cec224da62013c"],["/archives/2016/10/index.html","75a70d1b6d4f0476a36c58bbc6a5638d"],["/archives/2016/12/index.html","daacc4f940228c1b34d5bff5504f9bd4"],["/archives/2016/index.html","caa54cb4f0860572d3a1cce0db8a6d68"],["/archives/2016/page/2/index.html","322a6e8f381cbea6f6eb7edef35c69a6"],["/archives/2017/01/index.html","02f9f3067bf59110b0306e953955e2f1"],["/archives/2017/04/index.html","bc6ef50a44db909435c9f86f4f17e344"],["/archives/2017/06/index.html","5659aa9993fa2e690df8d92e9111ce76"],["/archives/2017/08/index.html","411e1cb24f9e7bd765078d7af0ab8aa4"],["/archives/2017/09/index.html","0128837dc61af74e72555023e67f9aac"],["/archives/2017/10/index.html","bf4e94a04a2c3d1f6d557ca1d453c2ad"],["/archives/2017/index.html","866c7e3fcb01f0436cc888e56e7fe617"],["/archives/2017/page/2/index.html","5ce6695760495e71c1b7988069e61c7a"],["/archives/2018/04/index.html","015dca73d54aca321d3072322f9d57a8"],["/archives/2018/index.html","ade7754338f76d84b71c23bbb73743c8"],["/archives/index.html","500d07b75d8aec8d591664b342686458"],["/archives/page/2/index.html","25571826e9d9baacda4435cd66676c67"],["/archives/page/3/index.html","7a957ce8622fc77107d4efff22f81c97"],["/archives/page/4/index.html","736ea4d1ac09484c601d8f1ce35978ef"],["/archives/page/5/index.html","0575cf5f90901875cd9fd4b84e6ff3c1"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","1a63609498fef5b867e2c5f6cf8395ce"],["/categories/ACG/Music/self-copy/index.html","b3facfa6c41c348221a8dedb0aa2d39b"],["/categories/ACG/Travel/index.html","2882fdcdf43a055c80e413fd54da8076"],["/categories/ACG/figures/index.html","434f16a5ea4a6cb30ab205e34c1bd002"],["/categories/ACG/index.html","c945fa0a029eeb0bedb6fb8fdc576391"],["/categories/dev/Front-End-Dev/index.html","ad22b629514b7c8583cb76da8fbaeae1"],["/categories/dev/HTML-CSS/index.html","7b0d52107d1a8f01e3cddd645285d103"],["/categories/dev/android/index.html","fa70abf19e4140700cd3e9c58e9bc12d"],["/categories/dev/cpp/index.html","0000f7b11f9e9a61ba070d9f92cdd7c9"],["/categories/dev/git/index.html","044720349050efc543c25ad2bbfb1c76"],["/categories/dev/index.html","9dbaa0f278f0ce9d5228f82d636bd656"],["/categories/dev/java/index.html","f52403b3efd95af79b7e1f829a5ae2d2"],["/categories/dev/page/2/index.html","f54053f745008a86a8c2829d65ab2e59"],["/categories/maintaince/blog-setup/index.html","2b19f8d0d4069ca10a9200aba2deb340"],["/categories/maintaince/index.html","65e0c2dd4318f8b32c3576bba0d9e5a5"],["/categories/maintaince/macbook/index.html","8fa4c061f5344002d31581950c3794e5"],["/categories/maintaince/router-config/index.html","d43914eb78a7a6b8702c48fc78b9c6f8"],["/categories/notes/index.html","966398643e88123280504860b07cd409"],["/categories/tricks/android/index.html","3d53a93c8c597739f022ffe92ca2a6b7"],["/categories/tricks/index.html","1d4fb005806c82bff89478eab62cd2dd"],["/categories/uncategorized/index.html","4148a9ce445fb1f68b8bc4af6a03fa66"],["/categories/works/Front-End-Dev/index.html","5f706085109281d6cbb44fb997ec4a69"],["/categories/works/csharp-wpf/index.html","b3f0b3eaa8cf8711fe4684108e6fd6ee"],["/categories/works/index.html","0885b90837c83db1a3ce6e87d1997892"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","01dcc95350aceff86e7abb37b52b65a6"],["/ja/2015/03/WNDR4300-setup-log/index.html","056eaba28c90c9eb4210710e2d664d76"],["/ja/2015/03/android-hostname-change/index.html","55b2c3953339f67acaee9f974f494d06"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","298c8be715b47c09d03bb77e0b06cea5"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","bad390b318d77a0f4a407861f8b7a954"],["/ja/2015/04/cpp-study-log/index.html","ca561ac6346070b789ab2c48633cf748"],["/ja/2015/04/github-pages-ssl/index.html","d820a505aedd1198ad377432e6834e62"],["/ja/2015/04/hello-world/index.html","555f0eed91cb9aa36540cfaa76923455"],["/ja/2015/04/hexo-setup-log/index.html","32fabbe17d08006f8dab1a35aa4ec689"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","7908cef4bdf5164582985ef63a21ee50"],["/ja/2015/05/cpp-inherit/index.html","69229dcb49fb9722a3911621fe7b5aad"],["/ja/2015/05/cpp-polymorphism/index.html","34adb23776decbeef976a203f3c0ba65"],["/ja/2015/09/android-root-ota/index.html","750aaf80d0927b62a338bf327ccf3894"],["/ja/2015/09/java-learningNotes-1/index.html","c24f0d887a234b3543b3e345a0d63483"],["/ja/2015/09/newblog-newlife-2015/index.html","d9020d4b85ed825999331e68b9bf2192"],["/ja/2015/09/router-rebuild-2015/index.html","a04c5177b34d791b7744e9ff6ce2500c"],["/ja/2015/12/2015-12-21/index.html","f2ecb23ec3251c28643f74a107fbdca4"],["/ja/2015/12/PixInTouch/index.html","248f7cdde5bc6ad27b8971cc98576dde"],["/ja/2015/12/git-study-1/index.html","ee1aba9f9d92b96cc774b363dcca012a"],["/ja/2015/12/hexo-backup-and-migrate/index.html","771accf4cd77c25cf14c4a69db5c5bd8"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","1e19035446d0ee58f3b6067eb28494d4"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","adf7f18a0fcb585dff74d29a1dab1242"],["/ja/2015/12/router-reconfig-2015/index.html","575d57dab3e0d0536c79cd86ecb99668"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","54cafeba5f96efb8a5e705ca3f9036d2"],["/ja/2016/01/2016-stepping-further/index.html","f34c95ccd75d25065fc7ffee5f26f0aa"],["/ja/2016/01/Android-Study-1-22/index.html","b99d33b1343444b87949f80feccf132d"],["/ja/2016/03/2016-03-20/index.html","60e04c3671fdd21c9298cc68ba1c852f"],["/ja/2016/03/GSC-535/index.html","e0ac80ba12b970a0f24ca205256af3a8"],["/ja/2016/03/gulpjs-1/index.html","37cd9cab7cfdef80d7c609e76ff321c4"],["/ja/2016/03/hexo-theme-paper-white/index.html","b5d1a9a548d0db624cb3adcd57a3c479"],["/ja/2016/04/2016-04-19/index.html","0f7ec105c2e290bfaead617b152844b9"],["/ja/2016/06/2016-06-16/index.html","80a8761aee2d800692ce125667bef5fa"],["/ja/2016/09/2016-09-18/index.html","6f0128425fa94e9caaa4901fa0d4c749"],["/ja/2016/10/2016-10-27/index.html","2fee72e9c81593437930505df7188c46"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","4af4628e22318e3c6afb1c5c939d9bd1"],["/ja/2016/12/improve-duoshuo/index.html","b92bd352aa462b5aa874e2312b4c7836"],["/ja/2016/12/use-travis-ci-your-blog/index.html","6ae605a0b321641256258b94ad59961d"],["/ja/2017/01/2017-iyahoi/index.html","fec48bc6a1994ed8cee9d1cd4f8c878c"],["/ja/2017/01/webpack-amd/index.html","4796eca7a6b863f58cf95df3e095378c"],["/ja/2017/04/kotobukiya-syaoran/index.html","70c95dcf4e6e918a2674b4092ecf6190"],["/ja/2017/04/macbook-and-surface/index.html","119065ad2032dd63ee1cb32c78f80ef2"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","840258d4f0fde3a596b4725502b73288"],["/ja/2017/06/noragami-seichijunrei/index.html","8ad277babfa4d3fa5d735384f1f0579a"],["/ja/2017/08/cross-compile-55-libev/index.html","a3feefbc911282cb383b86d62f0e5bac"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","4aca190f6a56e6518543576939da7c9d"],["/ja/2017/08/hello-jp-world/index.html","7bf0d220ed550db7e695378e774e25b6"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","322cf23996339fecdb94df044df3e75d"],["/ja/2017/09/record-user-login-status-methods/index.html","3085a5ac155f0ac9f40ba3056de3ea6f"],["/ja/2017/10/vue-typescript-early/index.html","9df8c571fc84cf06aabcffaf9e5e8697"],["/ja/2018/04/2017-end/index.html","28fd8b72e75b9ad1585a3a35fc8a931e"],["/ja/404.html","3a810de8ebe9ee9a511c8ba1b215f8ac"],["/ja/about/index.html","da4457cbcc2315ebabb7e68ad0ab7231"],["/ja/archives/2017/08/index.html","f0b8f35d4b3183418b6407a4b0cf25bf"],["/ja/archives/2017/09/index.html","c149cb917c0138505ce68f60356ed637"],["/ja/archives/2017/10/index.html","c9495c0ca10d69c5c0b1e710ddf0c76c"],["/ja/archives/2017/index.html","5ff42dbc4a16e7260524c74fe5ea13b0"],["/ja/archives/index.html","68577b3c9b83a685b00db2aa40887381"],["/ja/categories/dev/Front-End-Dev/index.html","41c52de1dc92f59a87db38851f8505a4"],["/ja/categories/dev/index.html","ef990a2b5bd1f33d62c15deec3bdfe07"],["/ja/categories/uncategorized/index.html","9dd012963236a75745fea84cf10c6549"],["/ja/index.html","be51afabe6825d78a05af1a5731cbf8b"],["/ja/nihongo-test-page/index.html","615158477e9f22cb31e65e4bdb28b263"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","2819d792b38b576330cb113bc2898fdd"],["/page/2/index.html","dbaa3f0bd112e036d0d646104069d573"],["/page/3/index.html","fe1b4882a66590f97b235a5bef583511"],["/page/4/index.html","08762c4d41f0f1ce2486f367171ce98d"],["/page/5/index.html","b58f6deff0151cedb830c2b7225b53ed"],["/page/6/index.html","90aaa2fe2f33d2d6d4ddae42369cec4a"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","2497660143f093c3681c8b19a4da713e"],["/zh-cn/archives/2015/03/index.html","29948cb39cdd4f816e6a9ec4c189d494"],["/zh-cn/archives/2015/04/index.html","354419576490eaa1c9d23c842f265cd3"],["/zh-cn/archives/2015/05/index.html","601aa4dfc4a9b2e8464eb6a46b70a9cd"],["/zh-cn/archives/2015/09/index.html","c5f6145305add2768a31a36bad293b59"],["/zh-cn/archives/2015/12/index.html","db931d27b99b95a4abfcfe880ba66933"],["/zh-cn/archives/2015/index.html","11c04f6b671146c75786e6356f622a10"],["/zh-cn/archives/2015/page/2/index.html","ca041bcbdc8048296d726535508a5668"],["/zh-cn/archives/2015/page/3/index.html","fad55eb3f1a82afa0d2d7448764c1826"],["/zh-cn/archives/2016/01/index.html","526b500b930afe85c471a9cd4da4dc66"],["/zh-cn/archives/2016/03/index.html","afcf1c5dd47cecdb2785d1724dc23f64"],["/zh-cn/archives/2016/04/index.html","b8dc5e81d26f3b14f63f1e8bf0690ca3"],["/zh-cn/archives/2016/06/index.html","96ae967d1f527a06ced4900ec511cf1a"],["/zh-cn/archives/2016/09/index.html","1370e2cce21b685e641299654d0e3c72"],["/zh-cn/archives/2016/10/index.html","4bab69b6b39e05b68ec61c1656db6821"],["/zh-cn/archives/2016/12/index.html","76707475c609f8bf9aecb4dc388d675f"],["/zh-cn/archives/2016/index.html","ac1778b0623cdd26dbb1b34eb13a8f57"],["/zh-cn/archives/2016/page/2/index.html","d1513da1fd21386f544a4c2c46250685"],["/zh-cn/archives/2017/01/index.html","1595f082f55f0d172425305550e124ce"],["/zh-cn/archives/2017/04/index.html","3e2fae39fa75c2d14f3138169fc54b78"],["/zh-cn/archives/2017/06/index.html","a5876f330b5ffa23867a32e23a39ef5b"],["/zh-cn/archives/2017/08/index.html","591622355467a25c7662989ca652dac3"],["/zh-cn/archives/2017/09/index.html","a1228a51dd16498a849d58d2be28b2ed"],["/zh-cn/archives/2017/10/index.html","f46d9bbb9a457f16b4085e86b6e94ef2"],["/zh-cn/archives/2017/index.html","b31cce7eaa96b91b03b4bf5bd8b72629"],["/zh-cn/archives/2017/page/2/index.html","ab2f4e8a62ce4e3dd618b2e1d23cfcbc"],["/zh-cn/archives/2018/04/index.html","2f7dd1f12a3af78b775b576c3acb4e6a"],["/zh-cn/archives/2018/index.html","6a769ba223c6a2f17b3b8232b8914ed8"],["/zh-cn/archives/index.html","2368e88c85b05eac15780d58c58de340"],["/zh-cn/archives/page/2/index.html","d345edcaf8d60afefae91d8f0a99efc9"],["/zh-cn/archives/page/3/index.html","04c8d92270a20363fb69fe871a72581c"],["/zh-cn/archives/page/4/index.html","ae8603acfb5118a16dbab9fc6c01d3cb"],["/zh-cn/archives/page/5/index.html","6a52d6e801f8dbfbf26175089b8cee15"],["/zh-cn/categories/ACG/Music/index.html","a42b109bd981017f7aaeb9079a921650"],["/zh-cn/categories/ACG/Music/self-copy/index.html","29c8da5f96cf643b86074af9cdf4cda0"],["/zh-cn/categories/ACG/Travel/index.html","b95165a9deacc233a11f1fd59a6dea39"],["/zh-cn/categories/ACG/figures/index.html","138ca1d83dabd3b2dac43c5953e2ffa2"],["/zh-cn/categories/ACG/index.html","54657d8b4c6c26acd90863eee701e688"],["/zh-cn/categories/dev/Front-End-Dev/index.html","82a2cee7aad348cb0997e60cdea4c56c"],["/zh-cn/categories/dev/HTML-CSS/index.html","40e97a3acc9376416646c5e91d90745d"],["/zh-cn/categories/dev/android/index.html","2c6b313064c7489d4db8de682b6d4643"],["/zh-cn/categories/dev/cpp/index.html","7cb8db6a704db1cc014a9f7b8de45569"],["/zh-cn/categories/dev/git/index.html","5e88118b2ccdf7f1078ba9c18ab0c358"],["/zh-cn/categories/dev/index.html","5ef2bf7ff1c67730134d92812ad03baa"],["/zh-cn/categories/dev/java/index.html","8f7d0a9b11b94b131ccf35f03ff32965"],["/zh-cn/categories/dev/page/2/index.html","ad62764ae60cf78008b5a5558bd6a55e"],["/zh-cn/categories/maintaince/blog-setup/index.html","9d8ac7ae70312fe39390cc545dd79f61"],["/zh-cn/categories/maintaince/index.html","5b2da21ac6bf76b4652c3519cb4aa014"],["/zh-cn/categories/maintaince/macbook/index.html","9e4f92d52de1ff8aa71049488a9f9751"],["/zh-cn/categories/maintaince/router-config/index.html","5242b7767dc44455f9b1d37aa9c92f0d"],["/zh-cn/categories/notes/index.html","82fbf34d52c80d88461918da11ff9556"],["/zh-cn/categories/tricks/android/index.html","41768e5612168855f5b0863eb8ee85ca"],["/zh-cn/categories/tricks/index.html","09574acde0b65cada3f50f209d3677d1"],["/zh-cn/categories/uncategorized/index.html","791a895de3d39da8d3e193be4600c219"],["/zh-cn/categories/works/Front-End-Dev/index.html","7efead8241a44d52ee07950cff3d0937"],["/zh-cn/categories/works/csharp-wpf/index.html","405e4468d11dddd6094bd7ac87d39f4c"],["/zh-cn/categories/works/index.html","00582f7ae8c9e2be4447309aae2aca8a"],["/zh-cn/index.html","4e1decaaea39fe3917b3ca968a4bf974"],["/zh-cn/page/2/index.html","057ffb5c1308ad6f2f14f3b139859e1e"],["/zh-cn/page/3/index.html","4eba909fdf72bcc0e2696d99e457f767"],["/zh-cn/page/4/index.html","9b11f686fc3778a22c684c5ad7ea809f"],["/zh-cn/page/5/index.html","4126848af98eb268332ed691ebdd1442"]];
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
