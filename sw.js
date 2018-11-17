/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","4266db16b39de71f739e71a61d8c1b87"],["/2015/03/android-hostname-change/index.html","ba33c63d2120ad63dc3528aa200cf660"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","f9a6033b359d76d0a1d1f5d6d1c5ea66"],["/2015/04/android-chrome-issues-with-webpage/index.html","dabd876dcedc7dc8c2df929a69ca0696"],["/2015/04/cpp-study-log/index.html","a1508c2248418ebf197e68f7924c5170"],["/2015/04/github-pages-ssl/index.html","2db9817c547f16fc8cafa08726565953"],["/2015/04/hello-world/index.html","905525db1a318a316202eff9f069daef"],["/2015/04/hexo-setup-log/index.html","6988369d411c21be1904cc2416625483"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","d577b73831d83df40a1136e93b3097c6"],["/2015/05/cpp-inherit/index.html","cacb3819adc87f9a025c931e0bf26a6b"],["/2015/05/cpp-polymorphism/index.html","7ea6322de148c3afbb0d82342c975081"],["/2015/09/android-root-ota/index.html","da32e3e689a63e3e2d8c8ea8d01fb1a1"],["/2015/09/java-learningNotes-1/index.html","e6b1dfca16d3e60b82d162e17be57cb2"],["/2015/09/newblog-newlife-2015/index.html","76bad11994a4b54719a408e1d305a7cb"],["/2015/09/router-rebuild-2015/index.html","8b7592a746796b5d8066c2d1fd6ec6cc"],["/2015/12/2015-12-21/index.html","132f2a7e46117fe284bd27375835cd6f"],["/2015/12/PixInTouch/index.html","058bb8c54f4c81b400dabef622ffa0c1"],["/2015/12/git-study-1/index.html","f06c3fbe133c139b54134be35cc8b142"],["/2015/12/hexo-backup-and-migrate/index.html","a0b5a4d99f7e882b8e01971f2248bbb9"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","dc45764430e55e4f2b91a0593fd1b248"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","50d47474e0b54b56c72f707c39a11463"],["/2015/12/router-reconfig-2015/index.html","7290991e5b4cd061624a126004d0dd9f"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","a9c63845ba88b07ffce2688312fc96d9"],["/2016/01/2016-stepping-further/index.html","757cde8d95fe672ffe6a9c07ccd33c09"],["/2016/01/Android-Study-1-22/index.html","3a72e13e9021600dce8ccd9a86923cd9"],["/2016/03/2016-03-20/index.html","6f4b10c81b477275790014d1252be6e1"],["/2016/03/GSC-535/index.html","f19c8ca6ffbf43486bed1216415671ce"],["/2016/03/gulpjs-1/index.html","11d976904ee1b9f0194af67ec8eeac43"],["/2016/03/hexo-theme-paper-white/index.html","74ff76a8513647a2cd856cbc1ec36609"],["/2016/04/2016-04-19/index.html","4130c50b46c35a30ae12087a3d64f442"],["/2016/06/2016-06-16/index.html","eabacb6b1ca20c7676ce803aaf961213"],["/2016/09/2016-09-18/index.html","ff8e81b438a2257d9d6a71bd13c1186d"],["/2016/10/2016-10-27/index.html","97b320ea043756090dcb525edbea152f"],["/2016/12/config-switchresx-and-2khidpi/index.html","8d20f93d2947b841503a07f9d35bb0dc"],["/2016/12/improve-duoshuo/index.html","609ab0aa3952c144c241c4169df9c9bc"],["/2016/12/use-travis-ci-your-blog/index.html","b21c3e76436ae7f1e1d6f598ad71d7e7"],["/2017/01/2017-iyahoi/index.html","0b82b61e2ece1e9d3e1630fdd279c0dc"],["/2017/01/webpack-amd/index.html","8b40395d011684471e356bb8ee77e1a7"],["/2017/04/kotobukiya-syaoran/index.html","1d43f72e4ad3a98565c60db4ef5c2da3"],["/2017/04/macbook-and-surface/index.html","1e30fcd9b93a3569d712e65752d9ae47"],["/2017/04/uc-hyakuya-yuichiro/index.html","c2bd9e5fae928a1163354e5ab1c67d32"],["/2017/06/noragami-seichijunrei/index.html","63abe6337c54c4b0f4c50ec6486d68b7"],["/2017/08/cross-compile-55-libev/index.html","d7126d3b4db3dd7954f6f734148000e0"],["/2017/08/explore-service-worker-working-lifetime/index.html","734008fcef747fe2299c063a9f7cf5f6"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","66ac2fe99fee3e4504fcd6291491df4b"],["/2017/09/record-user-login-status-methods/index.html","0d1fccc310037fa475f4b423aa3ea330"],["/2017/10/vue-typescript-early/index.html","e29c1972b0c0d4ce4acef0f96599ead5"],["/2018/04/2017-end/index.html","35a16dbba1d139461e6cea8409edf52f"],["/2018/04/twitter-account-activity-api/index.html","fc3badb578f279e5505c0958a7395634"],["/2018/05/buddy-complex-seichijunrei/index.html","0f13e7820f2b2073affdd3067818602b"],["/404.html","898c20ae722e8b2f7749ed803e489698"],["/about/index.html","2f1904dc495dfed81c31d06eaf090732"],["/archives/2015/03/index.html","ede3c33699816e499bcb03bcd71018f9"],["/archives/2015/04/index.html","2b5fa86f326d32a9095e3f90ace965fa"],["/archives/2015/05/index.html","5b70a6952a8793e6a5ffa78d3720fe49"],["/archives/2015/09/index.html","e2fbfb7f7b371f0ad6e0fd4f336c3285"],["/archives/2015/12/index.html","90dd5a340dcdc6fd387a9363a1f1adda"],["/archives/2015/index.html","d2816eece9c0e76c209c60aab5070bf0"],["/archives/2015/page/2/index.html","f7f4a783aadad7a39e174fccc0058ceb"],["/archives/2015/page/3/index.html","a95febe9459339bb8439e7f0f4dfcd04"],["/archives/2016/01/index.html","f094af7c3af1df2ea28eb8190e14dce5"],["/archives/2016/03/index.html","a34a1ad8b7d8266c17620fc2cf1d770d"],["/archives/2016/04/index.html","30219b79f574f1e78b075f3810a0b728"],["/archives/2016/06/index.html","e8384e2483800c68297d489a5bb45f7f"],["/archives/2016/09/index.html","e3b7829ad8824ea3d19298c0fe2fb3ee"],["/archives/2016/10/index.html","5102370597906568490fe7adfc5bc753"],["/archives/2016/12/index.html","17b2b1f40d6db4e9fcb7a58bdec36699"],["/archives/2016/index.html","1a48c408d56b7304378a69bb37fdbfc0"],["/archives/2016/page/2/index.html","b5eae3376938b4f3801e2a667ed6ed0b"],["/archives/2017/01/index.html","2aacac1eab313c46cd27ddb596f1022c"],["/archives/2017/04/index.html","c5d2498939842cb1286ad3f253aee1e4"],["/archives/2017/06/index.html","5ed8b583b36753c9f4080ec100f2c1ac"],["/archives/2017/08/index.html","6abb40aa462924f13c64cde183f1d27b"],["/archives/2017/09/index.html","dc32bb3ca8954cfd88451c92f436579d"],["/archives/2017/10/index.html","73a90d9f61c802aa4b61557ab4159324"],["/archives/2017/index.html","4a731a3bab61aa2c567a2f8ec2e08d2a"],["/archives/2017/page/2/index.html","418b5bdf7e9c6d28456b64b3f9492e3c"],["/archives/2018/04/index.html","bf72caca6272c9e513afb5f091b0ced8"],["/archives/2018/05/index.html","0dfedbb24458a91aa0b62e271c010fb2"],["/archives/2018/index.html","24671c3b3723be5fbc4a4f937b5004e4"],["/archives/index.html","16872d548c4e183a9087775f04feacf0"],["/archives/page/2/index.html","4c32ab994e1cc6ea355b1a1c7a5b2ae4"],["/archives/page/3/index.html","8ee18b354dd0e00101a1dc8385c05435"],["/archives/page/4/index.html","3b789bd9bef81656a3a6514016ef70ef"],["/archives/page/5/index.html","694cc4147e16adcb07d5d1c1d9b35f00"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","dd8a74882af49a6d13ee7eb381f52f71"],["/categories/ACG/Music/self-copy/index.html","deab503db6eb977ca0ea8d296ff1e77e"],["/categories/ACG/Travel/index.html","7c7b3397c4b06af11aacef2aa04fc87a"],["/categories/ACG/figures/index.html","6777649c3dc10bbb44d011c4df2562ae"],["/categories/ACG/index.html","4e8334d7eb30e5da72c98ac7c992d212"],["/categories/dev/Front-End-Dev/index.html","b601acc0697fbee0b0d6763f306f79b3"],["/categories/dev/HTML-CSS/index.html","a16dec3922c9b13008610745c2512bd3"],["/categories/dev/android/index.html","79f26a9b2b820e3136fc4ecb4ffdc7ab"],["/categories/dev/cpp/index.html","43f4b83dca4a5f43c964739671eb66ed"],["/categories/dev/git/index.html","9aca2c80f5f9a1f2a0ac406e10fa3b49"],["/categories/dev/index.html","a37b8fdc2ac65bd22f6bf6c9fe8e3f8e"],["/categories/dev/java/index.html","333579f99c0cca9f58a2ee0f6cfe06f9"],["/categories/dev/page/2/index.html","52412bc3616799beab36831544291aa4"],["/categories/maintaince/blog-setup/index.html","74e3a8a93bda836c89ca2450418fe2b6"],["/categories/maintaince/index.html","4f091b28b190822a20ff9b1cc78296ca"],["/categories/maintaince/macbook/index.html","a84a8fa383a90041f8af865e399f5440"],["/categories/maintaince/router-config/index.html","cb61eadfc4b1d3af22cb1582281e0eba"],["/categories/notes/index.html","657bf120aa0a3d88230d53f31baebccd"],["/categories/tricks/android/index.html","be98cef2e8293fb20e0e7aebffbfa26f"],["/categories/tricks/index.html","598058182c74872932ca433b9c280238"],["/categories/uncategorized/index.html","0e1ef6714d92de3c2690222bcbc4c4d4"],["/categories/works/Front-End-Dev/index.html","f48f8d6c3652ba6ffcba238b9c82c07b"],["/categories/works/csharp-wpf/index.html","8f6f75773270d43764bc65f4fc3b70a7"],["/categories/works/index.html","9c5ecdacde8a87228e68f800db8245f4"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","e21657d8ff2f701595db4e2404d14563"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","0dce31b17d579595400476a57c14393f"],["/ja/2015/03/WNDR4300-setup-log/index.html","ef98c5f76273d3deaf459e3a70f5b035"],["/ja/2015/03/android-hostname-change/index.html","03c4e67c846598b95b938437783b4351"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","38b30451a26bcd0a568eb5683b9fdf33"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","36dcadacc8c86588558f50e60438a70a"],["/ja/2015/04/cpp-study-log/index.html","7e9e8f710027709d2d526beef7d98988"],["/ja/2015/04/github-pages-ssl/index.html","9024c975fe81ae211b21d7ffa08aca2a"],["/ja/2015/04/hello-world/index.html","3f07b23c842134f792a4aa96e89cd925"],["/ja/2015/04/hexo-setup-log/index.html","32ccd54510d797f77f7e46b26ed43827"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","57ddaee49a79db7584f37e65cbb6a0cf"],["/ja/2015/05/cpp-inherit/index.html","5eb3d1c6e8ae3702c45ec0cf994fb27b"],["/ja/2015/05/cpp-polymorphism/index.html","f51234abaa8f1ef1bcbb438ce27cf69f"],["/ja/2015/09/android-root-ota/index.html","dda7101d03dfa39128dd9e7760d270a5"],["/ja/2015/09/java-learningNotes-1/index.html","bc98949c8719b39c7cd828660c757196"],["/ja/2015/09/newblog-newlife-2015/index.html","ce6ec85a10cc6fd4e7d3483996c3ef89"],["/ja/2015/09/router-rebuild-2015/index.html","665dcfe4b199c999deb33a52efb3d59d"],["/ja/2015/12/2015-12-21/index.html","c0f35d3f89f304febaa50c64916db5bd"],["/ja/2015/12/PixInTouch/index.html","124df54afdd63731b4e5092fe29eee86"],["/ja/2015/12/git-study-1/index.html","6410ae8d9814a19d69930b8d47efc7aa"],["/ja/2015/12/hexo-backup-and-migrate/index.html","0182783c1a6c2e86786cba0fabfc7ff2"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","9ffe7ae72770bc2be849cafb76c9c771"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","80962c9b701b6aae5dec5cadef2ebf37"],["/ja/2015/12/router-reconfig-2015/index.html","0838c47a85d40631fb61f09b2532ef93"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","99d86be2d09ad670029cd2e8b5d7c1b1"],["/ja/2016/01/2016-stepping-further/index.html","5c0640181c91cf57251d799467c0050f"],["/ja/2016/01/Android-Study-1-22/index.html","5daf5064605fcdfd9ea3d0f454ebf8a8"],["/ja/2016/03/2016-03-20/index.html","4fb31efcef355dcbf706c0463a397490"],["/ja/2016/03/GSC-535/index.html","a569dac06c7fad0ac8f920805c511d04"],["/ja/2016/03/gulpjs-1/index.html","53b1e531746475a57758e94881bff9ba"],["/ja/2016/03/hexo-theme-paper-white/index.html","d9689cf75dfc75fec834b719b1ab68f2"],["/ja/2016/04/2016-04-19/index.html","da49c54251f99e0a10169321f41d659a"],["/ja/2016/06/2016-06-16/index.html","5ecfe76d6ee64221958300a65f4ce38c"],["/ja/2016/09/2016-09-18/index.html","b5ff7aca908bf92a9cda003926ea1174"],["/ja/2016/10/2016-10-27/index.html","55d359cbc07e55a4166d6953b19b248b"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","0266fedf957a08b59a5aacab6c25a20a"],["/ja/2016/12/improve-duoshuo/index.html","83056865d46c181b5d88dd685072722e"],["/ja/2016/12/use-travis-ci-your-blog/index.html","16ba6679e015a3e51368848046ee57cd"],["/ja/2017/01/2017-iyahoi/index.html","8a3f719a6d2f16d456434592a7defa37"],["/ja/2017/01/webpack-amd/index.html","176b798404f12c9abe2b7843c75ac3d9"],["/ja/2017/04/kotobukiya-syaoran/index.html","c79e31ce0f91b3d589506fe6a655e1f0"],["/ja/2017/04/macbook-and-surface/index.html","1ef1816e51d08a521e17f177dc42e5d4"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","d541134ebf4704d13f0d49fe603a5192"],["/ja/2017/06/noragami-seichijunrei/index.html","8c1d1a4f3411b0ebee0c6946cfb93362"],["/ja/2017/08/cross-compile-55-libev/index.html","7b06c955ada5f08e62665e392bf51773"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","75881d661f0e041e7964d397b829bf0b"],["/ja/2017/08/hello-jp-world/index.html","8e426300794d810050ac6077a13a234e"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","b0f23364d2a100de5652551c56348bdc"],["/ja/2017/09/record-user-login-status-methods/index.html","eed2f16d4e9ce3fdf723fba788c462fd"],["/ja/2017/10/vue-typescript-early/index.html","d1429c95bbd18c7595d783ebdca380a1"],["/ja/2018/04/2017-end/index.html","ddcb148f59042f6d276fbd2e062d3d42"],["/ja/2018/04/twitter-account-activity-api/index.html","1e2d89b223c66fd48a66195d48288576"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","952d79482c0a8f8a9b7a0e9b2b53a6a7"],["/ja/404.html","ded28afe1cad595e693fbc75ea6671a4"],["/ja/about/index.html","8e3110fff294eaed68d4dd2ad974679f"],["/ja/archives/2017/08/index.html","19d16b57fc5e278f63e81352fae6cd0b"],["/ja/archives/2017/09/index.html","6c7cbc1c3aec42bd027b5b3b45c42dad"],["/ja/archives/2017/10/index.html","aa466d786cafcbaab40da77cb132f367"],["/ja/archives/2017/index.html","0331b3ef1f0e9bfe562d09bb857f2c28"],["/ja/archives/2018/04/index.html","c2d2167f6af0cdef874314a0192a66a4"],["/ja/archives/2018/05/index.html","aba6b384ee17120bf18024b7da7951e8"],["/ja/archives/2018/index.html","6380f827b914171ce08a632b6e77d69c"],["/ja/archives/index.html","9e8662aef1a5b6114dbdbb7287bdf317"],["/ja/categories/ACG/Travel/index.html","8fe28747c2b588b50c65fa9871863b05"],["/ja/categories/ACG/index.html","0a7f46f80cb53ad99af5229a9e301172"],["/ja/categories/dev/Front-End-Dev/index.html","e1b364ccb928d01b9532088c98a6a670"],["/ja/categories/dev/index.html","67f1109c2954bc1a29737b9706d91109"],["/ja/categories/uncategorized/index.html","8305163db8ba966416759f604b8adb3e"],["/ja/index.html","b0513df9d39a53f1984aa56afb96d9fb"],["/ja/nihongo-test-page/index.html","5aace97ca55d523cbfbd3a71c61a6304"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","f02e04dd6dd22518c660137db049a055"],["/page/2/index.html","9a0ee0eb77d1a618bbe504a0dd12cacf"],["/page/3/index.html","c291505cb9055811aece02e1b86f44cd"],["/page/4/index.html","5b3b2666df1dcff275e21f7ae1e3e474"],["/page/5/index.html","845d6c09f8e039fa465251b408542b7d"],["/page/6/index.html","97e8277a0e3d055810ae6b43fbdc2d20"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","c91555bea14870b691be61b584ccd664"],["/zh-cn/archives/2015/03/index.html","1b1f379c5e48c691d54765d4483f3abd"],["/zh-cn/archives/2015/04/index.html","5ff7090ef94944cb064e8df8c80f2ef4"],["/zh-cn/archives/2015/05/index.html","d5611f55b3ccb8756bff2a92d9d9e02d"],["/zh-cn/archives/2015/09/index.html","535430f7763a4727d0ddd31243bdbc85"],["/zh-cn/archives/2015/12/index.html","3baf813b4e2c0c76389006ae20cd6513"],["/zh-cn/archives/2015/index.html","c36c8a025407321863671e083174172e"],["/zh-cn/archives/2015/page/2/index.html","43ba249e3a42e07358ba92c871818406"],["/zh-cn/archives/2015/page/3/index.html","8f90c46412c425c80f7d22dc9879d7ea"],["/zh-cn/archives/2016/01/index.html","cad7b0857a987a27878d85e0a33197ef"],["/zh-cn/archives/2016/03/index.html","3024eae42b4bf21b0f0e6a80332def82"],["/zh-cn/archives/2016/04/index.html","3cb9afea6cf7614b3933f992a051173c"],["/zh-cn/archives/2016/06/index.html","a7dbe228a7b6aecd6a7b230dfbc074fe"],["/zh-cn/archives/2016/09/index.html","8a3343adfe4e0d589977904859b85367"],["/zh-cn/archives/2016/10/index.html","023237691bf08d1b881e069f1686f568"],["/zh-cn/archives/2016/12/index.html","86078f3e7297b7f3f1a0ca19663ab7eb"],["/zh-cn/archives/2016/index.html","edaed512e30fbf0ce19e588cd40f2305"],["/zh-cn/archives/2016/page/2/index.html","617ef5e1e463b6621081e5f9b43f473d"],["/zh-cn/archives/2017/01/index.html","bbeee2fb7c534f98b0473759f72b03af"],["/zh-cn/archives/2017/04/index.html","26cb18561d8e43e2af4ff46fee6091b3"],["/zh-cn/archives/2017/06/index.html","d9915cffb1238366e2d28b6ff8f3dca2"],["/zh-cn/archives/2017/08/index.html","94af7b5523b8f9d171f16eb03272c83c"],["/zh-cn/archives/2017/09/index.html","62d963099aaa79d0245f01d16ef356fc"],["/zh-cn/archives/2017/10/index.html","8e1c57059392171792ab0154c51c2b43"],["/zh-cn/archives/2017/index.html","39534bf81c162d1a70894046cec1ad87"],["/zh-cn/archives/2017/page/2/index.html","025038240eba1ebba4dfc964fe67d3a5"],["/zh-cn/archives/2018/04/index.html","f99197a34a3fa43600b6bbead25c9da9"],["/zh-cn/archives/2018/05/index.html","818b6acf467185e2a7d46b84a39fdc04"],["/zh-cn/archives/2018/index.html","0ea60d8adca89d4fed6aa861303aa61b"],["/zh-cn/archives/index.html","7dbf5433e2aaab0d92e648f20b6c45aa"],["/zh-cn/archives/page/2/index.html","1b389639b97e79390ae19d15a438b180"],["/zh-cn/archives/page/3/index.html","d82717aa367b0c9a1ac5fc16c613dcdb"],["/zh-cn/archives/page/4/index.html","6babb67b717a0239e45f0a8fdf81703c"],["/zh-cn/archives/page/5/index.html","e4b7522a6481a23a963af72852f84b01"],["/zh-cn/categories/ACG/Music/index.html","61522aef500969eac25b75c1d04121cd"],["/zh-cn/categories/ACG/Music/self-copy/index.html","f3c5e4d5cf36e9fa96f5f68bf227a081"],["/zh-cn/categories/ACG/Travel/index.html","518ef019fe4eb0cc0fe5f4d76643f93b"],["/zh-cn/categories/ACG/figures/index.html","ca0f50b1f0246ffd1038216c5416d15c"],["/zh-cn/categories/ACG/index.html","be410447b19a72813b39eac43b99eb24"],["/zh-cn/categories/dev/Front-End-Dev/index.html","976e28d74fa7a358a2f7e1a6de8753b3"],["/zh-cn/categories/dev/HTML-CSS/index.html","22327b07ded845a26b80cd11990d2048"],["/zh-cn/categories/dev/android/index.html","fd7bd6c5d16ab159396d4191113741c1"],["/zh-cn/categories/dev/cpp/index.html","f8861687350c91f809c79c3800e367b0"],["/zh-cn/categories/dev/git/index.html","3afed8843e64f83022a8694e5c927a58"],["/zh-cn/categories/dev/index.html","0b0c80fcdff195a0f6b4bf9cb05cab81"],["/zh-cn/categories/dev/java/index.html","3d06ae62943f3733d8b163dc7cff10d4"],["/zh-cn/categories/dev/page/2/index.html","2a21288849a0cd0725a48b091941bb13"],["/zh-cn/categories/maintaince/blog-setup/index.html","7d9539579750ea92342f62329f90544d"],["/zh-cn/categories/maintaince/index.html","f1faae97d031ba5d2c514f4268511ee3"],["/zh-cn/categories/maintaince/macbook/index.html","0af0f408f1bf06e0a49ff293f8f7ddf6"],["/zh-cn/categories/maintaince/router-config/index.html","86dd4b67b8628009143c9ed245ca1abb"],["/zh-cn/categories/notes/index.html","e752a1252aab8c3ab6ecdf4ebee9f457"],["/zh-cn/categories/tricks/android/index.html","a47e2e149de13725fd1f07a078ddc82c"],["/zh-cn/categories/tricks/index.html","661fb768f1694c280d7ed60acf443091"],["/zh-cn/categories/uncategorized/index.html","ef63b53fe2c2fa453eb674024dde8916"],["/zh-cn/categories/works/Front-End-Dev/index.html","0dc60a30e0848612556ecce4abcb89de"],["/zh-cn/categories/works/csharp-wpf/index.html","dd22085f82f14b2af6feaf732d143abb"],["/zh-cn/categories/works/index.html","9f00b16664715231e7ce2a982a289ce9"],["/zh-cn/index.html","f8cc7be6a6d83216720341287611bbf4"],["/zh-cn/page/2/index.html","4b17d608731eab755f76944937fe45c9"],["/zh-cn/page/3/index.html","34b40bba3f4253af2cc1a08cf4bbce50"],["/zh-cn/page/4/index.html","597965b8c7a714a5e59234447f1c1a9d"],["/zh-cn/page/5/index.html","7feaa2b9620220c2d3cd89db71b27fd6"]];
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
