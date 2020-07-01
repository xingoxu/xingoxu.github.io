/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","c1603977374cd32e30eea46af35b9e6f"],["/2015/03/android-hostname-change/index.html","e68c1704e6c5ef53d557aebf3661fb1c"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","8a9c98c0b49c7176fe474ad25b67c4bd"],["/2015/04/android-chrome-issues-with-webpage/index.html","fddac97802a3d8a86f07f6763da97889"],["/2015/04/cpp-study-log/index.html","3d2d757a05859128a8ec20878c7ad4d7"],["/2015/04/github-pages-ssl/index.html","4d0787b7ba29b49c5cbc7816d8ee2a98"],["/2015/04/hello-world/index.html","09b9862298bd0f7533f91e9076cb42d3"],["/2015/04/hexo-setup-log/index.html","d77ba5903308a62813b16846519a7dbf"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","010b51e8b0ae5db062b6553fc684718f"],["/2015/05/cpp-inherit/index.html","610c52d19e9e810e6baa4695a82f47df"],["/2015/05/cpp-polymorphism/index.html","332708ce752aa6592875e6beb8dc4fdb"],["/2015/09/android-root-ota/index.html","d0ca84d9ee03a46fa29b9bdb3bc6379d"],["/2015/09/java-learningNotes-1/index.html","503e59c1aadec939c169cdf4d6c6e4f1"],["/2015/09/newblog-newlife-2015/index.html","2ad6091be14a84cf10fa43ba8b4dcbb4"],["/2015/09/router-rebuild-2015/index.html","1ecc6d1660fedcacb0d49c838eb7240c"],["/2015/12/2015-12-21/index.html","740cc428fbc8b0fc64c2c6ca9034a7d3"],["/2015/12/PixInTouch/index.html","5b1a0675ff381c7c2aeffc3ad57b4fb0"],["/2015/12/git-study-1/index.html","5744a4fd6ff2119a0639152a10728179"],["/2015/12/hexo-backup-and-migrate/index.html","6e2a4d25dd9c727a4002b865c1dd5113"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","84559611bdadfea823e4d397ebe4aba6"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","a05daa52ba27738c8881975c6d197303"],["/2015/12/router-reconfig-2015/index.html","4ea22f23cf1c3890e83f26f84ea9a716"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","86fe93b3961283033d893ef85a76c980"],["/2016/01/2016-stepping-further/index.html","a6b5fda60a13df2cbfaec9258d814192"],["/2016/01/Android-Study-1-22/index.html","79f0df461dde80851e2c2ae0a0c92516"],["/2016/03/2016-03-20/index.html","8314f88033ddce16b9289d207a2b5a70"],["/2016/03/GSC-535/index.html","9a851e5c8fd594f9f5e0ec419f50f1bf"],["/2016/03/gulpjs-1/index.html","e2c239d7c5e50d9098652bc0929d3318"],["/2016/03/hexo-theme-paper-white/index.html","ff7bdf4ca5e4b2c1cfab44dd8033fd8b"],["/2016/04/2016-04-19/index.html","cc0cbb04b0381b8e5adf33c26ba54ce6"],["/2016/06/2016-06-16/index.html","8a29e914ea1ae3b64cab80a9c261b7cf"],["/2016/09/2016-09-18/index.html","14782a0c703d12891060447d1ea285b6"],["/2016/10/2016-10-27/index.html","4635b6245d56d08acd3ea8309cdd2582"],["/2016/12/config-switchresx-and-2khidpi/index.html","056b2033d3ab680450708dccd3baab85"],["/2016/12/improve-duoshuo/index.html","e8ba743f241c90656f45a37d634c599c"],["/2016/12/use-travis-ci-your-blog/index.html","dca79d05a632e8528ef2b25f43c40fb2"],["/2017/01/2017-iyahoi/index.html","5a805b27e37c3263478fdb750ab9becc"],["/2017/01/webpack-amd/index.html","0f4bce54fd0342d542bad838920a3a4d"],["/2017/04/kotobukiya-syaoran/index.html","4814aeb4084fadb551cade25cc377a1b"],["/2017/04/macbook-and-surface/index.html","41c05d8b3c53c3d242ad00c728ea0efb"],["/2017/04/uc-hyakuya-yuichiro/index.html","d972aa94e520aa2c5f3b0bb6af0f37e0"],["/2017/06/noragami-seichijunrei/index.html","e6345380b47e2bab21ee4cb7596fcf9b"],["/2017/08/cross-compile-55-libev/index.html","fa8ebc635284909a12a3bc2043709815"],["/2017/08/explore-service-worker-working-lifetime/index.html","260114d172ee1dfc7cb3b377ba0625f0"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","b5f67d0926674923d199154e8f658132"],["/2017/09/record-user-login-status-methods/index.html","436894e1addc7258ead9f478aac446df"],["/2017/10/vue-typescript-early/index.html","8b3c782b66acd92a2d6ce36d6915f4c8"],["/2018/04/2017-end/index.html","1f77a04a05d2a0c95ce055f774dec58c"],["/2018/04/twitter-account-activity-api/index.html","2b3fb716f534778077ee5b1219a5be06"],["/2018/05/buddy-complex-seichijunrei/index.html","7b4125394651f5fc88282f78f8f58c9c"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","55dd55b49fd3cd0eb58edf0e823d5a81"],["/2019/05/2019-05-17-google-io-tech/index.html","93bdd1b195bf76e49ec2eabd2b9677c8"],["/2020/06/cls/index.html","030c540d45bb0a46e8afa4fc044e9590"],["/2020/06/try-serverless/index.html","511aaa18b7bf1f0ab425028da0f7d23b"],["/2020/07/macos-node-require-path-case-insensitive/index.html","5d892567a6cb268e4cd4e4f64d0e44ee"],["/404.html","0a5743ac5aac2a684e682961aa8f0db9"],["/about/index.html","7da25916ec2e84b9c19e255cbad7aed2"],["/archives/2015/03/index.html","30729706dca004c25de9246254301bc6"],["/archives/2015/04/index.html","99d29714dcedb5d08549a86391d82314"],["/archives/2015/05/index.html","95dd2659d9a133f2084e6dfc5cb355bc"],["/archives/2015/09/index.html","71bc718dd17530f478c46d01f62a6e21"],["/archives/2015/12/index.html","152bd2ccf392da41ceb081ea3162e6d4"],["/archives/2015/index.html","9ba163e77d39710857857119e7531b21"],["/archives/2015/page/2/index.html","7e4451e4804f47bb753c50464980b395"],["/archives/2015/page/3/index.html","2ab74c842a2005cec2be66df082f2d28"],["/archives/2016/01/index.html","91384a267a3a9afed169218eb5e1133e"],["/archives/2016/03/index.html","fa34a857054835f0b07b6dab181dab46"],["/archives/2016/04/index.html","6cd30c9d3d06eb35cdb1b9131673ca77"],["/archives/2016/06/index.html","ad8e5d8288f7237503a4404891941ceb"],["/archives/2016/09/index.html","f134568c1ed17ecb69cef134146a2dc4"],["/archives/2016/10/index.html","77851cb55eaf8751a4dc8ba95e2cffa8"],["/archives/2016/12/index.html","b31d47b4e32a0b6c7e7787e9d48dee38"],["/archives/2016/index.html","81eea3d08ff16e0743926bd7a7091a22"],["/archives/2016/page/2/index.html","77dda89f06ed4ac3cae90b965c6e32ea"],["/archives/2017/01/index.html","1f327d907d2c8b23f7a925271b2b84fd"],["/archives/2017/04/index.html","c71d4b68b0be1dd8c4d74927ed9393ff"],["/archives/2017/06/index.html","6761a7db0d463ecc5d9c1322801426e3"],["/archives/2017/08/index.html","a70f3672b89d76a3a67b5463bd1a037d"],["/archives/2017/09/index.html","22acd7f56c3849db66f703650970e5de"],["/archives/2017/10/index.html","00ad607f7884a6d633d04ecd1d9abde7"],["/archives/2017/index.html","08ddc1143f118804ca886b2f2d3866c1"],["/archives/2017/page/2/index.html","9e49ba67d039e06356e1a352b4b9006b"],["/archives/2018/04/index.html","bc0834c792ef922fc7907b8e8e398cb7"],["/archives/2018/05/index.html","518f16d221ab5675d60f7773390d56a7"],["/archives/2018/index.html","3cb89b659ab2aa403f21fbf8632ba6e5"],["/archives/2019/05/index.html","6b839197c4b2507f6af6680e0c26a92b"],["/archives/2019/index.html","f21b8e334dcb07ed31e4338c7695d094"],["/archives/2020/06/index.html","0d06a65726988852509981b8b56649e6"],["/archives/2020/07/index.html","5f031a7819ffb7aeeac737aed844ee74"],["/archives/2020/index.html","d8d612d948ba64308ea71e1975590805"],["/archives/index.html","924b888b476ba0c48bc53407e529f394"],["/archives/page/2/index.html","54646fba53ee118ab5fdd5521fff6896"],["/archives/page/3/index.html","9a4d516bcb4f1a6980c05580a3118d36"],["/archives/page/4/index.html","a03441646698adbb71ba12065fafd228"],["/archives/page/5/index.html","707cab0808ee6b33bbce30d46ecdb7ce"],["/archives/page/6/index.html","4041238825488cf6284142e3ec82f5ad"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","041170888831d2695c0d24678af73633"],["/categories/ACG/Music/self-copy/index.html","5cfee5f1ed7ca1c315f77bb98fc93e0c"],["/categories/ACG/Travel/index.html","11b227ead3db315ee37faddd3c303b51"],["/categories/ACG/figures/index.html","aa155514ed382732c6f89025b297a977"],["/categories/ACG/index.html","c86c347f9240226f1aab9a5268ff6443"],["/categories/dev/Front-End-Dev/index.html","bb914c9b1383052c5b938e4f3a4547c4"],["/categories/dev/Front-End-Dev/page/2/index.html","90a542d53691a55d8a0d638fb7fa335b"],["/categories/dev/HTML-CSS/index.html","9af57212333ecedeac0309c4dc8df333"],["/categories/dev/android/index.html","03ef657e4e72c280c63cab689235ca94"],["/categories/dev/cpp/index.html","2604cbdd2caa06938ceaa5d04260ab25"],["/categories/dev/git/index.html","fa16f6251611a242a979309e742d2f95"],["/categories/dev/index.html","83dc07b4768f3db81b14f9cacb79f0e7"],["/categories/dev/java/index.html","2af44af7c4303901c72f40755099bfab"],["/categories/dev/page/2/index.html","e452e6c1bfb1acd60fc0922a85987676"],["/categories/dev/page/3/index.html","bbb67faff623700098f11e6bec0f2848"],["/categories/maintaince/blog-setup/index.html","f48a9e1431a5937d636f850c3d2590e6"],["/categories/maintaince/index.html","3a39306fe1159721cf7f8be8fe1338f3"],["/categories/maintaince/macbook/index.html","faaa08d193cfafd51a8944fd3c579ed3"],["/categories/maintaince/router-config/index.html","91f9992fd936593960a8cb7ad14d9dc9"],["/categories/notes/index.html","513bb8a067beb3c21e3278f28701c82b"],["/categories/tricks/android/index.html","ba7402da93cea5ae8b69539e22035180"],["/categories/tricks/index.html","c665c5004ba671fd66771f399684c074"],["/categories/uncategorized/index.html","6790160e076a0d17756f8249c21b46c5"],["/categories/works/Front-End-Dev/index.html","b0ef069c366bd003fab24c9a251c8884"],["/categories/works/csharp-wpf/index.html","f16b16fc2ac36db847d0e1e3d8b98bfd"],["/categories/works/index.html","6158d57df612fd3eaa5a7f7abdb60726"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","dbd2a3bef55bebbf846bf821e052c05e"],["/ja/2015/03/WNDR4300-setup-log/index.html","4e514b65d9449f6bc9bb69d7aa2503a8"],["/ja/2015/03/android-hostname-change/index.html","dad882f2ae5c22d4f138cb6da6aa375e"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","49ca80a46616715edade07a864fc40f2"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","a4dcdd245a09343fca8e8b8b266bb764"],["/ja/2015/04/cpp-study-log/index.html","37079868e337e635445283919f495999"],["/ja/2015/04/github-pages-ssl/index.html","883e8d25f1705f416cdf08294143793b"],["/ja/2015/04/hello-world/index.html","25ff826807fef355057bfa3374b1ddd2"],["/ja/2015/04/hexo-setup-log/index.html","4b7b29d5b65e6cea2a7cbe26f4e61517"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","2d3829fd64ab21ef639df4c1fe912ff5"],["/ja/2015/05/cpp-inherit/index.html","41391202ca028ff03a169be49f0817f8"],["/ja/2015/05/cpp-polymorphism/index.html","c4fefcdeee19c7de1253e60168785e88"],["/ja/2015/09/android-root-ota/index.html","e2b68ea47d9b52c03538f9c2a84bf328"],["/ja/2015/09/java-learningNotes-1/index.html","8d486ae8c595c33d31c70d9228056a62"],["/ja/2015/09/newblog-newlife-2015/index.html","d30b663082b1ca4cfda5c62235e45789"],["/ja/2015/09/router-rebuild-2015/index.html","7e3f51924f107e7fb8dc6776f0a9d43f"],["/ja/2015/12/2015-12-21/index.html","0273fc743e5598c77eba0c2e5a1f9fac"],["/ja/2015/12/PixInTouch/index.html","98349cb2dbd2d2cf3bcb007a6b004a3f"],["/ja/2015/12/git-study-1/index.html","d45dbf83a04d3c2e01c3ea6bc25c60de"],["/ja/2015/12/hexo-backup-and-migrate/index.html","f0c6aebf6805f957b74a34ca51fd5ab4"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","4417c581224f3622720a7751b06d3303"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","3c541d86f791600cb0ec66e38440f800"],["/ja/2015/12/router-reconfig-2015/index.html","ed9f3993accea3f7667e4ac5daf2f4b5"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","3ca7edf3db80a4d668b8c5aad43bf4a2"],["/ja/2016/01/2016-stepping-further/index.html","b3b85a7937bbd32008250a2e345debc0"],["/ja/2016/01/Android-Study-1-22/index.html","98365cc6c7830fa11118cf236fa5d4e6"],["/ja/2016/03/2016-03-20/index.html","8a6e25de56c98bc0eaaaeadaffe219ff"],["/ja/2016/03/GSC-535/index.html","b83794c52fc4b4f30e728855931a5b09"],["/ja/2016/03/gulpjs-1/index.html","3aa317d7920eac107c2c4b017df0f1b6"],["/ja/2016/03/hexo-theme-paper-white/index.html","a7c83decff8507821f9685e678366490"],["/ja/2016/04/2016-04-19/index.html","dc8bb5049d1dd5208796621b0fa0bee3"],["/ja/2016/06/2016-06-16/index.html","8e8f48aa9f7bf5500529b92f1a78f224"],["/ja/2016/09/2016-09-18/index.html","940c948d5f3ad15b0518c2459cd55393"],["/ja/2016/10/2016-10-27/index.html","0badcd3aa4a0b26ed1fa7234a815c755"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","eb4b1e44351881f4344339472234ccfa"],["/ja/2016/12/improve-duoshuo/index.html","e5cad9f715a2207a7218afb752dded61"],["/ja/2016/12/use-travis-ci-your-blog/index.html","d07d266bb21e3dda5c405d8bf3a472e7"],["/ja/2017/01/2017-iyahoi/index.html","5a7283218560180e15a87b1647da2276"],["/ja/2017/01/webpack-amd/index.html","b5e32d7243ef8b81ef033911913c3119"],["/ja/2017/04/kotobukiya-syaoran/index.html","c00f2f87618d3d6ef379d6ace512c6d4"],["/ja/2017/04/macbook-and-surface/index.html","ceac0a036406612c7e794884696737b8"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","12db295a138c51c09e0225472dc70967"],["/ja/2017/06/noragami-seichijunrei/index.html","67a27b72c1011d28c08b512be83a284c"],["/ja/2017/08/cross-compile-55-libev/index.html","758d59b11415476a51bf413f9bab3f3e"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","295e64ecda3cfb3dcfe5ea675f0bba4e"],["/ja/2017/08/hello-jp-world/index.html","70faea1aeb7ccafd2d8348f119838271"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","b4c8cd2d481c11de9c902de98c3e515d"],["/ja/2017/09/record-user-login-status-methods/index.html","155f4195cf1b42734382bab44a9815b9"],["/ja/2017/10/vue-typescript-early/index.html","7630a1d2f66901b8bb45da2db01123f8"],["/ja/2018/04/2017-end/index.html","79f26d61eec8d48c4be494418636f8ce"],["/ja/2018/04/twitter-account-activity-api/index.html","23ebc58df6f4995f8adde0f00353130d"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","3b9442c1eaa37811194e711f86d17cc9"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","0ed902c2b9712fbd360c80cd620a6984"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","fd51f090415454c3eb083626b7fc7cce"],["/ja/2020/06/cls/index.html","f2bdb97c112844c793937234c52adf31"],["/ja/2020/06/try-serverless/index.html","228d4811d0ddcadd27a139f925312d11"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","4bca09373d107bd80a8106a7959a5677"],["/ja/404.html","aa3fd7fdc328f52cec7e84e7c7917285"],["/ja/about/index.html","9a2e757727a136c9bc542cc0e9fb5548"],["/ja/archives/2017/08/index.html","242d228843d5ef0b49ecbd629bb8a5cc"],["/ja/archives/2017/09/index.html","241253844b89ad58a9e7708088ca2f53"],["/ja/archives/2017/10/index.html","1e9812cca588a949d0fb9e63f80906b8"],["/ja/archives/2017/index.html","30782f31e61e5440d3a85bb5f154b23d"],["/ja/archives/2018/04/index.html","0f210848c53d2821441726496d86195b"],["/ja/archives/2018/05/index.html","38b6a54b92becde7cd0f251b11d4983e"],["/ja/archives/2018/index.html","339b08c7347e38f86e793d6bda3033a3"],["/ja/archives/2019/05/index.html","c1cb2a64af86f4b1ac097dffa7fe43ca"],["/ja/archives/2019/index.html","ce8592dd2cbc20e9f5324c50ee04bc14"],["/ja/archives/2020/06/index.html","98be5835b6488614a3b664e5190f0ec7"],["/ja/archives/2020/index.html","29bd3570157e07a0d8f81e3b7a52db4f"],["/ja/archives/index.html","a85dad6c9b89cf23a211094873f27765"],["/ja/categories/ACG/Travel/index.html","8c3faf688fe1dfa8c6ef095946ee129a"],["/ja/categories/ACG/index.html","b901da66014a2b09c4ebf9d13497f209"],["/ja/categories/dev/Front-End-Dev/index.html","f7dc650be2f068ea61106e5d7ae9708c"],["/ja/categories/dev/index.html","f37aa0cafc4e06ea78a7210f6adbfd96"],["/ja/categories/uncategorized/index.html","1b67828423c723b57d35b356bd274655"],["/ja/index.html","132ee5d3210f9c66e760a6d71319c985"],["/ja/nihongo-test-page/index.html","0d5787f7697b6dc3a9a301b5a45ce0dd"],["/ja/resume/en/index.html","ae3b7f489cb5ee7c20a475ecdb60c162"],["/ja/resume/index.html","ea15b50bc208eb9994213f5b1d3b0579"],["/ja/resume/ja/index.html","c3f3e39a2e83248eed5e0b9df4671776"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","f716d92301a079b5f114a9e724684a1d"],["/page/2/index.html","c30935cf8525b4e9119b524198b35d94"],["/page/3/index.html","a2d8417119c21be082fbba799927476e"],["/page/4/index.html","cdcccf9f93ea08ae7605c98fd0d54d31"],["/page/5/index.html","aebb43486d62de3106993348136dd789"],["/page/6/index.html","496265ba4030ae6fafb02c4eca396029"],["/page/7/index.html","360d58e4caaeb9632696eae6d4d023ef"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","435235e7ae67e167e3878bd57ab60fd4"],["/resume/index.html","addb048a48f03021f0e52a274f14a31c"],["/resume/ja/index.html","f8a45467b49beea26481439fd3172b5a"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","4143c243849c675a7c1ed6d398e0031e"],["/zh-cn/archives/2015/03/index.html","2b1ca48d0d686bcc78704fa4cfd7ecc6"],["/zh-cn/archives/2015/04/index.html","e490004e260afe88f6a49551337966d3"],["/zh-cn/archives/2015/05/index.html","f3168d7254002e5ae463657d1e417697"],["/zh-cn/archives/2015/09/index.html","0817767427a1fdc155b93c623709957f"],["/zh-cn/archives/2015/12/index.html","0b1e37cdbd3e4dd998ee9531ab344cce"],["/zh-cn/archives/2015/index.html","dd43757122911c0d533736b8924a96cd"],["/zh-cn/archives/2015/page/2/index.html","5e9ddd7795d3b9639dda5e92be97524b"],["/zh-cn/archives/2015/page/3/index.html","fedfae7dbb4b6a4d14234e1d8287a748"],["/zh-cn/archives/2016/01/index.html","2a0e8a4ceb19b3ad1e103772f6117988"],["/zh-cn/archives/2016/03/index.html","1ec5dc4db456e2153b8db1b67aaea4bb"],["/zh-cn/archives/2016/04/index.html","1855b50cc86a2c0b0c4a8628bc6fb58d"],["/zh-cn/archives/2016/06/index.html","053b9a89c2e005f9dc411c89ca51ecc1"],["/zh-cn/archives/2016/09/index.html","dd54a3187db3ce26e121d7d9cdcbccae"],["/zh-cn/archives/2016/10/index.html","ec53d69148df79e0d1a94c53cf4dc7ea"],["/zh-cn/archives/2016/12/index.html","c8b26ca12d42105382091f64f47091d3"],["/zh-cn/archives/2016/index.html","368c4b7573c6e940221e04be2d58051a"],["/zh-cn/archives/2016/page/2/index.html","3a14eeb8ffb224691eb2abb6e4602a53"],["/zh-cn/archives/2017/01/index.html","aa31208733d58f6abbeb763c154bbea8"],["/zh-cn/archives/2017/04/index.html","52e327a525544cfd15098a212d463e08"],["/zh-cn/archives/2017/06/index.html","11f551778d43ed7552eb9a6bf134ede2"],["/zh-cn/archives/2017/08/index.html","6d4729f7decec12e6e35e925c58e2fd6"],["/zh-cn/archives/2017/09/index.html","036714a9bd475b4fc3fa6d3390eac163"],["/zh-cn/archives/2017/10/index.html","a4025386c446f3d9875a9ffd7fae9b16"],["/zh-cn/archives/2017/index.html","e109f8dceac9b57c99dcbc15d782b26b"],["/zh-cn/archives/2017/page/2/index.html","91151aec6ecf0b5f3acc8bf67aad7dba"],["/zh-cn/archives/2018/04/index.html","2cfd815265b058bbb2d27550342b917f"],["/zh-cn/archives/2018/05/index.html","cd9d3631c0721583b5a66586991416bf"],["/zh-cn/archives/2018/index.html","d2114e885de7410ed5e1db43b56b489e"],["/zh-cn/archives/2019/05/index.html","82f71725d98905c800cce3bf5233da01"],["/zh-cn/archives/2019/index.html","18a845b493d6cc3dedc0111d2a7001b9"],["/zh-cn/archives/2020/06/index.html","ebc151b87827bb436f5604cfa66689c0"],["/zh-cn/archives/2020/07/index.html","f865f5a29c9a74bd4e9c54c9b8fd33c6"],["/zh-cn/archives/2020/index.html","5bd51d1623297dba6344f9303e3cc4db"],["/zh-cn/archives/index.html","6777a8610fbae9074e9de152ee797af7"],["/zh-cn/archives/page/2/index.html","ae7e838beca2d355516382185c80d66b"],["/zh-cn/archives/page/3/index.html","e500720a19c88f3c92e79067c779a4f4"],["/zh-cn/archives/page/4/index.html","1d59b1f0fce92b3fda10b23ad4870c89"],["/zh-cn/archives/page/5/index.html","b0a22ba3a6a23336fe111c7d9dbc9f67"],["/zh-cn/archives/page/6/index.html","4dddc6b96d9741e98244cbd36c511fad"],["/zh-cn/categories/ACG/Music/index.html","3dc81ae46111225ea576c9765d1ccf2a"],["/zh-cn/categories/ACG/Music/self-copy/index.html","7d68482c8d036cdcf65b3bff9aace6ce"],["/zh-cn/categories/ACG/Travel/index.html","c3c76a6597c9b234229147a2eee457ab"],["/zh-cn/categories/ACG/figures/index.html","aa1ee7de882166abea86ac090aefb93f"],["/zh-cn/categories/ACG/index.html","3206c0bfec6088d6f2da92ac503845c0"],["/zh-cn/categories/dev/Front-End-Dev/index.html","e787000ed8df9cfefbef9606b0e44437"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","d77f59bb51558b6fa04a54fa7c9f52ac"],["/zh-cn/categories/dev/HTML-CSS/index.html","15fb1837d0ce87d4c843251cfc3918c2"],["/zh-cn/categories/dev/android/index.html","6d6568ef648659b3719db465afe99a2f"],["/zh-cn/categories/dev/cpp/index.html","3d6b6f6c75cd7f5747629b951dac5062"],["/zh-cn/categories/dev/git/index.html","357c8928faf336dd3eb34d0399fd9836"],["/zh-cn/categories/dev/index.html","e58abe6b106941f8ed5d56837d16b0b2"],["/zh-cn/categories/dev/java/index.html","b93b202eed08a1e0aa5bc73282ca9a3b"],["/zh-cn/categories/dev/page/2/index.html","312684f337760d98ceb5eced63c394ff"],["/zh-cn/categories/dev/page/3/index.html","79f7e03ed9ceb9d356fbece06b4484ce"],["/zh-cn/categories/maintaince/blog-setup/index.html","dd96c6aec57e83efa67a2b4204d42cd5"],["/zh-cn/categories/maintaince/index.html","da4923c69d0fa979f612ff66ef513136"],["/zh-cn/categories/maintaince/macbook/index.html","1ab0b29fa2b90c8e58c6900608a1f82b"],["/zh-cn/categories/maintaince/router-config/index.html","94c6b8e4c1e7cc8349c5d864db9e572e"],["/zh-cn/categories/notes/index.html","303c0544309468aa9a34c42e3e175b6c"],["/zh-cn/categories/tricks/android/index.html","910145521239ff7414ac51f2adfa4c57"],["/zh-cn/categories/tricks/index.html","4998e25535739694c8798da04cdafac2"],["/zh-cn/categories/uncategorized/index.html","edf7e8bf9eea54c55972745dca41edcb"],["/zh-cn/categories/works/Front-End-Dev/index.html","3e813ddb25fb6951fb781bec922285e1"],["/zh-cn/categories/works/csharp-wpf/index.html","5cdc4c3dffa083c92cfd66f06f672d77"],["/zh-cn/categories/works/index.html","dcddf54d1386434c612c1a88535f3159"],["/zh-cn/index.html","f3296b020bcc82c4af412c3cff3561b9"],["/zh-cn/page/2/index.html","1ad132484daa399a382c4cf89ebd7371"],["/zh-cn/page/3/index.html","2c3e1d001e2d07944415c95a681d0d71"],["/zh-cn/page/4/index.html","9c7194c11d8e9996b3b2c735f9cb48c4"],["/zh-cn/page/5/index.html","9f834509b1acd7084f86881d5673b929"],["/zh-cn/page/6/index.html","5c24c92ae1b5e7789831e21bf9796d20"]];
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
