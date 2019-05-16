/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","d098bd4a24e8a4738a31a69dc7354ceb"],["/2015/03/android-hostname-change/index.html","0f44102f0513d79235a74ccc10248ec1"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","b4656c16aabca6f05313bbc71435f5f9"],["/2015/04/android-chrome-issues-with-webpage/index.html","4c6c0d8ba6e1f378bf771bcf72264e90"],["/2015/04/cpp-study-log/index.html","1370ede707f74b7203ace3e7e8401448"],["/2015/04/github-pages-ssl/index.html","7f16ce8d0f617e551ccb5455bb201385"],["/2015/04/hello-world/index.html","6a7660abf728ec7a0e5af779c7171c41"],["/2015/04/hexo-setup-log/index.html","5ce12820ca034776e5397279db637971"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","e7118af92c417c6cad51a281eb689558"],["/2015/05/cpp-inherit/index.html","3173f4b9cb8a6068497fed3bfb187233"],["/2015/05/cpp-polymorphism/index.html","7574e2423b4e0b5f275e31ba10dd5d30"],["/2015/09/android-root-ota/index.html","efc368ebcc740e0f20e3c36f65cc7b66"],["/2015/09/java-learningNotes-1/index.html","52981d66ed6a34419b50b4e8427ddae7"],["/2015/09/newblog-newlife-2015/index.html","b341bf066110a274e9aec91d550e53f5"],["/2015/09/router-rebuild-2015/index.html","4b7b3c9b4142081fe58c0f74664cd628"],["/2015/12/2015-12-21/index.html","0ea782dc6d1c046fa10349a5409e5c15"],["/2015/12/PixInTouch/index.html","9ea95a2d1392f7e3a545bf8fa7983b17"],["/2015/12/git-study-1/index.html","c1c4a85724dfffd22b7b4a22a2e951a9"],["/2015/12/hexo-backup-and-migrate/index.html","cf5881aa1d9df87254e96b4ac110ad9d"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","5814bd289de4035e16c3e6db90ecb42d"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","3f9e2ec6e0eb1c56e0d6511df725d7eb"],["/2015/12/router-reconfig-2015/index.html","c61ce5554f2755ecc758415e99f2d7f7"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","c76f235ff64b695fce42515834b951d1"],["/2016/01/2016-stepping-further/index.html","bf52d2d4d98e33c15ee5a68c13c98b71"],["/2016/01/Android-Study-1-22/index.html","9f0cb19d706eeac74ff31f2a99e4031c"],["/2016/03/2016-03-20/index.html","756cd126ec4f678b18dee403174d7d55"],["/2016/03/GSC-535/index.html","a575ad6fd5d35760d63485ce55b35361"],["/2016/03/gulpjs-1/index.html","a1327c2d4db142cee0eb20d7427e09ec"],["/2016/03/hexo-theme-paper-white/index.html","4e84d887e4424a8b231c91908aefa029"],["/2016/04/2016-04-19/index.html","68bf9d056e5f3d7df90a507d0a04272e"],["/2016/06/2016-06-16/index.html","e023a0238b62c58e1d8c51393f7997df"],["/2016/09/2016-09-18/index.html","db7aba74e1a343ebd0827eddac2486ab"],["/2016/10/2016-10-27/index.html","e1fca240841414d2b5201b704f172ae2"],["/2016/12/config-switchresx-and-2khidpi/index.html","5af6b861e92e7886bb6a5034becc4c1b"],["/2016/12/improve-duoshuo/index.html","2e18e9934e90137b386f21a5398404ff"],["/2016/12/use-travis-ci-your-blog/index.html","5fc967cf311857d462af51e601ce1765"],["/2017/01/2017-iyahoi/index.html","19ece3cb2646afe2f7de256786d45536"],["/2017/01/webpack-amd/index.html","7136ea4f4feb4aa775a3bc919b584156"],["/2017/04/kotobukiya-syaoran/index.html","fe11357586398c55ed61242e33dfb94b"],["/2017/04/macbook-and-surface/index.html","ae0b693c9741d23b2c36c527a1bf6f44"],["/2017/04/uc-hyakuya-yuichiro/index.html","da7e554af3d74dcdf9a40e9f58097360"],["/2017/06/noragami-seichijunrei/index.html","c666f4ec4e51f32c3c6588297c594f3d"],["/2017/08/cross-compile-55-libev/index.html","ac575785427ba3d66baa1b5a19846aea"],["/2017/08/explore-service-worker-working-lifetime/index.html","306c10c8138c9af5f8a26abd616c7a3b"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","3b097fe87799946eb25797ac57639ffa"],["/2017/09/record-user-login-status-methods/index.html","ef8f3dc821c4703235def1359a55041f"],["/2017/10/vue-typescript-early/index.html","14548f747a44ad21674bef09075ab09e"],["/2018/04/2017-end/index.html","3ef9ef322bf3f5157c60f2e2bc675fe7"],["/2018/04/twitter-account-activity-api/index.html","32d58020620963a766d99b6133ad0a4e"],["/2018/05/buddy-complex-seichijunrei/index.html","a50b3c0132452b9a216c7b0e00c578ae"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","c5f2d63983fcb5dab9f6a3aabb3556a4"],["/404.html","c5d796331f72d0a725496d9d484d0d6b"],["/about/index.html","843c46d774cf9040b2942e85456df1aa"],["/archives/2015/03/index.html","ff04e1ce305ed6463cb59f1f7e9f0483"],["/archives/2015/04/index.html","15bb4493beba462f3cd7f756aac743f9"],["/archives/2015/05/index.html","200e7a4b900a273b7060689b87fdb82e"],["/archives/2015/09/index.html","a4765b7581c38bc0699802d76c9cbc30"],["/archives/2015/12/index.html","a21ed0aaab627031a823cd3f6688b92d"],["/archives/2015/index.html","5079f48e0facaee064a6e39f9842c944"],["/archives/2015/page/2/index.html","a88dbab92ef93bf1d2183dc3ba98a00d"],["/archives/2015/page/3/index.html","9556321e7bd5b44d3c60f87e46021a11"],["/archives/2016/01/index.html","dd3c4eb7347e85cfbd9eedc3eba20006"],["/archives/2016/03/index.html","013496822ccc73b082e51530f8293251"],["/archives/2016/04/index.html","bb568ae7408a733d0cf5cac97cae80dd"],["/archives/2016/06/index.html","3d09871ec896de653e847c11b0fdec9b"],["/archives/2016/09/index.html","0a4e0551d4ed2935ad5eb511c0cff88f"],["/archives/2016/10/index.html","183607a5bc718c35432b8df532ffa776"],["/archives/2016/12/index.html","22de8bf187c696997d28a44f0d340d4b"],["/archives/2016/index.html","091f5a14d8dfa4e0599ac1c7e0d5527b"],["/archives/2016/page/2/index.html","a54d7f427fa5309b64d5a74cf471b3e8"],["/archives/2017/01/index.html","81770f6223d737a757ce016f05f3f2f9"],["/archives/2017/04/index.html","b101b84b410ef0e9db9153bd298a7db6"],["/archives/2017/06/index.html","0fd849f6d7f11ed47eae0abf37b8d63c"],["/archives/2017/08/index.html","47ba84da5f4bf80e3c532826bf432c14"],["/archives/2017/09/index.html","d4744520d1b2e00b4581fbd7814c24e6"],["/archives/2017/10/index.html","1842c3c1e276fdfa12a96d1490e51806"],["/archives/2017/index.html","9189b41ef05ab1b042d67ad4f7ebde67"],["/archives/2017/page/2/index.html","f2bbc717730410f72931f411d38ca46c"],["/archives/2018/04/index.html","660772bbfa2a452c06f71e86bee587c0"],["/archives/2018/05/index.html","5a4718af8996d3c50476c258dfff928a"],["/archives/2018/index.html","80663e23310b11644840e966821afdb0"],["/archives/2019/05/index.html","9df816cc4297a4c4375e18c2d07622e4"],["/archives/2019/index.html","8ddc9c49ce63aaacd16ba7eef40cccb1"],["/archives/index.html","459f91c8e950cec98d5bb19b0e6beaa7"],["/archives/page/2/index.html","68bb09517262bbb0cbd1a5004d682ad3"],["/archives/page/3/index.html","37281b131528011dffd7d581ac5dab54"],["/archives/page/4/index.html","05af0242596351c7a9c5f001eb13e0c6"],["/archives/page/5/index.html","eedc457bc32f1a26105bf693ed131874"],["/archives/page/6/index.html","943bf7beed8f8c8a9e456b554bb6be74"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","62299dcd4fd1e0bfb8048d66c65cedee"],["/categories/ACG/Music/self-copy/index.html","9957f79d50400be9079a91844efc555b"],["/categories/ACG/Travel/index.html","1704881565fd905250ebb3916ebc95d6"],["/categories/ACG/figures/index.html","28989c28a8e2acf9efb563686636e83a"],["/categories/ACG/index.html","c50f3742a0108c4de564e9af72b51d2b"],["/categories/dev/Front-End-Dev/index.html","c8d42099324b545e2f28adc84ae40040"],["/categories/dev/HTML-CSS/index.html","a5483a79a83c57552749b8fef52576fd"],["/categories/dev/android/index.html","40821b8c2cfe37fa1288d174307d7610"],["/categories/dev/cpp/index.html","097d9141e796a40cc5d950a5bcd21c48"],["/categories/dev/git/index.html","6ea781a5aa57f5627203190f1329e7e0"],["/categories/dev/index.html","cef08bdba1880298cdb6d25378481576"],["/categories/dev/java/index.html","095500c73b25d05aebd09b5d5491f971"],["/categories/dev/page/2/index.html","321c15814d279d2a443ecaf637956174"],["/categories/maintaince/blog-setup/index.html","a3b8c8908ef35b018b43fe1d17646385"],["/categories/maintaince/index.html","1a1ac8012bbbdcafedaa1ffc7b94db4e"],["/categories/maintaince/macbook/index.html","4f1c6dfe53bcafe3f68d558008a42728"],["/categories/maintaince/router-config/index.html","017732d8ad581c94d9caac62020785ae"],["/categories/notes/index.html","a67ae803bb927d490440d92456adf88f"],["/categories/tricks/android/index.html","792e5b7420e35bcf2590171502571d4d"],["/categories/tricks/index.html","f1ce78bb002fef9de3fe50a1330e4ec5"],["/categories/uncategorized/index.html","51ffc873e51c0b43d594831adca15cab"],["/categories/works/Front-End-Dev/index.html","5c0f86cab72b7037d64e34a7f630400c"],["/categories/works/csharp-wpf/index.html","959c97abda560cc445258e47b2226f1c"],["/categories/works/index.html","87a553f8329ec50a3ebddb50f22fe6a3"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","3bd8a1a6f9e63c17a1ff96cf87a5fc7f"],["/ja/2015/03/WNDR4300-setup-log/index.html","f42ca4e96528e3d0614dbf0e52e24bf4"],["/ja/2015/03/android-hostname-change/index.html","6e286a0cc308473bd7363780f466ad4d"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","dd466d517412e3c3051b0dc5bc3c89ca"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","86bfda48000e9f177dd03e3860724006"],["/ja/2015/04/cpp-study-log/index.html","2cefaaa0de8371828fec48dda04f92fb"],["/ja/2015/04/github-pages-ssl/index.html","f3d5c7f8cc1fe812445ef5e6a2e3d3f0"],["/ja/2015/04/hello-world/index.html","8d7d3a2e4c81aae68760beb92353737d"],["/ja/2015/04/hexo-setup-log/index.html","442e57b5d96eca2fe69d99a0aa6d231d"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","fa4e78d95f27aa2ada35853c11a5d219"],["/ja/2015/05/cpp-inherit/index.html","5bfcea17bf9fd45b81e487a29b8eb4d1"],["/ja/2015/05/cpp-polymorphism/index.html","66a0551ed1ea8396d5a2add0dcf56a14"],["/ja/2015/09/android-root-ota/index.html","6714ae39ffec5110a425420b88e5c21f"],["/ja/2015/09/java-learningNotes-1/index.html","5b7b4a760f45a73e27a10e4a39065a32"],["/ja/2015/09/newblog-newlife-2015/index.html","6489761a331a321794f376bd5e2a9744"],["/ja/2015/09/router-rebuild-2015/index.html","1df29cefadd8b5d0a384136079208e4f"],["/ja/2015/12/2015-12-21/index.html","c0fc0963ed4f8565b1cc2cfada63333d"],["/ja/2015/12/PixInTouch/index.html","3ee0122df950c46efdb441bac311791a"],["/ja/2015/12/git-study-1/index.html","b837347314f9eba15d2e20a4764122ac"],["/ja/2015/12/hexo-backup-and-migrate/index.html","31e2396610d8cf049dd8b7131996df5f"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","aab6d4002ac8eea430251037eeb14e1c"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","8e9b583b4c6e0d91c48e6f6567de7f07"],["/ja/2015/12/router-reconfig-2015/index.html","ab4ef0b6e260137270702df322c8a2b2"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","3b8f2f300dce25dacc3613d3c5632bcd"],["/ja/2016/01/2016-stepping-further/index.html","df89fc869e566aadd455d8bbe833c8bd"],["/ja/2016/01/Android-Study-1-22/index.html","e78f9250a2494d68f6cc45b793b2eac7"],["/ja/2016/03/2016-03-20/index.html","a41e40ba00ef37f5eee6b865740832d7"],["/ja/2016/03/GSC-535/index.html","36a2d8283ebf39421c0879611570fe8c"],["/ja/2016/03/gulpjs-1/index.html","5483504acb5b613fe0e9bf1c11ad6644"],["/ja/2016/03/hexo-theme-paper-white/index.html","a084a54d1658be823293ba4f6c0dda84"],["/ja/2016/04/2016-04-19/index.html","0f62d19ed1ff5f843754e325470f29fa"],["/ja/2016/06/2016-06-16/index.html","0053754c45d72479f3b7155790d927d1"],["/ja/2016/09/2016-09-18/index.html","ad061e18cd95f92f9907d89941b85a0d"],["/ja/2016/10/2016-10-27/index.html","07879a1a0aa01598b7a6fae3729cc299"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","4ce34ef2db8a6bd389d4998db53b05af"],["/ja/2016/12/improve-duoshuo/index.html","b9e895698ad6307dea6ac7633acfb299"],["/ja/2016/12/use-travis-ci-your-blog/index.html","3b040ea727f3214ff9c0c86daa91b3a1"],["/ja/2017/01/2017-iyahoi/index.html","e975ffbee68a8f0dda3b4951c38f372e"],["/ja/2017/01/webpack-amd/index.html","d96dd8574ffc302d8c12f09ada1f811f"],["/ja/2017/04/kotobukiya-syaoran/index.html","774f4485e619d5ca8005f74151d7e9b7"],["/ja/2017/04/macbook-and-surface/index.html","a7a7545cb9a4b2a4e972c8b055a50c68"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","f71d9802c53777fe1e886b0251fc00d6"],["/ja/2017/06/noragami-seichijunrei/index.html","05e172202f5c8a41a9f6dc6e936c44f3"],["/ja/2017/08/cross-compile-55-libev/index.html","49949f3f09682f1903a5b94ef698ada0"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","c280d7f18584e8e08914a9bcb26de5f8"],["/ja/2017/08/hello-jp-world/index.html","744d0c006bfbbdc910e77fdc58e1a220"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","317234c775fabf3978d414d4d853de17"],["/ja/2017/09/record-user-login-status-methods/index.html","cc43bc53ebc649499e2904a3b4442385"],["/ja/2017/10/vue-typescript-early/index.html","1867cf2dfa48dc77d13d0018ebd5b0ab"],["/ja/2018/04/2017-end/index.html","954177857bcecd36c45e239c44b80c83"],["/ja/2018/04/twitter-account-activity-api/index.html","17578368f42f2616cb0907212c84bdaa"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","f3ffc2bfe55a55891d7402af2c83c373"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","ee41e58addff6c031d1c0ff0057b1eff"],["/ja/404.html","a6fd4b31427d7598be6f49174e32b697"],["/ja/about/index.html","0b8c6fbc348fea5720ec447747963a21"],["/ja/archives/2017/08/index.html","a651a6096afe4bbdd75d460865917d04"],["/ja/archives/2017/09/index.html","dde0856938cdcb829af87e2eb92a1493"],["/ja/archives/2017/10/index.html","c39cf3afdf61ea5b9c399b25e8919545"],["/ja/archives/2017/index.html","691dcfccf693dc29de9526d7b8071436"],["/ja/archives/2018/04/index.html","6b0f8c4dac4c9527db1829d22672ded6"],["/ja/archives/2018/05/index.html","9336aa03b172325ac5be2c0c4c6a78f6"],["/ja/archives/2018/index.html","8a6dc1b6804dc2356e2747fb650be693"],["/ja/archives/2019/05/index.html","7c505b1147f02c49e5f770e923c7b0f7"],["/ja/archives/2019/index.html","31db70049a923b6457fe90129d5a57ae"],["/ja/archives/index.html","e1c2de1d9b443b80fc9c1b9a830ed3be"],["/ja/categories/ACG/Travel/index.html","7d55b7f875bf007f9bb3d2943cd4fa3c"],["/ja/categories/ACG/index.html","c35ec68c80b6cdea03ed5f2f95bb9111"],["/ja/categories/dev/Front-End-Dev/index.html","5799a99567557222da605426a1d689e3"],["/ja/categories/dev/index.html","43a87de4c7cba60d29b3d6c4e1cc22ec"],["/ja/categories/uncategorized/index.html","ce0206929fa8a8aeac4a44e483cd0d1b"],["/ja/index.html","9c55685fa3f3eacae91bfbfb5d14b303"],["/ja/nihongo-test-page/index.html","4ecafab007cd76cb4bf8e0545487d5bb"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","ffac33b3cf104a611c61895bf63185b7"],["/page/2/index.html","42b4b32dc2dad7f6b437d0648de22d66"],["/page/3/index.html","08ef3e1256cf6cd14017dd0910f2c05a"],["/page/4/index.html","8575ea53038e717c1bfd5b70f4289949"],["/page/5/index.html","81b316d5fd0a2f380b313be1f9e8b200"],["/page/6/index.html","0c24e5e21dae8559f78e9c69afbdf4d0"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","03629771ef78997a2329cf86c6fd0596"],["/zh-cn/archives/2015/03/index.html","1e72ab34b99c1bb4525d1e3d31dc3bfd"],["/zh-cn/archives/2015/04/index.html","07d5ae6f51741cb31422c29bf224219e"],["/zh-cn/archives/2015/05/index.html","9899e390b54c1600fb1064f5e6e6e2cf"],["/zh-cn/archives/2015/09/index.html","680e7093d726c0e08a28fc071874e7ef"],["/zh-cn/archives/2015/12/index.html","5eaed8c3b5d9b92fb5817e203dd5eb40"],["/zh-cn/archives/2015/index.html","2d75a6d438e49c869470c1e967bf5c95"],["/zh-cn/archives/2015/page/2/index.html","56279762c488056ba916d68bc2eb86c2"],["/zh-cn/archives/2015/page/3/index.html","ef92e2da9e51369da104a2675123011e"],["/zh-cn/archives/2016/01/index.html","290f407785059303b52566b5005d0e09"],["/zh-cn/archives/2016/03/index.html","e5ee9613262556a48ae75cfb13fae47a"],["/zh-cn/archives/2016/04/index.html","e340b39610a8606db18ffb9a6c8b621e"],["/zh-cn/archives/2016/06/index.html","98f527cfa6748029e85398a88af1dcc7"],["/zh-cn/archives/2016/09/index.html","f88f6f962c70e9ddd3fb95321d26f1cc"],["/zh-cn/archives/2016/10/index.html","bc5a50ac4187bfcd2951170f2e27979b"],["/zh-cn/archives/2016/12/index.html","2f63fcfc86f0d664f1bd47053432ea06"],["/zh-cn/archives/2016/index.html","6e836817dfba8db773b33a5348962fab"],["/zh-cn/archives/2016/page/2/index.html","18fe2919959d2f0060934124b5e4663a"],["/zh-cn/archives/2017/01/index.html","4c317dac15ad22b6fb7f593af3c5c5e7"],["/zh-cn/archives/2017/04/index.html","4dadd2ab99eaf67d80b2ba1076be0416"],["/zh-cn/archives/2017/06/index.html","e288ffb660597cd017abf493c320d560"],["/zh-cn/archives/2017/08/index.html","f4568417537eafd7889ba4cca2c34ecf"],["/zh-cn/archives/2017/09/index.html","998be8660c6af94aebb6aae64a4ae925"],["/zh-cn/archives/2017/10/index.html","aa94b52712ccf181286b6bdc1c2ec938"],["/zh-cn/archives/2017/index.html","18657780a72731a5a16f30f116adad63"],["/zh-cn/archives/2017/page/2/index.html","7fca2190e8dbfe92b441593558088864"],["/zh-cn/archives/2018/04/index.html","cac3ff4bae370049749d0a660a3f3163"],["/zh-cn/archives/2018/05/index.html","84091c4a5838e12c06807778fc1dbea6"],["/zh-cn/archives/2018/index.html","dd3d5dff753a22ab55ac85338edb4027"],["/zh-cn/archives/2019/05/index.html","46bf932f32b7c2938c642679379cbd09"],["/zh-cn/archives/2019/index.html","ab475aa904f753776c660d79611f2b66"],["/zh-cn/archives/index.html","fd050e97f108d4e6836402077a6c570a"],["/zh-cn/archives/page/2/index.html","18f4d9d7180379998887fa83d693926d"],["/zh-cn/archives/page/3/index.html","2dfdf1b24575b335b952c3317ba68ac7"],["/zh-cn/archives/page/4/index.html","15b0361c2e66b771407516788ea285cb"],["/zh-cn/archives/page/5/index.html","a25b2d6ae0465d6a5a38cdad4ed73e3c"],["/zh-cn/archives/page/6/index.html","d8cf2f54c4308b6960af4fda0ff271c9"],["/zh-cn/categories/ACG/Music/index.html","2e5faf92c0efe17ec9eba17108514b88"],["/zh-cn/categories/ACG/Music/self-copy/index.html","e3237838f4a4923f1e39473f4bd456de"],["/zh-cn/categories/ACG/Travel/index.html","25b693af2ca732affece484915f0b612"],["/zh-cn/categories/ACG/figures/index.html","a908b2e6e19847d90d77a834c7117231"],["/zh-cn/categories/ACG/index.html","beeeec308c157c10dc3a98c036ad2303"],["/zh-cn/categories/dev/Front-End-Dev/index.html","6c2f62c7c9141c6500c89b55c2b0994a"],["/zh-cn/categories/dev/HTML-CSS/index.html","91c6dfdeda885380eb550e05aaa7d2fb"],["/zh-cn/categories/dev/android/index.html","e1e049b80e7418980bdc316e9178a1e8"],["/zh-cn/categories/dev/cpp/index.html","6e3d3f15185d271b2c09da15300b9d86"],["/zh-cn/categories/dev/git/index.html","f284e7e8e818fe9f661488063e4afaa9"],["/zh-cn/categories/dev/index.html","142308d5c32b7ecc858ec84f544925d8"],["/zh-cn/categories/dev/java/index.html","aca4ff3ed49fbcaaaed6ba5cc9d16ab6"],["/zh-cn/categories/dev/page/2/index.html","977c10a1b5f380acd0cad57078e52dc9"],["/zh-cn/categories/maintaince/blog-setup/index.html","ab24770127b748cf8fd94e82541a9879"],["/zh-cn/categories/maintaince/index.html","7d427a34b4b354281bef0a547e19de3d"],["/zh-cn/categories/maintaince/macbook/index.html","1008c65ef2705eb096a55d149673eeec"],["/zh-cn/categories/maintaince/router-config/index.html","2a5e2a3c3b64c436b5cb5936d431de28"],["/zh-cn/categories/notes/index.html","95e63ada566368a81c4ac09aaf4f414a"],["/zh-cn/categories/tricks/android/index.html","2c17268785ff77e140757d15e76e47f6"],["/zh-cn/categories/tricks/index.html","3c541baeb7625ffad0704f03d7dc88ca"],["/zh-cn/categories/uncategorized/index.html","380f808b3c08564c388422063e50a4f7"],["/zh-cn/categories/works/Front-End-Dev/index.html","33264b977bdcc342d68c775c2b316940"],["/zh-cn/categories/works/csharp-wpf/index.html","e9a949fb4da495a7f8615726204dd222"],["/zh-cn/categories/works/index.html","1965c136b512505013cca85c4dba4ed7"],["/zh-cn/index.html","94415df3d0d7131b195c78aad6caab76"],["/zh-cn/page/2/index.html","798a144d794b92ade081c464d7661d47"],["/zh-cn/page/3/index.html","7fa651fd5a4fe1009c86c879e1cc1243"],["/zh-cn/page/4/index.html","156876fc91870afc7419bed3a3d453b2"],["/zh-cn/page/5/index.html","e9447956f34e663cb9f9d20631c17f6a"],["/zh-cn/page/6/index.html","e180d009f50bbbca7beaea6b1770c457"]];
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
