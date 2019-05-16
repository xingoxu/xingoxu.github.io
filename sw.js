/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","249df1a200e3815dd1c479245a6e0f70"],["/2015/03/android-hostname-change/index.html","c6ae9349010dd7b3d274073214ecc958"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","87f344917911b208fe10f8cec906a334"],["/2015/04/android-chrome-issues-with-webpage/index.html","3f0feaee434342ca097195cca82fcb11"],["/2015/04/cpp-study-log/index.html","d25993b5ab8e13908c7d4ea2bb727c69"],["/2015/04/github-pages-ssl/index.html","30213cbb3191ae7fa0484dc7477d19bf"],["/2015/04/hello-world/index.html","9a8ebfb64612e38f413c544ab0f9d4e8"],["/2015/04/hexo-setup-log/index.html","c527feea978be352aef2886a0845e196"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","92634f08d960b7539fc2817553a5e54a"],["/2015/05/cpp-inherit/index.html","a9adf64ef6a91a279f30f296ad119437"],["/2015/05/cpp-polymorphism/index.html","3967e4c4c2e419a31c300038b261c986"],["/2015/09/android-root-ota/index.html","fe495a9af2184282cf9bf98fa50cdaa1"],["/2015/09/java-learningNotes-1/index.html","7a1a0fc9c9476cb1d543bd18f363b668"],["/2015/09/newblog-newlife-2015/index.html","30848133f0bb003307c816ed0f218395"],["/2015/09/router-rebuild-2015/index.html","d14efa5d4528bb46566750d1e8e3ab6a"],["/2015/12/2015-12-21/index.html","3985571658301f8f8053c475161aaf36"],["/2015/12/PixInTouch/index.html","846351dbc8bd1a31b7d71b046a7d2d33"],["/2015/12/git-study-1/index.html","c44af0a238b7762bb984999e3d9add2f"],["/2015/12/hexo-backup-and-migrate/index.html","f37d69d9450d29815ebd9c6bd89124dd"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","f016ee1362cfb99fd4127e08311687bb"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","2114611d5a614fa6abc90119f7c955a5"],["/2015/12/router-reconfig-2015/index.html","bac9e6424a255431a5ead59119321ab2"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","3c4d3838147f2d581b03ddd750263400"],["/2016/01/2016-stepping-further/index.html","a0c64330f65c88c705bb6c315b6ffc38"],["/2016/01/Android-Study-1-22/index.html","7e0bbb01e1134ccd7bb523448bac1b86"],["/2016/03/2016-03-20/index.html","a0e414407b93c294b425eeb604229ae5"],["/2016/03/GSC-535/index.html","75cfe3eb8640d82ee3fc61c303911e42"],["/2016/03/gulpjs-1/index.html","fe7bf9268fbaabad2f1ccf62bf35682a"],["/2016/03/hexo-theme-paper-white/index.html","8f2929fae44165135efc886f18a668f1"],["/2016/04/2016-04-19/index.html","21c3c96a120c323d6dcdd7b98b763488"],["/2016/06/2016-06-16/index.html","3f6330ae58ce2ff758cfef96d37c4da8"],["/2016/09/2016-09-18/index.html","7f2db95c442dc9946b64a5fc6319102d"],["/2016/10/2016-10-27/index.html","209431781a401edcd0d153a01ca30a92"],["/2016/12/config-switchresx-and-2khidpi/index.html","9cfa6bc5749e2d2a5ed2b63fa884da26"],["/2016/12/improve-duoshuo/index.html","42f5b2cde84f73e315207e48e03a139c"],["/2016/12/use-travis-ci-your-blog/index.html","39d3537f9baf7de87b00f6e234e12c8d"],["/2017/01/2017-iyahoi/index.html","b0a35454165b0ba3db0c1027c7219ec8"],["/2017/01/webpack-amd/index.html","7c872b8af5aafd51f0408c2557f25ce9"],["/2017/04/kotobukiya-syaoran/index.html","f445d87f9a73b2ee243426ae0846366c"],["/2017/04/macbook-and-surface/index.html","9c7db2bee291027d81f6ea41c241caef"],["/2017/04/uc-hyakuya-yuichiro/index.html","4b38035080a8f374a4fe4c9d22bcc8e1"],["/2017/06/noragami-seichijunrei/index.html","8af399ac4ad504dcd16132e41041da14"],["/2017/08/cross-compile-55-libev/index.html","262c9518762a7701a2561dcf53a7d8a9"],["/2017/08/explore-service-worker-working-lifetime/index.html","ea7bb3b231d361eaa12145ee4210feb6"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","65264652cce1fd881f530a98212cd7f5"],["/2017/09/record-user-login-status-methods/index.html","2b21047490251b4108eb24b0bf49f681"],["/2017/10/vue-typescript-early/index.html","7c8e97d8c28f644a3b70f667e744a876"],["/2018/04/2017-end/index.html","96ab1f85a7aba906732faeb7f7222107"],["/2018/04/twitter-account-activity-api/index.html","95b9319ca08ab343c01e9a1291ee9fc5"],["/2018/05/buddy-complex-seichijunrei/index.html","341843aead44b551c7a819387ce3e1fc"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","038c0e306b797184bdce401b7814eb26"],["/404.html","66a23c10a6260568b2ec126334395340"],["/about/index.html","ae1e9fcc5024033418074b35f76889f5"],["/archives/2015/03/index.html","fcbc780f5ff1b7280db27bf7183aea62"],["/archives/2015/04/index.html","1ee0bed293116d6ced4cdfafa1fc68eb"],["/archives/2015/05/index.html","f472a9879747e5f1207e4dc6ff21e39b"],["/archives/2015/09/index.html","4d44d5fb1ca5dd9218b3f467bfea2efa"],["/archives/2015/12/index.html","fb5df39ed6c9ff8a5e5722563a287bc4"],["/archives/2015/index.html","b5528cefdf05dfdbf4c80acf2119d58d"],["/archives/2015/page/2/index.html","6695b59661265c33b91c6336388561cf"],["/archives/2015/page/3/index.html","e876710920669d41201b975865b9c27b"],["/archives/2016/01/index.html","824965dcc3129db6e9997a7804c9b75c"],["/archives/2016/03/index.html","96ca51d1ca31fcf5528270d844556ae9"],["/archives/2016/04/index.html","a487bc269aac6c1048e7920d9b21378a"],["/archives/2016/06/index.html","3349cf8c86625840dba35f9b6052eb43"],["/archives/2016/09/index.html","c8b5cd1b31d54ab2425b2a4499f12f94"],["/archives/2016/10/index.html","c4f850990034525acf18f66dfe57e20c"],["/archives/2016/12/index.html","6109e2db7a4671d9fa27e5deb14e4cd6"],["/archives/2016/index.html","6ce52992e7a560728ce93b9d3b7d3992"],["/archives/2016/page/2/index.html","6f56e4063652adab61671d9d3ac3862c"],["/archives/2017/01/index.html","8dd9b73551704e367947e2a36d5f2cf3"],["/archives/2017/04/index.html","d849316ee133fbe4c5b83918b58956a4"],["/archives/2017/06/index.html","a9671d4182581bcb2734ce396d330309"],["/archives/2017/08/index.html","74a3c7c5127fe7d045f1b56c4d24206c"],["/archives/2017/09/index.html","1fe1003a4aa9a5af6dcbc6fd0039a35e"],["/archives/2017/10/index.html","37b11c5c6fc07b062bb1bc1b318cec36"],["/archives/2017/index.html","b975816b25f7db6f0542fd95bff985b0"],["/archives/2017/page/2/index.html","73c6d6f5fe9827d2c1d84c474f95ab4d"],["/archives/2018/04/index.html","4818bbbcc0c73e30fd55e1cb66405410"],["/archives/2018/05/index.html","76b86723f438eafd7cdec922d2c5baf3"],["/archives/2018/index.html","45b60235d7e7f77f5a19db6c6e62cd80"],["/archives/2019/05/index.html","a69e01e3e60e3c15238709b0372141f3"],["/archives/2019/index.html","a74972ee4880100a01c0c77a797e7f09"],["/archives/index.html","6a99dfc3619a71c5d36de22426b562b5"],["/archives/page/2/index.html","9d9f5420d21cb4e0305ff1532ce346de"],["/archives/page/3/index.html","2f3b24bd6c776d8d632b6da6656a5fad"],["/archives/page/4/index.html","a6eef833dac5f2978d33f5a140e785b4"],["/archives/page/5/index.html","dca823909dfdf6317781dd621bb9713b"],["/archives/page/6/index.html","ed93b07015164c6a57d67ca56edd9ede"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","efe282ca8ee840d236e271abddb3a02b"],["/categories/ACG/Music/self-copy/index.html","3aedcbee534e30386598f7944e510bb4"],["/categories/ACG/Travel/index.html","18a8bd0a29427c312dafbc2f8a2f37c1"],["/categories/ACG/figures/index.html","a7ad3543f97dc3c84b6acdaee1ccd18f"],["/categories/ACG/index.html","8d06c62df825c89ee2d510ef80af638c"],["/categories/dev/Front-End-Dev/index.html","aa06c4061e2a6f1e453869215f358706"],["/categories/dev/HTML-CSS/index.html","708b1bef5dac6bc2cfff4ee643b65a59"],["/categories/dev/android/index.html","5515599501b881d511d11108e86fc1fd"],["/categories/dev/cpp/index.html","aa563bc0ca8724659a3e9f9642b24788"],["/categories/dev/git/index.html","808447ab128d33101fa63348ec0c7d12"],["/categories/dev/index.html","c2f3262c652e9bc7ca72febaf06087a9"],["/categories/dev/java/index.html","3bfc6cf332a82abaffb37f0800df599f"],["/categories/dev/page/2/index.html","fe0845a2cc5411a46ec2b1e494d619e6"],["/categories/maintaince/blog-setup/index.html","07b412d862ce5fc3e6984f6024b99f43"],["/categories/maintaince/index.html","43a4ede1d1e5b87beee68631fc53ad98"],["/categories/maintaince/macbook/index.html","3c35a8ee15b604ca0b8b4512f34cbd98"],["/categories/maintaince/router-config/index.html","f2ea461a9c0a0aa164fea93797bd6e8e"],["/categories/notes/index.html","e237c5dde0dd629d6f6afe3d304c7c9b"],["/categories/tricks/android/index.html","0d162e914f3ff8cdd73de563bbc7867f"],["/categories/tricks/index.html","d3d7a65f9a5e9c9bc2faa263bd199d47"],["/categories/uncategorized/index.html","4024a557322688a724eb6f3517a83aac"],["/categories/works/Front-End-Dev/index.html","707844fce5d3822a354aee585a2f0a32"],["/categories/works/csharp-wpf/index.html","5fdd937f71a5c6e75816d05cc4c99bba"],["/categories/works/index.html","ce137e02763ce714f469f71af56b0b84"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","5724806fceee9f9dcf35ec2a7903f405"],["/ja/2015/03/WNDR4300-setup-log/index.html","0215153f0a40f39b437401818c1959a3"],["/ja/2015/03/android-hostname-change/index.html","3051ca6789b034d67706513d5acb9826"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","cac7c03859dc95c6a7a032d59600ca20"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","daa37735f8eb4bc23c4caa542146ea61"],["/ja/2015/04/cpp-study-log/index.html","73d2d138dadc48454c4254fcc820b597"],["/ja/2015/04/github-pages-ssl/index.html","be6d58f7ff7abd5c6ced97bbe9b522a7"],["/ja/2015/04/hello-world/index.html","a9b3d965ab93548fde1124b924e9eed5"],["/ja/2015/04/hexo-setup-log/index.html","f8c7d4b9054bb1a37d6bfee1034e3f0f"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","c88e2c1399f1527cf4c5ed6f708aa57f"],["/ja/2015/05/cpp-inherit/index.html","168ad45c31052585cae7d8dd6551db3b"],["/ja/2015/05/cpp-polymorphism/index.html","998e19b4e14001f36650edac81677707"],["/ja/2015/09/android-root-ota/index.html","a3b2971c6275da83519376db8b62ae6f"],["/ja/2015/09/java-learningNotes-1/index.html","7acd658496c296b41d6ae5b5f9e15a11"],["/ja/2015/09/newblog-newlife-2015/index.html","c72a3860a13dfaf1fbbfe6ac2f4c25a2"],["/ja/2015/09/router-rebuild-2015/index.html","f831d89bae282d154e588644b45d9e9a"],["/ja/2015/12/2015-12-21/index.html","a14f9e77a5e397c6788c980ffbecef9d"],["/ja/2015/12/PixInTouch/index.html","becc79e901aa54bb177e721e0d184f68"],["/ja/2015/12/git-study-1/index.html","51efdf027cacbf58fb8e98c94cc10e80"],["/ja/2015/12/hexo-backup-and-migrate/index.html","0221c2b7b6535387af3175822099e7c6"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","4379341372d7fd5e5c5ae0e300add65d"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","b47950aea94d26a37c6533068351184a"],["/ja/2015/12/router-reconfig-2015/index.html","6b34f2cab2f4f4a82fd3d8291ba96620"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","e06b30544a2230f421d9a81f333e9215"],["/ja/2016/01/2016-stepping-further/index.html","dfe02082906ff0374ac8a6c04421b107"],["/ja/2016/01/Android-Study-1-22/index.html","21f0e9e90bd68154e4757ed3c689aeaf"],["/ja/2016/03/2016-03-20/index.html","c457c89cab0bdb9149cb6443844dcbde"],["/ja/2016/03/GSC-535/index.html","f4932a69092a30f15cb88515e35b64b4"],["/ja/2016/03/gulpjs-1/index.html","001df8501802626fccfc95f1c6f72309"],["/ja/2016/03/hexo-theme-paper-white/index.html","40e3b134983939c7abbdd271f1ad5086"],["/ja/2016/04/2016-04-19/index.html","c70c2d90e8a9aac0ebec00744c0a9f7e"],["/ja/2016/06/2016-06-16/index.html","266282df484beddfa8a9ab0601e7a903"],["/ja/2016/09/2016-09-18/index.html","99f45bc87494b2da0aaa8365e59619da"],["/ja/2016/10/2016-10-27/index.html","ed740a22729527609d1e7917b7372457"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","c192d8f51d637d406f322a3b0759e4e0"],["/ja/2016/12/improve-duoshuo/index.html","47f5590d3f3cf3ae48d9c75e34d1074c"],["/ja/2016/12/use-travis-ci-your-blog/index.html","9a320b6917fb2e119d9ac2524b15c5c0"],["/ja/2017/01/2017-iyahoi/index.html","a06374cd54af4365cc3be93b214d9c3a"],["/ja/2017/01/webpack-amd/index.html","b6d56283d8bd3b0438711c13f001623e"],["/ja/2017/04/kotobukiya-syaoran/index.html","9ef9a39e3bfdd94f5a1920a3ddf23444"],["/ja/2017/04/macbook-and-surface/index.html","cbb796858a5e208fc340400b0a46ad8c"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","4db5e7e0bf660c75f3f0555d0f304153"],["/ja/2017/06/noragami-seichijunrei/index.html","4ab973c3f01126d7292f83d26cc3811e"],["/ja/2017/08/cross-compile-55-libev/index.html","4cff35e23f15126007ad2a1f6b55f654"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","20bb8f21638adcffc84540c6187f1eaa"],["/ja/2017/08/hello-jp-world/index.html","440c2ebeaba06913959c05140c2651f6"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","750a1bced4fc9a2e45246533525d3a83"],["/ja/2017/09/record-user-login-status-methods/index.html","0720b60de8642f5c8b2d75cd7d73af63"],["/ja/2017/10/vue-typescript-early/index.html","2cc25bd0a59da6e98baa8a9cd5a2c68d"],["/ja/2018/04/2017-end/index.html","a21643ecbe2ddaf0d4a7298d0c521349"],["/ja/2018/04/twitter-account-activity-api/index.html","b93670c5dcc6357c306971e5aedd3b55"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","8e0fb34f491a4b43c3bf5d606d0de85d"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","14048b309a7f1657628dbb9bd02cf47c"],["/ja/404.html","894bc04758c9f9a4d5c14361fa7bc915"],["/ja/about/index.html","a1a7c263a9308b376e0b7669d4520e63"],["/ja/archives/2017/08/index.html","562753598cbf8981f4d651ec210ed15d"],["/ja/archives/2017/09/index.html","b675aee628d30a94edd49e15dcfad024"],["/ja/archives/2017/10/index.html","3e44bd2a7b32047590b889e221ec5b25"],["/ja/archives/2017/index.html","4a4a0cb456c287f0b16e88591f7553b2"],["/ja/archives/2018/04/index.html","6b2b5192b38d4a4b465c4558c575d949"],["/ja/archives/2018/05/index.html","fa18e4cc73932c166684ec18914507f5"],["/ja/archives/2018/index.html","b58230e2d13f310a7ca2bbf1e30536f3"],["/ja/archives/2019/05/index.html","6ec97dccd11d8165309e1b42060c903a"],["/ja/archives/2019/index.html","6d89d01b8818479a9824d7c6640c4741"],["/ja/archives/index.html","1be1fa64683ca190340bf855b9efe265"],["/ja/categories/ACG/Travel/index.html","49c1571113dd0fe006b8d03ce9f34384"],["/ja/categories/ACG/index.html","269cb7d1b69bd1dceb4ff1ac085f6d33"],["/ja/categories/dev/Front-End-Dev/index.html","2ec8587024e7a7631f4888461b39261a"],["/ja/categories/dev/index.html","6e0e753196e1ffec73a519a3f5f3acb6"],["/ja/categories/uncategorized/index.html","a046e102f731153db073e517f7b40b22"],["/ja/index.html","4661807704d01b74039c3686f19e2533"],["/ja/nihongo-test-page/index.html","290c6359402f442165493926b6125a5f"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","a9f8a3ca3302f66766e9e621ea1933e2"],["/page/2/index.html","5b5b2aa34691bd9eab36d356af608971"],["/page/3/index.html","4ab01ee577561b5b3a0f7e88e391d3b2"],["/page/4/index.html","d8035b8d09655d10f993c9402f84d08d"],["/page/5/index.html","7b67fddd25962aedb1ab650afe62bf4e"],["/page/6/index.html","540c57851fbc48bfa106fa0934b4320e"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","b5d936f5b9e341880397420cc3f7a43f"],["/zh-cn/archives/2015/03/index.html","41a58441146bf42b84a7eedc0a18ff0e"],["/zh-cn/archives/2015/04/index.html","6fec0233540a13d56c3d1a32a71d62fd"],["/zh-cn/archives/2015/05/index.html","37d8c8c3214a2f6252aacc79ab119c06"],["/zh-cn/archives/2015/09/index.html","b745ec715b7b4eb5687a742fea4cc91d"],["/zh-cn/archives/2015/12/index.html","b1fd8a9e37ab80c3b8977e83f0c350a4"],["/zh-cn/archives/2015/index.html","7f6b2465409fe107f4b4ecc799a7c220"],["/zh-cn/archives/2015/page/2/index.html","47e2c26f10cc81585b90765b4f1078ae"],["/zh-cn/archives/2015/page/3/index.html","2cddfe5076e9cfc83aa58f06eeec2984"],["/zh-cn/archives/2016/01/index.html","ac7711a2fff9b1aff9e8e7b04ded14d0"],["/zh-cn/archives/2016/03/index.html","50d5bde8d89a4708952b73aefca0cc86"],["/zh-cn/archives/2016/04/index.html","22c29ecc7f8f5ba40714148495cab50f"],["/zh-cn/archives/2016/06/index.html","548a75ed806a3d6140b6262fc7a794c0"],["/zh-cn/archives/2016/09/index.html","5ff7b99aa66d6684976a9699d2c55343"],["/zh-cn/archives/2016/10/index.html","fdd2640e7c91cdecb1ecf537a23b5ffc"],["/zh-cn/archives/2016/12/index.html","5b3768d5a33f7a8a49436758a9be517c"],["/zh-cn/archives/2016/index.html","a582d97d3c503a82112b34e169c1cf04"],["/zh-cn/archives/2016/page/2/index.html","68cf86d59b3c5a046af8a18fdb75253d"],["/zh-cn/archives/2017/01/index.html","e207e297206ead85cb5159e10b2bbd8c"],["/zh-cn/archives/2017/04/index.html","ebfdd9138bd7f46a02b1bc6737c04e16"],["/zh-cn/archives/2017/06/index.html","94129252565d173cc6cf6cbabe0a05ed"],["/zh-cn/archives/2017/08/index.html","cdc082fc99f5528852fab9ad678cba19"],["/zh-cn/archives/2017/09/index.html","eef56dc6b48b07598e0593fa570a49e7"],["/zh-cn/archives/2017/10/index.html","b789e9aeae938839e5e2d0cc797923eb"],["/zh-cn/archives/2017/index.html","3b7bd9dff0c0cbb830a9708de0713db7"],["/zh-cn/archives/2017/page/2/index.html","95f17eb4c56b97169698e39a4d0942d8"],["/zh-cn/archives/2018/04/index.html","a64f8ed5d14cb9d52eb402aae4102b80"],["/zh-cn/archives/2018/05/index.html","fa61612d7c2c2b710c648ccf8490916f"],["/zh-cn/archives/2018/index.html","476fe9335b546493e9192e8d2c4cfd83"],["/zh-cn/archives/2019/05/index.html","bfa2bacf5f13e8f1a4f9d2c909973fab"],["/zh-cn/archives/2019/index.html","6377b34159b4df4e3376a413f5efafb3"],["/zh-cn/archives/index.html","ab8df0d9e54dcefbe0b4d4ff24144ffc"],["/zh-cn/archives/page/2/index.html","bf8caff3f3cf8aedb68e3e8395c6c8e5"],["/zh-cn/archives/page/3/index.html","67e0a990579b053d403baec41d843369"],["/zh-cn/archives/page/4/index.html","cae1385896db74e1cc05eea0ca4bb52d"],["/zh-cn/archives/page/5/index.html","3ec09648e25f1a8b148ab8848a2f48c9"],["/zh-cn/archives/page/6/index.html","785a0ca45c20da06f5331ee59c385a3e"],["/zh-cn/categories/ACG/Music/index.html","b348ae194eb58e57b61e33bfddd9c782"],["/zh-cn/categories/ACG/Music/self-copy/index.html","b6b68d0f7ab98ec56b2f00360b1d09fc"],["/zh-cn/categories/ACG/Travel/index.html","18a57a3539b610b599487e651020e6f1"],["/zh-cn/categories/ACG/figures/index.html","dc5871201fbdaff93e6dee80b98084f4"],["/zh-cn/categories/ACG/index.html","a08991d7d24688c08aab22aec6a58f8b"],["/zh-cn/categories/dev/Front-End-Dev/index.html","2e35721673fb927f39f329e48f03d8b9"],["/zh-cn/categories/dev/HTML-CSS/index.html","f8b6972b98d4310d83b5fb7555f72ffd"],["/zh-cn/categories/dev/android/index.html","725682db81ef04cb62cecb3120526f86"],["/zh-cn/categories/dev/cpp/index.html","18a1e65514d3bfd79f6630771ad82db5"],["/zh-cn/categories/dev/git/index.html","1c1cd1617ee1a21fc897fe191b76febb"],["/zh-cn/categories/dev/index.html","9d4526ec54d47c9421e0cf666f97686d"],["/zh-cn/categories/dev/java/index.html","32f98a2ca13b87042cabbf269af0adaa"],["/zh-cn/categories/dev/page/2/index.html","7214139703253b4e09ba372dc1f8566c"],["/zh-cn/categories/maintaince/blog-setup/index.html","1f6918755fb16238d26251050325d458"],["/zh-cn/categories/maintaince/index.html","de502040bd12ffa2c11c20e9f80db058"],["/zh-cn/categories/maintaince/macbook/index.html","4347c6b836d6011b77e5ae81303336f7"],["/zh-cn/categories/maintaince/router-config/index.html","eb600193efd6817dcd2ab273d02cbbd9"],["/zh-cn/categories/notes/index.html","5a79c8915979291dac2b3cb827484189"],["/zh-cn/categories/tricks/android/index.html","08dd0f7097235501d5e949600049a015"],["/zh-cn/categories/tricks/index.html","b25eaebf1cd8dee4c2efa2ad05ab03ea"],["/zh-cn/categories/uncategorized/index.html","b4daf61e9b3fa60d0f4b3d1b12a41824"],["/zh-cn/categories/works/Front-End-Dev/index.html","a21e048a4638888cd3877282cc5ba3cc"],["/zh-cn/categories/works/csharp-wpf/index.html","671640f8461e2af8aea1606eec25b08f"],["/zh-cn/categories/works/index.html","eeb9e9155079ae7caae36c45ede0c03c"],["/zh-cn/index.html","e5013b56671645b9f1fa7b3104962c03"],["/zh-cn/page/2/index.html","56523ce178a19660035925e1b2899930"],["/zh-cn/page/3/index.html","35ddeafb938355149014393453c562c4"],["/zh-cn/page/4/index.html","63acdf8268b8a13ac2c93cf9a24f4c6b"],["/zh-cn/page/5/index.html","b6f270692b2230e5d01f06cc1328fcb0"],["/zh-cn/page/6/index.html","261e45b41b300c1d6c979e3b561ee729"]];
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
