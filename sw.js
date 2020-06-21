/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","31fa66dcfbc560d037e9ff8f32401501"],["/2015/03/android-hostname-change/index.html","b32f6598cac6f7cf64d88fd5936e20b1"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","47d5a6725aa4e4f84f024b2cb15b3c30"],["/2015/04/android-chrome-issues-with-webpage/index.html","05a0cbec7cf2fbc933592ae2c07845e7"],["/2015/04/cpp-study-log/index.html","8e9ac4b01139fe410a2795ee2399401f"],["/2015/04/github-pages-ssl/index.html","7d0ecdda6daa3a574ce964617fbd29aa"],["/2015/04/hello-world/index.html","29e0d2fce0d75b4c6ef6b56c47abe691"],["/2015/04/hexo-setup-log/index.html","af4533403bc3e436466df0914a5c9e0f"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","49610d8654128f594838c1018b969c09"],["/2015/05/cpp-inherit/index.html","fe2c96b0fd3436adbb77dce9cec65a77"],["/2015/05/cpp-polymorphism/index.html","def088c6af2aa5e0b86d8266437b91ba"],["/2015/09/android-root-ota/index.html","d35bd3edd4fb53e97d2a42199725f31a"],["/2015/09/java-learningNotes-1/index.html","a6aa5c1cab4e28b749a2a31ff623aa81"],["/2015/09/newblog-newlife-2015/index.html","2770577a582466e8ed7135b0b5625b26"],["/2015/09/router-rebuild-2015/index.html","999189d8df1c9b27f6fb8d05fdb086d8"],["/2015/12/2015-12-21/index.html","7d96468590aa6650abc737d04b5cffd4"],["/2015/12/PixInTouch/index.html","aa5b5a23c5a76cdee9dfbaa1151c9d8e"],["/2015/12/git-study-1/index.html","a0586c5d51a9d69511a710a7f1df2b81"],["/2015/12/hexo-backup-and-migrate/index.html","317c7265270154f2f392c06b20f4ad9c"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","02837a64b05a24c50089bb0297055f15"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","f433151c865bee18698eb0f451044e17"],["/2015/12/router-reconfig-2015/index.html","742fe3cb1835d6c816f4b3a96e9a337d"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","4a6886a94622a2da30599b94f5025fa1"],["/2016/01/2016-stepping-further/index.html","123604f32e588b978d379122ce8bbce4"],["/2016/01/Android-Study-1-22/index.html","1cd26fc8cbb764696a9eabb05013a512"],["/2016/03/2016-03-20/index.html","8e935ff174543b871fe2f8859267ac46"],["/2016/03/GSC-535/index.html","11eada0da6bf32aafb636a84dbdb778e"],["/2016/03/gulpjs-1/index.html","ba2ad6b43803d903b56d3578aa0a5971"],["/2016/03/hexo-theme-paper-white/index.html","939015e6818325aa63338e80da2a7069"],["/2016/04/2016-04-19/index.html","6dd329a255e0f17afcf9309e354a03a6"],["/2016/06/2016-06-16/index.html","72da7c2902d7cade06228b7caeaa09aa"],["/2016/09/2016-09-18/index.html","1cbd8802713757cc4f60f0689ca9a4eb"],["/2016/10/2016-10-27/index.html","418868594502b80e940f435ddb6ea9ec"],["/2016/12/config-switchresx-and-2khidpi/index.html","aefa996c4787e6cbc2833c8887e5e4ff"],["/2016/12/improve-duoshuo/index.html","11efa442bb6fff2c3ea3d2a3ec364b1b"],["/2016/12/use-travis-ci-your-blog/index.html","2a1056ad4b65fdb501077bbd9df5a5fd"],["/2017/01/2017-iyahoi/index.html","17f076d4e64d7cf68606f8d029c6fcb0"],["/2017/01/webpack-amd/index.html","4c2055a80c2b185c7249cc5d4c7b5844"],["/2017/04/kotobukiya-syaoran/index.html","721db49c223baf82659a9f37f2a68e1e"],["/2017/04/macbook-and-surface/index.html","b308611d9834737fdae8cd673012e73f"],["/2017/04/uc-hyakuya-yuichiro/index.html","0c825c00647f4b71adb1a5bf86a21859"],["/2017/06/noragami-seichijunrei/index.html","48fe5c694ca2d7a1328345e794ea6ed7"],["/2017/08/cross-compile-55-libev/index.html","96f81653618677c2aede2b238ffad4aa"],["/2017/08/explore-service-worker-working-lifetime/index.html","19da328297a86de9ad0d430575eb6666"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","33c318983899c6f66d774679ff41ea44"],["/2017/09/record-user-login-status-methods/index.html","1ff84e20747b7e88217e648deba242dd"],["/2017/10/vue-typescript-early/index.html","e30326f9cfb5cd4792719e26aa931e6c"],["/2018/04/2017-end/index.html","750095ff5b5cbfc152cb349a81a15d2a"],["/2018/04/twitter-account-activity-api/index.html","49922bd315f5ca07dcc0799f41c37326"],["/2018/05/buddy-complex-seichijunrei/index.html","f0ed654791a93607fff1901f028a6674"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","8bb4a2c32c95086c6bf532d6a2b376d5"],["/2019/05/2019-05-17-google-io-tech/index.html","a852d6382c553dbae6a3a5282b0ac6b0"],["/2020/06/try-serverless/index.html","63f7200c754741e882803510b4bbd941"],["/404.html","1492785bb6b24e62328f02588f40ea41"],["/about/index.html","bab7b2be7b3be89c85f0d480cedbdc1b"],["/archives/2015/03/index.html","8c71dd6ac4b89e9c7d4a3094bc99cd73"],["/archives/2015/04/index.html","04d7a81387fceffc0e1fd2097f04c702"],["/archives/2015/05/index.html","9debd02a407be761181f4f1e5596227e"],["/archives/2015/09/index.html","e67c55ce3f99076bd90950b16c7d7789"],["/archives/2015/12/index.html","54b8780ccac801c7998c53c787dbc8a8"],["/archives/2015/index.html","810bc140f6ecb86325b39f2c0c037c89"],["/archives/2015/page/2/index.html","468d783b55e67cb0e9ac5ee7c18202c9"],["/archives/2015/page/3/index.html","894558a007b0455b96ccaeb180da4616"],["/archives/2016/01/index.html","06050ec4d42fc3d4c16156f0eb94332c"],["/archives/2016/03/index.html","d68eac9e6d76f7cd1c4a4ea61f215030"],["/archives/2016/04/index.html","c351e4972fe07a8f36ae2ebdcafe81fe"],["/archives/2016/06/index.html","f89ab0ef99b841112e36d1c40c379571"],["/archives/2016/09/index.html","8512db5f0944a338d5d5c56aec0909e5"],["/archives/2016/10/index.html","a85bb368d211758b8240c134771efac2"],["/archives/2016/12/index.html","cdef59f15f85dcc22a323bc32b2b5dae"],["/archives/2016/index.html","e1e8b9d880dcbf63c57866c9b827e517"],["/archives/2016/page/2/index.html","f9a31555e5fedd9fb2571662da7cab2e"],["/archives/2017/01/index.html","76ffe2605d8843a0cadbd15c9fc01ba5"],["/archives/2017/04/index.html","5069ecb870a07bee8d68fe0cc6ba95b1"],["/archives/2017/06/index.html","7e7f353a0bfc5b7e61935b131630491b"],["/archives/2017/08/index.html","c58786cb5e9f190e687dd3a407c92ff2"],["/archives/2017/09/index.html","379e60d65ecb56f7976a1903f91b72b1"],["/archives/2017/10/index.html","bf2bfec4676332a9bf5c4c973f233edc"],["/archives/2017/index.html","dff7a27298d8aa95269c66c9cad678cb"],["/archives/2017/page/2/index.html","90adfbb551a969a8a0378c2b3bc11bd9"],["/archives/2018/04/index.html","03ef17ce1127f837be25cfa333d73583"],["/archives/2018/05/index.html","2256e4bf0170b3a352b35a822e2afb2d"],["/archives/2018/index.html","5d4a39d9ee9a6f9b244152c7b4890456"],["/archives/2019/05/index.html","de82ef814b07762ce3c0b536630bd029"],["/archives/2019/index.html","a212dcd402b9e0220452cc5923443aac"],["/archives/2020/06/index.html","007c06ccf4381d35874a75ff60783a9e"],["/archives/2020/index.html","2938d2ccc7eaa404776b604234cb2fe4"],["/archives/index.html","28c5f9bdbf217c448e403f9952d2114e"],["/archives/page/2/index.html","3ef6be3cd653464b8e5de21cf311fb2a"],["/archives/page/3/index.html","ee300396b0e32f7d11c4568fe95d38fa"],["/archives/page/4/index.html","eae70d5947086b8cd3fcd8cc17e42860"],["/archives/page/5/index.html","908ad065589af668267fe76fd53f5323"],["/archives/page/6/index.html","7a3cd2b4a0b27e507f768f9e2c919eed"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","0b0a3022734e13149e84e9b3bdfd7b5b"],["/categories/ACG/Music/self-copy/index.html","4dc2d1bfa97511eec0b1942bfd564dab"],["/categories/ACG/Travel/index.html","4ea611e525ed7f9648ddcab7229c08a4"],["/categories/ACG/figures/index.html","62bae4e1424bd319b2afe412716d3cd4"],["/categories/ACG/index.html","e0d873a4d1b72f7fa54ccf91b77db6d5"],["/categories/dev/Front-End-Dev/index.html","6b63e7a5c7a818ed2b79f14454a2a4c8"],["/categories/dev/HTML-CSS/index.html","9dc97bcb6cd49caa0f9e07eae17de253"],["/categories/dev/android/index.html","c28b8f14c25451f64934b43ec891aa2b"],["/categories/dev/cpp/index.html","f1d0afc1c6197059b7a9bea8ebc43c01"],["/categories/dev/git/index.html","31594668dbd6b12ea02d08aaa2c96dba"],["/categories/dev/index.html","b1b17b2a567fba943be708471a336e07"],["/categories/dev/java/index.html","a71a3f6ec75bf2eb6f9519c256569314"],["/categories/dev/page/2/index.html","cfc175a4e55ed3f9099efa2f3723fe22"],["/categories/dev/page/3/index.html","57c63da62d1470f50bfa730978c751af"],["/categories/maintaince/blog-setup/index.html","98358ade27955a9bad556cfb07f4f551"],["/categories/maintaince/index.html","102872bfae7ef21c3dbb5745ce2b3e4c"],["/categories/maintaince/macbook/index.html","3590e1ac704a82b0fa00a06174b6b654"],["/categories/maintaince/router-config/index.html","635933a54fd2c0ed7ba197da672e7328"],["/categories/notes/index.html","a8aecf5f0f337b5e78df95828cdfac31"],["/categories/tricks/android/index.html","315cebbf9a320ea6a25e28e0f37706a7"],["/categories/tricks/index.html","2e69184b50e27727d217d6c2c06597b7"],["/categories/uncategorized/index.html","138906c898c951b3c516a82222e811dd"],["/categories/works/Front-End-Dev/index.html","a7058e2d67de2de8c1a9a9e01fe2337c"],["/categories/works/csharp-wpf/index.html","2acafedcbcf1c8a74436e17d28aff9c8"],["/categories/works/index.html","0202373b99ef001b408d04d88c6baf96"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","2b3f30e256570b41387ddfdec45045f3"],["/ja/2015/03/WNDR4300-setup-log/index.html","77a3e2c9a70f77149afd539304830fb8"],["/ja/2015/03/android-hostname-change/index.html","b101ed3f7ea11c5e0034b9ffd11ef1fa"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","4310e63b4146c9b92e8ce8c3053186ad"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","f0ae588220bbf5003666d13de7fd54e2"],["/ja/2015/04/cpp-study-log/index.html","7591ec2f06a058d797fb6c4dee63864a"],["/ja/2015/04/github-pages-ssl/index.html","39e05e3df046108790813371bf6b8f29"],["/ja/2015/04/hello-world/index.html","619b0f733e69d3bfd5540fa8a5c70029"],["/ja/2015/04/hexo-setup-log/index.html","6eb3f23cdfce856588c7927bceaa49a7"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","bfbaef741605296d945509f720b4251e"],["/ja/2015/05/cpp-inherit/index.html","bd0b144b4aa782912cfed68068f1c3f7"],["/ja/2015/05/cpp-polymorphism/index.html","42799d19f49f7b5197f21762ca33fbd0"],["/ja/2015/09/android-root-ota/index.html","f3edfd27fefab1ae7fce02b302882bc9"],["/ja/2015/09/java-learningNotes-1/index.html","156c0c20a12fafc7df598356949f2e5a"],["/ja/2015/09/newblog-newlife-2015/index.html","c64bdfa2ccd06766b04fb3a92325c967"],["/ja/2015/09/router-rebuild-2015/index.html","8ae09bc227cfba88c4e8778676985eac"],["/ja/2015/12/2015-12-21/index.html","020f117e644b0711f8412778c3896c44"],["/ja/2015/12/PixInTouch/index.html","378e749346d33f5071316aba3c034fc4"],["/ja/2015/12/git-study-1/index.html","e45ce7444bf65c7b77589b03e67e0d2f"],["/ja/2015/12/hexo-backup-and-migrate/index.html","123e70125c47a963d6814e36453f485b"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","5b7ae0f536b2b08fb9e122b2db427cd0"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","5e7ba1f2d63a656309016fd45f0c9fa1"],["/ja/2015/12/router-reconfig-2015/index.html","6e8338ab88647fdbc5a5e9aecfe9ddae"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","7116ae7d755ac3f9aed4f5e7794a4558"],["/ja/2016/01/2016-stepping-further/index.html","278fd148df8067f272820511ec233746"],["/ja/2016/01/Android-Study-1-22/index.html","73cb6820e9e89c0ffeefc5de491bbb9b"],["/ja/2016/03/2016-03-20/index.html","f3d28a44a62bb228ce47fef5c809dd1e"],["/ja/2016/03/GSC-535/index.html","f99a3143d58c90aab658e2fd5672b0f2"],["/ja/2016/03/gulpjs-1/index.html","3c9e243c9f5a4878c8cbb11591fd8c58"],["/ja/2016/03/hexo-theme-paper-white/index.html","3f86c333325b1a132620a199a9b5d800"],["/ja/2016/04/2016-04-19/index.html","c67e904bc0c60dd4035afb27de7fbb59"],["/ja/2016/06/2016-06-16/index.html","ce9b19a7eb8b7d1b4fba0b357f5e7b7b"],["/ja/2016/09/2016-09-18/index.html","8c9677397cf69a5d181e670626553fdd"],["/ja/2016/10/2016-10-27/index.html","a478b2616eda052666060c73d2f5eb30"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","edcff3a171e166a440d84a3e2a6d68cd"],["/ja/2016/12/improve-duoshuo/index.html","5b4b9fdb5378e9fa9455c5164642f859"],["/ja/2016/12/use-travis-ci-your-blog/index.html","d80c2210ea4bd370807c45df2bf4e0ca"],["/ja/2017/01/2017-iyahoi/index.html","8d5c64b777335cf091b8a109eece48a7"],["/ja/2017/01/webpack-amd/index.html","29dec54eca0938a8e0e4737b75e8ed56"],["/ja/2017/04/kotobukiya-syaoran/index.html","05778ff78b5c2c50a413fb2406af574f"],["/ja/2017/04/macbook-and-surface/index.html","2153b91678dc905543a32169bb0df319"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","14eeb56f55b8d415b77deb7eceb8ff80"],["/ja/2017/06/noragami-seichijunrei/index.html","69acbb157e331dc96bd300f95d2d6f76"],["/ja/2017/08/cross-compile-55-libev/index.html","985b28ac9e63a0f0552fbb4b83bddae0"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","7d7c74639580a8fcb589c521d4e85d8e"],["/ja/2017/08/hello-jp-world/index.html","4ad90c2924d99c2517e1ed34f98a19c0"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","d7dc2e3303c2521719107a2cd653c35d"],["/ja/2017/09/record-user-login-status-methods/index.html","a551d0dd0e54d4da93e46882ff172b3e"],["/ja/2017/10/vue-typescript-early/index.html","b49d9ef903a5ea30a086dfde86c4f6aa"],["/ja/2018/04/2017-end/index.html","7389790bf82fe76611b3e83b36bd6581"],["/ja/2018/04/twitter-account-activity-api/index.html","91e6f73d450237ce1622792371b5b2f7"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","6338dbd1cb29ddd7d9878d6ba7e13271"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","5cc2ecec199f1a3099654512d6299a3d"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","039b433823eeb70d780b55b474ffb925"],["/ja/2020/06/try-serverless/index.html","89b23430ea606ae6e49434e197bcb8fd"],["/ja/404.html","f5bc955a4fe8a932c2ea0506cf5aec46"],["/ja/about/index.html","6afeb4eced12f04df2daba00f7784418"],["/ja/archives/2017/08/index.html","af3b55a6de5ab8310df114e953d6ef3c"],["/ja/archives/2017/09/index.html","10164100a03f81cf85c9ad634cabad8c"],["/ja/archives/2017/10/index.html","bd34da956f1b36ead15b088622d7dd4b"],["/ja/archives/2017/index.html","72a192f8a8ba595f587288d69b9edab3"],["/ja/archives/2018/04/index.html","ff3efef431277ff60fa4c21995764e7a"],["/ja/archives/2018/05/index.html","575e2c13465b4b3c237210c68581bc5e"],["/ja/archives/2018/index.html","a0f2cdc4a7a81237ca2328ade210d44a"],["/ja/archives/2019/05/index.html","3a47e01e7cc0a44306bdf1fc3d1a072a"],["/ja/archives/2019/index.html","dad56adbbde6b5f5ace16f4b265c1e2e"],["/ja/archives/2020/06/index.html","09bc5840d8f39dc34415956a6e711c99"],["/ja/archives/2020/index.html","25c4c7ebe291694f514ae4cc23279dc6"],["/ja/archives/index.html","7b7aac1fe0503198bb6467ef7addd38f"],["/ja/categories/ACG/Travel/index.html","43ccb050f024bd4c8eca74231b222506"],["/ja/categories/ACG/index.html","bbe0c7241b61ca271e6e6e5db3bed66e"],["/ja/categories/dev/Front-End-Dev/index.html","a723611dc2d4a5371e8f44e0c67fc87c"],["/ja/categories/dev/index.html","71a4ca37521b24d642c669b3526c19b7"],["/ja/categories/uncategorized/index.html","eb325759b978e956f8244724e03ca246"],["/ja/index.html","3009a0b230eb80f36cd351edcf567413"],["/ja/nihongo-test-page/index.html","d44b91160ec206058546d5d256179fd5"],["/ja/resume/en/index.html","b67301eef3b15dfb2ede90a33b8f8287"],["/ja/resume/index.html","4c19f06ee8114ad9da4129f25d553079"],["/ja/resume/ja/index.html","0af2e35815911a6971b3e7bfcca2686a"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","2293724954d0ce1fbe2291b62d1cfc3d"],["/page/2/index.html","d9c43dc7c3aeefb6be7b0156e236d3f8"],["/page/3/index.html","4eb2e54334c03a3d4f4838f9127f038e"],["/page/4/index.html","01482b05ac11938d5ba3c030b992d961"],["/page/5/index.html","1651bb456f6835bf9b53e539ecf7cb33"],["/page/6/index.html","f25727bf6ac9f7cc0f3015c3e60ab8f0"],["/page/7/index.html","9cc791111c6226f00cef53fbe2424d18"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","77a0de8be64b68d725a84c0ce7ab28cb"],["/resume/index.html","c89abb1446f717f807a166f55e1924e2"],["/resume/ja/index.html","093171f35d81c3cbbf8a4cc8e511c7e0"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","701655f20e45f87aeb66df41944cd495"],["/zh-cn/archives/2015/03/index.html","ce92281836dbeb45a4bb0d27db65ea76"],["/zh-cn/archives/2015/04/index.html","69bef3759f2536c7abd6c0a41954895e"],["/zh-cn/archives/2015/05/index.html","2af00410774ca978030d1d9274bfb998"],["/zh-cn/archives/2015/09/index.html","4a3998ac79aac3713a9f1ea5244479db"],["/zh-cn/archives/2015/12/index.html","82bda81571ee0c3209c95331509b952c"],["/zh-cn/archives/2015/index.html","0adc3cac5377ebef3f715a8d4dfdb9aa"],["/zh-cn/archives/2015/page/2/index.html","d5e06c6f49670e33c0ed1dd8b186be21"],["/zh-cn/archives/2015/page/3/index.html","a8dcf2d920276b8a8fcd7d9459d626a1"],["/zh-cn/archives/2016/01/index.html","855ec731a025f546129ee170a72b3d22"],["/zh-cn/archives/2016/03/index.html","60246f58eb612083dd191a6c8297f517"],["/zh-cn/archives/2016/04/index.html","ff1caf03f8b6d6c9c6089d92e912e8eb"],["/zh-cn/archives/2016/06/index.html","44b56374f57bd65700fdd3439dbd0306"],["/zh-cn/archives/2016/09/index.html","5c51853bd0390c67f2dcbdc599df52a3"],["/zh-cn/archives/2016/10/index.html","dd36eda43d93727029576cab73270196"],["/zh-cn/archives/2016/12/index.html","b6d78b1bfe173eb01588c2666a02f2d0"],["/zh-cn/archives/2016/index.html","39f46fd257d1538ece1a793b9426395c"],["/zh-cn/archives/2016/page/2/index.html","e9443d798dad5d46c470fa5b9c1cd0cf"],["/zh-cn/archives/2017/01/index.html","77d7f13e598f052d1c4ebf1030a8d471"],["/zh-cn/archives/2017/04/index.html","9e63790ec04d0aaa1256473b87fbe7b1"],["/zh-cn/archives/2017/06/index.html","e067282980376a60d2d410305c8b9e8f"],["/zh-cn/archives/2017/08/index.html","8eae996ccddba9e70925833e5ec97430"],["/zh-cn/archives/2017/09/index.html","404d63bba6c55177dba6e9d15b675f1f"],["/zh-cn/archives/2017/10/index.html","cb5d26dd95a3c185e6f87d0c61d51185"],["/zh-cn/archives/2017/index.html","5b36f7a315872c075a7788b1a204d1eb"],["/zh-cn/archives/2017/page/2/index.html","578835ebd8ee1c0047a05d01e40c5abe"],["/zh-cn/archives/2018/04/index.html","d109debb57a5e0f762b80eafaa9d176d"],["/zh-cn/archives/2018/05/index.html","ef3e89be1cb0d1e7e6bcadf7d641e4a5"],["/zh-cn/archives/2018/index.html","d5186ebbfe0587c777a04a04ea9ebe7b"],["/zh-cn/archives/2019/05/index.html","a8b87f2ed89f5eda16b27163913b0c7f"],["/zh-cn/archives/2019/index.html","d014102e4ee11d69b1a95039b4dfb919"],["/zh-cn/archives/2020/06/index.html","49f2132e310b3394b8d2033353d2e822"],["/zh-cn/archives/2020/index.html","333974827536ea26f247935930f316a1"],["/zh-cn/archives/index.html","a8c07750ddd84aac69d20e369fe68053"],["/zh-cn/archives/page/2/index.html","ae036d263a2c56d4ce4ff5d71bcb4909"],["/zh-cn/archives/page/3/index.html","df90d63071bf92de328e0a71bad3af9f"],["/zh-cn/archives/page/4/index.html","3da86ebcfc6dfa9921451db2ac9a40d0"],["/zh-cn/archives/page/5/index.html","cf03c6c520e7f9678930bf1a7028d337"],["/zh-cn/archives/page/6/index.html","97c4880f4c93feba3caffe23f2742f37"],["/zh-cn/categories/ACG/Music/index.html","7a6b292fe29963283a4be363b00b51c3"],["/zh-cn/categories/ACG/Music/self-copy/index.html","7e57c33cbfd43f15f44083a30d6ae587"],["/zh-cn/categories/ACG/Travel/index.html","603e05e686527799dbec53a16fd63fd6"],["/zh-cn/categories/ACG/figures/index.html","f593b8455dbbca0512ab952906a428a8"],["/zh-cn/categories/ACG/index.html","1373b0ca3761f1050406357f6c48fb02"],["/zh-cn/categories/dev/Front-End-Dev/index.html","476faa4a3156a94fd600f07ddc24ce5c"],["/zh-cn/categories/dev/HTML-CSS/index.html","3b8d96a2ae71fa400eee5db0fe8ea7c3"],["/zh-cn/categories/dev/android/index.html","2d2610902edf4282938d864c179b1cef"],["/zh-cn/categories/dev/cpp/index.html","999b36672af4f8872cb8952f806309e1"],["/zh-cn/categories/dev/git/index.html","6b2e2d2fce051107b03bc5db506bee6c"],["/zh-cn/categories/dev/index.html","a85494d726fa51541a1e148bca42b2b8"],["/zh-cn/categories/dev/java/index.html","7ebcf9ad73e4270a91af7a2d6d865997"],["/zh-cn/categories/dev/page/2/index.html","27ad3bfcb9a6434b8e126f89e1a546ba"],["/zh-cn/categories/dev/page/3/index.html","879b5f850c0cbaf22d44ac054a46dbf4"],["/zh-cn/categories/maintaince/blog-setup/index.html","81f3f4e3421d424a3d75f91baa790f40"],["/zh-cn/categories/maintaince/index.html","cf294374dcfa178d3c9b299106b7b779"],["/zh-cn/categories/maintaince/macbook/index.html","0f6f15b67a476e9c77fe32166cac3652"],["/zh-cn/categories/maintaince/router-config/index.html","6fc1d8c2f84a01d7f61a620c32c4866e"],["/zh-cn/categories/notes/index.html","338e4c3cb2b4b27769613fb6fa1df64a"],["/zh-cn/categories/tricks/android/index.html","c24a1b32a8cf759f3986309541107253"],["/zh-cn/categories/tricks/index.html","9cc1e4ece3573d1f4c9b571025491188"],["/zh-cn/categories/uncategorized/index.html","7fe346d3662de2e6fe6cec87317ae035"],["/zh-cn/categories/works/Front-End-Dev/index.html","774dc9c2c406fc17963cd1c4ca0e0175"],["/zh-cn/categories/works/csharp-wpf/index.html","77fe0899fc5380ed596188a4d656f9d2"],["/zh-cn/categories/works/index.html","ee0147981a964f980f76a54d129de37e"],["/zh-cn/index.html","2bfc8e11d70d5aa91dba0d5f08fc5965"],["/zh-cn/page/2/index.html","f3c3251a2a1d1c9391a347a21165bc5c"],["/zh-cn/page/3/index.html","8176326944c173c27f60601c32a02f8f"],["/zh-cn/page/4/index.html","a1def38f7064b854403ede6e69fb9ee6"],["/zh-cn/page/5/index.html","a35ef11a61fd01424f55e92478b21baf"],["/zh-cn/page/6/index.html","84c15c1d91e4fe487bf44d64e03f1b07"]];
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
