/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","d0cb2d4608b865c632c5a02ea3b15b29"],["/2015/03/android-hostname-change/index.html","106d0ac14229552a788bc119a0847780"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","5c1922796af741c6863779c24806bbda"],["/2015/04/android-chrome-issues-with-webpage/index.html","ac677617b33c8f72f0dbbeed34e3558c"],["/2015/04/cpp-study-log/index.html","bcfe8714893c6d16b7c565ea1314fbd6"],["/2015/04/github-pages-ssl/index.html","fa1a5f3d9c62d8630caff833808eaf79"],["/2015/04/hello-world/index.html","2c392442d2c8a91c3cc4059b3800e1d6"],["/2015/04/hexo-setup-log/index.html","d496dcd0715f6068f77b6b0ccd1ed929"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","5d77d9865f78951a79b5fc4f0af5e23e"],["/2015/05/cpp-inherit/index.html","a66b072ac271ecfdc1b356876ec5e369"],["/2015/05/cpp-polymorphism/index.html","45970d49f2d53c17ef903d6d9f7be161"],["/2015/09/android-root-ota/index.html","6ed141434305a2236f9fb4aefced33e0"],["/2015/09/java-learningNotes-1/index.html","8c6db7b9d035f149655dcf7216acb464"],["/2015/09/newblog-newlife-2015/index.html","6438d5f32d5127386e8fd2d82b24815f"],["/2015/09/router-rebuild-2015/index.html","b46846529718320468f4b0c901144789"],["/2015/12/2015-12-21/index.html","fcb8cb48111c9b801a7ec328f81126e0"],["/2015/12/PixInTouch/index.html","182bb6e815276aa903008711218ed439"],["/2015/12/git-study-1/index.html","1352ce4c55285b7f7bf7090012c496e9"],["/2015/12/hexo-backup-and-migrate/index.html","f877ab5c5ad6ea8cd668cd751ed13c2a"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","82abcc605c6de28d6ecc4b86428ac0f7"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","9014706477499732d3312344007aad38"],["/2015/12/router-reconfig-2015/index.html","e4575dd929ba54696e4852325ed097dd"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","ae28c6213dd653ea9da2a5c2ec2a59e4"],["/2016/01/2016-stepping-further/index.html","d26dc72c797c9d010dea2d4c0dcaab23"],["/2016/01/Android-Study-1-22/index.html","1c4869290e16dc7505e67fbbf6d7a67b"],["/2016/03/2016-03-20/index.html","b8a002e16ca80c17d63f23a0b4f046aa"],["/2016/03/GSC-535/index.html","cc860d82fc19f3ba3577b199c0fe7a08"],["/2016/03/gulpjs-1/index.html","ff7681e0e92adc8e19b544fff68474e7"],["/2016/03/hexo-theme-paper-white/index.html","29cc4f4b33168c7695675a83083d664c"],["/2016/04/2016-04-19/index.html","1a27bb8d756edfce7350c6d27ebc4ed4"],["/2016/06/2016-06-16/index.html","0baa5316d16a85a54a6a4a44b6986399"],["/2016/09/2016-09-18/index.html","cb5bfd0bea4262ec13fa794a24dd03d9"],["/2016/10/2016-10-27/index.html","711b82f5ef7af59691d080384831618c"],["/2016/12/config-switchresx-and-2khidpi/index.html","d91346f733cec69a1c3816e6d0e5a36c"],["/2016/12/improve-duoshuo/index.html","f5ec7603937d3502a11c3724ebd2e135"],["/2016/12/use-travis-ci-your-blog/index.html","5380eebff58e47cc1fb3f62ecb3304a8"],["/2017/01/2017-iyahoi/index.html","cca78e624f8ab95b0b4caffe9fb7e070"],["/2017/01/webpack-amd/index.html","094a2b9aa4ff512b8e9339ff82aac2fa"],["/2017/04/kotobukiya-syaoran/index.html","32fec3c679ff7d1269d113a5db45f690"],["/2017/04/macbook-and-surface/index.html","0de45237eb1d37b0e85ed0f2beb5c8dd"],["/2017/04/uc-hyakuya-yuichiro/index.html","9a3a89ca6c953d0faf38e2cc2cf4416d"],["/2017/06/noragami-seichijunrei/index.html","2c333bfd0b3175424a0d9d410f790b03"],["/2017/08/cross-compile-55-libev/index.html","2a4f663905319be5a424156d6bdc1cb7"],["/2017/08/explore-service-worker-working-lifetime/index.html","fdc10f88e0dc390c105088e8b99c09d4"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","0d0fa7ce7903c117a830cee0c30ff08d"],["/2017/09/record-user-login-status-methods/index.html","00291ac72add51e97702db2ed8405e62"],["/2017/10/vue-typescript-early/index.html","d9eaf80ea72f53ade379c7d3020a236c"],["/2018/04/2017-end/index.html","85e7918b7b21eaaa0d681773a787a6b3"],["/2018/04/twitter-account-activity-api/index.html","a8a61c5ffc337c7309d729a8d3c338a7"],["/2018/05/buddy-complex-seichijunrei/index.html","18083cb583f37834ba36cdf0d46573a0"],["/404.html","9603701b639cf5ea427f794b52d37d18"],["/about/index.html","36acc29fafb7e36db9cfe4b7b096934a"],["/archives/2015/03/index.html","428e6c598e14ecf73e8906d8f8c9a73e"],["/archives/2015/04/index.html","456a432ab998b9b7a25fdf1b940d023d"],["/archives/2015/05/index.html","ab742de925467e7bbd48dd970ead2e88"],["/archives/2015/09/index.html","cc10cd95647ea0eaa2d49c523fb46592"],["/archives/2015/12/index.html","a5ba2201035fec1c7b8bce6bd5de5a07"],["/archives/2015/index.html","1247d664da1e4fa382c76ae706e1d549"],["/archives/2015/page/2/index.html","685a348a447f2b95ed9901c2622ccf35"],["/archives/2015/page/3/index.html","197e06f68cae5c906c842e333875a74a"],["/archives/2016/01/index.html","512f1324cb4301f9a44d9dd7a66a1ff8"],["/archives/2016/03/index.html","051f4ebaff9fb3cf7c9ac0a335a72b78"],["/archives/2016/04/index.html","702702c0e17bca727239f0c4d72f326f"],["/archives/2016/06/index.html","3a3fe2a971df81776efcb1d726c089be"],["/archives/2016/09/index.html","502c4faa9b466058c55b72deee696513"],["/archives/2016/10/index.html","4ec233be1c429eb4bd1e83078b5a51dd"],["/archives/2016/12/index.html","2eadd0e472e7124f40ed2cd0c7b3bd23"],["/archives/2016/index.html","7f564c18b1d7cd7e0dda406f0f5e0c13"],["/archives/2016/page/2/index.html","c9307d73b821c533ed965dfdc626e2d8"],["/archives/2017/01/index.html","7d2ea1a5ce4ff35ed021c4a32522fbc3"],["/archives/2017/04/index.html","f160ad9172a06c1648db10d74ace36e4"],["/archives/2017/06/index.html","ae7f60bd996a0738fa969bcac531c2e6"],["/archives/2017/08/index.html","20836239108c4f09f1d98bc2a27dcbf7"],["/archives/2017/09/index.html","3f3c86c881bfe05ec1c302660229dd01"],["/archives/2017/10/index.html","8b6bf4063565f92ac92c7d8172df9fc8"],["/archives/2017/index.html","334dc71cff64c881e6847595334308ce"],["/archives/2017/page/2/index.html","b1f98c8750ae4ef490524ad677acb396"],["/archives/2018/04/index.html","3195577a0b1d07fa9621700b7e7fff60"],["/archives/2018/05/index.html","1c9c821f5777e46e971a3b93b0764965"],["/archives/2018/index.html","dbc5ccf203c709f34770a92af5ecd099"],["/archives/index.html","45a6fc9ac999092d46d3012fc87a25ee"],["/archives/page/2/index.html","24beb32de24233dbe88b0d04a6be0aa9"],["/archives/page/3/index.html","4e62e57aedf5d7cedf650829535fb7c5"],["/archives/page/4/index.html","0d2e590e39b96afb780fbcbdfdbad6a5"],["/archives/page/5/index.html","585b288eca97f36bb07f6deda0260d50"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","2165994f5b23971450a6fbd1c9faa50e"],["/categories/ACG/Music/self-copy/index.html","59e2e1e2d0433f45b1128f5b02074e59"],["/categories/ACG/Travel/index.html","c2b5d2e4403953e8b883a1e1befa5e4b"],["/categories/ACG/figures/index.html","b720071984cf52484b2686d9218d0400"],["/categories/ACG/index.html","f29891758a4c3b12bbd023f75f5311a9"],["/categories/dev/Front-End-Dev/index.html","7c646ae49cee89777124f1e2d9f3b7cc"],["/categories/dev/HTML-CSS/index.html","35bbc414c918c0437763aba5d4bac952"],["/categories/dev/android/index.html","9aea7376274a04bc8bf76cdf6409db08"],["/categories/dev/cpp/index.html","0464f755b5401c64daf1ca7cef356d29"],["/categories/dev/git/index.html","315c085b373313cdfa92274364898506"],["/categories/dev/index.html","2f29f9b24693b453e8e7e33e227a30c1"],["/categories/dev/java/index.html","f13e0de7f0f1d6176e712a6194d9375d"],["/categories/dev/page/2/index.html","cc490c01965b99183cabf8baec735a70"],["/categories/maintaince/blog-setup/index.html","4eccb2afba34917823b77cd187091162"],["/categories/maintaince/index.html","e9aba82a3e75b78c0d7c82cd9afe3b48"],["/categories/maintaince/macbook/index.html","15d43296d7bfa8b055f8b5bb4daa2c97"],["/categories/maintaince/router-config/index.html","2e7d50e864273994936ea98801090df2"],["/categories/notes/index.html","393d495a6dbb1159ebde7b95122c7843"],["/categories/tricks/android/index.html","4a219cba1294df9e431440dd87c4e7f2"],["/categories/tricks/index.html","1cc583b90d02f599e2362754d8248431"],["/categories/uncategorized/index.html","b9c83916d0240238721123af9dd375f9"],["/categories/works/Front-End-Dev/index.html","0d756722b6a6ff870aaeac0933c08504"],["/categories/works/csharp-wpf/index.html","7967fec61bfd5aab7d4abe0ab4d9b27d"],["/categories/works/index.html","60bb48da606c2b322fe6503bd3ff5bf8"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","e21657d8ff2f701595db4e2404d14563"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","c4b6c0ae3cf751ca380a3b2b7c224d69"],["/ja/2015/03/WNDR4300-setup-log/index.html","0c3c76afa054890ac27683b61c823c4c"],["/ja/2015/03/android-hostname-change/index.html","6da04cd71a449064a84d18c83f4ad785"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","a15c8e1fa12fa1785f4995fc8fcf189e"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","c00de1395c7a5d5d3019130b2b16545e"],["/ja/2015/04/cpp-study-log/index.html","db4f01192dedc1ad143198d86c54a790"],["/ja/2015/04/github-pages-ssl/index.html","4aeec405d37f93905151fd016b96e917"],["/ja/2015/04/hello-world/index.html","a4fb3f458a7c0f5016ccdb4987a1246b"],["/ja/2015/04/hexo-setup-log/index.html","5b1a9ff21ea5b44b7938a09e380cbd61"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","0bc23fbf44b1e1f5512c8891ed57e75c"],["/ja/2015/05/cpp-inherit/index.html","f1fdf430606c0ea304f260ffdd7f82ba"],["/ja/2015/05/cpp-polymorphism/index.html","f1e71d637e67344966cd1e26dbe9f401"],["/ja/2015/09/android-root-ota/index.html","7282f4cec4208576ec15fad3fc6ca891"],["/ja/2015/09/java-learningNotes-1/index.html","61b5c21ea3a01eafe93815dbcf20974c"],["/ja/2015/09/newblog-newlife-2015/index.html","6066db3515ef7162c7687d03d00c94a8"],["/ja/2015/09/router-rebuild-2015/index.html","0ca4351b2172d29b68c68926f0d21a2c"],["/ja/2015/12/2015-12-21/index.html","2ccf60ffe40128e503edf8e20b0654cd"],["/ja/2015/12/PixInTouch/index.html","e9dabb24c14e2b105cec4ea58b58755b"],["/ja/2015/12/git-study-1/index.html","8b89b3d6fb0e67809d4a915232fda88d"],["/ja/2015/12/hexo-backup-and-migrate/index.html","be8517a42a7efa7805bba996b1be9e66"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","fce6b0906fb5e36c2ebf3fa6a8bad3f2"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","83a16672b181c91e08f90f0acf1f0c7e"],["/ja/2015/12/router-reconfig-2015/index.html","b4d0d74279c6e190ef8f546524d039fd"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","b08512aec7946132b1eeef712fa7df27"],["/ja/2016/01/2016-stepping-further/index.html","15ff2c5efd8091bd4c6d54f01d74716c"],["/ja/2016/01/Android-Study-1-22/index.html","c822c03060a159d4d469b1eccd39f41e"],["/ja/2016/03/2016-03-20/index.html","b02c87bfc1df566028704492c1f04442"],["/ja/2016/03/GSC-535/index.html","cfc3954800a65835d43fed4eb0744d6e"],["/ja/2016/03/gulpjs-1/index.html","996b2fc52b3d7545817f6507a3a5dafb"],["/ja/2016/03/hexo-theme-paper-white/index.html","3da55741e4e7c0f72891380d079ad440"],["/ja/2016/04/2016-04-19/index.html","2d9ba697c8899465f27457a9d9f5b0b1"],["/ja/2016/06/2016-06-16/index.html","d06017c319cbe1f7180c768ecb5b239e"],["/ja/2016/09/2016-09-18/index.html","28e1867204ed0351fd78afe484a1bed5"],["/ja/2016/10/2016-10-27/index.html","cb0102b6738664e4727080aee5fdc676"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","c599921906137a2b021016246fe35e26"],["/ja/2016/12/improve-duoshuo/index.html","6b3e5728b7415952b86303dafacb516c"],["/ja/2016/12/use-travis-ci-your-blog/index.html","e6a58e5051ce27570bfc0130e9fc1f73"],["/ja/2017/01/2017-iyahoi/index.html","487b222f35d7187bad0237196c795b46"],["/ja/2017/01/webpack-amd/index.html","5fd71e7f67482cad8a091bd7cf4425db"],["/ja/2017/04/kotobukiya-syaoran/index.html","47149248570472c1544979bd18430547"],["/ja/2017/04/macbook-and-surface/index.html","892b442ebb862813c0abfd947f817c77"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","bbc7d5e8a78402c1b46bb6d46858f23e"],["/ja/2017/06/noragami-seichijunrei/index.html","41fa75af616bc456a99357eebff5eefb"],["/ja/2017/08/cross-compile-55-libev/index.html","011f0588b1378c10b301969fcca78b91"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","29386d845a498366e6ae1df2afb1b523"],["/ja/2017/08/hello-jp-world/index.html","c09ec91cb1cf8b05a6d0fa741f99e171"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","4575514b9ac721bfeb9e93a4d368011a"],["/ja/2017/09/record-user-login-status-methods/index.html","8c9e0b90b4b00a0b11005b8ef3ff269b"],["/ja/2017/10/vue-typescript-early/index.html","f01314ab53d5909aab668a3644d617bb"],["/ja/2018/04/2017-end/index.html","461b5fdc565d27d042bac4e24d4611e4"],["/ja/2018/04/twitter-account-activity-api/index.html","c3537236e0b8e10205b6f0d196dc3bd4"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","efee7d554781e1e3565e8dd4884ac3b6"],["/ja/404.html","5157e57a1e2413060f38c0e03b04ec3c"],["/ja/about/index.html","4b86b19221d3e07e463682fde0e82229"],["/ja/archives/2017/08/index.html","c36b6af7da3192afdc963e595d0276d3"],["/ja/archives/2017/09/index.html","31ba4d6ad332fde2f16af771f194d4fd"],["/ja/archives/2017/10/index.html","c4571691f4e2a01ad0e1a3d7027530a8"],["/ja/archives/2017/index.html","044a0f3c5f0f4e1f8a14846dfe74768d"],["/ja/archives/2018/04/index.html","bee1c8c5884ace60eb121f2fce2510e7"],["/ja/archives/2018/05/index.html","0458e4c12155386f450d7e85f71f7084"],["/ja/archives/2018/index.html","d6fad01af2309f415e106cfe92cfc023"],["/ja/archives/index.html","500b0ff98a516471d9a5088e0c01bfe9"],["/ja/categories/ACG/Travel/index.html","91c47c40ffe3c03ee40f4f96926a756a"],["/ja/categories/ACG/index.html","a4f25839c653e4fc49c0f2f8fe1513ae"],["/ja/categories/dev/Front-End-Dev/index.html","b276f9b00464b65684a9989cec701ead"],["/ja/categories/dev/index.html","a7e50e035ed6dde30e1f8511f67fecf9"],["/ja/categories/uncategorized/index.html","53ee11fa248e4691544631f7a4de0193"],["/ja/index.html","6b5d36054cedd080a005b4978d6c70e5"],["/ja/nihongo-test-page/index.html","fd0293d86e89ddfbee32ea160d373888"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","b70832d3e2288731176c7bf9f05f731f"],["/page/2/index.html","0891130a81f748740609b63ec443ca2c"],["/page/3/index.html","fefeb274044de0bd41464c28a141fd35"],["/page/4/index.html","6226ee6d51e7cce112f462fe631510fd"],["/page/5/index.html","670a9825265f7d6d83cf0fc7cad19775"],["/page/6/index.html","c4047c0406b95f4e732de72dc8d36883"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","6eef7578664ec44126284c0c38f05945"],["/zh-cn/archives/2015/03/index.html","6971a2dbdd267e9882d03f473e93a17a"],["/zh-cn/archives/2015/04/index.html","75bb1c5affd02475e1d22689b3273773"],["/zh-cn/archives/2015/05/index.html","dac5b61678dceaf1c5417889ca47f4e2"],["/zh-cn/archives/2015/09/index.html","38813892aa316264e12c1cd16184edfb"],["/zh-cn/archives/2015/12/index.html","d64d70edcc8514a0416e26949f60cee0"],["/zh-cn/archives/2015/index.html","c83ab1a3b676e6a5eccbfa05b029baed"],["/zh-cn/archives/2015/page/2/index.html","05ffb25d1acefcf5db05b21b5dfc865c"],["/zh-cn/archives/2015/page/3/index.html","d1cf7f931d50a462cda67f8cf494fe8e"],["/zh-cn/archives/2016/01/index.html","97e45fd0d4e952a76028f7d899141781"],["/zh-cn/archives/2016/03/index.html","d9bd35db61a9e1eb9334075d9b9e5de8"],["/zh-cn/archives/2016/04/index.html","e5d39a25794872f6f974a4c45255b687"],["/zh-cn/archives/2016/06/index.html","cfa8c341005aed65b4aa4a5c6f2e3a76"],["/zh-cn/archives/2016/09/index.html","2e3e10215e053724466b58600a560a29"],["/zh-cn/archives/2016/10/index.html","3007b6448f8717b600ced1946dbaf408"],["/zh-cn/archives/2016/12/index.html","0b5dd048f256aaf6810964f96f35223b"],["/zh-cn/archives/2016/index.html","599b98691aa64d8bb0e28ece0b8af1e9"],["/zh-cn/archives/2016/page/2/index.html","139c00d9b541b370c0b2637d7e3daa22"],["/zh-cn/archives/2017/01/index.html","ee45f11786eeea2d112305518b6afafb"],["/zh-cn/archives/2017/04/index.html","50288ee57ae993c22903edf622cf78be"],["/zh-cn/archives/2017/06/index.html","7a6406965a07a677c4237dd0944d7f48"],["/zh-cn/archives/2017/08/index.html","a00a891912391f743ad56159bcf002be"],["/zh-cn/archives/2017/09/index.html","4470aa544c00907ada5840cfb0d0c6bd"],["/zh-cn/archives/2017/10/index.html","7badb9f3307e934633afbc47c031e1e1"],["/zh-cn/archives/2017/index.html","4ed05c3af2259687b2f550cf9ddbf201"],["/zh-cn/archives/2017/page/2/index.html","ef91c8ae0c41a0b76df8840d6d3306aa"],["/zh-cn/archives/2018/04/index.html","659da78c3f01eb6dd3f05572cd2fe6e1"],["/zh-cn/archives/2018/05/index.html","04b2aab601d17f2d7372f43118afa2c4"],["/zh-cn/archives/2018/index.html","cd3e9071197fa130f29075e8e886190b"],["/zh-cn/archives/index.html","b4b10544845f9799cba0d9a25b425742"],["/zh-cn/archives/page/2/index.html","ff5276e3c4a6c17337b44622c90bf012"],["/zh-cn/archives/page/3/index.html","f970b24eec6ebd53ab09be0574d6773d"],["/zh-cn/archives/page/4/index.html","1047e9678c4017659be2cbf35c095a08"],["/zh-cn/archives/page/5/index.html","6e75b53cb55fb5ffab6c62d6778055f1"],["/zh-cn/categories/ACG/Music/index.html","25a552b9866ac3b9aed8a333873a04c0"],["/zh-cn/categories/ACG/Music/self-copy/index.html","79e3995c0c3b24170bd9367514ac97a0"],["/zh-cn/categories/ACG/Travel/index.html","f26b2ad7abbaefee5ec1867ac97fa8f7"],["/zh-cn/categories/ACG/figures/index.html","95352164d1c90b553fa88ef84a069462"],["/zh-cn/categories/ACG/index.html","d04e464106848eb75c046e8d231c189d"],["/zh-cn/categories/dev/Front-End-Dev/index.html","f4623be99eb4d71743adf4454ee680a8"],["/zh-cn/categories/dev/HTML-CSS/index.html","947d62173737b932322a14fdd6103230"],["/zh-cn/categories/dev/android/index.html","3ff92b6d15175174c6fa4bdb39794a1f"],["/zh-cn/categories/dev/cpp/index.html","ad7559f8831bdccbfe472f75d11c0ca0"],["/zh-cn/categories/dev/git/index.html","b951f32e3f154abffb597ae36a60c70d"],["/zh-cn/categories/dev/index.html","5a34708705feb45d737f4b9089ee8d7a"],["/zh-cn/categories/dev/java/index.html","04da0b622610849931d21664604f4ad2"],["/zh-cn/categories/dev/page/2/index.html","449cc30cc316d2c9f09b8c238106ba17"],["/zh-cn/categories/maintaince/blog-setup/index.html","72ee20f99bc23c1370aaa85323a3302b"],["/zh-cn/categories/maintaince/index.html","8c81e1bf3dd9de6278b138b1ff4fe7e9"],["/zh-cn/categories/maintaince/macbook/index.html","eafda2e16915478d90d499a3f66b2449"],["/zh-cn/categories/maintaince/router-config/index.html","35970209fd1aa1d672d10e18a44e519e"],["/zh-cn/categories/notes/index.html","8a209a6fc3a02c77d9f601ddaaafb57b"],["/zh-cn/categories/tricks/android/index.html","6e61a3586a3589f9824cdf29a7a633ac"],["/zh-cn/categories/tricks/index.html","e0a6d03ef6f2ed74b2a753cbed0acdf4"],["/zh-cn/categories/uncategorized/index.html","bd521590931fd4d452879adcfc70becb"],["/zh-cn/categories/works/Front-End-Dev/index.html","2dbd6f69ce484856809de1e672ff8ebb"],["/zh-cn/categories/works/csharp-wpf/index.html","3bb33d90a04167757ab5265629f0f6e4"],["/zh-cn/categories/works/index.html","eef191e4342e95b04eeda38d3246267b"],["/zh-cn/index.html","761b768eace0bbf1865b84e2853853a1"],["/zh-cn/page/2/index.html","2f76a9f7109d6849020bae2b7578e5f1"],["/zh-cn/page/3/index.html","bd9fb632689da7460a58a9c1aecdb8ec"],["/zh-cn/page/4/index.html","e48477625eab6c22cac2510a85d9c8bc"],["/zh-cn/page/5/index.html","6a5900546fca4a949ea6e91d8ec050a8"]];
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
