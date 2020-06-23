/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","e1c9e3879df8ac61b69d8bfab1c6813d"],["/2015/03/android-hostname-change/index.html","f8c3fdeb322492c6bb28f550e1fda4b6"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","d17069ed31c44bdc448c80271707d449"],["/2015/04/android-chrome-issues-with-webpage/index.html","c9be79a6ce3577616c4f644c8e983e85"],["/2015/04/cpp-study-log/index.html","ac33e05350619ac1faf05a1a8d4d0c7f"],["/2015/04/github-pages-ssl/index.html","1edef02bc8a0e3a8e0f0a90dd20a7618"],["/2015/04/hello-world/index.html","dcf7cc82d18659fdba427a7e6948ea43"],["/2015/04/hexo-setup-log/index.html","fb2ddcc73cc76bc3d3f914e638c6d456"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","88a0632b3deab0b104ed599e9be519df"],["/2015/05/cpp-inherit/index.html","e5cde62af764510386f1212dfd935d57"],["/2015/05/cpp-polymorphism/index.html","7b338021dba79925e7a7b8ee8f34ac8b"],["/2015/09/android-root-ota/index.html","ce7409c652bf4a948f25a358fbcb2ee1"],["/2015/09/java-learningNotes-1/index.html","54a32e9d3a6548d300621feb48f6e3d0"],["/2015/09/newblog-newlife-2015/index.html","18272a1f85e3ac94be85b9b099369afc"],["/2015/09/router-rebuild-2015/index.html","f15b9c9ebc46c8976d95d0409f25d7cb"],["/2015/12/2015-12-21/index.html","4d8dcd574d2b0fdda9fa3d9918258bcd"],["/2015/12/PixInTouch/index.html","be0919bf7225b67fa72cd51dade6a261"],["/2015/12/git-study-1/index.html","38abdad5bbf6abae7765ef2a0b0eaa5e"],["/2015/12/hexo-backup-and-migrate/index.html","67565629b9bd91ff0884323943465884"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","d0fb22c6c2bf95b66c21f0f72e530f57"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","5edae0c26353f3fbfc4e8d0355595eb3"],["/2015/12/router-reconfig-2015/index.html","07d01b23d808a009d80ca0f320bdcd39"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","136028bf66f01c5482578e36999e09c4"],["/2016/01/2016-stepping-further/index.html","4accb81f10e0603b328d5dc31a3c1162"],["/2016/01/Android-Study-1-22/index.html","661611b68652e046fdbb3ed61ac149b5"],["/2016/03/2016-03-20/index.html","6b5a37e023130d770b5abcc50725db14"],["/2016/03/GSC-535/index.html","22a917d99b64d77177ddfccf18b3ef51"],["/2016/03/gulpjs-1/index.html","e7704d8d709172f581c42af40bf0fba0"],["/2016/03/hexo-theme-paper-white/index.html","e22b5a9e34b751cbe616bff16706f70d"],["/2016/04/2016-04-19/index.html","5b7605a48e1a689c34a4e88c5078ec19"],["/2016/06/2016-06-16/index.html","35f3eea13a7c5c34d9816a802f044e80"],["/2016/09/2016-09-18/index.html","1c04db8ea7f8ef7ef0f5566afd871bc8"],["/2016/10/2016-10-27/index.html","37553b67c69f42f8c51c65b21c24a9ab"],["/2016/12/config-switchresx-and-2khidpi/index.html","ac6fd3b4603263bd55ff687e12fe4695"],["/2016/12/improve-duoshuo/index.html","ec555b4e35e045fb5c5f0b117fb515ea"],["/2016/12/use-travis-ci-your-blog/index.html","adb2fe0a027086b9cd08e7bfedefd915"],["/2017/01/2017-iyahoi/index.html","ed484d1dfc61d865c233cd4bdbdf3e67"],["/2017/01/webpack-amd/index.html","a3c089be0db3090df1fc39c0eb19a611"],["/2017/04/kotobukiya-syaoran/index.html","393ef3defff71c8accfc3e1d5135e6be"],["/2017/04/macbook-and-surface/index.html","ca63d0bbd7fbe328a5d4fa86e07416f4"],["/2017/04/uc-hyakuya-yuichiro/index.html","6d6deb9625387d9831fb429501d859f1"],["/2017/06/noragami-seichijunrei/index.html","b64af77f88decd23d250cfde53ab96f9"],["/2017/08/cross-compile-55-libev/index.html","854effa5eee54613336374cc7215da07"],["/2017/08/explore-service-worker-working-lifetime/index.html","2330db8d83e240143aa54245e1c47d2b"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","8729aec509bc54b34bccb5d2d88cf57d"],["/2017/09/record-user-login-status-methods/index.html","59a6f21988a34fb928ebea39e1c5c555"],["/2017/10/vue-typescript-early/index.html","e641091fc771c960be10625ed056c86b"],["/2018/04/2017-end/index.html","646ca2c098e002f29d16890536478b33"],["/2018/04/twitter-account-activity-api/index.html","2ef79579eb882737a36662e1029d9b5f"],["/2018/05/buddy-complex-seichijunrei/index.html","ce699819981dcfac06e53651cd38e44f"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","1d73d4ed21784cd4d6bb36b1780f733d"],["/2019/05/2019-05-17-google-io-tech/index.html","9e0a3bfd05491c04b91c2810edcccd15"],["/2020/06/try-serverless/index.html","8be90c8c2c7aaae725363d2611972d41"],["/404.html","e18dbdd47ba0d93832ea704038046176"],["/about/index.html","dcb68a50c3d4360e21cf7bb16e16a22c"],["/archives/2015/03/index.html","a2a0f49d7b9924e7b15f9cee6299d175"],["/archives/2015/04/index.html","db110e3f863f1e2fb61b7d80de9d464f"],["/archives/2015/05/index.html","39bbdea5201758940e344ef77d8c509b"],["/archives/2015/09/index.html","a9ff03c980ddf15ee198a0f4b305dae3"],["/archives/2015/12/index.html","d6505ccca73e78a4362a76196e022ab2"],["/archives/2015/index.html","beaeb216617441ffc2439bdbeb064027"],["/archives/2015/page/2/index.html","720042d80c45b3778eb39f3aaabc5d26"],["/archives/2015/page/3/index.html","b0a893b1a8816c5f9f3516d68ee45bea"],["/archives/2016/01/index.html","d61fbd06c0842330750e6b51c92c3c28"],["/archives/2016/03/index.html","f4825caf0a4556d1adbf87f4213c7c89"],["/archives/2016/04/index.html","abd6b4011440b8836013fcdabccb1473"],["/archives/2016/06/index.html","4088a54a2640108535170ff1a47a6b46"],["/archives/2016/09/index.html","fb30cabc573d2ab4f3c9bee425954af9"],["/archives/2016/10/index.html","77f66a079e0921fee90e80f8d45bc591"],["/archives/2016/12/index.html","65ab6b08b9a346efacd04272e85b3a44"],["/archives/2016/index.html","fbef3d8856ff7a34d6b53c07b9e52e57"],["/archives/2016/page/2/index.html","e7c30b3084d87f70afd4ad411844721c"],["/archives/2017/01/index.html","0279a2a43c3162417ba19ebce612629f"],["/archives/2017/04/index.html","f5c0ca652d6358c277229734c1703206"],["/archives/2017/06/index.html","c9dd876d466556e3b3a9088c4fe33d0e"],["/archives/2017/08/index.html","73832b6a462ca9473f6831592c599f82"],["/archives/2017/09/index.html","654401a10c41847b616d7ea9d98bf64c"],["/archives/2017/10/index.html","f0467bccda48c16abe88d76a9df6bdcb"],["/archives/2017/index.html","aa79baa4b603242119ddcc3ba9252428"],["/archives/2017/page/2/index.html","cb17f0c8ec83f3197614e0089cf6e080"],["/archives/2018/04/index.html","6390d63a7861e24ab069bb1ba4c5277a"],["/archives/2018/05/index.html","a94bf96b366d19f73e4ce12b7c0c90a0"],["/archives/2018/index.html","0160964702fd6c988b00420f39711fff"],["/archives/2019/05/index.html","03aaf34528e8619591635688b0aba2ac"],["/archives/2019/index.html","59e437cf50fd64dd9f930f64697ac96a"],["/archives/2020/06/index.html","d8f5b65f75932e07f08399bafbffb085"],["/archives/2020/index.html","e468d3910ef893d0b5625c8201cd199b"],["/archives/index.html","a7e90af3ca45f5b6405f665832a1a231"],["/archives/page/2/index.html","bf8b419dd13314d800927f0ec24bdadb"],["/archives/page/3/index.html","ee7c7bdeb4c76c2a3f403cd921bc7bc6"],["/archives/page/4/index.html","2e07de8fd571a26928b5a6378742c490"],["/archives/page/5/index.html","adf97fd09abfdcbd856cffde2c245046"],["/archives/page/6/index.html","291850c27c515da9b062e8a1785697e1"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","ed2625c5b8707f29ea46564514127771"],["/categories/ACG/Music/self-copy/index.html","c6301f04f202c123f2d29488a02115e1"],["/categories/ACG/Travel/index.html","8b90a0ef840fff4f7cc4b6b42356364b"],["/categories/ACG/figures/index.html","9dc049967df642c1d9b3fa13d726dca6"],["/categories/ACG/index.html","840fe8cc458cedde99bd688a5b656af5"],["/categories/dev/Front-End-Dev/index.html","c729c23771a96fc8d6751777e4ec4499"],["/categories/dev/HTML-CSS/index.html","b6f691f6a34373adc23e9e68fc0bfda7"],["/categories/dev/android/index.html","fc4330be3d82721d446c29339b2ada6a"],["/categories/dev/cpp/index.html","efb5db9cdee7c3d4b1e7fccdae03a428"],["/categories/dev/git/index.html","d781002bc78b96aa965c8f612da4bd2d"],["/categories/dev/index.html","fa4b4bb57663ef430f9e2f6e22bfe588"],["/categories/dev/java/index.html","14f79e5d39550459ebfa949671e39cc3"],["/categories/dev/page/2/index.html","91917527cb4ee4c379930c86d8f2f9f0"],["/categories/dev/page/3/index.html","e7562584c44836a528d046df6225c87a"],["/categories/maintaince/blog-setup/index.html","68780866e3c2eeee168d919c348eae9d"],["/categories/maintaince/index.html","26926105f15e60fd53a7aa3708717e28"],["/categories/maintaince/macbook/index.html","03ec5d2d445cf694a4941b3653e2ddfe"],["/categories/maintaince/router-config/index.html","b2cb7d569903066af7de8357a6588294"],["/categories/notes/index.html","578c2a5a4aad813e141ea56bd23865a6"],["/categories/tricks/android/index.html","88df6d22032ca4334b19b975d8c7f18b"],["/categories/tricks/index.html","7e66f68ab43459ed4167c175571689e7"],["/categories/uncategorized/index.html","60ec089934000b9efd3ca6e3e49b38ef"],["/categories/works/Front-End-Dev/index.html","b165d29dac71dcbf6050f5aa64d4397f"],["/categories/works/csharp-wpf/index.html","bd8a5ca53fbec6d26c365f0138367afa"],["/categories/works/index.html","69c47e0829d21c56522304f6c24882f8"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","6269bc489501ae8fc6f09f5c5aa6acb5"],["/ja/2015/03/WNDR4300-setup-log/index.html","8adec2702fb756e6cd37cf8ab6826a02"],["/ja/2015/03/android-hostname-change/index.html","07e5d936498b58653b41475df2d71881"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","7e40b0f6fd5aaf3a408507d86a99c265"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","a44672858c207a67f7d3acafdeec31b8"],["/ja/2015/04/cpp-study-log/index.html","34ce2380eac8c66d4fde9e0420bbbab4"],["/ja/2015/04/github-pages-ssl/index.html","3ce62f9b3463f29a07198e8c9b5d6403"],["/ja/2015/04/hello-world/index.html","f6a518ab8d147c2c2140ade65cfc66e0"],["/ja/2015/04/hexo-setup-log/index.html","fa181b6f4a219885b2c77f5344740bd4"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","9ad7302c7b7465f34b242ba874ff8888"],["/ja/2015/05/cpp-inherit/index.html","1f1e389df6c8635def8b332e3a6d786c"],["/ja/2015/05/cpp-polymorphism/index.html","1473eabcd912e21f84dfb70da1965202"],["/ja/2015/09/android-root-ota/index.html","77df899cbb9cb0a1ff442586d08dc05c"],["/ja/2015/09/java-learningNotes-1/index.html","4b1a60ceb12c98abe78d0bbcdb89ec70"],["/ja/2015/09/newblog-newlife-2015/index.html","c70e7a08fc04926b19d4bf3ce22472d7"],["/ja/2015/09/router-rebuild-2015/index.html","ddb113b92ac8f4ae0dff82085ebbf718"],["/ja/2015/12/2015-12-21/index.html","e0a584cd3d3e2343d4d7a0241b600e16"],["/ja/2015/12/PixInTouch/index.html","5ada9bc3eb8268ae210f352d968943db"],["/ja/2015/12/git-study-1/index.html","f8eb64addeba001a21532d8aa00f7bfb"],["/ja/2015/12/hexo-backup-and-migrate/index.html","fc17a64be765684d94a7f079e2c1ba88"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","48442e35c9829d7275999c18eef245a2"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","dbeda3483239542269cf9b5ba4fb4a6b"],["/ja/2015/12/router-reconfig-2015/index.html","9459cd18b60988b73ba942bbb2c94066"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","1b794bed3da3aa3c6d9d16e034b778c6"],["/ja/2016/01/2016-stepping-further/index.html","e9326689d4b36cef06e0ba8321c50748"],["/ja/2016/01/Android-Study-1-22/index.html","30e01073d8bbd81ced0927bc9d4af727"],["/ja/2016/03/2016-03-20/index.html","d60b2812de4e88fb8d13bba329187ccc"],["/ja/2016/03/GSC-535/index.html","59bbc8be19e2d276edd8ebe8555ca1e9"],["/ja/2016/03/gulpjs-1/index.html","c13592d133c69b838d6c4ee7f723032c"],["/ja/2016/03/hexo-theme-paper-white/index.html","b479eb4301941716a3e06581f65e8a62"],["/ja/2016/04/2016-04-19/index.html","c56473d5a174105a589ec875c1eac3af"],["/ja/2016/06/2016-06-16/index.html","42f0fc4bc7540c83a3728a48aeaa3c01"],["/ja/2016/09/2016-09-18/index.html","8454cb9dc4ce2bc981dad8c352970fd5"],["/ja/2016/10/2016-10-27/index.html","c8edb6410736e4ac321a8bcf4fffc8dd"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","2e187ca93fc386e3530db67fa96c6b21"],["/ja/2016/12/improve-duoshuo/index.html","d7a9d5b805ea6d582ea688742ffacde6"],["/ja/2016/12/use-travis-ci-your-blog/index.html","58d6acc708bbffb705abb0c38ce1c960"],["/ja/2017/01/2017-iyahoi/index.html","6b390b687558ff1b54e41c7be841a6c0"],["/ja/2017/01/webpack-amd/index.html","2a9eae6557d8fc9c26e2f2fb6c35497e"],["/ja/2017/04/kotobukiya-syaoran/index.html","f5a0b8eed7fe2afa3c2088091fc02b0d"],["/ja/2017/04/macbook-and-surface/index.html","a5d871e8562454579f0ba49c12dc1aa9"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","0dd1110babd52325baa1819f87d190a0"],["/ja/2017/06/noragami-seichijunrei/index.html","db373838fc902c62918623f6c83c65b5"],["/ja/2017/08/cross-compile-55-libev/index.html","14edc10b496d2d56cb6ea6bc62ec1e54"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","64670c9c3fc4efb135039ce5ed07d840"],["/ja/2017/08/hello-jp-world/index.html","5817c6a8d66442287546e8c132bfbd8a"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","9fa2fabad41ad8bc04e42286e5b2766a"],["/ja/2017/09/record-user-login-status-methods/index.html","b3c55799870f1d8323026ddb140ee6d7"],["/ja/2017/10/vue-typescript-early/index.html","5bedfabdcc0348a30ee9eb4d697cf2b2"],["/ja/2018/04/2017-end/index.html","68be720947e6038c6e3dcafd9953d272"],["/ja/2018/04/twitter-account-activity-api/index.html","a30fe96f0183bc35821586eb07319d3b"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","ae920cd84e34f4a8317f66b9e7e6b0a3"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","9649e1ea2c2e621b787c1a920c2863ac"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","d545a2473ee920561bdcf08c899ad878"],["/ja/2020/06/try-serverless/index.html","7af3acbe6fdc48448da6b7a0f6a00632"],["/ja/404.html","3806ee5c3363acff34139c912ca72974"],["/ja/about/index.html","d10049fd719bb4d1b128a5ff5cc0bd2c"],["/ja/archives/2017/08/index.html","e5869917e2eed49db46afd37f38df5d3"],["/ja/archives/2017/09/index.html","ef7cb873594fcbd9fc78407c3be6237e"],["/ja/archives/2017/10/index.html","fa720f4c7b49adeb5e8f8dfb5737f6d2"],["/ja/archives/2017/index.html","5756dc081391ac2081a43a0488124af6"],["/ja/archives/2018/04/index.html","d341f2ba09b25ba8028298aa9405ebf2"],["/ja/archives/2018/05/index.html","df23d893436eb268dc3d0e94dd5c1965"],["/ja/archives/2018/index.html","4fe466c9ec3617986ef40acd2d446204"],["/ja/archives/2019/05/index.html","d5d0ade0ceda0afb454943b2f6f79e9c"],["/ja/archives/2019/index.html","cb8d98149675cd64a25334ba02272682"],["/ja/archives/2020/06/index.html","fd9fd05c5e927c06d96dbdf3122f3496"],["/ja/archives/2020/index.html","31d334fd22ee145e8fd51cfcbd685d11"],["/ja/archives/index.html","09a94945bf7bae0de5e89d914fb0ed66"],["/ja/categories/ACG/Travel/index.html","6f29b634ad609fee8f717f0abe0ac2f1"],["/ja/categories/ACG/index.html","686a0f88fa7974df94efe32030eae56e"],["/ja/categories/dev/Front-End-Dev/index.html","a3e2a2f5324e529c198ffb68cb5df356"],["/ja/categories/dev/index.html","31ce73589398f0b82b651dfc432758bc"],["/ja/categories/uncategorized/index.html","8aec6db2b58098abec835458f2e068c8"],["/ja/index.html","3d514bfd3bbee941a820596df068cb5e"],["/ja/nihongo-test-page/index.html","02bdfd8c1e32dbf89a1f0bf8a407a243"],["/ja/resume/en/index.html","f2fabc7a21702226edf4d06b3d29e70b"],["/ja/resume/index.html","f33eea1beb8f606a09f672dab22ff405"],["/ja/resume/ja/index.html","ccbcbf77fc90c83637fe0c3fdfdf1f4d"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","60d44cac3d12866a96328126e87d3402"],["/page/2/index.html","17fe00fa801f506d909eab0c8f0a0c6c"],["/page/3/index.html","d8bd8c0290846068b62c441761d91309"],["/page/4/index.html","2fcf8a790f26e7897d0b10bea1d3da4f"],["/page/5/index.html","5de91bd12cff8fe09e33cbc7944a1bd3"],["/page/6/index.html","6f964a1abfe3f070191c89707e8d2a66"],["/page/7/index.html","198a18aed4737c78a0b44c8531afd5c7"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","277c207c057770af2911f3f076cf6ca9"],["/resume/index.html","6229da2687ee8b1d5366db09dca5f9b8"],["/resume/ja/index.html","9319d404d2b165fa70bb8a706f76b92c"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","6184815fca594970ba4f4182f7512a93"],["/zh-cn/archives/2015/03/index.html","0f10e4514203f5ad80f5a48aa265acfa"],["/zh-cn/archives/2015/04/index.html","6a3c5c2fb76b0eb9db2592dea96ce15c"],["/zh-cn/archives/2015/05/index.html","fb222a521b7116bec06bac16963a28f0"],["/zh-cn/archives/2015/09/index.html","f452da081491c9acd212eacc15a2e377"],["/zh-cn/archives/2015/12/index.html","c419e062f73c2f23369e1619edc92c04"],["/zh-cn/archives/2015/index.html","d6794dcb39354b0cfff2bc45d0851702"],["/zh-cn/archives/2015/page/2/index.html","9f5a0ae0100bb10f4b328faa995943e3"],["/zh-cn/archives/2015/page/3/index.html","edfc244ba4f52aa55ce94d0a7aa01cec"],["/zh-cn/archives/2016/01/index.html","52411e9ae841c996d30bbad80d4a73dd"],["/zh-cn/archives/2016/03/index.html","cb795f59c8157c7c50424b6f27293392"],["/zh-cn/archives/2016/04/index.html","8c89f0aab7917254ec2fa778ccc666b4"],["/zh-cn/archives/2016/06/index.html","0cbd121b794828ab558af0d2a60e35be"],["/zh-cn/archives/2016/09/index.html","9345725df4dc3a64fa5b0f7a9a8ac52a"],["/zh-cn/archives/2016/10/index.html","4c61cfa0c3c1d752be7236bf04c9fa75"],["/zh-cn/archives/2016/12/index.html","253d0536b3be3cc3c46f6ccead69a2e5"],["/zh-cn/archives/2016/index.html","2c016c2f7f7894e70cc307a8368871a0"],["/zh-cn/archives/2016/page/2/index.html","a97e53d2bb2f7b7248443b736e4fe6f8"],["/zh-cn/archives/2017/01/index.html","dfa0cd11fbe0af0d7bb0a27f02d0bc5a"],["/zh-cn/archives/2017/04/index.html","01a6b2c1534f0adcb780b206cbfb9e33"],["/zh-cn/archives/2017/06/index.html","bf4616816d9ff520507c4f35c4ad1651"],["/zh-cn/archives/2017/08/index.html","656afa1ff4344628f2e456f213e68870"],["/zh-cn/archives/2017/09/index.html","9c47fdaa6f4c255f768566c8f37b22a6"],["/zh-cn/archives/2017/10/index.html","0b0fce1ae5396e5949609e1ba0e91ba3"],["/zh-cn/archives/2017/index.html","6b15c052e1b791e66e4950a061cb0e8f"],["/zh-cn/archives/2017/page/2/index.html","c0530d7aad5bb93ee9be8cba3444812a"],["/zh-cn/archives/2018/04/index.html","53318d9c6cc90eb7bd58caf845d63efb"],["/zh-cn/archives/2018/05/index.html","6187784555730ebcbba8b4e220378c3d"],["/zh-cn/archives/2018/index.html","94fde8cfa3f2012d9ea0f571cd047577"],["/zh-cn/archives/2019/05/index.html","2ab602c1ed3d171a794c014f6766df61"],["/zh-cn/archives/2019/index.html","8898301c2399a3757c158578bc23020c"],["/zh-cn/archives/2020/06/index.html","0ebca9e0f49c99afb89fa4b30191becb"],["/zh-cn/archives/2020/index.html","50980086592e72c82d72f72c5e45b793"],["/zh-cn/archives/index.html","05cdfaed91ee086cb98ce5c18258f6b4"],["/zh-cn/archives/page/2/index.html","c424c53b960b8485d6563ddfa18a6738"],["/zh-cn/archives/page/3/index.html","cd61426792598706c5fd5fcb7af8bc07"],["/zh-cn/archives/page/4/index.html","43ee81ff2d0ad593cd5c0c60ab592b92"],["/zh-cn/archives/page/5/index.html","d40fe17f4e274e9afc49bf4d6f53b0c3"],["/zh-cn/archives/page/6/index.html","2c7e322700d8cbfeb9e10fab85731c2f"],["/zh-cn/categories/ACG/Music/index.html","2658d8e44caed907b2698864a65ea066"],["/zh-cn/categories/ACG/Music/self-copy/index.html","4c520fa6e75a12cc4a16fb95ab75feb1"],["/zh-cn/categories/ACG/Travel/index.html","61edc41b76266fd67f871c68b767cdfd"],["/zh-cn/categories/ACG/figures/index.html","e355b92a692bfd478f7b6ca0160d200e"],["/zh-cn/categories/ACG/index.html","6b2f1ab362e0a689921fc2c0a3715f17"],["/zh-cn/categories/dev/Front-End-Dev/index.html","a35be768a4b9bc8b0bf7379c83ee5e23"],["/zh-cn/categories/dev/HTML-CSS/index.html","8a75692ebad9843c137e6ccda567b665"],["/zh-cn/categories/dev/android/index.html","eda4af07828bfd59261c9ffec99fb198"],["/zh-cn/categories/dev/cpp/index.html","aa1e32be2c236a2bea52e194f3889073"],["/zh-cn/categories/dev/git/index.html","fc15d691cb9eefe821eaf836a04bbd33"],["/zh-cn/categories/dev/index.html","ddda0fde95dc446ba15b86ac85f3b771"],["/zh-cn/categories/dev/java/index.html","368f06d0595017a368a8fcbb41e61e94"],["/zh-cn/categories/dev/page/2/index.html","176ec5c4826b3bf1367884dcc885cfba"],["/zh-cn/categories/dev/page/3/index.html","b532ebbc888a9b7aa9f65af6b8560867"],["/zh-cn/categories/maintaince/blog-setup/index.html","59e57dc6be11463e14fa900af17018e9"],["/zh-cn/categories/maintaince/index.html","7e8195a38a88351497a5088302163dd2"],["/zh-cn/categories/maintaince/macbook/index.html","989dcb485c21e2f1063b0357b9ce13b3"],["/zh-cn/categories/maintaince/router-config/index.html","1d0a76740f7927c8de203a516376c563"],["/zh-cn/categories/notes/index.html","79bfe7e584454d26f48a859ed8d7a9c2"],["/zh-cn/categories/tricks/android/index.html","f0de92ff90a0e65f1c587b03889355aa"],["/zh-cn/categories/tricks/index.html","fd9fce726d116bbc30ed824ed1104673"],["/zh-cn/categories/uncategorized/index.html","c76826814b4c54e8facf31923c9160f1"],["/zh-cn/categories/works/Front-End-Dev/index.html","1a87bf1df7c95953719051ab662f37ef"],["/zh-cn/categories/works/csharp-wpf/index.html","66303a827dd214d7be47a4181c98b95c"],["/zh-cn/categories/works/index.html","c73a5d07e6b6e40150f459d39dca4c43"],["/zh-cn/index.html","90b9e19d1585a889af16a0c7460cdedb"],["/zh-cn/page/2/index.html","29afb9b15d528be1a1d037f12bdf8039"],["/zh-cn/page/3/index.html","e6c80a7bc829f4f6f6a8454c87875fe6"],["/zh-cn/page/4/index.html","0fe4f29fc08b3ef12f974697a9fb41d9"],["/zh-cn/page/5/index.html","5804c77eb991f2ed533213e0d97dd32f"],["/zh-cn/page/6/index.html","ba87420fe7e58012acbf2ad32af8bd40"]];
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
