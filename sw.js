/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","63aa4b4ff81d835cce758b3675d2a4e4"],["/2015/03/android-hostname-change/index.html","00cdfa5ad801e8f900835189ea6bdf02"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","408be5cb7f67ff9f5ec68b0e62744c74"],["/2015/04/android-chrome-issues-with-webpage/index.html","a6e853d44596748485220ccba2f5fad6"],["/2015/04/cpp-study-log/index.html","571903c9c99e19721569de5e95671a08"],["/2015/04/github-pages-ssl/index.html","fde0725c2756cf5b815f4263608ec12d"],["/2015/04/hello-world/index.html","f4f62a5053cd8a6c5a8068c65f7aa33f"],["/2015/04/hexo-setup-log/index.html","52c1cdffd46c2ab743b159e8cb7a81b0"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","fcb9dd7d6b342fdcce7f5b3bca4c05af"],["/2015/05/cpp-inherit/index.html","48a9031962a19e2fc92f5c517e45255c"],["/2015/05/cpp-polymorphism/index.html","2077176f06fec4d9370e303d3c55903d"],["/2015/09/android-root-ota/index.html","299ca0e606c408b2641e397f5e1cd45a"],["/2015/09/java-learningNotes-1/index.html","edcd2df5abae4d652355aab89e014a13"],["/2015/09/newblog-newlife-2015/index.html","b1e4ecab5f48d173ef871f11fca85a13"],["/2015/09/router-rebuild-2015/index.html","7f9a14bfa07c873f5ccb475f7d61f69b"],["/2015/12/2015-12-21/index.html","64e75d08338ff972e409e52945563ac3"],["/2015/12/PixInTouch/index.html","88cc1caf2a0749507da520843b0b5803"],["/2015/12/git-study-1/index.html","13b8831f4f67d5dfb45ad9a399eeaac2"],["/2015/12/hexo-backup-and-migrate/index.html","4824c6b87dd34acdf54f7e1cea42e611"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","5663fe43185dc1b2d5b5127d55a1483d"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","bf31f959a5d17ca3f5d23f3bc6f2269a"],["/2015/12/router-reconfig-2015/index.html","e8bd04ef07649eb0d6c507fa1e38cc1f"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","221a56c92e0f450a95900bb94d29b335"],["/2016/01/2016-stepping-further/index.html","92e668be556636f9b49fd5ca3021cc32"],["/2016/01/Android-Study-1-22/index.html","1ba7d81fd75329a76182c415b54f4e50"],["/2016/03/2016-03-20/index.html","d1964971ee11fbe6b3acb3512b8e3dc1"],["/2016/03/GSC-535/index.html","2f74775c22a7e26bf3012cfd48a18388"],["/2016/03/gulpjs-1/index.html","78c30e0bff2bda84446437ec75a6a5cf"],["/2016/03/hexo-theme-paper-white/index.html","e97ac59528bbad8f59acbc58e46c3831"],["/2016/04/2016-04-19/index.html","f19e5a68df15990b29df9253c45955d0"],["/2016/06/2016-06-16/index.html","384e3ab493621a9a87dca19bd9a51c13"],["/2016/09/2016-09-18/index.html","927939fa0e75056410568900f142fbbc"],["/2016/10/2016-10-27/index.html","95a7b611a2c208c358f5022d9a6821ca"],["/2016/12/config-switchresx-and-2khidpi/index.html","f71d2471a30dd092bb1542fd32ec5afa"],["/2016/12/improve-duoshuo/index.html","50b02cc3bc0f3c147471bd7c943dd6ee"],["/2016/12/use-travis-ci-your-blog/index.html","5e6aaa8efb7217b8933f45edac982fd2"],["/2017/01/2017-iyahoi/index.html","0653c49c0933a147ffae7a01e994df9a"],["/2017/01/webpack-amd/index.html","84bdd84e8100b84c7cef5eba34f69ae8"],["/2017/04/kotobukiya-syaoran/index.html","c4e0768a5d2ca3a93d1c84ddb9c9094f"],["/2017/04/macbook-and-surface/index.html","f7f9d4dc6b5131511a151fe1c06f9079"],["/2017/04/uc-hyakuya-yuichiro/index.html","692dca8f2486a8ad4ca6f3955a48d766"],["/2017/06/noragami-seichijunrei/index.html","a91fa6ed35ec6421cdee0e0411121e43"],["/2017/08/cross-compile-55-libev/index.html","08ef9285b678f514d7022c4fb5e4113e"],["/2017/08/explore-service-worker-working-lifetime/index.html","8a2b59c1d3d0868300ad88b579eafcdf"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","f97fef53f174ba9b4cc590329b1b6588"],["/2017/09/record-user-login-status-methods/index.html","aba1c3e252db9174c4340555d699e8b6"],["/2017/10/vue-typescript-early/index.html","8ce7e07bf446a4941c372d6cf96a0696"],["/2018/04/2017-end/index.html","622c9a35757ca7417fb85d85a47986b6"],["/2018/04/twitter-account-activity-api/index.html","06f6dbe8d078e0eb55c467e9e973a635"],["/404.html","d937f90ad18c93fdc933de10aa2048b1"],["/about/index.html","58744175e5fde5eee65c5e4f8e96efba"],["/archives/2015/03/index.html","ee0c00021322f08eec39dd0db91bf70c"],["/archives/2015/04/index.html","0d8cc8ed1ba74e62a7d1c221cf920946"],["/archives/2015/05/index.html","efce5dfb071fbc68b3e3f3c3c8e349b9"],["/archives/2015/09/index.html","e797d3d6c8a046d78ea5ab2a2f57e853"],["/archives/2015/12/index.html","aaa4174836cb14dc6032ecc0c6cfffa0"],["/archives/2015/index.html","6049501634a4cbfa036009ffe0af4c55"],["/archives/2015/page/2/index.html","4140969ec98d5de58a639fe0407ea5b2"],["/archives/2015/page/3/index.html","b4254ae8cacfcbd8e84ac6e39d6a0dd1"],["/archives/2016/01/index.html","88ab4704db5c481d9eb771fb325d66ae"],["/archives/2016/03/index.html","d69b52db61b3e8d4a80a687b7dd92396"],["/archives/2016/04/index.html","82a9354f10e7deee2e34d27f0bcd120e"],["/archives/2016/06/index.html","fbb73ea5002e531a9e331932017ae4fb"],["/archives/2016/09/index.html","d52f073e103e9030cde229eb723a9db3"],["/archives/2016/10/index.html","463c2a7c3d1dd2e8de33f13c99340d34"],["/archives/2016/12/index.html","4f71768b1485f2f5acbc4535ba6cc288"],["/archives/2016/index.html","23d088413993c27d2586a3a01e3f0d4d"],["/archives/2016/page/2/index.html","b1ebee6b1c216cd0b167d0d20963153b"],["/archives/2017/01/index.html","59b5a59fd07090919cc36e14d3c1daa7"],["/archives/2017/04/index.html","676ec11bfedbed26ed0d389a75331573"],["/archives/2017/06/index.html","e4228760f27e3a299f6fb3f9c39ff3e3"],["/archives/2017/08/index.html","0879c66d480de3c6b0e7345d773589ba"],["/archives/2017/09/index.html","92d9201c6f779fe427867de7d5ab4bcc"],["/archives/2017/10/index.html","312335ad53e3a918cf92ca6bfc2da5b7"],["/archives/2017/index.html","367b46e560d437bec228f73baff33cb8"],["/archives/2017/page/2/index.html","ea9955948c01fd1788daa70c7d3fe617"],["/archives/2018/04/index.html","7390138f26a8290698bdc62daaeee500"],["/archives/2018/index.html","80d1b1a2dea6cb04caae2dfefbb3ae6b"],["/archives/index.html","c174417c376af7a2d07347c06f28aedd"],["/archives/page/2/index.html","658223f1eebb42734f94c74bad193e04"],["/archives/page/3/index.html","6f5836c102d666ccfd2b4fa677a1d60e"],["/archives/page/4/index.html","71a688ca3863e8842b9b06c795adf5f6"],["/archives/page/5/index.html","304da36bdf9840e3208d6eeed3032fd0"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","75180a15603e44784e951bc2f9db4065"],["/categories/ACG/Music/self-copy/index.html","0406330472ce794c1a431335f9e901d0"],["/categories/ACG/Travel/index.html","06fb7c2fd417ed2264fc1dd279776f8d"],["/categories/ACG/figures/index.html","4108811ee9e69148c436fb4342b54215"],["/categories/ACG/index.html","eee588061103e95643d5752a509bd05b"],["/categories/dev/Front-End-Dev/index.html","e2bc2d6bc72b4c5a85c665808720d853"],["/categories/dev/HTML-CSS/index.html","5fb23189767d80062b3e0728440f0785"],["/categories/dev/android/index.html","a27ea6272f65e84e55e7e654e755c569"],["/categories/dev/cpp/index.html","0ea7280f83fbd88fb6f34ce65e00a6b0"],["/categories/dev/git/index.html","473ee0b0dff603f3fcaf7423f5307b07"],["/categories/dev/index.html","cf36c3edbd1937e241f18b5400bfcdb3"],["/categories/dev/java/index.html","0d5f544a33039d2b02715598fee19d9b"],["/categories/dev/page/2/index.html","6b07f2238aad4bf72f21a97d6f6d5735"],["/categories/maintaince/blog-setup/index.html","32f3f832ff8e6cf329de6dd7391b7f6e"],["/categories/maintaince/index.html","c5db152ae8879ac2fa4613de9eddac99"],["/categories/maintaince/macbook/index.html","6945954748f4bac17de673c9a1da2e14"],["/categories/maintaince/router-config/index.html","6857b968495390806b6d36057c6e06d8"],["/categories/notes/index.html","edcc04d80709b53bcaf73f092bc623a0"],["/categories/tricks/android/index.html","f679487ca0400a94724a4b94f767a765"],["/categories/tricks/index.html","9f1b135d26e0abf7cf8b182ef715cc7c"],["/categories/uncategorized/index.html","0849091eb397b509e04b6b571800aeb0"],["/categories/works/Front-End-Dev/index.html","921d32a1b578c7a41c09efc7b8ed2b8c"],["/categories/works/csharp-wpf/index.html","36c4f02a1863027a2db79aa6a16ea2f0"],["/categories/works/index.html","d70c4d80ac47eabaaa5c1f7f334af230"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","7eb97ef5d3c3e067410c26abb8036223"],["/ja/2015/03/WNDR4300-setup-log/index.html","9e43a381deb663e84d0569557727baee"],["/ja/2015/03/android-hostname-change/index.html","c35d56e7fa5539540a537255fa10bf1f"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","bffd8cc96aece36f4ce4635ff63febe2"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","8c0ba1e36fb134ffb6efa59a6409912e"],["/ja/2015/04/cpp-study-log/index.html","ee3f493f2ce527c8912742bb12321a0d"],["/ja/2015/04/github-pages-ssl/index.html","32d74bd44ff317184775d6b42277fc40"],["/ja/2015/04/hello-world/index.html","d16358c93f3feec5fe49fd25c25161d8"],["/ja/2015/04/hexo-setup-log/index.html","5bdbc80fc679b5896f385891c4aa7977"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","8a851d914c0066ab10e1d3eea460bd16"],["/ja/2015/05/cpp-inherit/index.html","88b1aabddc76e5648869ed7efeb1ec4d"],["/ja/2015/05/cpp-polymorphism/index.html","391474b61c61c4f43347205255263a79"],["/ja/2015/09/android-root-ota/index.html","225c33fb9ec2eb79c16b9ed0c8601502"],["/ja/2015/09/java-learningNotes-1/index.html","0842f855a243fdcd685ed3bc0fc18af7"],["/ja/2015/09/newblog-newlife-2015/index.html","e594a19426be2e16905138ca7c2874a4"],["/ja/2015/09/router-rebuild-2015/index.html","00e29c2ac7d85a09545bda44abcfb033"],["/ja/2015/12/2015-12-21/index.html","3c24956ddc4461e368dd30ab68cac2bc"],["/ja/2015/12/PixInTouch/index.html","4ff0454aa1879098fd376ee3acaf23b0"],["/ja/2015/12/git-study-1/index.html","bd0666bd7584070a282ede8cd560f542"],["/ja/2015/12/hexo-backup-and-migrate/index.html","f5286af92ef0e950fbdac6b97961aa79"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","ce8be6778d6678bc412155e416ae9640"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","8b9b6b602f48b4357feee3c52727088a"],["/ja/2015/12/router-reconfig-2015/index.html","3186fd5fcd2db2c4ebcc7e85a6762d54"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","feeff53e2c8dd95246ea7f37cf6d7e2b"],["/ja/2016/01/2016-stepping-further/index.html","f3880fa1ba7b4791d44aafc4fc3ea275"],["/ja/2016/01/Android-Study-1-22/index.html","ffbbedef46991e1fd9b75ea075aa7214"],["/ja/2016/03/2016-03-20/index.html","c845ec842527d8a12cc38eb53be3cd58"],["/ja/2016/03/GSC-535/index.html","cd1c74ad1d8083d71df254c008d914f2"],["/ja/2016/03/gulpjs-1/index.html","c160111ae8c91b5e7e3e6e603903d04b"],["/ja/2016/03/hexo-theme-paper-white/index.html","4f31c72f0aaab93f60c4ab70d88121ce"],["/ja/2016/04/2016-04-19/index.html","cf3b0a0c89da9a5f35f90c3cd7f44b1b"],["/ja/2016/06/2016-06-16/index.html","3ffdd2574b98ddba5e8aa4fcf4dd340a"],["/ja/2016/09/2016-09-18/index.html","192533b328ba7bad488441a0b81a8123"],["/ja/2016/10/2016-10-27/index.html","b918f65a383ccd19cd0592ed9d109161"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","82d141c74adcebadd0a339d197722cf0"],["/ja/2016/12/improve-duoshuo/index.html","7759972640d24ea6ef781c1dd8531adb"],["/ja/2016/12/use-travis-ci-your-blog/index.html","3f7832e69d4bd4e3072262591cbde04f"],["/ja/2017/01/2017-iyahoi/index.html","7fee76f1a0a21f3c406cbd54981f7dd7"],["/ja/2017/01/webpack-amd/index.html","269d099ab4e80573f0c847b4be64b10a"],["/ja/2017/04/kotobukiya-syaoran/index.html","f330f56978d8d0cb7da9b3b938a2f538"],["/ja/2017/04/macbook-and-surface/index.html","99edcfbd5be747ea2b2787d6f7064262"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","4af2c3c6dc2d3c51d1e6381c929c551d"],["/ja/2017/06/noragami-seichijunrei/index.html","2754d8ef2f170d3d10868af12d9f1d40"],["/ja/2017/08/cross-compile-55-libev/index.html","2546e8baad8132987d5b3589f940d998"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","a286ee5b8a6a8e08cdf257d3f7e614b9"],["/ja/2017/08/hello-jp-world/index.html","d9053e3499e1a1dcbf49d5b47d81c5fc"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","ed49506ce9067d6281ada35195a95d53"],["/ja/2017/09/record-user-login-status-methods/index.html","e2625b99a572e02b7bf25010d13aa52c"],["/ja/2017/10/vue-typescript-early/index.html","896cba5e61bf23194a84b4fbc4b5808c"],["/ja/2018/04/2017-end/index.html","7a06f615f4624e9e2fa877dd44325ec1"],["/ja/2018/04/twitter-account-activity-api/index.html","d1ff63efc456ccd083362a0ce6ca005d"],["/ja/404.html","f4d3a873f9284bc8bdacdf0044b3a906"],["/ja/about/index.html","dfc17e606e00faf54797dfb66d49e064"],["/ja/archives/2017/08/index.html","3215f43a37f994f68363c4286a8db661"],["/ja/archives/2017/09/index.html","9dac30c73bfe32d24b472f5c5638910b"],["/ja/archives/2017/10/index.html","fcb923af57c20146cdc2d38821c46b86"],["/ja/archives/2017/index.html","7a0bc229473d0987ccf874494060be91"],["/ja/archives/2018/04/index.html","162508816c602788ebdc95cbd8e8c1a2"],["/ja/archives/2018/index.html","0c5c2f8939883293db8e51f4605fff40"],["/ja/archives/index.html","e8668f83d3d271c9cf79ab81b4cc2666"],["/ja/categories/dev/Front-End-Dev/index.html","ae0e1c5cf517977b1c474458243a1585"],["/ja/categories/dev/index.html","190ec19992f47eb87d9c88b0e320fdc6"],["/ja/categories/uncategorized/index.html","e9eeabd7367f9e024b5ba0e863aa225b"],["/ja/index.html","7edd2592d6414c749d204624b5764162"],["/ja/nihongo-test-page/index.html","223ede11a35c0652ecfbea97edb2248e"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","236ab4aea43143dd180aaa6f80ed5a7d"],["/page/2/index.html","c7142e6e8bd7981d117d8dc5822d7dcb"],["/page/3/index.html","83222d8662fcb875622a401cb7608855"],["/page/4/index.html","5add19cb12a53d6f3ea68ea0c1bb4ebf"],["/page/5/index.html","ae9396ba7de655a4e5689ac2fb2e97b1"],["/page/6/index.html","e9b97c27ce22f0e0093b5995ac8d230d"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","fdf6448f2a13823f868ce43f430b71fe"],["/zh-cn/archives/2015/03/index.html","56c03e323c74437fc710349bdd8f229c"],["/zh-cn/archives/2015/04/index.html","615d56a3dd91e37c661b09c327a559a9"],["/zh-cn/archives/2015/05/index.html","0cd737e3b977b1bf50ae18cff4482a60"],["/zh-cn/archives/2015/09/index.html","a9c7a732c5423c6bc02dc3202d79387d"],["/zh-cn/archives/2015/12/index.html","7b03197ee7902b74e04c8f8569ffc813"],["/zh-cn/archives/2015/index.html","d3391ff7d8468ddce3451ce134f063dc"],["/zh-cn/archives/2015/page/2/index.html","b51125fa0c2a99bfa3ec4fdd8894ff66"],["/zh-cn/archives/2015/page/3/index.html","5b46fef13778e51d239cfd6f67ec27a5"],["/zh-cn/archives/2016/01/index.html","aecca929a165c2340360eb9f8fa230c6"],["/zh-cn/archives/2016/03/index.html","aea0633affedda9489415c9a7b0ed587"],["/zh-cn/archives/2016/04/index.html","9e47669998fa2ee8a68d5e0a4c79d99c"],["/zh-cn/archives/2016/06/index.html","483ad4d9d48acddc50ab923539ffcbfd"],["/zh-cn/archives/2016/09/index.html","b44d6a7d30aef93dd5401e38fc9168af"],["/zh-cn/archives/2016/10/index.html","d5167305e8ea28a218d4a497ec0af140"],["/zh-cn/archives/2016/12/index.html","df43286e947eaf800eea0cd8c24c1e11"],["/zh-cn/archives/2016/index.html","8ecdc272d9129794a4f9689af97deb6b"],["/zh-cn/archives/2016/page/2/index.html","29143e6953c967154afc05f3041bddc5"],["/zh-cn/archives/2017/01/index.html","246c6132529a8404ce0a37edf80e846f"],["/zh-cn/archives/2017/04/index.html","dc95e1fa909cdf5f2eada0967de95c8c"],["/zh-cn/archives/2017/06/index.html","5471ae8a906680031ebc5c5f801e4a0f"],["/zh-cn/archives/2017/08/index.html","ff5e2f36a148aab6ccabe31e6e188f51"],["/zh-cn/archives/2017/09/index.html","564f1e805e3a3796eb28b754846ad49b"],["/zh-cn/archives/2017/10/index.html","c4cc30571ee147f54c11221d1135b316"],["/zh-cn/archives/2017/index.html","6554cec595c214e8a1b2d2c318164f10"],["/zh-cn/archives/2017/page/2/index.html","50159219a201722e3e7bae33b6df7037"],["/zh-cn/archives/2018/04/index.html","2ae7eef56a5dd271e30d342b97ec451e"],["/zh-cn/archives/2018/index.html","55082b348667652744a45a7185c4c678"],["/zh-cn/archives/index.html","1c5bc1795506f2219bcd54814c812286"],["/zh-cn/archives/page/2/index.html","84d3c27045bc615323c4c990788f3602"],["/zh-cn/archives/page/3/index.html","f33b49fee91536f3323a3ed6b94d6a4a"],["/zh-cn/archives/page/4/index.html","ceb7dd6e18e397dec170027b0f11959a"],["/zh-cn/archives/page/5/index.html","8c4d08605640ceb1c3bab9eb346d249c"],["/zh-cn/categories/ACG/Music/index.html","5b2ed6a53d1065b20c2f5f2a4629780f"],["/zh-cn/categories/ACG/Music/self-copy/index.html","7b01f7d1af51bfe4476c3e2a2a2d1086"],["/zh-cn/categories/ACG/Travel/index.html","2744a3ead0801807698672ee0f9ab317"],["/zh-cn/categories/ACG/figures/index.html","f976deaf57f8367c53324cae35b41921"],["/zh-cn/categories/ACG/index.html","7e5af4715e2d3ccabe88d4e267532827"],["/zh-cn/categories/dev/Front-End-Dev/index.html","f1e3f1bb3e8424632b76905fbb1e3707"],["/zh-cn/categories/dev/HTML-CSS/index.html","14202330c9f1382b376cee98a1821ec2"],["/zh-cn/categories/dev/android/index.html","bcc7ae354737ece672f11ea59428c6fb"],["/zh-cn/categories/dev/cpp/index.html","e7e9529ecc2c7e52cf7149677d8a4c5e"],["/zh-cn/categories/dev/git/index.html","6dc47dbb41a86aa87832ec00198d62bd"],["/zh-cn/categories/dev/index.html","3633aa9a12bd7fe3c15291a681930519"],["/zh-cn/categories/dev/java/index.html","e2b3377b24faf0c7d95524bf37c4994f"],["/zh-cn/categories/dev/page/2/index.html","21a9e6ba5673d254386d13f997c7f0fe"],["/zh-cn/categories/maintaince/blog-setup/index.html","cc0f5394505824d032347ef5bd45af81"],["/zh-cn/categories/maintaince/index.html","575ea76614ec31eafefdfb6aa366859e"],["/zh-cn/categories/maintaince/macbook/index.html","775c8f371cc2ce605d32a582895a3f7f"],["/zh-cn/categories/maintaince/router-config/index.html","3965c478e965a26366608a17b60a7d29"],["/zh-cn/categories/notes/index.html","8cc63f42eed6bd1ec7789cf37066f882"],["/zh-cn/categories/tricks/android/index.html","6798a563d68b559d545ac9b63637922e"],["/zh-cn/categories/tricks/index.html","e8d42b53a4bfa41aeb11def99f1176df"],["/zh-cn/categories/uncategorized/index.html","ebc3dc52e821edec577adecf07bc6315"],["/zh-cn/categories/works/Front-End-Dev/index.html","8519eaeda2e397145e6c9a585adc0c85"],["/zh-cn/categories/works/csharp-wpf/index.html","acf13658e2f73f8bfeed5d343bfbd9e9"],["/zh-cn/categories/works/index.html","ec74ec52a9a23685ad6056a0e9e7085a"],["/zh-cn/index.html","df3ae2600abd8bd902d0b28cec6088a8"],["/zh-cn/page/2/index.html","483c674171bf2b0c74de090b25151fbf"],["/zh-cn/page/3/index.html","bf7101e5406502be87d95b3a542a7404"],["/zh-cn/page/4/index.html","a7d5bdd7ce9c39bd126037a94f0d41e7"],["/zh-cn/page/5/index.html","17cb148b7187fe38aa4af902a07f2824"]];
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
