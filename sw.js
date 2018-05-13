/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","2d1bda295677611b2692255abe3808f3"],["/2015/03/android-hostname-change/index.html","293eccc5ca32836c6f57286ca83f5298"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","3f841edc795b2bf6ec4fc5018658e17e"],["/2015/04/android-chrome-issues-with-webpage/index.html","e29f7414a02329ef75f46a2effdfe47f"],["/2015/04/cpp-study-log/index.html","a264bb6ea6931daa1ad121ac917bf68f"],["/2015/04/github-pages-ssl/index.html","71bfe59ff3bad66eaa8bad35c1694c30"],["/2015/04/hello-world/index.html","b66818e74c88e4d11928fed31c0739af"],["/2015/04/hexo-setup-log/index.html","9c7ece8b39f977b0db0bc3a51e01dba4"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","21e244517b726089cb677cafc5a1ee58"],["/2015/05/cpp-inherit/index.html","fd5faeb6b478eed245c3210f68d26ff5"],["/2015/05/cpp-polymorphism/index.html","3d5df0b9b86686da5801d9f4356741d7"],["/2015/09/android-root-ota/index.html","c12f7288be9f9f4e475c4f855c82e950"],["/2015/09/java-learningNotes-1/index.html","dc4fb45cad03769736016964c8910d05"],["/2015/09/newblog-newlife-2015/index.html","118971a12acf91f41d786eb9b6ef891f"],["/2015/09/router-rebuild-2015/index.html","65660a5a5dc6698c5ccb7a53758ef3a9"],["/2015/12/2015-12-21/index.html","07a062909706854656c0fa73050a87cc"],["/2015/12/PixInTouch/index.html","e910092e151bbea44d3d4c4a52437852"],["/2015/12/git-study-1/index.html","ea97ccd53ed7632aace54604baae8be8"],["/2015/12/hexo-backup-and-migrate/index.html","26445dd5d5c4c3bb28826dfd04ecdb04"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","c8df9c077e4e2a9e7e2300a4ab12a5da"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","54296a578b6a160bd13c0cfd77a29769"],["/2015/12/router-reconfig-2015/index.html","d0fc1a9073e5fdd1a1da4c5e35b6488f"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","a90016397350871ca4dcabb0999f4b5f"],["/2016/01/2016-stepping-further/index.html","638ff602ab3bb27f67451befbe288e86"],["/2016/01/Android-Study-1-22/index.html","1337e6bfeffc4e355872771123377dab"],["/2016/03/2016-03-20/index.html","f3768eb243e216859a44683414613873"],["/2016/03/GSC-535/index.html","27613d55712e86bfef21eec9809586c2"],["/2016/03/gulpjs-1/index.html","ce5a0277a2c18daf66e4f16b554ffc1d"],["/2016/03/hexo-theme-paper-white/index.html","0f3ee2677ef1027fe95afed2597970bc"],["/2016/04/2016-04-19/index.html","22d459f048b4436bc4de09c2d82591dd"],["/2016/06/2016-06-16/index.html","3d8b2fd4d171ceaf57dc4897b1607eb2"],["/2016/09/2016-09-18/index.html","4b1b5be08523481f3b3fd70dcc47b366"],["/2016/10/2016-10-27/index.html","f1086b35078d33dd8a6b54f640e7a5b7"],["/2016/12/config-switchresx-and-2khidpi/index.html","94d551540e795301eb1536574640f53a"],["/2016/12/improve-duoshuo/index.html","0f6f27ab8eb1ef7fcc8b2253273cc248"],["/2016/12/use-travis-ci-your-blog/index.html","e43fbe0eab17c254be2ad926c3ef8366"],["/2017/01/2017-iyahoi/index.html","0692cb175c38bb6cd14bf8cc0a73a18e"],["/2017/01/webpack-amd/index.html","c247e7f384655f163064feec5b079034"],["/2017/04/kotobukiya-syaoran/index.html","6a088a23dd0ac17b2b1c10beb68cc843"],["/2017/04/macbook-and-surface/index.html","71f4386bf8ddd94bb97af6d1c68b485b"],["/2017/04/uc-hyakuya-yuichiro/index.html","a45ff9e08782c7397d4f884ad2a5ac96"],["/2017/06/noragami-seichijunrei/index.html","5d1ee0a53bc7f69ab751114f453c8dd3"],["/2017/08/cross-compile-55-libev/index.html","8cb33a35ba4456db5100ebd6b04c6a9f"],["/2017/08/explore-service-worker-working-lifetime/index.html","734328c2b750c95008e250bfbda4537c"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","0dc5921872e6abf91ee0a63968dc8174"],["/2017/09/record-user-login-status-methods/index.html","9687ca19ac38e9e9e54f3d527c6ffec0"],["/2017/10/vue-typescript-early/index.html","5072db81c42d5356568445ef365ff49a"],["/2018/04/2017-end/index.html","0b615c83befacff70e5d4e2afdcbfcc4"],["/2018/04/twitter-account-activity-api/index.html","491461ff0a6363d50799551ba637255a"],["/2018/05/buddy-complex-seichijunrei/index.html","8d4cd43743de46bb12b61506fa7acdba"],["/404.html","dbe368e45e22e881a721c0446b2ce1b2"],["/about/index.html","bd37b64feca633f62266cf57eb7ae9bd"],["/archives/2015/03/index.html","9389cc7765b152074d2d4c2a62296bfb"],["/archives/2015/04/index.html","0a1b4a28b7097c01d67a453824a2b8c7"],["/archives/2015/05/index.html","ecc13a1fe335e3af19555e87ffb605b1"],["/archives/2015/09/index.html","47f8d6b01b641ff884ecdead41df6537"],["/archives/2015/12/index.html","0baaa668ea2c3d793ac7c33f8b113185"],["/archives/2015/index.html","66f6c423b2cfed92a9b5ad1da4ce51ac"],["/archives/2015/page/2/index.html","01b3e91f92a3fae529b40e3c8ce78ad5"],["/archives/2015/page/3/index.html","7fa2d5e74754fe01575a89de64c31fb9"],["/archives/2016/01/index.html","c3a24516c39d9e650dc21503ed5e31d1"],["/archives/2016/03/index.html","baae75ec7aebf10b3c961c63d82d56e0"],["/archives/2016/04/index.html","3cd5ccac6763b2536388212a0a42c135"],["/archives/2016/06/index.html","5a331ee13abb55159ec6c98f7488e65b"],["/archives/2016/09/index.html","d2234de9b3023b9dc559187dc1b1b03a"],["/archives/2016/10/index.html","4cd15ae91a2e8c9ff78574682f65f912"],["/archives/2016/12/index.html","02cc08901d5d1b75ac124020e3e748b9"],["/archives/2016/index.html","0f97089a961f10c5fe259bfc0dacc7d4"],["/archives/2016/page/2/index.html","cb63f48218f9b1cbee77c2639d2f624d"],["/archives/2017/01/index.html","e5f058071b0d857a2407c362a57303ae"],["/archives/2017/04/index.html","43792bd25476c94a0945c711b3198c80"],["/archives/2017/06/index.html","ea9a82e4c58c36f9f508424cbc1642d4"],["/archives/2017/08/index.html","aa12c1c51a899de9a9fc7284ddceba4f"],["/archives/2017/09/index.html","6c98b402eb7a3130cc879ed7e57cd0be"],["/archives/2017/10/index.html","3027046c07ebc38df7b0a9075377fdc3"],["/archives/2017/index.html","ee18f602aa4b3f7313b3277059a06c52"],["/archives/2017/page/2/index.html","922f643cb2a87eff87d7cd48782369e4"],["/archives/2018/04/index.html","389ca76ec88d732e0e353e34b08d4003"],["/archives/2018/05/index.html","19f1870592f34d53cfbe1ef2398d07cc"],["/archives/2018/index.html","e0b7d2297cd23e3ba9d35d316ea76598"],["/archives/index.html","ded329ea5e279cfba5f72463e7b70722"],["/archives/page/2/index.html","95c3d132cb28cc820122acd90baa526e"],["/archives/page/3/index.html","b07f58830cd44dff220e1b1d72514f8f"],["/archives/page/4/index.html","8936f054bc281727640ebda62b8edfd7"],["/archives/page/5/index.html","f217b6a0a11517785d830fbbdd76fe37"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","f28078999a352cd87b0de385b8d030b2"],["/categories/ACG/Music/self-copy/index.html","1c6d1e330539464031b1b4213a6328cd"],["/categories/ACG/Travel/index.html","c3cd8acfc390168dd8e6bd151693808f"],["/categories/ACG/figures/index.html","25f5ca6b0b4f18ca48688b03a46b724e"],["/categories/ACG/index.html","3edcc9030797da9595194d3d841ce3c8"],["/categories/dev/Front-End-Dev/index.html","5ca5ba907669d8f8e9958816072689e8"],["/categories/dev/HTML-CSS/index.html","dd2bd454bd48da5a6c3be0754ff159c3"],["/categories/dev/android/index.html","19bc58cd456b080236da244f4ca90f7a"],["/categories/dev/cpp/index.html","7d77db02b190b566cb8f93f990f0a84c"],["/categories/dev/git/index.html","055c62bda0a691c6606480fa30087a64"],["/categories/dev/index.html","27d82e1cb80d7cf27912577f540e91d4"],["/categories/dev/java/index.html","66de421c7390b6297bb88a2afc4dbf07"],["/categories/dev/page/2/index.html","6b4a751ba13a9c4d637e32f4bd686feb"],["/categories/maintaince/blog-setup/index.html","35be6a7dcf0654f2caf984fdd5a6e096"],["/categories/maintaince/index.html","b525bab4f9642e44d5a75dbc6ae2d875"],["/categories/maintaince/macbook/index.html","ff414723939169cadb7d3553e610088d"],["/categories/maintaince/router-config/index.html","f6b4d7d1c4b27137b0ef83671557f9a5"],["/categories/notes/index.html","a6531b52f701b15220ad06c747073a5f"],["/categories/tricks/android/index.html","b7f4875ad59c8f48cc9cc56f9d366e91"],["/categories/tricks/index.html","9ed9039e0fae7b14a7f7ebf70ddc3950"],["/categories/uncategorized/index.html","33aa2b35bb1f9892f955641f651c9a75"],["/categories/works/Front-End-Dev/index.html","ca3d8712a5caf44961f8d12dc53573de"],["/categories/works/csharp-wpf/index.html","e11b1191cf9bdb521a7ec96e88d0e99c"],["/categories/works/index.html","43cd5136b9288a5013bc22609d937049"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","2ff15f69f3d558f79b83400307ec67c9"],["/ja/2015/03/WNDR4300-setup-log/index.html","26f06e9edf516895af2df8a1cd879338"],["/ja/2015/03/android-hostname-change/index.html","338d272098a978cb1f69df46633e808e"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","94c4bb1ed87455df895d0a9f2650f342"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","09812e15654d09418f3dc23becf0829b"],["/ja/2015/04/cpp-study-log/index.html","942e42ac7892200095e24366684c2331"],["/ja/2015/04/github-pages-ssl/index.html","b95d619fd62f33f82dfff5193fa0e908"],["/ja/2015/04/hello-world/index.html","01a82bd6e1c852b2fa760591cbe64ee9"],["/ja/2015/04/hexo-setup-log/index.html","7bc4593c30ed89685b2aeb5a2b1d957e"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","ba4b35520daf5d741c84134088276f05"],["/ja/2015/05/cpp-inherit/index.html","c63c01d4691a93f346b5e46143c66693"],["/ja/2015/05/cpp-polymorphism/index.html","cbc79d6e3837b011f41cad6bce4b1a72"],["/ja/2015/09/android-root-ota/index.html","448ae076bd90f0252c938a1c558fb374"],["/ja/2015/09/java-learningNotes-1/index.html","00947d0f48dedc5a38047229330a90dc"],["/ja/2015/09/newblog-newlife-2015/index.html","296b1f662da753501d21f7e2f38bc2be"],["/ja/2015/09/router-rebuild-2015/index.html","e3be0d103607a3e8ec452e9c50a411d3"],["/ja/2015/12/2015-12-21/index.html","85f5c28272e9c557b57e4c33a70e41f1"],["/ja/2015/12/PixInTouch/index.html","9cb533869dc1f781c0024d04f387fe19"],["/ja/2015/12/git-study-1/index.html","1d493bcf5dbf435594671ba3fbd5976f"],["/ja/2015/12/hexo-backup-and-migrate/index.html","c3ab06026f3a6afef81947bb41c3c8ba"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","9e1d306a6f495a9e3f08091eb48ab71a"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","234419fd276599927be3434180e3f7b1"],["/ja/2015/12/router-reconfig-2015/index.html","b047982afca85faddb5bdddcededa4dc"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","ffdc36e48b8d79e65724e445114af5fe"],["/ja/2016/01/2016-stepping-further/index.html","7036ba6c589fb1dbc1042b5961217177"],["/ja/2016/01/Android-Study-1-22/index.html","7d7b5b80b071c21bf64e12f7c6b4799d"],["/ja/2016/03/2016-03-20/index.html","fedcbd7c8f58396344eacda73f479145"],["/ja/2016/03/GSC-535/index.html","79c2be386e62b363e24bb8c2c8e4e774"],["/ja/2016/03/gulpjs-1/index.html","8a79f891b43ce64e07363db5de17affb"],["/ja/2016/03/hexo-theme-paper-white/index.html","6338a8a2f17d1a036a7ff21229e8ae70"],["/ja/2016/04/2016-04-19/index.html","4044093cc8b1e0b39584d5f29fe5f1f2"],["/ja/2016/06/2016-06-16/index.html","7666af6d6556f14bdadf6bd5667ee45e"],["/ja/2016/09/2016-09-18/index.html","aaa5d7ad9fa20fdd7e19f1680c84ff18"],["/ja/2016/10/2016-10-27/index.html","ae128b184ad6a4da6fd465310dc2359e"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","d8a982199fcf24091f2db19f20a73263"],["/ja/2016/12/improve-duoshuo/index.html","7ca7930c050395fd056a7759189cf45a"],["/ja/2016/12/use-travis-ci-your-blog/index.html","8cb3613a16e2031d4fd885456e3e59e5"],["/ja/2017/01/2017-iyahoi/index.html","9a607362a85a4ed142d3585f42398b56"],["/ja/2017/01/webpack-amd/index.html","2bc2c6669b14dea58abffd792d88328e"],["/ja/2017/04/kotobukiya-syaoran/index.html","619a76056af1f4c566195e4fef2ea58b"],["/ja/2017/04/macbook-and-surface/index.html","ae5065937a976eea6470dead52b735bc"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","6f5d35c3056c7f105762268b76d7fcbc"],["/ja/2017/06/noragami-seichijunrei/index.html","727e045639c250504c6e4024d5818c28"],["/ja/2017/08/cross-compile-55-libev/index.html","81d5859d23bfe4c55377b182ebf9b50b"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","32dd2eb3362e967a9e271c46659fd040"],["/ja/2017/08/hello-jp-world/index.html","5cba5ae3a0d286df1ea92dc605129c81"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","ddd89918723c4a5637fd176e33317d18"],["/ja/2017/09/record-user-login-status-methods/index.html","97a88fccde84e12f76a9c039fa3132eb"],["/ja/2017/10/vue-typescript-early/index.html","368d2732edb4e8218ef1642dd8efbd10"],["/ja/2018/04/2017-end/index.html","28657a97d2ff97b1e88dfe139986af75"],["/ja/2018/04/twitter-account-activity-api/index.html","49a2d35b1af31dc937ddc0099b66cc99"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","451a5568b71412a73d377ea878353d63"],["/ja/404.html","de3e22d1938c2a81ecf0a014bea779b8"],["/ja/about/index.html","66c7cbae95c401a7945b58c7605a6108"],["/ja/archives/2017/08/index.html","7902278e7afd36a4fbe9552c35a4dda1"],["/ja/archives/2017/09/index.html","ae8409d8beef26899da8fe688715e33e"],["/ja/archives/2017/10/index.html","ad64d207c08a6c8f8383c8dc6fcba44e"],["/ja/archives/2017/index.html","12e27fa502eaa8699465884df68e504d"],["/ja/archives/2018/04/index.html","9d2fb60519dcfdf6bcc708163ea7b4cc"],["/ja/archives/2018/05/index.html","2d2231107f270fa9387cdde2f3f1bfd7"],["/ja/archives/2018/index.html","5ea6b16716b4fc0b6f3be0db50576411"],["/ja/archives/index.html","1552562cd21139050b6765f06f31b73d"],["/ja/categories/ACG/Travel/index.html","d0bf9cde292776201c91f4d85319a16e"],["/ja/categories/ACG/index.html","451a3ccb16d69d7bcc30d1141e92970b"],["/ja/categories/dev/Front-End-Dev/index.html","471bb326e2bb7c633470670a13774b1a"],["/ja/categories/dev/index.html","91dcb9d3c5f8330a7f2ce0b4ed2b88dd"],["/ja/categories/uncategorized/index.html","58ba691bb86744b9f20f4d8a23b3c34a"],["/ja/index.html","104a1e335211e646d210bf9b38aa8c1d"],["/ja/nihongo-test-page/index.html","cf6b6eb8a0c34b7ac488ba9d8797fc55"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","d77c44305af9aaf92586f5260079e400"],["/page/2/index.html","fe0aacefb6482221df9f2422508269ae"],["/page/3/index.html","15a6f493acab0fe9acfc15d1c6c98a25"],["/page/4/index.html","db0f98b665630cadb687dcd5f00083ee"],["/page/5/index.html","6c35dcf0e703d2a6aa6fdfe08f4f54ef"],["/page/6/index.html","eddcf7daeb447b63057531cc0a337cc5"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","fd293d5a4910d69fb10015adfbeb5778"],["/zh-cn/archives/2015/03/index.html","c34d3837b12f9c18e4b98e473dcfe3f9"],["/zh-cn/archives/2015/04/index.html","6b7c36c27542a26fa7c81a7a4310a751"],["/zh-cn/archives/2015/05/index.html","a3f902a84c57234980c25d0df68d6e77"],["/zh-cn/archives/2015/09/index.html","f219a0979769d73b7774d9ebce03cb5f"],["/zh-cn/archives/2015/12/index.html","d940e8950e4c02dbd951a382cbb717a2"],["/zh-cn/archives/2015/index.html","d8bfb60cb19d87565b48dcb6a85fe10c"],["/zh-cn/archives/2015/page/2/index.html","8641e1a45dfbfe6efd6c091213ca5acf"],["/zh-cn/archives/2015/page/3/index.html","fae56b239a66c273e1f62506e8ef7c0c"],["/zh-cn/archives/2016/01/index.html","2d7bb242241250bdb59ec0ca2da952f6"],["/zh-cn/archives/2016/03/index.html","5f51ac5b1abbf1d30b8fcec9c535f1d7"],["/zh-cn/archives/2016/04/index.html","0bb5212917c08754c2fc20c72fb12431"],["/zh-cn/archives/2016/06/index.html","ff55dddba4e1e91e155862c7b4865029"],["/zh-cn/archives/2016/09/index.html","d111207862c012fcbad0b61ee825e28e"],["/zh-cn/archives/2016/10/index.html","010c10cbbb0e5ff3a7e53d7c2992428e"],["/zh-cn/archives/2016/12/index.html","45c4677be75f717bc4daabb695a96d3a"],["/zh-cn/archives/2016/index.html","f57a08d1dfbe2937718b3bbaa2acc1d1"],["/zh-cn/archives/2016/page/2/index.html","76a62201ba2ca0960fc6234ea24d4f5a"],["/zh-cn/archives/2017/01/index.html","ec90690f141235c5f8dac85fe6e708e6"],["/zh-cn/archives/2017/04/index.html","1650c75e3b7311caef452b9a3f1371c5"],["/zh-cn/archives/2017/06/index.html","455d97bfb6012266df4ec176b438fa20"],["/zh-cn/archives/2017/08/index.html","b0b5e6455685b51504edd2bfa0ccefdd"],["/zh-cn/archives/2017/09/index.html","92a6ec2e260e120fd175f4ad47c956d3"],["/zh-cn/archives/2017/10/index.html","1e6cb7c2ce005e1149bb29502ada0e09"],["/zh-cn/archives/2017/index.html","7e294f9615daa052736b6f622a05fe2f"],["/zh-cn/archives/2017/page/2/index.html","3d8627d55f8b80133c262044495ee563"],["/zh-cn/archives/2018/04/index.html","9261d07b280efcca7c05fb08d5912bde"],["/zh-cn/archives/2018/05/index.html","4f611e9151e32ba8e81b87bc57194fa8"],["/zh-cn/archives/2018/index.html","ceeaa04179fac8dc5a547443a414d7d4"],["/zh-cn/archives/index.html","b1f64d304423210b0c83d0ba352a24a1"],["/zh-cn/archives/page/2/index.html","5d261ae0d61c6c2ff432916fdf314c19"],["/zh-cn/archives/page/3/index.html","35e6439201276588b126bd97832d2fbe"],["/zh-cn/archives/page/4/index.html","80acc7f00a75d4b2d9aad991001ebe7a"],["/zh-cn/archives/page/5/index.html","e2bfa1d91166f303bec8bcaf03906966"],["/zh-cn/categories/ACG/Music/index.html","8de6eab7c9c1a6d6bae60ad1894a8724"],["/zh-cn/categories/ACG/Music/self-copy/index.html","35f621af4594255e3809749c0607f9d2"],["/zh-cn/categories/ACG/Travel/index.html","788cd4781635422c84ad03adb78dbe28"],["/zh-cn/categories/ACG/figures/index.html","6cd5e90b2c53164103d853726fb3b76e"],["/zh-cn/categories/ACG/index.html","041b7bfe337634b9c1dd768bb3fb9e5d"],["/zh-cn/categories/dev/Front-End-Dev/index.html","b911087286b916e0dd2d8756081b2fc4"],["/zh-cn/categories/dev/HTML-CSS/index.html","18cb9fc0ca0aa08bebaf24e60ec397b5"],["/zh-cn/categories/dev/android/index.html","98a7abcb28dc47303af1a3f53e0f9a75"],["/zh-cn/categories/dev/cpp/index.html","9c4abb3ff29da17746ed39aef8fe4797"],["/zh-cn/categories/dev/git/index.html","4faae312f4564424965f3304d6d3c57f"],["/zh-cn/categories/dev/index.html","1da7d6a6cc2a312d32b7eb6f7e01b6af"],["/zh-cn/categories/dev/java/index.html","308de9bee3ce991f33de422579ac022c"],["/zh-cn/categories/dev/page/2/index.html","1a09b1106aad15096897287ec67ac774"],["/zh-cn/categories/maintaince/blog-setup/index.html","936739ae6a509b2b1101efaf5e9255c3"],["/zh-cn/categories/maintaince/index.html","392309a9b3f3c149a1d7bfa911f3ab46"],["/zh-cn/categories/maintaince/macbook/index.html","4894c07df3ebf18d192792767a334f28"],["/zh-cn/categories/maintaince/router-config/index.html","7559977942950e8e9b69c395f72d20fb"],["/zh-cn/categories/notes/index.html","c10e9040cbace43d9032469cc21f0397"],["/zh-cn/categories/tricks/android/index.html","d1e2b591f0053e35ccfb0070f3ad838f"],["/zh-cn/categories/tricks/index.html","c8e749d0b7ea24b25e53c434dc8db9c9"],["/zh-cn/categories/uncategorized/index.html","dd18e0a8ec39cc8efb0c8cb6c26ed225"],["/zh-cn/categories/works/Front-End-Dev/index.html","417dfcaebd924643152f207d6e347358"],["/zh-cn/categories/works/csharp-wpf/index.html","8e884215bc48b764748ff6bec8a8276a"],["/zh-cn/categories/works/index.html","3824dc7ceb3d9d9b502aef7276a4319b"],["/zh-cn/index.html","a7130c6317a9a109d9bedc7144d1e8ef"],["/zh-cn/page/2/index.html","9529540fe59e9dc1325ad83c71068ff7"],["/zh-cn/page/3/index.html","a3da5ffbffa0acb96d08113e7a93d1bb"],["/zh-cn/page/4/index.html","dbf0efe0520b459677df8b59d1b8251b"],["/zh-cn/page/5/index.html","80ea11a5effa8114de02393116c2abab"]];
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
