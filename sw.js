/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","233570ff590599e09a3620a16bc7c0e5"],["/2015/03/android-hostname-change/index.html","2ac56916254f2d8da9c23008b14c99ad"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","d604a08cf8efe8d441b84d18964397c9"],["/2015/04/android-chrome-issues-with-webpage/index.html","5a9a3946cac431b2e7e375214d0a069a"],["/2015/04/cpp-study-log/index.html","4c6aa6a2ea0d6c6408430368fb4aa1ba"],["/2015/04/github-pages-ssl/index.html","081232c8b9b724ac722ca27429b69250"],["/2015/04/hello-world/index.html","6895397bbec0bc37570ae095ba7f5d37"],["/2015/04/hexo-setup-log/index.html","4a110cd10471dd7a7b19c765666631d9"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","5bcff3ea3c278e3dbdaa2da52e227391"],["/2015/05/cpp-inherit/index.html","38b79fce5b695a803cfafe77ae73e838"],["/2015/05/cpp-polymorphism/index.html","dda71893ced086f4add92d971fd0068d"],["/2015/09/android-root-ota/index.html","24977e06c5ce388bc4c2ebbc3935da7e"],["/2015/09/java-learningNotes-1/index.html","bad4ef8e0906a11455045ed529bf9660"],["/2015/09/newblog-newlife-2015/index.html","56d4bf7ffe7fc048214ad33decadb598"],["/2015/09/router-rebuild-2015/index.html","bda3d29f4b5e638cfc48491b9baf1430"],["/2015/12/2015-12-21/index.html","c772298b39b448c8b944a3fd86a0b2f5"],["/2015/12/PixInTouch/index.html","ab8c559ec3cfd9cc28084c62b2ff1861"],["/2015/12/git-study-1/index.html","52a258784b58155736c3802982671443"],["/2015/12/hexo-backup-and-migrate/index.html","0184057fcf2f16158bb818d38415e254"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","2f41a2573cbee16716aadfab70590324"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","10af52465979110bdee058ce359d0aee"],["/2015/12/router-reconfig-2015/index.html","0661a16a5ab11dfbfa63f3994c432c3f"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","8b83ace5229f34089d99d4ea20f724ff"],["/2016/01/2016-stepping-further/index.html","20bf0d959dabe5606596633f851d2629"],["/2016/01/Android-Study-1-22/index.html","c04ecb4957776ec4c0034d095ae670a0"],["/2016/03/2016-03-20/index.html","0bf5dbbf73f87f6d770f32e070a53072"],["/2016/03/GSC-535/index.html","70180bb699f2d51352e6fac33a1aed77"],["/2016/03/gulpjs-1/index.html","a4717afe854d362700146c67aa512567"],["/2016/03/hexo-theme-paper-white/index.html","52583ffe655f5d5bd3bd623c42838d49"],["/2016/04/2016-04-19/index.html","9eaad79121a87912c9ac949becfdf763"],["/2016/06/2016-06-16/index.html","3c5c53fa6248b9766460104a9a7f382d"],["/2016/09/2016-09-18/index.html","3100b296f7e721c0e3d9b04a1cbe4863"],["/2016/10/2016-10-27/index.html","1e230597cc7c0075702a13c735d964f8"],["/2016/12/config-switchresx-and-2khidpi/index.html","4884d8a233ed42d90e276a3412d09dbc"],["/2016/12/improve-duoshuo/index.html","23fe2f51138448e9eb1694da1f3a64d9"],["/2016/12/use-travis-ci-your-blog/index.html","62ebb75e36e7ae7c52a3e45e6f87b12d"],["/2017/01/2017-iyahoi/index.html","2747556a00c212261a9131d3f5346cd3"],["/2017/01/webpack-amd/index.html","d135e0c1e475babd6d86503f9fea7691"],["/2017/04/kotobukiya-syaoran/index.html","660f7761cf5f31f7f1f24cca703448af"],["/2017/04/macbook-and-surface/index.html","679b6dd41703deb5001a45bf1bace9cf"],["/2017/04/uc-hyakuya-yuichiro/index.html","6d67a66f2f1666ad5df39de2427e7883"],["/2017/06/noragami-seichijunrei/index.html","2dd7f764f54bcb361d67c0dcbab1ef2c"],["/2017/08/cross-compile-55-libev/index.html","f2f170fefd3abce753d733ab8981cbfb"],["/2017/08/explore-service-worker-working-lifetime/index.html","389fc459ac4a8c16dfd4b3819625f0bd"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","03a2e650f5c9aa3c1540c28c1401a6c4"],["/2017/09/record-user-login-status-methods/index.html","468f78d791beeb27670addb0b798b026"],["/2017/10/vue-typescript-early/index.html","308e946271ec94846af0c2bec71f0bc9"],["/2018/04/2017-end/index.html","df0a77dcb7cdcc90f076c7c80905a0fb"],["/2018/04/twitter-account-activity-api/index.html","3cfc6d7c1334b25bbd09f1d6b175d1d1"],["/404.html","db9cb16838be923bec8dcabfd4b943ed"],["/about/index.html","c859d482b26a585d9ac7177bd12b298e"],["/archives/2015/03/index.html","6138b1dcc1fc1930109452ea70d157a5"],["/archives/2015/04/index.html","5a65c8df318518647729ba2614b9d03f"],["/archives/2015/05/index.html","e14960052d17436fa8b73af021156aea"],["/archives/2015/09/index.html","4dc2600677dc5f6c09830578ae552ad1"],["/archives/2015/12/index.html","48604d60a7c08c7d51f8638f86f6438c"],["/archives/2015/index.html","171500febbf81656a869bf2ac1bf8672"],["/archives/2015/page/2/index.html","d4855ffacd37d95be59c70ff02093a56"],["/archives/2015/page/3/index.html","e52a5268574730ac9db876d4cd3838d8"],["/archives/2016/01/index.html","782f5143c36f91f3239e1f6ec3e25188"],["/archives/2016/03/index.html","54b145fdb0425116f02cf376ea903341"],["/archives/2016/04/index.html","36a9f6fc57e609e43445bcd6a2ea774a"],["/archives/2016/06/index.html","be286d1d685fff1db5b0dba1add0654d"],["/archives/2016/09/index.html","25a1e2db295df3dc1832bf512db25529"],["/archives/2016/10/index.html","5390160cbc9c1f0ce1a020b5d5595c05"],["/archives/2016/12/index.html","11d4c937f05d611d49301ffedc25e9e4"],["/archives/2016/index.html","39d0335c7894f52b8c3dbd25a2701651"],["/archives/2016/page/2/index.html","1a345408e9728987f0ea9968bd57a863"],["/archives/2017/01/index.html","dee2580933a52f92899a697d17a96677"],["/archives/2017/04/index.html","01c105f92cdcabca55d2f0ded1964cae"],["/archives/2017/06/index.html","df0f19e6f9928a844624859c680f949a"],["/archives/2017/08/index.html","6c004cc6a66ba209aba011a96f617ca0"],["/archives/2017/09/index.html","609dbd974a256fb619a979b6fdb5bb4f"],["/archives/2017/10/index.html","4485c20542e500cec136cd6cb5cd3e13"],["/archives/2017/index.html","6cb8707476d41f524798d4e0401bd0bd"],["/archives/2017/page/2/index.html","009ec491514a5b437959767ab635d63c"],["/archives/2018/04/index.html","a7376fcad0aa826c453cebbf8f3128be"],["/archives/2018/index.html","1168114af13921e54b4a8056acce314d"],["/archives/index.html","a09ae60ca8c9138e8c2df3f5ed93f18a"],["/archives/page/2/index.html","6d148e03163de1bb4a8af87d8cf18f6b"],["/archives/page/3/index.html","81a46628b6cf82b349e78e21037ce2ad"],["/archives/page/4/index.html","bbc252de955ea3b56c292861d2c4164b"],["/archives/page/5/index.html","b037b44864bd1e614b19675a09f2802d"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","9b0370ea317446caa642c7690062b13e"],["/categories/ACG/Music/self-copy/index.html","661a5085ae9da03a5b5b664087ddf843"],["/categories/ACG/Travel/index.html","e9a8ea8c0b97767e855b74172ed8fef1"],["/categories/ACG/figures/index.html","8cfaee9ff644630bd241bb0175825783"],["/categories/ACG/index.html","bcfd1e1ca51924bbc68b70e18537cbf2"],["/categories/dev/Front-End-Dev/index.html","4df4f5e1496f4c99031e998430e6e8e4"],["/categories/dev/HTML-CSS/index.html","0ce163337a7048222c9aae25eb15400e"],["/categories/dev/android/index.html","5c361fcdb3b29fcdc7a1fe1354a5c30d"],["/categories/dev/cpp/index.html","286a8bf144b8333cf7479d3ab70d3c64"],["/categories/dev/git/index.html","15f1f6a8cb01bec8b65a77dbc3b875c9"],["/categories/dev/index.html","e290d04e64b8767b05607952ff2ec689"],["/categories/dev/java/index.html","14e6d6328443b8aacd063d0d7890db06"],["/categories/dev/page/2/index.html","74128036d65fbe72ba6a3ac3711e0a87"],["/categories/maintaince/blog-setup/index.html","ca92cd7fda5b3d1f8144c8a274f36522"],["/categories/maintaince/index.html","1d3aacdf71a386aa461932582cefc403"],["/categories/maintaince/macbook/index.html","789b5c46ad33c1c62cefc36459bc8487"],["/categories/maintaince/router-config/index.html","315852d289dd562bf15cf332a00dcccc"],["/categories/notes/index.html","bb06d91c72133dde661df3314cb911be"],["/categories/tricks/android/index.html","67c8401853a77e5301b06c1fe26fd8d6"],["/categories/tricks/index.html","54990d3c0d44b42c8f902e9deaacb98e"],["/categories/uncategorized/index.html","67a58c4fe31de31a040d3aef658a0873"],["/categories/works/Front-End-Dev/index.html","63cceb3c6e67ba415b9c043c811b5175"],["/categories/works/csharp-wpf/index.html","fad9f815b51722946cd9fae3ab86dfcd"],["/categories/works/index.html","05e2f1895c58e986c2b1e0e6c6e3941a"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","1b055a88029cb855efc84bcbaa0932de"],["/ja/2015/03/WNDR4300-setup-log/index.html","571d3b4c32f1adac1d3fca7f08fbbc3d"],["/ja/2015/03/android-hostname-change/index.html","b1e3766b663a206ab3dcfc9a1dc2d22e"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","6f0522cea78721f6c2f7632e67d3e1b2"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","c6e9008faf6a4ac199a7a399c8146bd3"],["/ja/2015/04/cpp-study-log/index.html","b46d12784c5bf1e6767404721eb7967d"],["/ja/2015/04/github-pages-ssl/index.html","ab657354bff4ef5c282e866519bf9414"],["/ja/2015/04/hello-world/index.html","4edc4ea0c729146e673e966e98f25c36"],["/ja/2015/04/hexo-setup-log/index.html","fa9218a4547761ad21994f422c934f82"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","d74d5de1dbb6f5e2605c1c0e592a24ae"],["/ja/2015/05/cpp-inherit/index.html","a60ffb32ffca26c180e5ee131a73738c"],["/ja/2015/05/cpp-polymorphism/index.html","d98289b5ea5b18c48d76c49b8fbf4d89"],["/ja/2015/09/android-root-ota/index.html","04e64c8f677146c87ea87400607f1965"],["/ja/2015/09/java-learningNotes-1/index.html","4fe54da60956f923a9e889872f3e9b3d"],["/ja/2015/09/newblog-newlife-2015/index.html","e65f57306fcd776697004f3d26c49b44"],["/ja/2015/09/router-rebuild-2015/index.html","5645b6ca9d87189417c6c849ef18f11e"],["/ja/2015/12/2015-12-21/index.html","7151a6e484323553020ba1385e2e88a5"],["/ja/2015/12/PixInTouch/index.html","2e22c13ad6689b01123ed68345d0dcf2"],["/ja/2015/12/git-study-1/index.html","aee943cf6d169710b3cb39fc786183f3"],["/ja/2015/12/hexo-backup-and-migrate/index.html","9d65acbc7d9d0ad102f8079b941e2741"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","58efb70a76033105fd6be0e7df1b3858"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","ac7ffe067d9a72599e907102f46dac6a"],["/ja/2015/12/router-reconfig-2015/index.html","f657fbaefb58dfb885c2d7b25b4befcb"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","9fa40da6189c8a62c620b325ef46b55b"],["/ja/2016/01/2016-stepping-further/index.html","9d63ad3207008d5de81d4f6a5b5eec3f"],["/ja/2016/01/Android-Study-1-22/index.html","ef8108b996f47cb87358425a65467b4a"],["/ja/2016/03/2016-03-20/index.html","45db624a4b9af71280c0fa743c972004"],["/ja/2016/03/GSC-535/index.html","4d77e7f25f28b1950a17da26e9651c8b"],["/ja/2016/03/gulpjs-1/index.html","9bb2ddbba9b7111d4688d1a772f660fb"],["/ja/2016/03/hexo-theme-paper-white/index.html","ea032a1bc66addc81a9cefb954c389af"],["/ja/2016/04/2016-04-19/index.html","6e8f29a43925d60052ad8fe06e32fe0d"],["/ja/2016/06/2016-06-16/index.html","57c8d8eb400dbef7a1303ffab8c63b09"],["/ja/2016/09/2016-09-18/index.html","3e57dff2911a5085f002e9084e3a9250"],["/ja/2016/10/2016-10-27/index.html","6bef986eaccf5103adee46bf381b324b"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","9c6dd3880893d9efed843a4ca13dcea3"],["/ja/2016/12/improve-duoshuo/index.html","b82ec3b952468d1255e3e9b376d5c5f6"],["/ja/2016/12/use-travis-ci-your-blog/index.html","0e8690f4aad6c9b4e9037afa02fd8266"],["/ja/2017/01/2017-iyahoi/index.html","06c73a2c730bff1bf9d617eb43b0bf59"],["/ja/2017/01/webpack-amd/index.html","7d57efcb142c5108a01523c612fd4899"],["/ja/2017/04/kotobukiya-syaoran/index.html","0158367a65875eecadc21f801e9b3ed4"],["/ja/2017/04/macbook-and-surface/index.html","8d8bc5fbebe04cb899d09c69660c4431"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","55bdf5974c770d8913fc0e1d055bf676"],["/ja/2017/06/noragami-seichijunrei/index.html","912ef95d1dec93c602841c6a732d4c49"],["/ja/2017/08/cross-compile-55-libev/index.html","c6463ef7e158ed2a57efbab365424d33"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","0a51d374d9fb5ea91fbb2f983eba57e7"],["/ja/2017/08/hello-jp-world/index.html","efae83ed773340b929cad1e7be0e658a"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","60a336d2368c639a680684ba103ac9f3"],["/ja/2017/09/record-user-login-status-methods/index.html","59cf16fb88770942952657c33fb24c51"],["/ja/2017/10/vue-typescript-early/index.html","3454fa98c2d6c0d575602ce697af9f8e"],["/ja/2018/04/2017-end/index.html","36738ee32af8f6be781f49c618983054"],["/ja/2018/04/twitter-account-activity-api/index.html","4c5037a874261ae93c44be143775c4b2"],["/ja/404.html","05f927f081195ee59d01de05b46ca85f"],["/ja/about/index.html","4d0d5af56c49dd6d592240f963a99eaf"],["/ja/archives/2017/08/index.html","d2b6454d3b50290742ec737f4b4deba7"],["/ja/archives/2017/09/index.html","9fe5e1dc7986add42df522b1f4a5dcc5"],["/ja/archives/2017/10/index.html","fb55f7555ab9f92b0fa329b4bd97b1c6"],["/ja/archives/2017/index.html","d6c1b796e040ed8e1e980c92c460f495"],["/ja/archives/2018/04/index.html","94e28fb5515762303ce94511c97e7f28"],["/ja/archives/2018/index.html","6d2a859e41a1d0e44fae1b3ec703c8b6"],["/ja/archives/index.html","00bd3940f7b88d5311e9f049303884f4"],["/ja/categories/dev/Front-End-Dev/index.html","6bc2938f86f4ff925fd0c40b178400e6"],["/ja/categories/dev/index.html","a23bc92b011d7e43073f475c56408898"],["/ja/categories/uncategorized/index.html","40ca0074be199f50ee1ef90dd31d7766"],["/ja/index.html","c0dc524a80755bf56946221d65e63c1c"],["/ja/nihongo-test-page/index.html","ba3686f4f7f94c6270a565358b2ceba6"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","56f32fc610a31616aafe4318b2dfd4c6"],["/page/2/index.html","c956e08e1b91b8150f6c2e3d3d1d1034"],["/page/3/index.html","d2201888adcf2acd5bbcc46d58c86d42"],["/page/4/index.html","3986320aa2eaec9d88d50eff20f276bf"],["/page/5/index.html","3b56d352eac5d1f0cfb2292c09370503"],["/page/6/index.html","71bb49d8ebc8abd94573320215b68991"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","1b625f4483d5e6834ef42b83a1f034c2"],["/zh-cn/archives/2015/03/index.html","3635b89942639b35a60232d95365fe3d"],["/zh-cn/archives/2015/04/index.html","c1a88848c47d591b77620535696a2f6e"],["/zh-cn/archives/2015/05/index.html","79b7f4ac802b358a418cfdb4b447a8eb"],["/zh-cn/archives/2015/09/index.html","159df805c1be14cbd1207c74235b12a7"],["/zh-cn/archives/2015/12/index.html","29839d0033af889c013ae980667f4a8c"],["/zh-cn/archives/2015/index.html","b12414007f5311107fc8669a9ce0016e"],["/zh-cn/archives/2015/page/2/index.html","ee425ccbeeeaae596fb671b274c4a4a7"],["/zh-cn/archives/2015/page/3/index.html","a8c847c35c7659800b3a1c0f4ae2c26c"],["/zh-cn/archives/2016/01/index.html","8a55080585a3fafd1d3dfffdae5620be"],["/zh-cn/archives/2016/03/index.html","d6a0cc4d31785917cb1e4bce5aec4c69"],["/zh-cn/archives/2016/04/index.html","64a3158d50a534b90cd64014a47df4af"],["/zh-cn/archives/2016/06/index.html","ebcd359a6e04e3a51546198e25934db7"],["/zh-cn/archives/2016/09/index.html","d6c860acd20021c2bb69f108a3eff60b"],["/zh-cn/archives/2016/10/index.html","1ee12d96b126ef521aa6119f2d687452"],["/zh-cn/archives/2016/12/index.html","97c18298258adb086ea7f31659e4136d"],["/zh-cn/archives/2016/index.html","ee9e0061c8f09adf6475221e5a29d4ee"],["/zh-cn/archives/2016/page/2/index.html","654b6012efd6192ca1e3a01fad14f523"],["/zh-cn/archives/2017/01/index.html","07950bf227dedecf3cf8fef1124197e6"],["/zh-cn/archives/2017/04/index.html","01bc55dd085a6fe93dce7a6afba77084"],["/zh-cn/archives/2017/06/index.html","0be9694ef627436af1bbef12cec96d96"],["/zh-cn/archives/2017/08/index.html","3d387f8c9de5852967ef15b8e53f4fc7"],["/zh-cn/archives/2017/09/index.html","7f6a7506cf78f8108b3ec073f1706209"],["/zh-cn/archives/2017/10/index.html","6a1ea38bed939ae40dc879cf055e3f85"],["/zh-cn/archives/2017/index.html","7db248b5f97415daf7bce72a690088e0"],["/zh-cn/archives/2017/page/2/index.html","0764c6e6609d0e245ad38b789d8df854"],["/zh-cn/archives/2018/04/index.html","9243f8d58ca1629301508b9a2398c4d3"],["/zh-cn/archives/2018/index.html","17646723086f505b2bfe2f1e6ce2f4dc"],["/zh-cn/archives/index.html","0f66aeffd5202cfb4adb5ba72e2a5f89"],["/zh-cn/archives/page/2/index.html","a2b1bb49df0148a19145fd6418db7657"],["/zh-cn/archives/page/3/index.html","28448b218500676bcee576d5bde6bb4e"],["/zh-cn/archives/page/4/index.html","11f76b3116fbb01187bf768006732c9c"],["/zh-cn/archives/page/5/index.html","b65e19db4e6405fdd1321d7d8e9cbc44"],["/zh-cn/categories/ACG/Music/index.html","b5b18f841a1a43609c979265ad704f22"],["/zh-cn/categories/ACG/Music/self-copy/index.html","8fcc0dcb6b985e2d0b16c3201d0f20f7"],["/zh-cn/categories/ACG/Travel/index.html","82d3d08cd439e9435e0046f4667d69d9"],["/zh-cn/categories/ACG/figures/index.html","5ed334be8a9c3228272a5b282432aec2"],["/zh-cn/categories/ACG/index.html","3477c96c185139476cc66308aadf88ec"],["/zh-cn/categories/dev/Front-End-Dev/index.html","b7a3145b08bfa67f34fd049882f0e2cd"],["/zh-cn/categories/dev/HTML-CSS/index.html","eaea2587990abcace4c2e11242a75760"],["/zh-cn/categories/dev/android/index.html","211fa9b783053b1ef6f6ad97d4be4baa"],["/zh-cn/categories/dev/cpp/index.html","0623e500d8ce327db8ffea5fe733649e"],["/zh-cn/categories/dev/git/index.html","67967cd3f8e91a36b15984d15f4b72be"],["/zh-cn/categories/dev/index.html","e526f4e690b8490882d3fd68da7c5e77"],["/zh-cn/categories/dev/java/index.html","56ec969eb3edacef6421dcac47a5f259"],["/zh-cn/categories/dev/page/2/index.html","fae4014e87cbac0a1e3af902ea926649"],["/zh-cn/categories/maintaince/blog-setup/index.html","b0c61c596705a051560e2073ef7c0cb5"],["/zh-cn/categories/maintaince/index.html","db1d2a0f109ad22986eecd098b40350c"],["/zh-cn/categories/maintaince/macbook/index.html","77488ce210290430b6fd42bfc49d180a"],["/zh-cn/categories/maintaince/router-config/index.html","3d9983d255d2abc3ef787b959f3c643e"],["/zh-cn/categories/notes/index.html","628efd8eb51f5c06786973558323fbad"],["/zh-cn/categories/tricks/android/index.html","e4a2a1e364097f4434753be3632e60af"],["/zh-cn/categories/tricks/index.html","ce3476c6540891977821cb72d085dfe1"],["/zh-cn/categories/uncategorized/index.html","b60f48e9d204089657409ad8ebcbb5a7"],["/zh-cn/categories/works/Front-End-Dev/index.html","f3311b86bd5530e1b665059de9945bbc"],["/zh-cn/categories/works/csharp-wpf/index.html","2bcab01600c9fd9e8cc7f9ab744502ca"],["/zh-cn/categories/works/index.html","910592f68d018c331021bf8980aa3242"],["/zh-cn/index.html","5cc0a637d3c7f089835e7f0ba83417ee"],["/zh-cn/page/2/index.html","f17f1bada0329dfec57b4acaf91fc647"],["/zh-cn/page/3/index.html","9c5aa3d8a137f08a2a2ff360037a8a61"],["/zh-cn/page/4/index.html","60075c19ce940e65a26fd511b60c6eea"],["/zh-cn/page/5/index.html","f3aa6c361e4d6d3946749927e23a2bc4"]];
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
