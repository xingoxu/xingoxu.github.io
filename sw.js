/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","7d08675b6ed66f99e2a4b0a8eb0e6fbc"],["/2015/03/android-hostname-change/index.html","531dc3bd667128e9974ae6fd5aea38c1"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","7e82986ac2f9c0dab6c0129762ebaa7e"],["/2015/04/android-chrome-issues-with-webpage/index.html","6a5e3edc4d04e3991109d4c66dfd13bc"],["/2015/04/cpp-study-log/index.html","057ee6c2fb4e8608d3de4f876ea329d2"],["/2015/04/github-pages-ssl/index.html","1d3d5b28d33237c1716d2f96aef3fc67"],["/2015/04/hello-world/index.html","be7637a0f1cd718e43c74cb697707a7c"],["/2015/04/hexo-setup-log/index.html","ba8e6de5213a10d2fc751e6f0a531a15"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","21a46dd76ec701455ea36ff8ef55c879"],["/2015/05/cpp-inherit/index.html","3a3b71595c26925d362e000b3e5baef2"],["/2015/05/cpp-polymorphism/index.html","aeec86cfa34ef39a4069fd1bbfb703db"],["/2015/09/android-root-ota/index.html","091bf377cfff579816c413617cce6adc"],["/2015/09/java-learningNotes-1/index.html","4cfbb984aa1efa9d5f37f1582fbf5d1b"],["/2015/09/newblog-newlife-2015/index.html","d3d863fc4f1c4a294ac9ff3d9f1404d3"],["/2015/09/router-rebuild-2015/index.html","0733872cc7b024c18efb2b480c0114a6"],["/2015/12/2015-12-21/index.html","8c53cd0c86455d3dba7ebe9037d06574"],["/2015/12/PixInTouch/index.html","950cf4a9df6a38451c0b444770aa93ec"],["/2015/12/git-study-1/index.html","f886941d28f354028a3dc4343746ec9f"],["/2015/12/hexo-backup-and-migrate/index.html","094389faeb662d66e6ecc1e06934de92"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","4142de9e6b98021539b45ad19c9a75f4"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","82a6e845afc37b3dfa476a133a587cd9"],["/2015/12/router-reconfig-2015/index.html","958b95a8a6768efc757587a1c372f8fa"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","409b36cf3faf9df30a8ff8ff50609b0b"],["/2016/01/2016-stepping-further/index.html","6e4e2ee1989591a8b2d5bc5de52a90e8"],["/2016/01/Android-Study-1-22/index.html","1fe2d8c19abbe418684d52a7ee06305c"],["/2016/03/2016-03-20/index.html","4e63cacda87fcd1246f2c6183e3fa914"],["/2016/03/GSC-535/index.html","6a679e93ee8f31595a4b01a51f351796"],["/2016/03/gulpjs-1/index.html","25417e4706eeb28f34d6d9d4266e040e"],["/2016/03/hexo-theme-paper-white/index.html","e6c273b2f8daa4fa6cd5f6933a65e602"],["/2016/04/2016-04-19/index.html","fef50e96e43faac8cf559d4d47df80d3"],["/2016/06/2016-06-16/index.html","5c11968c7b556f7730d12ed078c03618"],["/2016/09/2016-09-18/index.html","5329acb2e528a9bca09ad3fc015077f8"],["/2016/10/2016-10-27/index.html","8f008c183f8d3eecede2112e55d7ef6d"],["/2016/12/config-switchresx-and-2khidpi/index.html","300616cc1954bcef19f8c34c2d13e18f"],["/2016/12/improve-duoshuo/index.html","4c027163fc61e682d199935108ede657"],["/2016/12/use-travis-ci-your-blog/index.html","b08a04ab215898c355ab250238ac37da"],["/2017/01/2017-iyahoi/index.html","afad1d11139b700a22f518f6d5454cb3"],["/2017/01/webpack-amd/index.html","b89388a7c1b675c587a305663a9b9699"],["/2017/04/kotobukiya-syaoran/index.html","ea19c04818616362d30396351fc7ca91"],["/2017/04/macbook-and-surface/index.html","f1bd3062ce1b15147af858aad6ddad7e"],["/2017/04/uc-hyakuya-yuichiro/index.html","55c27807f200a8580c13167c62f55bd5"],["/2017/06/noragami-seichijunrei/index.html","54bc3af895b899584b214f31b3848a97"],["/2017/08/cross-compile-55-libev/index.html","56657143b11ef28e07b82970a2929a1b"],["/2017/08/explore-service-worker-working-lifetime/index.html","79813b863a155e1141a49f72ba6c9c18"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","9f5311ce9e1535c2b8ec693cf69bfef1"],["/2017/09/record-user-login-status-methods/index.html","afc08b5344c705326b4093f5e769d254"],["/2017/10/vue-typescript-early/index.html","3c2957a5983344445020aae2d108dafc"],["/2018/04/2017-end/index.html","9fd42c4d5cae43961a88f43ccbe3ef3c"],["/2018/04/twitter-account-activity-api/index.html","31d7e07b773a01f32f6aaa33c94caf69"],["/2018/05/buddy-complex-seichijunrei/index.html","5f7c13e3478b815a5723036c61c6b350"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","5a7de811db321c7a8fd61240dc9619d0"],["/2019/05/2019-05-17-google-io-tech/index.html","bc197f082bc5608c02101e469207db86"],["/2020/06/cls/index.html","9219430f12715a5c253943fdf96458f4"],["/2020/06/try-serverless/index.html","db792ee5cacb4ff97d5fdfc5a85656a1"],["/2020/07/macos-node-require-path-case-insensitive/index.html","1229d59546e88a58c5ebc5b1cc76657a"],["/404.html","102a8d9074191160f37127f78950a69b"],["/about/index.html","027df7bd26d645ab4ca050c9962e91a8"],["/archives/2015/03/index.html","777bb36b541ca5d0db264a9c10ac1ba7"],["/archives/2015/04/index.html","cdb6bc3d7cd023d59a5b3e4cf0b1ea55"],["/archives/2015/05/index.html","fa905b077980cd8f07ca77bad7d1d36a"],["/archives/2015/09/index.html","17983a13884169798a666af5b884d0c5"],["/archives/2015/12/index.html","848c3e191780ca311c5901fae37cf328"],["/archives/2015/index.html","5a65ed27a2c205b676fef4e25a74963c"],["/archives/2015/page/2/index.html","c2985b7903c269fc688b2861145d284b"],["/archives/2015/page/3/index.html","facba98a1bbd2ecd318821bccd97ba85"],["/archives/2016/01/index.html","bfca1b6a756cc32a959a3df27acaac93"],["/archives/2016/03/index.html","4cb6f318aa179b2b633c29212efea1ea"],["/archives/2016/04/index.html","6f6bdaae6f9cab32cef7d910a6942942"],["/archives/2016/06/index.html","964e78e971d6510cfc6d75222ca0178d"],["/archives/2016/09/index.html","2ed3b522f345ba72ef1c19bdafee13f9"],["/archives/2016/10/index.html","bfe02c41a22fb3fff46faff3818477d7"],["/archives/2016/12/index.html","588a31ec6fa56466ca6498a35fd513ea"],["/archives/2016/index.html","69c300068654eff085fb6970d713ea35"],["/archives/2016/page/2/index.html","013aa368c75cc293e96a70c6423851d9"],["/archives/2017/01/index.html","89d52c2c868a0a167c0da2771491b75e"],["/archives/2017/04/index.html","c0768e88cecdda907b6d7ed9cc30ffe5"],["/archives/2017/06/index.html","8050a3a31a21001f6306ffd65d3337b2"],["/archives/2017/08/index.html","9b1924504f885980df195681e16c6e6f"],["/archives/2017/09/index.html","a122af72c12e4d163f18e39a94741bb6"],["/archives/2017/10/index.html","a35f11ad9bd6c9c1af04d1be52932911"],["/archives/2017/index.html","710a9e0e4b5641b0c4ea9b97ceea792b"],["/archives/2017/page/2/index.html","73c45af081ef387a12f45ef23e330054"],["/archives/2018/04/index.html","5ffbec0d3edd8ca1a74f29c3d443e7e8"],["/archives/2018/05/index.html","a7d80705f3115e844999967b4dec83f9"],["/archives/2018/index.html","e097094588adc66b4bbd1eb5696eaf14"],["/archives/2019/05/index.html","e9e4a1405763440c6cc33e6104dd4cd0"],["/archives/2019/index.html","19864b7f265a3c18c0ffdf0aeff1cdc3"],["/archives/2020/06/index.html","88deef0dc1f8db6bd930dbea7024c1fd"],["/archives/2020/07/index.html","9fa590cb2fbbedd370dacbcc35f8abf6"],["/archives/2020/index.html","3efd6c16a8de5e2904be1ea5fd8ee445"],["/archives/index.html","69bb26b3c1fdc761a63c59d641acb7c4"],["/archives/page/2/index.html","8c1e01be698cb08a994231db34f5ca35"],["/archives/page/3/index.html","1be9f21fb4829132f4d9c2d00cdc963b"],["/archives/page/4/index.html","11dc8f40e82dabef02cc539f6b89e90c"],["/archives/page/5/index.html","a29af4261ff8577ae3df7f9f42113591"],["/archives/page/6/index.html","9c08c8d063e01a0123e2df35a7d7588c"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","1699d402b396cec8ab72a7256201e369"],["/categories/ACG/Music/self-copy/index.html","16fae44ebfc957bfd85437cbac3b2d9c"],["/categories/ACG/Travel/index.html","6e364e4ba156d28afdfe678a63a6833f"],["/categories/ACG/figures/index.html","e1d64064844232d89930fba8634e3572"],["/categories/ACG/index.html","04d6932b3eefdcaeef8a5f80eab0c5ee"],["/categories/dev/Front-End-Dev/index.html","412dedd7541af545f0f0c6ecf052aa43"],["/categories/dev/Front-End-Dev/page/2/index.html","fa27977025b0e081d2d760bfe7ed032c"],["/categories/dev/HTML-CSS/index.html","9dc50a8dd601363fc6daa42a31e7b3ce"],["/categories/dev/android/index.html","b9712b5a9f9b6c9ec747b5a9466ce217"],["/categories/dev/cpp/index.html","de33718b6df7d2aaa9c1ee64212d78dd"],["/categories/dev/git/index.html","147a2a3f0b962e3101d61f8d467ba3b9"],["/categories/dev/index.html","b39ee9521c4bfbf25f4c7ca5e92f368c"],["/categories/dev/java/index.html","2b918e432bae95e78f542fb0f9d8c3d2"],["/categories/dev/page/2/index.html","34e3084852f1c93f672b0a130c6d70bb"],["/categories/dev/page/3/index.html","ed46a2b6ef7251df61aaa290d13a599f"],["/categories/maintaince/blog-setup/index.html","714dd0fc03c3eeccb92ac3475f284869"],["/categories/maintaince/index.html","e1381162a9abe6b9527d7934610a2c91"],["/categories/maintaince/macbook/index.html","be8d77b5b5da46714665f54f94691f5d"],["/categories/maintaince/router-config/index.html","a49c85ac622626c4d92a01f771c026b3"],["/categories/notes/index.html","6e0a1eb8bcb2ce486f02c703561011d2"],["/categories/tricks/android/index.html","441320088f80f35d76a302a358159862"],["/categories/tricks/index.html","4a505bd060135c72683f34ed51fd31f2"],["/categories/uncategorized/index.html","6bc5cd0f2d9ee28b4c3569f0761f7d82"],["/categories/works/Front-End-Dev/index.html","f22902da545f58b40a43aebb44b10c27"],["/categories/works/csharp-wpf/index.html","7fb50f2821ab8a7198496b7a843e8294"],["/categories/works/index.html","3d5bbd3fb2b9733c66555ca65563afec"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","c7a7472dcb52e4a38a1d77c5a2277aeb"],["/ja/2015/03/WNDR4300-setup-log/index.html","7b937971097f0652cf258e15dfb043dc"],["/ja/2015/03/android-hostname-change/index.html","4d183e4eca597a2b9dc2a1fb450ecdc1"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","3c528cc84a562cf3114652e01f0515ff"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","64731c262aeffe739762c15175369879"],["/ja/2015/04/cpp-study-log/index.html","590ca4565ab1e6d0211ceb07b6b0b0f8"],["/ja/2015/04/github-pages-ssl/index.html","60494010a4642b5b1a71d1727483e2c8"],["/ja/2015/04/hello-world/index.html","a582bc7d9b3bde112eaaa8a201f668db"],["/ja/2015/04/hexo-setup-log/index.html","96e120202c74ee9767f0f41484e116a6"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","36568b11cdf502840d0aef09bf8e1ac0"],["/ja/2015/05/cpp-inherit/index.html","7de1ea8d37e164ad0cc72111333ce61d"],["/ja/2015/05/cpp-polymorphism/index.html","2933465db6aeefbcf728a1eda561cf70"],["/ja/2015/09/android-root-ota/index.html","a7678c7299e155211af1403f0a38f710"],["/ja/2015/09/java-learningNotes-1/index.html","a9d870daf56b7f239d5ae043d64233e8"],["/ja/2015/09/newblog-newlife-2015/index.html","74fb6075a15ed313947e812c91066bd9"],["/ja/2015/09/router-rebuild-2015/index.html","ea15c1099a7bd1b2094a87d8d419b4fc"],["/ja/2015/12/2015-12-21/index.html","710e042b7168e5975e4830b22392fbd5"],["/ja/2015/12/PixInTouch/index.html","b57631897e6207fc28702913771c5733"],["/ja/2015/12/git-study-1/index.html","dab356e82b9730e607d1abe7e9aed392"],["/ja/2015/12/hexo-backup-and-migrate/index.html","6ec613efa7ae2059a91183859ae04327"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","b30e9f19f745d42ff27ef11d03eb408e"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","f339273aefc7840d4059457d6259d961"],["/ja/2015/12/router-reconfig-2015/index.html","93003cb428864e67273b3db6c7a464f1"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","c9f77986adcc7445f414539e82482367"],["/ja/2016/01/2016-stepping-further/index.html","00e1f5fb0e90b235f3a73a7e764b3694"],["/ja/2016/01/Android-Study-1-22/index.html","49d648fe525bb3c724a681a14c3fb7e4"],["/ja/2016/03/2016-03-20/index.html","68076def653725c4be10d20aba4d188c"],["/ja/2016/03/GSC-535/index.html","166dae79b9b418cbb3a6dd3788de592f"],["/ja/2016/03/gulpjs-1/index.html","ba2801272ce2575954b3ed0587c2f694"],["/ja/2016/03/hexo-theme-paper-white/index.html","491565574da1c054ff74ba22389ddfcb"],["/ja/2016/04/2016-04-19/index.html","6796dd9609a408d3f97a0ecc4f5c5e81"],["/ja/2016/06/2016-06-16/index.html","567d881eca9fa211cbda80970e6f0033"],["/ja/2016/09/2016-09-18/index.html","dc5b93594e36989932dd057fe4736fba"],["/ja/2016/10/2016-10-27/index.html","05d00b0117ddcb0873261d2a3307ecf4"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","88c9445314e9bf38e3044ff2b3b4ad2c"],["/ja/2016/12/improve-duoshuo/index.html","a0ce3f76a6856374b902ae8ee4f7f459"],["/ja/2016/12/use-travis-ci-your-blog/index.html","40ffca46733827f8f2faca17a1addbae"],["/ja/2017/01/2017-iyahoi/index.html","abae2dab5a55b050657d06c404102286"],["/ja/2017/01/webpack-amd/index.html","61f21ab420c7e01fcb0e2182932b010c"],["/ja/2017/04/kotobukiya-syaoran/index.html","8eeee63de20379cabfc78a046ce9d2a2"],["/ja/2017/04/macbook-and-surface/index.html","ebb22e110050b4a7414622925a7e4432"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","e4a9428c54dd9c17ffb8a16e103dcb7e"],["/ja/2017/06/noragami-seichijunrei/index.html","1904c27ce0a4d1382cbb497c099e2efd"],["/ja/2017/08/cross-compile-55-libev/index.html","1e2f0555104358deb780539f2e3cba29"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","7d7772d5293d264b1c001fef5eb773c0"],["/ja/2017/08/hello-jp-world/index.html","2a21a9702381142dd02342d045302103"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","e3cb7c5b6e1980b9bd6d8478e21d3e74"],["/ja/2017/09/record-user-login-status-methods/index.html","8708d81142a47f52a1d0c160876985bf"],["/ja/2017/10/vue-typescript-early/index.html","97c6bf33de39417f26cade61247b6d31"],["/ja/2018/04/2017-end/index.html","d0837d486ea5cc427fcb0ef72041c509"],["/ja/2018/04/twitter-account-activity-api/index.html","70cee3368828aff60f598f9c1f38b93c"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","f2106f60ea7de3eb4ba9038983347aef"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","73ce4250534a0872286e66bbb30e3e57"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","7446aef1076ef4ed5725e6d61696d283"],["/ja/2020/06/cls/index.html","a7e0ee7ea8a66b655049a5670f03b7da"],["/ja/2020/06/try-serverless/index.html","80b2516ae94f800c1a82a45a71bf5b19"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","8a52428f55b4b7b7af5f1728b6aba318"],["/ja/404.html","d496e223973d23b199d5ff26ca448f11"],["/ja/about/index.html","797c2df951f7bbe35746053281843b29"],["/ja/archives/2017/08/index.html","077f2b58337b8a8af3c683f806c7a8c0"],["/ja/archives/2017/09/index.html","3eabd5b1e34a7e4643f8f208d63ae3f3"],["/ja/archives/2017/10/index.html","e69298a335a585617ebb9275847c4e4a"],["/ja/archives/2017/index.html","dd4d5dc4a6fd48f77db161055c321a7f"],["/ja/archives/2018/04/index.html","7772ac5147c1628b28cf6102313e1ebb"],["/ja/archives/2018/05/index.html","064c7ad93d3e2399f2d0da8167d66e93"],["/ja/archives/2018/index.html","181b63cf3c82a1d3d1b29779bc62f806"],["/ja/archives/2019/05/index.html","600b3bafbb3266cd7e347a234d3b3f11"],["/ja/archives/2019/index.html","161fe6d2c6ae5ec5ec406978e762c3ff"],["/ja/archives/2020/06/index.html","d41b6f08b288c2b5218a8bbf9fd8fa01"],["/ja/archives/2020/07/index.html","0d4dfc1ad269fa7fdfec451a4eb392d3"],["/ja/archives/2020/index.html","deae23e4248c693d39ea302416ee8f8a"],["/ja/archives/index.html","af8adb0fae092fb7983c500cc701928f"],["/ja/categories/ACG/Travel/index.html","bddd1966d1082bf8ce869849f6b8c592"],["/ja/categories/ACG/index.html","808f1a7b309136dc51bd6ee232b2649e"],["/ja/categories/dev/Front-End-Dev/index.html","44b6fe34a7f9b7524411dd51d1078db8"],["/ja/categories/dev/index.html","189eb8f52fe97f6feea631c6a38ce038"],["/ja/categories/uncategorized/index.html","d466ed6f0ba538e4ea0c97f09032b654"],["/ja/index.html","63839680391de0a1ac50a2e20e7a8364"],["/ja/nihongo-test-page/index.html","3174c084bb0d03cd74f231b3652a159e"],["/ja/resume/en/index.html","e8c4011c57441ec2f37a1e1bbbdbd01f"],["/ja/resume/index.html","60857ae5b9570d62efbb0bed1bd36cc2"],["/ja/resume/ja/index.html","16c7923a70c993581d23ed7aba6ddf9f"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","8edeb4c9dd70b42bc34943ae1d739a91"],["/page/2/index.html","55d1caee1eb34fe0bf01076c96e4c54b"],["/page/3/index.html","a7f2c7b9d6ab6616aae9c6d4b3001696"],["/page/4/index.html","d81e9ccd4c27f9859d09c11b21efe628"],["/page/5/index.html","a1cc7bef964f5f0b5459b03fd8081638"],["/page/6/index.html","880d90db86c2c63dbea2d58ff3ba97e7"],["/page/7/index.html","4456e7ef482ef5b94f01859a8313b6d0"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","dbf0a4d72420b5daacffb80e9c7307ab"],["/resume/index.html","b527645ca0177307bc4f2b09ea7778fc"],["/resume/ja/index.html","a720adf0a341bfcfcb87a7716bab369d"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","34e08346d4f3e4c6829b325365c41e78"],["/zh-cn/archives/2015/03/index.html","6b5a838b7651e695912a6bd24a430079"],["/zh-cn/archives/2015/04/index.html","4d3beacff4cde24a59b85483811ee092"],["/zh-cn/archives/2015/05/index.html","71369c26dce22b9543e62755fff53dec"],["/zh-cn/archives/2015/09/index.html","ba92b532fc29bbe837c9b613f3ff6144"],["/zh-cn/archives/2015/12/index.html","843b17cf1fe4861f49b9137461c8acba"],["/zh-cn/archives/2015/index.html","cb320dbe6078e44f1d5f01bbe25e8534"],["/zh-cn/archives/2015/page/2/index.html","cbe322940dc7a16137e1f55df6142142"],["/zh-cn/archives/2015/page/3/index.html","45fa3d21e23de1e49ef85df87f7891a7"],["/zh-cn/archives/2016/01/index.html","466d94d3b63725c4851045155637e591"],["/zh-cn/archives/2016/03/index.html","bb81d48dc84b69bae2cdd5cd0933131e"],["/zh-cn/archives/2016/04/index.html","b5f293165b70d2e7675df5b92cda8939"],["/zh-cn/archives/2016/06/index.html","d3af08220d72ca4eaacc828d3d9119aa"],["/zh-cn/archives/2016/09/index.html","5cb9729f174e03cbcb6a0574b4785a5c"],["/zh-cn/archives/2016/10/index.html","79cc746cc162fb3c0084ca3afd2632bd"],["/zh-cn/archives/2016/12/index.html","f5fc9bf068dfc8684b3b282bfc72a339"],["/zh-cn/archives/2016/index.html","7c285dbc1ec352c47c873cf7bbe573e8"],["/zh-cn/archives/2016/page/2/index.html","b532ef4d7fb469fba2f57f9086d274f5"],["/zh-cn/archives/2017/01/index.html","98e6d78748f79c50684aad49e22a68c8"],["/zh-cn/archives/2017/04/index.html","57420f4d9128fca4332b23a9b59b99ce"],["/zh-cn/archives/2017/06/index.html","86d929869a95ec0e07daa30c2a51c997"],["/zh-cn/archives/2017/08/index.html","0c35f18416ff137e81d080e95d55be53"],["/zh-cn/archives/2017/09/index.html","4a677589717f522c8bb350a721dbfab2"],["/zh-cn/archives/2017/10/index.html","4be55eebfce2f0ff3539238a550e891d"],["/zh-cn/archives/2017/index.html","9a21da32128cb25a05a09fd374338066"],["/zh-cn/archives/2017/page/2/index.html","d93cf059be5c56942c725785ae9c1af3"],["/zh-cn/archives/2018/04/index.html","8e98c720325d81170549f14fa34a83ec"],["/zh-cn/archives/2018/05/index.html","79ea2ce739c3b24c678fa0bede82b4bf"],["/zh-cn/archives/2018/index.html","bf7d84ede99f7162b55d0f079b08b180"],["/zh-cn/archives/2019/05/index.html","2c6d25cde9fa9daceaf953208dc926d5"],["/zh-cn/archives/2019/index.html","8ca69943a6e80124d7f36d8683b17113"],["/zh-cn/archives/2020/06/index.html","10119a9687ce2c722f9db1fd4658daeb"],["/zh-cn/archives/2020/07/index.html","d4f358e55948c7a94ae71a2a3a2d80d1"],["/zh-cn/archives/2020/index.html","2e240d38fb983477db5838c170cbb344"],["/zh-cn/archives/index.html","30d056f3634267514e1391005c71940d"],["/zh-cn/archives/page/2/index.html","e5eac14727c89fb40d7734912ca17a48"],["/zh-cn/archives/page/3/index.html","42027b954a1d7095dcfa015033da6f82"],["/zh-cn/archives/page/4/index.html","6a99ac4e879d7774332bd0e5515da1d2"],["/zh-cn/archives/page/5/index.html","b4231686707d76e981463f208d6637f7"],["/zh-cn/archives/page/6/index.html","99bbad7c7c2605fedd2bf7c65842c33b"],["/zh-cn/categories/ACG/Music/index.html","98269112604a5b3df7a4ea3826505d94"],["/zh-cn/categories/ACG/Music/self-copy/index.html","88b23f7597fe1e90bcee1f89fee2c682"],["/zh-cn/categories/ACG/Travel/index.html","438a2a7cff3837bced258fce591bc16f"],["/zh-cn/categories/ACG/figures/index.html","11a550e96e93ac3ea2e7036b6e6270a7"],["/zh-cn/categories/ACG/index.html","7b9a35f88a71bef6969c0fac9c58a3fd"],["/zh-cn/categories/dev/Front-End-Dev/index.html","d71e6c161db3f941965cf8cfb0bde297"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","59bca3a03c55843e64647fca9b95ac91"],["/zh-cn/categories/dev/HTML-CSS/index.html","e3c5f81914340082c70c7f5d7ee5ecb0"],["/zh-cn/categories/dev/android/index.html","5a1d5a309b72ede0c14967697fb44266"],["/zh-cn/categories/dev/cpp/index.html","fa54533e6eef55bc1edaa130701bda4d"],["/zh-cn/categories/dev/git/index.html","aebbb19b648265455cfc51220f1b07aa"],["/zh-cn/categories/dev/index.html","9456ffc659588ca8ff8e34ac0e2f360b"],["/zh-cn/categories/dev/java/index.html","fae65b69990aacd7ac436641cc191f64"],["/zh-cn/categories/dev/page/2/index.html","f47e0b3a2ea97fe3d74669ea21af457d"],["/zh-cn/categories/dev/page/3/index.html","a68a2551fd03f59530ba580ca8c50273"],["/zh-cn/categories/maintaince/blog-setup/index.html","9b792103fc3a67509f18a436305c6d91"],["/zh-cn/categories/maintaince/index.html","524d9b3ef669e3de9b98b6d6d1800bbe"],["/zh-cn/categories/maintaince/macbook/index.html","f08ec06e45ec91edb7f3a03286bc990f"],["/zh-cn/categories/maintaince/router-config/index.html","87585cc9da127bf13a53df7da41d7aa5"],["/zh-cn/categories/notes/index.html","a92daea4ea24aa077491d884b637380a"],["/zh-cn/categories/tricks/android/index.html","0d7e3dcfc66954631f5938167d9f8cac"],["/zh-cn/categories/tricks/index.html","d1ab715c98f432d079595bd1be078551"],["/zh-cn/categories/uncategorized/index.html","a3b34eca0fcc19bb491c33467fcd07e1"],["/zh-cn/categories/works/Front-End-Dev/index.html","3a3a004c0632e34b9be4ad03344bfb1e"],["/zh-cn/categories/works/csharp-wpf/index.html","b7e6c9495e6564fd81282cc052d6ffd1"],["/zh-cn/categories/works/index.html","b2742d0bb917b1a9edef64008035a5b3"],["/zh-cn/index.html","e0f74cbdc89e561a2fe91476e0d0ac0c"],["/zh-cn/page/2/index.html","f6ff36f87fda05d750e1126379e221ff"],["/zh-cn/page/3/index.html","b8415b6d5a22a990eff2e024f35339d1"],["/zh-cn/page/4/index.html","119aa82d3ff030944ad30b684892ba93"],["/zh-cn/page/5/index.html","15c9f2869555a2c51c9fc474f4045309"],["/zh-cn/page/6/index.html","118c66c7e4c15cf045a587683abac5b1"]];
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
