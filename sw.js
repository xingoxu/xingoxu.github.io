/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","6fdb4a11341fe3bcae675d63274a782f"],["/2015/03/android-hostname-change/index.html","2bc80cfcbf3473e84882e3d2da75827b"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","73a26a62e1151d7ff33a06bba8183913"],["/2015/04/android-chrome-issues-with-webpage/index.html","48ef14f351925b52a512f1178f06da21"],["/2015/04/cpp-study-log/index.html","60ed3cb6ed3345ad517240eda29ae527"],["/2015/04/github-pages-ssl/index.html","8c43fd6a0e0415da481266fd9d292ea5"],["/2015/04/hello-world/index.html","edc5aed717f0e170d87cbd0363f6d8f4"],["/2015/04/hexo-setup-log/index.html","abfb5c2c231899293555bce03a914258"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","895cb932f81fa0119376dcac4b4ac265"],["/2015/05/cpp-inherit/index.html","cfb9ea7b954b08f8df52eb8246b154ac"],["/2015/05/cpp-polymorphism/index.html","b1399265d153cc220dbfa3409a9599ef"],["/2015/09/android-root-ota/index.html","ad3764e7d671858dffbb42d2df6e731c"],["/2015/09/java-learningNotes-1/index.html","9799b931be3ece5940f4f295721fe01e"],["/2015/09/newblog-newlife-2015/index.html","dbf3698cccd51ce731a3757f7cd79f63"],["/2015/09/router-rebuild-2015/index.html","39a1dd3ff1c90a4e95181342587e71ab"],["/2015/12/2015-12-21/index.html","8102c5adae746abab634b132900fb2b8"],["/2015/12/PixInTouch/index.html","d4f0c1114442c6a86c8f430682569206"],["/2015/12/git-study-1/index.html","5aaca4437488b605a913f8033fb73429"],["/2015/12/hexo-backup-and-migrate/index.html","cdf4e81eecc79c2a603b62d06c324858"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","f127ec58100c0bb4bcc029417b18120e"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","823741d39d0e23bf3a3404f5ac94fbed"],["/2015/12/router-reconfig-2015/index.html","057df59dc558b8e6511698fbb87ebe37"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","32811b727d87e75418f3861360732900"],["/2016/01/2016-stepping-further/index.html","5fec2058202d56a28be00e4dbf053f75"],["/2016/01/Android-Study-1-22/index.html","66a67aaf26b455d1ffc9fcbac3b197e3"],["/2016/03/2016-03-20/index.html","37388138eff27de07153c94ff98202b3"],["/2016/03/GSC-535/index.html","8f93545dea1884d0cdbfd232ef601d20"],["/2016/03/gulpjs-1/index.html","f4b441d270b86d40bce319f6032f8cd7"],["/2016/03/hexo-theme-paper-white/index.html","0b40a2ca366e387b2239c28df5abbc63"],["/2016/04/2016-04-19/index.html","99410167f1d888c5ea0478f574782840"],["/2016/06/2016-06-16/index.html","a405d7f07f7c1ec182c5bc5f9758c98f"],["/2016/09/2016-09-18/index.html","64b6449e6ea5210d76c7f1fbc7bb34c2"],["/2016/10/2016-10-27/index.html","49d031a031130c4693c787fc1352cf14"],["/2016/12/config-switchresx-and-2khidpi/index.html","f4b32b96e1f346717b933c5b34499fe9"],["/2016/12/improve-duoshuo/index.html","560958a2f846c0a0d0d678669081d3a6"],["/2016/12/use-travis-ci-your-blog/index.html","3c344fe78e4d9f2dbc86bad99a7c8d54"],["/2017/01/2017-iyahoi/index.html","2744258f2e9d35f8c22b22e6fc6db5ad"],["/2017/01/webpack-amd/index.html","3ea3887fea1943cb86ad7d97a1c51522"],["/2017/04/kotobukiya-syaoran/index.html","6fa780245c7bb2f80081f12737eab846"],["/2017/04/macbook-and-surface/index.html","cfc5bc29952b7896b7d949b7a63fe48d"],["/2017/04/uc-hyakuya-yuichiro/index.html","c1d9a6241315043187b3df802e09e386"],["/2017/06/noragami-seichijunrei/index.html","0498df3133471eeb13c344fedca213be"],["/2017/08/cross-compile-55-libev/index.html","5702be347d313116552f1189e175b469"],["/2017/08/explore-service-worker-working-lifetime/index.html","8b7482b6c0523e4e88dd9116563d5433"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","333e00087d543d4d5a94f70fd22d7bd2"],["/2017/09/record-user-login-status-methods/index.html","85559ab48d1e9695c492e9fd26910c56"],["/2017/10/vue-typescript-early/index.html","774fcdccf6e9167124865fe87afc5f53"],["/2018/04/2017-end/index.html","098e0bdc20890221954ec6bd1839bf94"],["/2018/04/twitter-account-activity-api/index.html","9847394489ba46e323a8051be54fd385"],["/2018/05/buddy-complex-seichijunrei/index.html","eda6f1fef802b0d49705fbc48a16054a"],["/404.html","fe88b80e4c1f7548e563fd543a9b1029"],["/about/index.html","9d0582c550f8d413fdf7074410d00bd9"],["/archives/2015/03/index.html","d65b2a42665efed4c15277a1f4c983f5"],["/archives/2015/04/index.html","602f730564886f28fddab331ee85e4df"],["/archives/2015/05/index.html","73f3a7af1e510b0508ae132081094e89"],["/archives/2015/09/index.html","70c9468929a6e0163c3413ca936f0ee7"],["/archives/2015/12/index.html","61c6411c73642f1811ac080f4bbb2530"],["/archives/2015/index.html","fa9f9bcb26653cb139d6be4b8325adf8"],["/archives/2015/page/2/index.html","4cb81bbe66e90bbcd4e665ce9b3f4a48"],["/archives/2015/page/3/index.html","a125d4ec8ed2aee23b70b47216b3cfe2"],["/archives/2016/01/index.html","047eb9d87a4c47512b5e1bf4d5627742"],["/archives/2016/03/index.html","7101f151f78d027329461b19ebc7fe85"],["/archives/2016/04/index.html","d30cc620c80160f4ee9a7288a0eebbcf"],["/archives/2016/06/index.html","60584f65b47ddc7ed8804cdbe36bd7ee"],["/archives/2016/09/index.html","a95b378c9099e4f05a59d0fff5f109b8"],["/archives/2016/10/index.html","26a5c3918cfbe6395cb370978ea47780"],["/archives/2016/12/index.html","2acb5a23b383dc9122396e3272b846e0"],["/archives/2016/index.html","8e3605d178ff2d56b2ebdbd722e7159e"],["/archives/2016/page/2/index.html","b1060b96afe73d95825aa61c97541749"],["/archives/2017/01/index.html","b5e8c65b6bcb4225fa946f90fccd953c"],["/archives/2017/04/index.html","9a066f4a5d33d9f996b1f791d50bd789"],["/archives/2017/06/index.html","1e398b75d3d9bf3caa95799962f0d8b7"],["/archives/2017/08/index.html","9d4b1f1526f7290f934546a5500ed84d"],["/archives/2017/09/index.html","a58ee35077a6b32ae64f3e3390c27357"],["/archives/2017/10/index.html","b831119807bf6ec3fd151697f7bbcfee"],["/archives/2017/index.html","dfd538853bb09aedbd265d7552957f56"],["/archives/2017/page/2/index.html","ffec8c46b7612e1ba51c17493d27341e"],["/archives/2018/04/index.html","fd75596bf8b96818bf09d11258e752fd"],["/archives/2018/05/index.html","37e29b02fbd26c92c4a5f350af3bba11"],["/archives/2018/index.html","903b11c5d0aa6809fe8e81870126f565"],["/archives/index.html","1ebc7c8e4c191ecee9e2076c876de969"],["/archives/page/2/index.html","a26f3c0402e2933a89dd6dcedd6a2976"],["/archives/page/3/index.html","74b1d75338d72e8b2f70dad9d4b96125"],["/archives/page/4/index.html","316ca7677150cabf2f1da00cde66c1a7"],["/archives/page/5/index.html","b07aef534178fe59f30e8c4f88adf331"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","e43cbb451f20e22a584b4d05fd805af9"],["/categories/ACG/Music/self-copy/index.html","366f4a0c69b41ae317ef8be79fbf060b"],["/categories/ACG/Travel/index.html","579463cc65d1a9808f7e361beaf566f7"],["/categories/ACG/figures/index.html","b755119efe7e5887ee29ce8fe7aa2dc3"],["/categories/ACG/index.html","5565e86a89140c449cc43c2b1b7639ad"],["/categories/dev/Front-End-Dev/index.html","08da47ac7f88494e186d073136531dce"],["/categories/dev/HTML-CSS/index.html","4c4acdc7b5aefc38028fcc6e7e53be2e"],["/categories/dev/android/index.html","eeb46b8df259d79986b158571d184a9a"],["/categories/dev/cpp/index.html","daf0173fa4492238c236d2003af839a6"],["/categories/dev/git/index.html","9696e2e0635d3a48107595f99b4ae25e"],["/categories/dev/index.html","5c316ef46a346fca8fa4aca86e7b88f7"],["/categories/dev/java/index.html","30357191db99b85f0bded987d407f819"],["/categories/dev/page/2/index.html","df07d7c140f67c03779394b0de678f92"],["/categories/maintaince/blog-setup/index.html","6f57511f9a3c7a998789d00e79e0d857"],["/categories/maintaince/index.html","ae8350eddd9122eead0e20f134b7ad13"],["/categories/maintaince/macbook/index.html","09850b1ead8e6b520005711c50c06086"],["/categories/maintaince/router-config/index.html","b0870257b3499d376628b12ffc9af080"],["/categories/notes/index.html","790789cabf415ba2e00ab39a36950e7b"],["/categories/tricks/android/index.html","ff5212165e8435cdafcad3e0f1b068e2"],["/categories/tricks/index.html","bc088b3ea5f91d71f1a13060b4f8bf5b"],["/categories/uncategorized/index.html","79bd665241ac0575b2793a913a3ca944"],["/categories/works/Front-End-Dev/index.html","339c1a1f2708c113655681af66c9cf0b"],["/categories/works/csharp-wpf/index.html","475e8a3c6ad3dccef39d2a05f6163121"],["/categories/works/index.html","ccc424189764bbfe4a2cb01767dd7b1a"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","60adc9c6a69d4d08533bbafd9ebde81f"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","8c2d1558b1b9175f2bac1e2e99c0ce1a"],["/ja/2015/03/WNDR4300-setup-log/index.html","15c61717994cadeb468a029053f9b227"],["/ja/2015/03/android-hostname-change/index.html","df17864c58f76d0a9a76bae9c872971a"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","c765e8f1d624e4bc9572bddd0e778bae"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","2adf915138f5fe9e8caf001d0b5e5845"],["/ja/2015/04/cpp-study-log/index.html","3376fc4a2ac4bb354cde63d34c8e4c3a"],["/ja/2015/04/github-pages-ssl/index.html","e71e9d677e661c5c36d2fd74df761701"],["/ja/2015/04/hello-world/index.html","968f39e31c89ff99ffeb5c9a167b773f"],["/ja/2015/04/hexo-setup-log/index.html","57d1458b276183f8f6ad08a1712336f7"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","9c1dedb4f01289973747c95d65626e46"],["/ja/2015/05/cpp-inherit/index.html","6dec52706bfbdcc5278d5c91e388b83a"],["/ja/2015/05/cpp-polymorphism/index.html","99338febc0445773e622273933de2eba"],["/ja/2015/09/android-root-ota/index.html","2c5f52e0018ca0e9364aba59ce18e66e"],["/ja/2015/09/java-learningNotes-1/index.html","c17e916c44f99ee760734697f5400daa"],["/ja/2015/09/newblog-newlife-2015/index.html","cefe4a54b1256a358a298335ce06179d"],["/ja/2015/09/router-rebuild-2015/index.html","d56d7ecf9e5e3caed9d3b51e93f0117f"],["/ja/2015/12/2015-12-21/index.html","dc5c10cf6e48a58fdb97d4f17cf258ec"],["/ja/2015/12/PixInTouch/index.html","7145f689ac1668339284cf6158db6503"],["/ja/2015/12/git-study-1/index.html","20d4367c2e926531a8f64f3c45944668"],["/ja/2015/12/hexo-backup-and-migrate/index.html","beff50328e433c9d4b13b258a5c323e6"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","a00b388449e87d766219f87005c22b39"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","53dc219e41e9c8eb4401a5c01db9fc7d"],["/ja/2015/12/router-reconfig-2015/index.html","a6c243ad5cb0275786455cb8e153c188"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","13f4a50d19e57da8f7c1e0fc0de47519"],["/ja/2016/01/2016-stepping-further/index.html","fdb496e29f4bf03c062af7999b258ec8"],["/ja/2016/01/Android-Study-1-22/index.html","ce305d210363eef026437b89e97917cc"],["/ja/2016/03/2016-03-20/index.html","3b25daa13d97898715e6d7b20485f55a"],["/ja/2016/03/GSC-535/index.html","e566be9b56e92785128ea1f73918c2d7"],["/ja/2016/03/gulpjs-1/index.html","0010b9a77cbe7333c83b2c8980dc0af9"],["/ja/2016/03/hexo-theme-paper-white/index.html","cc1ea7689f6c54c0d3ba13efb0854aea"],["/ja/2016/04/2016-04-19/index.html","622ed9513b046f43bf73f247334cb9e2"],["/ja/2016/06/2016-06-16/index.html","4d30cb9efcf930a64295a9ed4811670f"],["/ja/2016/09/2016-09-18/index.html","0cddbad877f883db838fe5a3ede1fe93"],["/ja/2016/10/2016-10-27/index.html","3409ea76af1cb28b121ee63f8fba934a"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","1e3b3dd7e5cbb548027cfad7b39066ba"],["/ja/2016/12/improve-duoshuo/index.html","93c8362cd0b43847a13f68698cae06dc"],["/ja/2016/12/use-travis-ci-your-blog/index.html","3180f9480e785332dbdc63b48171e345"],["/ja/2017/01/2017-iyahoi/index.html","6bb7b479b6b5902f0f1232618aa5e902"],["/ja/2017/01/webpack-amd/index.html","8dbe1eaefc6a0d4f44729f450fff49f1"],["/ja/2017/04/kotobukiya-syaoran/index.html","c09357b102634d2ee40c47373729d469"],["/ja/2017/04/macbook-and-surface/index.html","cfdad2d8b6bbd0dca504e9a980ec23e4"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","2548c0c9a9addc7f2407dc482444a71f"],["/ja/2017/06/noragami-seichijunrei/index.html","e625c1bd27e753ab0e4b0de10043bafa"],["/ja/2017/08/cross-compile-55-libev/index.html","8ae13b500db48fa310c98c896a652d72"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","83905d95545585a6399b861aa9edd5ec"],["/ja/2017/08/hello-jp-world/index.html","e157845a664682eed5cd657ed8eec1eb"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","9819f2a020e3a55dc6918d843ba36ae1"],["/ja/2017/09/record-user-login-status-methods/index.html","4077d841712da56a4c843ac51b0ef814"],["/ja/2017/10/vue-typescript-early/index.html","32438d61befe51b0e08496526a0c33af"],["/ja/2018/04/2017-end/index.html","bf0e44d82779164d3a47f3da8337a7e4"],["/ja/2018/04/twitter-account-activity-api/index.html","052f437565c053e3ddf3ca1adf9f9caf"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","ea342cd8ac8280b8333ed317587887de"],["/ja/404.html","d62c31b2fd163834e104eeeeafd12f20"],["/ja/about/index.html","9c399f2574267dd350af0341549160bc"],["/ja/archives/2017/08/index.html","5cbd9930584e7c17ef1daaacbdaa1b40"],["/ja/archives/2017/09/index.html","00b5d490767b2af8a7d7c98fa8b4fd75"],["/ja/archives/2017/10/index.html","94ade8cc178a4b6e2302c1dd5a706509"],["/ja/archives/2017/index.html","b71b63116ca87db36d0a008ec83feaaa"],["/ja/archives/2018/04/index.html","e18184cdcd4b8ae83bd72170f4467ab6"],["/ja/archives/2018/05/index.html","5b7dfbdc710eb36fea5296eedcaadeb6"],["/ja/archives/2018/index.html","e19028bef7381be110b4fa121744f0d3"],["/ja/archives/index.html","673c31593a6acb4c433f1361920c7d06"],["/ja/categories/ACG/Travel/index.html","b892b546c3665a0dc37075327875bb0c"],["/ja/categories/ACG/index.html","dfe51a14937013e0a1700f5d965af793"],["/ja/categories/dev/Front-End-Dev/index.html","173ebb362f5f3363fe3ed877dabe25d3"],["/ja/categories/dev/index.html","7ba668e82e257c03dd0f8ee18953ad86"],["/ja/categories/uncategorized/index.html","7684a9e611a1f59ee8fd36f725d379cc"],["/ja/index.html","f1c7d9ac5edd9c3219d46bd542553327"],["/ja/nihongo-test-page/index.html","08e7bfa2cb9a66d87b587bdf5fe1a353"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","31ab6da76fdd3026779b9d2e31f88b7e"],["/page/2/index.html","7f83088aab05bde573846f9bdaa659ab"],["/page/3/index.html","2b7adbdad61e2caa755d4d6119609eef"],["/page/4/index.html","44ce5bbff1fbf8c6408790da7da1efb7"],["/page/5/index.html","dcd801a18349ef4d05069a5b47a71c24"],["/page/6/index.html","eb18d0d011036aae8773a817b7b70d37"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","f57490bf212dfe941764ca04f25cb66d"],["/zh-cn/archives/2015/03/index.html","73e853e01d2e8a035f3888ccfdca98c7"],["/zh-cn/archives/2015/04/index.html","e5051dfc65009b3daec1bd548cd50054"],["/zh-cn/archives/2015/05/index.html","42aa997c61798ae0a29f988eb5796196"],["/zh-cn/archives/2015/09/index.html","ed5f37a3f4ab5ff7899e6588d60f3d70"],["/zh-cn/archives/2015/12/index.html","f95e9c4fc6b1065f519bc80ac1d0bd72"],["/zh-cn/archives/2015/index.html","91d2bc3330799198cff7e4c2a8ec5e31"],["/zh-cn/archives/2015/page/2/index.html","ffc69cfc62a6e2354a75409feb1154e7"],["/zh-cn/archives/2015/page/3/index.html","628d624ae2525cd048a5dced5c8689b8"],["/zh-cn/archives/2016/01/index.html","fae1e8f9034ab4dde3deaa22d71ec5cf"],["/zh-cn/archives/2016/03/index.html","9e627bd77b7b24a62cf1edac9eb979ce"],["/zh-cn/archives/2016/04/index.html","446d4ac61a1a0d9e24d19100183b957b"],["/zh-cn/archives/2016/06/index.html","bf9bd21792d97c582917ae3e93da23d7"],["/zh-cn/archives/2016/09/index.html","1c1a9ffa33eacdb7599e08571fde5461"],["/zh-cn/archives/2016/10/index.html","9603528e2e5873c20da943dd1ab22724"],["/zh-cn/archives/2016/12/index.html","8a26e03d8313437b8d442111d9641bd0"],["/zh-cn/archives/2016/index.html","0e0a6143ec520e71c3db2ac06a12ec79"],["/zh-cn/archives/2016/page/2/index.html","32e6651853bcdc9896e3d70c42babea3"],["/zh-cn/archives/2017/01/index.html","2e2102daecc87b499fdb41194874e06e"],["/zh-cn/archives/2017/04/index.html","8c206ecd37bb457fa6b5675cef328a55"],["/zh-cn/archives/2017/06/index.html","3497cf42396a4846b7057e85596db828"],["/zh-cn/archives/2017/08/index.html","fb158326d08da8ff02f01711b3594192"],["/zh-cn/archives/2017/09/index.html","5790f03edeb0bbc408e92bf8c147aeaf"],["/zh-cn/archives/2017/10/index.html","18a05f6295241e27cb2c34d18e9c01af"],["/zh-cn/archives/2017/index.html","ec273574fcfb96bbf40e8aab554f8c39"],["/zh-cn/archives/2017/page/2/index.html","baefdc08a2e1e23379891bf1bc0f9233"],["/zh-cn/archives/2018/04/index.html","f8eff45d58505d2d6113a01438096d65"],["/zh-cn/archives/2018/05/index.html","aae072074cd299590d4ae647e7a2d7cd"],["/zh-cn/archives/2018/index.html","7919027f217a98c277c31abba0147bff"],["/zh-cn/archives/index.html","6ec15440f20a3d07981edda32cfab2b0"],["/zh-cn/archives/page/2/index.html","a9c106f562ca3186c41fde7458e085cc"],["/zh-cn/archives/page/3/index.html","596763da10d93e9eb81425e442e4a8ec"],["/zh-cn/archives/page/4/index.html","e9a39b73bc24e8cd41040bd052c392c8"],["/zh-cn/archives/page/5/index.html","d076f8f538a20fee237e1f9924f7c648"],["/zh-cn/categories/ACG/Music/index.html","0650fbd05569b3d99d9be9046931912e"],["/zh-cn/categories/ACG/Music/self-copy/index.html","46077c919c5cdf3c40754e17409e8021"],["/zh-cn/categories/ACG/Travel/index.html","779c0202c88b7a27f2d73d120b6f1c1c"],["/zh-cn/categories/ACG/figures/index.html","0f70694363ad87809f764caec8fbc7a9"],["/zh-cn/categories/ACG/index.html","38de5ede738313d581f0a736a868d70a"],["/zh-cn/categories/dev/Front-End-Dev/index.html","6b38dda0cd19b592b27d5c9ce2a3c77f"],["/zh-cn/categories/dev/HTML-CSS/index.html","af0a2d83ac72d82923c344c85cccd4c7"],["/zh-cn/categories/dev/android/index.html","7189e6d0d1c52f2117453bc2dbfbd9a8"],["/zh-cn/categories/dev/cpp/index.html","1d8b2ec1585cec89971c3fc0106cd971"],["/zh-cn/categories/dev/git/index.html","102501147ddfa665921c4fb4442e5fbd"],["/zh-cn/categories/dev/index.html","c9494aa843c1045f4267ae2de070a726"],["/zh-cn/categories/dev/java/index.html","3f3ef62fcdd62ce4f0bde0d57f7d22e2"],["/zh-cn/categories/dev/page/2/index.html","c12e27cfa142ae07b8a99efb274f9a62"],["/zh-cn/categories/maintaince/blog-setup/index.html","009562e80d2e230d15dfec8634d8483f"],["/zh-cn/categories/maintaince/index.html","82e9a1f3eac96ebfc93588d061d94254"],["/zh-cn/categories/maintaince/macbook/index.html","11b62d3ce70d1d7dcb549956dcca7ecd"],["/zh-cn/categories/maintaince/router-config/index.html","6f09754b494367e00b20e781529888d7"],["/zh-cn/categories/notes/index.html","e0bc6f48db42db35755e8e976a6e50a1"],["/zh-cn/categories/tricks/android/index.html","8d2791b9e36c262013b265b53318adb8"],["/zh-cn/categories/tricks/index.html","6d178f2af0de4c5d3c9cc81068647c54"],["/zh-cn/categories/uncategorized/index.html","f8d93ea06910bf685c85048eafb766a9"],["/zh-cn/categories/works/Front-End-Dev/index.html","502b8549144c355f4ff272cd6c23c7de"],["/zh-cn/categories/works/csharp-wpf/index.html","5453bf1097074affc5a8965f89c11e19"],["/zh-cn/categories/works/index.html","7b5baaa0a3de69fe26eba525d839f3e3"],["/zh-cn/index.html","15eb79efb92d7b2016cda41e3b5a701b"],["/zh-cn/page/2/index.html","9592e17319e11c6ee549c63ed14e1f1f"],["/zh-cn/page/3/index.html","052550b9e6568423698c7afe4520ab52"],["/zh-cn/page/4/index.html","db22c5dc6e20c001574c99c68f22c514"],["/zh-cn/page/5/index.html","8a6d010342dd8bd7df060b2db8bc8f5f"]];
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
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"dn-xingoxu.qbox.me"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"od8634671.qnssl.com"});





/* eslint-enable */
