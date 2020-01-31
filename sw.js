/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","daa1812193b68c38bf31144bee36248f"],["/2015/03/android-hostname-change/index.html","0a62e9f468b9ae4208a26f7139d87da8"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","e0c7e1aa2e3f118e735a5fa3a1bd155b"],["/2015/04/android-chrome-issues-with-webpage/index.html","3d07f70570a07709be31e39f4ab192ec"],["/2015/04/cpp-study-log/index.html","98963e2a5c0f21759f678cad5f5db2b7"],["/2015/04/github-pages-ssl/index.html","10357d0dd1348e48dc28e14ea86fcd46"],["/2015/04/hello-world/index.html","775381e56d5667b8aa6757faa18bb488"],["/2015/04/hexo-setup-log/index.html","246eabc918986d0776fd888d0ff4016e"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","2a54f99a248cf310a40c7558fda3834a"],["/2015/05/cpp-inherit/index.html","416371d593f0b1b23019c3d998c7c76d"],["/2015/05/cpp-polymorphism/index.html","3324b6fd02399b45d72b8ac953e8b4b9"],["/2015/09/android-root-ota/index.html","153416cff59a071fa1ca787c7cf4b23b"],["/2015/09/java-learningNotes-1/index.html","1b92bf20d9eff4974f326a724e224e1a"],["/2015/09/newblog-newlife-2015/index.html","8be754fa208c15b257ecb3e035c70c58"],["/2015/09/router-rebuild-2015/index.html","0238a593246668211a6bbb9d8a9167e7"],["/2015/12/2015-12-21/index.html","8717375367dfbc846c9468caf4bc3d72"],["/2015/12/PixInTouch/index.html","49203497b503ae60e9e07803eb141811"],["/2015/12/git-study-1/index.html","da9747f27d07cb339ae20076815c9197"],["/2015/12/hexo-backup-and-migrate/index.html","7dd53b4d4cda0ef7785e35020a691b52"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","14ea249e4e1738586de486fb115dee15"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","adf3810975b487251f8a327a4a740c28"],["/2015/12/router-reconfig-2015/index.html","438a266369e72cd2ad80c0abc43bda11"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","2e423273f9438cf0ecfad7e2b65a2c7e"],["/2016/01/2016-stepping-further/index.html","bd173811a4491f34529b6a7d4f898da9"],["/2016/01/Android-Study-1-22/index.html","3ca8c43cee55d2ef87ad3846457f8198"],["/2016/03/2016-03-20/index.html","f5d740d4bdace460e7028927300d1a72"],["/2016/03/GSC-535/index.html","443d0510b23099702eaf50897f465c88"],["/2016/03/gulpjs-1/index.html","3ceacb67a245292fd0d3b6806943f0fe"],["/2016/03/hexo-theme-paper-white/index.html","da34e5f110ea63e7f3142c42babac9e3"],["/2016/04/2016-04-19/index.html","6c193c693a3a170a271ce55fadb76ffc"],["/2016/06/2016-06-16/index.html","3091b312f00a6a7abc93c11e81cf1813"],["/2016/09/2016-09-18/index.html","551db3c9c50c113ccfb353fda53a357b"],["/2016/10/2016-10-27/index.html","af9f880367e03c09b077dadb6be0f79e"],["/2016/12/config-switchresx-and-2khidpi/index.html","240cfd018f8340394ef3a58d82c64b1b"],["/2016/12/improve-duoshuo/index.html","9a3500a13b44beea69af363bd3a74ffa"],["/2016/12/use-travis-ci-your-blog/index.html","004aa5c2000760ed0a3d41e9dfad50b4"],["/2017/01/2017-iyahoi/index.html","052ca147f48e26303d9f03f72f29f1ff"],["/2017/01/webpack-amd/index.html","91778db957b928593a19b094f76cd165"],["/2017/04/kotobukiya-syaoran/index.html","f07f3a0971a0611e2040f0c6ce6b79d4"],["/2017/04/macbook-and-surface/index.html","3d497ae42f5fcda1f0c085f72921b55d"],["/2017/04/uc-hyakuya-yuichiro/index.html","45b42627440832d616f249a028162e98"],["/2017/06/noragami-seichijunrei/index.html","be741baaf8e96edceb4d2ebf2a3e11e8"],["/2017/08/cross-compile-55-libev/index.html","e14c2677d6094df4218958a4f154644f"],["/2017/08/explore-service-worker-working-lifetime/index.html","d08ac4fd82a57af75f081643e9016b18"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","b07d7df862dc9841f64341bfc0217aa8"],["/2017/09/record-user-login-status-methods/index.html","27c61288ff2ba9b16fe961ada843cb62"],["/2017/10/vue-typescript-early/index.html","d0521be5d4bbd98421a9496cb5402166"],["/2018/04/2017-end/index.html","e6cf96a0be1bda05bc094c3236b1eb3d"],["/2018/04/twitter-account-activity-api/index.html","4e13d79dfe72b14b11fa9dfab032000f"],["/2018/05/buddy-complex-seichijunrei/index.html","5a77765124d7f17dde1f1e931402942a"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","678b51cdbf0faa0868632b2fc5d1e988"],["/2019/05/2019-05-17-google-io-tech/index.html","dcaff801cb7f36a8c06db94814d13b26"],["/404.html","891a64c70bf67beeeb4be2549b539d71"],["/about/index.html","9d38a1b00caba273daf2e7d652945db2"],["/archives/2015/03/index.html","bcafea6e6aad79d1278adce9adabed3c"],["/archives/2015/04/index.html","2eccd9fc04fb9d81e710886193169fb3"],["/archives/2015/05/index.html","14977d405bf3c2e8a76b5ac95b0c8cd1"],["/archives/2015/09/index.html","d97cbcab7e55e0f84a633c8087dd52eb"],["/archives/2015/12/index.html","d407da0432aaddacc24a5f10642720ae"],["/archives/2015/index.html","4512b90291d80c4fdcab177bf0f90da0"],["/archives/2015/page/2/index.html","1c6bedc21ba40391f545d89439b58f71"],["/archives/2015/page/3/index.html","4c3078bc58c4045cbff9b16df912c8e8"],["/archives/2016/01/index.html","3aca913dfee4ea5007e70c7eb7d5fbbd"],["/archives/2016/03/index.html","0ca00ce95b755a63c9c532984a9e4a36"],["/archives/2016/04/index.html","271ce57b5e0d3318a866b78c2f020942"],["/archives/2016/06/index.html","d912e6b8ad5d7f3a790a14b9d9a52697"],["/archives/2016/09/index.html","e8838fe681be27e8fe437d567d364aae"],["/archives/2016/10/index.html","20f5f61558f743cfa29fd3f59edca14a"],["/archives/2016/12/index.html","c085be5be7704b70fab40ece76bfff86"],["/archives/2016/index.html","a941d0dc5ee007ece8abe5c195c2b246"],["/archives/2016/page/2/index.html","72d815eac2e517e0235b40280e9bf5a5"],["/archives/2017/01/index.html","075aa16abfc09290d4373fce3b38205e"],["/archives/2017/04/index.html","353bfb0a35fc0ee1037afd12d5673319"],["/archives/2017/06/index.html","4a4914abcc36955642a831d580176b88"],["/archives/2017/08/index.html","a3f68d4aa5ea9363e86a6138f97c5ebe"],["/archives/2017/09/index.html","8ad6cc09e06484a0da805de0975e6f9c"],["/archives/2017/10/index.html","c13ce2fb2fead0b081d0294038cac82a"],["/archives/2017/index.html","6f8038c442769df721edfc472369e904"],["/archives/2017/page/2/index.html","7bef3c7cd6da4cc95ee17a62904fd94f"],["/archives/2018/04/index.html","18334fb6d68f64d520e7b30cea7ed19a"],["/archives/2018/05/index.html","ede388115dd62b8eda04b9f10ada4ed3"],["/archives/2018/index.html","a67685510dfb615ed288df257b026bc5"],["/archives/2019/05/index.html","7a3820a6b34e4b3de92cbf3ba9e0c000"],["/archives/2019/index.html","85248a5084e6be160706520abcfe198b"],["/archives/index.html","8f6829d33931a690379a51a1de747d8d"],["/archives/page/2/index.html","dde45c5888ce8b9a2f29324513a67bc3"],["/archives/page/3/index.html","f49de147e59b64c5a6d31dd54742ec5d"],["/archives/page/4/index.html","442227fe945a1baafbf817addd6dc7f6"],["/archives/page/5/index.html","0ebb52a84731e95a1e470979763a6584"],["/archives/page/6/index.html","5ac884fc7e5119390528bb7fdc34492f"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","de935f5caaac760eaf8bfd356da3497f"],["/categories/ACG/Music/self-copy/index.html","e5befbc57889353d92540e59553b4360"],["/categories/ACG/Travel/index.html","6464b7a9249cc49efae5672e02de60b2"],["/categories/ACG/figures/index.html","b70ec302964315c623171a3c26ae029f"],["/categories/ACG/index.html","97987be67b45078df7e256891c27b0fa"],["/categories/dev/Front-End-Dev/index.html","92d95532973700a7aa3479bbc06d0353"],["/categories/dev/HTML-CSS/index.html","87493cbabb9d4c2d7d528bb6b26d063f"],["/categories/dev/android/index.html","a9b9fed69657e3d598dc63324c3b7d46"],["/categories/dev/cpp/index.html","d8b7f33227afdb1d9198733a37ab46fa"],["/categories/dev/git/index.html","e5d86a61135aed241e51bb2f61e89cb9"],["/categories/dev/index.html","2963459a646ae2ae204768f59d9dd668"],["/categories/dev/java/index.html","1936f7b2ea607b8e37ea8984b4b29492"],["/categories/dev/page/2/index.html","d7394c0d549e3914904c19ed3c96cda2"],["/categories/maintaince/blog-setup/index.html","2c1a089aa3251dc54b7c86bbb279f684"],["/categories/maintaince/index.html","1fb43e2830ddc51cae2219acddc992f4"],["/categories/maintaince/macbook/index.html","daf13c7e9f5fe850ec67e43ecd597aab"],["/categories/maintaince/router-config/index.html","fc4629350a6d761e028e15a35c4bbb0c"],["/categories/notes/index.html","0a315923a68281a0c26c3f84645bfdcf"],["/categories/tricks/android/index.html","26bdb02cdd91bbed12c06a3b8ee097df"],["/categories/tricks/index.html","bceec9dbc58c6313d0707e2b809f40de"],["/categories/uncategorized/index.html","b20bea88aa582c7e765b8b96e7861a90"],["/categories/works/Front-End-Dev/index.html","c382f392ec71cd05ba30b6926e8f066f"],["/categories/works/csharp-wpf/index.html","7b382c045b79e8fa86b2931d917b28ae"],["/categories/works/index.html","27607a1faaea0baec85536da5189d21b"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","9403f4f7a5aa0ddf87ed7d2034c0a8c6"],["/ja/2015/03/WNDR4300-setup-log/index.html","4789034da5fa579a85b14810f5f5395d"],["/ja/2015/03/android-hostname-change/index.html","b42c01d7927561567ce5ade912be6d0c"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","e6734b645d99bbb6e134e218bbdeaa6a"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","af217fdfbf689827ce0eaa399182cd8f"],["/ja/2015/04/cpp-study-log/index.html","83d6d840923a5c3c9b6e463eb38ab79a"],["/ja/2015/04/github-pages-ssl/index.html","620a17160286e015b28970bda8ba9a52"],["/ja/2015/04/hello-world/index.html","aed9b6899cc1c30ab06ef8a75a796afb"],["/ja/2015/04/hexo-setup-log/index.html","029b402ead317570b734ec6426caa9fe"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","2edb840907b19740af35fe4d546a6cdc"],["/ja/2015/05/cpp-inherit/index.html","7cb5404570d8169ebf8af29dc9b31f60"],["/ja/2015/05/cpp-polymorphism/index.html","b19e037a61332c5df84281ee7f37a3e5"],["/ja/2015/09/android-root-ota/index.html","27352bcf9724d77777f0ee8b6a67c063"],["/ja/2015/09/java-learningNotes-1/index.html","cf48945dcc55a58d7106020100b33bfd"],["/ja/2015/09/newblog-newlife-2015/index.html","11c158c8677cb863f5550f5666e26807"],["/ja/2015/09/router-rebuild-2015/index.html","0585d22e18bf78a2e6dcfa306b2f6ac9"],["/ja/2015/12/2015-12-21/index.html","70393a831a864275274c5039b7157d4d"],["/ja/2015/12/PixInTouch/index.html","500e82175ee64aaaeefcea1bfa6b284e"],["/ja/2015/12/git-study-1/index.html","e6c9a65569cf8acb346ac7a5951c55db"],["/ja/2015/12/hexo-backup-and-migrate/index.html","1008e6bcda113959da363ee21d53df7d"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","c616b432dc6691ea38a55de06d20dde5"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","e29937c6ba1fc75beab75a8c1400f9bc"],["/ja/2015/12/router-reconfig-2015/index.html","10aa843194ac84bd14c40451b9dd7738"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","2864fd36e272d2dfa1f176feffe5953e"],["/ja/2016/01/2016-stepping-further/index.html","fa82744e7f7100beccda282ae0af4dac"],["/ja/2016/01/Android-Study-1-22/index.html","5e039f1c4879566b5c3d64cf4eaf4dc5"],["/ja/2016/03/2016-03-20/index.html","60ce63c22ad3fdbb7e47f43e3ec46a0b"],["/ja/2016/03/GSC-535/index.html","66c72e50db356bdf016b662542c08b7c"],["/ja/2016/03/gulpjs-1/index.html","db1a48682d9ef3b728efb37362b1a03b"],["/ja/2016/03/hexo-theme-paper-white/index.html","94f6a635fb8b16ff1ec723667c948029"],["/ja/2016/04/2016-04-19/index.html","a68510cc0be432e80791f6dd2a3ce9c2"],["/ja/2016/06/2016-06-16/index.html","d41cb6c7705e6ac2e3f9b90d67b4067c"],["/ja/2016/09/2016-09-18/index.html","0a28d620e1b8c387e07c7fdedb73e524"],["/ja/2016/10/2016-10-27/index.html","ff087fee7199d36fb3ca775daee6d113"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","e8b29fbeca43f5b4112e84c150d8cc1f"],["/ja/2016/12/improve-duoshuo/index.html","df3cf0f5fd33bfcd0981040a6811c482"],["/ja/2016/12/use-travis-ci-your-blog/index.html","3ca2ee26a3591eb080d941ed9dbba4e2"],["/ja/2017/01/2017-iyahoi/index.html","f61a386890c094f9fb2f501665c78a45"],["/ja/2017/01/webpack-amd/index.html","c919d05439ec207b29a9b7e23c6d89cb"],["/ja/2017/04/kotobukiya-syaoran/index.html","c71e134ec47644a1b62dcb7e143457a0"],["/ja/2017/04/macbook-and-surface/index.html","8c6d572af29aa71b3c13b0821ebe335e"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","43e114495199db160815634c7a73b535"],["/ja/2017/06/noragami-seichijunrei/index.html","9bb7aeff6c626eb0066aa59bb38959bf"],["/ja/2017/08/cross-compile-55-libev/index.html","1c941f8c34b0ef1943718f11cac37286"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","5f5f6968d8941e626ba13b37c91d0d92"],["/ja/2017/08/hello-jp-world/index.html","63667f1b366e5961d7e78c908e8f97c6"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","8209c60696ddff3ab1c47e6afc20c797"],["/ja/2017/09/record-user-login-status-methods/index.html","386a2e92a4e358877639c2333e70da43"],["/ja/2017/10/vue-typescript-early/index.html","a18fcda75c5d18e44adf3bc42941875f"],["/ja/2018/04/2017-end/index.html","7f836027a8a63a3a19aeb5291c499c5e"],["/ja/2018/04/twitter-account-activity-api/index.html","a2f493a03e16ad4510e058a6892c887d"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","fdf1a997e0bbc42dd2b68fc1da4ab79e"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","0ea9a3a42eeef2c00e65e171ccb6ef95"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","9b8fe320d92a62a1eab2441b3fb793a2"],["/ja/404.html","49ba11dfa8f37d7d1e0f6142126018ce"],["/ja/about/index.html","56d4c145d1215bd1ab426bec525f2a9c"],["/ja/archives/2017/08/index.html","348c4454a40ae36d0d9cb069a5786894"],["/ja/archives/2017/09/index.html","3f682338824a71ded210b5a72193d362"],["/ja/archives/2017/10/index.html","76a9f6be9a2523ff14439bd0b3799f81"],["/ja/archives/2017/index.html","cd96c9a0f8acf4055683c251b131d524"],["/ja/archives/2018/04/index.html","15494e3b557c1a8e529be2a0ba469b75"],["/ja/archives/2018/05/index.html","44904a99cfb7a7f4692c4540d67f669f"],["/ja/archives/2018/index.html","e90c0108f3351df31d35267fc5d1ed74"],["/ja/archives/2019/05/index.html","71bcbcae2f3d7a5f5ba108135ac47e6e"],["/ja/archives/2019/index.html","a467c0a4031c4addf82ec63e4e33f513"],["/ja/archives/index.html","67a3b9fb6e8c1f7988a7eb5dae161683"],["/ja/categories/ACG/Travel/index.html","bc0342d511118fbe936b8c5063da7847"],["/ja/categories/ACG/index.html","69a1cf1913a25db928d91180f5b7ab6c"],["/ja/categories/dev/Front-End-Dev/index.html","b60bae846ff9ef5cf6ebb3e69dde7c52"],["/ja/categories/dev/index.html","0f183d3e5a52faaa319616ae4f3f3fa2"],["/ja/categories/uncategorized/index.html","609b9645605fb52d7155d760e3886118"],["/ja/index.html","bbf6e66c7a0dd2e6e7a8159180c0f290"],["/ja/nihongo-test-page/index.html","edd50ce787ed9868d519d46db8972bbe"],["/ja/resume/en/index.html","4903b3e5574f60a1bf33e28498568217"],["/ja/resume/index.html","73be14a87aec9f5025b0b2626e55afb2"],["/ja/resume/ja/index.html","2d5cab99f59eaa67c03db3422ae53ee0"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","471cdfa8dba6df178ac668ff01473d4a"],["/page/2/index.html","ecd0fa73c1b2756108258abc8d02981f"],["/page/3/index.html","91cf58f807fe9c01f36a443ea82b6f7d"],["/page/4/index.html","5675b009a73a309ae61ab56aa0a0ed1c"],["/page/5/index.html","ee712731a0d503e98d7f79e902ab09ff"],["/page/6/index.html","4bfe1263a9e9c8673b2b04afed1d866c"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","ffb443603852925bed1914d8fd11f6b0"],["/resume/index.html","2e97b5701bc27a6021421b325ca2a0dd"],["/resume/ja/index.html","7ac4152c41aaced01aee6102abc47af9"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","9e6fb61f5bd5d7a680257866b22f125a"],["/zh-cn/archives/2015/03/index.html","568efbb3f254019d72c6b716423ec3c0"],["/zh-cn/archives/2015/04/index.html","002adfdb94d79d59023afcb394e0f6be"],["/zh-cn/archives/2015/05/index.html","295971509930207a9aa16b7edbd351a8"],["/zh-cn/archives/2015/09/index.html","59878ecdab0d641f7b75167e3df16438"],["/zh-cn/archives/2015/12/index.html","39713aa41844e86ec237393d3350fc7a"],["/zh-cn/archives/2015/index.html","ecb48086a4b45192d002ff151c92ddcd"],["/zh-cn/archives/2015/page/2/index.html","0fe2a7897a2c14ac3ccc21ae2c468f84"],["/zh-cn/archives/2015/page/3/index.html","6e40977d9c43a1529b33943cae369c8e"],["/zh-cn/archives/2016/01/index.html","76333d3365c204dc0d4fda9a73164815"],["/zh-cn/archives/2016/03/index.html","a82aac67c9805aef02dd764265f6c4c8"],["/zh-cn/archives/2016/04/index.html","78d8ef3c1a502468051543f704a85d7a"],["/zh-cn/archives/2016/06/index.html","6dc79ed29ad2e0be243db048d6b25cfc"],["/zh-cn/archives/2016/09/index.html","f394786ac553c7f9c8994c731f016e25"],["/zh-cn/archives/2016/10/index.html","87c1c9813b8e752d636f19b1791bc038"],["/zh-cn/archives/2016/12/index.html","57b3ed4a73fad8a4707feec2a6d3d671"],["/zh-cn/archives/2016/index.html","89070749121bd6fe8c100cc92e6f3505"],["/zh-cn/archives/2016/page/2/index.html","1146b4a7dc8a6bdd0ef433b78113c940"],["/zh-cn/archives/2017/01/index.html","f2abc46e23b0cdda65ef393a39ca9024"],["/zh-cn/archives/2017/04/index.html","5796d57e0c2cefc5532d14be980425bc"],["/zh-cn/archives/2017/06/index.html","4aa305304daa30c51471cc4f17427001"],["/zh-cn/archives/2017/08/index.html","48416c48964f397167e6e65442c12601"],["/zh-cn/archives/2017/09/index.html","fb123bca7ba4bad502be632f9db37bc6"],["/zh-cn/archives/2017/10/index.html","e4b5ac8be37ea420194f841215443210"],["/zh-cn/archives/2017/index.html","2b899f56a2713d1c2e25d4d0ee1b4949"],["/zh-cn/archives/2017/page/2/index.html","f9c2f6fdb27f34a0e74961ba271bf7d8"],["/zh-cn/archives/2018/04/index.html","625240f573491a26fd6347f8f9c21934"],["/zh-cn/archives/2018/05/index.html","c9c4331273f3eb6ee0e3ce924e099f98"],["/zh-cn/archives/2018/index.html","d7d692405e8e8f8c6ef9cb114e9c524c"],["/zh-cn/archives/2019/05/index.html","05ad1d56e100f54836e7695f1d6dcfcf"],["/zh-cn/archives/2019/index.html","3ac220fc3d82e82944fe3eb856018e75"],["/zh-cn/archives/index.html","8c247898fae5f66bc151a6c1f23a9815"],["/zh-cn/archives/page/2/index.html","5eae311fb189661afd2f2cfe30224d6e"],["/zh-cn/archives/page/3/index.html","8a163f21c588e2f7fed1173deb31967a"],["/zh-cn/archives/page/4/index.html","6dfdb69ead0e0591408be69e6fa15d21"],["/zh-cn/archives/page/5/index.html","4724d32925cb412e278ab6ab869ee024"],["/zh-cn/archives/page/6/index.html","8325b22d4175752c15e5ac9b04f9d72e"],["/zh-cn/categories/ACG/Music/index.html","2eda4463e642918285b6d663682e76e7"],["/zh-cn/categories/ACG/Music/self-copy/index.html","f541b0119b4ba3ef04e2f70b6ab4bb7b"],["/zh-cn/categories/ACG/Travel/index.html","26cc651d5390ce88b5abe06d0cd48a8e"],["/zh-cn/categories/ACG/figures/index.html","70a634ff168426b7fb3b603040407a79"],["/zh-cn/categories/ACG/index.html","99058de77193dc272a79a08dde2da328"],["/zh-cn/categories/dev/Front-End-Dev/index.html","1fecea466aaffdc09604a6de04e4ef39"],["/zh-cn/categories/dev/HTML-CSS/index.html","4e64d5d32ece353a9b210a0ecee9a052"],["/zh-cn/categories/dev/android/index.html","97da77e3531ffdc1feab67f292fce69e"],["/zh-cn/categories/dev/cpp/index.html","b69159bf17c85a138471437a8af4cd80"],["/zh-cn/categories/dev/git/index.html","b7ea7a6389f9d550eb5536197afa5c39"],["/zh-cn/categories/dev/index.html","906e6dc4b0a8850123609749e78f4363"],["/zh-cn/categories/dev/java/index.html","4532813317c0022db3db60358b11a1fa"],["/zh-cn/categories/dev/page/2/index.html","cdf0d058c33e2115180b8e7180f8d93c"],["/zh-cn/categories/maintaince/blog-setup/index.html","716248d0aa409cf649b794189b1690e1"],["/zh-cn/categories/maintaince/index.html","cd979117808637c2a4d36630e07d8bec"],["/zh-cn/categories/maintaince/macbook/index.html","ebb1b15d89f665057534c8ef3627ee52"],["/zh-cn/categories/maintaince/router-config/index.html","c4d6106f3c1be7e1285d67a6f3569e30"],["/zh-cn/categories/notes/index.html","fc87dfe56bcdc410ef2c6e0e0c133291"],["/zh-cn/categories/tricks/android/index.html","08cf00e53942cf42ebdf3a4fc27dcfd7"],["/zh-cn/categories/tricks/index.html","b5bc8abe747cb6f9f8d6057c36704d1a"],["/zh-cn/categories/uncategorized/index.html","c84a6fc3a4f3727f117a436ed6dc5695"],["/zh-cn/categories/works/Front-End-Dev/index.html","0bc5a9e26328946257e443e8aaa51581"],["/zh-cn/categories/works/csharp-wpf/index.html","46bc41735192deaa912728e99e5b23e9"],["/zh-cn/categories/works/index.html","59564d3267795b434dca9c9e0a285cb4"],["/zh-cn/index.html","dff39c1e489131a3178e1ecd30acfc4a"],["/zh-cn/page/2/index.html","92d182b82f833455eb10d41a9c877480"],["/zh-cn/page/3/index.html","17b30c203a57ee11b3d312a387917bbd"],["/zh-cn/page/4/index.html","2c9da81de5643f9024bd0b06d2b72ea6"],["/zh-cn/page/5/index.html","1432d9ecefb44a8e1ec99c036cd7df89"],["/zh-cn/page/6/index.html","d39840ec1334d4ffc2a2c4548a3be0c2"]];
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
