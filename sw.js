/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","1d8182ec7291669e78f4b588301027c8"],["/2015/03/android-hostname-change/index.html","86b881f05b220553f256589d5ce7e447"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","8b0ffafc4f020000b502431aa82d5278"],["/2015/04/android-chrome-issues-with-webpage/index.html","fe3bf5d1a720214e609708472f9664aa"],["/2015/04/cpp-study-log/index.html","665f1070abdde3d8f65296dfba961d21"],["/2015/04/github-pages-ssl/index.html","b9582d419d1d3bed9715fa6df4292798"],["/2015/04/hello-world/index.html","05742b10c3d46a33c1b3f6bed7a0cbf8"],["/2015/04/hexo-setup-log/index.html","53274a104bfa10d1e45cb3c4b4791e04"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","439d65c35796d2a7eccb7ef0eb8e60d3"],["/2015/05/cpp-inherit/index.html","c773243c3c54d203e7650ba4bebe3dad"],["/2015/05/cpp-polymorphism/index.html","33bcdd44f0cd14641b2ebb9098b22bc3"],["/2015/09/android-root-ota/index.html","0157aba7ac883f55674148cfc9c5c41d"],["/2015/09/java-learningNotes-1/index.html","bb0f6d23a05a27f0abc78a5975f0a2cd"],["/2015/09/newblog-newlife-2015/index.html","5c4ab4849f0d658c14104af5fca20748"],["/2015/09/router-rebuild-2015/index.html","b8104b27e1890dd6a98b2bd017c16d70"],["/2015/12/2015-12-21/index.html","e6ddcdaa87a50d41340320c316d2faef"],["/2015/12/PixInTouch/index.html","907610b6c3df0911e3f987246b9c25cb"],["/2015/12/git-study-1/index.html","f62cb8741612788d69eea4003a498331"],["/2015/12/hexo-backup-and-migrate/index.html","8a0a248db8a2672d109de7253b9ae92c"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","af74146a3cccc9d08c411673235e72cc"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","3053370b34458c6d0c873a36a335dfad"],["/2015/12/router-reconfig-2015/index.html","121cdaa2cf772670f8c3e4824344569c"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","1505f67383b77baa7ef6611c0d4136b0"],["/2016/01/2016-stepping-further/index.html","5e8c3f65cbebdec03ce6d1e49e758934"],["/2016/01/Android-Study-1-22/index.html","4bf4a972b805b8b4dea6f8257600eb9f"],["/2016/03/2016-03-20/index.html","6ef02f296322cbdf7bd09b5e71d101b9"],["/2016/03/GSC-535/index.html","e694330e9fcb56e4cbcf74ac37325c2d"],["/2016/03/gulpjs-1/index.html","618193cabf826b4f09d251dd4c36cdf8"],["/2016/03/hexo-theme-paper-white/index.html","dbb65baf5844bc225e60315b4ec88b14"],["/2016/04/2016-04-19/index.html","c5e396ccd7a68bd1ed8cbf40a3de1ba0"],["/2016/06/2016-06-16/index.html","c7b04ed40edf44b2559372177083a342"],["/2016/09/2016-09-18/index.html","22ffc936ace357d8f0064340293d15a8"],["/2016/10/2016-10-27/index.html","f6ad66389c2f98d11bbe409d229aa95b"],["/2016/12/config-switchresx-and-2khidpi/index.html","70d83e20839efc609f3de8f5df09dfaf"],["/2016/12/improve-duoshuo/index.html","5bdf9b7d2b6ced35f06da23dd059f257"],["/2016/12/use-travis-ci-your-blog/index.html","4d817d6c537591004faa447a68ce20ad"],["/2017/01/2017-iyahoi/index.html","93ef4bffcfaaf08ee80361ae53a18e7a"],["/2017/01/webpack-amd/index.html","7d748ad93ba64ffa18f41945a29a0958"],["/2017/04/kotobukiya-syaoran/index.html","c03ca8da49af0cb67888503fd03f3658"],["/2017/04/macbook-and-surface/index.html","3c44b00e54f235143fff660598c2f163"],["/2017/04/uc-hyakuya-yuichiro/index.html","031350078f65e07f8536741a81482ab2"],["/2017/06/noragami-seichijunrei/index.html","46c22a01e1a7b06563a590aabf2660ab"],["/2017/08/cross-compile-55-libev/index.html","21aaeb76ec0c65eaf9c724c902b14c89"],["/2017/08/explore-service-worker-working-lifetime/index.html","e443b078dc77c863e39abc637c712e4a"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","7aa7f052ea6819edd71f5bb80941b229"],["/2017/09/record-user-login-status-methods/index.html","a1ec6b0c0b27c9c88a7c5281396f15eb"],["/2017/10/vue-typescript-early/index.html","a9f557a7ae7d1c04c3478e94c59cdffc"],["/2018/04/2017-end/index.html","a284f24939e0e7b49c2fd77b0c01becb"],["/2018/04/twitter-account-activity-api/index.html","7bc05e0873f71e34ea562d37b1018202"],["/2018/05/buddy-complex-seichijunrei/index.html","c23be6fbb6595a8e92326d4408202a85"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","600a4cba7cf7d143db98e48c263ec205"],["/2019/05/2019-05-17-google-io-tech/index.html","fd98e9f7583412827830a81884c7ef1e"],["/404.html","728014b729622111ee305ce64c04b3db"],["/about/index.html","e0df3157e8368155bb9188bb5ada9076"],["/archives/2015/03/index.html","d8ed187a7f408762b70ca4fafc165cc0"],["/archives/2015/04/index.html","b0ae6f9a2370bbc874c5030afce795f2"],["/archives/2015/05/index.html","3ccb1819a954ac19a09080ecf56cbb50"],["/archives/2015/09/index.html","6f0e02b3d7cc92bce1e521a472d2100e"],["/archives/2015/12/index.html","2dfb5d62d0b7dfee1270642ffbc5d2e7"],["/archives/2015/index.html","34351e17c3c013a664f7b0e35deedad7"],["/archives/2015/page/2/index.html","2b61aa82ea8a39bd53de8b320e726fd3"],["/archives/2015/page/3/index.html","c48acb954f376f286614c01a22c9c922"],["/archives/2016/01/index.html","bfd978b10b3174814e24b44f33962856"],["/archives/2016/03/index.html","4df5dc300e39c3007f79f047e5bf0927"],["/archives/2016/04/index.html","11aae82936f500e2f33657026145d8ec"],["/archives/2016/06/index.html","109a3f4315044e8d7e1fe4ee75dfc8b0"],["/archives/2016/09/index.html","156bb1d36a56a26d96fc86b535aa4ce5"],["/archives/2016/10/index.html","0789b458507026ca210580b00c488ddb"],["/archives/2016/12/index.html","c522be68ee3fcaccbdbdf3773cf7b328"],["/archives/2016/index.html","0680a8a001b45f26023bacbed587aa0c"],["/archives/2016/page/2/index.html","bb723bc7f83bc366fb89e58566182464"],["/archives/2017/01/index.html","3dc819c9b25f3e77a05bf2b842b3e7e4"],["/archives/2017/04/index.html","476d8944292ae93b4abfb926394f8f30"],["/archives/2017/06/index.html","463220659ef80a853d75145c6dac0516"],["/archives/2017/08/index.html","2aaeea749230824f893a259360bc17d9"],["/archives/2017/09/index.html","47600d8b1726d5ddc1cebf3a4fe40b68"],["/archives/2017/10/index.html","23abdabcd19ba36eeb9f4c75e13a9b12"],["/archives/2017/index.html","8e3c3b39359226311f8777205d7302be"],["/archives/2017/page/2/index.html","d28f9fbd887e13aab5fec69eee2ea64b"],["/archives/2018/04/index.html","3170cd332b616494493e78ae023fe491"],["/archives/2018/05/index.html","962c3d532b66cf65f5b27ded656e2207"],["/archives/2018/index.html","c344ef1858283368c341c7c56c4b87a6"],["/archives/2019/05/index.html","c0275877b10bfe02e914f5258f1bebd1"],["/archives/2019/index.html","cbadee1ed415867d78b17d4474ebd723"],["/archives/index.html","13e1fcd8c1b7f4270e7f40a295232b0b"],["/archives/page/2/index.html","41d75f18ad67e65fa5cf2fa24f781948"],["/archives/page/3/index.html","34fdcac8b7fbe3ed110c2b48a089e537"],["/archives/page/4/index.html","18fff8262a4747fc76dd902ada65707e"],["/archives/page/5/index.html","bbb7916544ef0def4aef83968e7866ca"],["/archives/page/6/index.html","7f22c2bad34094e12475b03728de9770"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","36ab3eca4cd39bef36fc2b7a7c32039e"],["/categories/ACG/Music/self-copy/index.html","fddadffc29bb2d131db5c052024700d8"],["/categories/ACG/Travel/index.html","d34a27b1de796bf983434e42d07e9c64"],["/categories/ACG/figures/index.html","94759b4e180498191e4b6a15c1009d80"],["/categories/ACG/index.html","ebd0dd7684e4637be383b007c1346e4a"],["/categories/dev/Front-End-Dev/index.html","df17f9ae25d81a765752d5b2a52aaec4"],["/categories/dev/HTML-CSS/index.html","4a020d32e93331611fa14e75e92834e5"],["/categories/dev/android/index.html","cd799d877a110a2c4739eb0076b92fc7"],["/categories/dev/cpp/index.html","b99232d0cfe57a861afdd2d20feaf98b"],["/categories/dev/git/index.html","d7e6f60d0e1f706cbff96e9971cdd17b"],["/categories/dev/index.html","4c4c44b82609c3888b243a06576eb9e0"],["/categories/dev/java/index.html","b6e5e92938ee81c28b743eee164a72b8"],["/categories/dev/page/2/index.html","a2f62ea1a02ed5cd451397b1b9098718"],["/categories/maintaince/blog-setup/index.html","5c68ce342e3682d2cfad9103b462c7d9"],["/categories/maintaince/index.html","56508b006e11cb269cd045aa030c4ffd"],["/categories/maintaince/macbook/index.html","bf2ccfe972b5e293eb8b42965548c058"],["/categories/maintaince/router-config/index.html","5e514b05c0cfd020a8384c984406ed25"],["/categories/notes/index.html","dec54e580d21012c33e530b059d2bc37"],["/categories/tricks/android/index.html","0b0455e78202855de7771269e520ced1"],["/categories/tricks/index.html","9086741e1e76e6d374e7afcc4396334f"],["/categories/uncategorized/index.html","7ef336faa3bb511102d7ac872b8bb53b"],["/categories/works/Front-End-Dev/index.html","079e9fc6dec9c05c65d4b22213c67af3"],["/categories/works/csharp-wpf/index.html","12fa95298406965c39b59057d592b435"],["/categories/works/index.html","32e61a3ceca1a05866884719123c5928"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","6099feab8ef3bf865b627caf502ddbbc"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","a1311f2b3cd2138ebd74196abe22fa0f"],["/ja/2015/03/WNDR4300-setup-log/index.html","8b0d3cc280f2f7d54fa63352adf22380"],["/ja/2015/03/android-hostname-change/index.html","1ec99ff9a7b0c8cdb6cfa2e7e685904a"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","4e58ea34a275b4fa9965cef61b70bcf4"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","ca099c73ab4d094205d86a3d83d27abe"],["/ja/2015/04/cpp-study-log/index.html","6a68fdf8ea64b7fd0ef2efbf0ec2515b"],["/ja/2015/04/github-pages-ssl/index.html","c0edba224047cba43a1352fe950076e4"],["/ja/2015/04/hello-world/index.html","fb7f91f5e1412637e921c0a51c0c51db"],["/ja/2015/04/hexo-setup-log/index.html","3cc7efa39d1fe02b1d01cf2a4802ee24"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","2c58ae36cf5f7622cfcee0ad03a680af"],["/ja/2015/05/cpp-inherit/index.html","baa2cbeeceb86d94bc0f8662fb4174d1"],["/ja/2015/05/cpp-polymorphism/index.html","ee1a6e25210432429ba80c95ce9a46d9"],["/ja/2015/09/android-root-ota/index.html","bee38c370d1ecfd1b003d7f1d0da5b18"],["/ja/2015/09/java-learningNotes-1/index.html","86cf90f4bee5786ada0c2992363a9dfa"],["/ja/2015/09/newblog-newlife-2015/index.html","785fda4bfb9d293821e3638e3efe57af"],["/ja/2015/09/router-rebuild-2015/index.html","80e1dffc215fa7bba989202364b042b1"],["/ja/2015/12/2015-12-21/index.html","f7fc57349eb3002d87ab87201864fe9a"],["/ja/2015/12/PixInTouch/index.html","e8f366337061281b7d05a15357739f57"],["/ja/2015/12/git-study-1/index.html","a8ff7bcd69a77d2b4801d0679dddc5b5"],["/ja/2015/12/hexo-backup-and-migrate/index.html","b4e7c96e5935f3b4b4f5128dc07c457e"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","097458026d3fb41aa9b92756fe47c61f"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","19e573b3ef56121fa31dbed768fde364"],["/ja/2015/12/router-reconfig-2015/index.html","7f579e4148a6ffbb0cfdb83c0c889b26"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","3c267f066f54ee8627db5b336e880303"],["/ja/2016/01/2016-stepping-further/index.html","6784bd6d5f95a0fbb1b5cae9c5d74a9c"],["/ja/2016/01/Android-Study-1-22/index.html","7652cfebdff5ba7d91b916301c4743c8"],["/ja/2016/03/2016-03-20/index.html","bccfadfad7fd9a32fb3614099f931e79"],["/ja/2016/03/GSC-535/index.html","748b5b24b944ea78d34f56e851dfe9bf"],["/ja/2016/03/gulpjs-1/index.html","aae30ebf6653c2426a799ff1f9a1c35a"],["/ja/2016/03/hexo-theme-paper-white/index.html","b7c0075e45ca7fd2328b27cf705231d0"],["/ja/2016/04/2016-04-19/index.html","baa531b529581e3e965d8d0d156cd619"],["/ja/2016/06/2016-06-16/index.html","8151035ca2cd008b015e298ecd448485"],["/ja/2016/09/2016-09-18/index.html","1fe7ca3a273511b3fa166b537a1bc00a"],["/ja/2016/10/2016-10-27/index.html","a7acb0ca508bdda8d3548d3c78e49f67"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","1a72f7b3df996067824778ef08f9eaae"],["/ja/2016/12/improve-duoshuo/index.html","39080c3a408c0742935b9e31d2af1de6"],["/ja/2016/12/use-travis-ci-your-blog/index.html","c69424eca73fe475c272a28bb95e76c2"],["/ja/2017/01/2017-iyahoi/index.html","d826299e67a005b228400127cabd263c"],["/ja/2017/01/webpack-amd/index.html","e9cbe04d47e57c432aef9ede46ac1584"],["/ja/2017/04/kotobukiya-syaoran/index.html","9dc300a5ec58b3d4cf46750ae53be6c4"],["/ja/2017/04/macbook-and-surface/index.html","bbe6b403068941fc211e8969f49bfc86"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","c7f4eac0d0d3041344113d7adeafdc88"],["/ja/2017/06/noragami-seichijunrei/index.html","5a11b02e548e8f95d832305f6f3e06f4"],["/ja/2017/08/cross-compile-55-libev/index.html","ea78b406cd4467cdd4d150555e40f641"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","2d42ace29afc50c768ce4e63bbb6ddad"],["/ja/2017/08/hello-jp-world/index.html","d9d789064140d85724b4ee6534e53e56"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","368ddee4669673f26ad2e4dd7c19fa12"],["/ja/2017/09/record-user-login-status-methods/index.html","59e397c6177780424fc1ab4d1cb34982"],["/ja/2017/10/vue-typescript-early/index.html","614400a9fe19c2af735f14bc67c85521"],["/ja/2018/04/2017-end/index.html","8dd9b0035bc509d5e37e8e2864be4b5f"],["/ja/2018/04/twitter-account-activity-api/index.html","2d2a04609347f6646651e30751dd9e87"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","082f4b1a695f7d2a52d1a97a1aa8e643"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","3d71653b1e993b8a2c8a346bd998050a"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","96bcb2f0a2d2f510ddcdaa6b00eaef26"],["/ja/404.html","e3bc7422fe45cc864df92f0f9aa27303"],["/ja/about/index.html","dcce94fe90002340ac5343ddb3cc7147"],["/ja/archives/2017/08/index.html","1efbcbc87ef2f0c67a728d3f3d44b316"],["/ja/archives/2017/09/index.html","52577eaab331f7343eab87748823d7f8"],["/ja/archives/2017/10/index.html","16aa52f5a833a4102569c239546b56ea"],["/ja/archives/2017/index.html","15a577ba810066698d759b9fe07f61cc"],["/ja/archives/2018/04/index.html","59ecc1e0fe7d18fc6944f5d027e0aa69"],["/ja/archives/2018/05/index.html","4aa281beaf0d78e68b9509db6837a519"],["/ja/archives/2018/index.html","2c9cf74b40fe44b6688d14b83c4fdde6"],["/ja/archives/2019/05/index.html","1b4604e928f4d20a4a288faee47ef0aa"],["/ja/archives/2019/index.html","60e79f7fe2ed2d83f53da569dfb927a3"],["/ja/archives/index.html","f3d481d184f5f77bc8dd5bb253bab273"],["/ja/categories/ACG/Travel/index.html","18b0355e76b32171bf5c285b3ae221bb"],["/ja/categories/ACG/index.html","03b15c907dd0c0bb34d3381ee5fbdc69"],["/ja/categories/dev/Front-End-Dev/index.html","7fe487a3e10255c05a0408a24cbe3aed"],["/ja/categories/dev/index.html","3b80b5113df01b717a4317ce579ed5c5"],["/ja/categories/uncategorized/index.html","b3bfd3b61537de0b1e866b6e21d34332"],["/ja/index.html","6ce50dbc3e376ebe3ee6d036c4895846"],["/ja/nihongo-test-page/index.html","a15ea6be27864c3cae4f93c26e59312c"],["/ja/resume/en/index.html","c65e4f61745ff02f11b876fbd694b68c"],["/ja/resume/index.html","b118cc844f9598a218e4d8ed794fe04b"],["/ja/resume/ja/index.html","d2b4baad086bab3dcd5d5c3e0d0937b0"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","5ec31fe16f417723312ac3e920298e64"],["/page/2/index.html","29619ad171182b0c46160aad5a1dbfae"],["/page/3/index.html","ac663d9ff485c6f58d121eb0294dad0f"],["/page/4/index.html","36fc9fc45121d23a3227ec5f661f2b8d"],["/page/5/index.html","cc9212b6d6fe2a767e7a912e5d611f4a"],["/page/6/index.html","c7d6e741eed98bf459297a04a451f4bf"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","a75d84ffe9aac9e7e54bf4adb118e9da"],["/resume/index.html","249133b9fce1016272487c1cda8139b0"],["/resume/ja/index.html","9703b43cdded15433f88582130743187"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","4be41ca4755348d2fadca75d177bcdbe"],["/zh-cn/archives/2015/03/index.html","487c9c2f760200d53044526e81173423"],["/zh-cn/archives/2015/04/index.html","067c8f1e68945c71ed2ceabd661d59c4"],["/zh-cn/archives/2015/05/index.html","c9e8b62dcbe7b01c012cfcc0626a7f26"],["/zh-cn/archives/2015/09/index.html","c8d99e10667f66b4e0bc6e259bcc311b"],["/zh-cn/archives/2015/12/index.html","7747a40ae2d6da1397946eadbf88908d"],["/zh-cn/archives/2015/index.html","69d8a3c7e5fcab4aa6051087349c80f0"],["/zh-cn/archives/2015/page/2/index.html","c941d778377057163c0287d33ebe3e4f"],["/zh-cn/archives/2015/page/3/index.html","4fb5b5ceb09c23c29f11fc4b580e8817"],["/zh-cn/archives/2016/01/index.html","3a98694ee58099a1732956bac22ee39f"],["/zh-cn/archives/2016/03/index.html","88255d0ced1cf3c84ce10c6c0f9dbe88"],["/zh-cn/archives/2016/04/index.html","4a808c2ec0e1a40b001a365cb85aa2cd"],["/zh-cn/archives/2016/06/index.html","2b3b582fffda86221a565eccb7e1fd19"],["/zh-cn/archives/2016/09/index.html","6b9166cfd1e69c57d985b5e1d7111489"],["/zh-cn/archives/2016/10/index.html","d015f1a66661c19acd8879722385c696"],["/zh-cn/archives/2016/12/index.html","7f82033c2a915b4e274e2424f1867db8"],["/zh-cn/archives/2016/index.html","3e9fd07518f6ec353cbf839ab68ba5be"],["/zh-cn/archives/2016/page/2/index.html","7775fd88ee58c768e8addff8ac2eae39"],["/zh-cn/archives/2017/01/index.html","be48eea004ad6088e6eac2f828c105fc"],["/zh-cn/archives/2017/04/index.html","4515b89b8532b7bfe4ba424010581135"],["/zh-cn/archives/2017/06/index.html","0cdffc7dae050af9d253d293ebaec227"],["/zh-cn/archives/2017/08/index.html","14587ef6e83770ba804cc3c5fe5fd63a"],["/zh-cn/archives/2017/09/index.html","dce4fcc1c8448454adddd16f9e133015"],["/zh-cn/archives/2017/10/index.html","7161887e3288dfb62211a546b40221ef"],["/zh-cn/archives/2017/index.html","1c65241319897b33a7a73193bc55b0d4"],["/zh-cn/archives/2017/page/2/index.html","607f1b200aa93ba9236784249ddde408"],["/zh-cn/archives/2018/04/index.html","3bfc8a8beae731d89189aeae32224def"],["/zh-cn/archives/2018/05/index.html","2d94484a9652d4d4c248442bf5dd58e6"],["/zh-cn/archives/2018/index.html","623cc90626b923197b98e4005de3a7f9"],["/zh-cn/archives/2019/05/index.html","5e5d44c16a870e94415ed47c31f87ab9"],["/zh-cn/archives/2019/index.html","d6f2ab33784d5b34d99453af0a2b6fe5"],["/zh-cn/archives/index.html","1f96e12574f11b8c937b72b744ad6303"],["/zh-cn/archives/page/2/index.html","5a8e08855f516fd687bb08ac647b1a47"],["/zh-cn/archives/page/3/index.html","ed5c58923994a7298ee7921d7c39848c"],["/zh-cn/archives/page/4/index.html","5b6bf6b67d7520b9942a15e5e53f668a"],["/zh-cn/archives/page/5/index.html","414987854d6240c17562093029364d8e"],["/zh-cn/archives/page/6/index.html","60c3803806a3c25b07752855af285c77"],["/zh-cn/categories/ACG/Music/index.html","0b938e93027daa6484270cd0f4616fa5"],["/zh-cn/categories/ACG/Music/self-copy/index.html","7c6d73a539116542bf47074aaf81f79d"],["/zh-cn/categories/ACG/Travel/index.html","258a4f9309e16d0695eb4d541e4f64b5"],["/zh-cn/categories/ACG/figures/index.html","473bd3905203596cf9af76d97d2aea62"],["/zh-cn/categories/ACG/index.html","dee51c7794c5fdabf968e11579e86fb8"],["/zh-cn/categories/dev/Front-End-Dev/index.html","2a2fbc988f509e6fbe183a99e134709e"],["/zh-cn/categories/dev/HTML-CSS/index.html","49af3281f32fc2f1a71a50cf54c6f73c"],["/zh-cn/categories/dev/android/index.html","7279090e8d552385ecabc47e3bde1129"],["/zh-cn/categories/dev/cpp/index.html","b52b452a886a7ae3a728d1a8fc0a6db1"],["/zh-cn/categories/dev/git/index.html","6fad2269b995949745ea477ed7aa9549"],["/zh-cn/categories/dev/index.html","8a528fb38e1a62039b097c603b09c6f7"],["/zh-cn/categories/dev/java/index.html","f73ceb31eab26f0c0e3d6cfade756dd0"],["/zh-cn/categories/dev/page/2/index.html","a95baa4fa895eeca84686a19344533aa"],["/zh-cn/categories/maintaince/blog-setup/index.html","c5c7f4c50d97f6ffad8f420ce0c65237"],["/zh-cn/categories/maintaince/index.html","a7a00c3f3f345a4b15a48020840c183d"],["/zh-cn/categories/maintaince/macbook/index.html","ef573af836d25c332c4390a7989ebae6"],["/zh-cn/categories/maintaince/router-config/index.html","4fc7e757c8672d4c20930861dc0f5cbc"],["/zh-cn/categories/notes/index.html","f3b650ce657f1749660007adfedde599"],["/zh-cn/categories/tricks/android/index.html","5ac34db685185729d43e51e95cea12b2"],["/zh-cn/categories/tricks/index.html","4ed952d7bdf770c43b35008c0737be5b"],["/zh-cn/categories/uncategorized/index.html","0833df66e23a6856803f55251c0eed02"],["/zh-cn/categories/works/Front-End-Dev/index.html","3cba0892325ff63f7d2b720779bee3b4"],["/zh-cn/categories/works/csharp-wpf/index.html","9e508602e4645c17e3b6b4df6337b583"],["/zh-cn/categories/works/index.html","615291c469668883df4b97a69fdbc8bf"],["/zh-cn/index.html","3244aa4835e336975548bc4f4e13bc21"],["/zh-cn/page/2/index.html","db57c4ce58d402a7733eb900eb4a1d82"],["/zh-cn/page/3/index.html","1795756f341d41afc1101715f9101995"],["/zh-cn/page/4/index.html","54be1333db90d38468b1f1d024d22b58"],["/zh-cn/page/5/index.html","460dcae551c0cb3b5c1be2fd76beac16"],["/zh-cn/page/6/index.html","a443bf606548bb21c31f8972c42c9147"]];
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
