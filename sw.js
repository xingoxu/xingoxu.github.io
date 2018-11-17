/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","2aa42380c464ea286ebd63cd82e45411"],["/2015/03/android-hostname-change/index.html","db8891707ece5a3f7ddd1579fa82d485"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","839d1f1ca79d3743b7ae1de741eaac40"],["/2015/04/android-chrome-issues-with-webpage/index.html","68d83d30c01c3d573dc516e0a851f25c"],["/2015/04/cpp-study-log/index.html","955abf06dd4bcbaa65bb444dcc7458fe"],["/2015/04/github-pages-ssl/index.html","8a513ac4ff7754c0dd60b92106e190a0"],["/2015/04/hello-world/index.html","23a619e954b4960aed5d8af87af92dff"],["/2015/04/hexo-setup-log/index.html","a735f91dd2441b741f35aedc66aef796"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","ed26dae4280c43dbbfdc24ed02502db6"],["/2015/05/cpp-inherit/index.html","ae82987d0ff1ac50cf318ec88dfcfa13"],["/2015/05/cpp-polymorphism/index.html","4df16e641765c338c738bfcee0ef9fb1"],["/2015/09/android-root-ota/index.html","a2334aeea0fd45bf0f3549d0fc331712"],["/2015/09/java-learningNotes-1/index.html","d9367c94cd8ce9f6f20673a60ba75756"],["/2015/09/newblog-newlife-2015/index.html","16de58961632068096bfb51243b6b723"],["/2015/09/router-rebuild-2015/index.html","974ca507c9e05754e28c292a023b239b"],["/2015/12/2015-12-21/index.html","0814370e6ed4b969ac26cc27b5ea9b98"],["/2015/12/PixInTouch/index.html","490b49c802a8e828840d48f39197edcd"],["/2015/12/git-study-1/index.html","18abb39d8ee9d3fc4ac7d85895e14c11"],["/2015/12/hexo-backup-and-migrate/index.html","a9765c6297cb64d90cab153d6f22e060"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","633386f8af1844258de5c74a2ffab178"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","5e5d5b6b3ae8dc94a24894c7aeba2e9e"],["/2015/12/router-reconfig-2015/index.html","d92e5f602927725e5838a3bc8bd2d75e"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","73e37504fad212cab533de3bd57cf468"],["/2016/01/2016-stepping-further/index.html","eb81c8095cf0c7d63e6f433661644ad2"],["/2016/01/Android-Study-1-22/index.html","ef49a6fabe422ad04c727d1cb6f2a3ee"],["/2016/03/2016-03-20/index.html","95b7f35e370b6c9f5cada847dfb1b191"],["/2016/03/GSC-535/index.html","4ce3e5ff29e7fad156e862ce1bbb4b92"],["/2016/03/gulpjs-1/index.html","acbd6f5263abf87038c13f661c4986fb"],["/2016/03/hexo-theme-paper-white/index.html","14f91559aa10c6ff11bcea4a113663ae"],["/2016/04/2016-04-19/index.html","97d53daf9471c4957b4fe3f4b022b55d"],["/2016/06/2016-06-16/index.html","c451056b2dcecad813eb54a97132b011"],["/2016/09/2016-09-18/index.html","bd020685121d91cc2a954b8eb68d4b8a"],["/2016/10/2016-10-27/index.html","4feacf3e986d6b4a017d76e1f8811539"],["/2016/12/config-switchresx-and-2khidpi/index.html","52db240f3f41eb65f15440551ea4ede5"],["/2016/12/improve-duoshuo/index.html","620349f53a9bf38e7c95a9209d3f50e2"],["/2016/12/use-travis-ci-your-blog/index.html","bb715d5ece96701b5403915f496c228c"],["/2017/01/2017-iyahoi/index.html","73ae2980d5a0e5dae934713680cbb27e"],["/2017/01/webpack-amd/index.html","a87a10ba7487b4913d829200c2209a64"],["/2017/04/kotobukiya-syaoran/index.html","ffd540556f10b0b16f9e59f3e6e868ed"],["/2017/04/macbook-and-surface/index.html","5773ff4a4f06a96119c651d6ac6fcb6c"],["/2017/04/uc-hyakuya-yuichiro/index.html","266d0925e151ca51d1cbe63a29a13129"],["/2017/06/noragami-seichijunrei/index.html","9ac51832e656ca7b5aadd7e30e21af41"],["/2017/08/cross-compile-55-libev/index.html","9422f9bd2e96492399da620a548f3a96"],["/2017/08/explore-service-worker-working-lifetime/index.html","4f063586dcc5f5cec11014869e146735"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","351068d0bd294c605ab33af14bb05e8a"],["/2017/09/record-user-login-status-methods/index.html","6d832b7eaca8e01aee6650d56e69c592"],["/2017/10/vue-typescript-early/index.html","20654a3857d0d6ef7189262f861a7af0"],["/2018/04/2017-end/index.html","f471b4a8bd82de149f417634618ac8cf"],["/2018/04/twitter-account-activity-api/index.html","0aa7b806305cdcf51b554928114dd97c"],["/2018/05/buddy-complex-seichijunrei/index.html","2e478e5ed0a8e8be223f8e8becaf2a37"],["/404.html","27575e90fec80012bcd4431e87f67aa1"],["/about/index.html","9e3352514abfa3c34bc0eff3f2120103"],["/archives/2015/03/index.html","46bab3887fcb4d809c9274dc1929b035"],["/archives/2015/04/index.html","aa232e3a3525558a7c03d69e8fcaac1e"],["/archives/2015/05/index.html","27a090b06e3c4e606e8e9a63172d6ae6"],["/archives/2015/09/index.html","b3af48c79d6aeaae97fefd779132df07"],["/archives/2015/12/index.html","0064d5067196b14b3a37bc42b7878560"],["/archives/2015/index.html","7696a5bad3c793d28da3f825b3057838"],["/archives/2015/page/2/index.html","788c680670eb074b3dc961779bdea24f"],["/archives/2015/page/3/index.html","1954956168f9f7a95d7e9d6d4656756c"],["/archives/2016/01/index.html","288dbfac7ac8b94a6370db8977961c80"],["/archives/2016/03/index.html","8cd862f7ace2842bd94675cca0ca320b"],["/archives/2016/04/index.html","c59903b48b1ed8f408d4dece8413b1f3"],["/archives/2016/06/index.html","c1fdbfc37ece653caa02a84a98adc0d1"],["/archives/2016/09/index.html","5f6614664aab3f298b0a8fde6e6da8c5"],["/archives/2016/10/index.html","d692d9aede7ec4f60c6327a70c3af294"],["/archives/2016/12/index.html","6e87d986966f0ae960cd54eb200d7641"],["/archives/2016/index.html","fd72bbda69221618aa3c9506531cb70a"],["/archives/2016/page/2/index.html","48f19bb77d41e1b5ffeaac0395872a69"],["/archives/2017/01/index.html","904a6693523983254f809e669d1c4c3b"],["/archives/2017/04/index.html","9987e08375b08df1ff9fb997db893d54"],["/archives/2017/06/index.html","cd4286e0d26bb4e7e698a95ec49850d5"],["/archives/2017/08/index.html","d503e1d6f4fdf068b5d03232642340a0"],["/archives/2017/09/index.html","4ba20984f8e24c9492ba4197ec12651f"],["/archives/2017/10/index.html","277c2b6041fbbb6e2805d6473240f0d6"],["/archives/2017/index.html","acd9acad6fbc7bd2e7f6613a2da61d9f"],["/archives/2017/page/2/index.html","36a39fbdf100916eec4c1ae2fb48c6a1"],["/archives/2018/04/index.html","b0fb354cbfb3825d68b9ed9e7b1c7797"],["/archives/2018/05/index.html","d07d406c928f4cd381360ca26895817c"],["/archives/2018/index.html","55e48594cf206f8edd1751f4149d852d"],["/archives/index.html","621fc573cf3c164f8290abb805211aa3"],["/archives/page/2/index.html","1eaf7cb3b2b2f99128e346209fddf04b"],["/archives/page/3/index.html","a5e7fd09a60dd88e472786e615578b6c"],["/archives/page/4/index.html","b0956728c9e32a2dae0f7eb64df34ea2"],["/archives/page/5/index.html","26327ce8a2a1c8d44e9432e45a730d22"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","d7f21901ffa49916ec1671f4bc82518a"],["/categories/ACG/Music/self-copy/index.html","edacf5b51dc9e7128af1ba7e207fd1ba"],["/categories/ACG/Travel/index.html","db0e215f3d4e6c874c6eb74b5684444d"],["/categories/ACG/figures/index.html","c408ac282b28479c96808cd4c17ac5b3"],["/categories/ACG/index.html","678ef9d7f8d8ca92eab4f7b5ddd712ae"],["/categories/dev/Front-End-Dev/index.html","b95aa8d96d815db9162fbac0bcbfacca"],["/categories/dev/HTML-CSS/index.html","f53ad81fb240148d69b239f36047b8eb"],["/categories/dev/android/index.html","c20a061c5f7295220ba9fe899d37c65f"],["/categories/dev/cpp/index.html","48c92be7008e659291ba03953b66bea8"],["/categories/dev/git/index.html","0d99e8e50cb06e302d4c7e13700fa382"],["/categories/dev/index.html","0c2694b734c0c00c5c5c54b13bca5891"],["/categories/dev/java/index.html","645de48fd395fc3f0ae734f6922d1fce"],["/categories/dev/page/2/index.html","2c020ec015f9cbb5a50b48b8975e4158"],["/categories/maintaince/blog-setup/index.html","c29d1b3cbed0130a826fa4e1b3fb4855"],["/categories/maintaince/index.html","e6d6734216f016d9e3396656ffde1021"],["/categories/maintaince/macbook/index.html","3eb8dd12a1f942b2bad0674fba347299"],["/categories/maintaince/router-config/index.html","1e5978b147176ac1838bd9fc001af417"],["/categories/notes/index.html","b16298c5996bccd5d95a3820691e29f5"],["/categories/tricks/android/index.html","5804c2535f33d33592278aa50088ba97"],["/categories/tricks/index.html","a73a75943c9b90791323213176dcffd1"],["/categories/uncategorized/index.html","634715a96b581bbc29f1bae1581b7b36"],["/categories/works/Front-End-Dev/index.html","4facbd83c2079c4144dc199c72204c9f"],["/categories/works/csharp-wpf/index.html","774eb2386886f7bc9463cc775592caff"],["/categories/works/index.html","178c237c0f6d7a4364cd41bf52078154"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","e21657d8ff2f701595db4e2404d14563"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","8014e8e58824f2f6829df13074ae3a42"],["/ja/2015/03/WNDR4300-setup-log/index.html","b88312c087e3457eebcec66b3e135328"],["/ja/2015/03/android-hostname-change/index.html","2293051dcbeb23183230e176a6a62dd1"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","a2b0d9b4b928b774c5c8ac583f571e0a"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","aab9938c14e72d594d69e05dd5c7782c"],["/ja/2015/04/cpp-study-log/index.html","922a5695a2991717bcd2d106983b9a09"],["/ja/2015/04/github-pages-ssl/index.html","51e638adbf40200dd4d7107af91d060a"],["/ja/2015/04/hello-world/index.html","71a9d0f2ac13afcde1a873e613e4370f"],["/ja/2015/04/hexo-setup-log/index.html","743fb907026381bdcd12c4a1a2b5673e"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","a07ac5eef2d6db9858ce2f46c12eeb0c"],["/ja/2015/05/cpp-inherit/index.html","96aaa457cb2a781e7ed676e9112d6dff"],["/ja/2015/05/cpp-polymorphism/index.html","83135690c413ac70a9408317a2a5b322"],["/ja/2015/09/android-root-ota/index.html","8b70f40323a25a62684437657e08b7e5"],["/ja/2015/09/java-learningNotes-1/index.html","73236265152b898bba19e2df5de59914"],["/ja/2015/09/newblog-newlife-2015/index.html","82e7ab3b293e0f2ed42c68b86914d367"],["/ja/2015/09/router-rebuild-2015/index.html","3f9a1a44f8341c94d52230fb8d65ad1d"],["/ja/2015/12/2015-12-21/index.html","5df7ea280af3b388a124e0aff49c439e"],["/ja/2015/12/PixInTouch/index.html","97a9d9feb67f4b50eb9d62d4efcc121f"],["/ja/2015/12/git-study-1/index.html","2c4fc312e397992a102f91a86e33cb92"],["/ja/2015/12/hexo-backup-and-migrate/index.html","7ad74489a3fc15f3d1cea684e7e3cb6e"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","89b1354a56ebcffb1cdf5ce040b7b19a"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","b7d9cb60fdfde7a9d1c5782a5fdf4c98"],["/ja/2015/12/router-reconfig-2015/index.html","d9c0641138ac6086c8d2ebb6cb420083"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","6564469b850d5e4e89ade3bf5017e3da"],["/ja/2016/01/2016-stepping-further/index.html","0f52227ccd21c66d3d41d35e2eaa1d13"],["/ja/2016/01/Android-Study-1-22/index.html","3895986d19ac92afdeb1d6ed5fc65810"],["/ja/2016/03/2016-03-20/index.html","d771654c36f90d16ceaddb5591521442"],["/ja/2016/03/GSC-535/index.html","7a9f8c2e70efe472e02427305ff807b2"],["/ja/2016/03/gulpjs-1/index.html","5643aff3a5c99695e5699f5df539905e"],["/ja/2016/03/hexo-theme-paper-white/index.html","30dcfa0b478cade3b4e7c04d43e7feb0"],["/ja/2016/04/2016-04-19/index.html","efdd9305ac7b5f45f95b6af4af43a667"],["/ja/2016/06/2016-06-16/index.html","5308ca71756e75f9982bfff072f3833f"],["/ja/2016/09/2016-09-18/index.html","e0b07ee8c57b5a5a6e71d19154a877f6"],["/ja/2016/10/2016-10-27/index.html","dea1a4d7847f5a32449cf5e4b3db7281"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","6634e7011d5e6e46836671175f8453e8"],["/ja/2016/12/improve-duoshuo/index.html","e83fc0a6d7657e6ae831f69f3cb37aff"],["/ja/2016/12/use-travis-ci-your-blog/index.html","6fddc8a2defa2ce53b46f943118080cd"],["/ja/2017/01/2017-iyahoi/index.html","836891c6b75b1ee417afd1a565dff2b4"],["/ja/2017/01/webpack-amd/index.html","49efe23c1148f6776731a100f7403602"],["/ja/2017/04/kotobukiya-syaoran/index.html","069ed8f758f78498e059c6b789264afa"],["/ja/2017/04/macbook-and-surface/index.html","f13a9418f20bd4652d7d770638e1d8e2"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","ec2880c7bff997e90ecdfa18901de37c"],["/ja/2017/06/noragami-seichijunrei/index.html","6c99a74fb614e4cbfc659d5d214e97f1"],["/ja/2017/08/cross-compile-55-libev/index.html","cf027a9124498b9ac88c1076b890186e"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","e0316fdb668f4103a1f0526e22cbbeb3"],["/ja/2017/08/hello-jp-world/index.html","dcfc615194519dd117e2ea640ed0d071"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","e6c4f3c455541aecdc1fc6e2387f8fbe"],["/ja/2017/09/record-user-login-status-methods/index.html","2ba371995a03d557293e733f7685ed31"],["/ja/2017/10/vue-typescript-early/index.html","75168c8d8f93f393c5a187ce8667cbac"],["/ja/2018/04/2017-end/index.html","cb66ddc71f26ac1f02756ded9fb35daa"],["/ja/2018/04/twitter-account-activity-api/index.html","ee5704e5b38d596907f72b52b22aebe3"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","43c7b1c08c94594c8d83af74326f7db2"],["/ja/404.html","f8adbec5350c7389d9ec008857780a29"],["/ja/about/index.html","c21bbad61b37625412fa76dd58dbec7e"],["/ja/archives/2017/08/index.html","62b3e545f7367b1015065e9f60d10988"],["/ja/archives/2017/09/index.html","7baf61f898b0fe05efcc0f26cac69c02"],["/ja/archives/2017/10/index.html","55135471fe08d9176fddf9ba7de79791"],["/ja/archives/2017/index.html","e9eec65658c878d90da3ee162d02456b"],["/ja/archives/2018/04/index.html","331cee45eaebccbe7c1cbcf075240d7c"],["/ja/archives/2018/05/index.html","28ab955dea403e2c6d11a59d122fc8d5"],["/ja/archives/2018/index.html","f56bf6d40490e4878b7326e73fc8af78"],["/ja/archives/index.html","7afa2d85b79a3948276214e8e7d39cea"],["/ja/categories/ACG/Travel/index.html","2dd5865da09038834ff1d4cbb68e6081"],["/ja/categories/ACG/index.html","a9c23fa9ac5060b3f1ee9d9759d1cb69"],["/ja/categories/dev/Front-End-Dev/index.html","d92804b7349d811ca5195b9642151042"],["/ja/categories/dev/index.html","25555b116ec9f36a7a2527349fd79c50"],["/ja/categories/uncategorized/index.html","cd359c89e893aeef2f71e12bde5d680d"],["/ja/index.html","88bc4923ad0f464f651320ae50ca64bb"],["/ja/nihongo-test-page/index.html","ef0b9f822efd52db57e9776d5cbc597a"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","4d39212142dfa26d1752d514e5e89050"],["/page/2/index.html","d7b46f30d0f6146d5d8acf2a319976d1"],["/page/3/index.html","ba038021f48a6e5db3529e6ed510a711"],["/page/4/index.html","61f9d6cc1fc46166da6f97b0ed0b01b4"],["/page/5/index.html","598c527bce22daf273dd74d9bc1af19e"],["/page/6/index.html","419f831c54cec5e4ba435fbeb8e5fe46"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","050314dd8d92ffc8ed54f5b7800f1c9e"],["/zh-cn/archives/2015/03/index.html","d0a3ac4445094b6f67a7ee56d8664098"],["/zh-cn/archives/2015/04/index.html","64c2031f138834befd58c988bd478a66"],["/zh-cn/archives/2015/05/index.html","115f123a29da95f31d4b5b0592f5cc93"],["/zh-cn/archives/2015/09/index.html","fe67405f7d02d7ea9bbad634a6537e29"],["/zh-cn/archives/2015/12/index.html","293d3464e85a6b6b1cef5964f02f0021"],["/zh-cn/archives/2015/index.html","c8b51294b881e9cb90a05a0c79a2a6dd"],["/zh-cn/archives/2015/page/2/index.html","6cd412cf67c5167822c2b8114e26033c"],["/zh-cn/archives/2015/page/3/index.html","84dbc5414de06c561dffe89e45e61693"],["/zh-cn/archives/2016/01/index.html","bfae1f2cf66c887e0cd21f9b1200e1ac"],["/zh-cn/archives/2016/03/index.html","961ea812cc70193b86266b0bbf76a887"],["/zh-cn/archives/2016/04/index.html","2d00aeeddf14ea6ebcef4e45275d4588"],["/zh-cn/archives/2016/06/index.html","13a66270d1c6aef8b20e46b13fe33173"],["/zh-cn/archives/2016/09/index.html","081e39b4ee0eebe411a9a8c63e76f08f"],["/zh-cn/archives/2016/10/index.html","319e690ad2709896e43f752a21da0701"],["/zh-cn/archives/2016/12/index.html","8249fe49823e253f4d32fa8b17dabd90"],["/zh-cn/archives/2016/index.html","74fcd3a90ab1602afe4e3fab069619e8"],["/zh-cn/archives/2016/page/2/index.html","d0aa0d99ecb9e2f1f33a415d47df9d1a"],["/zh-cn/archives/2017/01/index.html","f17f6c4981962959aae176b5dbecebc0"],["/zh-cn/archives/2017/04/index.html","2a641dd27a89d249416cebd9156d64cc"],["/zh-cn/archives/2017/06/index.html","fd3db69e4d237702d1af8e3ed43be02a"],["/zh-cn/archives/2017/08/index.html","f04e81eb46e1f10804426b393cd74686"],["/zh-cn/archives/2017/09/index.html","7542e6e0e2c99d802a6d1cbd98b52b93"],["/zh-cn/archives/2017/10/index.html","eba2154803be804aa3ffcb8aae6904af"],["/zh-cn/archives/2017/index.html","8099dec6030fd8c634bab14b7aacc8ed"],["/zh-cn/archives/2017/page/2/index.html","90a27cc852d0f7d0693136bc94561a13"],["/zh-cn/archives/2018/04/index.html","65cf050a193ac1e05407f6e5eeff1367"],["/zh-cn/archives/2018/05/index.html","62129ff79cec8360dbe265009d9332a3"],["/zh-cn/archives/2018/index.html","67e08488904fe49c33007066d6c9c8f9"],["/zh-cn/archives/index.html","8aec02cf3a8ca670fa92201f1aeb654f"],["/zh-cn/archives/page/2/index.html","3b6ce78ae0da394f2fa98f05384de517"],["/zh-cn/archives/page/3/index.html","9fc2d6cba041f7b6cf8f818fd15a7d2e"],["/zh-cn/archives/page/4/index.html","efc8a7da90db8e74c9b96d8b8d4cc1a4"],["/zh-cn/archives/page/5/index.html","cd0ba4c5c69305e4d851ce7ed54462ad"],["/zh-cn/categories/ACG/Music/index.html","ee02e3acd5509ce903437c4eed50d49f"],["/zh-cn/categories/ACG/Music/self-copy/index.html","10f100be677ca5f002b743d29b10326b"],["/zh-cn/categories/ACG/Travel/index.html","31a9a1c506e0ec17e970f6ae75ab80c0"],["/zh-cn/categories/ACG/figures/index.html","ab052cf7646e0473440e87f7bcbec30b"],["/zh-cn/categories/ACG/index.html","29c4aa1904078bb1787b99ea5afdaf91"],["/zh-cn/categories/dev/Front-End-Dev/index.html","4d0b4d7e3fa13bab8294a6838845686c"],["/zh-cn/categories/dev/HTML-CSS/index.html","ed22adf73829611ca1fa309e51d6e46b"],["/zh-cn/categories/dev/android/index.html","fbc53d5ba3be329fc024bf8e5e9e33f9"],["/zh-cn/categories/dev/cpp/index.html","35c69c75ecb284a30f9f0112af25320e"],["/zh-cn/categories/dev/git/index.html","2fda98556c344ffe477e693a4bc78d5f"],["/zh-cn/categories/dev/index.html","341eb1a112b062db001047314f2ad341"],["/zh-cn/categories/dev/java/index.html","a02d5d21d2b966b277ca2e28f85cdf75"],["/zh-cn/categories/dev/page/2/index.html","0b5c9efe756a8bcbe980b40e9d92ad78"],["/zh-cn/categories/maintaince/blog-setup/index.html","b6b4e28ba58d87c53672081dd81dd1db"],["/zh-cn/categories/maintaince/index.html","da29a95c68eeeaeb4199f8fe2d666ee9"],["/zh-cn/categories/maintaince/macbook/index.html","4fff3c8ed160b492cc9ebb7a4ccf58a8"],["/zh-cn/categories/maintaince/router-config/index.html","f7235d2ab7aba3752adf37b68ab42722"],["/zh-cn/categories/notes/index.html","5a433c7b7ca31095278cd9534dbf2001"],["/zh-cn/categories/tricks/android/index.html","08ac89984c9bfcf8623605ad82f50831"],["/zh-cn/categories/tricks/index.html","70b7bf0d4451e935eabffb8497f8b036"],["/zh-cn/categories/uncategorized/index.html","3bad46505b47cef8c06c260f74ae1a16"],["/zh-cn/categories/works/Front-End-Dev/index.html","9bea8559393fe589e77e39c2504f2cfd"],["/zh-cn/categories/works/csharp-wpf/index.html","549f399992dec33cc15139e8ad538e4c"],["/zh-cn/categories/works/index.html","0de84d92335fb5d856f3e1a6638cfa16"],["/zh-cn/index.html","55b1a1e1a775bca012b0660b598e5c5f"],["/zh-cn/page/2/index.html","d2266845e77ea8c50883252c869a3992"],["/zh-cn/page/3/index.html","c446cb28dec3baec9094bec0c8b9c188"],["/zh-cn/page/4/index.html","5def733802cf114bb39bf3dc4b0dc511"],["/zh-cn/page/5/index.html","2fae35c43e14d8b12d216513c381fc27"]];
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
