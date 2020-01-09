/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","bbf127ed164d71b6c727fae8e50eec5c"],["/2015/03/android-hostname-change/index.html","1743828391dc8954a87ccb406a2ec9a1"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","8ff64197ff96fb8e6fa0378acf258c67"],["/2015/04/android-chrome-issues-with-webpage/index.html","16fce3b3ed63558ab16abb9a12e26ca7"],["/2015/04/cpp-study-log/index.html","516610128ae6cb71960cb87aa76e6f5e"],["/2015/04/github-pages-ssl/index.html","a20fbb1406593b03af2233aa274c227e"],["/2015/04/hello-world/index.html","355bf17b098566b3776326f37f796ead"],["/2015/04/hexo-setup-log/index.html","74e56fa3e8d75604c567e6106c875aeb"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","b79d258c7bcb04b61dfb1e408829b848"],["/2015/05/cpp-inherit/index.html","e9ce601415ce7d028a742305b7162920"],["/2015/05/cpp-polymorphism/index.html","9d447fb26dcb03fc71823237a7fa36f4"],["/2015/09/android-root-ota/index.html","51fdef14d280f00e1efcac50aeb740c4"],["/2015/09/java-learningNotes-1/index.html","4dcd0a2b94ed88c4b0862c3f6c74d538"],["/2015/09/newblog-newlife-2015/index.html","aff33fbd9216efa18ad532f6f5f35be0"],["/2015/09/router-rebuild-2015/index.html","94e5b166d6202b1212324bcc0a296a31"],["/2015/12/2015-12-21/index.html","42b25e9d6fbddffd82e7c6648e7e06a8"],["/2015/12/PixInTouch/index.html","a20075aa594c626806026ef1b7d33e17"],["/2015/12/git-study-1/index.html","52fe1fecef0782fa62ee524f9eb2aeb7"],["/2015/12/hexo-backup-and-migrate/index.html","45c8902ccab4339b233f0ac96ce606cb"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","ddf11669e30bb9ca465ceceabfd61d6d"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","150c6f80106d0368e393e191a1eac0d6"],["/2015/12/router-reconfig-2015/index.html","37846c603ce3de7558ae15a609ae14d3"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","fa81a0086d74e611d2be97bc0fe67e20"],["/2016/01/2016-stepping-further/index.html","5a90e8a3edb4571fbcd0586a3c69ee04"],["/2016/01/Android-Study-1-22/index.html","01bb0a4ca7c6980cdabc2af36e161258"],["/2016/03/2016-03-20/index.html","376a6d5e506e9f92c8574c32d5cbd629"],["/2016/03/GSC-535/index.html","76a5bdb083cec1faa09ae4f6c7cdb4cc"],["/2016/03/gulpjs-1/index.html","464fa789d15c5e146d536d883bf38404"],["/2016/03/hexo-theme-paper-white/index.html","dea93d9ef890608ac2798ab3aaf4f997"],["/2016/04/2016-04-19/index.html","69a2fce1c424da026ea9e1fd8ce4a7d4"],["/2016/06/2016-06-16/index.html","9b842d7bb19bd7046a29cfaae84c029d"],["/2016/09/2016-09-18/index.html","2555fb177622fca704ae3e14648a7c09"],["/2016/10/2016-10-27/index.html","2a9951fc13d0bbe686136d4cf144051e"],["/2016/12/config-switchresx-and-2khidpi/index.html","4bb839ae03dc91cb70c60cd6c99ea0c9"],["/2016/12/improve-duoshuo/index.html","83833928d3565d0f37c4be2a2528c140"],["/2016/12/use-travis-ci-your-blog/index.html","1dbeed08915dc3ce723b71702929e673"],["/2017/01/2017-iyahoi/index.html","911c057b86fd1e3cb5d5e9f53dee9082"],["/2017/01/webpack-amd/index.html","f3cdea0bd4b47bd1c76ed5632147328d"],["/2017/04/kotobukiya-syaoran/index.html","91029b4f6629992e8f22d96233defd77"],["/2017/04/macbook-and-surface/index.html","b293d49115eccacd58f89a70c0549ecb"],["/2017/04/uc-hyakuya-yuichiro/index.html","d047349aac4e3779427620789541b11f"],["/2017/06/noragami-seichijunrei/index.html","5ffa873d6a856feb5977cf42b832693b"],["/2017/08/cross-compile-55-libev/index.html","58b167acd7f7259e17e06a676ef2235b"],["/2017/08/explore-service-worker-working-lifetime/index.html","744335806ea7353a853c015301908d55"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","fb788f990a2a8ea59791b77f43a19706"],["/2017/09/record-user-login-status-methods/index.html","c80abf6b7468ce792bd0768943aa51d9"],["/2017/10/vue-typescript-early/index.html","9076db1f7133cc1b47e8a1797f3ff98d"],["/2018/04/2017-end/index.html","cd9fd405f4e0949b50e48f95ed49dc6e"],["/2018/04/twitter-account-activity-api/index.html","3078235a341322f86e18519de6ab0aab"],["/2018/05/buddy-complex-seichijunrei/index.html","b82f448134c367fff97707e930b0a57d"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","054d315133cb851649c5eff82f81f396"],["/2019/05/2019-05-17-google-io-tech/index.html","bae00d69f1d5e224b1783f622ef4aa66"],["/404.html","9adf4d526ee2295f7b98f3393c1eae51"],["/about/index.html","327ac65524ecf63fcb7b60e1a90685e5"],["/archives/2015/03/index.html","a9bc71003af0eca6a73bbed6ad51d0ac"],["/archives/2015/04/index.html","9ec93558a5feccf9dde04ea2314bf4e7"],["/archives/2015/05/index.html","8d84460e59cbde543e056ecc7b86114a"],["/archives/2015/09/index.html","8dca82c8b2ada8c129a369a3213a31ed"],["/archives/2015/12/index.html","542f9a7f34aa9616d661475ffb87bf41"],["/archives/2015/index.html","675e3520c85f981413d7ceafb992f723"],["/archives/2015/page/2/index.html","90188c3dfaf56d76fd53950ff3f2788f"],["/archives/2015/page/3/index.html","3f518bd207ba3889ddb0b3b65caf3e7b"],["/archives/2016/01/index.html","fb9a2daa1f7a1cf539d930e9741e6558"],["/archives/2016/03/index.html","30c8a77c11b1b5bff3cf564731ec9cab"],["/archives/2016/04/index.html","7701d6c31f9f58758285cba7c402ed8e"],["/archives/2016/06/index.html","bca3b1424d4227e3b1ea94020f150ae7"],["/archives/2016/09/index.html","4b1e4c69240284052b9ef715e1b9724b"],["/archives/2016/10/index.html","c4b6108fa996544fea387622b16dda6c"],["/archives/2016/12/index.html","6119258965388f4c9345d913ae9fdc9b"],["/archives/2016/index.html","2cd5e2eecda14531ef7f6c6622729b5c"],["/archives/2016/page/2/index.html","79e0503508062e8d3d64d14c296d989b"],["/archives/2017/01/index.html","696ac6671e557f834c86f6d156a7d0db"],["/archives/2017/04/index.html","ad7d0b360e1d69b886eafe88c5afcdc5"],["/archives/2017/06/index.html","85f63c03f196dc68db218ac4f10add39"],["/archives/2017/08/index.html","7fc257856d65c5492ba37b787ef6c439"],["/archives/2017/09/index.html","4978e47c3f255066dd855cee2cdf0cb9"],["/archives/2017/10/index.html","809b02afc57558f20dcdbe26b7f0708d"],["/archives/2017/index.html","97999be57773b46e7b041a0d496bda54"],["/archives/2017/page/2/index.html","c08998c84ede2b310933dfc4e06f755b"],["/archives/2018/04/index.html","0939ea3d4880cf1c2fa59ac44e693b55"],["/archives/2018/05/index.html","22347d94e2330e3fd8bf174bcb080dc8"],["/archives/2018/index.html","9b98cbe6fe080c2ab786e63460649817"],["/archives/2019/05/index.html","2faea43a8273af48dd8dca7624a54cb1"],["/archives/2019/index.html","873583e9ee1ef623420ead56f8dd96b7"],["/archives/index.html","ccb98597bab3b6856512a19699e22fc3"],["/archives/page/2/index.html","03339252ce10432015af96cf83b45a22"],["/archives/page/3/index.html","d23a0a1546c795353abd95a37578000b"],["/archives/page/4/index.html","19102c8cbf44b708a2f4bf384878cc32"],["/archives/page/5/index.html","28741109ebf0e3c6fa62b6c89d94c00d"],["/archives/page/6/index.html","2d9f24d90d6dfca7514f3097226153fb"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","66a1ba5b49e17a63750351c13605c536"],["/categories/ACG/Music/self-copy/index.html","22fc04ed252644725baeb7301a65d462"],["/categories/ACG/Travel/index.html","9029620e44f4271463a089e2e20c096b"],["/categories/ACG/figures/index.html","b2a778e9a7c519bfb5072034e0fe5557"],["/categories/ACG/index.html","bee61ef93d6e704b791a8d299f5d329d"],["/categories/dev/Front-End-Dev/index.html","40a28bb9f0fc32aa4a8ea9c436449652"],["/categories/dev/HTML-CSS/index.html","8ec4c74dfc454283439f7cb6419aca1d"],["/categories/dev/android/index.html","74faa27e753140801773ce71671179b6"],["/categories/dev/cpp/index.html","136ff502f7cbe896c7e65d1e5075f011"],["/categories/dev/git/index.html","9214e005fcd5b8c16f3000852559816e"],["/categories/dev/index.html","bbfacfb613b229f6dd6224e296c982b4"],["/categories/dev/java/index.html","f9dba38f982c63169187e8943c8f34e9"],["/categories/dev/page/2/index.html","019d13c1e041cd411f7608946fbdb030"],["/categories/maintaince/blog-setup/index.html","48ba18eb11a63fd82384fae826e84c90"],["/categories/maintaince/index.html","0a011a68df2baa5616b99f0548d99160"],["/categories/maintaince/macbook/index.html","4002ff42f22f2cf6f04b33e2ae1994e1"],["/categories/maintaince/router-config/index.html","c3aabd3446c909a9cfc834f47f22bdad"],["/categories/notes/index.html","21aa307bad8c854433c037a20cedb90f"],["/categories/tricks/android/index.html","571212eadda9fa39e57b20b98664bb96"],["/categories/tricks/index.html","861efae8ada38dd20198593a9e6fd661"],["/categories/uncategorized/index.html","515614821f157ca3436c80c66572768d"],["/categories/works/Front-End-Dev/index.html","1fd22aa0718147af00e01afe77704772"],["/categories/works/csharp-wpf/index.html","a278264dc96d75db93e0f16ff585388d"],["/categories/works/index.html","40b2ca4f824407f94be7aef9b101c3be"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","6099feab8ef3bf865b627caf502ddbbc"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","33fe0a8d8e1fd3db596ee625f0468c16"],["/ja/2015/03/WNDR4300-setup-log/index.html","b95c54311b8419d7f312c75aedc0b785"],["/ja/2015/03/android-hostname-change/index.html","051e4089561779ef88e917a5bca5bab6"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","192449b7611fb2ab23d39f37548d209c"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","9b3bc7bf2acb575ec32fe9c203fa5275"],["/ja/2015/04/cpp-study-log/index.html","a95c17b4159c8f3d307e4a30e7648ee9"],["/ja/2015/04/github-pages-ssl/index.html","4ac92e5558b09642c84aeabdace4b3cc"],["/ja/2015/04/hello-world/index.html","f23cfcf174c34fd25b7e75f16b2214b0"],["/ja/2015/04/hexo-setup-log/index.html","e82a5cb5b46306a65f0a173efa358716"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","ba6ed7fae7fda7e1e07a4980185c5a8b"],["/ja/2015/05/cpp-inherit/index.html","5a85947b6b7661395a4426d1441e326d"],["/ja/2015/05/cpp-polymorphism/index.html","1dabbe5e05c5488024823c841eb9a1e3"],["/ja/2015/09/android-root-ota/index.html","7215d2ae92afca503d839453510a89a4"],["/ja/2015/09/java-learningNotes-1/index.html","48fec24562ea895d438993fbd9f62db2"],["/ja/2015/09/newblog-newlife-2015/index.html","6ca4afe360056967ebc95467215195f4"],["/ja/2015/09/router-rebuild-2015/index.html","320641489adfc0d8c21bbc29d4e70b4a"],["/ja/2015/12/2015-12-21/index.html","983ab3aa79b9d538f1b3c506699d3fe5"],["/ja/2015/12/PixInTouch/index.html","254940fbe666a39429567dd05d13b8d8"],["/ja/2015/12/git-study-1/index.html","e065e2f404de35270fbe62646be02507"],["/ja/2015/12/hexo-backup-and-migrate/index.html","fd195734c8bd74638f3e00f07011b269"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","90bb36d1335ce211362b607f64459fa9"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","65846277d5108cb211eaf7e20e72ab4f"],["/ja/2015/12/router-reconfig-2015/index.html","afae08ef427a4c7d12a620913c628373"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","50b6a60fcbbd53c2778642d0ca820dee"],["/ja/2016/01/2016-stepping-further/index.html","169cff931ee2ac2d61e056e5e71559a6"],["/ja/2016/01/Android-Study-1-22/index.html","4bbd60a9cfecff8a5b725ce85ab968b5"],["/ja/2016/03/2016-03-20/index.html","7a2b6f4ed295208daad9d6f95c2df253"],["/ja/2016/03/GSC-535/index.html","2125d70d71c96c9eca3e068c62e97971"],["/ja/2016/03/gulpjs-1/index.html","42adcecfe464357de3a99b136d27b592"],["/ja/2016/03/hexo-theme-paper-white/index.html","495796e11d5a0ce77ef3c9ef6db59435"],["/ja/2016/04/2016-04-19/index.html","04fbd2e6d112d03a5a59110dd87b6443"],["/ja/2016/06/2016-06-16/index.html","f19dd142d32a2819664bc442cade0e5a"],["/ja/2016/09/2016-09-18/index.html","863dda48f62c1576f09a0078f37dc622"],["/ja/2016/10/2016-10-27/index.html","90f2422268cb5a23de029a7fc2e14004"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","c524fddaae8957077f145d1e84a130d9"],["/ja/2016/12/improve-duoshuo/index.html","8bb56b1bca3af2f8ad5df588a5011e3c"],["/ja/2016/12/use-travis-ci-your-blog/index.html","e1a89bb4c2e7a28c8dfa63c407783ef0"],["/ja/2017/01/2017-iyahoi/index.html","18712303c7898405b986ad8900baabd6"],["/ja/2017/01/webpack-amd/index.html","662abc98a2ef750fa0908bc8fd637eaa"],["/ja/2017/04/kotobukiya-syaoran/index.html","9afc42a1a3c940d62a972cda0b98f99a"],["/ja/2017/04/macbook-and-surface/index.html","b61d2d8d40ac4182c996621297a0a233"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","8fe30640b3298892ffdb75a7e19bab19"],["/ja/2017/06/noragami-seichijunrei/index.html","3f15e022960c882749f9467cb3c1892d"],["/ja/2017/08/cross-compile-55-libev/index.html","bb6245471cd6b790b052fd46324b77f6"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","56da0da939be36d7652338fc1b2ef6c8"],["/ja/2017/08/hello-jp-world/index.html","190afc93c93545aea190c212d89bfbf2"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","2fea0de5a438953a68928b847a4772b6"],["/ja/2017/09/record-user-login-status-methods/index.html","05b06b6feba5c4e86a4350cd682e792e"],["/ja/2017/10/vue-typescript-early/index.html","fd6eef61aded39a01dca34e1af213181"],["/ja/2018/04/2017-end/index.html","c9c23d3b8f80bffe7e57e1e1625bb3d5"],["/ja/2018/04/twitter-account-activity-api/index.html","8ff3ea8c2db4f4518a9e6f6fb15757af"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","f8960ba0e5025107e784c38670e27245"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","08fc017a89eeea7a0ca4f09bca55069a"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","0ed8638b19b82efd62819315de9d1eaa"],["/ja/404.html","e18ea3da30e0c347334907fa7562f078"],["/ja/about/index.html","1ec0f2c193146bcea23e6bd6c8e02645"],["/ja/archives/2017/08/index.html","d86d29195598251b94cd631a1f901812"],["/ja/archives/2017/09/index.html","bc63a08f644cbe746fdd80f1dd68504a"],["/ja/archives/2017/10/index.html","0170878c3052024c40b86c86d11d10a0"],["/ja/archives/2017/index.html","82c4a2fc445819a3698f25f0e37bb4e5"],["/ja/archives/2018/04/index.html","3d308d8dfdae734e368aff6a2e8a6971"],["/ja/archives/2018/05/index.html","fd061972bb020e72a1d23a4b245edf0f"],["/ja/archives/2018/index.html","23ee59a29fd63e721aa12385063d8731"],["/ja/archives/2019/05/index.html","01c11ffb6bf7d3566fc33cdd1b399d42"],["/ja/archives/2019/index.html","114cb3d62a3ea05ca94223a4c5efb835"],["/ja/archives/index.html","3d687a127ce067c23ef92b939c002a11"],["/ja/categories/ACG/Travel/index.html","69d5d43ee37f7329ba45a20e7b88ae34"],["/ja/categories/ACG/index.html","1b4cfa6719e0b7d0dffb4894988cf40d"],["/ja/categories/dev/Front-End-Dev/index.html","a8c0a09ac24e775374971a85e44d7897"],["/ja/categories/dev/index.html","e6cc506924c2e606e1a898881ac7256d"],["/ja/categories/uncategorized/index.html","a3183585a67a066c7ef1e7306f3e7b2d"],["/ja/index.html","72bd403613545da49e79bc310d20998b"],["/ja/nihongo-test-page/index.html","f723de2eac7ab305da9780e438c19b31"],["/ja/resume/en/index.html","5ba906b1b887357bddecb62a771772ea"],["/ja/resume/index.html","2b270c932e91d409dacb584e0d20a467"],["/ja/resume/ja/index.html","d9ae8aa37ed1e5704672bf448de914ac"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","388a331b1e8c3989621aadee4680e231"],["/page/2/index.html","e57731ee591e583cd70e071760c3625a"],["/page/3/index.html","10ded45293348cefbdecabfbfd291286"],["/page/4/index.html","d95fa1ce9d327dd68042ce2589a39bfb"],["/page/5/index.html","8986cf1676cb20f9ca500aa1682e76df"],["/page/6/index.html","08e22ae505f0e644394908feb40d1691"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","dbade019cd568a6f0a6c1c1651ba1c77"],["/resume/index.html","1f4802e7cd77104f190e932c84470088"],["/resume/ja/index.html","8b1f11eb0c584d8f6c3cecd914c54f87"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","1ca44d9f3bbeb5114bd870562d7df160"],["/zh-cn/archives/2015/03/index.html","998e9f6cb004ce3235fb6c2d3a88c00c"],["/zh-cn/archives/2015/04/index.html","0d6c4b92c126b61c24c1afb463e7d91e"],["/zh-cn/archives/2015/05/index.html","f18c3bc9284ce6b95d8b073e37163c9b"],["/zh-cn/archives/2015/09/index.html","efaba7711365dde5b381829763fc7e00"],["/zh-cn/archives/2015/12/index.html","e9c2395682a13fca20e94bc4b65b707d"],["/zh-cn/archives/2015/index.html","c3e8b34e39a378fb0a5520efe66e7f50"],["/zh-cn/archives/2015/page/2/index.html","ab49ab44400e823f3797482595d49fcd"],["/zh-cn/archives/2015/page/3/index.html","0499ed1afd695e6252a81cecfb51096b"],["/zh-cn/archives/2016/01/index.html","6958a000799cc126ea6c5e27b639a52c"],["/zh-cn/archives/2016/03/index.html","153cfe2ab4a3740d4d69b38da6e0d865"],["/zh-cn/archives/2016/04/index.html","85abf0c70423c58c6191daea244f8ab6"],["/zh-cn/archives/2016/06/index.html","1f8430bd3a96b70d3f99a04b8f4ee679"],["/zh-cn/archives/2016/09/index.html","7dd431e84b53c0b213d8a32226221cf8"],["/zh-cn/archives/2016/10/index.html","c063e85be90ef7ee3eb8cab4c4fc54f2"],["/zh-cn/archives/2016/12/index.html","718929788621058cb6f0c226af928b2c"],["/zh-cn/archives/2016/index.html","aae260ca9fe2ea5353eb6579a8633698"],["/zh-cn/archives/2016/page/2/index.html","f84e50ae4e8bd87876f657af4bebb992"],["/zh-cn/archives/2017/01/index.html","27ecd2150ffc2a0b90037556215c952c"],["/zh-cn/archives/2017/04/index.html","e116cda89ed5bc386b9a66f9bb7e8961"],["/zh-cn/archives/2017/06/index.html","60063b83d39f5afe870a8753f32697ae"],["/zh-cn/archives/2017/08/index.html","b1b4c7f30975411bb33cbc0feaa5181b"],["/zh-cn/archives/2017/09/index.html","6c372ee3bdb19bb8630c19aff05dd3fb"],["/zh-cn/archives/2017/10/index.html","791142e2250ebeadd563b5a6ef330942"],["/zh-cn/archives/2017/index.html","0e013ee21482f3eaa0de235afaad9b67"],["/zh-cn/archives/2017/page/2/index.html","2475b3434cd36f6aea312c491ab3804d"],["/zh-cn/archives/2018/04/index.html","42a7ed07d3e2955f1fe52b5b442a5752"],["/zh-cn/archives/2018/05/index.html","37cee0f542e6f54fcb3f6999d10eb04a"],["/zh-cn/archives/2018/index.html","9f98a18e880c7c5f33f86251b6b26c45"],["/zh-cn/archives/2019/05/index.html","0fbedbb62d91bfae2f7a4a94fe4337d7"],["/zh-cn/archives/2019/index.html","445a27aa5ec79a6db43b64ee420faa58"],["/zh-cn/archives/index.html","e2dff2c845671ec4e57a2c8143b0fe04"],["/zh-cn/archives/page/2/index.html","b405b55255806afe2491a65722f12cb2"],["/zh-cn/archives/page/3/index.html","7e84643414e80e3e523951c4a5d40407"],["/zh-cn/archives/page/4/index.html","5a1d8250be8be839a8395260e6a3b07f"],["/zh-cn/archives/page/5/index.html","028ff713b18f8fe546090a70b04baaaa"],["/zh-cn/archives/page/6/index.html","935a1d8b3e5eb804bf0ab3a5c3ea5d15"],["/zh-cn/categories/ACG/Music/index.html","18feb349d59c430339f9896343635247"],["/zh-cn/categories/ACG/Music/self-copy/index.html","d59d0ad3044a3d23287462ae87db4c55"],["/zh-cn/categories/ACG/Travel/index.html","665c1709ed50465f267be28f2fb74a09"],["/zh-cn/categories/ACG/figures/index.html","5da501855656b7d2871ed7f9a09ed3b8"],["/zh-cn/categories/ACG/index.html","2eefc2df8a027f393efb1c0b9b10dcc8"],["/zh-cn/categories/dev/Front-End-Dev/index.html","d38786fcdaa8ad0c4e4fb3cee2f8de4b"],["/zh-cn/categories/dev/HTML-CSS/index.html","f2e7fd7641db2a6e94b0bfa4eb8e6aac"],["/zh-cn/categories/dev/android/index.html","e0e33d18f863dc0fdc2ba0add8885b02"],["/zh-cn/categories/dev/cpp/index.html","71f4b2ca3f68d33e6e5c5d5354d9a84a"],["/zh-cn/categories/dev/git/index.html","823a96eef22f3a1ffd98fce238aff3ce"],["/zh-cn/categories/dev/index.html","a4336fc2a01489b000c7b1938d6f27c6"],["/zh-cn/categories/dev/java/index.html","49467af9531ddea760ef9ef31247769f"],["/zh-cn/categories/dev/page/2/index.html","913bad7f6ac7f4ff3b90950bf9aa3567"],["/zh-cn/categories/maintaince/blog-setup/index.html","b201bc590f6eab68cbb7db9f006733df"],["/zh-cn/categories/maintaince/index.html","1bb5e3365665d3d285335eae8cbffb24"],["/zh-cn/categories/maintaince/macbook/index.html","e0bc67f9c0d403eb2b26673eea6460d1"],["/zh-cn/categories/maintaince/router-config/index.html","aaa37a76634ea47ae8cffcee55768904"],["/zh-cn/categories/notes/index.html","c9bb292f67d3c57918c8d89268de35e0"],["/zh-cn/categories/tricks/android/index.html","c40d92b51b4eb5e6b7ea54fb57d12054"],["/zh-cn/categories/tricks/index.html","a9753e5cb2d8994944604e097500db64"],["/zh-cn/categories/uncategorized/index.html","1429a289a3d830177b666460212f1894"],["/zh-cn/categories/works/Front-End-Dev/index.html","4a171844897424872107a4d970041adc"],["/zh-cn/categories/works/csharp-wpf/index.html","a3c9ae1b5c35668cdedd34f8b878da91"],["/zh-cn/categories/works/index.html","967abd4f658cf57b4eb6c08f75a41a6c"],["/zh-cn/index.html","0a2b1510b7b455bdc15b4609aecd9282"],["/zh-cn/page/2/index.html","1c0c859d252eb58390541f4c2b765838"],["/zh-cn/page/3/index.html","d814f49e4861c5d31aa21c67178112ca"],["/zh-cn/page/4/index.html","cb9547c63833770b41cb1b0562fbe8fe"],["/zh-cn/page/5/index.html","dcb2a61d574146d9109437efc7e227a5"],["/zh-cn/page/6/index.html","5ae4f03ce49bb6506b95a9973d988af3"]];
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
