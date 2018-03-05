/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","f77444b7f813b362396a4ddc1bc52ca5"],["/2015/03/android-hostname-change/index.html","c34c3a5cbf787e6d7107259af078ecce"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","2e62be95079553f9ceb962752c0c213d"],["/2015/04/android-chrome-issues-with-webpage/index.html","60c1f1a60ce3782f68d8a367f7e50ddc"],["/2015/04/cpp-study-log/index.html","91797119e173907eaed78a4eea798455"],["/2015/04/github-pages-ssl/index.html","79a1b64ab60db187fd2fdbc03df77c2b"],["/2015/04/hello-world/index.html","50b91c548b423d6275fc6db3efa7b090"],["/2015/04/hexo-setup-log/index.html","e875cd2ebd0fc547f56ea4628e266fd9"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","d2668ec310624a7aee41dae6e65b1650"],["/2015/05/cpp-inherit/index.html","209df305b1c9bdeb1b1f1cfb4ca18b8a"],["/2015/05/cpp-polymorphism/index.html","2088f87454138c8f9f5bbbfb8e2f4f7c"],["/2015/09/android-root-ota/index.html","051efac680ac97d7406935e822c9c5b5"],["/2015/09/java-learningNotes-1/index.html","18672268f1d7a8aab234582433978291"],["/2015/09/newblog-newlife-2015/index.html","0cf0746ee82d5cf2b8395d026749d48c"],["/2015/09/router-rebuild-2015/index.html","5ccebdc3f5e60a105d2c88ef9c13e71d"],["/2015/12/2015-12-21/index.html","b3d6132d61cad1e816d4e4e73f91f00c"],["/2015/12/PixInTouch/index.html","0193694952220aded59fd12e29eb3e45"],["/2015/12/git-study-1/index.html","b5de992b5dc2e77cd8b2a5172d435d6a"],["/2015/12/hexo-backup-and-migrate/index.html","b594ce7ff2c1c0c5508c14a33578f3d3"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","78d4f5897708fe54e5124e159c243b25"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","136cf9c061559951a5107ac17e3cf4d0"],["/2015/12/router-reconfig-2015/index.html","a78e58f6c126753a9e3e8356b2402eb1"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","8416f3da62ab3dddf0bab5917157fd60"],["/2016/01/2016-stepping-further/index.html","2625bfe42589d32680be142510ccd61f"],["/2016/01/Android-Study-1-22/index.html","ea1aede62ab30438fc6b81ce66f3ffff"],["/2016/03/2016-03-20/index.html","d2e6b758a2e2768b1226b5887497e464"],["/2016/03/GSC-535/index.html","f19783584245efe17ec227e26e9470fe"],["/2016/03/gulpjs-1/index.html","718d9608c89912cd2c83a80fa92ffe8f"],["/2016/03/hexo-theme-paper-white/index.html","12c12e542246b5256330e64a5fc6dbec"],["/2016/04/2016-04-19/index.html","d6ce2fee41d251e0379c65116695da74"],["/2016/06/2016-06-16/index.html","f3e1f84f83376525788d7ef14a6e2282"],["/2016/09/2016-09-18/index.html","d9a48995097a39c36ce0353ccd1bfd13"],["/2016/10/2016-10-27/index.html","8f3f49b90aad8a49ca1ca6c75143ee5a"],["/2016/12/config-switchresx-and-2khidpi/index.html","1b87196ae70f0798cde6e83b4a80f599"],["/2016/12/improve-duoshuo/index.html","e5f4ac948748a652ec2ab2182cbb0ef0"],["/2016/12/use-travis-ci-your-blog/index.html","1ab1f3d56fce1b510a1129cbbebbf8e9"],["/2017/01/2017-iyahoi/index.html","3994424cc680d809096e6df62a5cec1d"],["/2017/01/webpack-amd/index.html","06ddd290c80b9bd2b53f190e5d9cbab9"],["/2017/04/kotobukiya-syaoran/index.html","d6d155610a14b3c5942db19927886c58"],["/2017/04/macbook-and-surface/index.html","b6a6e32ec710a83855224445cfc6dd5d"],["/2017/04/uc-hyakuya-yuichiro/index.html","0768a78904b9ae5ac691c0a45db3f3de"],["/2017/06/noragami-seichijunrei/index.html","0fbb5bf640fd87087c0267ec6f793efe"],["/2017/08/cross-compile-55-libev/index.html","7955a27850def1984da7f510ccd2c009"],["/2017/08/explore-service-worker-working-lifetime/index.html","6b20c5b9318cf7196f55789d9b42c1b3"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","9231668cbe110de9d0d6e74f15de7d52"],["/2017/09/record-user-login-status-methods/index.html","58af30fb41ed29ebb222e02154f9890f"],["/2017/10/vue-typescript-early/index.html","e11993362952d3fd63e5949a0a5dabd7"],["/404.html","8fcd1fc241425745569fb5ea1c666e6a"],["/about/index.html","3f449dd91b11a5de11e86963ebf8ec1d"],["/archives/2015/03/index.html","310368b00a5b66d9eb06d02a2abbd56c"],["/archives/2015/04/index.html","f90d8f1bad1701ef23066c2a97fb0443"],["/archives/2015/05/index.html","50657b4a7097b039ac2a2b4bd01c705a"],["/archives/2015/09/index.html","4d91620fbfed930decb23feba35b98da"],["/archives/2015/12/index.html","3371b7cee2de5b32d7ec0b3d98751c27"],["/archives/2015/index.html","ced1cef477354936695f1635947a0049"],["/archives/2015/page/2/index.html","e875b62e78e90122bb8e447a13a74751"],["/archives/2015/page/3/index.html","d3093efc4a9510001fdba5b5ff1bdeab"],["/archives/2016/01/index.html","fd7d44028be47fceaeb486ceaf866b95"],["/archives/2016/03/index.html","bea6787ab8411577e5c2a9339133bcf0"],["/archives/2016/04/index.html","5afddf06575500fd0bd4b9a1300ed735"],["/archives/2016/06/index.html","72138eb1ff5191fe11dbe67264b05fd4"],["/archives/2016/09/index.html","f0433cfd19c3a9ac9c956661fd34cb6e"],["/archives/2016/10/index.html","7d6e0ea6572e4c781718741ab1a0f6cb"],["/archives/2016/12/index.html","9fd9469662f2e77487e7066f8b229cd6"],["/archives/2016/index.html","fdd60dbfb06d45f9669bd91daf4e7535"],["/archives/2016/page/2/index.html","d06a0c041a4408e5a584f716c91ff378"],["/archives/2017/01/index.html","d63c840e7f9883aba91c36ee7c1ff69f"],["/archives/2017/04/index.html","a9b8039ee83459dd87125977c83e6e19"],["/archives/2017/06/index.html","17d8d95c7136d71103a9c165c5425da1"],["/archives/2017/08/index.html","174d9394f8efb37bbd74f6a9487d9d31"],["/archives/2017/09/index.html","50ead4a171e173e0e804a286ea52e7e4"],["/archives/2017/10/index.html","7fb90d436bf4f05d2f1e90921f0485ad"],["/archives/2017/index.html","0315c78713e8156e001559e737a6a10a"],["/archives/2017/page/2/index.html","156520045e6f4453e592d99864fdd4d5"],["/archives/index.html","91e24422774138b9abd34daac2886d1a"],["/archives/page/2/index.html","79a5d7d9fbdb84bfa999fa41985d06b0"],["/archives/page/3/index.html","87a0f061efd6add441ce4c9bcf8bd3fc"],["/archives/page/4/index.html","6b0084b1d2d9ae4a3f624e5c660ea2e4"],["/archives/page/5/index.html","eb98b6301318c1ff3e36448f0c613ac8"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","d548f94f923d395782d6ff0f19831cb6"],["/categories/ACG/Music/self-copy/index.html","d3b4dc8d654c71a05c3ce6a3335ac087"],["/categories/ACG/Travel/index.html","9639bb1635a7a7d9114f46e5e2f53f6b"],["/categories/ACG/figures/index.html","b27cd3d7247df1ced19f8cd2b470dc30"],["/categories/ACG/index.html","75b0565e21f0eacc9304286ffce1ee66"],["/categories/dev/Front-End-Dev/index.html","8dfcece9c5c0615b2f0115e2359fde49"],["/categories/dev/HTML-CSS/index.html","d3f62b17c823707400396a9e61f2623f"],["/categories/dev/android/index.html","8f02385af8ee4b4834341da032dfd29c"],["/categories/dev/cpp/index.html","0d5ff7a7b94d957e899ced317e02c337"],["/categories/dev/git/index.html","ac1e85d37b02da31de771ee64d174694"],["/categories/dev/index.html","c614b02891f8fd77cc0278d94ffed278"],["/categories/dev/java/index.html","84e1d2df995fd281ede4efc8f5295b2d"],["/categories/dev/page/2/index.html","a87d44296fd4033a9ac528219f000b42"],["/categories/maintaince/blog-setup/index.html","27b5af98fc1d5562ebf2d8ad7c9568f1"],["/categories/maintaince/index.html","aa6611e9db51a0bd060e958b15f0f439"],["/categories/maintaince/macbook/index.html","700c49748a8ffb77cd44d67c6e76a552"],["/categories/maintaince/router-config/index.html","8b02b85955d983faff4c2d9ae81c86a5"],["/categories/notes/index.html","fb729e10887efda23c74cd5fa711a9a0"],["/categories/tricks/android/index.html","7b4b48d31c6fe127b6fd80a633e52a09"],["/categories/tricks/index.html","d2083345faa83f4b65166b5c16bff050"],["/categories/uncategorized/index.html","8f2891d5b4f190d93973cddda4500d54"],["/categories/works/Front-End-Dev/index.html","78b98689ba0560f4505b252a956e7df7"],["/categories/works/csharp-wpf/index.html","e231795b4a34046e74947a6499389b44"],["/categories/works/index.html","2a2db40ae729c99b691220860bfa7027"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","ac7788b8331d206baf17f3c3fabd688d"],["/ja/2015/03/WNDR4300-setup-log/index.html","d6146bc73f4d4a89ddfb50db84c69e90"],["/ja/2015/03/android-hostname-change/index.html","15e40d0c6dbbbc8641e45136f601630f"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","300b4a7be846a3edbfc9549ca5485293"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","fe6c26090e9e5edd23dc62e84224938c"],["/ja/2015/04/cpp-study-log/index.html","3e62818b8aa314a2ff3d70d1c2730692"],["/ja/2015/04/github-pages-ssl/index.html","df4481fbfd8739ccb2758c5774c7f6cc"],["/ja/2015/04/hello-world/index.html","93796ce578b2e810c4e2a94cc987530b"],["/ja/2015/04/hexo-setup-log/index.html","f5fb7a42ce4cc70e5a97c3dbfb1ad58d"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","c2c0f8233920dfac5d6bed2aba0ce4cd"],["/ja/2015/05/cpp-inherit/index.html","fab94bda240eb72c78f18064ec819c5e"],["/ja/2015/05/cpp-polymorphism/index.html","d9c17744025db8ca4f64fd65d0f12286"],["/ja/2015/09/android-root-ota/index.html","4bd0de26444f9b7dc3883519153054ba"],["/ja/2015/09/java-learningNotes-1/index.html","1ba67f0f3809e2425996e9d6e3230289"],["/ja/2015/09/newblog-newlife-2015/index.html","274871d478b25d834887888caeb1ae96"],["/ja/2015/09/router-rebuild-2015/index.html","7ace6e1d029f3a01c116bc44dee0d2ac"],["/ja/2015/12/2015-12-21/index.html","01c7f7aa94b96e97357b0b757c25ebf4"],["/ja/2015/12/PixInTouch/index.html","cf94eea5673553d65776595087db45c7"],["/ja/2015/12/git-study-1/index.html","bc5a57095400bd5cdbff3ee7492a0f23"],["/ja/2015/12/hexo-backup-and-migrate/index.html","de933883ef45833d14be93b431845d03"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","95871bc4099b54afcd45fd7069bd8d8b"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","3b30ba3608254eb78b4769c1ffe8b9a3"],["/ja/2015/12/router-reconfig-2015/index.html","78886063d970e7b65e0fbcd2a9b30d87"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","08bff0762e6122cf1d0daefd6d8025f1"],["/ja/2016/01/2016-stepping-further/index.html","1e3a3964e83adc906c771c305c745792"],["/ja/2016/01/Android-Study-1-22/index.html","2bce5e493a65f8a75cc20d1c99da771e"],["/ja/2016/03/2016-03-20/index.html","2a5d179d68af60199902be20bc9ed290"],["/ja/2016/03/GSC-535/index.html","726420dcfe178e44a5dce1807d515028"],["/ja/2016/03/gulpjs-1/index.html","5046ae0061e9516a993fa3540c01e724"],["/ja/2016/03/hexo-theme-paper-white/index.html","e062d8beac484a317f7375977ff425a9"],["/ja/2016/04/2016-04-19/index.html","d0edd816e9c4743e75e91ececb814869"],["/ja/2016/06/2016-06-16/index.html","6fdc65b14d819eda4473dd6e2aba2585"],["/ja/2016/09/2016-09-18/index.html","8033e7ca977cba011f73ff8981eadd24"],["/ja/2016/10/2016-10-27/index.html","a2b62fe6dc53d8eed8cce5d12e1b0602"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","cd3d70ec781f283d2a4e4f99c7fbc7ea"],["/ja/2016/12/improve-duoshuo/index.html","b1cc1bde4ed8dcd7d464624a67581243"],["/ja/2016/12/use-travis-ci-your-blog/index.html","9d7749b5886e9d81381c0bc004a47355"],["/ja/2017/01/2017-iyahoi/index.html","121ae18e41a6f7f16fcd34f2b1f82760"],["/ja/2017/01/webpack-amd/index.html","a431cb779a29a4f976ca3449f82a7409"],["/ja/2017/04/kotobukiya-syaoran/index.html","14e004e71d5331a0a12fe51157cf381e"],["/ja/2017/04/macbook-and-surface/index.html","5f4a43368898d64bda20ca66342f3872"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","50be2301272c6c353c4ca696d8ed549e"],["/ja/2017/06/noragami-seichijunrei/index.html","e93b65c71be39bfefa06d51961779bc0"],["/ja/2017/08/cross-compile-55-libev/index.html","1591c0433a7e77bc12d73553f333bbf6"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","f19a09d44cb1d48d0e6443357cc1ebdb"],["/ja/2017/08/hello-jp-world/index.html","1ae0738a7e2092f5c913d9e735ecfdfd"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","d21cc8a9d8913d59737c877e3c0b23ad"],["/ja/2017/09/record-user-login-status-methods/index.html","c5204f22a6a7c382e8efe3520517b5c2"],["/ja/2017/10/vue-typescript-early/index.html","ca2115f7263885c8df112e38bef59090"],["/ja/404.html","76a42647880adcbb328daa50c85e8846"],["/ja/about/index.html","6cfcb100ec54803ab4cdc3d8440810ad"],["/ja/archives/2017/08/index.html","655edd5bfcd4394ff66bdf959f00edfc"],["/ja/archives/2017/09/index.html","561ad0533248f4012d3f82f37d12ac3e"],["/ja/archives/2017/10/index.html","d3a80d8ec29c21929bb5e4c2a64ce98f"],["/ja/archives/2017/index.html","4229c66106b3c898a3b7d92313ae3096"],["/ja/archives/index.html","9dab4fcd920c8c74b363f186961822e2"],["/ja/categories/dev/Front-End-Dev/index.html","cb8275c2279104350b5192ad109893f2"],["/ja/categories/dev/index.html","77de7a33c5bdc474eb152a191b5539ad"],["/ja/categories/uncategorized/index.html","3affc91445dca03f04de5e509df83a54"],["/ja/index.html","084f62f9250f375266fbb8339fc14571"],["/ja/nihongo-test-page/index.html","65d248d5ee08da5174ffc99a47f777da"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","9958a9080f35d5556c13afdbd0f89a44"],["/page/2/index.html","b1aaf578bd94211e27eb6ec6344f993d"],["/page/3/index.html","261f99cf1f48368c85ee89da4e9658a9"],["/page/4/index.html","2050d06d68d116b63b96f82b57feec7c"],["/page/5/index.html","9b7972f675c9796af2e4f42f249c2daf"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","d64e7459f32b8f83a62f9efc9535dae8"],["/zh-cn/archives/2015/03/index.html","27ad8bf028d8a3e7e06ec11de5148c2a"],["/zh-cn/archives/2015/04/index.html","fcd512cf358967b30f80f09523753c5f"],["/zh-cn/archives/2015/05/index.html","01881798c969d46fa24b7b20fb5c91fc"],["/zh-cn/archives/2015/09/index.html","51d8fc04b09b963a49c8a7063e250d73"],["/zh-cn/archives/2015/12/index.html","cb1f3a1d44ea609cd90f8eb01435e4c1"],["/zh-cn/archives/2015/index.html","0d6465c17fca8d7b038d367b4570fdd8"],["/zh-cn/archives/2015/page/2/index.html","c7e33716d0b62b570799a17923b50115"],["/zh-cn/archives/2015/page/3/index.html","47fdf168ee66787a7a36187906df9ab8"],["/zh-cn/archives/2016/01/index.html","d32a747cc747d90765fd5b3581f1f99f"],["/zh-cn/archives/2016/03/index.html","fb9bf4cb38ae1a844a71e658a2470f40"],["/zh-cn/archives/2016/04/index.html","3d4765701e46b2606499d8216ecc4679"],["/zh-cn/archives/2016/06/index.html","db3fbe8443c68ccdf4fc0480bad59733"],["/zh-cn/archives/2016/09/index.html","894a5d76b157b679bca547153ed7bb2f"],["/zh-cn/archives/2016/10/index.html","3bba4d0d1740a0277b2c21496fde38ef"],["/zh-cn/archives/2016/12/index.html","fa722d4d510e84aa6520a508cfee44a3"],["/zh-cn/archives/2016/index.html","b39d4760d4a9dac84a54bcdab33d1853"],["/zh-cn/archives/2016/page/2/index.html","3af7f74104596c47b9c4d13aaee59ffd"],["/zh-cn/archives/2017/01/index.html","78020f403761bb45ca5c8d98bd12d988"],["/zh-cn/archives/2017/04/index.html","a2e6e88f85623565100bec79c54bb0fd"],["/zh-cn/archives/2017/06/index.html","99a66f67e4c0f1878b48fd0b77f5d07f"],["/zh-cn/archives/2017/08/index.html","4b51484ac45c61e81804def1eb9f27a7"],["/zh-cn/archives/2017/09/index.html","e46547f14b8756810eefb377b232a342"],["/zh-cn/archives/2017/10/index.html","b1d781a8282dfca357f31261cfce265c"],["/zh-cn/archives/2017/index.html","5b7544d593dd276b6721b020bfce5780"],["/zh-cn/archives/2017/page/2/index.html","1f9345eca8a9f045e338ff2c1ad8bb59"],["/zh-cn/archives/index.html","eef701d9c1d3de47b66c7b977e9e9812"],["/zh-cn/archives/page/2/index.html","bee1d991d647296e8f2d172c6a8051d0"],["/zh-cn/archives/page/3/index.html","dd7a5a14bb1aba056543be8b642b74f2"],["/zh-cn/archives/page/4/index.html","d71ccbc617c2e6ee1f4efa0c78e74234"],["/zh-cn/archives/page/5/index.html","1af81aaf55cdedb1c5aa024be70fd404"],["/zh-cn/categories/ACG/Music/index.html","4b0d68c87b7f58f2291892ebe93b92bf"],["/zh-cn/categories/ACG/Music/self-copy/index.html","e6d80d62f4536f9bd61ae6743e3dee70"],["/zh-cn/categories/ACG/Travel/index.html","67d29f9fc26447e73cd78a9310972f6f"],["/zh-cn/categories/ACG/figures/index.html","0610132bbdbdf4ffed3bdd7e037c5c00"],["/zh-cn/categories/ACG/index.html","108a53c784ea2eb845c19ac1411a89b5"],["/zh-cn/categories/dev/Front-End-Dev/index.html","3915182ceec3c57ea60a5ccaed3ae276"],["/zh-cn/categories/dev/HTML-CSS/index.html","ccab14ee2c81e341d472fed9b368e516"],["/zh-cn/categories/dev/android/index.html","05f70de53ac1f9daee082717cfa9c216"],["/zh-cn/categories/dev/cpp/index.html","1680cb817938a95246ae7d6df301064d"],["/zh-cn/categories/dev/git/index.html","9ac6eca6a22d6dc7c90f9ef43959a67b"],["/zh-cn/categories/dev/index.html","2c93be463ff4fa7aca8466e50f65a5cc"],["/zh-cn/categories/dev/java/index.html","874d5c057769527d1862f4d57c79bb90"],["/zh-cn/categories/dev/page/2/index.html","3c80a4cfe3900a8578322cb01811d973"],["/zh-cn/categories/maintaince/blog-setup/index.html","5082ca8a038428023f688957d566e9bb"],["/zh-cn/categories/maintaince/index.html","9122a2df42aecc99b1c11ddfb8ec912e"],["/zh-cn/categories/maintaince/macbook/index.html","94a9dd406f3de9c33e4bc02cf346c3d9"],["/zh-cn/categories/maintaince/router-config/index.html","7f55a0f443df5fab6c8bc066381a91f1"],["/zh-cn/categories/notes/index.html","3b57911090003b33713ecd77781fb9bf"],["/zh-cn/categories/tricks/android/index.html","3243d363ffdb753d09f627caa56af347"],["/zh-cn/categories/tricks/index.html","1e3976b890889652435aee131429190a"],["/zh-cn/categories/uncategorized/index.html","ed5e58f171fe679a1c47ccda1535e057"],["/zh-cn/categories/works/Front-End-Dev/index.html","310bcb9ff2bb82b4eee6c5077ae5cf71"],["/zh-cn/categories/works/csharp-wpf/index.html","9097b029307d39ddac3c20f68a781ce5"],["/zh-cn/categories/works/index.html","bed133b41ac285577ed1798c4dd19236"],["/zh-cn/index.html","2e9d206a1dbd709bcf75eb30f7dee6d2"],["/zh-cn/page/2/index.html","4cf5d1440fab2dc2f031f7e5879bc83a"],["/zh-cn/page/3/index.html","4d6427eb70e25afa10ce7d93c2082b35"],["/zh-cn/page/4/index.html","7758c2c3b8624032015e851feb2e8004"],["/zh-cn/page/5/index.html","3acdcd0932741af57c68f210e2ff608f"]];
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
