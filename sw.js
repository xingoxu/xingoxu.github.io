/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","671dc87d25638629e21e354be9ef8e30"],["/2015/03/android-hostname-change/index.html","d685079443d83b1491067d3d19a9f3d0"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","15b9dc244d3dd5df2a5301bff052b8f9"],["/2015/04/android-chrome-issues-with-webpage/index.html","450be88e331c000593035ffed053e305"],["/2015/04/cpp-study-log/index.html","3c89631d740e40220c19ec34fca9a311"],["/2015/04/github-pages-ssl/index.html","7c2e1b257ec314439e6975ad16360f37"],["/2015/04/hello-world/index.html","72be050e46e0728d8bee6a67c520c0ae"],["/2015/04/hexo-setup-log/index.html","4e2608c92600a21e6977c62420c02828"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","743bc0c1bb9df32b184ca67101595867"],["/2015/05/cpp-inherit/index.html","2ea7996c4d193f176d60519dd8868ac8"],["/2015/05/cpp-polymorphism/index.html","185391b45560fc1073b9626f422092a2"],["/2015/09/android-root-ota/index.html","21943cd8897c16673dce76d71215f48b"],["/2015/09/java-learningNotes-1/index.html","efa5535d35e3a97e1addcae4e6eaa8ac"],["/2015/09/newblog-newlife-2015/index.html","29cd01aff0daf8f11b55fc4bd8ca01e0"],["/2015/09/router-rebuild-2015/index.html","924d363305b551c412cb9824ddfd345b"],["/2015/12/2015-12-21/index.html","0ca93b8f65e7a882c434f45eb257058e"],["/2015/12/PixInTouch/index.html","d799e12052d58000b17aebcb0ca3b114"],["/2015/12/git-study-1/index.html","fd2f8adcb1bb17894f87ba4a6bb9f0a4"],["/2015/12/hexo-backup-and-migrate/index.html","64af90ed90c620e9ff07fda5aeab5157"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","1c67b0a1720f4381ba814fe2c5dacf65"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","4b3529ab5b1af5a6ac4f9a7a0892a4fb"],["/2015/12/router-reconfig-2015/index.html","2f1efc8592d408adde48386e5b424e3d"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","33b1a30b71d1792941401a193ce347c6"],["/2016/01/2016-stepping-further/index.html","693995f823b762d12bf850b3970da2cb"],["/2016/01/Android-Study-1-22/index.html","7b9a93e81a29b4f05608ef9e5feb1ec5"],["/2016/03/2016-03-20/index.html","9be079ccfaef7809fba21816dd792685"],["/2016/03/GSC-535/index.html","fda32b5bc2319737327899b1fea4de60"],["/2016/03/gulpjs-1/index.html","24c172eb70fb1c384b2f30c5cc2afc30"],["/2016/03/hexo-theme-paper-white/index.html","a9f89b2f5bfc1a0baeaa586b950ccc0c"],["/2016/04/2016-04-19/index.html","2a8595fb17b2b71b38e5dfdf402e7d96"],["/2016/06/2016-06-16/index.html","8706e75110cfac37051cc83eccabf4ec"],["/2016/09/2016-09-18/index.html","01dea4bb4c4ab03568f77e7ec2ab5aec"],["/2016/10/2016-10-27/index.html","a38b3eea684f8dc3cf0fccd22fee80df"],["/2016/12/config-switchresx-and-2khidpi/index.html","74de3704481111c1dcfbcf28bc3246bc"],["/2016/12/improve-duoshuo/index.html","66d3756d5bb03cd2f0623daead91a3e1"],["/2016/12/use-travis-ci-your-blog/index.html","94d18d39cb70cff2fd3ca594530dee1e"],["/2017/01/2017-iyahoi/index.html","5028369326f7386382e898ace9e0a338"],["/2017/01/webpack-amd/index.html","7746c96bde638cb2e29a1c13fa1f2906"],["/2017/04/kotobukiya-syaoran/index.html","a8fa5fb6f1d014caed7e31c6aa0564f0"],["/2017/04/macbook-and-surface/index.html","9ec79eb093114edb501236e541b4f9fd"],["/2017/04/uc-hyakuya-yuichiro/index.html","88d927b66ae87e29a194f444644dd147"],["/2017/06/noragami-seichijunrei/index.html","f71ebfe34f598608ea485b48e5d56dff"],["/2017/08/cross-compile-55-libev/index.html","86f44b756ba5b38b8f603c8dbc303a88"],["/2017/08/explore-service-worker-working-lifetime/index.html","3f8bda0f3980252064e2b161cf6f8672"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","c15c868891073ec465763d57e945f61f"],["/2017/09/record-user-login-status-methods/index.html","f5079b1f0a7e07c39e1019be601b0109"],["/2017/10/vue-typescript-early/index.html","0fbf00adc395a808a581f47c3a8c3fdb"],["/2018/04/2017-end/index.html","ad8a28ca11218e6fece47a484f6dd8a9"],["/2018/04/twitter-account-activity-api/index.html","05740766ae7cf450b873bc81c35ce916"],["/2018/05/buddy-complex-seichijunrei/index.html","27443b0769905dd08d65c66e16eb328a"],["/404.html","cc119ba2e1b3e0bf788875d5850da28d"],["/about/index.html","7c3df225ba8f957b20c97deb4c8c5945"],["/archives/2015/03/index.html","41cd3672302e06068c463c25a16f33f6"],["/archives/2015/04/index.html","54e981f0821c12f1d5c5630b524a6856"],["/archives/2015/05/index.html","e8c627fd5c280b542c8d16c1855933b4"],["/archives/2015/09/index.html","8e88633349b202588b9dbe54079ac4d5"],["/archives/2015/12/index.html","4630139ce013b5f38e4690233a1fdd08"],["/archives/2015/index.html","e62c595410b88767dd1335b30242c96c"],["/archives/2015/page/2/index.html","6d8a246681bfd26bf5fa8279d0a8a42c"],["/archives/2015/page/3/index.html","f99447b887b9b6643c004391dc9b1a0a"],["/archives/2016/01/index.html","dcfcb3eac4becbbca4c8a9d74e9bd590"],["/archives/2016/03/index.html","6e47b6b948159920e3e01f7e4e9ff201"],["/archives/2016/04/index.html","0f9feeccbc59e6e1804a0a05e53e7cf3"],["/archives/2016/06/index.html","f701b412db45172ead29f9d41f349d76"],["/archives/2016/09/index.html","a071433b431587a8798a0cd7c9d86cdd"],["/archives/2016/10/index.html","cf56ba87896e4b5484d75aaa00c6062c"],["/archives/2016/12/index.html","022f5c997b3a231aa0898d3364ef5f5f"],["/archives/2016/index.html","a03d898ac89bb5e2bcf47b445afc53e9"],["/archives/2016/page/2/index.html","2d42262b362657dfa243410aafec4600"],["/archives/2017/01/index.html","db1599fbbbdd540f6510693767aea187"],["/archives/2017/04/index.html","bee8557be9211ffb0e2bf9f681631058"],["/archives/2017/06/index.html","60cc3bc2cb4fc56bae8c8e2d8ccf1452"],["/archives/2017/08/index.html","7a73f586d25374b2bc2c1ae893d1299b"],["/archives/2017/09/index.html","e60e335afd9108c33d8987480b605293"],["/archives/2017/10/index.html","0a879e0965ad412e2717323c81c7a51d"],["/archives/2017/index.html","7b00454fce31a773de859f164a32852a"],["/archives/2017/page/2/index.html","e90dd7c918f2792de005642d254ce4eb"],["/archives/2018/04/index.html","b0eb28443fd3109a244a68550956e246"],["/archives/2018/05/index.html","1429c4ffd9637afdc559a206a145f6f0"],["/archives/2018/index.html","3d0fb4b325e9a0716c67de1255ebc8b5"],["/archives/index.html","97fca16ba9ca2fbe56b290d6de14f5ad"],["/archives/page/2/index.html","2d126a8a1534101d762d848f63b82006"],["/archives/page/3/index.html","316cd4ef3d94acc56dd3012a6f556682"],["/archives/page/4/index.html","6bb3437dd414aecb7f9eef6825c27ead"],["/archives/page/5/index.html","5868998fff0250ebf929706e5a3ec31c"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","e585f21e9deaea7f9c084ef3a75dfd44"],["/categories/ACG/Music/self-copy/index.html","3dbfb44b48a9dbfad0c2d8a0158329a9"],["/categories/ACG/Travel/index.html","2e67f49ce945e1cad7fe066ce6580b2e"],["/categories/ACG/figures/index.html","922a842207d07a46eebf16baf3126e99"],["/categories/ACG/index.html","ec767476d0743c691959d48785a8aef5"],["/categories/dev/Front-End-Dev/index.html","3b84b4e5e4ac049fca003dd6fef5c9c4"],["/categories/dev/HTML-CSS/index.html","0e5fe74b0f54662077504fa55e901d88"],["/categories/dev/android/index.html","9c87f48368ce7d9a2360252c2db728ad"],["/categories/dev/cpp/index.html","4879ef84df7f74c28df4a746ce2eecbb"],["/categories/dev/git/index.html","d26f8af2453636a3cfb702e47474a1f2"],["/categories/dev/index.html","6303c1197474c28e000a367ad30e7d85"],["/categories/dev/java/index.html","f1ea6f704d4ef22d19bbe064df15aa8b"],["/categories/dev/page/2/index.html","69c3e6e3d28f2468a53ab788ac71e3b1"],["/categories/maintaince/blog-setup/index.html","8ee882f8296f585b26ed6a753c805bfe"],["/categories/maintaince/index.html","4d92e814e18c117dc0b7445dcd40bbed"],["/categories/maintaince/macbook/index.html","c13ba989b537d0be9c5c12a44d1c2589"],["/categories/maintaince/router-config/index.html","acc4d7abb1629cd096e1e1d41f90a8a1"],["/categories/notes/index.html","a06b298a685f6030fdc0df3adfcd56e3"],["/categories/tricks/android/index.html","fe2580e665bcab770faa1c19058a1736"],["/categories/tricks/index.html","3937bb5637e50b4bc7929c1c0efe8fc4"],["/categories/uncategorized/index.html","b974375811cd60e866f02d135e17c957"],["/categories/works/Front-End-Dev/index.html","c39e7723330c23ef0d4f975a4e8fe926"],["/categories/works/csharp-wpf/index.html","2bf171209b98ef81af59384e1921d276"],["/categories/works/index.html","cffa84974bab7fbc7248173e84bb8330"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","037c978f65c4a72aefd1a9cd4d9567e9"],["/ja/2015/03/WNDR4300-setup-log/index.html","96b63cdaa9c3bf84577cd6e036be27ec"],["/ja/2015/03/android-hostname-change/index.html","1a4850cc90010c785d346890af567776"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","0c5863baf6997a52c99e5e0a959c839a"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","e07ea22346e89a5274dbd6038f5296ad"],["/ja/2015/04/cpp-study-log/index.html","716958449ff557e3da04a05cd5904d7a"],["/ja/2015/04/github-pages-ssl/index.html","90781ef8fac54a66c9fad8942f980f6b"],["/ja/2015/04/hello-world/index.html","029635f6518f88a6a25f3d2b7bd29829"],["/ja/2015/04/hexo-setup-log/index.html","72008e5240ca85445457e683437a1240"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","692fcdce173c1a254d1b44bbe321ec1f"],["/ja/2015/05/cpp-inherit/index.html","a0dfba6af2eb261cf4f72346d48bd4c5"],["/ja/2015/05/cpp-polymorphism/index.html","cf16d0266074c9bc1f422f08be84f3b7"],["/ja/2015/09/android-root-ota/index.html","cc3a159ccdf2880171add373b179cd6b"],["/ja/2015/09/java-learningNotes-1/index.html","a18a69cabeff17b787119e72ded8deaf"],["/ja/2015/09/newblog-newlife-2015/index.html","7b981aeae1f8cc743ae1d88942b1419a"],["/ja/2015/09/router-rebuild-2015/index.html","0bcbfc7e2df941ad8347cf4a0e919f8b"],["/ja/2015/12/2015-12-21/index.html","6894b64ef9e0090ed7dbc0fd02852670"],["/ja/2015/12/PixInTouch/index.html","1d12cced394f77fdc07fc219e8a4661f"],["/ja/2015/12/git-study-1/index.html","7fc392b1ff625ee19218603dd7cc74bf"],["/ja/2015/12/hexo-backup-and-migrate/index.html","a96b729f38daa94ed9fc97076b675ce1"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","4ea08a74efc9ed92650a90899ee53df9"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","b1283118f7810fba59e83a8f09bc7128"],["/ja/2015/12/router-reconfig-2015/index.html","332ed3ac3c38c68931def53b0ea2ecdf"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","3b9be770b128a8cb099a971b9bb9b454"],["/ja/2016/01/2016-stepping-further/index.html","aa117b471d843b6ba5613a2157b03a18"],["/ja/2016/01/Android-Study-1-22/index.html","67578b1f92dafd443d2201e141dcf863"],["/ja/2016/03/2016-03-20/index.html","86671f6d71b946220e6c2c27643ed512"],["/ja/2016/03/GSC-535/index.html","00d89fda7c943fb46d8a03995b2ed7d3"],["/ja/2016/03/gulpjs-1/index.html","f4252daed5710e29feef17bc16f02c7d"],["/ja/2016/03/hexo-theme-paper-white/index.html","a14dd715e34e443baea00e1ab2a30611"],["/ja/2016/04/2016-04-19/index.html","1c8d40ee539b6cebe922843c3eca7e10"],["/ja/2016/06/2016-06-16/index.html","3beeda89ddfec6dd1b3c7efbb5841679"],["/ja/2016/09/2016-09-18/index.html","87f3a2d5a40d08de2b5333767a85a042"],["/ja/2016/10/2016-10-27/index.html","6f0ef0435a50b93a6abeb825b2372890"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","05cb0e4beabacb60b7ac35b481b293d3"],["/ja/2016/12/improve-duoshuo/index.html","511b9e57699ff9d9714aaaa8c8368840"],["/ja/2016/12/use-travis-ci-your-blog/index.html","51293fa304a21833a10dcc612591b511"],["/ja/2017/01/2017-iyahoi/index.html","ceed300dd15d0f673f369421bfa35c8f"],["/ja/2017/01/webpack-amd/index.html","b902b5c8403ee1e905ec258bf0f5f6fc"],["/ja/2017/04/kotobukiya-syaoran/index.html","9266333271e305937110472c6a821828"],["/ja/2017/04/macbook-and-surface/index.html","727c3977e4d09fcab5b3e6264280fe53"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","47e45c59c852db1cb76e119b8fc4e81e"],["/ja/2017/06/noragami-seichijunrei/index.html","8916e8515aecb19b73af8e74a602b01e"],["/ja/2017/08/cross-compile-55-libev/index.html","2cc819372eed108dfe7f29713577fd7b"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","83ef5c639534c725f84faeb03a39eaa8"],["/ja/2017/08/hello-jp-world/index.html","1760e61c2d260edf4a8b7d92b399cda6"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","b2180234391559ebca6d89412dade765"],["/ja/2017/09/record-user-login-status-methods/index.html","80827753ddf91858773196cc8e78961f"],["/ja/2017/10/vue-typescript-early/index.html","2e167d237e7e395ce19c97be00139d6b"],["/ja/2018/04/2017-end/index.html","a57d39beb9c22d2498eea695f3d61bad"],["/ja/2018/04/twitter-account-activity-api/index.html","d38c73cc219b2ef88b1454fa336deb8f"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","2f3429b728f749fb2211b95b9e186873"],["/ja/404.html","31ec3e5a0a1595ddcfd5dfa8c189af5a"],["/ja/about/index.html","e516424bc2a0313d315998ea857cb698"],["/ja/archives/2017/08/index.html","8e03bb55c78985b3c59311f84e0a653a"],["/ja/archives/2017/09/index.html","1d241ed224b88491c3e8907797bc3320"],["/ja/archives/2017/10/index.html","e78277d28682f5015a26f33a4ecd55cd"],["/ja/archives/2017/index.html","a073e7e6601a3478ae5ec96ec06a4bab"],["/ja/archives/2018/04/index.html","6974ca571b21eb50fef62ff1b0256627"],["/ja/archives/2018/05/index.html","677a82fe954e11898d0c77927082b4a2"],["/ja/archives/2018/index.html","854d9aa1ebb8b574f07dd7283381236f"],["/ja/archives/index.html","b0cdb1f994a1ffa90e241938ca95f0b9"],["/ja/categories/ACG/Travel/index.html","4b27590743babbd4e8aecb70af0df295"],["/ja/categories/ACG/index.html","b388e8b30a6fcc74acd5fcf80a6a9715"],["/ja/categories/dev/Front-End-Dev/index.html","093519b2d8d160c2f2f487910965d639"],["/ja/categories/dev/index.html","8bee0813fff84ffd78fed4dce47de7bc"],["/ja/categories/uncategorized/index.html","0b88408033e5c1105cffbdd223b48c04"],["/ja/index.html","a6b4898e141f011826f84db0125f84ee"],["/ja/nihongo-test-page/index.html","650aa0d586b834d03c479ae7459492bf"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","6a38b1cef7a4521066054ba04d931c9d"],["/page/2/index.html","4d52f1576ddfcc6c15c630f52aa9be48"],["/page/3/index.html","97e846c693a84cd6c80d5b31f9bf43ce"],["/page/4/index.html","3ae3e706cf34f0994724038742693b5e"],["/page/5/index.html","3163952aea779b3c31a292b05754cde6"],["/page/6/index.html","9673a451f072bc0132287edb9a48e3b6"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","15782cafd79958242e411f948bca2d38"],["/zh-cn/archives/2015/03/index.html","c56b2518ca5aa41f1df02931674b427d"],["/zh-cn/archives/2015/04/index.html","547b23687b800c8c550aa56e7efab0e1"],["/zh-cn/archives/2015/05/index.html","a146f330f8acb71b9c113144c87286fd"],["/zh-cn/archives/2015/09/index.html","609ddd6cdb8b95042fdd0e377f50b4b5"],["/zh-cn/archives/2015/12/index.html","b2a15d1e67dcf503197cad42ecf27009"],["/zh-cn/archives/2015/index.html","652966104eaf89da8fc180c6dca07fb0"],["/zh-cn/archives/2015/page/2/index.html","eff5259e0d5f7d69eb9330efe79f15f4"],["/zh-cn/archives/2015/page/3/index.html","e04d806c832fff545e1773c88f9676f0"],["/zh-cn/archives/2016/01/index.html","17420285ac4465cd97310d6af1988284"],["/zh-cn/archives/2016/03/index.html","4b2d3414514cc3520d8ce705f2d0f368"],["/zh-cn/archives/2016/04/index.html","6fd4d7657632035c74ddf709c5b5acc4"],["/zh-cn/archives/2016/06/index.html","990e64dca311dcfe1b3b41607073787e"],["/zh-cn/archives/2016/09/index.html","ef614cc318b27f0e503a469d5c44f7cd"],["/zh-cn/archives/2016/10/index.html","ad07a705dea27d2c2a1a75e3f3d0cd8b"],["/zh-cn/archives/2016/12/index.html","c877900fa2111c36be2b863e820c4a50"],["/zh-cn/archives/2016/index.html","40b877993e0a458533a491eb31d9ee26"],["/zh-cn/archives/2016/page/2/index.html","bf7062d2e6f8127010e0e7b26bc2f3bb"],["/zh-cn/archives/2017/01/index.html","53dfbff045d9516438c04a7a989b393e"],["/zh-cn/archives/2017/04/index.html","834bae390ea93bb168acf51fd1b4ea51"],["/zh-cn/archives/2017/06/index.html","dcc2a1e954f7d665abd177d902c9eea2"],["/zh-cn/archives/2017/08/index.html","38962c8435e3c601db259c695bd8ef1d"],["/zh-cn/archives/2017/09/index.html","106db9e83b8d45eb6243f47892adbcbe"],["/zh-cn/archives/2017/10/index.html","6c6eb43679095959acd45adbb201deb3"],["/zh-cn/archives/2017/index.html","654932acdc6995f06f14561b78a68112"],["/zh-cn/archives/2017/page/2/index.html","3124e104db6a216fb896415e39070898"],["/zh-cn/archives/2018/04/index.html","b463681237a15d81b9b95632583fdd4a"],["/zh-cn/archives/2018/05/index.html","4b2a5f5456255c63c54e38e37ad7fef5"],["/zh-cn/archives/2018/index.html","c9b4dff635becf27174af7f27cf82036"],["/zh-cn/archives/index.html","27bd3a1dfd6387684e5b951ed626f2b5"],["/zh-cn/archives/page/2/index.html","b0ed186ffcf5c15b8047aa98bb8457bb"],["/zh-cn/archives/page/3/index.html","73058551ed496b12460bead5473cd66d"],["/zh-cn/archives/page/4/index.html","f67ff6eaf069c59079ab58a214007664"],["/zh-cn/archives/page/5/index.html","ed237fc9d7407980c26bbee7df602c3d"],["/zh-cn/categories/ACG/Music/index.html","2d6d80a9a032fad1b1d088f5535d031c"],["/zh-cn/categories/ACG/Music/self-copy/index.html","8f52b3089e0b2490aa1819fe1f059178"],["/zh-cn/categories/ACG/Travel/index.html","a6b3dd84f4897597242c97d4bc775cdf"],["/zh-cn/categories/ACG/figures/index.html","bc10d681266ec26658387c4efbd38869"],["/zh-cn/categories/ACG/index.html","3b3f1501f410777fd4907c0e97e75640"],["/zh-cn/categories/dev/Front-End-Dev/index.html","63d1dd12c1e8ce6be2e2c0c62abb893b"],["/zh-cn/categories/dev/HTML-CSS/index.html","e884dbd52496e3a256dcdda844e15b30"],["/zh-cn/categories/dev/android/index.html","0360b2e52332692f75e1649aab62f364"],["/zh-cn/categories/dev/cpp/index.html","a720c6e27847437c4df1ab8185681071"],["/zh-cn/categories/dev/git/index.html","3581e8409f2275aeccaa0b2eee03fa00"],["/zh-cn/categories/dev/index.html","de0dbc4a0da3e96a5ad30465e6089feb"],["/zh-cn/categories/dev/java/index.html","a7a7c721c752f2b494eac830f6e6da0c"],["/zh-cn/categories/dev/page/2/index.html","1a7eb61f9a7ac5db204138cb265749c0"],["/zh-cn/categories/maintaince/blog-setup/index.html","f23dfe46c4b694fe6f0846a33443b4f2"],["/zh-cn/categories/maintaince/index.html","078d3b04cf985c1514531d187cc58f6c"],["/zh-cn/categories/maintaince/macbook/index.html","a38f4fc953454c8a45a851e873416d26"],["/zh-cn/categories/maintaince/router-config/index.html","c06f35016428e187cf49a30e8177e309"],["/zh-cn/categories/notes/index.html","aa27a838848f4deabfccc6464807585e"],["/zh-cn/categories/tricks/android/index.html","f73c3b009791200dcb0ee2b79496ff4e"],["/zh-cn/categories/tricks/index.html","8a71bbe7cc7f5f8956174563d709b07b"],["/zh-cn/categories/uncategorized/index.html","71f9235937bf350a2016bcc960a8143c"],["/zh-cn/categories/works/Front-End-Dev/index.html","2d57007b6eda7512c012f16c238035a5"],["/zh-cn/categories/works/csharp-wpf/index.html","31312468722747c68af688a5bc3b2861"],["/zh-cn/categories/works/index.html","ad335b89f9042642bf347399b9150fb3"],["/zh-cn/index.html","42e9ff5ae2e9304f45d06899ad1fa23e"],["/zh-cn/page/2/index.html","acb71362edfe62654dc48554d605db54"],["/zh-cn/page/3/index.html","4862f3fbc96d90880beb093b6fa5da11"],["/zh-cn/page/4/index.html","ff6debfb4c55f0acf7dbe6aa872b0e22"],["/zh-cn/page/5/index.html","cd48b44ab181a2f18e3a744039002988"]];
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
