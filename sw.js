/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","8f244af77263f8229fb2e85c36f4177f"],["/2015/03/android-hostname-change/index.html","6e17a70016a2eeb22f0e23cab4c45375"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","31eeda7a128df281da7b9dfa63621a40"],["/2015/04/android-chrome-issues-with-webpage/index.html","b10c23efc1b6ff4716c59491cd0fceef"],["/2015/04/cpp-study-log/index.html","72777a55d448f8237a6f1e315ea61400"],["/2015/04/github-pages-ssl/index.html","0ca96ee2029b88fa8fff3f3d7ec15669"],["/2015/04/hello-world/index.html","cb1e8e20222156f8378cce870a29b368"],["/2015/04/hexo-setup-log/index.html","b3e0e9256d0de973837f3cf4c0b70e12"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","58cb1bdd555b1b4bd5141623ecb92fef"],["/2015/05/cpp-inherit/index.html","d15ba8809a422b742c00d800cb3d446a"],["/2015/05/cpp-polymorphism/index.html","31583b83ffdf9e9915b9215020b0a41e"],["/2015/09/android-root-ota/index.html","af7edc26251949797c6110a43c863fca"],["/2015/09/java-learningNotes-1/index.html","8230514302d988728da6cb74d9aab0b6"],["/2015/09/newblog-newlife-2015/index.html","0fb134038f4fea5d01ff06c3eb7d545f"],["/2015/09/router-rebuild-2015/index.html","bd0becb80268471d15e22eb94f4de2a5"],["/2015/12/2015-12-21/index.html","40478db672c7fbfc4f321735217ae923"],["/2015/12/PixInTouch/index.html","0c15beccf438d0a56bda65be5c0a31d4"],["/2015/12/git-study-1/index.html","805618820e131a7e4f2f2688c860b193"],["/2015/12/hexo-backup-and-migrate/index.html","eba226b650c9aec5495e5a876033b1cd"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","f0e38def16d556bccd7a74303c9a80a1"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","59b3a545f25d0ed3405e9be33491d658"],["/2015/12/router-reconfig-2015/index.html","4343db398b49b052c14ef00a9c6871b9"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","1521d35821da5b290ddd4d596c7ce0f6"],["/2016/01/2016-stepping-further/index.html","8dba478e2a1538c03ac491c1285489ff"],["/2016/01/Android-Study-1-22/index.html","0ff2e9703cc70b80970b684c1f8a622a"],["/2016/03/2016-03-20/index.html","16aa9ac506ff545d7815780c78af489b"],["/2016/03/GSC-535/index.html","6ab125201c4e778a7d448847680bf9b3"],["/2016/03/gulpjs-1/index.html","5e52ebeda36fd200602e2ab6b882a4aa"],["/2016/03/hexo-theme-paper-white/index.html","ea980ba4f7ef5bc7f9c79cbd7acf446c"],["/2016/04/2016-04-19/index.html","b1ad25b6e0b8f2f9e2ff1f7440092619"],["/2016/06/2016-06-16/index.html","f026226c623accbd76aaf285242562d6"],["/2016/09/2016-09-18/index.html","a6a5a98dd1c7d03dd0bffafdddb9bc53"],["/2016/10/2016-10-27/index.html","f756e0aaffcb7246557f40e6502aa730"],["/2016/12/config-switchresx-and-2khidpi/index.html","7684ac0bd2d880f42187f239994d7261"],["/2016/12/improve-duoshuo/index.html","5d46e5bd8ec06f51178846ac67cc7588"],["/2016/12/use-travis-ci-your-blog/index.html","4471a164814011f8008e89b72861650c"],["/2017/01/2017-iyahoi/index.html","ba974a757da65cbd819a2365f177278f"],["/2017/01/webpack-amd/index.html","9def31d1e95367e5043daedb28c5fd21"],["/2017/04/kotobukiya-syaoran/index.html","c103b3e4dbb5ba4bbfc804af094fbc48"],["/2017/04/macbook-and-surface/index.html","50e6b8c160257aa9a9afff385752ee02"],["/2017/04/uc-hyakuya-yuichiro/index.html","88339aa322f6a9757f2063606895a560"],["/2017/06/noragami-seichijunrei/index.html","a282ab7e9bdda333e7a1ca2ac33329d2"],["/2017/08/cross-compile-55-libev/index.html","8063a137282fdd76941967ae7aa600de"],["/2017/08/explore-service-worker-working-lifetime/index.html","a25d84df7015a5a1257c059c5f8ae09e"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","f94bd7195fda7d3a487664764326aedd"],["/2017/09/record-user-login-status-methods/index.html","85331fae67713a0c10b6210e13a1b743"],["/2017/10/vue-typescript-early/index.html","a4a387565e7194e2bec6cb555cd17fc0"],["/2018/04/2017-end/index.html","51561452f91af0f93fcc2fbd82948e2c"],["/2018/04/twitter-account-activity-api/index.html","d40208b3b3f54d6dc1df384438efb716"],["/2018/05/buddy-complex-seichijunrei/index.html","914d3948503f0643abcecb975bdbecc1"],["/404.html","4f4589f9d5749369be5e0cb290639c95"],["/about/index.html","6afea93790931b58d15fe21f0c221c0f"],["/archives/2015/03/index.html","ef595fa5ec12af017a9b3a473de1fc5f"],["/archives/2015/04/index.html","cd540880c543182226bd2791f0e2b0ed"],["/archives/2015/05/index.html","d7281ed1f455c32be2bcbcc582f346d6"],["/archives/2015/09/index.html","ab0ce41374e2008a81c5787142b446ee"],["/archives/2015/12/index.html","7153234fa5ed8eaef96d89ac839e1509"],["/archives/2015/index.html","c6c6e57bff0d25e7f77fe1c559f3a2f5"],["/archives/2015/page/2/index.html","41b375f28d5073c28e50faa855a3d357"],["/archives/2015/page/3/index.html","01f9edcffba4f5ef6a8c452563135a5d"],["/archives/2016/01/index.html","b00d24618fea9bae48d1155352dc6b88"],["/archives/2016/03/index.html","9b013c0412ea76f9ddf46df9c07483b8"],["/archives/2016/04/index.html","2e00232fbf68533acf2fb85489f52b3a"],["/archives/2016/06/index.html","d24cbddbedc53f43c741266b747bc80b"],["/archives/2016/09/index.html","2d0efc04c88827d2d74281fbbbfc98aa"],["/archives/2016/10/index.html","d3c0698d08eba4d3c19263eb7541bc57"],["/archives/2016/12/index.html","1b4ad634d3a1fb6680d891c3d75d80ab"],["/archives/2016/index.html","8ea871881f584c1b1cd4098c60b1ec4f"],["/archives/2016/page/2/index.html","99b5ea9572db3b75a13410071c9baf34"],["/archives/2017/01/index.html","d970563d1bfa3c380a2e06ec6dee68fb"],["/archives/2017/04/index.html","5f22e0833807336a4eb7bb41ccf19c46"],["/archives/2017/06/index.html","96ac960ac8a569e7ce52a33fcf347ba9"],["/archives/2017/08/index.html","499db68ad9884c819b4f848d401a24f6"],["/archives/2017/09/index.html","faec1f96d681c82702b77db6b05d26bb"],["/archives/2017/10/index.html","66ee830b8e9e974f6bb9b950f81ba574"],["/archives/2017/index.html","f42cdb43c36f50d601c44c9941433024"],["/archives/2017/page/2/index.html","fe8ad76554b5d13f93bd7eb6d9d5ac6f"],["/archives/2018/04/index.html","291197ec9b1702c17c47f71069e9caed"],["/archives/2018/05/index.html","c1a436e7354cc93c43464e767c2d7e24"],["/archives/2018/index.html","6cfa257660aff326837e22f33b4e4c31"],["/archives/index.html","357f99a02be5dcc7fe8f7b3d448a368f"],["/archives/page/2/index.html","ddb97b5c89d7282bf466b596130420f1"],["/archives/page/3/index.html","348395b4cc0df716a7f0e6690b9b5fd3"],["/archives/page/4/index.html","8b0a31b25e20b1a82bf77b4a9e9434d8"],["/archives/page/5/index.html","ddc1c280a4eb44c477286832066f65fa"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","223bd97e0fbed137e9ce0fd56d6164ec"],["/categories/ACG/Music/self-copy/index.html","72acca709de12f01f9d4a2a2c33090e5"],["/categories/ACG/Travel/index.html","f3b7e0689d620d56ac77a7e9c56df6c2"],["/categories/ACG/figures/index.html","1e7a44277a1eeddb7467b7259684e167"],["/categories/ACG/index.html","ffaf90bd1179a7fa9442f2f9374ea13c"],["/categories/dev/Front-End-Dev/index.html","58e1ea7c9f5f790ab7db6317de930f1f"],["/categories/dev/HTML-CSS/index.html","9c7924d392b0773af6623e71a043667e"],["/categories/dev/android/index.html","597fd5f39f8cf62211087d22376c7bf3"],["/categories/dev/cpp/index.html","5c35be76ec7a70f6fbfcf4abc39f704d"],["/categories/dev/git/index.html","b4bda432a35c6f97d05e71af8a578b1e"],["/categories/dev/index.html","3b86271b3cb2ea7e55b276ebe0c152e3"],["/categories/dev/java/index.html","78489c1380fc61a0786a12ae9ce9bf30"],["/categories/dev/page/2/index.html","f92c203e8215c33c7bcd43862e212ad3"],["/categories/maintaince/blog-setup/index.html","2f9c5d828928693fb732a6ef68d2d932"],["/categories/maintaince/index.html","3ce173a08468995061432b22698afaef"],["/categories/maintaince/macbook/index.html","3cfdff3c82a9ee1e091c33a5be9ef0d7"],["/categories/maintaince/router-config/index.html","564a1a0314d1b2e5a5d6ea06dee58a1d"],["/categories/notes/index.html","968fb88735d2cbfeabf840eaea78c98c"],["/categories/tricks/android/index.html","0a386ef276cc56cb60570e36e73c0e5d"],["/categories/tricks/index.html","17a8707a913581cf297bcbe6010fd7f4"],["/categories/uncategorized/index.html","7bd6c0cc864812130e74b0c994873437"],["/categories/works/Front-End-Dev/index.html","7be797fcfe975c68be06dcf682612274"],["/categories/works/csharp-wpf/index.html","fd1eafe7bc91d6682120076db72495c5"],["/categories/works/index.html","cee2af2dfcb3d58e05625304ed54e741"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","48701c9a10f54f34c8abdd4705eea051"],["/ja/2015/03/WNDR4300-setup-log/index.html","159bcfe6e9555124d53fa8fa093c0928"],["/ja/2015/03/android-hostname-change/index.html","43d5f8136a240d72d59f1dd12c846d6c"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","4750dd5c58fdf8e7fbb49ace59039602"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","4acb64622c743434af8403dbac88a1d8"],["/ja/2015/04/cpp-study-log/index.html","5ddbf1e0ac07b4d26b4db3e3fd5d174a"],["/ja/2015/04/github-pages-ssl/index.html","c6b2691cb27c10b0a8e68c0105ee0396"],["/ja/2015/04/hello-world/index.html","a97b34634a00df514870fb1d918bafb0"],["/ja/2015/04/hexo-setup-log/index.html","49508f555115b3bbfb538d2aeaf2b414"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","52563eaa0111fbf6357785e44ea75393"],["/ja/2015/05/cpp-inherit/index.html","ecdb79b1cafd0a74e0595a8e15aaf5b1"],["/ja/2015/05/cpp-polymorphism/index.html","e7ed11505cf3ec8c102a1e2d0145e2bc"],["/ja/2015/09/android-root-ota/index.html","dea08388d8550ba53d16931f671f2f95"],["/ja/2015/09/java-learningNotes-1/index.html","6b47054ad73266f7118d7d2ea0f708ad"],["/ja/2015/09/newblog-newlife-2015/index.html","17e70d7584229385073aee3f09a5f45a"],["/ja/2015/09/router-rebuild-2015/index.html","ea1baa9723a2ce2f55d5d618e6c886c9"],["/ja/2015/12/2015-12-21/index.html","84a40da0faaf824f7245cfc98b6fdf68"],["/ja/2015/12/PixInTouch/index.html","b6693c42eaf24a690476defbb6163907"],["/ja/2015/12/git-study-1/index.html","306b4731d895b357d10fc381c059f0b4"],["/ja/2015/12/hexo-backup-and-migrate/index.html","a63b474d2430334f390cb93074186caa"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","88490d532b5d4b14405dba0ca48d8c6d"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","b718c204695d84a08aee153cbe37742b"],["/ja/2015/12/router-reconfig-2015/index.html","5ef23a5dfe524c94df2fd03a7c66e20b"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","d3f84ce8ebd390df25b6c9b8d37e46eb"],["/ja/2016/01/2016-stepping-further/index.html","44caf278fd5a6d6fe9f067ac48c2feff"],["/ja/2016/01/Android-Study-1-22/index.html","71076bf6d848f57eee746dd699088f93"],["/ja/2016/03/2016-03-20/index.html","6b3376d029d690a0dd4328c5dffe7e3a"],["/ja/2016/03/GSC-535/index.html","2405be5a5bfd131b8233b1356082ea40"],["/ja/2016/03/gulpjs-1/index.html","57a8ec0e55c85265516575b5e8a80ef8"],["/ja/2016/03/hexo-theme-paper-white/index.html","74b273a0822e5b85e177c42570d8396f"],["/ja/2016/04/2016-04-19/index.html","89968f9a1b4b41b142f06abc1cc689fa"],["/ja/2016/06/2016-06-16/index.html","4e3901bf50672c8a866b3218ac14a11c"],["/ja/2016/09/2016-09-18/index.html","03369e3b8f8379457c4fea5a37823cb0"],["/ja/2016/10/2016-10-27/index.html","b4442df8fb0f7f5ad0bc59cdac624e0c"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","f375c7dca08e75f5d02ece945e165926"],["/ja/2016/12/improve-duoshuo/index.html","1dc81aebb01a9ae491a72a76f0bd4e90"],["/ja/2016/12/use-travis-ci-your-blog/index.html","b4bdb6012fb38f8ba59b804f5d67c94c"],["/ja/2017/01/2017-iyahoi/index.html","bfd758624907e0dcc263d93360d817e8"],["/ja/2017/01/webpack-amd/index.html","5c2fb566bed68a0dab3227582107ac2e"],["/ja/2017/04/kotobukiya-syaoran/index.html","5c9cccead4265d04521a9e86cf99e25b"],["/ja/2017/04/macbook-and-surface/index.html","333353194b6b9aee6e33f0e3d507eb88"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","66f802e1c7636c823e03ad98887678ef"],["/ja/2017/06/noragami-seichijunrei/index.html","63a9ba83943abbf1f417d5c58b74ebe7"],["/ja/2017/08/cross-compile-55-libev/index.html","7766676f756e229a25bf73f3ffc276f7"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","1e31d3c78be3fc4e1b1d1372216f0d40"],["/ja/2017/08/hello-jp-world/index.html","ba945bfbc2d09861125b6facd1d4a845"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","b911d817b6bcd81ec25f3c294360b21e"],["/ja/2017/09/record-user-login-status-methods/index.html","c0354e891ba4d121613c313349ec89f2"],["/ja/2017/10/vue-typescript-early/index.html","f45f2f59237e6f120b18b3f9930d10ab"],["/ja/2018/04/2017-end/index.html","3e151cfbe224f2d843de07b197f8f54e"],["/ja/2018/04/twitter-account-activity-api/index.html","e24ab285f7769a43365487a951c60241"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","8c1818dc45ce0d73b983975e7bbe4c29"],["/ja/404.html","e9d958de452b6bed2b8174fe020dd415"],["/ja/about/index.html","c9735bfc883825b03b0ce0674d46bd87"],["/ja/archives/2017/08/index.html","47cc31d1aee933ae6e82a39a1f7b0a1e"],["/ja/archives/2017/09/index.html","d3a33e09097869c848ba445c50cf0384"],["/ja/archives/2017/10/index.html","de5d492a037e263fe5bae569cd022243"],["/ja/archives/2017/index.html","b7042030eeba1e24fb56e0cbd46f80c8"],["/ja/archives/2018/04/index.html","73fd7c5e65864083c98645daef828109"],["/ja/archives/2018/05/index.html","43b7cf6d55b8fbb9ea9de262ec97961f"],["/ja/archives/2018/index.html","426fa9cc5cfef0ee86ca65f00e5a1b42"],["/ja/archives/index.html","0c664a5171c43438a1d753745cdf0ef2"],["/ja/categories/ACG/Travel/index.html","7ab551cdc89c147d67f378a714b8ffa8"],["/ja/categories/ACG/index.html","fa49de2d61e99cca58e342a6e6defa23"],["/ja/categories/dev/Front-End-Dev/index.html","fe5cefcc75b306d65fe325dff0d5cfb2"],["/ja/categories/dev/index.html","f589bd2dff86a9afbeb9affa83be7661"],["/ja/categories/uncategorized/index.html","082c6b494b358edfb53fac3540766b1d"],["/ja/index.html","8a7d4d62d4d28b93b29f86bce64ca45e"],["/ja/nihongo-test-page/index.html","05208ed9c3fd42a23ed81af7c005aad7"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","4dce166afca917c81e3798d8ae15904d"],["/page/2/index.html","34159606101eb52778693265d6b7d019"],["/page/3/index.html","11ebf0a2d8512eb7ddd9c9cd21b2af7e"],["/page/4/index.html","36c3e2ed4a5dcd16c59a68ca13d0ab78"],["/page/5/index.html","51e2d892332b8a9dfccf002b5ced8928"],["/page/6/index.html","832a59b2d9c94d0a7c89906147f9d4e6"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","5f93c7364adfad9b85313d12c2b70b9d"],["/zh-cn/archives/2015/03/index.html","851498944226606c18b8f50de0e30115"],["/zh-cn/archives/2015/04/index.html","293f7aa05262c36b1d7c1e82ab0be970"],["/zh-cn/archives/2015/05/index.html","0522937247b62738cf26d24cccefa7ef"],["/zh-cn/archives/2015/09/index.html","b5cf487628f8f2c3018d5829cc60cb31"],["/zh-cn/archives/2015/12/index.html","a7b63b21eecbdbe242425edfc523fedf"],["/zh-cn/archives/2015/index.html","9a685527c395e9b67ae5c1e3ef4d5491"],["/zh-cn/archives/2015/page/2/index.html","dc58cdf7beadc90990eb64398e82321c"],["/zh-cn/archives/2015/page/3/index.html","edb599de399f7f0e9f54760472c2439a"],["/zh-cn/archives/2016/01/index.html","f6240e8364c77843974bdfb0b8a2b484"],["/zh-cn/archives/2016/03/index.html","2bbc97142a6d7dfe92f90c125eaf92c0"],["/zh-cn/archives/2016/04/index.html","63107b50d9705f9b6640ec0edae238da"],["/zh-cn/archives/2016/06/index.html","a546232e9db9f14f5aaa43cef2a56f53"],["/zh-cn/archives/2016/09/index.html","d5c7ef542c42eb02410aa75b0b7348c9"],["/zh-cn/archives/2016/10/index.html","4f7490823e637b14ec119836df91c069"],["/zh-cn/archives/2016/12/index.html","bf2c892a75b3b839c84721c53ffa3153"],["/zh-cn/archives/2016/index.html","7b7ca8ccbbaef331092c95dc1fde574a"],["/zh-cn/archives/2016/page/2/index.html","007086bdb45658e371a6670bc51ca722"],["/zh-cn/archives/2017/01/index.html","144fd5a378d5a4a4ec1f4b6553e4baf3"],["/zh-cn/archives/2017/04/index.html","84d85cecbd086f18611592c8eec6332a"],["/zh-cn/archives/2017/06/index.html","f2ff1c7d33a6a2968c63538a5d27c556"],["/zh-cn/archives/2017/08/index.html","f0628b83e7094f3e5a21c215daac6682"],["/zh-cn/archives/2017/09/index.html","0f6dd53ed8b43e9b50f1f1986ab32246"],["/zh-cn/archives/2017/10/index.html","cdf9b63a668a1347f76f7895bc939739"],["/zh-cn/archives/2017/index.html","5beac393899b87e991f0539796d9d20b"],["/zh-cn/archives/2017/page/2/index.html","4671a4808716d06f17df09fa08a749a5"],["/zh-cn/archives/2018/04/index.html","17981de875cda8d297121a516eae6af3"],["/zh-cn/archives/2018/05/index.html","2ca9ddbcd90cae5faf6d12a42737b347"],["/zh-cn/archives/2018/index.html","0e6f940c124627b4be0c58a383b762cb"],["/zh-cn/archives/index.html","5217c65e0cde314bce20845476d79121"],["/zh-cn/archives/page/2/index.html","51191aa9fe368fa747a4e11b4539caa3"],["/zh-cn/archives/page/3/index.html","de020a2e5917b9c197f63ae7851e8867"],["/zh-cn/archives/page/4/index.html","41c8a162ff0fc8b29bade7b69db8edb9"],["/zh-cn/archives/page/5/index.html","950a5567e156e8adb0ffb567cefed9db"],["/zh-cn/categories/ACG/Music/index.html","2989baffddc4cff7a1e6b98c1d8eebda"],["/zh-cn/categories/ACG/Music/self-copy/index.html","cd5f5cab87b6d698750f8be74ad0b723"],["/zh-cn/categories/ACG/Travel/index.html","7821300d00e4d1a4b8aa75377ab95b55"],["/zh-cn/categories/ACG/figures/index.html","38a654770ded80c36af2ac7d2ff09eaf"],["/zh-cn/categories/ACG/index.html","64168f0076cf5faa7da5843f911c3d7f"],["/zh-cn/categories/dev/Front-End-Dev/index.html","e74908528cc2393d9f24b59dc9b65f41"],["/zh-cn/categories/dev/HTML-CSS/index.html","208ba9a0a65b9480e0b04875fe1c69f9"],["/zh-cn/categories/dev/android/index.html","09c1f2bdbba033ecffe2d4bb440c60a8"],["/zh-cn/categories/dev/cpp/index.html","1c4f225228036c97f71c7384cccd46ba"],["/zh-cn/categories/dev/git/index.html","7bd5b287e35ee10ab166b0c4fd0213e7"],["/zh-cn/categories/dev/index.html","8d5ec54c750327a18bea8f87c2ca3642"],["/zh-cn/categories/dev/java/index.html","525bfe8bc3aa421faeef3adc6a8c95c6"],["/zh-cn/categories/dev/page/2/index.html","484ac6cbf788c92147d1b2ac67df20f0"],["/zh-cn/categories/maintaince/blog-setup/index.html","fdedeb342d4ad16c62d3b5645299482f"],["/zh-cn/categories/maintaince/index.html","e95e2c3a59af2d23d33a2115d4852f33"],["/zh-cn/categories/maintaince/macbook/index.html","6073028077bd805d722e027f5e118e96"],["/zh-cn/categories/maintaince/router-config/index.html","50e5ed5558c496249a05e4afadecc23e"],["/zh-cn/categories/notes/index.html","1e01a2dd59a54f5f6cdd7ba067e6b92b"],["/zh-cn/categories/tricks/android/index.html","e28b68c4ccfe86b5aa03977716a09bb6"],["/zh-cn/categories/tricks/index.html","242840ad1b887812ec6ea97f60e3627d"],["/zh-cn/categories/uncategorized/index.html","3ad7549bdfb59d59ec4e465f3e6d580b"],["/zh-cn/categories/works/Front-End-Dev/index.html","05f15c4127a71a35a2586932a9fd53a7"],["/zh-cn/categories/works/csharp-wpf/index.html","eb5c4c631e7931cdd089f1a10be5b793"],["/zh-cn/categories/works/index.html","0807911ed6f03ee56b7e5ce89b6e3a4b"],["/zh-cn/index.html","75f6c22ea39f1cd8fe76bd3582800fb9"],["/zh-cn/page/2/index.html","b71a7d58d97f9b72323cf3355b028955"],["/zh-cn/page/3/index.html","5219d14d1b972dae604d8149cef72375"],["/zh-cn/page/4/index.html","a992af77c2930f62c073930fe91758e0"],["/zh-cn/page/5/index.html","d8f8a87b560c0a38bf0c808d1769b742"]];
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
