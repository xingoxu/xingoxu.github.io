/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","3fa35dfe3c42e64f095efb6eb0a37947"],["/2015/03/android-hostname-change/index.html","9dd72928493c7bf4bbe702a0882d1ee9"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","cb08bd6e31905dbc2d11f10ff37e0a69"],["/2015/04/android-chrome-issues-with-webpage/index.html","c942c930ee8c2879388cb301631d5822"],["/2015/04/cpp-study-log/index.html","0436e217aa619eba3fd9bd38b2d5bfcd"],["/2015/04/github-pages-ssl/index.html","1a788b8be2d4ffcf27992450ebdd7b93"],["/2015/04/hello-world/index.html","50f079126913421a0c45db26ffaa16d7"],["/2015/04/hexo-setup-log/index.html","a3e2d3ebab6507a214306072971f9caa"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","a1b6dcfcf6c372dd380f575475a9150c"],["/2015/05/cpp-inherit/index.html","d38ce077a9b394660d7e1b95bfd7e503"],["/2015/05/cpp-polymorphism/index.html","0b4e1101ff04525d9f5d875ace3b7aa5"],["/2015/09/android-root-ota/index.html","61d7ffacc4ae9991a32282301ea025b6"],["/2015/09/java-learningNotes-1/index.html","c76326bc8c7014b1e9b3b9063b7fd7e3"],["/2015/09/newblog-newlife-2015/index.html","53e34fd15f9d2da9d081897ddeb3a180"],["/2015/09/router-rebuild-2015/index.html","ebe15b6f9d7e623df933bb68ff6cbb9b"],["/2015/12/2015-12-21/index.html","a83a4e4afe1d29ea73ef64e1568dbdb2"],["/2015/12/PixInTouch/index.html","a2af60b4ac660a4bc788b265d271a0f0"],["/2015/12/git-study-1/index.html","a8af9b74b45ad53f5a6aee66e84f9408"],["/2015/12/hexo-backup-and-migrate/index.html","a6cce138327ba8328ae1dba35d6b0bed"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","a7f3b539ece4318237d0747962ac7328"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","11efdb72cc29311265393e7a43ca951e"],["/2015/12/router-reconfig-2015/index.html","6607d4b33bf2d7051135133823c9bb6f"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","a7b3924a47c9092a65175f5977561527"],["/2016/01/2016-stepping-further/index.html","f12b7b93a71f2df4420a4be06673573f"],["/2016/01/Android-Study-1-22/index.html","12373260321b9d56b4cd50e1a2840b98"],["/2016/03/2016-03-20/index.html","3240dad0e30986b2ffed9e351c1470b1"],["/2016/03/GSC-535/index.html","6d7bfcd1d34e1dfd6aeb9b55250a9492"],["/2016/03/gulpjs-1/index.html","fe01bbb1fe0f0ff57a49257161c17a83"],["/2016/03/hexo-theme-paper-white/index.html","a2b632d04e280d7b771ee92e377b5775"],["/2016/04/2016-04-19/index.html","f1fc7efd977a7f8431e4afebc49dbc2d"],["/2016/06/2016-06-16/index.html","c7ff082925725c8da79fecd31b148945"],["/2016/09/2016-09-18/index.html","d8c02ae8ee55538c7256faf723822bbb"],["/2016/10/2016-10-27/index.html","7ae74b0fa00dd8b7811e0f3ce3d28c0c"],["/2016/12/config-switchresx-and-2khidpi/index.html","e4293e8d3548cfbb834c423859cb7c20"],["/2016/12/improve-duoshuo/index.html","c63aa633e854885017f40232bef24923"],["/2016/12/use-travis-ci-your-blog/index.html","5abe1e8d25df4e25ac2ba8e4e54282e9"],["/2017/01/2017-iyahoi/index.html","12d13e992b55fdf56b8d050d42daac4d"],["/2017/01/webpack-amd/index.html","99a84448c3e2b41f3eb048dd2e311c89"],["/2017/04/kotobukiya-syaoran/index.html","4c35bc84e6508eee65e241dee1bbcd5a"],["/2017/04/macbook-and-surface/index.html","3a7649ac77f1d04d8c66448d3b5f6ebf"],["/2017/04/uc-hyakuya-yuichiro/index.html","1f194cf658418ca7fa8a0e112b25a96c"],["/2017/06/noragami-seichijunrei/index.html","4c00e7e703f816996e37ad5790de6d19"],["/2017/08/cross-compile-55-libev/index.html","8fbb4f322e8b770622151438fa673919"],["/2017/08/explore-service-worker-working-lifetime/index.html","3051f126061a936729433e8d5c0d0f5f"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","59ff27e091f70eb305a02f86ed180465"],["/2017/09/record-user-login-status-methods/index.html","7006c04e7ba1fc1c648aca322ff6fc3b"],["/404.html","472ce572c3e6aabb82289fcc7303377a"],["/about/index.html","fc923f261dd2ac5a40117e090af4c8b3"],["/archives/2015/03/index.html","3bba44caf11b7b09a643546d39430119"],["/archives/2015/04/index.html","81d19bd1be945d7147b86caf99fcac5b"],["/archives/2015/05/index.html","e937b776f120d252e98e33213a4bf0d7"],["/archives/2015/09/index.html","a3db8799f91c84e10a5da10322215496"],["/archives/2015/12/index.html","eb2988fa7510c9a49afd5b4b03a61616"],["/archives/2015/index.html","cdb0da23aa93c401009c6086bb4faf64"],["/archives/2015/page/2/index.html","e443e2dbc1daf1a34d94a0af6d7f0b95"],["/archives/2015/page/3/index.html","ce3057cedcf701c3fc01396e6bea2ab2"],["/archives/2016/01/index.html","2790f24a29f170eef1e76a19aee30a64"],["/archives/2016/03/index.html","88989c0a9112862b6859c68c3be64f61"],["/archives/2016/04/index.html","8d4367297afd3d3dc893726a0fec1971"],["/archives/2016/06/index.html","a891d32021549d08078233159d45414f"],["/archives/2016/09/index.html","c880ab6129ea34285c50cbeb0d947fe0"],["/archives/2016/10/index.html","a03f2fd4d18439e154fac6b672f8a29c"],["/archives/2016/12/index.html","1a1f5665b16ba8b88ac1ef92c0fd65f0"],["/archives/2016/index.html","c5ace2e98037fc4e8f7609335fed37e3"],["/archives/2016/page/2/index.html","fc3627d8e11c57e92cdfb3f1ddd151ef"],["/archives/2017/01/index.html","9777870d1214040df73f91845c686212"],["/archives/2017/04/index.html","4a3625d12c7f2a4d6e0b4cacb43bdcc8"],["/archives/2017/06/index.html","dbfe59a983cf18adb2943ed1065bfbf7"],["/archives/2017/08/index.html","7b3cc5028b041a8787781e219cf67421"],["/archives/2017/09/index.html","b3194afa93464996f70c0761adf18296"],["/archives/2017/index.html","0489891ff3b6709eea8912d44803b4d0"],["/archives/index.html","22e91949857292ceac9fde09a32aa209"],["/archives/page/2/index.html","bdc8c37a89cf9aad93e22b4fbdbea1b3"],["/archives/page/3/index.html","4bf9e31d49064596141168a0d110cff4"],["/archives/page/4/index.html","807640b0658068e45f564a8466a56e37"],["/archives/page/5/index.html","52ca346c7d77c888ebf5573fbd29ec44"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","afa375f2dc9b70e264fcd1942ceaddf1"],["/categories/ACG/Music/self-copy/index.html","3973c10ac8fc30558c76ae2f3729ac43"],["/categories/ACG/Travel/index.html","d8d06692c86fbe5a67a8e6e56be31a46"],["/categories/ACG/figures/index.html","7ff4fadff7244e9cfdd39b0315386c65"],["/categories/ACG/index.html","84bbfe05285b80486e150e2bb1a44883"],["/categories/dev/Front-End-Dev/index.html","52aecc2e742f0c49c0d9fb33c9e81750"],["/categories/dev/HTML-CSS/index.html","ac7fb800e9da61cd3c7fcbb41fba1654"],["/categories/dev/android/index.html","84aba4ef7dc8ab3b3580a97aa351fb69"],["/categories/dev/cpp/index.html","0d1856d2a6c66a514fceaadbfced04e9"],["/categories/dev/git/index.html","abb0df76f9625bf9484907aae5321b34"],["/categories/dev/index.html","722c6677a72b034bd4277fd16c2f72bf"],["/categories/dev/java/index.html","626ef238636a6c5fc8ee5ea95aaad04f"],["/categories/dev/page/2/index.html","dc8314dc76552cc2e0ffa0ce5cd97f4b"],["/categories/maintaince/blog-setup/index.html","3ff2ab2293c663e44ee2c5848496710f"],["/categories/maintaince/index.html","74c6ef1fefcd24186e2c2cf118a7fea3"],["/categories/maintaince/macbook/index.html","0c3a59bc02a6e12381ee59d9e23164e6"],["/categories/maintaince/router-config/index.html","52f79181ff6897aff1a1174749c515c8"],["/categories/notes/index.html","441a3d05a76d0118e8c1c67ee41d3035"],["/categories/tricks/android/index.html","36f48d338bf946ab96da4edb0ce635d3"],["/categories/tricks/index.html","be9687b0f6a003d52a60f984b813cdb5"],["/categories/uncategorized/index.html","c34a5a6feaa41e60bd03b9efbda12e4f"],["/categories/works/Front-End-Dev/index.html","623b14943baba5a6cb9e45cdd06769c3"],["/categories/works/csharp-wpf/index.html","b6614ac23dff1edddf511a3d06af9ab0"],["/categories/works/index.html","8a97e90076ffc6f6f1d3af1bc9d2ecd6"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","e9622435f30106c31038376b0e421792"],["/ja/2015/03/WNDR4300-setup-log/index.html","9afec8b1c127570cd8ef1f25275c16cc"],["/ja/2015/03/android-hostname-change/index.html","67d84c880279c654edd03f35ff27f777"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","8675b88ea622d61a58d1c884032fd517"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","2a5afe805b6bd8d963f84a35c12c73f3"],["/ja/2015/04/cpp-study-log/index.html","1fbdc509a1e0b17b30d668b4e06abbb3"],["/ja/2015/04/github-pages-ssl/index.html","9fa9cd739d3a629ea3a9e9b41bfb5953"],["/ja/2015/04/hello-world/index.html","436f8312259c4e3b71fad3124f3af753"],["/ja/2015/04/hexo-setup-log/index.html","f74c6341685ee83f97f3dcba92eb618d"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","f26ceda1b657d3e6fb3c8bd2eb6cd66b"],["/ja/2015/05/cpp-inherit/index.html","1e57a7a13409072fd70e13052dae46ce"],["/ja/2015/05/cpp-polymorphism/index.html","c3c705d135c20ead20219d6f4da9b903"],["/ja/2015/09/android-root-ota/index.html","2dae601d9173b296ef53590a727ed4b3"],["/ja/2015/09/java-learningNotes-1/index.html","7b8f86e72409b67a93ec25820d465642"],["/ja/2015/09/newblog-newlife-2015/index.html","183a5a1f8f8a807b7fcbd7b529a9775d"],["/ja/2015/09/router-rebuild-2015/index.html","7e3a2bc859ffab4e51cb8e4093e2201c"],["/ja/2015/12/2015-12-21/index.html","7f9f50b2fdb0346ff2677ebfe021b236"],["/ja/2015/12/PixInTouch/index.html","0ac0017d2e816af6d6e88d282d972bba"],["/ja/2015/12/git-study-1/index.html","0319f7b37c7578494487224776e5abca"],["/ja/2015/12/hexo-backup-and-migrate/index.html","266de4ed54308420de0f9b8c04a4f2e1"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","2d428a18e9df50da0bd855afdec9c6f2"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","c52089205b38f7682e4c881c9166eb45"],["/ja/2015/12/router-reconfig-2015/index.html","85ea6748f3c78d9c2064ec0aaa3e39f9"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","178508e3df7973958e874090327f6ad8"],["/ja/2016/01/2016-stepping-further/index.html","82ef9424c5d7266f1eec5cde4761a326"],["/ja/2016/01/Android-Study-1-22/index.html","845122890e4761a4b3b340bb3b6e9e44"],["/ja/2016/03/2016-03-20/index.html","be701f7245cf16d98a4ed370e12ef923"],["/ja/2016/03/GSC-535/index.html","3607832a957598337de0dc36ca09792d"],["/ja/2016/03/gulpjs-1/index.html","5373ee6aad8aebfd4e11a44ab7fd36b0"],["/ja/2016/03/hexo-theme-paper-white/index.html","4e2930bb6463f4b79edc32bf197aaf31"],["/ja/2016/04/2016-04-19/index.html","87bbdceb75b010c6d3399009d881b0af"],["/ja/2016/06/2016-06-16/index.html","5703dfd66af7d6542fd139fa48725c56"],["/ja/2016/09/2016-09-18/index.html","d18a1f2536a9c99501d885eeb06f768a"],["/ja/2016/10/2016-10-27/index.html","4ca3f09b998ab8e1785e8400c4c16e21"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","e9d8b1202684603e276c612b3e2cfb99"],["/ja/2016/12/improve-duoshuo/index.html","f6f1fa89b5ab4455e67406571084b62a"],["/ja/2016/12/use-travis-ci-your-blog/index.html","ddfe5c4afd2f990fd536564649c82a00"],["/ja/2017/01/2017-iyahoi/index.html","4690a6de66d49332a05a82b378f4d0e6"],["/ja/2017/01/webpack-amd/index.html","71f1f88b18d7a52a29250ddb7d5343f2"],["/ja/2017/04/kotobukiya-syaoran/index.html","baea96c0bec5000117f4ef85887d8f55"],["/ja/2017/04/macbook-and-surface/index.html","d1c041b8002bfbae56a3656247827283"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","3e201a8026cff2627ff5ba28d28efdf0"],["/ja/2017/06/noragami-seichijunrei/index.html","1e38962eb10f66a3be28f750f36b8180"],["/ja/2017/08/cross-compile-55-libev/index.html","5a50a4cc857d66a68442cfef8bc58fa5"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","8e363613a863d356ce73f6a4abfc72c9"],["/ja/2017/08/hello-jp-world/index.html","59fa926f5d0d51ee7fb1e4214ee17702"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","84b3afd2dda2c52f4cfd37ab234d173c"],["/ja/2017/09/record-user-login-status-methods/index.html","17d154363852f0c224c13f5885930864"],["/ja/404.html","c3454182f3b87c087ebde3fbf8a0762d"],["/ja/about/index.html","64ca66cc4007c08ccc8478d4789b8f16"],["/ja/archives/2017/08/index.html","4ca3478432cb7bdfb430da52452186e0"],["/ja/archives/2017/09/index.html","00a7d7686be7bfaa9f96edf8f3956553"],["/ja/archives/2017/index.html","fa2fb98fa11c6077c248e8fb9a278737"],["/ja/archives/index.html","fd9cea24bbb6dd255462d906cff72746"],["/ja/categories/dev/index.html","ba03d1bd7505fa95a47f2c6fca31cd3c"],["/ja/categories/uncategorized/index.html","ec16a530509c38132416a1995e7081c1"],["/ja/index.html","9981b47800b391f98f848862eb217444"],["/ja/nihongo-test-page/index.html","d4b522eda46d2e96a85e18318bdeaa6c"],["/ja/resume/index.html","8f7c7f88357857356380aa17ee0e9578"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","08978980e08d734bb5036920a9b84fee"],["/page/2/index.html","dc9ba877b2d49e65451baea4a1cec2dc"],["/page/3/index.html","0c6125f86bc833b35cb746b12b5ee420"],["/page/4/index.html","cf52ba5278c757fd9bc210f1442d232e"],["/page/5/index.html","b13cef0bf48a7204f887392065b50206"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","4a79b97b9e0cb92fcc2a6b60cab48f8c"],["/zh-cn/archives/2015/03/index.html","1908aba0ed802f56b068633356506b8f"],["/zh-cn/archives/2015/04/index.html","8240a000d28a77a339f01cd02ff0c10b"],["/zh-cn/archives/2015/05/index.html","0c1e2faac8c7c1027ea07b175a4fa3a4"],["/zh-cn/archives/2015/09/index.html","7369f3e0064f1cf376ba24d0e3584d7d"],["/zh-cn/archives/2015/12/index.html","78153bed1c18d7f3452d77704cff315a"],["/zh-cn/archives/2015/index.html","b3b5355e64b14b641904e60c060965a7"],["/zh-cn/archives/2015/page/2/index.html","f4c015be3cb5c5f7d1f88858a87789ca"],["/zh-cn/archives/2015/page/3/index.html","9bd5813b194881b671709642dd50ffde"],["/zh-cn/archives/2016/01/index.html","07f250de01dc49a0f5b11e5600f3e7c1"],["/zh-cn/archives/2016/03/index.html","e5ea6989d90b043bc8ecceb1924e9cea"],["/zh-cn/archives/2016/04/index.html","88e7d33240f40c5e5dc7ef73f349a28b"],["/zh-cn/archives/2016/06/index.html","8549dc9f1cfd4297b12af33dcddef97c"],["/zh-cn/archives/2016/09/index.html","eb18a0f7e9ce1205c8985f25b8763b0f"],["/zh-cn/archives/2016/10/index.html","303018f924f713b7cba3f58e479519ea"],["/zh-cn/archives/2016/12/index.html","b166c71f42132d85991efb8c77ae5d85"],["/zh-cn/archives/2016/index.html","e8f0d459b5f57b14fea6a605bc292c66"],["/zh-cn/archives/2016/page/2/index.html","d9bc0bee5a4cc78195fbd99e64ccef55"],["/zh-cn/archives/2017/01/index.html","529c84e24d4e867fec375ac224a8c8dd"],["/zh-cn/archives/2017/04/index.html","6ba1eedacea1621e9ec73b407dc127eb"],["/zh-cn/archives/2017/06/index.html","d49548bf489f4363f15a6ca7ca17c926"],["/zh-cn/archives/2017/08/index.html","4408298c99df7ed37b41b6e2091bddcc"],["/zh-cn/archives/2017/09/index.html","5385f1368dff215c648f517c117d6779"],["/zh-cn/archives/2017/index.html","abad2c9c82ac346c6a9e57a0dff8a4d2"],["/zh-cn/archives/index.html","d6801f16ee18b24ae9f25f58489b96c4"],["/zh-cn/archives/page/2/index.html","21cc9988e32b098c1b5becb92da5d3ff"],["/zh-cn/archives/page/3/index.html","b2cd6034d96d0eda8260eddab1e7c40d"],["/zh-cn/archives/page/4/index.html","cff8deda7e60a87bc2b41aa97abed56f"],["/zh-cn/archives/page/5/index.html","4e0c7e46d2416869cd6941aa238a0580"],["/zh-cn/categories/ACG/Music/index.html","505df338b43d2154a41daa862e53d096"],["/zh-cn/categories/ACG/Music/self-copy/index.html","4684d46cb5a18088d04456e2555daabe"],["/zh-cn/categories/ACG/Travel/index.html","9ecb7ee33aa7d254ce9fa94848f639b4"],["/zh-cn/categories/ACG/figures/index.html","7aea16bb035530846b5121b39e8bd859"],["/zh-cn/categories/ACG/index.html","62b9846d20313c335abf7c81fe68b266"],["/zh-cn/categories/dev/Front-End-Dev/index.html","209f9e14b8c687673c5bb0bd6b258196"],["/zh-cn/categories/dev/HTML-CSS/index.html","f4ea703aeee4ffffc9f9343730bf4cf4"],["/zh-cn/categories/dev/android/index.html","6e46b638e334b901e9bf47cee2a79a1d"],["/zh-cn/categories/dev/cpp/index.html","3abb8e071c89614ac561269df66f8807"],["/zh-cn/categories/dev/git/index.html","9f3eb8f84c517be516bf4c79a6aca7db"],["/zh-cn/categories/dev/index.html","54e18aed08b4528a19c625dae9796962"],["/zh-cn/categories/dev/java/index.html","3b55e3a5de64129202a4b86cecd5c0d0"],["/zh-cn/categories/dev/page/2/index.html","dbc41c49d9e746e6472cfbcab3a0af6e"],["/zh-cn/categories/maintaince/blog-setup/index.html","1c5e83b4fad00c9451d4822b5be719d8"],["/zh-cn/categories/maintaince/index.html","08b200e33fbc6cc7802e65da2fc259d8"],["/zh-cn/categories/maintaince/macbook/index.html","bd29fac66ae59dab935b2b8201cc6a49"],["/zh-cn/categories/maintaince/router-config/index.html","0776cd648476adfc28f1d68b99fa7088"],["/zh-cn/categories/notes/index.html","88142b6d96cb012e2ef3139dc985ccdc"],["/zh-cn/categories/tricks/android/index.html","310480c0d5239c60ece8fe1ffa16ea65"],["/zh-cn/categories/tricks/index.html","9a5f4b4730734a8871e78eca7d54e552"],["/zh-cn/categories/uncategorized/index.html","29b0ad05223200a27365370a18628b8b"],["/zh-cn/categories/works/Front-End-Dev/index.html","900faf7c2688e9fde0548e9b52ed8df7"],["/zh-cn/categories/works/csharp-wpf/index.html","a1a84b49603929d03767bcd701470c32"],["/zh-cn/categories/works/index.html","7b5fe84d56dd6410909f53bd37af8534"],["/zh-cn/index.html","ce7a98aab77cbe546008ef75ecc518fc"],["/zh-cn/page/2/index.html","a3abd79ee35c58995a8901ba6a451c7f"],["/zh-cn/page/3/index.html","54c3b400757ecb698943dde6c775a983"],["/zh-cn/page/4/index.html","420886e67ee4746b721209084dccbd1d"],["/zh-cn/page/5/index.html","1c6e56f63874d33a947ba478952d1901"]];
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
