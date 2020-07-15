/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","b16e7546af92b54b80740874eed59be8"],["/2015/03/android-hostname-change/index.html","f095bb475a129db8f613ff6512e77f20"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","20cbabd34598f49157ed55b2cfdc0ab7"],["/2015/04/android-chrome-issues-with-webpage/index.html","252e36da62ee405ed08c467026f6eb59"],["/2015/04/cpp-study-log/index.html","087fab942924e6845e7889c2ab058598"],["/2015/04/github-pages-ssl/index.html","3e39f132499ac695836590abc2cec379"],["/2015/04/hello-world/index.html","1d2a1c64997c56e032128b1b50da966d"],["/2015/04/hexo-setup-log/index.html","23bb7e6975a7f4609ef314e0933ab216"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","ee847f4c62c102d072458ca8cb3a6b06"],["/2015/05/cpp-inherit/index.html","04863f44d2d3682f4b54303cc8a483eb"],["/2015/05/cpp-polymorphism/index.html","95b7d70ddb35018a67cd5b848f440003"],["/2015/09/android-root-ota/index.html","462f1908220cbc4008d95092b1f96b27"],["/2015/09/java-learningNotes-1/index.html","142a15393ac9fb3ba0b222a7ba7d2ca5"],["/2015/09/newblog-newlife-2015/index.html","ac8f38c32f37f8ef64b686479851a120"],["/2015/09/router-rebuild-2015/index.html","9a5ce32477f56ba36cadc1b4b4682d2b"],["/2015/12/2015-12-21/index.html","0d66584d3ceab3050aa600b4c6f5ff84"],["/2015/12/PixInTouch/index.html","c17a76805c385f155e07e10b4afa6b0b"],["/2015/12/git-study-1/index.html","33b2b5d4b2788d8e684744f3fe8f903f"],["/2015/12/hexo-backup-and-migrate/index.html","55ffbcd2eb5b835ef7f423056d76a680"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","222d25c09c708697acd777f309e58323"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","3fe497c52f708cad5c4ccb5a8328fd12"],["/2015/12/router-reconfig-2015/index.html","e0e48fda4e7d8a3bf10aae6a2b6a6a58"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","eee8eb780b1fae302517ca7d2fe91e95"],["/2016/01/2016-stepping-further/index.html","f06954ce0c28d50de0d3ab1adcd09968"],["/2016/01/Android-Study-1-22/index.html","9b251b8638d9984c60c0b3238482d3c2"],["/2016/03/2016-03-20/index.html","3f75621549a5f76b3fad1a108977a5eb"],["/2016/03/GSC-535/index.html","f774815356806b8183ad7bad68eb6f84"],["/2016/03/gulpjs-1/index.html","1d3c94ff860f4db3ffdc16868009ab9c"],["/2016/03/hexo-theme-paper-white/index.html","3131f1f9684a1d1997a12f1dbbfcc54c"],["/2016/04/2016-04-19/index.html","b5191df4412a513afa878de836123fcb"],["/2016/06/2016-06-16/index.html","4b77e2728ebca00d0d0b68434113e9c7"],["/2016/09/2016-09-18/index.html","92aed97adb07dad7278a780637e95379"],["/2016/10/2016-10-27/index.html","cb0bbb8301ce760bc5e07b7a1a5c5948"],["/2016/12/config-switchresx-and-2khidpi/index.html","e9565d8829f886de55eba2bb09eea981"],["/2016/12/improve-duoshuo/index.html","05580653619cf523f69f0ef1951cd88f"],["/2016/12/use-travis-ci-your-blog/index.html","d3bf8875fda92f3ae489623b59c97dcb"],["/2017/01/2017-iyahoi/index.html","f9ceb281d16a65a10d34a339f6876580"],["/2017/01/webpack-amd/index.html","7264970a02c67d6554c929afcbabb3b3"],["/2017/04/kotobukiya-syaoran/index.html","27471f59fe0392a5c77abfcd2fee82f6"],["/2017/04/macbook-and-surface/index.html","add13063b6ec0480523c9d25b9657fc8"],["/2017/04/uc-hyakuya-yuichiro/index.html","ad67eff6e2305ef660627d56dc73fcf1"],["/2017/06/noragami-seichijunrei/index.html","819aa9940cadd90ed6d962b74957fca3"],["/2017/08/cross-compile-55-libev/index.html","95009f1ed7a7f3b3098ad701082ff5f6"],["/2017/08/explore-service-worker-working-lifetime/index.html","489d5b816200234aed2e88100b5777f2"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","76a51d5e31c46c80a21657441739bebc"],["/2017/09/record-user-login-status-methods/index.html","5b5d10a76c9c51c6dc2226129f2bad48"],["/2017/10/vue-typescript-early/index.html","8ce83c5dde300187dea72c5f7d7c3da0"],["/2018/04/2017-end/index.html","bb052e8c83679bffe478f497e855ddd4"],["/2018/04/twitter-account-activity-api/index.html","7179a9138d881943e24e532f5aaecfb1"],["/2018/05/buddy-complex-seichijunrei/index.html","efb16b6a279ab045ad5848958ed9e0ca"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","98600fcf23bf7856480383b02c4c6362"],["/2019/05/2019-05-17-google-io-tech/index.html","24eb4b5b454333c54d07efab32432521"],["/2020/06/cls/index.html","840d5fe92a5f729ad7853ef23189607e"],["/2020/06/try-serverless/index.html","90bbfa0d9d0c2b117def6edb2c92af9a"],["/2020/07/macos-node-require-path-case-insensitive/index.html","e3d3fc57d481164a960606aa77ecd556"],["/404.html","cf9aa248c04c7e4e6a034570ef890f17"],["/about/index.html","734ff2f92e61156b54074c8b6ee4168d"],["/archives/2015/03/index.html","503934080f521a6c80b2de0c4c824479"],["/archives/2015/04/index.html","921e65696a785da04589b12040a3183f"],["/archives/2015/05/index.html","02113709147c142bc70c0c68aefe30ce"],["/archives/2015/09/index.html","48ca88cb93c274a81fce8cff2f24319e"],["/archives/2015/12/index.html","99af6a224ab07fb149877987c80733f6"],["/archives/2015/index.html","dc2fb5a1f841ce3764b00d21531b2cea"],["/archives/2015/page/2/index.html","4b7eadbcb8f91dc19b1d5a19d8510b92"],["/archives/2015/page/3/index.html","52a36c24eb8c82beea6225eb49e22e04"],["/archives/2016/01/index.html","5524e21d21382ff5ceef55be52fdedaa"],["/archives/2016/03/index.html","662c04ec205d5a419808364ef7e43076"],["/archives/2016/04/index.html","c78eb0cf9791376001d73e7d323dca3c"],["/archives/2016/06/index.html","fc5b9e243c172b9e2570c75f678739f4"],["/archives/2016/09/index.html","4b8af6d59ba8b485918011a07e84561a"],["/archives/2016/10/index.html","41b8d648bbfeec4e195a66e6bf523105"],["/archives/2016/12/index.html","7904e50fb15db9d1200bf9e1c3a0045e"],["/archives/2016/index.html","dd50d8593cd6d11764519461a58990ae"],["/archives/2016/page/2/index.html","864b4900acec98d87b3a47cee64b9272"],["/archives/2017/01/index.html","f307f17df8bda4a072fcf23aa4fed930"],["/archives/2017/04/index.html","2f26150114e9da55068896ba4afc8b8f"],["/archives/2017/06/index.html","dc357cac351d33c3591a517c80539471"],["/archives/2017/08/index.html","8b8d23714a1782e022218a34a8a8409b"],["/archives/2017/09/index.html","0c0f2da812308b76b2b4ff955cc7c8f6"],["/archives/2017/10/index.html","32bb81f7352dc577a84957fc47d5e637"],["/archives/2017/index.html","5c3a26e6fe7d5dfef00372536fd8884c"],["/archives/2017/page/2/index.html","b793e4ef3dbd39d3d10503c6d7cb8e4f"],["/archives/2018/04/index.html","566459759b8122ef8418370727bb24e7"],["/archives/2018/05/index.html","00a78aa2db16049434771120753048f6"],["/archives/2018/index.html","4a2b36ff4e15e561e1495f8981634673"],["/archives/2019/05/index.html","d1d227d791e7f0fc731468e1527608ce"],["/archives/2019/index.html","cf464de9eecd8849e846fea40f1520d0"],["/archives/2020/06/index.html","868ac4fd6c76bf027dd4d37c6eba0195"],["/archives/2020/07/index.html","6eb381ce019ef525b8e4a44d75807dbb"],["/archives/2020/index.html","631be9c44e3a707edbe3bc48739b7c2e"],["/archives/index.html","186aaf75eecf16e968ba97d87d76a646"],["/archives/page/2/index.html","a02310f3e97bf99195402a1178a3b857"],["/archives/page/3/index.html","9079f8b8cd814bf83a335c45ff51ebd6"],["/archives/page/4/index.html","46f389b4475730f32a24c821bd4552fb"],["/archives/page/5/index.html","d63df8c41bc5936d0d91f428662890f0"],["/archives/page/6/index.html","d7571a1699aa4c658e84e95180ff2665"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","2ba28dac2a91ccfe0fb5305e873d05cd"],["/categories/ACG/Music/self-copy/index.html","e868e93e888004d306702dfe7a16e3a6"],["/categories/ACG/Travel/index.html","7a76742f844a6646623c87c4c3f9c9e1"],["/categories/ACG/figures/index.html","95abaf7ed82fc06c78299a0e9c626134"],["/categories/ACG/index.html","fdf969ba3cbb0ae8c6b708b8f9416129"],["/categories/dev/Front-End-Dev/index.html","62949d8452286764104afa8c67b05333"],["/categories/dev/Front-End-Dev/page/2/index.html","cce4200497602f5ec77d762c26fa3298"],["/categories/dev/HTML-CSS/index.html","adbecf84d362c092e5e960298d086a1d"],["/categories/dev/android/index.html","a18d02d43876a9a05afa61b170c1fd97"],["/categories/dev/cpp/index.html","c2df32b9f82d8cd4bfa1ef9d16a0bc3a"],["/categories/dev/git/index.html","cfdd56e94bb31272147860def48d2cfd"],["/categories/dev/index.html","73ccaca5663e3f01efdd6d920702650b"],["/categories/dev/java/index.html","79698191b642357d6b7ca583c7632087"],["/categories/dev/page/2/index.html","ebc783c55430ae9a14d13018ab5f5bda"],["/categories/dev/page/3/index.html","e33d6a28b6d88d1e8bf38430626988d8"],["/categories/maintaince/blog-setup/index.html","181278b2099ea2a258204ea6858515cc"],["/categories/maintaince/index.html","9a90930c279a3d6267bdae7b8e221232"],["/categories/maintaince/macbook/index.html","93c447f1f7b65fe13423d65235c9455f"],["/categories/maintaince/router-config/index.html","982c67e8698486215e241058be5f68d8"],["/categories/notes/index.html","1260f9b2a19288e7084274ca353e5ba3"],["/categories/tricks/android/index.html","68cb53a3e3471971261b3fa82a1b2724"],["/categories/tricks/index.html","c35da83fd1bf723f9dbf163772c9b81b"],["/categories/uncategorized/index.html","c6543de8a82d81beefbebff22b1bd242"],["/categories/works/Front-End-Dev/index.html","8538e91742181666907de0a17c4c6dc0"],["/categories/works/csharp-wpf/index.html","1c5a0aca0aba1a507ff6b0e2ba15583c"],["/categories/works/index.html","77444a1e9a4c188b9e1cd46525f8d058"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","e921f524c726673f0d66edec17fed9ad"],["/ja/2015/03/WNDR4300-setup-log/index.html","aa34df7f4873a327d78208e489152e2e"],["/ja/2015/03/android-hostname-change/index.html","f39ac7bae756041090073b6a22d00237"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","2342de9d22a0b8cb7d19e1d8e109af51"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","682bef6c9c411bf36b8c5f038119802a"],["/ja/2015/04/cpp-study-log/index.html","45550a3f1f5a8eb936355f7d4302c313"],["/ja/2015/04/github-pages-ssl/index.html","f24e9fc85d02c36108070b79dda8cd63"],["/ja/2015/04/hello-world/index.html","1499152cf5266b5a33ba3bfb7d58217d"],["/ja/2015/04/hexo-setup-log/index.html","85928e77ac1bddd8f5b000b44593587e"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","0cb0d5854604d71ae504bd15d472288f"],["/ja/2015/05/cpp-inherit/index.html","299e27b6766a37f902db2e55cd552419"],["/ja/2015/05/cpp-polymorphism/index.html","098ca8b34d1f789f3ad64a0f598c4ea1"],["/ja/2015/09/android-root-ota/index.html","da890a033e2be48f604ad73025e23eba"],["/ja/2015/09/java-learningNotes-1/index.html","12f724f12e890b74b5404ddd0cead4b6"],["/ja/2015/09/newblog-newlife-2015/index.html","f620478fc47ed76b382c8cb824223cfa"],["/ja/2015/09/router-rebuild-2015/index.html","7c67e31614301d6adb1254c982b9941f"],["/ja/2015/12/2015-12-21/index.html","fc37bd30575a5d3173fc9c0dab9b7d97"],["/ja/2015/12/PixInTouch/index.html","9b3dabadeed86c3dd1e5500a61a060e1"],["/ja/2015/12/git-study-1/index.html","f545eeeb65ef2ae61d21e943f3cc5a75"],["/ja/2015/12/hexo-backup-and-migrate/index.html","05129c29b3efe31b40692d92ceeb410a"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","6160c22898ba5d8c5224131faf7ed662"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","51789daff811d78892748057e1ae43ea"],["/ja/2015/12/router-reconfig-2015/index.html","cdea25779231a297095744a3107129bb"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","5495c0b5d68ddb91e2e8fd1771ff5ab4"],["/ja/2016/01/2016-stepping-further/index.html","fa0e483dab8d9cab82b8c90f42e61816"],["/ja/2016/01/Android-Study-1-22/index.html","63b0fb2f89e1813789e3354bbee417d3"],["/ja/2016/03/2016-03-20/index.html","4fe2affcfe15a2161d148e0879d075ba"],["/ja/2016/03/GSC-535/index.html","02ab7533df623b8f55c3f02ac7dd1159"],["/ja/2016/03/gulpjs-1/index.html","b28f2ea1fcc4c1fa8303fc8dcc16ba82"],["/ja/2016/03/hexo-theme-paper-white/index.html","b67bd900d61c60fd737ecff6a8e2e4ae"],["/ja/2016/04/2016-04-19/index.html","10f2e334a2f2d11aa07f740d3b912817"],["/ja/2016/06/2016-06-16/index.html","0e74bad1242ec12db1e20a61d8440176"],["/ja/2016/09/2016-09-18/index.html","3da9da0d36088c7781aab873d6c067b6"],["/ja/2016/10/2016-10-27/index.html","ed6877829fa26524ef00c92dc32d5f7b"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","52472671db688bf5a7c4ffd4fc22248c"],["/ja/2016/12/improve-duoshuo/index.html","f6737793812ed60d86a2358f19f821eb"],["/ja/2016/12/use-travis-ci-your-blog/index.html","cdaff7b20f4ff3687ea17ffa6657b3ff"],["/ja/2017/01/2017-iyahoi/index.html","c4cf5580ad250f0c0976af7e0ffe74e2"],["/ja/2017/01/webpack-amd/index.html","37b60bfe1f13e695d06f896b60c85240"],["/ja/2017/04/kotobukiya-syaoran/index.html","b9b89e3c386a2435ef03ef4bfe9b8cf9"],["/ja/2017/04/macbook-and-surface/index.html","75feb54c86e64d6bf6ff33152fd0428e"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","e7eb2fc2b8c850a090b8a35821248bc4"],["/ja/2017/06/noragami-seichijunrei/index.html","449797a23f786a549f3e842cf5ea0880"],["/ja/2017/08/cross-compile-55-libev/index.html","c9afd8f4e6a361010b3b4eb5f875a5f9"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","637f999a0615565f1b2f373fb7c2453a"],["/ja/2017/08/hello-jp-world/index.html","b9ee2bec62c56c4340faa08de5d998d9"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","f19602f7002640a06f941821fe1e14e2"],["/ja/2017/09/record-user-login-status-methods/index.html","e832e073b7fe953f9dd09b159e133a4e"],["/ja/2017/10/vue-typescript-early/index.html","516fcb9c920d15a5c1b726c065ee31e2"],["/ja/2018/04/2017-end/index.html","051899a835ea01ba1111424050010995"],["/ja/2018/04/twitter-account-activity-api/index.html","853b3df9e27790c84c73ce7965d1d785"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","8755060d97b1b07a5dae98e3f6a1df92"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","136521ca3cb3753927767537ef7b769e"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","d84c3a25821202f4bbf984af8d7b513f"],["/ja/2020/06/cls/index.html","a24cf84f95f5a08f2658308837448fee"],["/ja/2020/06/try-serverless/index.html","0503f2190db12c18e5ec4a09cd5d5c33"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","42a2efb61d630b9c81612b9ccb9fe137"],["/ja/404.html","33a4e814342d06cb294fdead1b232ee5"],["/ja/about/index.html","1a5359d91890cb3d333644ad1a267cf6"],["/ja/archives/2017/08/index.html","5c83eaf3c587b6c5d14fbf6325efa164"],["/ja/archives/2017/09/index.html","20b1d40db6905632d57074bb8de2c843"],["/ja/archives/2017/10/index.html","64e3284aaa0c2faed59bbebccd810068"],["/ja/archives/2017/index.html","0f2b1dddd5a5ecf76e575db0e26ad090"],["/ja/archives/2018/04/index.html","aee416c7fb08e7366061c4318824299c"],["/ja/archives/2018/05/index.html","effa42a6446a59e13295676516fa074e"],["/ja/archives/2018/index.html","41d00f05e1ee5ac777b0525232f2a336"],["/ja/archives/2019/05/index.html","bbe3a8c69c73d6497b08e9717de05caf"],["/ja/archives/2019/index.html","10162d04a7cf4e5257082eb778c3610c"],["/ja/archives/2020/06/index.html","f4e0c1d69adfbde8c179ea904ee3fc54"],["/ja/archives/2020/07/index.html","67211eb5c3d432bb392fce57e401c7f5"],["/ja/archives/2020/index.html","574bf3ec42780652147f22506cedffc4"],["/ja/archives/index.html","b90960d252d821c930f434031f438412"],["/ja/categories/ACG/Travel/index.html","ab843f3d2806c8c86401ca23bf1f150b"],["/ja/categories/ACG/index.html","6acf0dd49cbbbff680f1ae67e17a8306"],["/ja/categories/dev/Front-End-Dev/index.html","c717c6ae5feb2f7da17fe02acb2220ea"],["/ja/categories/dev/index.html","f06b4cef16baebd9e48805c1fa704757"],["/ja/categories/uncategorized/index.html","12f10e449f514ff9119623700dec8a8a"],["/ja/index.html","458d4b79a694080176cd441f469f491a"],["/ja/nihongo-test-page/index.html","70b90b2d356bc540d8ff0407f315bea4"],["/ja/resume/en/index.html","e5b305e93b16d692d9e55f24d97b1ce8"],["/ja/resume/index.html","3992ad1f2d09d229f9a243e59c5bc67e"],["/ja/resume/ja/index.html","4de40429349f3b0e0aa0009f8739827f"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","33c6243c0376dfa239c51274491746b9"],["/page/2/index.html","2e33062d0b8680122ae65aac4f99da57"],["/page/3/index.html","653091984a8850a96a447756f64bdd1f"],["/page/4/index.html","17ee7a2ceecf30ce0aa6bb9c8795d5d3"],["/page/5/index.html","7e5058186ed54b205511f13dc817f3ab"],["/page/6/index.html","3f02b68e280bc797ce9050044f7a7488"],["/page/7/index.html","50c8d78eb4ce13cb68f31ab187a0d322"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","39e8b21476b62682b2aa84cf9308db09"],["/resume/index.html","cf0d6f12bc804f789388ee91eff78b97"],["/resume/ja/index.html","c958e8b0f593214b7778ea149bb2c063"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","360a6b4c84e7a0034001a9478941fce8"],["/zh-cn/archives/2015/03/index.html","1b8f733e6b3a8970f42de186e681d421"],["/zh-cn/archives/2015/04/index.html","006601d0e651b9664d4b8f41953dbfe3"],["/zh-cn/archives/2015/05/index.html","bd74097e1f7478fde3ecb1aec7e89a66"],["/zh-cn/archives/2015/09/index.html","e52da1b7796603f10ccde105707c30cc"],["/zh-cn/archives/2015/12/index.html","12fb3537906dcbc53ca8ac8e25393dea"],["/zh-cn/archives/2015/index.html","046eea9d1c711c0622bef55682b2e248"],["/zh-cn/archives/2015/page/2/index.html","d04a8424c48c24505d45118786c0d3d3"],["/zh-cn/archives/2015/page/3/index.html","c826995407bb4be2c4b1cb703bea66db"],["/zh-cn/archives/2016/01/index.html","067df233120472bed108f38e2ff34746"],["/zh-cn/archives/2016/03/index.html","e83ad161ee1f629f5abdda6ea8dde105"],["/zh-cn/archives/2016/04/index.html","f0cf9190e8b3282ccebbfd7995880d59"],["/zh-cn/archives/2016/06/index.html","2308e4fc0dd5a27341be28b96888b814"],["/zh-cn/archives/2016/09/index.html","f36ac2ee5b19639ea50bd59092312ad2"],["/zh-cn/archives/2016/10/index.html","85ae69e22b65dbe221df6f3593dee2d6"],["/zh-cn/archives/2016/12/index.html","8faa5a48ec3f1e5e3c471fccc4df64f0"],["/zh-cn/archives/2016/index.html","e8e32e254ac985bb8ef821db6444b9a7"],["/zh-cn/archives/2016/page/2/index.html","cdc8e035a1a7dc48d8b1b979114ad431"],["/zh-cn/archives/2017/01/index.html","0b5bae81308fbd039d8ee15d022f4b63"],["/zh-cn/archives/2017/04/index.html","37911f925802ae4e00090585b3a0fafd"],["/zh-cn/archives/2017/06/index.html","8f1116a778daf5eccccd8904773ff2d3"],["/zh-cn/archives/2017/08/index.html","2702cc77438783cb941f85cb9bec8182"],["/zh-cn/archives/2017/09/index.html","b0e2bdc54e8bd2e2970621380e7f04a6"],["/zh-cn/archives/2017/10/index.html","209ded7cccfcd8ce225b7b3a96b85b68"],["/zh-cn/archives/2017/index.html","b46a41dde649e7c8a04c3258ed8d9d4b"],["/zh-cn/archives/2017/page/2/index.html","413748507f1495b77f7cdc4bc79c92eb"],["/zh-cn/archives/2018/04/index.html","68589788a35c21ee5b0278aec6e323b4"],["/zh-cn/archives/2018/05/index.html","05ba823db1108f284b5e513906370ec9"],["/zh-cn/archives/2018/index.html","8a9c0d88576b8e6157e96d5cc31b1021"],["/zh-cn/archives/2019/05/index.html","d1d2eb0d895e1cf2433491cd5133f2a1"],["/zh-cn/archives/2019/index.html","879e535ee5cb9824b4419f51e5677ebf"],["/zh-cn/archives/2020/06/index.html","2612e544e8e9fa5673dcf4faba07163a"],["/zh-cn/archives/2020/07/index.html","889ff32864b863149d12a0d61510db90"],["/zh-cn/archives/2020/index.html","78f4858b453aacdbe895f15a36cee8e3"],["/zh-cn/archives/index.html","68821498f4caa36d7d79d2e7cea8516e"],["/zh-cn/archives/page/2/index.html","b2e16c429a2d82919cc0e1383b628a24"],["/zh-cn/archives/page/3/index.html","ebb6ca9dbe5e9b4cf8d7979a7f9a78fe"],["/zh-cn/archives/page/4/index.html","63c82720724dc22403b34db17c383c59"],["/zh-cn/archives/page/5/index.html","ebc9717629ae0656feb054342608000c"],["/zh-cn/archives/page/6/index.html","d0f0f949fbb15e21fe285a1b79faa8ef"],["/zh-cn/categories/ACG/Music/index.html","e3154b973c78e93bea1176a9bbd69eeb"],["/zh-cn/categories/ACG/Music/self-copy/index.html","15250696542c7968eae570f3ab302bd7"],["/zh-cn/categories/ACG/Travel/index.html","346a078c8c892aa881ad11f89dac2666"],["/zh-cn/categories/ACG/figures/index.html","09bfd04b96c6fd985fe295170517883f"],["/zh-cn/categories/ACG/index.html","d9efc6421009fd9843ce688535c638ff"],["/zh-cn/categories/dev/Front-End-Dev/index.html","698ebe940f075aed43caec3dd2e98ec1"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","1864dc621863d1954e0aa100721df64c"],["/zh-cn/categories/dev/HTML-CSS/index.html","087ad12c3d5991453e243e06e33eca42"],["/zh-cn/categories/dev/android/index.html","6a182ac23e8ebb2c14d4d8332506c8e4"],["/zh-cn/categories/dev/cpp/index.html","b02153d08cf4ee6c92a3736dea8d9426"],["/zh-cn/categories/dev/git/index.html","6830ba271775223f45c25a9a3991c23b"],["/zh-cn/categories/dev/index.html","9b096fb73b7216db02268ea2eb587958"],["/zh-cn/categories/dev/java/index.html","f72026254be26e29f0072818324ae962"],["/zh-cn/categories/dev/page/2/index.html","d4648e3c69eb13d32a11958543df7bf1"],["/zh-cn/categories/dev/page/3/index.html","a5ec8d10069bd46a65f6b942f6358099"],["/zh-cn/categories/maintaince/blog-setup/index.html","929a2a665fe8cbd39ab3f87c81f574ee"],["/zh-cn/categories/maintaince/index.html","d08a99514bb771662cf15096cc001b51"],["/zh-cn/categories/maintaince/macbook/index.html","5df901abf31d822927af8d520bea7f0d"],["/zh-cn/categories/maintaince/router-config/index.html","d023c04ea8e8974f5dbf44a032d64ca1"],["/zh-cn/categories/notes/index.html","262c8c44734175e703db4e5fb810fbfa"],["/zh-cn/categories/tricks/android/index.html","7eb031fea1fa7ee8e077d809c363dfc2"],["/zh-cn/categories/tricks/index.html","561d80e3ac36ab5e1292e4005655cce2"],["/zh-cn/categories/uncategorized/index.html","888d39f159ed926f1cc055de5a61fe3b"],["/zh-cn/categories/works/Front-End-Dev/index.html","0c1ee771ff116ba1d78b4177e07c9a1e"],["/zh-cn/categories/works/csharp-wpf/index.html","068d2cb31b2e31efa8e4526267ba078d"],["/zh-cn/categories/works/index.html","197e08c6e126fd59077397e1b8aaab83"],["/zh-cn/index.html","ee36d28a59c37ae5fe90c473a8503ab4"],["/zh-cn/page/2/index.html","3db866444ea050f16faea247ba51179e"],["/zh-cn/page/3/index.html","70d4a3d9f320a5f729139ca60c67879d"],["/zh-cn/page/4/index.html","e3e9c85d23ceb3353581d3ecf4a1443c"],["/zh-cn/page/5/index.html","04d4eb1f03231b7d42ce85bd285fc8c0"],["/zh-cn/page/6/index.html","aecf9b3b125b339627c3480a7c55e387"]];
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
