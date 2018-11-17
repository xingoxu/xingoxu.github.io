/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","656cd7c277eacbaffc80fa08c740739b"],["/2015/03/android-hostname-change/index.html","1989eaf3d54821c350e62246835fd2e2"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","fec4d137e3e6d9ef9746af696bb65476"],["/2015/04/android-chrome-issues-with-webpage/index.html","54aa86156167829f063e25752a129711"],["/2015/04/cpp-study-log/index.html","f9e83bfb778915c454fc930bb003594b"],["/2015/04/github-pages-ssl/index.html","6620f7f4c0a2b945e330ca365eccb2ba"],["/2015/04/hello-world/index.html","87d4e345f4afbc5ff7db24471f341fbf"],["/2015/04/hexo-setup-log/index.html","d2ad636680efa6d2d71e4f88eabec6d1"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","939b21db607e3a164137be4c54435df9"],["/2015/05/cpp-inherit/index.html","340d4ce7bfc51dd0a7ec5f2012fa2f51"],["/2015/05/cpp-polymorphism/index.html","b738ea911fa88193decc635183251330"],["/2015/09/android-root-ota/index.html","e270dda3c3f986ea913520bc03536664"],["/2015/09/java-learningNotes-1/index.html","1b956369882dd88391e10df5cf0b3dcd"],["/2015/09/newblog-newlife-2015/index.html","e59c15ae1b656039c14aa7ab19491b8b"],["/2015/09/router-rebuild-2015/index.html","e9e97f420bd9c0f5b040e140d514904d"],["/2015/12/2015-12-21/index.html","4cad2e799335ac3481234ccde61e0379"],["/2015/12/PixInTouch/index.html","d4f1ef2715808131bef2097cc6e371cb"],["/2015/12/git-study-1/index.html","5a158e766da185bd778dc162b976384a"],["/2015/12/hexo-backup-and-migrate/index.html","0330f7736d4d1b5577c6ebc4b9027028"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","3cb1204e5cb170db28b056dfffb19b25"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","f6f93375e0bc120d83cfa29ee21769b1"],["/2015/12/router-reconfig-2015/index.html","471ab6dd4242a373d98fd562bcab408d"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","ce2a15547dd89b04b138c735dd47682f"],["/2016/01/2016-stepping-further/index.html","43cbe56db5b13bdc7a8e8991829eef93"],["/2016/01/Android-Study-1-22/index.html","395121a2df1faef9a84217d3a241acf7"],["/2016/03/2016-03-20/index.html","f030ace166556d934cefa06d131a1c66"],["/2016/03/GSC-535/index.html","6b682754ffd0da934ff93ad40d650e4e"],["/2016/03/gulpjs-1/index.html","e2e995d34d4f84f5a8bbf2dcbc91cbce"],["/2016/03/hexo-theme-paper-white/index.html","10cd8b53553e9e77ac1db7a7c36bef5a"],["/2016/04/2016-04-19/index.html","e09036e651c0e07dc5239d838318c875"],["/2016/06/2016-06-16/index.html","811c417f1e30abc7f9362096a3490d28"],["/2016/09/2016-09-18/index.html","517ce1bfdc168b99e9cbc8173aa1fa10"],["/2016/10/2016-10-27/index.html","423c2a080f3a5c1ca5ff92a48bf23f24"],["/2016/12/config-switchresx-and-2khidpi/index.html","fdfa73deddb563f2ac30765e4792bfe8"],["/2016/12/improve-duoshuo/index.html","ebaed21b7bea581658c52e69fa83c3ff"],["/2016/12/use-travis-ci-your-blog/index.html","70b6809ff1f16d4803d2218f14a19670"],["/2017/01/2017-iyahoi/index.html","77d2a6b7487888feb80e99352b342f9f"],["/2017/01/webpack-amd/index.html","3e08922462ba32774c11fc2cd1df7729"],["/2017/04/kotobukiya-syaoran/index.html","5e61ee44b9724cb07eae97f778bc4112"],["/2017/04/macbook-and-surface/index.html","dd2e3d7c8a08e26d6869b6d2a86c3a05"],["/2017/04/uc-hyakuya-yuichiro/index.html","7adefa923aacbda018de0462ef374a29"],["/2017/06/noragami-seichijunrei/index.html","e623b4ab7ace45b2831079712f5af2db"],["/2017/08/cross-compile-55-libev/index.html","f0793d6f7017a78055a585df42649321"],["/2017/08/explore-service-worker-working-lifetime/index.html","ecee619e86d39a268480bfcb4df660b9"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","738d628e593eeb9a6516d19c938d9acb"],["/2017/09/record-user-login-status-methods/index.html","2098b963405497e89029665602b01136"],["/2017/10/vue-typescript-early/index.html","9aa4e6b427c97369cbef5b149f6fe009"],["/2018/04/2017-end/index.html","f6daa686de37b77359407a8d60a65660"],["/2018/04/twitter-account-activity-api/index.html","9b0f86ed5e472cf5059b82381b05fd0d"],["/2018/05/buddy-complex-seichijunrei/index.html","e0f084c71da3982def579d326285de74"],["/404.html","8582db54b884cc57a31f63701ae4e9aa"],["/about/index.html","34e315c40d0499c5edec9a02282ec077"],["/archives/2015/03/index.html","bf3c6304a8267c120988ce36387a3386"],["/archives/2015/04/index.html","27f818889cb2e59139889bdcfdfc2df4"],["/archives/2015/05/index.html","cc2286f868a462c99b373bf01aab7324"],["/archives/2015/09/index.html","e2be66f367d207a6fa5028d296e611a3"],["/archives/2015/12/index.html","e3fc8a0caa39eeb9208ba526f7023145"],["/archives/2015/index.html","bf88df3f52614cff18f7eae12e460e56"],["/archives/2015/page/2/index.html","6fa2f26e9aaa21240f77ecb422183c3f"],["/archives/2015/page/3/index.html","ccfeacc28d99ff4b0af688af48917a00"],["/archives/2016/01/index.html","9b2cfe64964473a0c8a4bd5c19a9d4bc"],["/archives/2016/03/index.html","4559ff58a9592a57556417fdc58d2f85"],["/archives/2016/04/index.html","8a3f75e0740e04d5444bbd25747fb7cf"],["/archives/2016/06/index.html","6f6f405865c7197cd81407dc40797a46"],["/archives/2016/09/index.html","812a4c72d53baefa56a8dc0ce22ede42"],["/archives/2016/10/index.html","952da50d707a57661c6003b5c6d18e3e"],["/archives/2016/12/index.html","645db3f0ccd450cf4da0a57c2d8de5f3"],["/archives/2016/index.html","383332c0b3e995c79ae166dcd79434da"],["/archives/2016/page/2/index.html","df209c67b082c12d4705174482c95260"],["/archives/2017/01/index.html","b95762897797d4b58d62ad0b538d98d7"],["/archives/2017/04/index.html","1142843f77598af9f6f367d2210b7410"],["/archives/2017/06/index.html","9af4c6eee5eb3e38cee9a61a3ee48af6"],["/archives/2017/08/index.html","33dac15ddf1d76ff7de241758acbba61"],["/archives/2017/09/index.html","bfdb1b0301c4eb6756acd49825dca970"],["/archives/2017/10/index.html","25aa2cc2b39fa862fd5d1ebd6fbf00c7"],["/archives/2017/index.html","28eedd70f831fb40285cc08097603877"],["/archives/2017/page/2/index.html","c233421ca1ee028526a21599a614fa55"],["/archives/2018/04/index.html","a8367a7d1ca04aa9083bf9a5468a91f4"],["/archives/2018/05/index.html","d7332cad9d8c08d6afc100f641c45840"],["/archives/2018/index.html","7c15dba995dfa50db759e06d24ee269b"],["/archives/index.html","dbf82fe61f00af668f343a669e6c0b83"],["/archives/page/2/index.html","76e959da0b35c9ff73824004a31942f7"],["/archives/page/3/index.html","06104822fe4f2142f53751211482506b"],["/archives/page/4/index.html","a8e52f44ae5336d7b03a3a38cf43fa3d"],["/archives/page/5/index.html","dbc0bfdad3a4feddd279cb31b19e4cd6"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","7d00d88617c5c8e2c1a31827c02386a6"],["/categories/ACG/Music/self-copy/index.html","90c55766edf777195623ffe5292fa94c"],["/categories/ACG/Travel/index.html","c4c91c019d59866c1555a39479adb35c"],["/categories/ACG/figures/index.html","0866ef34ecf1a265943af0cece86d1dd"],["/categories/ACG/index.html","d8e3c88dda210b7203e71fd5d9163d5f"],["/categories/dev/Front-End-Dev/index.html","8f57782e33dbb97ca6ccd1cc6d2d9d30"],["/categories/dev/HTML-CSS/index.html","95a448efa6089b4fd7c7396d196c26bc"],["/categories/dev/android/index.html","17dff4005932b6b4aedb94acb8a1211b"],["/categories/dev/cpp/index.html","42f969c1394698c734ad8988cf7c83bc"],["/categories/dev/git/index.html","114248ca6c2f63a43bbdbbd9e1db23e6"],["/categories/dev/index.html","176dd0da23cd7a511a14e73a46b6185d"],["/categories/dev/java/index.html","49932e1135590513d68af712a3cb2dd6"],["/categories/dev/page/2/index.html","b2183f8655ca00c236268c88c3caf228"],["/categories/maintaince/blog-setup/index.html","88ea3bd68b0943523d30ab50baba92d1"],["/categories/maintaince/index.html","c1cde88e06eb7a90d90e85570670a51c"],["/categories/maintaince/macbook/index.html","d95ba559147d66e6d5f692cca01160fb"],["/categories/maintaince/router-config/index.html","72c18ccc0763c02e930d39ffd244da23"],["/categories/notes/index.html","9ac841f06c32f3ab4e109f8a622e94d7"],["/categories/tricks/android/index.html","c80aee8f10452f9ee28eacbbbd4e3041"],["/categories/tricks/index.html","a12b54d794f6e8557a7639af0f2eb1fd"],["/categories/uncategorized/index.html","915da80b00ecaec4bf30381f0bdf185b"],["/categories/works/Front-End-Dev/index.html","e945315dddc67bd7f78ab292d7cad885"],["/categories/works/csharp-wpf/index.html","4240444825fe041afcd504dcd17c904a"],["/categories/works/index.html","9d4608f07a773fd21d84eef9ae29d52e"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","a4180618d90a082c372bc0cab95e7198"],["/ja/2015/03/WNDR4300-setup-log/index.html","1f204d3ea3a3a1c078602946989fdc3a"],["/ja/2015/03/android-hostname-change/index.html","23e6b878eeebae6db279795ef366abe4"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","ce7f806a4471b7d6429dd8c87293cba2"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","35fb5e760f2e657d0faccf4956ffcd86"],["/ja/2015/04/cpp-study-log/index.html","9e2bc35e274941303afc727c0d1d9634"],["/ja/2015/04/github-pages-ssl/index.html","0fd69bb668cc78349e0a22de6e3f4669"],["/ja/2015/04/hello-world/index.html","846ca5c5a2c051db0c0f893197e09e34"],["/ja/2015/04/hexo-setup-log/index.html","a02b6d19d88343d6f2e425d06769f6da"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","1231c2c5a057f4099838ba3be949c73f"],["/ja/2015/05/cpp-inherit/index.html","f15cff193966dfe6d268d64593b721b5"],["/ja/2015/05/cpp-polymorphism/index.html","7c65e90395734535cca17c9ee2c045d0"],["/ja/2015/09/android-root-ota/index.html","bb2cb3dbe22bb0471e803bf3856f4a2c"],["/ja/2015/09/java-learningNotes-1/index.html","a565b88d183221e11c541029b911fdf8"],["/ja/2015/09/newblog-newlife-2015/index.html","ffc61f82e47e7556c8236bb7b6e35c42"],["/ja/2015/09/router-rebuild-2015/index.html","06ef314c260cdfb82fce2bad3fd62f6b"],["/ja/2015/12/2015-12-21/index.html","2999fcddccb9a14e6c7dcda36ca2db71"],["/ja/2015/12/PixInTouch/index.html","79e7befa5b302b088d8f1460c7b5df63"],["/ja/2015/12/git-study-1/index.html","d4f273295aa14db63e9b5c13b6f8795a"],["/ja/2015/12/hexo-backup-and-migrate/index.html","54b37bbcbdab7c4aa717982f0694077e"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","4e3adacdb857bca2d126c0c470b40e65"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","e1ad29166d539505085c458e6371f65b"],["/ja/2015/12/router-reconfig-2015/index.html","d024096f9212621b1e03736f137dab52"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","dc5c2f4eb796d0525b97a6cba91be149"],["/ja/2016/01/2016-stepping-further/index.html","3fd0cfb7993bda86aaf4d58ee0cc4720"],["/ja/2016/01/Android-Study-1-22/index.html","560cd415ad3dbe0bf9fd100c9aae3288"],["/ja/2016/03/2016-03-20/index.html","85a9723682153c8a10962ca95ea9c6a9"],["/ja/2016/03/GSC-535/index.html","cfbabdf310137d08d44009096d14c42f"],["/ja/2016/03/gulpjs-1/index.html","61d65190b72459a0203eff75992486b4"],["/ja/2016/03/hexo-theme-paper-white/index.html","880e022244a89ac872051a311ea7ea32"],["/ja/2016/04/2016-04-19/index.html","5f95d541497137ac43b9832ad1d29f6e"],["/ja/2016/06/2016-06-16/index.html","7a15f80c4f2f631e42c3249abe2f3294"],["/ja/2016/09/2016-09-18/index.html","eb02f86281871e2b5d90a170c34579fa"],["/ja/2016/10/2016-10-27/index.html","4f8530b5fa48672c988b5344f87fd5cc"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","17437981871a1e6801bd3f73343c26b6"],["/ja/2016/12/improve-duoshuo/index.html","67bc7aff8b5c41dcf2b2388cb7bdcd7b"],["/ja/2016/12/use-travis-ci-your-blog/index.html","68e132145834fb2c218f0cef4a12581d"],["/ja/2017/01/2017-iyahoi/index.html","3a138b5bbc72f68cd7a820f8c703987e"],["/ja/2017/01/webpack-amd/index.html","4b09dbd640cfb26338dedea85b797166"],["/ja/2017/04/kotobukiya-syaoran/index.html","5946ea0b8cdb07299783abedc66f41cc"],["/ja/2017/04/macbook-and-surface/index.html","3d381cc146de7026383ba2ce87351f97"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","b585a71934a4cd24d44320562081f38a"],["/ja/2017/06/noragami-seichijunrei/index.html","e73408782d44f3079dd1bda0e55edb2a"],["/ja/2017/08/cross-compile-55-libev/index.html","ca7e29f17def6d072c785eb752ee1ef5"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","e8a1d17e3b166475d0358b06576e0e1f"],["/ja/2017/08/hello-jp-world/index.html","a56c8fafc2e417ce7bb478c9ecf43a21"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","9bdefe981f8b1245ca02f490e52ed6cf"],["/ja/2017/09/record-user-login-status-methods/index.html","5ed4af218d85ee137fa577b75cf98d32"],["/ja/2017/10/vue-typescript-early/index.html","ce31455e8f394e99c7ccf523e89e28b6"],["/ja/2018/04/2017-end/index.html","075743cad895845b78a710b68afee495"],["/ja/2018/04/twitter-account-activity-api/index.html","b6caa0e221bb39d6e11a64e77c3d28d0"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","b4bd4f07c499f56f423e578c90249d43"],["/ja/404.html","0233c2fc74a7c48400f1fa5192171121"],["/ja/about/index.html","1fceea383702470a3263265af0604da0"],["/ja/archives/2017/08/index.html","c5046fedd8d7e03ac7b8df0ba1d3559f"],["/ja/archives/2017/09/index.html","f3ba79659c7cd99dc35a3c8425c744f7"],["/ja/archives/2017/10/index.html","8d81cab0bdee845ed9885e4200c144bf"],["/ja/archives/2017/index.html","27b2aa893a9bedaae8a915251dc0716a"],["/ja/archives/2018/04/index.html","166bc922de22598b1fc30d50598876c8"],["/ja/archives/2018/05/index.html","44db99e18031081ec937b95302feefc4"],["/ja/archives/2018/index.html","343e66963d610403619af94e5bca8481"],["/ja/archives/index.html","543a33ba1907437aa94247e91e83f514"],["/ja/categories/ACG/Travel/index.html","f3bdc3b6c5537775daa7870ab42b2fb4"],["/ja/categories/ACG/index.html","9cd65b48a83f44e19a28aa31e579b037"],["/ja/categories/dev/Front-End-Dev/index.html","8eb371e8868d1662a2d72f20277b0919"],["/ja/categories/dev/index.html","b10bf31f6673b3df557afbc7f12528e6"],["/ja/categories/uncategorized/index.html","8006fe59af704245cf98404f3fb38c12"],["/ja/index.html","416af65bebcd61ab6c208eadb0f36a89"],["/ja/nihongo-test-page/index.html","8a6fc3c1682fc3960a8e0d1a89aef173"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","4f0053fa225d641d50cddde7bd178842"],["/page/2/index.html","7b5171c29ebac3ee5dbad445a8451831"],["/page/3/index.html","0f9b341d93803967e9f256eb6a134015"],["/page/4/index.html","a651749276ac4fbe65abe6b4a55714b5"],["/page/5/index.html","e6a8ff9139201dfa1125f9f96edc829b"],["/page/6/index.html","e624bc7e787234c26d2699959cb1fbdf"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","a4033e4b64120c85724a19ad99146fe9"],["/zh-cn/archives/2015/03/index.html","8168fef4b14ae649dfcec24b4b7ae59a"],["/zh-cn/archives/2015/04/index.html","618c1adc9fdde34a432f6d18d2cdaaa2"],["/zh-cn/archives/2015/05/index.html","9de7ceaf3c3127e78f6da6d41aece618"],["/zh-cn/archives/2015/09/index.html","83b173cdb8241a5b5988e124fcab69ac"],["/zh-cn/archives/2015/12/index.html","739cb87924769521b4b85844fa6f72c1"],["/zh-cn/archives/2015/index.html","9301193d10b21fc7e4f328ceb91b86fe"],["/zh-cn/archives/2015/page/2/index.html","1746ecb799b3d48c77638fa5ccacd0c6"],["/zh-cn/archives/2015/page/3/index.html","262f3471f0525eafb884adcc859851dd"],["/zh-cn/archives/2016/01/index.html","8818f7c80dd93039c732d09ff14149f0"],["/zh-cn/archives/2016/03/index.html","fd2134d956850b88f2128f8842e34258"],["/zh-cn/archives/2016/04/index.html","2322bf24ce49cdb3f64e3bf565ea8ad4"],["/zh-cn/archives/2016/06/index.html","047ee80aa43841fb454a00f2bddb48cd"],["/zh-cn/archives/2016/09/index.html","8ee516b0400881757e8a580d71b15894"],["/zh-cn/archives/2016/10/index.html","abe8fd9df54cc298ac5744cc90516054"],["/zh-cn/archives/2016/12/index.html","73314886f2384870ad7e30ec78455beb"],["/zh-cn/archives/2016/index.html","901a59478fc8e716fb4f6983c8d5838c"],["/zh-cn/archives/2016/page/2/index.html","4f9698e95615862ea47d7ad8ed17f953"],["/zh-cn/archives/2017/01/index.html","31242f4605046f0846c51aa30c0aae7d"],["/zh-cn/archives/2017/04/index.html","39abc2722b2d8ff1b9f8d49b08d1ef06"],["/zh-cn/archives/2017/06/index.html","fbaeee2ee5dc7676b47d3f67ac20dd47"],["/zh-cn/archives/2017/08/index.html","0aaed254df622adc5ac88bcbe20db679"],["/zh-cn/archives/2017/09/index.html","8e7945075a5de65517c7f5953398f106"],["/zh-cn/archives/2017/10/index.html","c2fc486a210b2e546ef989034fcbb680"],["/zh-cn/archives/2017/index.html","b9f6e598cbd465b31e8bb29b0624db6d"],["/zh-cn/archives/2017/page/2/index.html","ce5e0ab2f70d34c9d9c3712b02a1e082"],["/zh-cn/archives/2018/04/index.html","edbce82f9e1556d65f1ecc784f40a70a"],["/zh-cn/archives/2018/05/index.html","8c7100dd0c5b73b0594d723f7697d487"],["/zh-cn/archives/2018/index.html","c903960e77c6c74d954b2f9e835e37a4"],["/zh-cn/archives/index.html","d1507175565c6db11bb315527b97f5ee"],["/zh-cn/archives/page/2/index.html","6dd93c0ed85264e3e719862ed11e624a"],["/zh-cn/archives/page/3/index.html","0dae53934414eb533010bc84e4a1570f"],["/zh-cn/archives/page/4/index.html","0cfe1235f8998507e66ec55ecd0a75ae"],["/zh-cn/archives/page/5/index.html","c1d36fd70ef728c1eab109bedabbab04"],["/zh-cn/categories/ACG/Music/index.html","c939c3f5aa77bcc18f46ec077724abc3"],["/zh-cn/categories/ACG/Music/self-copy/index.html","94ff1646398d79d04cac0d2df8ff1852"],["/zh-cn/categories/ACG/Travel/index.html","63fe88a5413adff2f4dcf64bf79553ce"],["/zh-cn/categories/ACG/figures/index.html","c88e58e8f2bf71063a98e9311cbb0cb1"],["/zh-cn/categories/ACG/index.html","3379ce250070620ea0ea5fedf5a8a851"],["/zh-cn/categories/dev/Front-End-Dev/index.html","503a2e1affac8dc2cd8b7b288337ade2"],["/zh-cn/categories/dev/HTML-CSS/index.html","64cd309cd0737f35376b94d44e27a728"],["/zh-cn/categories/dev/android/index.html","cbb8e7e53860ec734ae6fbbd22b00ea9"],["/zh-cn/categories/dev/cpp/index.html","9d0737ecb3b0fa944b7d8bc8e1212341"],["/zh-cn/categories/dev/git/index.html","0d108fcbcbd36f1dad01a462005f7cce"],["/zh-cn/categories/dev/index.html","1d1a276af25bdd3eac1a374b16571f75"],["/zh-cn/categories/dev/java/index.html","75a3be5730106709247732006d20301a"],["/zh-cn/categories/dev/page/2/index.html","3df6f79aa2740a3bc2156a4d9acbadc3"],["/zh-cn/categories/maintaince/blog-setup/index.html","f31624ab88d93bb17cc9014c23bb6269"],["/zh-cn/categories/maintaince/index.html","499cb2061d67aea89be020eea36ac794"],["/zh-cn/categories/maintaince/macbook/index.html","3fd82010b734dd4cace4acb3c26cce8f"],["/zh-cn/categories/maintaince/router-config/index.html","ea3caaca72a41a5512ca4096b191184c"],["/zh-cn/categories/notes/index.html","657f29d4369d789946b36617c7116224"],["/zh-cn/categories/tricks/android/index.html","cec3242a08dea6938ca669a418cb231c"],["/zh-cn/categories/tricks/index.html","d2a8fdad67a6afd66c4cfab4b8e1c1e8"],["/zh-cn/categories/uncategorized/index.html","5ce70a3c33a2ca8680a19db1aaa4ee5f"],["/zh-cn/categories/works/Front-End-Dev/index.html","445626aeb1bf9ad445ef01fc8ae62e16"],["/zh-cn/categories/works/csharp-wpf/index.html","617ff6d133c628e14328555a9fee3757"],["/zh-cn/categories/works/index.html","d6b87104f67c3dd0c1ec3ba142c4fbcd"],["/zh-cn/index.html","febfa783210a96f913aee8105bad9794"],["/zh-cn/page/2/index.html","78dd9c3e507d41b75f6cd4a83a699611"],["/zh-cn/page/3/index.html","d90e4fc6f29914040518290a5164a3d9"],["/zh-cn/page/4/index.html","c76ad48fd640133169d2e36dcd9f7489"],["/zh-cn/page/5/index.html","0dd86ca1c2ab45f1a49ee298535229ce"]];
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
