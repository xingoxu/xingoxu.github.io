/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","467f197853e14cb945e1be584afdfef7"],["/2015/03/android-hostname-change/index.html","f6456edf9816c2c1a15b40f2859a4b80"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","4c1b689b5b8c4001f936822d297d4935"],["/2015/04/android-chrome-issues-with-webpage/index.html","fb12e18fd58000742a53f5b53ef47f42"],["/2015/04/cpp-study-log/index.html","80383b4b133b5e533ef38b9b51e4945c"],["/2015/04/github-pages-ssl/index.html","024e6397e05d79fd5a23dbeb16b9e3be"],["/2015/04/hello-world/index.html","a34765e33fb64c03afb97f4c4fbf5aff"],["/2015/04/hexo-setup-log/index.html","b3eb00b6c2276b8d72431f8c5319e3d4"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","7b65135109e8609b748d40361bb3b4da"],["/2015/05/cpp-inherit/index.html","9617f6bca6ec2dea26574dd551983d92"],["/2015/05/cpp-polymorphism/index.html","5ad7a4c651bb41b153b2ad33001c023c"],["/2015/09/android-root-ota/index.html","8c06179ef50478491d07c0cbe43c0a00"],["/2015/09/java-learningNotes-1/index.html","df3fbe30e2d036cde8fa88d348072a48"],["/2015/09/newblog-newlife-2015/index.html","df4d3c43e9f7d4a23d1cdca10452e57d"],["/2015/09/router-rebuild-2015/index.html","f350e74da8b7299c351322eb2eb0223b"],["/2015/12/2015-12-21/index.html","921d0227db3aba8de405b0157e34e9a2"],["/2015/12/PixInTouch/index.html","3fae51b3ab9854dcc988a860ef75b01f"],["/2015/12/git-study-1/index.html","e292ebd729e8d594c7854ff46a153823"],["/2015/12/hexo-backup-and-migrate/index.html","2d5e63a5f19450b4a8d70c01471d5be4"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","40987971a17af8bff8213addf795e59f"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","d6007eaf15b57445533a0c2929d39b1e"],["/2015/12/router-reconfig-2015/index.html","396a187f09f4d84310393819db2945f0"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","cf8d2c07ec78ba1dfbcd4ffbded70ea6"],["/2016/01/2016-stepping-further/index.html","ddc8222879171d80a1eeefdba088b01d"],["/2016/01/Android-Study-1-22/index.html","086f89a3fdaffbed1afc79d343c7f3a4"],["/2016/03/2016-03-20/index.html","ef7df83f61c95250c56dc2a9fe297022"],["/2016/03/GSC-535/index.html","d77bb358b0fb4e36e67baf8a8805abed"],["/2016/03/gulpjs-1/index.html","addbfbfa1b87061db4586029af47e41c"],["/2016/03/hexo-theme-paper-white/index.html","3744211d12b833d0b39ea0b74fc637a5"],["/2016/04/2016-04-19/index.html","5c77d7cdd01751f50f58c6ed9fb314be"],["/2016/06/2016-06-16/index.html","b7473f9ce4404e8d4f663284031dc443"],["/2016/09/2016-09-18/index.html","87cb9b7a45f82b0db68d20f59e89b657"],["/2016/10/2016-10-27/index.html","010519c468f6d885498244390b2682ce"],["/2016/12/config-switchresx-and-2khidpi/index.html","1045856d616e2cc455c792c23829a5af"],["/2016/12/improve-duoshuo/index.html","ae2a7358928bd2538a5a277151ce1b1d"],["/2016/12/use-travis-ci-your-blog/index.html","566c124bcfd5b7beddb3bbe992a88db3"],["/2017/01/2017-iyahoi/index.html","0c429c42a5829549b941c2320a908b35"],["/2017/01/webpack-amd/index.html","1937d7d661c1c48b32c2a4acc42c517f"],["/2017/04/kotobukiya-syaoran/index.html","b1fe4466da9c788e13b40d5f2f5d9ffc"],["/2017/04/macbook-and-surface/index.html","780f7006e8aa387734e38cb0a3efec5a"],["/2017/04/uc-hyakuya-yuichiro/index.html","1300074330d4ec87bd99263f9e4c462a"],["/2017/06/noragami-seichijunrei/index.html","aadd08d4e92fa725242f7620e500abf8"],["/2017/08/cross-compile-55-libev/index.html","620719f2b067e9d71f84b74a68c60d51"],["/2017/08/explore-service-worker-working-lifetime/index.html","966ad78e353ef171dbe07442687d4a54"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","0470ade948b3e21c46530184336df7ed"],["/2017/09/record-user-login-status-methods/index.html","953a0de56069b74653bc612c0f672cc6"],["/2017/10/vue-typescript-early/index.html","0cbafb346d0f1f7e5886c6efba608e6e"],["/2018/04/2017-end/index.html","4f56a8a3c1afe46170ee5f37f3ac9ba8"],["/2018/04/twitter-account-activity-api/index.html","b8896987df1115a17241a0fe95cdd8da"],["/2018/05/buddy-complex-seichijunrei/index.html","dbc19cf1f0e7173cb4045911dda340a9"],["/404.html","2711dd41a5155cadde853d9f16d5bc9f"],["/about/index.html","112a1af7cb6f043523ac0ca944714fa2"],["/archives/2015/03/index.html","a691a3d254daf9bfd340e9616a5f01ad"],["/archives/2015/04/index.html","7104708dee142a83bcfd6f0101758e89"],["/archives/2015/05/index.html","80b8aa3e43421b4bf911f602d310cf55"],["/archives/2015/09/index.html","5e0f98bcf4f5897a5820987a7cbded0b"],["/archives/2015/12/index.html","f2ef1527ca3bb13ce80c859a1bf3af90"],["/archives/2015/index.html","f64f07505fa780d874630099dbb09143"],["/archives/2015/page/2/index.html","4b771a321c6c75484039b63a4edc5132"],["/archives/2015/page/3/index.html","7dd7fc97a533f6f98514fc1afb3d0f53"],["/archives/2016/01/index.html","b2bbad450d757a054fa1f5c8f17fce5e"],["/archives/2016/03/index.html","f9feb7506055caa96b41d65fa1d852b2"],["/archives/2016/04/index.html","49b9c128a6847d5b099751b8ec15e65e"],["/archives/2016/06/index.html","2e8e81c8a921451a3dff716d33187694"],["/archives/2016/09/index.html","6a90e1de8277ecdfb28f1e5b298c642e"],["/archives/2016/10/index.html","469c76b543fc764b5e00f929bf607610"],["/archives/2016/12/index.html","1bc68e8859b62ecfecc40ce811c8b71a"],["/archives/2016/index.html","efaa3fcb69f16af17ca070bf7a5106da"],["/archives/2016/page/2/index.html","29bb35b0b82f1fa2ba596d66b2f75cce"],["/archives/2017/01/index.html","283ccacd390d1e541529efaadd81ed3e"],["/archives/2017/04/index.html","cc28007dda7933a0844d3c9c5cf01c23"],["/archives/2017/06/index.html","65f763e3cf90cddc0c09c8b069c4c1ea"],["/archives/2017/08/index.html","d1357a03aa33a3b4154f783653447725"],["/archives/2017/09/index.html","e534cd312ba2ddfa3b8332eeaaeebe41"],["/archives/2017/10/index.html","c1b92466ac9f784fbe2e00ac61482152"],["/archives/2017/index.html","bf37e48c28aaa9c9da74a4a7e5e1a83e"],["/archives/2017/page/2/index.html","865c3e5d7cae13c1b640f66aeda47fa1"],["/archives/2018/04/index.html","067b38ddc427458af7607056e6bc3e55"],["/archives/2018/05/index.html","71d4b4035e7dc4f007a2ef5d0d166619"],["/archives/2018/index.html","5e224b0bf4b8e9febd5d175ba7f6c490"],["/archives/index.html","42c47f7fc4f1ddb321b6bf14c22bce90"],["/archives/page/2/index.html","fc376502facc05bf87eea10571f3c9e6"],["/archives/page/3/index.html","1aecf21aa910e3a9ed1a165b24cd71f8"],["/archives/page/4/index.html","0aa814c5753e1d9078d10d1d732b8fea"],["/archives/page/5/index.html","62256ecafa36cd78b844a135e4f3c972"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","03db087d399347b43ad0fc4aa0c2659a"],["/categories/ACG/Music/self-copy/index.html","d8a783a4197a55b6720f0eee0a50c057"],["/categories/ACG/Travel/index.html","2d107b31393123535a3f5bc91b5a8265"],["/categories/ACG/figures/index.html","2e83e9c698c7f748f7292e31acdc3e40"],["/categories/ACG/index.html","e2333e345c38eb45934df5e11329e2d1"],["/categories/dev/Front-End-Dev/index.html","62e64226d8beba6bad4af21cf0427273"],["/categories/dev/HTML-CSS/index.html","7d96e9bc0bca6b30e39d740a23ff796e"],["/categories/dev/android/index.html","3231ff157d9f5df5b944e9cab2fad3c0"],["/categories/dev/cpp/index.html","190f6aaa08b34bfdec1618fe2dd08e15"],["/categories/dev/git/index.html","40fbf66f33e1006e988e3055f394d2fa"],["/categories/dev/index.html","918bb26d0c35a4187b86abb1413e98cc"],["/categories/dev/java/index.html","9b9fddae244100eee09a7966a49a3685"],["/categories/dev/page/2/index.html","d1963fde7a3383a4b19504d6733f3066"],["/categories/maintaince/blog-setup/index.html","de23e23d736678da2db8d59ead3866b3"],["/categories/maintaince/index.html","fd0ed2c5908dfdd1e74ae8f92ef11095"],["/categories/maintaince/macbook/index.html","373b28b28a9c57a11205b26fc4896081"],["/categories/maintaince/router-config/index.html","8c1ebb2157f674836d0cf551a743ec76"],["/categories/notes/index.html","f72b380fe4e96978d18bf06e0247d0d4"],["/categories/tricks/android/index.html","9be64617dc28c963fbcefd344f247c54"],["/categories/tricks/index.html","fb3d1a310f0dd1675ac0fa6d3262af8e"],["/categories/uncategorized/index.html","28636fe30466138ff00b3d61336d234d"],["/categories/works/Front-End-Dev/index.html","db8ba795bd8532d78942e918cbbba92e"],["/categories/works/csharp-wpf/index.html","b619faa208363cb92d5d4a6a525f92fa"],["/categories/works/index.html","d5014f945cf1e3ee1141fa6f69393f9f"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","6b555ed65522a196ae63bce59b0fa53a"],["/ja/2015/03/WNDR4300-setup-log/index.html","51d92ca1960a224b8b44c6e1dc35d88a"],["/ja/2015/03/android-hostname-change/index.html","9528df11dd0f91203a605715949e191e"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","1cd2c0ce95704b722ceb74e3045401d2"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","95a4bad52601dd8ad4ccf423c0901ce8"],["/ja/2015/04/cpp-study-log/index.html","d874a2b1bbe6ad75d3f1f5b6d35acda2"],["/ja/2015/04/github-pages-ssl/index.html","05773ae6c3e1a611ba634675999e198d"],["/ja/2015/04/hello-world/index.html","5ff6c7ee7b451caf10915a1c93427261"],["/ja/2015/04/hexo-setup-log/index.html","921e410f773086331255c7a40c2d0cfe"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","5180c0d54ddf15914e3f0e04a2062c3a"],["/ja/2015/05/cpp-inherit/index.html","c64211f3677545ae6cebc90ec77c466c"],["/ja/2015/05/cpp-polymorphism/index.html","0d98f05ab29eb738102383dbc8c6956a"],["/ja/2015/09/android-root-ota/index.html","4a31476b49870822c7fa6a966196efa8"],["/ja/2015/09/java-learningNotes-1/index.html","8de7d82700b1baf82104d499b1e7b63b"],["/ja/2015/09/newblog-newlife-2015/index.html","76c73740f415b3b808dadb3933644ce1"],["/ja/2015/09/router-rebuild-2015/index.html","368843944e2081a3727beb12e1e2a0f4"],["/ja/2015/12/2015-12-21/index.html","d5a9d7d0be315669b025d7767a64a6cb"],["/ja/2015/12/PixInTouch/index.html","f9ac057c467b464e7cfb98a48c49790d"],["/ja/2015/12/git-study-1/index.html","a0bbad8dbc981a0f1e9effba87ab1c2a"],["/ja/2015/12/hexo-backup-and-migrate/index.html","2a667eea5eac3c5794654ebb628f0ca3"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","9c20495ff6a6f3c53b8d129c5fc1cd8a"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","2a5424730d418d967107d7755b60975a"],["/ja/2015/12/router-reconfig-2015/index.html","4a6405f4bda753936c6e73563de82096"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","6f55a5bc91e6e014e3f46a9622c27fd6"],["/ja/2016/01/2016-stepping-further/index.html","bf6905f9ee84750f37b157bf83a6254c"],["/ja/2016/01/Android-Study-1-22/index.html","199fac533a900b36d6a1dcc49421856b"],["/ja/2016/03/2016-03-20/index.html","dc99923453eb561f563bb326142a69a6"],["/ja/2016/03/GSC-535/index.html","7cea232a6a011cf0bf23cb292db54704"],["/ja/2016/03/gulpjs-1/index.html","aeada283049bdc0d04661079c610b4bd"],["/ja/2016/03/hexo-theme-paper-white/index.html","8edf0f6505981fb83d7bcee10195afa8"],["/ja/2016/04/2016-04-19/index.html","575ca5a3cc0a998f76edbcd2da73eeec"],["/ja/2016/06/2016-06-16/index.html","47088d6b194ab20462ed0a51a5f01b3d"],["/ja/2016/09/2016-09-18/index.html","aa726b4a499ac86010a92a157937834f"],["/ja/2016/10/2016-10-27/index.html","3abaaa8c4930377fbab6e10aff569e5b"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","abadeaf40fa99cadaa4ff27f33fbc6ab"],["/ja/2016/12/improve-duoshuo/index.html","5bec606ebd67fb62e2e2a44d8c3916ad"],["/ja/2016/12/use-travis-ci-your-blog/index.html","a3705ddfb953a5cb950f2aa576e24bdb"],["/ja/2017/01/2017-iyahoi/index.html","f55ccf5937d02616aa8a18bdb92e465c"],["/ja/2017/01/webpack-amd/index.html","ecfd6fa651a50489e4671ea97e7e343a"],["/ja/2017/04/kotobukiya-syaoran/index.html","4e517b863a38ddae18eeaeb477ad2744"],["/ja/2017/04/macbook-and-surface/index.html","6a657b34bfd1aafa9ac8de41d0d05e6e"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","94c0587850405fe7299b39768e740f24"],["/ja/2017/06/noragami-seichijunrei/index.html","19564d15a9ccfabd0a783e69a0178fa1"],["/ja/2017/08/cross-compile-55-libev/index.html","77449566965a8627cd05b241ac9ec55f"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","2ed0eebdbb294e9b2c4999bc57fa4724"],["/ja/2017/08/hello-jp-world/index.html","aad6f23dd359b2974998032d07428126"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","c9b23411929263c5df0bb7490a4daaa1"],["/ja/2017/09/record-user-login-status-methods/index.html","c4f585228097c8740ee804577475a728"],["/ja/2017/10/vue-typescript-early/index.html","78607448ed539f3d7bc173531be72f02"],["/ja/2018/04/2017-end/index.html","a6ae011613ec70d5855064061daf7590"],["/ja/2018/04/twitter-account-activity-api/index.html","d995d550623dc91ef9b5178dd43a5cb7"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","3a43cdbab27a093941f8322a664dfac8"],["/ja/404.html","417b14f09254586ba43c9b879e8624b0"],["/ja/about/index.html","c070d9fc2131e86b5941acbde3b16f41"],["/ja/archives/2017/08/index.html","98e09b9d30ce689d19ed8c94ad6da23e"],["/ja/archives/2017/09/index.html","3a284418007e1651cccd396e306f8dbb"],["/ja/archives/2017/10/index.html","f56bb31b6e523707935c53f5d23eae4b"],["/ja/archives/2017/index.html","7b5edb8d0e473119701bfe1cecb97585"],["/ja/archives/2018/04/index.html","5588229e6dbad3b60035f849f374b4e6"],["/ja/archives/2018/05/index.html","c064089d3e99b542ceada300f080f042"],["/ja/archives/2018/index.html","d1dfe45a40207f229340ae8a8c1f0f0d"],["/ja/archives/index.html","801875966f0222b252a7b266216cc762"],["/ja/categories/ACG/Travel/index.html","89116901f4af70f9a6aa24ab07a1fba5"],["/ja/categories/ACG/index.html","f633da5765e68780457a988ca8f7108a"],["/ja/categories/dev/Front-End-Dev/index.html","a15b3ca0c9c93ba656227e4711dc9a98"],["/ja/categories/dev/index.html","113222cde9aabd5dd680730efe9def4d"],["/ja/categories/uncategorized/index.html","fc6edf352c2620035cf9110aa47c7d37"],["/ja/index.html","722284485b3e8604c20f9d60b24480c9"],["/ja/nihongo-test-page/index.html","4a1be9b28f6b1349ac706c38f9a034cf"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","e16ff23443dba19f3b9356ca6c20e68e"],["/page/2/index.html","f39348222923ee36f4af1df0ecb8a3e5"],["/page/3/index.html","ef4ef851e13d9967d1c049e63a596875"],["/page/4/index.html","af54b2cd55a7021f4186c1e7e790b4c8"],["/page/5/index.html","650f237949368b40643a25e4e4849c61"],["/page/6/index.html","7d04913ccc6d6fc37a89d73ea446ad38"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","9054068232a0d49579da60d188d0a83d"],["/zh-cn/archives/2015/03/index.html","01da56e1c83743f3e0c02eb84190a585"],["/zh-cn/archives/2015/04/index.html","83f521fe265e56ef80cb093362c05edd"],["/zh-cn/archives/2015/05/index.html","63ba65f66a7c4299b124b3910a9ac7df"],["/zh-cn/archives/2015/09/index.html","d3038ebed0a2fe2008da17feb2e532cf"],["/zh-cn/archives/2015/12/index.html","c337668f0aebb6196d99e897d70285ac"],["/zh-cn/archives/2015/index.html","3595181dfe25c8caecb2e4e243251668"],["/zh-cn/archives/2015/page/2/index.html","bcddb7deab26c3d2ea9eddb33fe2dea4"],["/zh-cn/archives/2015/page/3/index.html","ef35fda81a2d826f485aca648ba5f14b"],["/zh-cn/archives/2016/01/index.html","7afb0153b7ab879c689d371acf080607"],["/zh-cn/archives/2016/03/index.html","b072485120c6495ff95d08d54cde28c7"],["/zh-cn/archives/2016/04/index.html","6cc88aa86b6e21faa88a958883db271f"],["/zh-cn/archives/2016/06/index.html","1405959a32e25fbce5b3ac83dffa22a1"],["/zh-cn/archives/2016/09/index.html","d39193ad4cc22adc84f1bab5995c121f"],["/zh-cn/archives/2016/10/index.html","7e5d90085643f69abb63adcbc140e296"],["/zh-cn/archives/2016/12/index.html","ce963a24ded7558fb67d081078b0deb1"],["/zh-cn/archives/2016/index.html","9913f21da34d07e90af4afc039158d5c"],["/zh-cn/archives/2016/page/2/index.html","eaea8305f0afa58c7456846327eea2d6"],["/zh-cn/archives/2017/01/index.html","d49d9ec1fc8f86e26c060732167bcd73"],["/zh-cn/archives/2017/04/index.html","559adb527dc7bee4f9a20c315d6925f1"],["/zh-cn/archives/2017/06/index.html","a8ac763f7fa918875c8fcc5c43858ecc"],["/zh-cn/archives/2017/08/index.html","17721ddc7fb08e0e82133223ac2c21ee"],["/zh-cn/archives/2017/09/index.html","c2f4907b618925897a5ab9f519930353"],["/zh-cn/archives/2017/10/index.html","1cf74574df6af55bb4a1281915eb3e26"],["/zh-cn/archives/2017/index.html","283f0ef5baa276392a9a9677a5033581"],["/zh-cn/archives/2017/page/2/index.html","473e05ee0341622b94c46b9895cf6364"],["/zh-cn/archives/2018/04/index.html","88774aa13a4c7b1b2e04a44febb40818"],["/zh-cn/archives/2018/05/index.html","68f6c4b2710da7d34c3ffef9031472e8"],["/zh-cn/archives/2018/index.html","caf135918dcfcfe2d14f1469f61bcb18"],["/zh-cn/archives/index.html","771e57a489edc2d7ead65a8d8e2b4a4e"],["/zh-cn/archives/page/2/index.html","0a258b92a7be38ba81bb4bca3882ca1d"],["/zh-cn/archives/page/3/index.html","54f010ee17b5eb3e1f9f11ae81804017"],["/zh-cn/archives/page/4/index.html","2e97bf034aed255d123d24c9fd1f526c"],["/zh-cn/archives/page/5/index.html","28e9c6da110b3ef4a3ef442d83500062"],["/zh-cn/categories/ACG/Music/index.html","6218e8169f63f35a0bb0625019ebca48"],["/zh-cn/categories/ACG/Music/self-copy/index.html","a9ff63890e336532744b6325bbd67ec9"],["/zh-cn/categories/ACG/Travel/index.html","63d487c46e8533511fbdef4865cdf244"],["/zh-cn/categories/ACG/figures/index.html","3e598fab3da1145a484138cced155a21"],["/zh-cn/categories/ACG/index.html","1a48177969155709a2f270cc531e80eb"],["/zh-cn/categories/dev/Front-End-Dev/index.html","e9fa7224a8ba9c437aecb41fa68885f7"],["/zh-cn/categories/dev/HTML-CSS/index.html","4ef9cb43fbbaec1bf76bec3cf6142e08"],["/zh-cn/categories/dev/android/index.html","20c2a13d18ea34025397a4c5707636e1"],["/zh-cn/categories/dev/cpp/index.html","0b333d31ec388f808ba2f31c796c3471"],["/zh-cn/categories/dev/git/index.html","519678c5ce577a4b68725816c06aa9ad"],["/zh-cn/categories/dev/index.html","ecc86b76424c64b104364c4b2b76a130"],["/zh-cn/categories/dev/java/index.html","b2117a5265410601650be6cdf0b5262c"],["/zh-cn/categories/dev/page/2/index.html","36393e2a10dd34e02df8d82484ba6399"],["/zh-cn/categories/maintaince/blog-setup/index.html","7f7b639f094836172f7a514f84d59d26"],["/zh-cn/categories/maintaince/index.html","99d8356d0a507f315542e6ba6ed5f160"],["/zh-cn/categories/maintaince/macbook/index.html","b4f604df10c1117481e07a815877801d"],["/zh-cn/categories/maintaince/router-config/index.html","3c291ae2c6b96431ab702b89fcafff56"],["/zh-cn/categories/notes/index.html","3e03e8036e3f27e18f4a5cfeb24886dd"],["/zh-cn/categories/tricks/android/index.html","2e8bb7cf6688aefa2469e8d3e041b1cb"],["/zh-cn/categories/tricks/index.html","ab289dc26e0d91fc9b47ec49c53e4964"],["/zh-cn/categories/uncategorized/index.html","b4b1202b3296ebef0eb8dbd1a0586947"],["/zh-cn/categories/works/Front-End-Dev/index.html","f16abb40566739a75e9aeb628c7e68cc"],["/zh-cn/categories/works/csharp-wpf/index.html","a783403e0a871c273a3103d74e7dacf1"],["/zh-cn/categories/works/index.html","726d0106e46191fff90070f7958b47c6"],["/zh-cn/index.html","038a82d2810f2ce29f0303c7470cb48b"],["/zh-cn/page/2/index.html","94c04e1392975644559c10ff06b11370"],["/zh-cn/page/3/index.html","aa73d3f1e6525e8a9a2b0ac709a2bee8"],["/zh-cn/page/4/index.html","d607d83b81744239542b43c1d329cd24"],["/zh-cn/page/5/index.html","3c8d42a43dc29f5444eab0140da00050"]];
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
