/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","f80ac9896ec8be930408d8562e5a2b08"],["/2015/03/android-hostname-change/index.html","de0331d6697b3f674e9a8203facb7f92"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","9d8f48f8d4106bd58a59efc01e0390cd"],["/2015/04/android-chrome-issues-with-webpage/index.html","f71af1dd470223c26875a60dd20b3789"],["/2015/04/cpp-study-log/index.html","a585c2f47a8f1bfe71ab43e9d15dde7a"],["/2015/04/github-pages-ssl/index.html","11fac5b7c81c9cd6a3f195651544533c"],["/2015/04/hello-world/index.html","29e530f9390f64f61f5e5afd4b47210e"],["/2015/04/hexo-setup-log/index.html","b07acba8261b6f4c580007c2ca38f4b6"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","e6522070057f548d8cb9db89bac75db8"],["/2015/05/cpp-inherit/index.html","9c15e7abeb15dc08b73c0b91076c15dd"],["/2015/05/cpp-polymorphism/index.html","4909a897cb282ef267f269b3cabe99bd"],["/2015/09/android-root-ota/index.html","c81b770fb1010e88c08a82d22a02e0b2"],["/2015/09/java-learningNotes-1/index.html","7ec0aeacdf492091fc3e6f9c3f7f8393"],["/2015/09/newblog-newlife-2015/index.html","1dfd0c059f9c51670426fdfb682dfdca"],["/2015/09/router-rebuild-2015/index.html","4b87c6bf5554a9575c83bc8e89543cca"],["/2015/12/2015-12-21/index.html","b15dcf58a1889be3e3e6a1d21dcabd63"],["/2015/12/PixInTouch/index.html","eee0e402f3b47f38e7e1dc56a493a217"],["/2015/12/git-study-1/index.html","2990fe0319a4609a1d7806c884d19490"],["/2015/12/hexo-backup-and-migrate/index.html","77275f0c5745f005a849dda8e77e073e"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","3cbed580a1743be9d95b127d4a16388c"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","d89b0fa67ff717962f286491c3af05dc"],["/2015/12/router-reconfig-2015/index.html","8b287dce26d8130a504ce2885485993d"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","ef7facb4afc078b70898c44a0b8ea57d"],["/2016/01/2016-stepping-further/index.html","0019bda665b50d7fe2d9c0ba9ab59cd5"],["/2016/01/Android-Study-1-22/index.html","546b7983183d7867bb20cebc861635bf"],["/2016/03/2016-03-20/index.html","d198479e0b1dfdebf7f787ef812bfd52"],["/2016/03/GSC-535/index.html","562f8ac19ba48507dda61a942d534ea4"],["/2016/03/gulpjs-1/index.html","aafa0a439f71603323571db079c2e9a8"],["/2016/03/hexo-theme-paper-white/index.html","8cfad5caac3505aa0eae767d13f39364"],["/2016/04/2016-04-19/index.html","d48df47289e43d2261845cd6227b2151"],["/2016/06/2016-06-16/index.html","99ac779f7b8009169f9ef1b50c041ccc"],["/2016/09/2016-09-18/index.html","2017b8860df83fbe9d356f88e2c68032"],["/2016/10/2016-10-27/index.html","2ea12712ef289d3765cf66130da29c09"],["/2016/12/config-switchresx-and-2khidpi/index.html","3bd6d8ccb2597dbead79b689eae5135c"],["/2016/12/improve-duoshuo/index.html","ee61ea0a6bc7bdb92ec52241157eb783"],["/2016/12/use-travis-ci-your-blog/index.html","0059a4130810a219597a3371b3cd0aac"],["/2017/01/2017-iyahoi/index.html","41b531473f1333e8f5d43ef13afa47a6"],["/2017/01/webpack-amd/index.html","3b76db9e5ab1122ce1a045af9a69d76d"],["/2017/04/kotobukiya-syaoran/index.html","b80fe124373d7541116e2bb872284d8f"],["/2017/04/macbook-and-surface/index.html","3263ca207d84324b83b0b48a97277833"],["/2017/04/uc-hyakuya-yuichiro/index.html","b5398ffb00254b27708dbec9753d86a5"],["/2017/06/noragami-seichijunrei/index.html","3b1b6be31826ff54bce72f489dc4d833"],["/2017/08/cross-compile-55-libev/index.html","deb3b2a192f2a3457dc8ad9039eb3d16"],["/2017/08/explore-service-worker-working-lifetime/index.html","0f0457d0e7baa9cf9a6e657be2613967"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","770d40e661ba8bfc4c359bc0e5098fee"],["/2017/09/record-user-login-status-methods/index.html","475ca63bb3b2b55272554fb0fb859fe8"],["/2017/10/vue-typescript-early/index.html","15e0fe00f1fdb37d921b31db45a47d7f"],["/2018/04/2017-end/index.html","e3f6a43d6f3c562ddda978fa7dc424d5"],["/2018/04/twitter-account-activity-api/index.html","cfa27f5c256866c9a360dc90d022fee0"],["/2018/05/buddy-complex-seichijunrei/index.html","2fd6ee8eb78476241bdd31dbe5bc5022"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","67809d23d501b0fab5127d61f36e2543"],["/2019/05/2019-05-17-google-io-tech/index.html","93a62719606e5af21be72ba98290e891"],["/404.html","2b3c90a30a49a7452925d8bb1e8903a4"],["/about/index.html","9146f8dee2af1abbbe74b917383d4edb"],["/archives/2015/03/index.html","9c5a9879421f2f92ac456cc1c46ac943"],["/archives/2015/04/index.html","7583d41ff037a4abc48de755df39e9a2"],["/archives/2015/05/index.html","7df016e478a7181506928230ac951d63"],["/archives/2015/09/index.html","e617ed85d148684a24db7a79c469db95"],["/archives/2015/12/index.html","447e1b39b9b9b668862867d1bc0482eb"],["/archives/2015/index.html","e9decec56c3750780a871b9bba4145de"],["/archives/2015/page/2/index.html","659b0fe449683661bc85cdc61afe7629"],["/archives/2015/page/3/index.html","696a74378b18a94a96e77bdcd469515d"],["/archives/2016/01/index.html","1e83d465b4f3c81185f72c722c37b8c0"],["/archives/2016/03/index.html","0482177d9e37665691f6eb6751c3047e"],["/archives/2016/04/index.html","5f410769fd6fba6c5dd5626092442954"],["/archives/2016/06/index.html","24486b0e1259e6a9400be73446af845f"],["/archives/2016/09/index.html","c483d2954ce3c9aa70578e88d61041e1"],["/archives/2016/10/index.html","3888de1fcdf53ff13bc5f7be9142e3a8"],["/archives/2016/12/index.html","f78c6f5d3cd3fde4df4da1f5c5e56630"],["/archives/2016/index.html","59db9e195623c23c85760c6b1289542d"],["/archives/2016/page/2/index.html","e7c22144598a191247fe8a0d6f96b11e"],["/archives/2017/01/index.html","1f0bbdc2f3f522cbe9690a794f1ca399"],["/archives/2017/04/index.html","b9d6c19a9cd79fc25a667059481acbdb"],["/archives/2017/06/index.html","cc31b6b1f6721d767c3cc1b31412575f"],["/archives/2017/08/index.html","f74eb455686a45afd46ef80c348f7177"],["/archives/2017/09/index.html","9b7981bcce637c28b84d1b5b7e464aeb"],["/archives/2017/10/index.html","d6d3950c1b7ac04ab7db826404b3fc1c"],["/archives/2017/index.html","836247c464af712dbe3e253dca2e3206"],["/archives/2017/page/2/index.html","016af73b6838bd644ad32a0c9b5c7326"],["/archives/2018/04/index.html","8f1f7426c8e9b979f6e912ab3b03af82"],["/archives/2018/05/index.html","75856a2e1225abc7ed3f1f6b93566bcc"],["/archives/2018/index.html","89ed9e91ad9f9e4c79cec5690565ed65"],["/archives/2019/05/index.html","11bf9f0cd06a164294d10d1e559ef1fb"],["/archives/2019/index.html","24caafad4ecbf041296af5ccd3c484d6"],["/archives/index.html","2b86b8aac2ba9388504fb57b2f2a9c33"],["/archives/page/2/index.html","82fb0a7ef7c4389f1d5524dbde7d7f7f"],["/archives/page/3/index.html","c85c614462454385cf5e611207bc9fc7"],["/archives/page/4/index.html","e6d77a3c1e9412d8b5b70f6111250648"],["/archives/page/5/index.html","f4412f1070e7a01aea107e58440b3955"],["/archives/page/6/index.html","22fb27f1b330a6a600b8d4af4764da01"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","ad8d3b99cb0ff97b5536534120692cf8"],["/categories/ACG/Music/self-copy/index.html","4a9ac4a8dab9d98075e88d1e7b6c4302"],["/categories/ACG/Travel/index.html","04f2580902355b26d02a0cc0e02c73e0"],["/categories/ACG/figures/index.html","f31b27f2c63ce3896253a73221ef18d1"],["/categories/ACG/index.html","2e18666b3b9a2c74d1b7c60848ad6c68"],["/categories/dev/Front-End-Dev/index.html","dcbe7b78332b2381bab6d10046e3d555"],["/categories/dev/HTML-CSS/index.html","3edcb62c4b741bf348c6ab11788a78e0"],["/categories/dev/android/index.html","10d2ab303ccddb62994b9bdefa41ffae"],["/categories/dev/cpp/index.html","390f8014dbb3302ce9ed257f47ebbce7"],["/categories/dev/git/index.html","e26946032df314cce9ec8c9eeb5e3414"],["/categories/dev/index.html","22b0cca62c0fbba8cb05b036b7c9c77f"],["/categories/dev/java/index.html","ba5c0252c36e2d658afaa90282765576"],["/categories/dev/page/2/index.html","878cfa072612fe619573c353638c614a"],["/categories/maintaince/blog-setup/index.html","f1da9faf04eaf3bf9217e92f33a17cac"],["/categories/maintaince/index.html","db4ee53bd86ef83df2aaee8a7f303494"],["/categories/maintaince/macbook/index.html","afcdfbab27370f5f7af0ea5a2eb6c4b3"],["/categories/maintaince/router-config/index.html","1a24061d63f4042534d231f655a8dd32"],["/categories/notes/index.html","3b62bd649c8a4d4b8f08ab272ef5cc15"],["/categories/tricks/android/index.html","f36cdb98e95ec25880765bb9e533fafc"],["/categories/tricks/index.html","de6a803d7ac0f1daae8fa4b6d524ae0b"],["/categories/uncategorized/index.html","c72406276cb50cf97c6dfa574f74bb7c"],["/categories/works/Front-End-Dev/index.html","0479541ec826b7dba581ed5e268bed67"],["/categories/works/csharp-wpf/index.html","e8598b071610eefa1eecf33ec135f1fc"],["/categories/works/index.html","65b5a0a6aa78b3ab582ede97c9907383"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","4ec3922f706415bd1b4b65af59b6cab8"],["/ja/2015/03/WNDR4300-setup-log/index.html","27438dd898ed21c771a8c74982478285"],["/ja/2015/03/android-hostname-change/index.html","7bcaf017782de0590ea1a31de6b2bf4d"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","019f1e6daf8a38944eb9d13a5eebddb0"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","8874f735146b545cc5f6a1a50db9d478"],["/ja/2015/04/cpp-study-log/index.html","68357d85c998ee291311f31d01e58817"],["/ja/2015/04/github-pages-ssl/index.html","18fb98a1e4c97657d6312f7f1ae51850"],["/ja/2015/04/hello-world/index.html","9d34bc9fa61dc88b96b432528119e83c"],["/ja/2015/04/hexo-setup-log/index.html","cea98797b2f3dde7540ef88c203197dd"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","463600e7dcf8c216ecd73e89728f3e45"],["/ja/2015/05/cpp-inherit/index.html","4d00bd1041c230691514c49c38554a68"],["/ja/2015/05/cpp-polymorphism/index.html","283be99099d042e407f29107976182ca"],["/ja/2015/09/android-root-ota/index.html","f7573059a5b1e59a752fc5e85587d7ed"],["/ja/2015/09/java-learningNotes-1/index.html","03ed540be4f819d37f148f700b394949"],["/ja/2015/09/newblog-newlife-2015/index.html","97dccb8e502dc37f49ccfd7875eb634e"],["/ja/2015/09/router-rebuild-2015/index.html","eba7a45880b1245e725f38dc28b43f54"],["/ja/2015/12/2015-12-21/index.html","155db1763b70a7d068f3b072453a2e5b"],["/ja/2015/12/PixInTouch/index.html","8b344378f40d00f77bb9de87e30f912a"],["/ja/2015/12/git-study-1/index.html","d43f5511f1f8b57f2c02ce88a02321c1"],["/ja/2015/12/hexo-backup-and-migrate/index.html","84a79d16de150e222f8ae5075597cd3c"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","7570e8cb6f94c0af5c4b217aff72b090"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","94e1b64e5c9817be484cd84604d8b028"],["/ja/2015/12/router-reconfig-2015/index.html","05a96c07b6bbadd7c8fea177412021f2"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","2bd717f0b114204ba0bf5367c165f166"],["/ja/2016/01/2016-stepping-further/index.html","38fe8389003243b69027afb129d947b4"],["/ja/2016/01/Android-Study-1-22/index.html","f41e760d38bfa57c58433351a8a197c4"],["/ja/2016/03/2016-03-20/index.html","7a89103ae93538f11815f8de88e4cb2b"],["/ja/2016/03/GSC-535/index.html","f90a2f00e74ee1888fcbcd0434479c85"],["/ja/2016/03/gulpjs-1/index.html","7ca7702917a15a29d9e72313a2be7ffb"],["/ja/2016/03/hexo-theme-paper-white/index.html","2a0dc1fcef19021483843ccc29b9c554"],["/ja/2016/04/2016-04-19/index.html","057b63501529814f5aec493d4e17d2e0"],["/ja/2016/06/2016-06-16/index.html","cac28aa2432f5498182327153d33f225"],["/ja/2016/09/2016-09-18/index.html","d0ebce515d4ec36fd27b0d126a844ce0"],["/ja/2016/10/2016-10-27/index.html","e377ce5ce9936a982ed49f03a0c6df5d"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","7746ec0413225ffabca111f92f84e597"],["/ja/2016/12/improve-duoshuo/index.html","2644c8cae9ecf038d0e25ae475bbb933"],["/ja/2016/12/use-travis-ci-your-blog/index.html","e16f18a227fc947e54290679c9f9be41"],["/ja/2017/01/2017-iyahoi/index.html","6a5cad8cd36c3fe4735919607f4a501c"],["/ja/2017/01/webpack-amd/index.html","1d3b35c3065fe0aedba327c78853c43c"],["/ja/2017/04/kotobukiya-syaoran/index.html","687fe73972a0417454d101053fdf7d93"],["/ja/2017/04/macbook-and-surface/index.html","c6ac9a1e0f3b6ac3e4f9c90f40e9016e"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","57665fb10808524519666d49046cd888"],["/ja/2017/06/noragami-seichijunrei/index.html","1e20b9e24af5b792dcc81e7aa38faa8f"],["/ja/2017/08/cross-compile-55-libev/index.html","89b4e98635733ef7780ad39e0fc1e293"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","dea78b36e98ec053d6dedaf40fa8a554"],["/ja/2017/08/hello-jp-world/index.html","9245ac47614232055c4e7ca5309fdf46"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","82ddf81c965ad3af2389e3f0ddbd983a"],["/ja/2017/09/record-user-login-status-methods/index.html","494b86c21f35e5f2ca19a23151eca900"],["/ja/2017/10/vue-typescript-early/index.html","ff86a5648c09a4d1f9ea81fbe883a80f"],["/ja/2018/04/2017-end/index.html","7f38c63cf49838df18991901830ba717"],["/ja/2018/04/twitter-account-activity-api/index.html","5f23a7f7e862ed789dba82aa9beef3a3"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","14e112ad62ec09fcc88d37a3bfdccdf4"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","2147776032e3299b5c45af3ddb1e7b88"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","d03de29a194091bc20326ec9cde70422"],["/ja/404.html","b8be91d464bed934e004fd326143ca45"],["/ja/about/index.html","8e18d6bf29a00262c7cbf99ca975013d"],["/ja/archives/2017/08/index.html","dcee8d9939a24cc55ed1cedbb351f593"],["/ja/archives/2017/09/index.html","605d9a4ed942cee0d340a5169aa42e60"],["/ja/archives/2017/10/index.html","5483f5b1c684ad733778e410c3a768b7"],["/ja/archives/2017/index.html","1c0cc594f2d0a5d62548d20070604c49"],["/ja/archives/2018/04/index.html","b78537faaa330dcce3425e4d3c2f2eb0"],["/ja/archives/2018/05/index.html","6eb145455e49e3f31cddf48f9b69864e"],["/ja/archives/2018/index.html","2335cc1308a3e753970115a72caac0a7"],["/ja/archives/2019/05/index.html","5c61474f3eb8b7442f78d40b83009d43"],["/ja/archives/2019/index.html","209aa59ade258b8c956be8aa565d0efe"],["/ja/archives/index.html","400bcb45bfb72a204ecbc9f70a9dd8e9"],["/ja/categories/ACG/Travel/index.html","aa0aeab7209773368577c00fd6ed42e8"],["/ja/categories/ACG/index.html","dbf689d0704853ea514351771856f0eb"],["/ja/categories/dev/Front-End-Dev/index.html","3331e9dd3e0010e58566a31b65187e34"],["/ja/categories/dev/index.html","ee573e86ab5d97da3e11918e20f04cfd"],["/ja/categories/uncategorized/index.html","1a1c8127497627224e689fd908244657"],["/ja/index.html","99955bb8eb5736a35b4a5bb161f03304"],["/ja/nihongo-test-page/index.html","f1f6b2840d52f8282f1b0cf2dc2b0e7b"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","45c675dda8c7668164460159ff5bff50"],["/page/2/index.html","fcd16fafb6b8db36e2b0aea064cbb610"],["/page/3/index.html","3d7c062b6f969efad72561eedbe02dc0"],["/page/4/index.html","86411eb5db9b1f9a6de0e1b686c8741c"],["/page/5/index.html","0faa7131c1cc421e3aa737c87a1307dd"],["/page/6/index.html","245db0af6e03a8a37e23e8146cb373dc"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","4320568de1dcaa39008017c41cb2d97f"],["/zh-cn/archives/2015/03/index.html","ac1154e7b39105e448575bca7a2b8ed4"],["/zh-cn/archives/2015/04/index.html","262ae083fadba5f6f4ea25814c6fa261"],["/zh-cn/archives/2015/05/index.html","758466ffaedf9bc449a167576ef1b3cc"],["/zh-cn/archives/2015/09/index.html","f1bde321cf4f379559f03249c5ed8f46"],["/zh-cn/archives/2015/12/index.html","0acdf7e938c64442b92a0162fa4669ed"],["/zh-cn/archives/2015/index.html","f9fc9e708aee4df218d9d24ca27ab98d"],["/zh-cn/archives/2015/page/2/index.html","f0358979758d2523e282386a2c8035b1"],["/zh-cn/archives/2015/page/3/index.html","0303e772fff9c4f49bbf53dcad454998"],["/zh-cn/archives/2016/01/index.html","a14b2f86bcf3bdb5536efc72d1334979"],["/zh-cn/archives/2016/03/index.html","1b7e57ce54792f22fd15b4e384d262cf"],["/zh-cn/archives/2016/04/index.html","fcab3c946008f456a285cced405444c8"],["/zh-cn/archives/2016/06/index.html","36efa4d78b6cca6eab0ca298ef8d7162"],["/zh-cn/archives/2016/09/index.html","770c5dbcfa12366e23bb4dcb6c676bb3"],["/zh-cn/archives/2016/10/index.html","2785d46e73e0cd3b88dec28daa23423d"],["/zh-cn/archives/2016/12/index.html","27e7849bd7c292b645e3504016c3add3"],["/zh-cn/archives/2016/index.html","18425de273a2acbd09befcd5afe72fdc"],["/zh-cn/archives/2016/page/2/index.html","cfc43e67b23d4f9e4a4affdbc0216833"],["/zh-cn/archives/2017/01/index.html","c60d9dfe840e49e2d31b0cc05c09e491"],["/zh-cn/archives/2017/04/index.html","be429558981d265bfa82338f64edb676"],["/zh-cn/archives/2017/06/index.html","dd1ecac8b7e7318352289a30984d13ad"],["/zh-cn/archives/2017/08/index.html","0aa5fce4c71d580e8c0016541afc500b"],["/zh-cn/archives/2017/09/index.html","dc4a7e86f04e80b085b661315b8b7c90"],["/zh-cn/archives/2017/10/index.html","5e58f5596b6fc5bcff3cc3ffe2482532"],["/zh-cn/archives/2017/index.html","7c0eea79ef46f1fef0f854a147198520"],["/zh-cn/archives/2017/page/2/index.html","898c359ee06e261cbc4eadab84c92204"],["/zh-cn/archives/2018/04/index.html","50b17589366a761c6b11db3313c3ce31"],["/zh-cn/archives/2018/05/index.html","324e2b3194fd7754be149bbfa2d6ad08"],["/zh-cn/archives/2018/index.html","daca684cd9098179d4dfaf3523244f7e"],["/zh-cn/archives/2019/05/index.html","76cd8e3d2b3112d4adb8c2d148582992"],["/zh-cn/archives/2019/index.html","445062d815ac3a905738dd79a53bdbf7"],["/zh-cn/archives/index.html","01b63a56b43184e80439f29fa6a51c5a"],["/zh-cn/archives/page/2/index.html","226165ca8caefe0653de186bd9fdd03b"],["/zh-cn/archives/page/3/index.html","40cf0d63c8bbcdc2b42e376ca58cfdfa"],["/zh-cn/archives/page/4/index.html","dac17a4703586da5aac4a5274f28afef"],["/zh-cn/archives/page/5/index.html","c624d890fe7f186cddb88d75297e2a40"],["/zh-cn/archives/page/6/index.html","5a3c9575690f2d6e42669a133d4f0f79"],["/zh-cn/categories/ACG/Music/index.html","8e45a4408906d4a526f4f1c16f1b86cf"],["/zh-cn/categories/ACG/Music/self-copy/index.html","e0f6c98281d69c1cd49c54f1dd5a6dea"],["/zh-cn/categories/ACG/Travel/index.html","a29541aa531a9f48ec40fcac13d1d1b9"],["/zh-cn/categories/ACG/figures/index.html","523ceb4bc8d48a19e34900cd1e4b09df"],["/zh-cn/categories/ACG/index.html","d491da25700d7a2ee4755a5f8afc90a1"],["/zh-cn/categories/dev/Front-End-Dev/index.html","3a4f29ce32635779f91065d81fafb7ca"],["/zh-cn/categories/dev/HTML-CSS/index.html","e86aea7a6895f5acd9d7b73b4e4fdd56"],["/zh-cn/categories/dev/android/index.html","0e8a82f57237883381680e44145d5fe3"],["/zh-cn/categories/dev/cpp/index.html","ad85f63f423459275dd58b891f2a5fd2"],["/zh-cn/categories/dev/git/index.html","6dba54618eb544311fdc2fae1ac58a6a"],["/zh-cn/categories/dev/index.html","6c7fc41f39e34e765a9fdce4120296b2"],["/zh-cn/categories/dev/java/index.html","a2527f382b96ea9b50f4c1178b6a7976"],["/zh-cn/categories/dev/page/2/index.html","8af628852838875b01da9b8bcd3ae7a6"],["/zh-cn/categories/maintaince/blog-setup/index.html","29e1023e0343c6ac42e8f5b517bfd4cb"],["/zh-cn/categories/maintaince/index.html","e2c284fe9c23e73e8fcbb12c43fbaea7"],["/zh-cn/categories/maintaince/macbook/index.html","ab16bc75576aa3ae86f4f8a56b980fcd"],["/zh-cn/categories/maintaince/router-config/index.html","eb665ec93f6943951130b8bd9fd902d8"],["/zh-cn/categories/notes/index.html","f8f568a47442ece8dc83e34a416a3360"],["/zh-cn/categories/tricks/android/index.html","36aa8a87bd5d1d0a3d93aaeae1c7056b"],["/zh-cn/categories/tricks/index.html","a0f4bb2378b205a9a5ad5d7a1ce064c3"],["/zh-cn/categories/uncategorized/index.html","45a509a56de1766b48795c079c0c881b"],["/zh-cn/categories/works/Front-End-Dev/index.html","def11e921de9b323820b779d4f80c0ab"],["/zh-cn/categories/works/csharp-wpf/index.html","a152db55742c5029cb0df1285d11cea8"],["/zh-cn/categories/works/index.html","a37e271956c998de5fb39366bed34049"],["/zh-cn/index.html","8a5dc01c8849f442a7e049f88f1605f7"],["/zh-cn/page/2/index.html","0535abe15e268e8c261cdc77117aead2"],["/zh-cn/page/3/index.html","a0cd5e92f8177d183c85cba30fdd39d0"],["/zh-cn/page/4/index.html","979b213480dbf18f2216d92f2fa3f70b"],["/zh-cn/page/5/index.html","b5e487fc27d729632435fa1a8ba696b4"],["/zh-cn/page/6/index.html","96d3289d9dd4acc554af8d45f79d452b"]];
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
