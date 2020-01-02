/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","af8d309f7e05e414b30a71d88fb8db37"],["/2015/03/android-hostname-change/index.html","cb628be9d9cff4ed2fd2d2ac86548295"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","4abc30b967968573726cc574ebbf0fcb"],["/2015/04/android-chrome-issues-with-webpage/index.html","6cf1ec598f5fbd3aaad905e4f569844d"],["/2015/04/cpp-study-log/index.html","b2dfb400e6ce72cdc9e34c8caab1c03a"],["/2015/04/github-pages-ssl/index.html","d8e20802bf61696afae43a0308e2fd6f"],["/2015/04/hello-world/index.html","377e55d1b3d11dfd7338a03528cab6ac"],["/2015/04/hexo-setup-log/index.html","a055c6a31993093b429ea4a94ceac36f"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","3161f688963179ce75d54083acd2df56"],["/2015/05/cpp-inherit/index.html","7047f6c9a131c8c19b23e8ef2f79d885"],["/2015/05/cpp-polymorphism/index.html","ec241116bb4cf7971138712230d50841"],["/2015/09/android-root-ota/index.html","0f54dc26b896361f79941cc7f9351d19"],["/2015/09/java-learningNotes-1/index.html","a8bd8947465541fd6d706fbbe1d7da1a"],["/2015/09/newblog-newlife-2015/index.html","d2e862368bceaf7bfd159131f46907b8"],["/2015/09/router-rebuild-2015/index.html","d2d63b13ff2a2555a104d4b0a66e92dd"],["/2015/12/2015-12-21/index.html","0b32393c4872ccbda5d4b24460ad518f"],["/2015/12/PixInTouch/index.html","4681645f2b2ab2eee5c0458cd58cccf7"],["/2015/12/git-study-1/index.html","326de107387b010125b83d94686c86e6"],["/2015/12/hexo-backup-and-migrate/index.html","d1b52cf7cc8f7f4c4cb6ce48216ea1d9"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","d41e9cfa9226895393118589e02538ee"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","accd2f7e967281a48ef0ad4efcfb7798"],["/2015/12/router-reconfig-2015/index.html","4f7a7de168138ebe4b64bf08cb8ea1f2"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","3bf3af64b9be6661c7a7c2bf27d5600b"],["/2016/01/2016-stepping-further/index.html","1657fc81e8543add2667cdf62ed80cf9"],["/2016/01/Android-Study-1-22/index.html","9c0138ed0b598b83ca2f91bc7d393228"],["/2016/03/2016-03-20/index.html","afff1a6e4657c362d48a1a4d56da18e3"],["/2016/03/GSC-535/index.html","a54af14f704073f3c399a1af950a8b12"],["/2016/03/gulpjs-1/index.html","2d4384ebc277236299be3c956473fc9f"],["/2016/03/hexo-theme-paper-white/index.html","e744a48a5e02861b0b20343364d76c30"],["/2016/04/2016-04-19/index.html","1a07698aebed10db81822faba5e7f9e8"],["/2016/06/2016-06-16/index.html","6f3f2042591ca215cde7ec64003b5f72"],["/2016/09/2016-09-18/index.html","f253ce0a78fffa830f6f422191451bb7"],["/2016/10/2016-10-27/index.html","6e73b63d81627805f1ebe2559c9a40b9"],["/2016/12/config-switchresx-and-2khidpi/index.html","f19f2119598f4077914116df4420e253"],["/2016/12/improve-duoshuo/index.html","146f098aa510a42aa6fcac98bc38773e"],["/2016/12/use-travis-ci-your-blog/index.html","4c6e04e71f241f02ade06c299694feff"],["/2017/01/2017-iyahoi/index.html","8277c54842b9e482210b028d5e650c38"],["/2017/01/webpack-amd/index.html","9d9028956f74e367d7e5f32a3e056d21"],["/2017/04/kotobukiya-syaoran/index.html","3bba44500e590feffa4f61d66cb6a499"],["/2017/04/macbook-and-surface/index.html","8abd260335cadec61c3a9c368834149d"],["/2017/04/uc-hyakuya-yuichiro/index.html","3aca184d9e9bef2613be3e47c63c08a1"],["/2017/06/noragami-seichijunrei/index.html","9828c9bb232dad40a140292dea22083f"],["/2017/08/cross-compile-55-libev/index.html","f90c47bfcabaea0c8c4decea24e274b0"],["/2017/08/explore-service-worker-working-lifetime/index.html","3f7c90e7ff14bdc995c72a794464452e"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","7c95050a93eb030a8e766e2e6d35935d"],["/2017/09/record-user-login-status-methods/index.html","9c58dc240194414b40cdd14f4252c7c2"],["/2017/10/vue-typescript-early/index.html","ca4288f9066f4e3dbfa4d13d175d5f47"],["/2018/04/2017-end/index.html","6aef033e70776934a97438263089fce8"],["/2018/04/twitter-account-activity-api/index.html","4a42108cdcdc395b14253fe98dc03aae"],["/2018/05/buddy-complex-seichijunrei/index.html","b77519a2c7996c4a05474606b1aef81b"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","ec11809c47c0d650a54a772b2a5484aa"],["/2019/05/2019-05-17-google-io-tech/index.html","aaec88ef8ee9eaedf775756d19e0f6c3"],["/404.html","db3cecd33567576a2272a48daaaf7ea9"],["/about/index.html","75d67f4384b6c8d312440d14809ba5af"],["/archives/2015/03/index.html","67f886efb07615f64a2622c57e57b412"],["/archives/2015/04/index.html","31c2beb54db4e0b133abb40f05708232"],["/archives/2015/05/index.html","6754accca4ed835d84a8b5a0a2fe337b"],["/archives/2015/09/index.html","618d8d6cc360b5ad2c0f7b88d3f04840"],["/archives/2015/12/index.html","5f8beba8971da67d936ac902d6ac158b"],["/archives/2015/index.html","d51dc3ab22d7706ab43df1b9c59bf7b2"],["/archives/2015/page/2/index.html","5a10f94455f3f92079c7607b48b7eaba"],["/archives/2015/page/3/index.html","bdbef1211450a7272c03f0f4a62b5944"],["/archives/2016/01/index.html","2261db80dd5fa481e8c21e99c3891f6e"],["/archives/2016/03/index.html","fe23596cff9812d92f42fa9467793d00"],["/archives/2016/04/index.html","3a53a41325d0c4b748cb8e0c8df06882"],["/archives/2016/06/index.html","832aa7dff428578ded40d9713e50f45f"],["/archives/2016/09/index.html","cabecb471ec158e1e4ba17b3c51be9fc"],["/archives/2016/10/index.html","4e1bab48d7b2f37c134b61786cb7b8ce"],["/archives/2016/12/index.html","284d54810fda8a8bfd4c6b027a9e9cab"],["/archives/2016/index.html","50292565e94aa36de2c6b7ba983c70f0"],["/archives/2016/page/2/index.html","d2d6a44c56e60df31a293fd1df47393b"],["/archives/2017/01/index.html","15d4bde21c6aef25270880348d41f326"],["/archives/2017/04/index.html","da1c79de158d035ec0c2b14031de499c"],["/archives/2017/06/index.html","3d58f3ab62baf52b7e85933028936cbb"],["/archives/2017/08/index.html","3d7ce9e19d14c6ce50f8a6399ca2dfd2"],["/archives/2017/09/index.html","97175f6b6f8d26ce96458769de539e63"],["/archives/2017/10/index.html","ce9e2f2fa113c42702368e03fe6e3a8e"],["/archives/2017/index.html","ea12a42fdd676bf2e200663e46f46971"],["/archives/2017/page/2/index.html","e853564e16cbc535b7287fa7440e13b2"],["/archives/2018/04/index.html","942d6fa9aa3e7aa8def569bb2f54953f"],["/archives/2018/05/index.html","9e207465e309cc3d9c01395da14dd4b7"],["/archives/2018/index.html","0deac6c68480bfb9f213daafc219698b"],["/archives/2019/05/index.html","2ddb862312648b8ea599b42a44e8866a"],["/archives/2019/index.html","0ecb16eef84f84eb193ca89f67d6b117"],["/archives/index.html","32fa37cebbf33d453e6777430cff1082"],["/archives/page/2/index.html","a46ecc07e64445cf94cd922fc5e04e47"],["/archives/page/3/index.html","79430c68bcc93093f58a6e6eadca9928"],["/archives/page/4/index.html","bb04b2dfed9689f0af8db8755501febf"],["/archives/page/5/index.html","01b3fd32ee8e36a013451b2db6f5b57b"],["/archives/page/6/index.html","56c7555dcc9ca404f77c1f8da7bb3688"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","d0c2d0de621e8f54fbb4c1f573accf55"],["/categories/ACG/Music/self-copy/index.html","c4d1a90eed5fad5408ee642aa1e706ff"],["/categories/ACG/Travel/index.html","0b3119d197201fc539eee88742bca2eb"],["/categories/ACG/figures/index.html","5d2b8c0834673583e1fd657825a3a85e"],["/categories/ACG/index.html","aa10dcb2bd8c09818b1a9521af78fa37"],["/categories/dev/Front-End-Dev/index.html","0f43990f882700246c799346cc2267e8"],["/categories/dev/HTML-CSS/index.html","03dbbee2585b1cd97e45c6a36971835c"],["/categories/dev/android/index.html","6a3c74a0280a95b717ef3ed933bbf311"],["/categories/dev/cpp/index.html","f0e3b4ae708b6583c0e555cbe7b7460a"],["/categories/dev/git/index.html","061d87776425f81260f12b1a3ea0837b"],["/categories/dev/index.html","f990aa619bd827b1f81cbd137819b726"],["/categories/dev/java/index.html","232dcfcd10c790ea27e15d1cbc588b38"],["/categories/dev/page/2/index.html","bc9799bf1ecec6e0d1c8b7c7b4e55904"],["/categories/maintaince/blog-setup/index.html","10868d7905205585035e7b3effd175b5"],["/categories/maintaince/index.html","b7c558ab8897aad78736a17575892ab8"],["/categories/maintaince/macbook/index.html","6b11e38177b395e6e99ee1db85e298ee"],["/categories/maintaince/router-config/index.html","f42ee3d39802656cddd9f19cbb4b971d"],["/categories/notes/index.html","89b2a0311bafff673a5a4dbe66ad1b55"],["/categories/tricks/android/index.html","eddbfc145cb9cd578e81d90920e81528"],["/categories/tricks/index.html","67966fa0ab948331e5d5b39064abe9d0"],["/categories/uncategorized/index.html","8eccb7ffd6bfd87463c0fff350a433e7"],["/categories/works/Front-End-Dev/index.html","0395b225e83dc3b39661575d8f01c37d"],["/categories/works/csharp-wpf/index.html","e01f4f51c654600899f055ceac5a1240"],["/categories/works/index.html","7e33f719ab7eb9fe5c020ea6ccf16fc7"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","6099feab8ef3bf865b627caf502ddbbc"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","879cd5235ce2ca7bed9a10269cc7ec61"],["/ja/2015/03/WNDR4300-setup-log/index.html","5e06ceaf872af20121ae3fd8f758775f"],["/ja/2015/03/android-hostname-change/index.html","00ef7b3103e7d16df58d15db2e4a8c6f"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","53e8a5cb94583e5ae74bec7462cfc989"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","7f7a8020163f84a210311a16a3a2c134"],["/ja/2015/04/cpp-study-log/index.html","1fb89906937a82c0c0b928e033dfeb80"],["/ja/2015/04/github-pages-ssl/index.html","71007349fccd13fde0267cf9af9273d5"],["/ja/2015/04/hello-world/index.html","5c88650fbb86ff454375baeb1c6cb2fc"],["/ja/2015/04/hexo-setup-log/index.html","a66a63a659fb11b9b736d242bd2a706b"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","bf2b6b52107fa46f5512271f201bedc9"],["/ja/2015/05/cpp-inherit/index.html","2a577803dda1f54ecd2574933f1da132"],["/ja/2015/05/cpp-polymorphism/index.html","5d5bccda299cb31c4834dfc528fa9307"],["/ja/2015/09/android-root-ota/index.html","380be40fc65b15fd5e52ee136ea18dac"],["/ja/2015/09/java-learningNotes-1/index.html","9f39b811ede7b7be2965d096a8f06aef"],["/ja/2015/09/newblog-newlife-2015/index.html","74a8e82be01d5d5104904a9928f96970"],["/ja/2015/09/router-rebuild-2015/index.html","bcd4753e29699578a80df8bfb6299d87"],["/ja/2015/12/2015-12-21/index.html","e71a27bef25bdbd8f84018325d928723"],["/ja/2015/12/PixInTouch/index.html","fd1ce7cf88c6edd964ef5e657d9c6f06"],["/ja/2015/12/git-study-1/index.html","d44f3f3c9de49c1f6ddcd56ae109d3e1"],["/ja/2015/12/hexo-backup-and-migrate/index.html","c999aaaaf9425071bd49b4c627340234"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","f08c5e9cbccaf8695a3bc6253e64ed92"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","af410e1bdd805fefbab022d935055c1b"],["/ja/2015/12/router-reconfig-2015/index.html","4d255aef323fa3a7e2606cafa465d49c"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","f7c893e00f0e1424c8899eb201097919"],["/ja/2016/01/2016-stepping-further/index.html","8780e380c39a07ff389774f292b7b914"],["/ja/2016/01/Android-Study-1-22/index.html","d4b9a85d398e1b0d0f8b21d1fb254511"],["/ja/2016/03/2016-03-20/index.html","5a826af0d58207ce92a0ff060de81ec1"],["/ja/2016/03/GSC-535/index.html","1466a568f699a49652b45938c52fdb86"],["/ja/2016/03/gulpjs-1/index.html","0249c8cf27bea960a1973636157a56f2"],["/ja/2016/03/hexo-theme-paper-white/index.html","0d907a17dcc663b141e695b2b7d2dcf5"],["/ja/2016/04/2016-04-19/index.html","6a9a9ae778dc3404a72f1fd44f817e4e"],["/ja/2016/06/2016-06-16/index.html","d2607750a6fdb39d9d0222661fbc090d"],["/ja/2016/09/2016-09-18/index.html","6d8994643acf801a389897369d0a3883"],["/ja/2016/10/2016-10-27/index.html","2e4421a7ffaf924a1c8caaac9bb86cd3"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","d18450d17fec1251a072ac0dc8d6afc5"],["/ja/2016/12/improve-duoshuo/index.html","0f0e6af094c68bd19ed041cbbc07f728"],["/ja/2016/12/use-travis-ci-your-blog/index.html","b7cb7ced8fa094af8c2a7577bcecf0e2"],["/ja/2017/01/2017-iyahoi/index.html","fcd8b0af3e3de049eedbb05e5854a2c6"],["/ja/2017/01/webpack-amd/index.html","7a3c255c4528d24f517e9679e4f444e0"],["/ja/2017/04/kotobukiya-syaoran/index.html","3b9f130ee84746ffd86101093fafd869"],["/ja/2017/04/macbook-and-surface/index.html","c80362da44fbf96dd3b12c73b08c76df"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","40136d291ec32f6476287c0139261687"],["/ja/2017/06/noragami-seichijunrei/index.html","d308575360ef59f4664a3573fb3cb804"],["/ja/2017/08/cross-compile-55-libev/index.html","76b71b2463832b123d4cc9cff1c48086"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","07d3c8be2406552cec7fdcf151e09ac5"],["/ja/2017/08/hello-jp-world/index.html","3beadd2a1fd1f56ea8e6d8bc98a1c015"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","0ab5940012028fda7e19683ff01f0d06"],["/ja/2017/09/record-user-login-status-methods/index.html","981329b22ceb223e56cbf2dd65a80a1c"],["/ja/2017/10/vue-typescript-early/index.html","4aaa113e1ae7e4e20429fe26ab6a9975"],["/ja/2018/04/2017-end/index.html","730fe036492e82b5517afb664de3a707"],["/ja/2018/04/twitter-account-activity-api/index.html","0a481dbab154c708ff126907b6bd7846"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","79c7494d8abff29b963f024e7e6a30e7"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","4f62a8cdc3da61b0e527166e3c1fc096"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","d51ce8003bc7dfd82ffd6e659d50cfc2"],["/ja/404.html","f9c7d68ea3f9756792849881ca8dcea7"],["/ja/about/index.html","0905064bc4e7a994cbfb944730efea50"],["/ja/archives/2017/08/index.html","b66d33d522565adaf410ee367fa82dfb"],["/ja/archives/2017/09/index.html","010e44ac8db9b4dd02c66d2ce3984fee"],["/ja/archives/2017/10/index.html","be86c68c109eec212e9626b0a6302203"],["/ja/archives/2017/index.html","e603b0d9cc3c70476d46f6675d657a46"],["/ja/archives/2018/04/index.html","50f44ba68a9048490969e3f8029eeeee"],["/ja/archives/2018/05/index.html","f320d27768ac19f40d71b1c28654b4bd"],["/ja/archives/2018/index.html","f73b8a6b185aaf74be268146eb26eceb"],["/ja/archives/2019/05/index.html","8d8567c2ad5425dc2608185bf09e4651"],["/ja/archives/2019/index.html","3f87b09a9caf657fc68e2ea953dc4864"],["/ja/archives/index.html","a1628f040d57bfaaa8db223184589bed"],["/ja/categories/ACG/Travel/index.html","8130426c45ea3c1e55550f569df8b609"],["/ja/categories/ACG/index.html","0e726acd2c3f153767164076d027dac1"],["/ja/categories/dev/Front-End-Dev/index.html","55486e393f065502947532c84f3dd0a0"],["/ja/categories/dev/index.html","b90a2b396c41c8623e6f81cfdf795a7c"],["/ja/categories/uncategorized/index.html","1d98dcabd2427a5bfd7869c614fd751a"],["/ja/index.html","fb4d9aa2e7a15421d98ee4c23941b363"],["/ja/nihongo-test-page/index.html","9f103d1b3c4d76ec451389c2eb262ef3"],["/ja/resume/en/index.html","33f57d1bfb50d83bfc085bf914505b46"],["/ja/resume/index.html","8ff7ad3e4fb21967f3ccb7451046bd7e"],["/ja/resume/ja/index.html","d8c0b88d135640a6e87a7a7b64b2e815"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","0421723f0dcee4dfb9ded847421ac4ad"],["/page/2/index.html","095f21cb3f34985721c07be96c4f58ed"],["/page/3/index.html","f6cad0bdc457365842106569e1251cf8"],["/page/4/index.html","940a96828e99dad92af7716faa22796c"],["/page/5/index.html","373fdd6ddaf69c60910914bd00dbd9ae"],["/page/6/index.html","76c69a8986e0db2f7be6f52758a561d7"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","52da779636bd4fa4999c73939c68333c"],["/resume/index.html","adb9962640b2980cfcbd9d5c2d518267"],["/resume/ja/index.html","3c62b419605f5f85255b6c15b11db460"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","21a5e39ebf845d2d044b47a3c34a1366"],["/zh-cn/archives/2015/03/index.html","cb8fe27277d6b263e953cb047a79996a"],["/zh-cn/archives/2015/04/index.html","cfa631960f85a0cc1cfb9f0c884bdf23"],["/zh-cn/archives/2015/05/index.html","dd9aab104d7a6c104132f5f37a617727"],["/zh-cn/archives/2015/09/index.html","b0c270261e6471c11f2f66cc8c686b52"],["/zh-cn/archives/2015/12/index.html","4fbead3e8cddeaa894a288b149513d6b"],["/zh-cn/archives/2015/index.html","5508ea33178e2b29fe48eb3ebb0bd0d9"],["/zh-cn/archives/2015/page/2/index.html","7b5940c369a9b7d13be625f1e1e63cfa"],["/zh-cn/archives/2015/page/3/index.html","8803903a64c8863b710300dc5aaef477"],["/zh-cn/archives/2016/01/index.html","2266757d327d922451dbacf6c1603694"],["/zh-cn/archives/2016/03/index.html","7648741576f0ccdb94a21621b8364dd8"],["/zh-cn/archives/2016/04/index.html","2c4446e1bb1ccb1f1a697f95f4fc036e"],["/zh-cn/archives/2016/06/index.html","7e714edf4656bf6303f1c345e9250060"],["/zh-cn/archives/2016/09/index.html","a984d9089cce5b49e3db19bb402a7095"],["/zh-cn/archives/2016/10/index.html","57a2b2215d215a2e326bfb2684b3e4f3"],["/zh-cn/archives/2016/12/index.html","5b6c4a29256d6af7632886672f640ef4"],["/zh-cn/archives/2016/index.html","280f1112460714f9f7f999a903d772e2"],["/zh-cn/archives/2016/page/2/index.html","8faccaf4bc7248f8a2d5eed7a6f36cf8"],["/zh-cn/archives/2017/01/index.html","1db20954d5a9aab3567316bb0fe7ff20"],["/zh-cn/archives/2017/04/index.html","8a558207a16a3756a9f5399f7bf9f7a0"],["/zh-cn/archives/2017/06/index.html","30d8122aa5c6f1817d5555a9cacc8ec9"],["/zh-cn/archives/2017/08/index.html","ab99f97474441e51aa78765d1409bb03"],["/zh-cn/archives/2017/09/index.html","33c4cd2dbee90934b668e37ed4fe0c24"],["/zh-cn/archives/2017/10/index.html","e18f9d1eb0774654ed9d15977dc0aaa2"],["/zh-cn/archives/2017/index.html","8c250a6c49e8ed3fbdc6a84a50030c2b"],["/zh-cn/archives/2017/page/2/index.html","860dcac7f35d889028106b5914bcfe80"],["/zh-cn/archives/2018/04/index.html","86203f001614297f64c837e225d4cce3"],["/zh-cn/archives/2018/05/index.html","ebd499919cc013b2bed0a8c52ed5b13e"],["/zh-cn/archives/2018/index.html","636fb40273a5dc5600aa052c44a35262"],["/zh-cn/archives/2019/05/index.html","5dbe4e0c2f4f7c7fd693a5111fb78b18"],["/zh-cn/archives/2019/index.html","2aec653b78d4efb4b1f9ca78f355f48a"],["/zh-cn/archives/index.html","440120ec020511ea3ae343bc435c5d4c"],["/zh-cn/archives/page/2/index.html","2ea12e122ded760b79d4dac401391172"],["/zh-cn/archives/page/3/index.html","ecc506d54e24df1c1de6f89a739a8720"],["/zh-cn/archives/page/4/index.html","42c37005137c6f1d2bc838cb0df36872"],["/zh-cn/archives/page/5/index.html","432e84fea00d7d7332f0250843ba817b"],["/zh-cn/archives/page/6/index.html","31ea0ab7a033f7f3f56930a2258340fb"],["/zh-cn/categories/ACG/Music/index.html","2635aa022f170b94784e44677ca202e6"],["/zh-cn/categories/ACG/Music/self-copy/index.html","995d99574fe4f3f4e77cc3a72156d141"],["/zh-cn/categories/ACG/Travel/index.html","5a8c5287e4338441d6cee6b3965234fa"],["/zh-cn/categories/ACG/figures/index.html","950ae87a9952e28a1cc727bece55619b"],["/zh-cn/categories/ACG/index.html","8300a6b1097509fce29623cbfd4a1d14"],["/zh-cn/categories/dev/Front-End-Dev/index.html","3d047ba1585becec0b59f4294be64000"],["/zh-cn/categories/dev/HTML-CSS/index.html","ccabcbbe67161ac41c68fcc9d7f2ff65"],["/zh-cn/categories/dev/android/index.html","ccbdfaa78fbc1519fddf3bc521ccdb53"],["/zh-cn/categories/dev/cpp/index.html","aa67cf5771d041098e0eb3155ad8cb72"],["/zh-cn/categories/dev/git/index.html","b4cf593abfa8079674ae7799fcfd0a77"],["/zh-cn/categories/dev/index.html","bb1e0c0dc91b29bda2845adccbc1364c"],["/zh-cn/categories/dev/java/index.html","27d2538fe50caedaf1a4927e60e6c35d"],["/zh-cn/categories/dev/page/2/index.html","d21773661f4acde8e40b107892724eed"],["/zh-cn/categories/maintaince/blog-setup/index.html","b966dece6316f57717ff5f36926f035b"],["/zh-cn/categories/maintaince/index.html","09d4767e938bbdc38f5feb310f425a09"],["/zh-cn/categories/maintaince/macbook/index.html","a459c2e16bd1a6c8f801ab856db7d450"],["/zh-cn/categories/maintaince/router-config/index.html","830880a899d3098866db47f2171884a5"],["/zh-cn/categories/notes/index.html","8afce2d469506e0608bbfc84982152a2"],["/zh-cn/categories/tricks/android/index.html","e36c5a39c7e24ecf492f5a95f871ce6a"],["/zh-cn/categories/tricks/index.html","8d2310f7d23f29b2c561f39acdf6f5cc"],["/zh-cn/categories/uncategorized/index.html","1c15cc5e5e7c415e19106bf44d54e67f"],["/zh-cn/categories/works/Front-End-Dev/index.html","36bdf9072475afdb9da87e413a005519"],["/zh-cn/categories/works/csharp-wpf/index.html","a63e473f76a0b1c649889affb537b1cb"],["/zh-cn/categories/works/index.html","c6e16e8eaa2661bd6813a4f7b7309d71"],["/zh-cn/index.html","ad99356603b8d35d3e18ff48515b130a"],["/zh-cn/page/2/index.html","b017057a4951f5a2b0d5daac24c39339"],["/zh-cn/page/3/index.html","c62ec7a53ca4ca1ec5e6fe864da12d8e"],["/zh-cn/page/4/index.html","308b3083a8cf87b79b6e3757b1581422"],["/zh-cn/page/5/index.html","bbf3cf0a5e3ffd640edd1a655df8d82c"],["/zh-cn/page/6/index.html","e64382e19c6ad24e9925bc0ea1674ec2"]];
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
