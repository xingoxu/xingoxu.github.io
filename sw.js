/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","43a9cdafdc6995d618745d30c293fde9"],["/2015/03/android-hostname-change/index.html","059f8adaae96fd65786d5aeab5e192cd"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","bae36d570bf076d30e3d5cecb1a248a6"],["/2015/04/android-chrome-issues-with-webpage/index.html","e1513895b9b534a6b234a1984a55a712"],["/2015/04/cpp-study-log/index.html","5b3301c69e199aa4c84349c43652971a"],["/2015/04/github-pages-ssl/index.html","c175a64e5daa7a70c555bcca6e0d3822"],["/2015/04/hello-world/index.html","00356ef2d86e5772d7c9a20731d13905"],["/2015/04/hexo-setup-log/index.html","a824a78152454f2e6b992b652e3c9e71"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","d2e037ef9e35dc7d80ea9dd98e594c35"],["/2015/05/cpp-inherit/index.html","bb9b777c3ed83981d2638d9f97a644a1"],["/2015/05/cpp-polymorphism/index.html","fbc40c2f00dbefa664851caa384a28f9"],["/2015/09/android-root-ota/index.html","9036e30496433580ecad897d10122a6a"],["/2015/09/java-learningNotes-1/index.html","bb2b0d69b32a98ed93e85040bf4456a5"],["/2015/09/newblog-newlife-2015/index.html","3c50fd4828b053c94b66214a26395808"],["/2015/09/router-rebuild-2015/index.html","4b32205de4f35fefa4b3ba5ce30000c0"],["/2015/12/2015-12-21/index.html","7ac4ae97763c8cb1ee79a890ee873f6d"],["/2015/12/PixInTouch/index.html","bf77fdbf620445a05ed1edaa30227d75"],["/2015/12/git-study-1/index.html","abba9ef8ca92801e3bb5bb7acfbc5446"],["/2015/12/hexo-backup-and-migrate/index.html","d60b6aaec0dd2635a19c9ad70a399211"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","db5b2588d4091cefb37de58127913ffd"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","f51bda93b85370998506bca033e32c41"],["/2015/12/router-reconfig-2015/index.html","a05c27a706d1b789c0bf68e76dcfbef7"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","e3ea778e0ac1ae909eeaa3ea9e031764"],["/2016/01/2016-stepping-further/index.html","01e4d52728ee3bc1ebe08ef181ff9758"],["/2016/01/Android-Study-1-22/index.html","b978f61f910c36da7d73adf47fae8be6"],["/2016/03/2016-03-20/index.html","759fe987eeb9bc90180443253d4ea9ad"],["/2016/03/GSC-535/index.html","ab61a62f22865acea8b9b614e21e060c"],["/2016/03/gulpjs-1/index.html","0c89691cc8ec8dfcaedc0e4609ee6b77"],["/2016/03/hexo-theme-paper-white/index.html","a562d8748073c8e6e86ebe75967d706b"],["/2016/04/2016-04-19/index.html","04dc56fc6cefde36cba846029d34489d"],["/2016/06/2016-06-16/index.html","bb121facb433dfb9d721b996dd36f8ee"],["/2016/09/2016-09-18/index.html","5d440035fd90e9b117255e32eac817a5"],["/2016/10/2016-10-27/index.html","5c22e75126bf0a891484b83922e3d5f5"],["/2016/12/config-switchresx-and-2khidpi/index.html","d54758f06bf5477e9ef2f90a0677e924"],["/2016/12/improve-duoshuo/index.html","f139568dff8a2b85e322216e6e95bcb2"],["/2016/12/use-travis-ci-your-blog/index.html","600855b7b89aae7749e011be32576dc0"],["/2017/01/2017-iyahoi/index.html","6c1e18858aa47a4293b92205b5a4dcf4"],["/2017/01/webpack-amd/index.html","1fd5a203562a937de82e80aa11254939"],["/2017/04/kotobukiya-syaoran/index.html","465dd3646544523d975e42f81ec1e3ed"],["/2017/04/macbook-and-surface/index.html","f692681734a4d228a1880da5312c35d1"],["/2017/04/uc-hyakuya-yuichiro/index.html","912be8fd8631cc64fe03e936c5f98f97"],["/2017/06/noragami-seichijunrei/index.html","3086d76310d386065ef813bbefbddfcf"],["/2017/08/cross-compile-55-libev/index.html","1083b4b0dacb0864d966f1420dd401e3"],["/2017/08/explore-service-worker-working-lifetime/index.html","0fa034484e75aaee4728aaa2fe2a68d5"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","010de3b4f9ee5684c77d809705f241af"],["/2017/09/record-user-login-status-methods/index.html","fb130887836ed06fbbbf8d68e5143565"],["/2017/10/vue-typescript-early/index.html","d46eea3dd1441d8f965a88656aa82b27"],["/2018/04/2017-end/index.html","ab09eaf690700ef0c2157e07362f319d"],["/2018/04/twitter-account-activity-api/index.html","a5f360c0f0a4f91ce55dd645e0a2c56b"],["/2018/05/buddy-complex-seichijunrei/index.html","58f8faacc92e1abeccf471e7eb1e772b"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","da0985e051b2921874b337a86751e4dc"],["/2019/05/2019-05-17-google-io-tech/index.html","e68eb8c882d6f3d1f0a4398556769fae"],["/404.html","6b51db23f93f91f9feafad4e7e3f2f3c"],["/about/index.html","a4acc033b6360adadfb5bec673584c86"],["/archives/2015/03/index.html","b10847e8b29fa7fe2d2aafb774fc8b42"],["/archives/2015/04/index.html","17a93821ce3a04dccfcdf1005117d303"],["/archives/2015/05/index.html","005a9defe892d7e024ade6a0688a937b"],["/archives/2015/09/index.html","573d436cd8ff371e2ec3515906c29c4e"],["/archives/2015/12/index.html","8a9ce366179aec4bfa01d5b7158130d1"],["/archives/2015/index.html","8d72ba1a4752ec6d0b32ac563def71dc"],["/archives/2015/page/2/index.html","349724351c18395842f3fc7e89130ac3"],["/archives/2015/page/3/index.html","6b01fbc9f8fba5f1039bc1b6d028bf62"],["/archives/2016/01/index.html","013850af7f6d6d43015a7a595f6a1a1b"],["/archives/2016/03/index.html","9c439cfe2b98d69e3db14f46f1947394"],["/archives/2016/04/index.html","28cb8765318e7be9ce640e9e5ca9da79"],["/archives/2016/06/index.html","969549040ff30a8923923d1a0c81e24f"],["/archives/2016/09/index.html","9c88e7dc7c83ae6f5e236132f9e6e4c1"],["/archives/2016/10/index.html","b4e0f2b41c38aaa4d89d0918e604f4df"],["/archives/2016/12/index.html","cd57ab3e48a46f2a451a4466c4214b4b"],["/archives/2016/index.html","bd80ee15184f9ae39be899b4dbd52c4a"],["/archives/2016/page/2/index.html","e233de077b9e422e6c2c15bd160db9b0"],["/archives/2017/01/index.html","a52c0d2eccf86e2348ab33cd1b15a91a"],["/archives/2017/04/index.html","1f8b99aad2a19e17c17614c08ea76ce8"],["/archives/2017/06/index.html","59aaba691e810dac061311a2dca32d44"],["/archives/2017/08/index.html","0f70123f1154ad9fe1d84d688774f815"],["/archives/2017/09/index.html","88203c80277352db71d6f60bb0de5a88"],["/archives/2017/10/index.html","9ce562ea3682104e35019a9773894ae5"],["/archives/2017/index.html","add7647dbb5fedda70c169cdb52de3b3"],["/archives/2017/page/2/index.html","a178751d234f6c30e0cb831ad613956a"],["/archives/2018/04/index.html","60058d9210b8e5a4ebdda093373bcc50"],["/archives/2018/05/index.html","260ace25ac7d76f5c286b3c8f55fc05f"],["/archives/2018/index.html","b1d0d674678a70741d26905409949c2e"],["/archives/2019/05/index.html","b797fbe5fb005f3c9c11f7270ae3b5af"],["/archives/2019/index.html","6e7abdc4305feba5d1f5a96083898809"],["/archives/index.html","eba2c7880dea92bf21b522f1e8a166f1"],["/archives/page/2/index.html","c50b08d07a81a30fd920f2e37b660cec"],["/archives/page/3/index.html","e856b53aca59531dcf9536dd61212989"],["/archives/page/4/index.html","9913033e81592a1424c525e0ab46979c"],["/archives/page/5/index.html","34541d800b274b3f33f7eccb02c71532"],["/archives/page/6/index.html","446ee32db7e3b186a3bbf20f6646d0fc"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","4133df0abe13ef815a9397620a959678"],["/categories/ACG/Music/self-copy/index.html","47416b412363df9c485aeaa587a1b890"],["/categories/ACG/Travel/index.html","b73a2ca098d63d75c87bd50ffc093f5e"],["/categories/ACG/figures/index.html","8cd14f8292bb6b4ef8ca29ed066e8d04"],["/categories/ACG/index.html","4249b0f362802d09dbc27b146f739bb3"],["/categories/dev/Front-End-Dev/index.html","bb8f872b81c125b31bb9879ba5a07bec"],["/categories/dev/HTML-CSS/index.html","1fb44e169a1f872a7762e3bf14ee85d5"],["/categories/dev/android/index.html","eedca17c0737099c7e4ada50788facb5"],["/categories/dev/cpp/index.html","454057d30c52b43b8b04eb6be79b2789"],["/categories/dev/git/index.html","b66f4afba2ba72c140a6cda55a639734"],["/categories/dev/index.html","6334a793bc83c665bec91bf1d5568f32"],["/categories/dev/java/index.html","ef0faa4d306c0f4599d35a01f6df8d4d"],["/categories/dev/page/2/index.html","033ef2dd6c70bb1490dac6b9012ded7f"],["/categories/maintaince/blog-setup/index.html","e659d26b38804bfc09ae08e042c47f1a"],["/categories/maintaince/index.html","63c94d3034092622bdea4587f0c3ee8d"],["/categories/maintaince/macbook/index.html","40fc808165d1fa5d2d018aa08aff737f"],["/categories/maintaince/router-config/index.html","ddb791a27cffa51d05eb23433ea051f9"],["/categories/notes/index.html","3d83a9a68b10aa15128672f9bd689a6c"],["/categories/tricks/android/index.html","b2be3f454ac5b335a07be85ad1309089"],["/categories/tricks/index.html","dd786899457d16aeeb643a15cdf48123"],["/categories/uncategorized/index.html","1234cb6746821cc804e6b9f000a11312"],["/categories/works/Front-End-Dev/index.html","be6ffe0f129a26d7b9cc4cf8b7f2fb2e"],["/categories/works/csharp-wpf/index.html","ec0882e41d4667f9f2acc67b99dd590f"],["/categories/works/index.html","2e1a5619d044fa77df7f9fcc75183eab"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","aa5cbeae5ffbb65b4948ae1fc46bfbc1"],["/ja/2015/03/WNDR4300-setup-log/index.html","2d8091f8afc3060fbb86d5cc3c94dcc2"],["/ja/2015/03/android-hostname-change/index.html","d92cded0d28fd4ea63949746bf6ae662"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","7a88454f8f7962d141049325081f3555"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","c71d9fa15e85b48a95933903d5b94a56"],["/ja/2015/04/cpp-study-log/index.html","05161137cee91491412212e1622e6948"],["/ja/2015/04/github-pages-ssl/index.html","a8bdd0e09ecd6b44cfecbbdaefbf9f4b"],["/ja/2015/04/hello-world/index.html","601f24f7f1388ac43d4979e62834903b"],["/ja/2015/04/hexo-setup-log/index.html","d3f9a28b119336e24d81ad3a80b7e8a8"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","6be2cdea16aecaca8bed1f5ad92f78ab"],["/ja/2015/05/cpp-inherit/index.html","4500d5d0bddfd4a583b1e039dc0ef333"],["/ja/2015/05/cpp-polymorphism/index.html","9fb95bc22816346f89809c2a83f28881"],["/ja/2015/09/android-root-ota/index.html","2190fcb55fd5d04c07ae03f319a490bd"],["/ja/2015/09/java-learningNotes-1/index.html","35e75fc9fc2f26701ebf1dae83b66cab"],["/ja/2015/09/newblog-newlife-2015/index.html","20aaf7223f66cf4c07853f68c1b6e106"],["/ja/2015/09/router-rebuild-2015/index.html","9ca74fbcd162e0679c4fbe67191578c8"],["/ja/2015/12/2015-12-21/index.html","31250f14a9f0395980cb35d85e0e5fd5"],["/ja/2015/12/PixInTouch/index.html","9d6fff36a0af5bd2eb16c5ffa869b211"],["/ja/2015/12/git-study-1/index.html","1ec14767048ffdc73f3aee129b0d8137"],["/ja/2015/12/hexo-backup-and-migrate/index.html","a9e22cad7866c488d888af40bd9cf046"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","62c3ac6bbdab32d44a627fe9d5266f7c"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","40d50a0ffa67e8297d752819e729d66b"],["/ja/2015/12/router-reconfig-2015/index.html","10860ab0c9dcfb4d9d4729ebc9c4a7c8"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","de59da72951e4cd83428b93705626f9b"],["/ja/2016/01/2016-stepping-further/index.html","99b81f3188ead62cf35c63cb317d69a6"],["/ja/2016/01/Android-Study-1-22/index.html","84948a7aff39da8c4edb45c4917fcd9e"],["/ja/2016/03/2016-03-20/index.html","0948e2a9824eccf424f2270230941289"],["/ja/2016/03/GSC-535/index.html","ff7c46da6223f61d18b3e215db0cd132"],["/ja/2016/03/gulpjs-1/index.html","2ff0189c39e48a8359574a973e5460be"],["/ja/2016/03/hexo-theme-paper-white/index.html","2910baeb4581b524f7e2512599ff900c"],["/ja/2016/04/2016-04-19/index.html","08ae829cd00b1419223f7310b94335f9"],["/ja/2016/06/2016-06-16/index.html","2f10c6f1de1787fd6e330fb63130088e"],["/ja/2016/09/2016-09-18/index.html","e296bfe43b2d656a5a6fe3be0c8c6b4b"],["/ja/2016/10/2016-10-27/index.html","31fec2dcbb008b82531b0ebe1d65f357"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","b12e07c861437a50dd04e1c795f98d16"],["/ja/2016/12/improve-duoshuo/index.html","49847fb8dc8fa2afba73db8ab14f4aa8"],["/ja/2016/12/use-travis-ci-your-blog/index.html","ba3bce9d66e7f46f40d16a40957443f8"],["/ja/2017/01/2017-iyahoi/index.html","b975cbadcc85b4e99d4f199c81bbcc1b"],["/ja/2017/01/webpack-amd/index.html","32e58632fc1c16be38562750bbfd066d"],["/ja/2017/04/kotobukiya-syaoran/index.html","c5b99172f210353a960c631d565b2480"],["/ja/2017/04/macbook-and-surface/index.html","40e4178c53443634c844d0e18a8893bf"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","2979889c32e7c4ee4cf5de37a322ef2c"],["/ja/2017/06/noragami-seichijunrei/index.html","12d9f36f85fd456c45ba80ddba8879a8"],["/ja/2017/08/cross-compile-55-libev/index.html","f34bfd37d9ff5558b3f1512bff2f4727"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","74792315e437461698835ce9e2031f84"],["/ja/2017/08/hello-jp-world/index.html","9aa0ca58bd3f36df875ff2e380a668e8"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","e435146bd16d800ba16c7a4370628a5a"],["/ja/2017/09/record-user-login-status-methods/index.html","d2742409e75b3649fa2eca3150b03ef9"],["/ja/2017/10/vue-typescript-early/index.html","4f0b610f4e6927bd626645e8aed128e2"],["/ja/2018/04/2017-end/index.html","eb8b5f03fa2bf3757b6feaa513cba86d"],["/ja/2018/04/twitter-account-activity-api/index.html","605b31836b2b79b86f04c6895420b9ae"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","04aa8f0681f95d3f2738a0cc63ac33c4"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","3c4075ffcf1c7e3bcad2f0865b400df9"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","eedf69fb2b8b2855763141a0dbec6f12"],["/ja/404.html","f67d1b57ce1e306338d27086f0b94fd9"],["/ja/about/index.html","aeb3e6bc2d70b3e8bdc6652f1102cc2a"],["/ja/archives/2017/08/index.html","e233e186bf928acfcb1fb092c474b963"],["/ja/archives/2017/09/index.html","322136c735974521508efd6fc3429c29"],["/ja/archives/2017/10/index.html","efabaa64aebcf3b946a3af84ce1b3a3d"],["/ja/archives/2017/index.html","4f57fa4c677c93556b3e0786ec07b3f3"],["/ja/archives/2018/04/index.html","e80bcf4aecc13630a07f2bc017cb885f"],["/ja/archives/2018/05/index.html","87d506be1f60eaaaa6fc233f0ed5e5da"],["/ja/archives/2018/index.html","34cca9723ed530e47fb49b593921730e"],["/ja/archives/2019/05/index.html","6e8854f82723bf959893a34cbabd2808"],["/ja/archives/2019/index.html","d53db4ee4904165c67058170a96ae8f9"],["/ja/archives/index.html","7dcd5b0f320fa22200394803de2d295d"],["/ja/categories/ACG/Travel/index.html","3f201e8fbc8fb2f27974ac7a5135a9df"],["/ja/categories/ACG/index.html","b26c416cbd441211f206b5cfc5910273"],["/ja/categories/dev/Front-End-Dev/index.html","e764633590971e5c834fd1a39688f5bb"],["/ja/categories/dev/index.html","ba98eb90c972b80575c78d6657cde74f"],["/ja/categories/uncategorized/index.html","0235303b1863ab153b44e075edb89746"],["/ja/index.html","c54ca404e9179844e73553aa169f57e7"],["/ja/nihongo-test-page/index.html","f0bea40116289656954e40380366e3cc"],["/ja/resume/en/index.html","c4dd5c37d5cd7d83e4dd68c16521ed81"],["/ja/resume/index.html","6234ab4d9ca0349f785679558fdefcd6"],["/ja/resume/ja/index.html","e5ea93e36069d190391bce429b7fd89d"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","ca6daa8d472857e80bda6ee309720bf6"],["/page/2/index.html","0a3ace0aba7f4f694c31b59152bf4aa1"],["/page/3/index.html","ed479af4c13377a22ec34d65253446ba"],["/page/4/index.html","05a1c11f096530b5a54a3e13027d1770"],["/page/5/index.html","0e5529ddf48c6eee1603856743732c91"],["/page/6/index.html","4fabe73d5fed262dd163aa06d08f2ce8"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","f5fc40a1f864b17d88f9945e577301f2"],["/resume/index.html","e701ab7ef606c0e3873efd42e178724b"],["/resume/ja/index.html","282ff0436d6c19265317d88f72cda3ff"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","7e75f0cdc6af7a7c4f51e1ddf7c43a8b"],["/zh-cn/archives/2015/03/index.html","c0736b8a5259870390ffb5fc127291dd"],["/zh-cn/archives/2015/04/index.html","2f161a53c96480b2cc3659a2c59ea0da"],["/zh-cn/archives/2015/05/index.html","73c9d1e27a49187e3b20e05b0fca2e8e"],["/zh-cn/archives/2015/09/index.html","bdc02d444fb828eb8bdef8637f9b5ede"],["/zh-cn/archives/2015/12/index.html","285e4324e1a33f4c064e6d917afcaa0b"],["/zh-cn/archives/2015/index.html","a5d5cba4f429dab67f9e4dbf165d1bcd"],["/zh-cn/archives/2015/page/2/index.html","8a1e6bacf53fcf5f880e4c03bc0c9277"],["/zh-cn/archives/2015/page/3/index.html","1e715fef8d13680f544cb2c96e247ef4"],["/zh-cn/archives/2016/01/index.html","33c29d6652948b16a49c2abf7e215986"],["/zh-cn/archives/2016/03/index.html","e1c85d7ea8c3c9a1ad7b3c1bc10fe4ba"],["/zh-cn/archives/2016/04/index.html","22eefea53897e7d2063043b87281dfa1"],["/zh-cn/archives/2016/06/index.html","b82cacc61539b315902b93ee0f1705cc"],["/zh-cn/archives/2016/09/index.html","70ce8a082fca969d0147432395f097bc"],["/zh-cn/archives/2016/10/index.html","da874457ba55b53250e9ba35fa918b64"],["/zh-cn/archives/2016/12/index.html","42daee0273ac66cb0586711fe491f623"],["/zh-cn/archives/2016/index.html","c5dc6d4c5b65fce08ae93b7189a8760c"],["/zh-cn/archives/2016/page/2/index.html","85b35f536c7915b8afc9b18b1e91a4bc"],["/zh-cn/archives/2017/01/index.html","fcfbc6851f5f711346c3c53c6fb65604"],["/zh-cn/archives/2017/04/index.html","7f0ccc6b50525b71e47bba7523e0afb8"],["/zh-cn/archives/2017/06/index.html","7862442d90885692a0185372250d537c"],["/zh-cn/archives/2017/08/index.html","cca221b9c11f4542f99b9adafb343609"],["/zh-cn/archives/2017/09/index.html","2a95536de7621fd493e6002e0f4a4492"],["/zh-cn/archives/2017/10/index.html","fda15bfe0425d395896a35f2552884d0"],["/zh-cn/archives/2017/index.html","b3de5ce21509b78cb4c67addcbe543a2"],["/zh-cn/archives/2017/page/2/index.html","5cbb61cab56a39069c80d39c7778531a"],["/zh-cn/archives/2018/04/index.html","de5d296e20d0fe17a59eb30ace3ff18e"],["/zh-cn/archives/2018/05/index.html","3f9d94f1b496b5bd7304a2263a652e64"],["/zh-cn/archives/2018/index.html","4cd15fc49625fb78cbac2f6b33d315a9"],["/zh-cn/archives/2019/05/index.html","2987ce1f013016c4ffa66f7b7b6a3ec1"],["/zh-cn/archives/2019/index.html","0f7d697e4976013b610e585d1f3947da"],["/zh-cn/archives/index.html","6a47f46f376247082a341d5ec0b9d64e"],["/zh-cn/archives/page/2/index.html","ea0549ad25bc6c7e21cd310565ff7980"],["/zh-cn/archives/page/3/index.html","e67c27f72127ab4bf55d48fcee59da7e"],["/zh-cn/archives/page/4/index.html","a54425d1c2522742f66176145bfe03ed"],["/zh-cn/archives/page/5/index.html","add80510cb15539d0bea5c914d769e5a"],["/zh-cn/archives/page/6/index.html","3f411d6c7cd406db6406394f06cd9496"],["/zh-cn/categories/ACG/Music/index.html","0c6db4dec997320681b0d1d62ea8b300"],["/zh-cn/categories/ACG/Music/self-copy/index.html","c9be85cd02990ffbb95f0ea4c7ea274b"],["/zh-cn/categories/ACG/Travel/index.html","c9f8b05f9b6ca7223177ac340c21a718"],["/zh-cn/categories/ACG/figures/index.html","d6ea8120cdc674f926705ef56a569c08"],["/zh-cn/categories/ACG/index.html","34005c82fc4a6b46b1bc5fc51c6a5249"],["/zh-cn/categories/dev/Front-End-Dev/index.html","9a0a64b1b109212f48789a02d8020d9e"],["/zh-cn/categories/dev/HTML-CSS/index.html","cccb82e1b81a13609cbb76917b1a7882"],["/zh-cn/categories/dev/android/index.html","473112b24ad6a849a1c049dc2ffe0157"],["/zh-cn/categories/dev/cpp/index.html","6299af66a47bd54833683562db52fac7"],["/zh-cn/categories/dev/git/index.html","7e9de00b08ae7bfaa6d18813798905fb"],["/zh-cn/categories/dev/index.html","c04a2056352176c9f8e9942428a8f001"],["/zh-cn/categories/dev/java/index.html","4a495fd7d381b9116e4107c2ef0f271e"],["/zh-cn/categories/dev/page/2/index.html","18f3225c286d1f86d534d6c1457439d3"],["/zh-cn/categories/maintaince/blog-setup/index.html","338f2eccd9ee02a0360cdd86be78af47"],["/zh-cn/categories/maintaince/index.html","b975ff9514d5a7f86172d8e4d317f458"],["/zh-cn/categories/maintaince/macbook/index.html","f237e9dd42b608a6c637fb13179a878f"],["/zh-cn/categories/maintaince/router-config/index.html","0d10b0efc69d89a4b09993b303858a62"],["/zh-cn/categories/notes/index.html","439cab5c13c75d80ce9141e0869f96c4"],["/zh-cn/categories/tricks/android/index.html","98841f71cbbbd4b9a401427b914a1823"],["/zh-cn/categories/tricks/index.html","451917841dd2fe0773466a381e948336"],["/zh-cn/categories/uncategorized/index.html","0e1df713a9284d0a871d3d77c3f8af2a"],["/zh-cn/categories/works/Front-End-Dev/index.html","1fd5e105f21816c12e2160b37d616079"],["/zh-cn/categories/works/csharp-wpf/index.html","c988887166496113475954ef2b882689"],["/zh-cn/categories/works/index.html","d0aae7e6ad4afb5cc532b014ec19e883"],["/zh-cn/index.html","46688666d64b22d5ad95190bad51155c"],["/zh-cn/page/2/index.html","f6c8fd952e2437ba01f71f30bf678932"],["/zh-cn/page/3/index.html","4d072a712504ac1f6ab22ae7deef50c8"],["/zh-cn/page/4/index.html","d2f59393281a0e616e7893f18399ff90"],["/zh-cn/page/5/index.html","60e46cd66c4449c13ea2f2119dc35989"],["/zh-cn/page/6/index.html","9e536a8a2d9dae11d97f1afbe48ed024"]];
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
