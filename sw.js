/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","e169c3797d6119d6701326800880a301"],["/2015/03/android-hostname-change/index.html","f3c4c9c7aa4dda05b1b303693d225188"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","e6faa4cc2b096a3f7592f9af32274b44"],["/2015/04/android-chrome-issues-with-webpage/index.html","5806a2f1fdccfdf1808fd8f6c2e7eb72"],["/2015/04/cpp-study-log/index.html","e97c00c328d1188a85e56f823142fdd5"],["/2015/04/github-pages-ssl/index.html","368175db8f111298ed3f2e73507c5329"],["/2015/04/hello-world/index.html","a7f27ae57c6456e48ece2b50c6aedd10"],["/2015/04/hexo-setup-log/index.html","b0ee88f678dd895fe517d20e71c24f93"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","8a726292db8abe88688ab7e1c3a715ec"],["/2015/05/cpp-inherit/index.html","f0b385fd32be53d88c49b37aa199e9af"],["/2015/05/cpp-polymorphism/index.html","f24107da9ddfe38b54872cdf35f9ffb5"],["/2015/09/android-root-ota/index.html","822e58a06742eb264c5b86a687e0216d"],["/2015/09/java-learningNotes-1/index.html","974269262daa06f142d83a21cdf172f1"],["/2015/09/newblog-newlife-2015/index.html","0f1a8b41189b1635d4cbdac29763e24d"],["/2015/09/router-rebuild-2015/index.html","786f9d165278884e585f1aee3213b59c"],["/2015/12/2015-12-21/index.html","4d39b31a97d06c9feefcb104743064d0"],["/2015/12/PixInTouch/index.html","8fc4b739fe814e690e15d1b13214e816"],["/2015/12/git-study-1/index.html","aaaa071bc6614433e6451e0ce618245c"],["/2015/12/hexo-backup-and-migrate/index.html","5edcd74f354b14d7acbd4be17d3db1e3"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","024b02d25c9e70724f6cd4694b4b0c00"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","4de0af58b09a92408281dcb4d4679dba"],["/2015/12/router-reconfig-2015/index.html","cefcfa8829b4f6a1dd31f3eb1ab91985"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","bad2c34acab952309fccb44da2837ce4"],["/2016/01/2016-stepping-further/index.html","1b844c82a8a556e0ad18c75cee2f147d"],["/2016/01/Android-Study-1-22/index.html","78eaa53f3100431a402fb520e81c1b0d"],["/2016/03/2016-03-20/index.html","b391eed4900acdbe06fc553fd1673ac0"],["/2016/03/GSC-535/index.html","97f0bb69c13315dd2014d7cbfcd5a103"],["/2016/03/gulpjs-1/index.html","1dc9930c3b29dc685c1866f93916587e"],["/2016/03/hexo-theme-paper-white/index.html","7e05a65b2574d358eeb8495512110407"],["/2016/04/2016-04-19/index.html","a260107d40872c4ab201cae8c5cb7443"],["/2016/06/2016-06-16/index.html","2179638bf77a191e89ce0ef0bbfbcba0"],["/2016/09/2016-09-18/index.html","5d64f792c3a53a505faa9f48244fd4f7"],["/2016/10/2016-10-27/index.html","3694c23e8ad54174a19a41b983cb13d5"],["/2016/12/config-switchresx-and-2khidpi/index.html","13cccc4da8f46ca3a75070edc48a916d"],["/2016/12/improve-duoshuo/index.html","ccfeeb7f392170452c162ec0d02a19a7"],["/2016/12/use-travis-ci-your-blog/index.html","2536f4ab4fca2d2d21bf22797173f087"],["/2017/01/2017-iyahoi/index.html","95ba56ccb237f3a9d1d1caafa1e05d1f"],["/2017/01/webpack-amd/index.html","b402a69db1de378dd1a864728d69f838"],["/2017/04/kotobukiya-syaoran/index.html","0d23bc65f77d4a567e85b39c4e03d6a5"],["/2017/04/macbook-and-surface/index.html","8eacab3c369c45f50381ee28d2967cfd"],["/2017/04/uc-hyakuya-yuichiro/index.html","9ded857eaba238681fd9d082125d61ef"],["/2017/06/noragami-seichijunrei/index.html","3c37e12ac5935e7db7d1c477be0e1321"],["/2017/08/cross-compile-55-libev/index.html","c38add0f4ba5703c6171d0192929c165"],["/2017/08/explore-service-worker-working-lifetime/index.html","e6663f35efc499ff21bfc78d622cf1c9"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","a064d05978c5bc6b364a74c1bd00cbfa"],["/2017/09/record-user-login-status-methods/index.html","9e0b9e7103f49bec07f8474690a5522d"],["/2017/10/vue-typescript-early/index.html","b48024de86cb3b115108c9749e266dba"],["/2018/04/2017-end/index.html","3fdf1d3c5ea323b19c5a461e93f85576"],["/2018/04/twitter-account-activity-api/index.html","85ddccc1282c7045a159d1c721df22fa"],["/2018/05/buddy-complex-seichijunrei/index.html","249db0f2f04db1a8ab5112c13118bde6"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","1756af7a0b643668841cc8389f2fddf1"],["/2019/05/2019-05-17-google-io-tech/index.html","2397f2a8276a9f698cbaded77a373c44"],["/404.html","ca9d74bcc475c64c8300209e168c7480"],["/about/index.html","5530a428265cfdf7dddd8f52866de21f"],["/archives/2015/03/index.html","14bddb3fe47eab21abc636c8d94d54a0"],["/archives/2015/04/index.html","edef3a7dc9f60f8585c8c019e504e762"],["/archives/2015/05/index.html","e1ede4a78c9877030d0a31faee250220"],["/archives/2015/09/index.html","86fc87d29c686073cf3e8321c4993f94"],["/archives/2015/12/index.html","0f17a51924d64706946255064b3d72ae"],["/archives/2015/index.html","68c6f6b5dd8cc0b6c870b2a8592c7b6e"],["/archives/2015/page/2/index.html","110b2eed6472ba5a814b145c746c0a7c"],["/archives/2015/page/3/index.html","f16275c455e5f9831c7fee3c3d4d04af"],["/archives/2016/01/index.html","f97c830180092f79bff9d985619ecdd4"],["/archives/2016/03/index.html","72bab3fa77ee20ab9efff1aba4277336"],["/archives/2016/04/index.html","914b07e11f08a0b2f14f543e9c4bb78a"],["/archives/2016/06/index.html","fa62ecdfc04292175325e1fdf5404ae5"],["/archives/2016/09/index.html","921c3b60e025c78722a3564687de7714"],["/archives/2016/10/index.html","b7b16f76f760d4de34bc00e7f6393640"],["/archives/2016/12/index.html","317c0b0751911e7cbb21f2b6421b016f"],["/archives/2016/index.html","ddcf11b5511c6effd68e8fa0f9d7ae5a"],["/archives/2016/page/2/index.html","e47b947d515af84496fd97759606f0ed"],["/archives/2017/01/index.html","b96130cfc8ac3e07cd3001a99efb5115"],["/archives/2017/04/index.html","db1915288f8a7f447636dd0d9593a3e6"],["/archives/2017/06/index.html","f0d90ed31770f000a0f333aa6831cd4d"],["/archives/2017/08/index.html","baf179fa90c72759efd81715c21b9515"],["/archives/2017/09/index.html","8afef879d99ad41aab8dc89a9ac0d10d"],["/archives/2017/10/index.html","349aec3456b8b8858d0aa2f759b5721f"],["/archives/2017/index.html","3ec86dfe957d9e034754e9b1b23a5744"],["/archives/2017/page/2/index.html","7f5b394a6b0b942fef6cb7f0d7cde773"],["/archives/2018/04/index.html","c87f2dcfd897b3f685eba367299f24ae"],["/archives/2018/05/index.html","5e95f12bebb373dcd289d0842fccb3bf"],["/archives/2018/index.html","73fb9714a65ff88082dfc5089fb5428f"],["/archives/2019/05/index.html","94cdb589ea964f8d5f5e7aef7a64b43a"],["/archives/2019/index.html","8ea73b2e5bde24cfa6f1d27ecfcfdfa3"],["/archives/index.html","574bc3c69524452326acf7f5c4ada84a"],["/archives/page/2/index.html","05854df87e055cb4b4044230b1380b5d"],["/archives/page/3/index.html","ca67ec432bddf3a654c16ed65e49b4fc"],["/archives/page/4/index.html","d409c05e828eeb62ca058917958a75f3"],["/archives/page/5/index.html","6ff6e35707658a2294a93be8fad121ab"],["/archives/page/6/index.html","9bb0272eec4e1c82814c50679f170e8b"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","df284972d541224e9d4492c0d82ea1b8"],["/categories/ACG/Music/self-copy/index.html","7f9a91892486cb3566b1d272b009d64e"],["/categories/ACG/Travel/index.html","ecf5b39749a090ecf2fb79b2348abdcc"],["/categories/ACG/figures/index.html","d71ad9937799ad88c7b9ff929a50ec19"],["/categories/ACG/index.html","75d61eef863ab7d869fe800adc99277b"],["/categories/dev/Front-End-Dev/index.html","d5d6401181f73a639f9163a8a569a9c6"],["/categories/dev/HTML-CSS/index.html","c1ac13356abd24856a6143c23d244e5a"],["/categories/dev/android/index.html","084a5784d68c35fa03ef9a876daa98cc"],["/categories/dev/cpp/index.html","c9b8799041ddc27ae4317073a06c35c7"],["/categories/dev/git/index.html","1d75381980c047d9e080273198690ebe"],["/categories/dev/index.html","30b7becb812f1f72acf8b30d04a90349"],["/categories/dev/java/index.html","67b67440c655259c203885cce702a3f8"],["/categories/dev/page/2/index.html","5c440bf0de0d16f65392effe11bf07c2"],["/categories/maintaince/blog-setup/index.html","7ab7874e6029d6db4fd76a80a7a33bb5"],["/categories/maintaince/index.html","4008cfc595af505b9ec81c0e57bfbf35"],["/categories/maintaince/macbook/index.html","dda11ac01c7df592c80305368a5b947d"],["/categories/maintaince/router-config/index.html","2fa26c9a457798368889b417c1aef4e0"],["/categories/notes/index.html","f58062d69724cde73ccb0341ec1a21cb"],["/categories/tricks/android/index.html","1959a3704a82c453663a0cb57b756cce"],["/categories/tricks/index.html","b08160e2c72e171331eeb2bb16c4e9f5"],["/categories/uncategorized/index.html","44fe99ecdfac4ff216fc17f3f97284e1"],["/categories/works/Front-End-Dev/index.html","0bb7c7742a5501cd80526e911ba562f7"],["/categories/works/csharp-wpf/index.html","2f15aabd2e2d0460f420440411ee2189"],["/categories/works/index.html","a22eb4bab23a83728075b41869f44f04"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","ebc1d2e72fcb9375b7224153ec015e43"],["/ja/2015/03/WNDR4300-setup-log/index.html","beb346ed8710321a1f3ff09916545617"],["/ja/2015/03/android-hostname-change/index.html","dbc39781fa8a4abd2b0495a2c750494e"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","bda71c49888eaf50ed6a49d8002398ca"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","ce810c8d9c187d9b58e7ea80bfac1c1f"],["/ja/2015/04/cpp-study-log/index.html","db00abda2a58aa40c768236278602eed"],["/ja/2015/04/github-pages-ssl/index.html","03333a20aa560e6ce4795d5a9c1599ff"],["/ja/2015/04/hello-world/index.html","84472aabf443e39a6cf9548e26d8d7e3"],["/ja/2015/04/hexo-setup-log/index.html","233d58ec9f87e3f692d76673705bcf35"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","ffefd412d9a04b77fb410661754415ef"],["/ja/2015/05/cpp-inherit/index.html","2adb70e6a9fa39bc304f39ba00065718"],["/ja/2015/05/cpp-polymorphism/index.html","b360914bff74ea34d2f07e0d3b750699"],["/ja/2015/09/android-root-ota/index.html","86f6b2833710ffd70af4b8f16695867b"],["/ja/2015/09/java-learningNotes-1/index.html","eb735d7bc4b5f277baf3dbdf0826d20d"],["/ja/2015/09/newblog-newlife-2015/index.html","266907b335748f84b8568e92e153df14"],["/ja/2015/09/router-rebuild-2015/index.html","b047362691934b7a04a77873a69ac1fd"],["/ja/2015/12/2015-12-21/index.html","a5fa38275310a710ad2cd5fd81ba38ff"],["/ja/2015/12/PixInTouch/index.html","becd02880a1d32e6b85b5cf32e365072"],["/ja/2015/12/git-study-1/index.html","0b942892639c20ecf8d54f09cfba26c4"],["/ja/2015/12/hexo-backup-and-migrate/index.html","96a07aa9415e4b116be53aef0e212e3f"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","5f8ba9d04837ff2c98bfdcce3bbf7e42"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","15bb93f57349019672dc9e48e7c8cf50"],["/ja/2015/12/router-reconfig-2015/index.html","1882c370501e926eeb1a6fa141a766e4"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","6cd18a2db473b55a9732b90d66157879"],["/ja/2016/01/2016-stepping-further/index.html","7d95a8d233b895a8889bd951bd68c52d"],["/ja/2016/01/Android-Study-1-22/index.html","1eb843ccc192232dd9ac7701b2fb19f1"],["/ja/2016/03/2016-03-20/index.html","e6bfab45f124692dbfc81ff27cb6f052"],["/ja/2016/03/GSC-535/index.html","25633560571d2d1f7831064131f3985d"],["/ja/2016/03/gulpjs-1/index.html","1db96d4930666c7246583319a4f76443"],["/ja/2016/03/hexo-theme-paper-white/index.html","0aaee4fc3744ac37a1ec2709514346cb"],["/ja/2016/04/2016-04-19/index.html","8d77674bc54d92b775b4290239313821"],["/ja/2016/06/2016-06-16/index.html","2a0370993ed6fe609bf92ab91ad155c9"],["/ja/2016/09/2016-09-18/index.html","340cfe75bc71f1c9676509dffbaadf08"],["/ja/2016/10/2016-10-27/index.html","7828531775b315db2b3dfcef3ece52cf"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","c724717317178a6a606965b40247d451"],["/ja/2016/12/improve-duoshuo/index.html","58a19b270e8e34c53f01ed8fee2fd5ed"],["/ja/2016/12/use-travis-ci-your-blog/index.html","255b51d9bae1459403df6feeef86c156"],["/ja/2017/01/2017-iyahoi/index.html","cc18eb70881194930404c2e8d0f169d3"],["/ja/2017/01/webpack-amd/index.html","ee2243c3bdbcc803be5c2e010e3db7c8"],["/ja/2017/04/kotobukiya-syaoran/index.html","af41593cbadafdb578ff2bd9296f569b"],["/ja/2017/04/macbook-and-surface/index.html","951d31d3ab18ff54154496d67b2d3d8b"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","95d47fa0943abda59c4db45fd606c9b5"],["/ja/2017/06/noragami-seichijunrei/index.html","2c2480987b3077d8a0c392bd1da5e792"],["/ja/2017/08/cross-compile-55-libev/index.html","eb7a6d887f65ef50513a9300e56aaff8"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","b73f02558d03e7406ddff59e049c2599"],["/ja/2017/08/hello-jp-world/index.html","5deed7d0bc079fd809a04c7b49cbbb33"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","281598b5ead844cd14c7666a6d3d508f"],["/ja/2017/09/record-user-login-status-methods/index.html","cd38739b5d304e401261af5ad1156447"],["/ja/2017/10/vue-typescript-early/index.html","ee226f32806a7a496980e5ca6fe016bb"],["/ja/2018/04/2017-end/index.html","c98c7e3d73cad84ece68f7f32e1d518f"],["/ja/2018/04/twitter-account-activity-api/index.html","6274b40cf4124959469433d16b2e19f3"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","7dad1996fb6cf01248910fe9a635c838"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","e27d3f75aab86ac3d8bf241fdeb25bb5"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","a962f2e068cc36362579a6272235e73c"],["/ja/404.html","2dfc5d4e20d70c60fecf7e1e593cd675"],["/ja/about/index.html","8e43f4c5f5bad61c5547db4f4dd034fa"],["/ja/archives/2017/08/index.html","58bd04724ee72fdb8b11aaa597941050"],["/ja/archives/2017/09/index.html","0d7f9f63da040dd5ac3dc55d4c2e7382"],["/ja/archives/2017/10/index.html","f54d7928fa6ba5063e27e002883fcb32"],["/ja/archives/2017/index.html","f2d8100640c89eb21858cd973f520b82"],["/ja/archives/2018/04/index.html","ac08c274dd2aed1a3803656fde292865"],["/ja/archives/2018/05/index.html","0fe36da1af61f6746c0e9aef08511f24"],["/ja/archives/2018/index.html","4bf40c39cc2e74a448f2c6944ceabf72"],["/ja/archives/2019/05/index.html","9544f31d30c75b26af10326282ea9866"],["/ja/archives/2019/index.html","4bc40615b584a555940d18f70d6c7c8c"],["/ja/archives/index.html","2615a7754b12ad0742cde1deff7668d3"],["/ja/categories/ACG/Travel/index.html","5fc150a573cae2efa92fa2b28d3e999b"],["/ja/categories/ACG/index.html","4419234fe68c8559b7d4a92d6e84e631"],["/ja/categories/dev/Front-End-Dev/index.html","17bee90dcd4b2e0f306a544aba6e0c79"],["/ja/categories/dev/index.html","e6492427ed6df682bcdb38a21e19c7ca"],["/ja/categories/uncategorized/index.html","015b0975e17201bbb13235b1669e78a0"],["/ja/index.html","1a524487854a3dee774a09d05ed768ca"],["/ja/nihongo-test-page/index.html","2f65f1966c36caf914fb62d5e79aaad0"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","77ce915998e408e43953bde36c583039"],["/page/2/index.html","ecaa25dae8f6dc1d31069cf9f0b8ea9e"],["/page/3/index.html","47e63291266e17a2b5d5899d81c17b33"],["/page/4/index.html","cf2f93be8d1adbb22c37e83de2088e9b"],["/page/5/index.html","3285f75bb04b72f7ac6d1c38d7d80a4f"],["/page/6/index.html","4556dee3fe670a4cc8ed306344c34954"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","3548b92913e2168c5e0866806a7d0950"],["/zh-cn/archives/2015/03/index.html","c93504d61dfec174a94e1ea81a3598c3"],["/zh-cn/archives/2015/04/index.html","9158b8a31c316648eb63eb49199e438c"],["/zh-cn/archives/2015/05/index.html","fe6af8efe953d2e9a2e62ececee2099d"],["/zh-cn/archives/2015/09/index.html","5581e26d9f7b99b0803737c4e353b1ce"],["/zh-cn/archives/2015/12/index.html","642073d7028901a8f2dee636b34d5120"],["/zh-cn/archives/2015/index.html","cf05ea7efa22c7f3c600f27e5734d9d4"],["/zh-cn/archives/2015/page/2/index.html","1c0d77bfcc1088562a5c4ba18181c44e"],["/zh-cn/archives/2015/page/3/index.html","69d4a9cf5cb5ff8777ad6a6c13495c01"],["/zh-cn/archives/2016/01/index.html","d27b609f76d169d07a818258ebc78be1"],["/zh-cn/archives/2016/03/index.html","122b9140a78dbed8167181959c640d8c"],["/zh-cn/archives/2016/04/index.html","a8be654f775d215566920492842f44f7"],["/zh-cn/archives/2016/06/index.html","6603f7d2f8d21407143bbb79fbeab7a7"],["/zh-cn/archives/2016/09/index.html","a0a0bf344dbfac1322e7e589c27b0e07"],["/zh-cn/archives/2016/10/index.html","c3694ee888c17d8d64e3420aa7562c45"],["/zh-cn/archives/2016/12/index.html","5d9274be83d3aa99e12c4c0d3244b449"],["/zh-cn/archives/2016/index.html","5abea7ba233b7ce5b444b50873568f7d"],["/zh-cn/archives/2016/page/2/index.html","5da3f925da55f09bd38e09ee867159e8"],["/zh-cn/archives/2017/01/index.html","5e2197cf82b58f6111bf0d93d5d4fe8b"],["/zh-cn/archives/2017/04/index.html","e2ff5aa7294c07cc0651a85680beed54"],["/zh-cn/archives/2017/06/index.html","4e55f8066063fb6efe327fcf33c4ed37"],["/zh-cn/archives/2017/08/index.html","27146d4774c41cd9a1a51194b7e4a850"],["/zh-cn/archives/2017/09/index.html","ea5e5b2f129c8dc6823bedc712d0ff52"],["/zh-cn/archives/2017/10/index.html","da69d9a1eb9ca303cc19f66614434ecb"],["/zh-cn/archives/2017/index.html","f9e5bece3cf5d84ab6e2baae48f6817f"],["/zh-cn/archives/2017/page/2/index.html","230799692518d375f76d37f5b881047f"],["/zh-cn/archives/2018/04/index.html","08b19e416413e0b0decb2c64e12a2555"],["/zh-cn/archives/2018/05/index.html","e320e7e46da9541ebf1fcb4e9ac3e423"],["/zh-cn/archives/2018/index.html","0ded6d95fcef3182d952c31c9d9ea39b"],["/zh-cn/archives/2019/05/index.html","6cb5acee9bc0a0d564c10260cb7662cf"],["/zh-cn/archives/2019/index.html","224b343bf306d362d5d24cc6a2f2d7ff"],["/zh-cn/archives/index.html","089298ebee44705308b10df6d6e1f68c"],["/zh-cn/archives/page/2/index.html","4450f9c8087db326e1926b38632d0ebf"],["/zh-cn/archives/page/3/index.html","8f5d0f93aa2470a3262737057f6a5cd8"],["/zh-cn/archives/page/4/index.html","a872df3266ec32f20c44ece7d7614177"],["/zh-cn/archives/page/5/index.html","23d9396038534b9b1855dab29115052d"],["/zh-cn/archives/page/6/index.html","19c43692d60912beb6619fc82af165d6"],["/zh-cn/categories/ACG/Music/index.html","eae8149cad5b0d02a6842114a71f92a9"],["/zh-cn/categories/ACG/Music/self-copy/index.html","0e2735e91b1b2df2ef7ea367add3ea01"],["/zh-cn/categories/ACG/Travel/index.html","9da00018d8a3c0f53dfc0435fd521f51"],["/zh-cn/categories/ACG/figures/index.html","d13a30091e3ab2bfa8cde1a293ee39ca"],["/zh-cn/categories/ACG/index.html","a7cfa9a9a1ef4a3669db63c92d0e56d4"],["/zh-cn/categories/dev/Front-End-Dev/index.html","aef9d7756b9ccc8a6d87b4c330c1ff86"],["/zh-cn/categories/dev/HTML-CSS/index.html","9d4eadfd27b8c0d2f95b877290874c7a"],["/zh-cn/categories/dev/android/index.html","29b943fa599e9108d3ff3c3a087f6286"],["/zh-cn/categories/dev/cpp/index.html","d1af16985c17625567f91a81bef7370c"],["/zh-cn/categories/dev/git/index.html","94c042365873efd85547a9d363fb4132"],["/zh-cn/categories/dev/index.html","2ff1c46706684e8bd0225fcb3c9c9709"],["/zh-cn/categories/dev/java/index.html","e78115bc2c5c00514c1116d768784f51"],["/zh-cn/categories/dev/page/2/index.html","df2737ea56e0318a2734bfc4108386fd"],["/zh-cn/categories/maintaince/blog-setup/index.html","fa64d8767970214528c332edb9878cb5"],["/zh-cn/categories/maintaince/index.html","325faaed21164e1b44dc8471dfe35350"],["/zh-cn/categories/maintaince/macbook/index.html","e01876ad4454a70d8618661b292d3eb1"],["/zh-cn/categories/maintaince/router-config/index.html","78760b64509c6eb5996b8869ec8426e6"],["/zh-cn/categories/notes/index.html","a6795ffd78a73083171e142fa0c324d2"],["/zh-cn/categories/tricks/android/index.html","434041d4cd2da48fc8639d5a100d4571"],["/zh-cn/categories/tricks/index.html","8a0119f07d5bbd364aa9f95094d4213f"],["/zh-cn/categories/uncategorized/index.html","5e173a09c8c6c95523fa0a34a867c39c"],["/zh-cn/categories/works/Front-End-Dev/index.html","1bf9ab74bdcb6ff24545b31196a28ff9"],["/zh-cn/categories/works/csharp-wpf/index.html","b7058c109a2b8e57cb6d3bf5e80f23b7"],["/zh-cn/categories/works/index.html","c3d51e3df9af89d3562572c905c4cd97"],["/zh-cn/index.html","69dd7908a9bdda2571795fedcf7e8687"],["/zh-cn/page/2/index.html","9ed1d200200da63726f3ab4741ece88b"],["/zh-cn/page/3/index.html","77064b38767e33e2fe67a333207d628f"],["/zh-cn/page/4/index.html","2dca32b2c49114a3082593e79e9187a6"],["/zh-cn/page/5/index.html","b45ccd6c9274df0ba47d0e64a4bc5dcf"],["/zh-cn/page/6/index.html","1baac9efe6d18aeab1e999a12905a248"]];
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
