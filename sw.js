/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","7a3e22f70cdf1b3b1fb55c81ed60725e"],["/2015/03/android-hostname-change/index.html","5cc98836fd340d47f297317059f5d19a"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","aa9c64d78bec17098c393935235e162e"],["/2015/04/android-chrome-issues-with-webpage/index.html","c615e978443878ac6803c030d9e5e577"],["/2015/04/cpp-study-log/index.html","04c427f16dcf88f825b8141d2e20019f"],["/2015/04/github-pages-ssl/index.html","dad6a6b92e2d8a7e80a03ef06c793e5b"],["/2015/04/hello-world/index.html","77d47a4e264e4ca7a3e60eee2bf8e8a1"],["/2015/04/hexo-setup-log/index.html","930c9647fdfc3dc16f50cf138c4348e8"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","30c6276ecffe9944203c98f8af29946d"],["/2015/05/cpp-inherit/index.html","7011f03a984c1f4f59141fdfc990e1fa"],["/2015/05/cpp-polymorphism/index.html","1113f6ec41830fd70d50510de15d385a"],["/2015/09/android-root-ota/index.html","801d00646648b5d6d86cde2bf2ce2900"],["/2015/09/java-learningNotes-1/index.html","699faeed5fe588e7510a9a8dbf3051bb"],["/2015/09/newblog-newlife-2015/index.html","b4ecd6940ea3b91db3e4fe61c23749bc"],["/2015/09/router-rebuild-2015/index.html","364624da7b231c0b8b1d9a1073d276bb"],["/2015/12/2015-12-21/index.html","bb17cb6f91d91f283b77fe5bcc4edbc4"],["/2015/12/PixInTouch/index.html","5d4b02f986b3343bf3608249b85167ef"],["/2015/12/git-study-1/index.html","d3f540433632c024174659ff9c83add5"],["/2015/12/hexo-backup-and-migrate/index.html","7d01127c975900523c35a839db515dd5"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","6769456574bcdc13e9c579b5a126773e"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","904844b8452c633576346aa11a60a297"],["/2015/12/router-reconfig-2015/index.html","1080501c8c95ee0e9f03e4671cd237b8"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","f12d03c77517750818e743ef7a31b5da"],["/2016/01/2016-stepping-further/index.html","06825159352391a02c986e5705f2a890"],["/2016/01/Android-Study-1-22/index.html","34b3fa6fb63926fc8200534246bb1053"],["/2016/03/2016-03-20/index.html","940f45b973eb3c057fd4bb61aa6cf489"],["/2016/03/GSC-535/index.html","2f625065c77cd87e800f74fbaf28d55c"],["/2016/03/gulpjs-1/index.html","4cedc5f3b8eabc8cb5884153040dbc84"],["/2016/03/hexo-theme-paper-white/index.html","10b103fbd71dc8e9181d937febc0aca8"],["/2016/04/2016-04-19/index.html","3df3cb70e0a3c2d7affeaa6c0cf42d81"],["/2016/06/2016-06-16/index.html","22b66b2c8f44de680472d4b82ac8f8b8"],["/2016/09/2016-09-18/index.html","cc4e3cb41d79a5fc5f2645b2c60bbddf"],["/2016/10/2016-10-27/index.html","d9393467fa38ae69e3f5565079f26186"],["/2016/12/config-switchresx-and-2khidpi/index.html","32102255d22edd0bf66745cf2d4bc046"],["/2016/12/improve-duoshuo/index.html","f874c7c1e5ec047a1ba0ac2805d8e794"],["/2016/12/use-travis-ci-your-blog/index.html","d9cbcfc9eaa58b0b51847ee1f021c204"],["/2017/01/2017-iyahoi/index.html","64fa39b63087c672b24c1d082230a6af"],["/2017/01/webpack-amd/index.html","a81c7856e8fa81e28bebdfc0fd24db05"],["/2017/04/kotobukiya-syaoran/index.html","99e54fb0bd52abd2816ff3cf33680d43"],["/2017/04/macbook-and-surface/index.html","6e56cc11cabd441f88dd5c94afcc98e0"],["/2017/04/uc-hyakuya-yuichiro/index.html","b196915e5ce2fc4b19726c0710175418"],["/2017/06/noragami-seichijunrei/index.html","31d738aced29ae0be97fe48355fd1b8c"],["/2017/08/cross-compile-55-libev/index.html","2f6ff064ddb4fe015c233cca52603ecb"],["/2017/08/explore-service-worker-working-lifetime/index.html","1cb53b07ea35b5dd6a107bf9f141aa88"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","f4f87bd1719b19dcd85b66a142cb264f"],["/2017/09/record-user-login-status-methods/index.html","258297928c84bde4271fe8c2e270b24e"],["/2017/10/vue-typescript-early/index.html","ac429aa4c224902fe3254f154e6c022c"],["/404.html","198eeebc8a20f163ad2a7fcf50547d23"],["/about/index.html","ada7075c59513929d798dc9ba6d7a294"],["/archives/2015/03/index.html","98c92975b1fe9797b9463ab5e5261fb7"],["/archives/2015/04/index.html","f9e206a68ac005947af0d74729846ef7"],["/archives/2015/05/index.html","0b462e4b801cdef58a89d734a5b3f530"],["/archives/2015/09/index.html","1d7af586c96c9c5931e482ba8ec2c21b"],["/archives/2015/12/index.html","1bf51f35830e8a7eb900907663d72f45"],["/archives/2015/index.html","a16842f871018a68bc530139aea9af7a"],["/archives/2015/page/2/index.html","4ce07f9c6a7db2d9012d8493a6aa2763"],["/archives/2015/page/3/index.html","1e39a4b7987e26e7fbb6b80f8c796ebb"],["/archives/2016/01/index.html","31e33c84919a4881ad7cf5bfbd325785"],["/archives/2016/03/index.html","954bb9f7f96b6408d1d6580944a9926d"],["/archives/2016/04/index.html","d7ca152c56d322327c76aa3ce38f694c"],["/archives/2016/06/index.html","af973cfefb8c68ccb1ac518973f3625f"],["/archives/2016/09/index.html","a986077441360a872496f131433d15cf"],["/archives/2016/10/index.html","45d678335d1dc748a4b6ec737c493455"],["/archives/2016/12/index.html","190e871a2077fa55113acddaf1c2011a"],["/archives/2016/index.html","5a3a9c26896ea83c5e6e66ca8261c87a"],["/archives/2016/page/2/index.html","0424a306c5cbc3cd8931530672bd187a"],["/archives/2017/01/index.html","8d45f2a3c033133624ad8ecdef305e63"],["/archives/2017/04/index.html","3148b06e7cd4c66b34d7af7703daf988"],["/archives/2017/06/index.html","6e2a141058a435871098e80c031b188d"],["/archives/2017/08/index.html","76453738586d3b3dac3a4fd0f32ed17e"],["/archives/2017/09/index.html","e481f669255bbb8f321e002886272656"],["/archives/2017/10/index.html","2048d7f173e35a17cc9db4ee274304b2"],["/archives/2017/index.html","c401c648bd3b30ac50446047b61316b1"],["/archives/2017/page/2/index.html","36c1419c88e6338b29dac8ec988a8a8b"],["/archives/index.html","783cfec636797951e3fe330be746de08"],["/archives/page/2/index.html","9f5ef4abdb598e0fb12c539581ca4ad7"],["/archives/page/3/index.html","f499803106471bc971911fded0b9c036"],["/archives/page/4/index.html","8fb8b920e22b1e86afd22367275d7c2b"],["/archives/page/5/index.html","d670b9eb4b2b4636433b9194ed4fa826"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","88e59e576e1e795ce6b1e9d32082c895"],["/categories/ACG/Music/self-copy/index.html","eaece473ac0bef4dc31d182a79174d77"],["/categories/ACG/Travel/index.html","4560f78cc9789aa63cde73d5fadff6c9"],["/categories/ACG/figures/index.html","613af685de7367b31f02aeafee0642fc"],["/categories/ACG/index.html","bcdd423a8c85ece8c446cbc2998c1a4f"],["/categories/dev/Front-End-Dev/index.html","acad44ac418a24edb777522173a04e6a"],["/categories/dev/HTML-CSS/index.html","0958f01c4e2394209fbb204eac8edf39"],["/categories/dev/android/index.html","b33bd4bc6f85165f5843a42934d48040"],["/categories/dev/cpp/index.html","f3f66a456c8cc6630ce2e885b2e6ab1e"],["/categories/dev/git/index.html","50308aa44b0dfd79e08129dc2911a1ed"],["/categories/dev/index.html","736be94cff073628982363d9c5e3961f"],["/categories/dev/java/index.html","32a9998fd38d9ce326f06573af776761"],["/categories/dev/page/2/index.html","3d95cfa22b774ef7b73384324c28fcf3"],["/categories/maintaince/blog-setup/index.html","7eeb037b1bfbf3cd7894b28e0f834414"],["/categories/maintaince/index.html","10e12bc6878abdf22d178cd4bf93960d"],["/categories/maintaince/macbook/index.html","be42562b734fde24a70ea80a13295895"],["/categories/maintaince/router-config/index.html","0f6ea121fa53f903ff02309316fd27ad"],["/categories/notes/index.html","76a460b065eba2eadad55b4ce49b6fc5"],["/categories/tricks/android/index.html","1cfaf6fd0cb7937957af9d3d16ff294c"],["/categories/tricks/index.html","106c61d1e55fa5f9eb62ee78668c7749"],["/categories/uncategorized/index.html","4752078caccd1d0f7434f6d204465dbb"],["/categories/works/Front-End-Dev/index.html","47cceab140b4a05c25d3ae0bec1962d7"],["/categories/works/csharp-wpf/index.html","aaaaad9f839c451c2aabcf1ec83bbb37"],["/categories/works/index.html","b9d21b797bb8dc48d06886971fd257da"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","6a53914add319012b0125b6ce640a9be"],["/ja/2015/03/WNDR4300-setup-log/index.html","b7659f4e58ac41c18638c3442a3ef0c2"],["/ja/2015/03/android-hostname-change/index.html","2f51d9707feb1b62ce8353ea1635bb6e"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","d09531e4c5dcf4b1574e303e34cb57dd"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","e21f5565fc4878597150b21ed9605929"],["/ja/2015/04/cpp-study-log/index.html","4fb80937acb9bfb07095177d171075f2"],["/ja/2015/04/github-pages-ssl/index.html","7072e02fea059380a0632e362376348b"],["/ja/2015/04/hello-world/index.html","b4e73cc22e85a36af029552b3ada8531"],["/ja/2015/04/hexo-setup-log/index.html","c832052f73ec3128530da23321960ab7"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","a4ea6e21ffd4198083a02da5a269b6e7"],["/ja/2015/05/cpp-inherit/index.html","ce93853d89d83e3c0bf86c6ad3b7185e"],["/ja/2015/05/cpp-polymorphism/index.html","f5a84065c6192e24d2eb22d3371d088f"],["/ja/2015/09/android-root-ota/index.html","5a49f55096b96ccaf71ceb94613f4acf"],["/ja/2015/09/java-learningNotes-1/index.html","838be6e2a051523c52d8397fcb2cae36"],["/ja/2015/09/newblog-newlife-2015/index.html","fbac0411eb31f1d5e4af030116e5f936"],["/ja/2015/09/router-rebuild-2015/index.html","99c6b2fa2221932954fa710502d0208c"],["/ja/2015/12/2015-12-21/index.html","8d8c580907ae1df8948ce8c072132959"],["/ja/2015/12/PixInTouch/index.html","8a140eec9dbea54fa97e0a0b0c3b9837"],["/ja/2015/12/git-study-1/index.html","78bd35cda77443e3d80e217ce0240ee6"],["/ja/2015/12/hexo-backup-and-migrate/index.html","9fce2507f2aa0c4059b2bbb59b036df4"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","c8487aeae9ff4bd5474837e18ebb37d0"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","966c9aa8cdb456efb2ae7d2a3ad2903a"],["/ja/2015/12/router-reconfig-2015/index.html","7909866a6881d2406e7220c13135f208"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","58b58ee8119be61271acd23f9aaf53c2"],["/ja/2016/01/2016-stepping-further/index.html","439cd29ef56feda5ba1620038c3a3b28"],["/ja/2016/01/Android-Study-1-22/index.html","a5a3356d4647022fba2118df5d6b2400"],["/ja/2016/03/2016-03-20/index.html","273c3341e05f28688107e532d1f1a79a"],["/ja/2016/03/GSC-535/index.html","ffa1d03f3ed9c31b99f8ce7113012214"],["/ja/2016/03/gulpjs-1/index.html","5eab5c3d894644af70193c48da24b766"],["/ja/2016/03/hexo-theme-paper-white/index.html","1799e53935817368943544b81d8df962"],["/ja/2016/04/2016-04-19/index.html","a996d6daa32aaf67ad2cf41dce416e0c"],["/ja/2016/06/2016-06-16/index.html","fd81abafe256f092bc84df3c21ed9c17"],["/ja/2016/09/2016-09-18/index.html","71a4bda385a6229b90cd1ac66563758a"],["/ja/2016/10/2016-10-27/index.html","7aee53bf3f91b62055110586146aa00e"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","9fab59b2a76e09903eed7b0be76109c1"],["/ja/2016/12/improve-duoshuo/index.html","bc7d21756b900aaeac826c079c35de76"],["/ja/2016/12/use-travis-ci-your-blog/index.html","4adfc153fa9cbd9d16c1f26eb5193009"],["/ja/2017/01/2017-iyahoi/index.html","e792c734bc5aa3c72e01de62b2958f5f"],["/ja/2017/01/webpack-amd/index.html","a3d4aa8a63c0f59ebc3755fe05aceab7"],["/ja/2017/04/kotobukiya-syaoran/index.html","cf8c69eb4bc71cadaf7258382c6c8adf"],["/ja/2017/04/macbook-and-surface/index.html","e331cb65ba1c241a422223b2b34f1761"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","e813ff68834bd22e03e216858c4be724"],["/ja/2017/06/noragami-seichijunrei/index.html","00728e0acb9d8b72ebb228ec0416e649"],["/ja/2017/08/cross-compile-55-libev/index.html","38c16207fb7cba82f6297fcfd8951890"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","f522984cd6e2ed9b18610bcf2015c808"],["/ja/2017/08/hello-jp-world/index.html","fd517381c1895cf31baa71bc1d239a61"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","ec5894f6db8241899a70646a6c75fbf4"],["/ja/2017/09/record-user-login-status-methods/index.html","e2c66680e0180c4663b3053f0d0c9a02"],["/ja/2017/10/vue-typescript-early/index.html","ae238652958f4c7a30f04459a2a96f75"],["/ja/404.html","499db9742c886b2e6238764080f7900c"],["/ja/about/index.html","a72034c27e7b4350c8ed7d483a0c10ec"],["/ja/archives/2017/08/index.html","2b76bfba7d15fbb514504701553aa3a1"],["/ja/archives/2017/09/index.html","49639512a4f8896c24bbc7224d712cc0"],["/ja/archives/2017/10/index.html","d549381b37786cd9a0acd1e807af93ea"],["/ja/archives/2017/index.html","8bc4ca63c84c2093130bda6ded095981"],["/ja/archives/index.html","8ed1d829ea7270526f901c04ea5434bd"],["/ja/categories/dev/Front-End-Dev/index.html","e022b14305d8e034e66e9827d5071082"],["/ja/categories/dev/index.html","b5c17c90af10a7a7a48f7d3f9865ffff"],["/ja/categories/uncategorized/index.html","fdeef750a5057cc563eae2931357d9d3"],["/ja/index.html","db81bb87ad9cd54bade050a213450b37"],["/ja/nihongo-test-page/index.html","bb27e0765632ef11b365b37d117fbe05"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","0b98a3f6df93575fd733cf7b3e5da908"],["/page/2/index.html","4c9c8afc6a749f9e4562d357df228963"],["/page/3/index.html","c1a28624ab13b740be3d91b7200ac947"],["/page/4/index.html","7e4b5c01a38d38b612503b22c219c351"],["/page/5/index.html","66b6f4c431bf0e6669e8f17e38c9635a"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","63f4005b03b98ae10dd7ad23ec8752c4"],["/zh-cn/archives/2015/03/index.html","818be408dd47c6a875ea842572d61b10"],["/zh-cn/archives/2015/04/index.html","261b4c1713c88508b6feb1e0cc8e4b55"],["/zh-cn/archives/2015/05/index.html","fa6f3cdec8eb8da3900c50bac52606d3"],["/zh-cn/archives/2015/09/index.html","fca9ff3f8d3bc79af53ee99efc25dc79"],["/zh-cn/archives/2015/12/index.html","c9a50e060a1a8df581962d7cbc93043a"],["/zh-cn/archives/2015/index.html","b56e91fef759b4a66be7b33e01e13e93"],["/zh-cn/archives/2015/page/2/index.html","f42a2b284afe245cf0c3076c92266b73"],["/zh-cn/archives/2015/page/3/index.html","af41f7d5558b3dfa248e2e25f502bee2"],["/zh-cn/archives/2016/01/index.html","5bce411679bc7009561b69df82ff6176"],["/zh-cn/archives/2016/03/index.html","11312876d7b2cf3afb2a9c7a28aabfeb"],["/zh-cn/archives/2016/04/index.html","04d310667ba2aa83ace9f27b4395745d"],["/zh-cn/archives/2016/06/index.html","fbdf6c703b2103ce9e9d4fcef4a2a5c9"],["/zh-cn/archives/2016/09/index.html","d953c0c6f2bec1efc123aa25a3493951"],["/zh-cn/archives/2016/10/index.html","da7da8843672f942dc1aa00435f11aa5"],["/zh-cn/archives/2016/12/index.html","2e67a278cd2742d55cdd9004d0cedc77"],["/zh-cn/archives/2016/index.html","6878044ffc2f9b78b021ae58ace727b7"],["/zh-cn/archives/2016/page/2/index.html","073533d334c6f997ce79b303d5891f15"],["/zh-cn/archives/2017/01/index.html","413e926463554fb54ad1599028cbed67"],["/zh-cn/archives/2017/04/index.html","1540cca19fa02b212683a8d48d5fba96"],["/zh-cn/archives/2017/06/index.html","a15a7ec96c90ed163f4deb6399e2d7af"],["/zh-cn/archives/2017/08/index.html","882f63e30260a06beb9c02ec79f93dc4"],["/zh-cn/archives/2017/09/index.html","0d0c8596e982988bcdf8814027579170"],["/zh-cn/archives/2017/10/index.html","1da89c230ead4f12f37cde8b06715e1c"],["/zh-cn/archives/2017/index.html","e51884b97c9792d112454dca9ec013f9"],["/zh-cn/archives/2017/page/2/index.html","ffa66089d3560f6857e8c926e0d14eec"],["/zh-cn/archives/index.html","2e3762c9ae51344bdca56477d3083d3b"],["/zh-cn/archives/page/2/index.html","b27b6ee4d11ccb66f4c3878a43e45b38"],["/zh-cn/archives/page/3/index.html","1097a517081840589c8f34ad12cf1556"],["/zh-cn/archives/page/4/index.html","883f685915a1d8d314a458e489b76eb9"],["/zh-cn/archives/page/5/index.html","17f5db508741c43d84d3182aa816d51b"],["/zh-cn/categories/ACG/Music/index.html","2e265d4a2585b1b8bc0808e05a2ebc00"],["/zh-cn/categories/ACG/Music/self-copy/index.html","6a52e954ab255ea7c501bd49e3c47f40"],["/zh-cn/categories/ACG/Travel/index.html","f0f1988159379f7ee09be1e25c523810"],["/zh-cn/categories/ACG/figures/index.html","0100783c3772266d18b84bd11c3bd92c"],["/zh-cn/categories/ACG/index.html","a3f2822668bc8ccd7d81514c44f99716"],["/zh-cn/categories/dev/Front-End-Dev/index.html","2503fe40514126ca4fc746c06565c0c8"],["/zh-cn/categories/dev/HTML-CSS/index.html","84eee2628fe7e92d5f95fbac25c5c524"],["/zh-cn/categories/dev/android/index.html","d39a3148dcee7c639ad36c03cf6f40b4"],["/zh-cn/categories/dev/cpp/index.html","b584f5cc3ead7b15c10c64049e692400"],["/zh-cn/categories/dev/git/index.html","8ce6214ae7f86b9dadda5768f9cde0f0"],["/zh-cn/categories/dev/index.html","ed51e854f8d66727c0404680648e8764"],["/zh-cn/categories/dev/java/index.html","7aecaa14ed9d215047875744a22f0040"],["/zh-cn/categories/dev/page/2/index.html","a8ce291cfb9eae15ae31c0bc68fb8f7b"],["/zh-cn/categories/maintaince/blog-setup/index.html","475d49b0c50cc3634e432649037e5189"],["/zh-cn/categories/maintaince/index.html","8d2aa066608fc216fd40b83502dbc2fd"],["/zh-cn/categories/maintaince/macbook/index.html","9db38f608d0818b67005fb926ab6ffc2"],["/zh-cn/categories/maintaince/router-config/index.html","953b751a863ba4082f9d92643f3c6fe9"],["/zh-cn/categories/notes/index.html","8b84b016c5b04a201bc5a8911be151aa"],["/zh-cn/categories/tricks/android/index.html","78f414da4ac8d3353def2b8879a71986"],["/zh-cn/categories/tricks/index.html","51be4c2d47a8457e5e5ab5e93f6547dc"],["/zh-cn/categories/uncategorized/index.html","69f83a030e87ef8e6dd8b6f0716a74f3"],["/zh-cn/categories/works/Front-End-Dev/index.html","47635e22861c7405e892ede80c1429d1"],["/zh-cn/categories/works/csharp-wpf/index.html","5a90b3ccea7b417b5780e5be5b5c3e58"],["/zh-cn/categories/works/index.html","e738fe901cca2e2bdce219ede223b8f1"],["/zh-cn/index.html","f2ed94e3cfa69c24d6053cdf98707ca1"],["/zh-cn/page/2/index.html","4e7caeaf8c9f8072f5ec98c42c10c6a5"],["/zh-cn/page/3/index.html","40f4124db9acd66ac5abaa323cf5fa92"],["/zh-cn/page/4/index.html","b115072dbd62fd7fd8fde78679d8be4a"],["/zh-cn/page/5/index.html","bc3618b96c835bf585c4f4e773e63529"]];
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
