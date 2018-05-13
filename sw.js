/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","bd4176d3eb7ef26bd1e4cbf72148f21d"],["/2015/03/android-hostname-change/index.html","b031ba4aa26bd2fa71e0172a2ecc3898"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","b3399c5f9d55739d5675bae0e82a37f8"],["/2015/04/android-chrome-issues-with-webpage/index.html","48c6259a1224a705dba5a6cb5283b63f"],["/2015/04/cpp-study-log/index.html","24e2291a249ad519608a61fa96381e2c"],["/2015/04/github-pages-ssl/index.html","58020575fa4168c2f73edbd6e271e126"],["/2015/04/hello-world/index.html","42c470801e5b443a04b60036109d0eb3"],["/2015/04/hexo-setup-log/index.html","00f7129d19ca12d6b67ead3dbf4ef10e"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","6e1530767ab0f4b8565983f250b85851"],["/2015/05/cpp-inherit/index.html","d3cb054d33d53109329606d73e7e422a"],["/2015/05/cpp-polymorphism/index.html","2885263c659313933f537bdbb777435b"],["/2015/09/android-root-ota/index.html","dd0d5be767b7371f5ac3e25c66115766"],["/2015/09/java-learningNotes-1/index.html","9f2a17a99d30422644f1a549025ae704"],["/2015/09/newblog-newlife-2015/index.html","d0cace848d97a32fca278aa48197ec47"],["/2015/09/router-rebuild-2015/index.html","73674c00d8152ddbcdc0dcf9ee167ca2"],["/2015/12/2015-12-21/index.html","94f938cda333cbf41dfc81d2256de19e"],["/2015/12/PixInTouch/index.html","1f36349ce7565e8d0fef6394dad700fa"],["/2015/12/git-study-1/index.html","4bd8ce6b4d90d634678eb3daad20ade0"],["/2015/12/hexo-backup-and-migrate/index.html","cd247d41c030c410cdcc7cedc24be793"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","1383408447dc1f030e55f4015a3b5be9"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","df915be80478092e328bef42dc1642a1"],["/2015/12/router-reconfig-2015/index.html","727a77beebb35db177ebb45bf0942ca8"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","0f0711fbaa9c9dd21dc643d4b3fc940a"],["/2016/01/2016-stepping-further/index.html","60d0e4aeda9450265816f47f49ad0eaf"],["/2016/01/Android-Study-1-22/index.html","a73fca6e6a004605a52a5905a34fc95c"],["/2016/03/2016-03-20/index.html","b5028762976d6ef91c3d0abefdd5bf58"],["/2016/03/GSC-535/index.html","e6a252540ff058987b4e259781cfcd54"],["/2016/03/gulpjs-1/index.html","2925d855159310bbc7cfa7caa6d3f044"],["/2016/03/hexo-theme-paper-white/index.html","e5cda084702147eb7b9dbfa68c5e9b6a"],["/2016/04/2016-04-19/index.html","e581210890a4cb48d8a4492cd7d79599"],["/2016/06/2016-06-16/index.html","854176e785d5064d396e7d6eed2176de"],["/2016/09/2016-09-18/index.html","f8a7b8df0f1bb616a853ae58ee46b702"],["/2016/10/2016-10-27/index.html","93b9c319ae5a6cd4fd611386fce9a644"],["/2016/12/config-switchresx-and-2khidpi/index.html","3f4b2c3ee955ba4ecccfdc39493baf72"],["/2016/12/improve-duoshuo/index.html","15a90d6b9a198b8f1af5d44e1b1103f2"],["/2016/12/use-travis-ci-your-blog/index.html","3b7527bcf7fde8d73eb74f3d68168469"],["/2017/01/2017-iyahoi/index.html","4dedfefbbfd835d3b9c67818105eb750"],["/2017/01/webpack-amd/index.html","8ff188da4800bf2b9397c795ce12cc4a"],["/2017/04/kotobukiya-syaoran/index.html","e504a5b76a3ccdd163da748717c3fa4e"],["/2017/04/macbook-and-surface/index.html","f54d27e3e2e5913c1b395c5e1a73095c"],["/2017/04/uc-hyakuya-yuichiro/index.html","f45b29af8bcc412e2586d6334f9af712"],["/2017/06/noragami-seichijunrei/index.html","f9fa2dca09f78be592dbc8a4aa5264b1"],["/2017/08/cross-compile-55-libev/index.html","973f1caff79ec7f8020af995d041f83e"],["/2017/08/explore-service-worker-working-lifetime/index.html","c285dc187be431f80bd7c511d5495284"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","ea8aa80f9f0d99378114d096fc502b7b"],["/2017/09/record-user-login-status-methods/index.html","9c382144262e677992b561d128187c91"],["/2017/10/vue-typescript-early/index.html","57d8527d95ad06b3993e1b381638edef"],["/2018/04/2017-end/index.html","e265378298681b2c799a2ad6ca7e5c76"],["/2018/04/twitter-account-activity-api/index.html","6729932228b1fb6447b20fd6eb4882d8"],["/2018/05/buddy-complex-seichijunrei/index.html","b10d64f7e3227f9c3406d353ad4cf0ca"],["/404.html","0fdcc2babde4f09645d3fda8973e4e95"],["/about/index.html","56af2807cd01bca895433f91a63b2632"],["/archives/2015/03/index.html","e3e9d065f43f688b0ae899f7f78542dc"],["/archives/2015/04/index.html","063e81a27c0be2844b697d9c6baefe02"],["/archives/2015/05/index.html","bfa8bef9219af818319d642b855b9e9e"],["/archives/2015/09/index.html","92ae7209ace8d0ab3b187777d905277e"],["/archives/2015/12/index.html","44d1ccb8b5e4e90352c44996a59d16ec"],["/archives/2015/index.html","f986fad17b6c8daecbd9ce1d7ead1681"],["/archives/2015/page/2/index.html","958b8b3c23b21e928c4986e60ea3f691"],["/archives/2015/page/3/index.html","775109de4cbcfdf3091f090866994f11"],["/archives/2016/01/index.html","dc13133a1df875ff0fb507d62888f0d1"],["/archives/2016/03/index.html","58b592e9732eef0ef84fec630b186163"],["/archives/2016/04/index.html","862f52b84b42e8814ff2716d373b03da"],["/archives/2016/06/index.html","a650a5ac186efba921386a6ac3f85c14"],["/archives/2016/09/index.html","05ecc09cdb73cb01629b7d836b3cd1d1"],["/archives/2016/10/index.html","9ee57b2f8a196ef44ed389c4e25b7b4a"],["/archives/2016/12/index.html","5f3c460b2a883ad7aa8438ced111a21f"],["/archives/2016/index.html","937d64bba68e899f59d80f655b0c4022"],["/archives/2016/page/2/index.html","05b8d2e9bf0886e10fda31dc400b89d6"],["/archives/2017/01/index.html","6ebc32e7caee4c6a6db7de09f43b3a49"],["/archives/2017/04/index.html","bbbf8dfca6350b2bff16a18ff1a3599a"],["/archives/2017/06/index.html","0ce5a479e753bf4905d365e8b447fc14"],["/archives/2017/08/index.html","078103c9c477e58ba1707be944609f85"],["/archives/2017/09/index.html","e005b33f4514f8147f8245a010e0c403"],["/archives/2017/10/index.html","40e73f40fde701c2ab3beae6decc25eb"],["/archives/2017/index.html","9f44a7293e22a332e3ac1a4fdc22cec8"],["/archives/2017/page/2/index.html","202b7c93c457c4411970c9119262be07"],["/archives/2018/04/index.html","57602f3042ff5643bd707f508f0cd7b0"],["/archives/2018/05/index.html","23703d6d945051c47a83465299334471"],["/archives/2018/index.html","89c2ffbeb30d54c42292caaf34c71455"],["/archives/index.html","2e6348889ce8cc4874c731d9cada5341"],["/archives/page/2/index.html","2de138ba8d4ff7cbdd942165ef37997d"],["/archives/page/3/index.html","5399d725ac3f3c0a244d0c72c5808034"],["/archives/page/4/index.html","ea7ba34b4248f0fadf72c826415ac37c"],["/archives/page/5/index.html","e6802846887a1853c0e4219b86e8eedd"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","291748fc9521aa6fa12d3c4f9e4e999d"],["/categories/ACG/Music/self-copy/index.html","9b986498e9f0fdcd2b314550f3c22f04"],["/categories/ACG/Travel/index.html","5046b6b435d3bcd0b1ad9ac96155d773"],["/categories/ACG/figures/index.html","f383d853132d028b2eb6bfc1320b0d25"],["/categories/ACG/index.html","d1f1f7bad7134394ff76c27ef70011cd"],["/categories/dev/Front-End-Dev/index.html","b0b0f09a4fa7dc6c55b0449d729479eb"],["/categories/dev/HTML-CSS/index.html","1941b6d5eecf7e4399cf00f5016c4803"],["/categories/dev/android/index.html","93b95b64383238c0db01286200def490"],["/categories/dev/cpp/index.html","0e96ad49fb0355fe113bcd27a02ecb91"],["/categories/dev/git/index.html","0b062ff5d796aa7c08f146333292540f"],["/categories/dev/index.html","dc61487e3090636570b84b68a2cd6b78"],["/categories/dev/java/index.html","2a9418343f742da0f93364901ecfde97"],["/categories/dev/page/2/index.html","6f615aa61eb2d276a7247e5c66852a7d"],["/categories/maintaince/blog-setup/index.html","8cbbf0032b7c28f8ccfd30e4f7bc145e"],["/categories/maintaince/index.html","1f47a212f8bd5d30bee4874cdace7543"],["/categories/maintaince/macbook/index.html","d19539a276227b03269b56e164f74e23"],["/categories/maintaince/router-config/index.html","3cd70e55719e6349eb0465f237f678a2"],["/categories/notes/index.html","3e4fa63e75a7c8300cfc1490fcaef879"],["/categories/tricks/android/index.html","c10ac503b55b27335fb8fb0d08de2971"],["/categories/tricks/index.html","16a2425334cf6160791df089fbc7e4ef"],["/categories/uncategorized/index.html","298648937ae6418320da24ec69b324d3"],["/categories/works/Front-End-Dev/index.html","715e6b9e9c3094fd815c710322c146e2"],["/categories/works/csharp-wpf/index.html","5147eb0264889d3a8fd6013f0eec15ef"],["/categories/works/index.html","8b8c55c74baf46757e524b26d09cba17"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","15751db43115b7e7952d9f285587a484"],["/ja/2015/03/WNDR4300-setup-log/index.html","df600d161d6eb5f13735dd318df8ddcf"],["/ja/2015/03/android-hostname-change/index.html","f7d621cdc87fceeecaa2d4e500300908"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","1f124747e78ef70ddf69469230e605b9"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","c899528d89b05f6aaa058161a517a29f"],["/ja/2015/04/cpp-study-log/index.html","fb622475f5aca372cb8ab50b9d32641a"],["/ja/2015/04/github-pages-ssl/index.html","34c248538426cb2bb2896d6956538cd4"],["/ja/2015/04/hello-world/index.html","34f2b61dfa67575fba6025b722e20c19"],["/ja/2015/04/hexo-setup-log/index.html","ba12e1fac08f985fc95bce154a133c5f"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","241dcca9b11d3951212e4889d691fa66"],["/ja/2015/05/cpp-inherit/index.html","2f91b98c80489255791e3b91a0b42423"],["/ja/2015/05/cpp-polymorphism/index.html","3cfb6ccdd08081c78f2c2d4a0e1badc8"],["/ja/2015/09/android-root-ota/index.html","7d0ed485c3c9c4369fd7f0a93f577dec"],["/ja/2015/09/java-learningNotes-1/index.html","3e09adc919f096b041de10b998434e13"],["/ja/2015/09/newblog-newlife-2015/index.html","1774567201df2401830752d22f0fd7a2"],["/ja/2015/09/router-rebuild-2015/index.html","6f8a742b52364d14b34f08360179bf92"],["/ja/2015/12/2015-12-21/index.html","02eb845d9b5283e5e470ca9297360883"],["/ja/2015/12/PixInTouch/index.html","bb73ac274a730da88e9cf06253a3f7c8"],["/ja/2015/12/git-study-1/index.html","e1d9af6d2e83acb9868531091c0a3732"],["/ja/2015/12/hexo-backup-and-migrate/index.html","a6b4159224b61a1d189898d7397bb971"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","c5c371843433ee8b39165670a3afd1e5"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","3c74907ce709a7ee1f7debc910a4b8a9"],["/ja/2015/12/router-reconfig-2015/index.html","49ac8f495870a68f02cbb0832feb1190"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","ae39b0df10d10d6160f10e106a318acd"],["/ja/2016/01/2016-stepping-further/index.html","8a78124942b5fa4a2f718c5256c4d5b2"],["/ja/2016/01/Android-Study-1-22/index.html","8905a7fad115d60efd3e061243eda7f7"],["/ja/2016/03/2016-03-20/index.html","1c62852fea982b184998c0407ac72672"],["/ja/2016/03/GSC-535/index.html","a01c4001b2228ebb796c77c7d955c809"],["/ja/2016/03/gulpjs-1/index.html","378b5e4390346223b80b35b318c3ba3e"],["/ja/2016/03/hexo-theme-paper-white/index.html","aacd190eeec10872af624edd81cb6eed"],["/ja/2016/04/2016-04-19/index.html","fc52062d1c9a3f11af06ffc96b481a96"],["/ja/2016/06/2016-06-16/index.html","9a6a36988b16721d37abc522e3698eb2"],["/ja/2016/09/2016-09-18/index.html","9f306b9fe6b9b84fcc1f87534617776c"],["/ja/2016/10/2016-10-27/index.html","96bda532d607a0e48b5133eb75f931fd"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","10559b3b540d7d9bcaa02c1d0c3a5ff2"],["/ja/2016/12/improve-duoshuo/index.html","1092f59557df956eb6270ffe26251901"],["/ja/2016/12/use-travis-ci-your-blog/index.html","25f41759fe6147b2ce9da02319d3d57c"],["/ja/2017/01/2017-iyahoi/index.html","fbde56eac499194800de83172956bab0"],["/ja/2017/01/webpack-amd/index.html","282ff70b104b1f5107fa7f3b15ce9e7e"],["/ja/2017/04/kotobukiya-syaoran/index.html","6f63547dd27f68b6764a58c50e4fc15a"],["/ja/2017/04/macbook-and-surface/index.html","69c7bf33879b8cfb0d532f3ec5cf3b86"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","8c1ea67efabe734a9ab0a5b2552a8b12"],["/ja/2017/06/noragami-seichijunrei/index.html","60232b6cd2ad9957c688ed444444d693"],["/ja/2017/08/cross-compile-55-libev/index.html","e485416cad5670e3853e66ce6e087666"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","3f09479cbd618839927c1b81d8680e28"],["/ja/2017/08/hello-jp-world/index.html","36d9dc061737b91d7360a51f552a4be3"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","a69b6cf8b71930636b68108e3e30db41"],["/ja/2017/09/record-user-login-status-methods/index.html","9fd1fce92fee6f064cc653507553032a"],["/ja/2017/10/vue-typescript-early/index.html","a68010e8f7748d23848775f08ac0444e"],["/ja/2018/04/2017-end/index.html","6ee0e23b9a416112e2fc3cc3bc02ad05"],["/ja/2018/04/twitter-account-activity-api/index.html","9164d331adb481039c5982eb91dcb5c5"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","d0b2d225a15a3f6ca66802d806e75e8f"],["/ja/404.html","f46ee4ac0620f3edc6d78a09a27a2e1d"],["/ja/about/index.html","c6a470fc8cdc9effba7b38a7f1b0384d"],["/ja/archives/2017/08/index.html","3a34fb4dc113b95769e5e439149aa424"],["/ja/archives/2017/09/index.html","ecf9b1ba71a79ef0b3221d08e0cd8d8f"],["/ja/archives/2017/10/index.html","7d0425fcdeb08a9dd8bf9c907b05b73f"],["/ja/archives/2017/index.html","fe8b84f34566f7cab09e5c3d5a77d5e5"],["/ja/archives/2018/04/index.html","db80e563f33514a31a1dbed5ba4338d8"],["/ja/archives/2018/05/index.html","fbee89e9129d4bce889a1a2234487daf"],["/ja/archives/2018/index.html","f7bcd4a7bd92c5cb6a055cc647b45834"],["/ja/archives/index.html","c622922038f1f1f66e6a4cdff06c46f7"],["/ja/categories/ACG/Travel/index.html","fbb5f08097afae66d4c2c77c9be1b4ac"],["/ja/categories/ACG/index.html","495acb5c9ba90d6fba5cc4334e738c59"],["/ja/categories/dev/Front-End-Dev/index.html","e70f450cb3d3a546d3cd8211b758067c"],["/ja/categories/dev/index.html","9cbffee6de0c12eb713ac0aaac503a88"],["/ja/categories/uncategorized/index.html","f3d5b761866273698426f265a685290d"],["/ja/index.html","bfa44f0cbfc243dbe8cb30a51fb8069e"],["/ja/nihongo-test-page/index.html","93b8023fc8034fe48ecba625278dedbb"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","e64a5e2f0fc86c711786e2288ffa1280"],["/page/2/index.html","bbee1755f9cf9c8da69aaf159875465d"],["/page/3/index.html","7ce765869025cf23c51eebf56315dc64"],["/page/4/index.html","d5f8508a0eebc51b77dc86d1b617d1dd"],["/page/5/index.html","8b6c0d4b45e935a6cb60e412006c0937"],["/page/6/index.html","c45b836a3b2322f92c5196c802ef42e5"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","f65af38c5446853fdbc97e55316259c7"],["/zh-cn/archives/2015/03/index.html","78ce0d0634cedc37ff4a5ae6dcdcc522"],["/zh-cn/archives/2015/04/index.html","e8a7aada63b1ea1282a44c4d68691f51"],["/zh-cn/archives/2015/05/index.html","4f49a8e8da9de549647bffb01118af21"],["/zh-cn/archives/2015/09/index.html","1731331dc17ecca1b454733efc1708d0"],["/zh-cn/archives/2015/12/index.html","0c48a5057755e758a46e2e832170928d"],["/zh-cn/archives/2015/index.html","f6d31193937b8b0ba594c5d7fc7699ee"],["/zh-cn/archives/2015/page/2/index.html","97a483beb7a10b0d538769477f34af3c"],["/zh-cn/archives/2015/page/3/index.html","6e49da10f9557c361a2a975179c9ffe4"],["/zh-cn/archives/2016/01/index.html","dee0cf6aae1eed455125151f24ec950c"],["/zh-cn/archives/2016/03/index.html","a29297c32c1c90d7f815ebc982e72a33"],["/zh-cn/archives/2016/04/index.html","8870213d8b7def4d7ca81082a57d2967"],["/zh-cn/archives/2016/06/index.html","f2999c090166ca827b229a185a776616"],["/zh-cn/archives/2016/09/index.html","c71e231e62b0c3f71dccd3f5ee6a8f80"],["/zh-cn/archives/2016/10/index.html","ea1745fc10e9dfa56f9de663c24aa32b"],["/zh-cn/archives/2016/12/index.html","14e499e948ee0696d12bdcc621a073ac"],["/zh-cn/archives/2016/index.html","c98e622a422682c4b833b80702bc53a8"],["/zh-cn/archives/2016/page/2/index.html","c5fa7b211bf440e232f7fa112313a7cb"],["/zh-cn/archives/2017/01/index.html","d2ac8cf7baf97f655cedb8250691a210"],["/zh-cn/archives/2017/04/index.html","dec792ce9e5b4d8f07d2131413bbc24c"],["/zh-cn/archives/2017/06/index.html","dd5b63f2430f7622dfac7b9918bfdcab"],["/zh-cn/archives/2017/08/index.html","b007519b5eab6cbfc4a3492cb1d5a871"],["/zh-cn/archives/2017/09/index.html","235dadb8dd10b183f2e589868523e5c5"],["/zh-cn/archives/2017/10/index.html","619ddc8b5d52c6696cb5c75c8d9d57d0"],["/zh-cn/archives/2017/index.html","9454fcbd9ab5eb18aa98cdc4c60254a7"],["/zh-cn/archives/2017/page/2/index.html","a7152bba3c835d86aebd48ebf6bda828"],["/zh-cn/archives/2018/04/index.html","71bf3860f2fe6ce8ca29540ffad42ce6"],["/zh-cn/archives/2018/05/index.html","c94e19cdd5ccda21fa7ab264944437fd"],["/zh-cn/archives/2018/index.html","4a8cc663155a5d0a7fda7b59b0f7f2d8"],["/zh-cn/archives/index.html","f5dd17741859727b8905105a198f37dd"],["/zh-cn/archives/page/2/index.html","497c0a6ff9a0cbca817ae3b9f7f05158"],["/zh-cn/archives/page/3/index.html","a29b76ccfcda0b09bdd51e872fae58cd"],["/zh-cn/archives/page/4/index.html","150e1377e495af1536a93df09ec5c3c2"],["/zh-cn/archives/page/5/index.html","29e1f1c152e506ea24496b70da82e0ce"],["/zh-cn/categories/ACG/Music/index.html","07b8ef28cf060c0b08fbbec0bbeacc99"],["/zh-cn/categories/ACG/Music/self-copy/index.html","945bbcd84814299032f07129a69a285c"],["/zh-cn/categories/ACG/Travel/index.html","c624405e8d94a5e28b1e59d0bdb3cdea"],["/zh-cn/categories/ACG/figures/index.html","241d338f09ac44251da6340f8a2efc6b"],["/zh-cn/categories/ACG/index.html","6276e3e4f3f465fc8a9f99c7932e1467"],["/zh-cn/categories/dev/Front-End-Dev/index.html","1a2b375b34227303eb65f2df0bb18bde"],["/zh-cn/categories/dev/HTML-CSS/index.html","facb4298165d329ec5be4eaaba707ca8"],["/zh-cn/categories/dev/android/index.html","cbfded803814f4b546cf8437d93a2e8a"],["/zh-cn/categories/dev/cpp/index.html","16e072262c1480f7c91a0134adf536fb"],["/zh-cn/categories/dev/git/index.html","e0d49601ed87a03c1f456bba24f378ec"],["/zh-cn/categories/dev/index.html","1ea7d93b855284c238b144608fb6aa12"],["/zh-cn/categories/dev/java/index.html","af96665499b1afb35eb545045a6abb97"],["/zh-cn/categories/dev/page/2/index.html","bb0f9be6c195facd8015e6884d4a6eff"],["/zh-cn/categories/maintaince/blog-setup/index.html","4d969d2cb49c683cef18eda5cedce760"],["/zh-cn/categories/maintaince/index.html","e2a6629ff1209d3204db8985dbe5c634"],["/zh-cn/categories/maintaince/macbook/index.html","c06cfef399d8df2510e15ae01c1e5fb2"],["/zh-cn/categories/maintaince/router-config/index.html","023db13b6be57f522d7afddbc4846f34"],["/zh-cn/categories/notes/index.html","2c971279421e2d974e4d7a137cb6176c"],["/zh-cn/categories/tricks/android/index.html","bc4eade308b8155ceaf4fb251ad4092d"],["/zh-cn/categories/tricks/index.html","429a89d78b9efd05ed22f69349940ae9"],["/zh-cn/categories/uncategorized/index.html","bd0b37cbb836e4b86246b37baf3a1bed"],["/zh-cn/categories/works/Front-End-Dev/index.html","d3c184ab5867aa034779c862a10fe92f"],["/zh-cn/categories/works/csharp-wpf/index.html","7d3b2f8c29f3373ffb6c2033c043bd05"],["/zh-cn/categories/works/index.html","01e88215f85b41eff7f2c1a3a8b19139"],["/zh-cn/index.html","a55aa298a772122b63ce961c5db2e7bc"],["/zh-cn/page/2/index.html","80c749fabcd2f5d3ba5571361cd9ef03"],["/zh-cn/page/3/index.html","2cd46a577113efbbe6444d4c90aeaad6"],["/zh-cn/page/4/index.html","fc1e1098e527d829f6509ca0a72b5409"],["/zh-cn/page/5/index.html","a1d955f3dfecbcbcd09d7681b31f4a07"]];
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
