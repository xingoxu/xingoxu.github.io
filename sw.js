/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","4fd59453a9b57d34f89147c38f453cce"],["/2015/03/android-hostname-change/index.html","5974122a3b3dcdef65cee7eb2f214e70"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","c8c8002093cfe9daa98b29400f07fbee"],["/2015/04/android-chrome-issues-with-webpage/index.html","33034715fefda8853155e95d397ebe27"],["/2015/04/cpp-study-log/index.html","b70fee118da3a4b8a703de0a7dd29ce0"],["/2015/04/github-pages-ssl/index.html","b9697aa35da092e344bfd543e9832ad5"],["/2015/04/hello-world/index.html","57fdcbf4116529b4196419b884871b57"],["/2015/04/hexo-setup-log/index.html","cc301168c0b22bc6e99dca177cb462e1"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","444ce558645ddec2f9e8fe3917a4de5b"],["/2015/05/cpp-inherit/index.html","034e968f9a279a315dceb09b0317c108"],["/2015/05/cpp-polymorphism/index.html","5a6e1fe23ae6df97e35fd4ef5ca9ce18"],["/2015/09/android-root-ota/index.html","fbcb246490af0a731464868c14f403ea"],["/2015/09/java-learningNotes-1/index.html","d279afeb9c6ac9bbd31299604b213436"],["/2015/09/newblog-newlife-2015/index.html","49ee36cf1a35e931ba02906679cd4960"],["/2015/09/router-rebuild-2015/index.html","b30e8e3f08f037c513a0be8aa1e59ec7"],["/2015/12/2015-12-21/index.html","009949d9ee158fc3e3c172883374a0d3"],["/2015/12/PixInTouch/index.html","464b218a6f47202dc76797f1c9373122"],["/2015/12/git-study-1/index.html","c6c530e3e6abe81e184bf179ee378565"],["/2015/12/hexo-backup-and-migrate/index.html","e445398c5f9055021de65026f5b02591"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","fac51d9ca63504c4ca4670528caf1565"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","836470ee1abe0bc4691dcd2bb1377f32"],["/2015/12/router-reconfig-2015/index.html","27872e0109b946d30405ab451124439f"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","5c4524f54a031d14c3ffb82c55adf990"],["/2016/01/2016-stepping-further/index.html","aafa1631160dcdbd62cc56ae43ea91d0"],["/2016/01/Android-Study-1-22/index.html","386d807d98a1d3832fec0a6f540194c2"],["/2016/03/2016-03-20/index.html","a49672b4ed6e7ace27853eab0498f1b7"],["/2016/03/GSC-535/index.html","57b51fb10e12c848977573bf3b71713a"],["/2016/03/gulpjs-1/index.html","361acf5bd1dad3046ec5e695f91f307e"],["/2016/03/hexo-theme-paper-white/index.html","b4970fe26020febc06df0411a4f8462f"],["/2016/04/2016-04-19/index.html","f921c4f14d227179fcbeecb9a67339dc"],["/2016/06/2016-06-16/index.html","004589da7546f1effb4d0e2e9f1af874"],["/2016/09/2016-09-18/index.html","9879d7a5151bcbed36a1bdc01ebd8b4b"],["/2016/10/2016-10-27/index.html","c803730474d3a4ad622c24b4c9fe7c42"],["/2016/12/config-switchresx-and-2khidpi/index.html","1a71624b8659fa884fa75ace647876f8"],["/2016/12/improve-duoshuo/index.html","03e1f6d255b4ade8f5bf2e98f8013340"],["/2016/12/use-travis-ci-your-blog/index.html","a3e8bc5f4fdfa86777f4085637bd3ddf"],["/2017/01/2017-iyahoi/index.html","e7a9fede9d38c49cb0ac1208200fae6a"],["/2017/01/webpack-amd/index.html","e9a6e74b551bc72f274be3f333a2f326"],["/2017/04/kotobukiya-syaoran/index.html","d7e56498e3fd5d198e1a77d7463841e9"],["/2017/04/macbook-and-surface/index.html","b710bccd80ce79351cedec2d56059846"],["/2017/04/uc-hyakuya-yuichiro/index.html","064053b5bebeef38b58bcaf19de06177"],["/2017/06/noragami-seichijunrei/index.html","63b1c09e5fde3680dc0c3221e307907c"],["/2017/08/cross-compile-55-libev/index.html","ac68dcbd50bea9788999735a418144f5"],["/2017/08/explore-service-worker-working-lifetime/index.html","ed54215fb2de5be484570348e945cf9f"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","eab8669d95a760fad4fc6294d6d72c30"],["/2017/09/record-user-login-status-methods/index.html","e8dd1d64a69693f9f61f5ccd3f8fde48"],["/404.html","6d2ecf1888c79ff1da80594d2b23438c"],["/about/index.html","fada98d58226edf35ca79387dd76364e"],["/archives/2015/03/index.html","ba3f27843445bcefb9e75405b05a7942"],["/archives/2015/04/index.html","de4e60e0af616a441fc6a8aafe96ca76"],["/archives/2015/05/index.html","fd8f8677fc6f6d030187b883e403aef9"],["/archives/2015/09/index.html","255db589d7f45cad429c9478faa3ecf3"],["/archives/2015/12/index.html","0cf4ec505a755c104bc4c382e03e020d"],["/archives/2015/index.html","9727dd6e232e5a29504d8da9a97fd076"],["/archives/2015/page/2/index.html","f6940719d474c06dff48aa2e1f3c8a7c"],["/archives/2015/page/3/index.html","3ad783268957b07d603cd6bf5b0500b9"],["/archives/2016/01/index.html","96461aa236f1e7264a6b5860c7498024"],["/archives/2016/03/index.html","b36b63efb0912641a22abe6fe4f79425"],["/archives/2016/04/index.html","dd36c9db441207eb53c6655a61f7898f"],["/archives/2016/06/index.html","fb5386b84fe34286e809bf4fd8ad9de3"],["/archives/2016/09/index.html","0358db697b6e8e0da57d52f4033afc87"],["/archives/2016/10/index.html","24fc993bd6552f2456a31abce962a18a"],["/archives/2016/12/index.html","32036fbff943aee7513b488b7838e376"],["/archives/2016/index.html","170bb7aa8788ee39db4ce067cfc647eb"],["/archives/2016/page/2/index.html","97d4e0a1f36ba56e970b3b5b2718aaa3"],["/archives/2017/01/index.html","56e33cb8c06cfbd1434d7d1ed89727eb"],["/archives/2017/04/index.html","669ff96ea7ea4f3f4ef11df594f7fb5c"],["/archives/2017/06/index.html","4843e2b2504424ec6f8720a44f12d789"],["/archives/2017/08/index.html","171b78220bbb77e1ed72277c31d18e87"],["/archives/2017/09/index.html","ba617bd3397459a4cc3abce3b747b744"],["/archives/2017/index.html","3a1e765d9ad5382faf023561ba7877cb"],["/archives/index.html","b294bdc04c94732d52b32c05cfefbaf4"],["/archives/page/2/index.html","52bddb20d2fcb5ac0bc8f82de84fc3ba"],["/archives/page/3/index.html","d1399e5b1ef7baed0aa48823fa63dcb3"],["/archives/page/4/index.html","6c6c3f5cef413ad543b1c234bc87d258"],["/archives/page/5/index.html","336169524df28332e98fe387477fc6f7"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","5c522b35fe0803a863ddc9af3f7d3c0d"],["/categories/ACG/Music/self-copy/index.html","e66e77a6a56435519e3b080f9d6a5106"],["/categories/ACG/Travel/index.html","6949f3c742e208f8f1930b1fae860290"],["/categories/ACG/figures/index.html","1564d874cd1e34d2c8f669762031f223"],["/categories/ACG/index.html","1167c4e4c48926edf2b5c4f20b43bea5"],["/categories/dev/Front-End-Dev/index.html","1ca008aa71977bcba40bfdda5d126221"],["/categories/dev/HTML-CSS/index.html","29f2f10af62ec0f2f344448424ae3130"],["/categories/dev/android/index.html","92e07a8023bf25a14c6fa3977d64e086"],["/categories/dev/cpp/index.html","1b1a281cea82ddf07a37839300a0e286"],["/categories/dev/git/index.html","4a17ba82568dcd16f5d025cc98bcaf63"],["/categories/dev/index.html","1d17a91d276138ade11b620daf38be60"],["/categories/dev/java/index.html","aedf88168889f0048b2c085c920bc133"],["/categories/dev/page/2/index.html","cebcff8d7b949b0faf069c4ffd49c74a"],["/categories/maintaince/blog-setup/index.html","1bc70959e7c090cb9c94e46e15d8ca2f"],["/categories/maintaince/index.html","b8534ba71890521f7322207782d15873"],["/categories/maintaince/macbook/index.html","0981aede7c31055f139a9cee4bca081a"],["/categories/maintaince/router-config/index.html","0c0fbc7aeee1a4feb0c53567f2306ef3"],["/categories/notes/index.html","fb2afff457464df6a5042ec63b436fd6"],["/categories/tricks/android/index.html","73cef165381a4ff44abf5657647a06fd"],["/categories/tricks/index.html","b1c70f5fa73f936cabb9097056f91bb8"],["/categories/uncategorized/index.html","c31d38f6dc867208a5fb68ee004224e7"],["/categories/works/Front-End-Dev/index.html","98a976a9a834f053c1400a6a9d833e52"],["/categories/works/csharp-wpf/index.html","ef0f2ddc98cdd3c680cb023b8210170c"],["/categories/works/index.html","f268e300fb04488759c342892028b339"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","a9f5c1f5dc3ccef05bb82411c53062ee"],["/ja/2015/03/WNDR4300-setup-log/index.html","2f360cf89ed5fbb7c317fc5c02ed5c7f"],["/ja/2015/03/android-hostname-change/index.html","990a98d04f7ab9f4bfdefb599625e219"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","46a3b98c43487e50d07f20f43a4da033"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","67321c498f841f5a33b265cb63246ee5"],["/ja/2015/04/cpp-study-log/index.html","510dfa83277909a1e9817dc90e4d3971"],["/ja/2015/04/github-pages-ssl/index.html","76e8b4826fccc3af08bcfe827ac2fd92"],["/ja/2015/04/hello-world/index.html","22ec0d23cc95c375df4c98e45ad517ad"],["/ja/2015/04/hexo-setup-log/index.html","45c46f70cc66e5d6544d0a6436acff67"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","745f40855a7eb6137886a0dc88db8faf"],["/ja/2015/05/cpp-inherit/index.html","9fdbd16b544626a0811d2b3980cd2834"],["/ja/2015/05/cpp-polymorphism/index.html","26d4304d9e1cc97ebea586336b69d1eb"],["/ja/2015/09/android-root-ota/index.html","e5cd4ede246405769482833b62aac223"],["/ja/2015/09/java-learningNotes-1/index.html","8a265c73213e469bbd7e0e10884da8ef"],["/ja/2015/09/newblog-newlife-2015/index.html","40783ba586efa9b3dd4beafd3dd74726"],["/ja/2015/09/router-rebuild-2015/index.html","86ed90e5b4fc61223903dd04b9490436"],["/ja/2015/12/2015-12-21/index.html","35a920471c0fa9b3d56d2a23dd624177"],["/ja/2015/12/PixInTouch/index.html","0c927dbcfbc8a9faae7d27dcf60bedbb"],["/ja/2015/12/git-study-1/index.html","84ba5f4b2fffb2d7f06346117a2e73f0"],["/ja/2015/12/hexo-backup-and-migrate/index.html","776f47f102f98be2c57f946ea4f2943e"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","35e3b54a4b46bf085e5fc9645f958c30"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","044e96f19250e51890ad2e6dd0db21c5"],["/ja/2015/12/router-reconfig-2015/index.html","6681cf64396ff08a72395b116ebd833c"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","953e68c1c48bc39c299f6ed3cb00402d"],["/ja/2016/01/2016-stepping-further/index.html","2669f81fbe5eabdb3dd2b6657093cb5e"],["/ja/2016/01/Android-Study-1-22/index.html","b3bb3b52ca62ff99c7c8dc166a388064"],["/ja/2016/03/2016-03-20/index.html","ef4ea50d39fcce6f1e3944ecbd310df5"],["/ja/2016/03/GSC-535/index.html","f8af237ec8e370c72c7d9d2c0ddb0853"],["/ja/2016/03/gulpjs-1/index.html","06f358ba736d3dc6a046117af186cd50"],["/ja/2016/03/hexo-theme-paper-white/index.html","508adb0be714572aab3c9907f7320272"],["/ja/2016/04/2016-04-19/index.html","6935b6871a2b4ebac776d03b7b22355b"],["/ja/2016/06/2016-06-16/index.html","8d8aa31ac44373eb3bd73aa2e2d8779a"],["/ja/2016/09/2016-09-18/index.html","440643b52c30e22a9b59bd68c86b32bd"],["/ja/2016/10/2016-10-27/index.html","e7291ce49c794ebab55757b31eadb25a"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","e1e193ead7c1db92ff45d7a13bbd8294"],["/ja/2016/12/improve-duoshuo/index.html","e489afa911e5b8941ab43f9d28169a75"],["/ja/2016/12/use-travis-ci-your-blog/index.html","97556691c92e4fb84d1ca0af9c5d442b"],["/ja/2017/01/2017-iyahoi/index.html","3da65a0ac59b3b1b02ae24b8611b3848"],["/ja/2017/01/webpack-amd/index.html","a50f9890283c949972590b5a1a014095"],["/ja/2017/04/kotobukiya-syaoran/index.html","27419d6db2713fdb267a54d2dec1d719"],["/ja/2017/04/macbook-and-surface/index.html","7446b8745ae82c1a71dac18f1da7731c"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","a85c37d96a6eadd670fe76fd7fb49855"],["/ja/2017/06/noragami-seichijunrei/index.html","beca385aa0d648bdb5b9605016ebd733"],["/ja/2017/08/cross-compile-55-libev/index.html","42838e2a8ac924410fc43253f4b1f764"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","0c9651a4d3617b3932750b1930f08159"],["/ja/2017/08/hello-jp-world/index.html","3f16a85256544448b026f1c16609ea4c"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","8289985ed366e8a9c32ae5a5a5f41466"],["/ja/2017/09/record-user-login-status-methods/index.html","596285437290a9aa9db8e6166613ee8c"],["/ja/2017/10/vue-typescript-early/index.html","32b8834b96847ec9b2c0c2d77ede3811"],["/ja/404.html","621f8bb39d3a25849cb8d15cb36966e1"],["/ja/about/index.html","f098d97810d4c5c4af925662ce5cdd5c"],["/ja/archives/2017/08/index.html","ae3254c14880085814008c76f790edbb"],["/ja/archives/2017/09/index.html","8cd01dbf870ae83aaa3749d24e389931"],["/ja/archives/2017/10/index.html","79c452ff742fcebe17b7cdc701dd9d30"],["/ja/archives/2017/index.html","b79a75011d48d534e5e8349b891f7a33"],["/ja/archives/index.html","35372deecc3c20c03ece7caa581194ee"],["/ja/categories/dev/Front-End-Dev/index.html","7f0b50af48ef7925e867c8d80c879690"],["/ja/categories/dev/index.html","3869c9f76d5c5fbb56958ad56995446b"],["/ja/categories/uncategorized/index.html","2610e46f10e61dcc3a93d0a77737ec31"],["/ja/index.html","cb2c4792551e5dfb030e55b1e613fe99"],["/ja/nihongo-test-page/index.html","4ba6af92c5ab91e46fe94d407576736e"],["/ja/resume/index.html","cf5de9ac56b039a5dbd141fb7456bc56"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","d170562c20bad7b3b4ff50aefb6ca073"],["/page/2/index.html","0eeca2a7ee3146779c2869e9480bf062"],["/page/3/index.html","a49be45a38ff93926d56af7a5d3c9f83"],["/page/4/index.html","d24b661c458c01ddda6cc3208313644b"],["/page/5/index.html","18d41c39468e60fc4da19ed400badf46"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","fc17978c8de8229d2351760974d88f54"],["/zh-cn/archives/2015/03/index.html","29da3b43821417ee2c22e0fb748e9fa1"],["/zh-cn/archives/2015/04/index.html","6de142a25a680c1b61567dd764735ea4"],["/zh-cn/archives/2015/05/index.html","9e8e8c7697fa425dd46979f1673830be"],["/zh-cn/archives/2015/09/index.html","b1f15dca52c6abd12592640f02a50e80"],["/zh-cn/archives/2015/12/index.html","50ed8b053bca58dc0e50cf3e09342080"],["/zh-cn/archives/2015/index.html","813587dbafec36f20be3280453d7d767"],["/zh-cn/archives/2015/page/2/index.html","ece259ce3b07d9b12f03707b761bc57c"],["/zh-cn/archives/2015/page/3/index.html","c2845838b9675bdf1d01adf55bfa59d0"],["/zh-cn/archives/2016/01/index.html","5da46c4bebf0bd760f367da5c4941250"],["/zh-cn/archives/2016/03/index.html","7e41af48e72dcc026a642b0f29efc95a"],["/zh-cn/archives/2016/04/index.html","49ea7897a368fee4c4459befb6c374a5"],["/zh-cn/archives/2016/06/index.html","6ac9c64e4993d18e3317219784744244"],["/zh-cn/archives/2016/09/index.html","7f7c780b608d564a937b3447c69dc5be"],["/zh-cn/archives/2016/10/index.html","c3acc039968ea5db494e223914bfa75b"],["/zh-cn/archives/2016/12/index.html","753a75449b3bd6e8dd06d89ba38d4882"],["/zh-cn/archives/2016/index.html","d69b44a77a065ee8d07f9dbd59b1b25b"],["/zh-cn/archives/2016/page/2/index.html","199db9c4689bbae25d86393a157e2847"],["/zh-cn/archives/2017/01/index.html","43ca2256e1b70c28e0b03d859c793d47"],["/zh-cn/archives/2017/04/index.html","7b309f1ad9b5067d1bfcb4322e9b98f8"],["/zh-cn/archives/2017/06/index.html","6cc8a3d0a4cfa6602a0c5e88e94ec869"],["/zh-cn/archives/2017/08/index.html","69b3305955147fbcaf33185c46145546"],["/zh-cn/archives/2017/09/index.html","7bae57b2df9e8f3ab740033defab1d57"],["/zh-cn/archives/2017/index.html","e311c9778e4e8ab8bdbf10d5a51e8fba"],["/zh-cn/archives/index.html","d204c1dde2c10f931e0d2e7bb00bb373"],["/zh-cn/archives/page/2/index.html","bf4da9e99e85d820adfdf53921375650"],["/zh-cn/archives/page/3/index.html","795d3b060a0647b73f1903623db50bc3"],["/zh-cn/archives/page/4/index.html","6ba56568c33dcd0bc2dfbd39234391b8"],["/zh-cn/archives/page/5/index.html","6dc68e01e2f4a394cbc7b6a846c4be8b"],["/zh-cn/categories/ACG/Music/index.html","e04adb024b4922d56428f07939f77b1b"],["/zh-cn/categories/ACG/Music/self-copy/index.html","ccda00e635aad7515240cfa1c48a6aeb"],["/zh-cn/categories/ACG/Travel/index.html","4ee6aeef1dcd48e4bc059ea5b26806ff"],["/zh-cn/categories/ACG/figures/index.html","d5703ffb91b1ee754daefb20d9c0ab0f"],["/zh-cn/categories/ACG/index.html","c2bae94d2083d81d207b91ab834995d3"],["/zh-cn/categories/dev/Front-End-Dev/index.html","86e42e3c7b214676c3db41e792c15a36"],["/zh-cn/categories/dev/HTML-CSS/index.html","2caa9ac33dde5e3ddc76f3bc6534134f"],["/zh-cn/categories/dev/android/index.html","d233362d481f4aea1fcde6e5ca33feae"],["/zh-cn/categories/dev/cpp/index.html","5708716e8179ec51a475fd8903a73a4b"],["/zh-cn/categories/dev/git/index.html","4a1498ec5ded8ef7de11b18a2323b3a9"],["/zh-cn/categories/dev/index.html","9f4c92f94b4a39bf50e46fe0f1c0078e"],["/zh-cn/categories/dev/java/index.html","b11ccfa02d82055e58b5fbd4d329da09"],["/zh-cn/categories/dev/page/2/index.html","f5db62fc99450fa07f68e447114b8b3e"],["/zh-cn/categories/maintaince/blog-setup/index.html","4a961441ecb9e135a75ddf749ed5e6b4"],["/zh-cn/categories/maintaince/index.html","ab3e9f63d652d66177ac6b8fa1353da0"],["/zh-cn/categories/maintaince/macbook/index.html","779a1c2cf219b6efbcabea080a64915d"],["/zh-cn/categories/maintaince/router-config/index.html","24b5134c085a36b3b4308fe83f5ddb79"],["/zh-cn/categories/notes/index.html","398294e5ea346e3f58daae683f744e5d"],["/zh-cn/categories/tricks/android/index.html","299bde0d4126621e1faf46892bfe6279"],["/zh-cn/categories/tricks/index.html","3d19ced6dab8045eab056b0b6cf99ac1"],["/zh-cn/categories/uncategorized/index.html","ed0eceeab5eb12054195ee10e4deb1c1"],["/zh-cn/categories/works/Front-End-Dev/index.html","b98f652097f7dc58e00badfbac32aff1"],["/zh-cn/categories/works/csharp-wpf/index.html","f3b7caa940d780ff449ebd2b5ce11215"],["/zh-cn/categories/works/index.html","eaf18b54d287699f221b46be857c2a52"],["/zh-cn/index.html","d2fb93a8a879d8a21338830f322f066b"],["/zh-cn/page/2/index.html","1fd55b755b8a2904e88d54e98acced32"],["/zh-cn/page/3/index.html","c25ffa92092229f9517f240c558de41e"],["/zh-cn/page/4/index.html","2d0d6bd5c8c7b5aae4cadf1dce0fe7e1"],["/zh-cn/page/5/index.html","05aef186fb4ae37e1a1e7f494b30709a"]];
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
