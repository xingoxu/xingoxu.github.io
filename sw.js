/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","2469065e88118e4090990df8829be85a"],["/2015/03/android-hostname-change/index.html","9d9ec1e4a11ad6cff27ce44b00ffd6bf"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","c1bad8c73d348b4f4e4f28bdb8490001"],["/2015/04/android-chrome-issues-with-webpage/index.html","43116209ffb3904fd601042611458f98"],["/2015/04/cpp-study-log/index.html","7bf4e908069fd93b7648c2a3d1efd17c"],["/2015/04/github-pages-ssl/index.html","03c270afa0b55ea9f4e02dfdd766ebe8"],["/2015/04/hello-world/index.html","93582fbcdc7d86c4c97072ea91bcee12"],["/2015/04/hexo-setup-log/index.html","9aa24e3341a17daa2e3ab283d8b04d2f"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","4a231cddbfe76c8561ba073bfa262326"],["/2015/05/cpp-inherit/index.html","a0f7ddf2638fa73c8f4948395e8f5db1"],["/2015/05/cpp-polymorphism/index.html","dc76c899d4a79764b60253536647c45c"],["/2015/09/android-root-ota/index.html","e1af7cb2341990c5971ecb4258c9b6dc"],["/2015/09/java-learningNotes-1/index.html","6e405d5e5fa279a22d8d39c6e4520202"],["/2015/09/newblog-newlife-2015/index.html","9a6ce23f4e380c54b8e08199472c4c5a"],["/2015/09/router-rebuild-2015/index.html","a7e19ea84982cc3683b8ee11f5197c27"],["/2015/12/2015-12-21/index.html","4a55f76894efb68d0235a84dfd556d22"],["/2015/12/PixInTouch/index.html","233b4d1b3f6c55c028dd80d45590668c"],["/2015/12/git-study-1/index.html","e767b06c1e812b53a07748ffba38f7c4"],["/2015/12/hexo-backup-and-migrate/index.html","2c0b845bdd3f62b91e50a4a3c96c5679"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","954e447e7fc6efefb8f3e8da9b795fed"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","4cd4a07df569a1c0a8c801922da62872"],["/2015/12/router-reconfig-2015/index.html","faa3b91e961e2204400135b8c5f21db1"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","9942f9ab2be8a1e01049fae74b71940a"],["/2016/01/2016-stepping-further/index.html","619cfbf6d9fc8b4124a06c883ee5485d"],["/2016/01/Android-Study-1-22/index.html","da57bee9cdf2fb58959e2acef488cb69"],["/2016/03/2016-03-20/index.html","553da9048731ea428936dfae65d4e7b5"],["/2016/03/GSC-535/index.html","d14e52476659a039a4cd6508621aed6f"],["/2016/03/gulpjs-1/index.html","bfeeb86ce532dc759e9470e4aee54efa"],["/2016/03/hexo-theme-paper-white/index.html","36981810316477ad0a40f8a524c8fc98"],["/2016/04/2016-04-19/index.html","ffb6bd7bc33fdecb7e7c41bf3468aba3"],["/2016/06/2016-06-16/index.html","c63f04d55d4700497ab72df148a3ad45"],["/2016/09/2016-09-18/index.html","9f3fcc651aa433966ab712dd90255408"],["/2016/10/2016-10-27/index.html","fc0443eb4c9e233d8e5e5978f5e80086"],["/2016/12/config-switchresx-and-2khidpi/index.html","d0bb5d957f7cdbf7d7018dd78d6ff603"],["/2016/12/improve-duoshuo/index.html","a65c6a5c7d8633870a8410cd47c112f6"],["/2016/12/use-travis-ci-your-blog/index.html","3de72ac7833cf308aad340f894945def"],["/2017/01/2017-iyahoi/index.html","86f5fd533cec0946030e21b83cb1afed"],["/2017/01/webpack-amd/index.html","99d42fb87df0d590a97200afdbc9035f"],["/2017/04/kotobukiya-syaoran/index.html","4c79a387bce964bf90e3785c97a075bd"],["/2017/04/macbook-and-surface/index.html","5e2c35f11768d1e71e80698e7a9016c9"],["/2017/04/uc-hyakuya-yuichiro/index.html","60e25a97aa334ca3991225a6960a1f17"],["/2017/06/noragami-seichijunrei/index.html","26549df68d63c22bfba28ba341322b15"],["/2017/08/cross-compile-55-libev/index.html","020303221fe63e37256fb79355012bda"],["/2017/08/explore-service-worker-working-lifetime/index.html","0748d2ad27fdb4a015131d8df4564776"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","202a9939f00c9982299f830bf749323e"],["/404.html","559beefa8f3d92bd88e70a6c5e1e41c7"],["/about/index.html","162491005c1f9a0537fab62dbdf8bffb"],["/archives/2015/03/index.html","f9f870e8917380c4a050387c2af8e25c"],["/archives/2015/04/index.html","f04643fe7215ead12c46d05d6d2bf68f"],["/archives/2015/05/index.html","36e29786acf7810f780a46efda619133"],["/archives/2015/09/index.html","f3f9ed7d40f6bc339c1cd47c9fc29f19"],["/archives/2015/12/index.html","4ae4a8e76aca7a32c5976202b8899816"],["/archives/2015/index.html","e6e89fa4f979ff8c41893644738d85b0"],["/archives/2015/page/2/index.html","3cff8f9908705a1d6bc520416b757e48"],["/archives/2015/page/3/index.html","3875a9646f1e537031800576e0d2503e"],["/archives/2016/01/index.html","e54386bef787757924ebc841c384bb63"],["/archives/2016/03/index.html","ef84efb13d9d7f42ef52b13753bff9fb"],["/archives/2016/04/index.html","f8458394a096ce1c52191f8f521ca127"],["/archives/2016/06/index.html","82d3b1f2cbbe10effa8cbfe34de52d4f"],["/archives/2016/09/index.html","b3556f64247a99a17222b20a547d98d4"],["/archives/2016/10/index.html","6867b87957a07c2b4a87a22a5ac9bd24"],["/archives/2016/12/index.html","fff932c13c1b508a469a51fce64964e3"],["/archives/2016/index.html","259482ca02b9c6da871070dab579a67f"],["/archives/2016/page/2/index.html","61e2d21525b07529bc7909534ade0e81"],["/archives/2017/01/index.html","b21d0318f7fab8a2c4d57d3aff472e48"],["/archives/2017/04/index.html","56ce2cb611887a7a958f26610f034db9"],["/archives/2017/06/index.html","ba169d125838979b42c9990908090dd1"],["/archives/2017/08/index.html","d987a29670a4c5209b0027cfb209ade4"],["/archives/2017/index.html","20d29860b2c986babf3d7c50b88958e5"],["/archives/index.html","40d871ca183d9fd0cbd78a11c853eea4"],["/archives/page/2/index.html","e28f256309a7a7c6c1a75212a4e085a9"],["/archives/page/3/index.html","af850c3c76325ea0fcd443dedef1f8af"],["/archives/page/4/index.html","609becf87588c5a5f7f6daaa987310da"],["/archives/page/5/index.html","de7ea5cbb82f98055e8a8b3174d62665"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","118486c8798a2f16ddf23feb76f9b29a"],["/categories/ACG/Music/self-copy/index.html","273c309f57e9cec8e2b1e82b921bd858"],["/categories/ACG/Travel/index.html","a6f9fa04c23a74aaa0ce68273a4a54f7"],["/categories/ACG/figures/index.html","e44c0518d9ea281a8cfc6be8c9320b86"],["/categories/ACG/index.html","6de651c8c97123340b6709bdc08f773d"],["/categories/dev/Front-End-Dev/index.html","c082e2750f6321d2cb95b76199f8f4fa"],["/categories/dev/HTML-CSS/index.html","fdba9f773d9127e9aec330b48e98b9c5"],["/categories/dev/android/index.html","226185bc188629a3eff77b532b953e55"],["/categories/dev/cpp/index.html","4abf8e5ae9a7b8ca756e1c416ca6d8d7"],["/categories/dev/git/index.html","95f54669e57031add076fd7c03f5c130"],["/categories/dev/index.html","6bd77954dd0d3d51ce807da2ab5b6219"],["/categories/dev/java/index.html","7c93477b381a065fb6a222f20c84e118"],["/categories/dev/page/2/index.html","bbcd7f357a7523a9654306e7f51940eb"],["/categories/maintaince/blog-setup/index.html","7c2ad6e2c82a01ef8450ea535e172dfa"],["/categories/maintaince/index.html","d9843c7c0a86deadb5d528c3461ddfcf"],["/categories/maintaince/macbook/index.html","d6cb95e483f5f1a041c3d0b272f33a4f"],["/categories/maintaince/router-config/index.html","0baef64e50bca65cee96547686514533"],["/categories/notes/index.html","b3c6d65809bf6407b76927d14e49b4c0"],["/categories/tricks/android/index.html","37ea582ee3b2252c476448653de3d27b"],["/categories/tricks/index.html","2150e7acc033d590c840792fc519c6c4"],["/categories/uncategorized/index.html","9bc8e0ca9330372a391668de7afcb9ed"],["/categories/works/Front-End-Dev/index.html","f310968b82150b45ed601f6ce932b76d"],["/categories/works/csharp-wpf/index.html","6e8956590cfecf2926cf43ae9444fc0e"],["/categories/works/index.html","fef7661651844f978056d3c6328e6b7f"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","c9b3a2e5432b5b5de35a2b80fed24c30"],["/ja/2015/03/WNDR4300-setup-log/index.html","ab97bdcd08f3186843811e4aa0f9c057"],["/ja/2015/03/android-hostname-change/index.html","ec690f936617614c7ac8dc9ace91510c"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","65506b28ee9f80859dad554831afdf53"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","ed766673937e735c29f4f0b44d09d103"],["/ja/2015/04/cpp-study-log/index.html","0583727cc30cb9c86ac1826bf53e82de"],["/ja/2015/04/github-pages-ssl/index.html","eb174039cbcd7b32a4e7e8bb3dd52bfd"],["/ja/2015/04/hello-world/index.html","69d9303db95aee1b1dfc0ef6518e0544"],["/ja/2015/04/hexo-setup-log/index.html","ce3f5b58c4b482ea549d22af353a1d4e"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","68e093aab05c27880ca2bbe24f682213"],["/ja/2015/05/cpp-inherit/index.html","7658890c15efa07f83bf141624f1102f"],["/ja/2015/05/cpp-polymorphism/index.html","e841356d1db7a5f1a333f731000840c7"],["/ja/2015/09/android-root-ota/index.html","87a62b44c87e12c54a0188333e1ad5e0"],["/ja/2015/09/java-learningNotes-1/index.html","d6eb5f10cb50dd03ec2c2702926d1e60"],["/ja/2015/09/newblog-newlife-2015/index.html","20d349eff43700783f02808291bb60b6"],["/ja/2015/09/router-rebuild-2015/index.html","6a4a36af3535e282f0f47a64ec626cf4"],["/ja/2015/12/2015-12-21/index.html","40f2b456ff2b4912adddf4a969d9ce72"],["/ja/2015/12/PixInTouch/index.html","cd2436fface0645b0dddab5a820962c0"],["/ja/2015/12/git-study-1/index.html","ed95d614a37abea0a97a55287187b7f4"],["/ja/2015/12/hexo-backup-and-migrate/index.html","b4853a86ecfb4a196ba39c8152fbb190"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","b658f5b01ce350e327455d518a6c655d"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","05bff3d158d90bf84705a2706622283a"],["/ja/2015/12/router-reconfig-2015/index.html","d2cf2bf5e8f72183e513b1103b44ea5c"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","7c34afc22b25284debe7d8dd9acc9d45"],["/ja/2016/01/2016-stepping-further/index.html","1bd516a7e5060fa2bfe038c79031bf2d"],["/ja/2016/01/Android-Study-1-22/index.html","cf34a10bc5aaeecb6e71e5f626bb2540"],["/ja/2016/03/2016-03-20/index.html","2ca3fe83273521ec5936508e6370d6f2"],["/ja/2016/03/GSC-535/index.html","3bacafbb1fa103259729cea1c62ea2c4"],["/ja/2016/03/gulpjs-1/index.html","cecfef2c6495b2783c2a948e0640971e"],["/ja/2016/03/hexo-theme-paper-white/index.html","cc222abce698c1e06f7e7b37a94b68ba"],["/ja/2016/04/2016-04-19/index.html","328b716f3bd14a7976f0561e8156f89d"],["/ja/2016/06/2016-06-16/index.html","e8717b2f17fe78152d41aa163ae1e056"],["/ja/2016/09/2016-09-18/index.html","454c8deab3f2acb4e9028de48d2e7b34"],["/ja/2016/10/2016-10-27/index.html","4b378c9eb5e4a8846148d4067cd2b597"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","bb1915712d1463b4b337f51d6a3dd64c"],["/ja/2016/12/improve-duoshuo/index.html","8c1f46c925dc064a18476c3893e0f6b6"],["/ja/2016/12/use-travis-ci-your-blog/index.html","23f93724fa0a7571c890fa17ff6bd9a2"],["/ja/2017/01/2017-iyahoi/index.html","48808aa7ada17aca68ff9aba57b12bbc"],["/ja/2017/01/webpack-amd/index.html","d9e429b310986a3bc250b1a44a119a90"],["/ja/2017/04/kotobukiya-syaoran/index.html","30cd702a614646151a6c31ff0e5468dc"],["/ja/2017/04/macbook-and-surface/index.html","efffaa92f6d362ec982eed13d9cd8be4"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","1d9fb377d92daaca183159ce0fa10f9f"],["/ja/2017/06/noragami-seichijunrei/index.html","133906cbd22a62ed6b70c99269653231"],["/ja/2017/08/cross-compile-55-libev/index.html","cbe2c48e50eba3769eb2cd96444e29ea"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","fdfc4a6e7fe1f249ef6ab68fe66ae1fb"],["/ja/2017/08/hello-jp-world/index.html","349f0ef0f20747675a862b8982b7c77e"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","f0386db7efdd91a4cf5e81851149040c"],["/ja/404.html","faa121ce392ea5bcd892c40673efa5f7"],["/ja/about/index.html","3d1725bf9fa299c15ce781663cbbdc7a"],["/ja/archives/2017/08/index.html","ea0b8d71bdf106d4e6b0eb88acc7cb93"],["/ja/archives/2017/index.html","09fccd013cd7aa177e6101c9f8ca6810"],["/ja/archives/index.html","00aa8c35516486b7c23b13cd73d2c550"],["/ja/categories/uncategorized/index.html","da3662ba8bde655f0fd083c9458bb93c"],["/ja/index.html","520aa7c3fab9468871bfb5f264ceb463"],["/ja/nihongo-test-page/index.html","064647ad563c3a018de6ec68620cdab1"],["/ja/resume/index.html","20f6b05dfafcd4e8f6e29350b01a421f"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","7864a1dc814df0bd50c07d1365253522"],["/page/2/index.html","58455f6d9dd6a318bb08fb3b4e665e1d"],["/page/3/index.html","5530a179e4458f4d8a71bdecafee0278"],["/page/4/index.html","1b2779e2cce54741047d83fb840796bb"],["/page/5/index.html","ec45d45db688c28afe6cb570d74b8819"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","c72f57a5f64999c824b28d22d0b31a28"],["/zh-cn/archives/2015/03/index.html","6471dedbad692fb574449759c0a46326"],["/zh-cn/archives/2015/04/index.html","9baa76fec1c21885af8a4d7baad28958"],["/zh-cn/archives/2015/05/index.html","4b25209971d3f98e8344dfdcbbb1faf8"],["/zh-cn/archives/2015/09/index.html","e48bd77cb23a77fff420b83ef7f91f5a"],["/zh-cn/archives/2015/12/index.html","b3a99ec186c1d5e95ad725fae388ea0c"],["/zh-cn/archives/2015/index.html","ad69cc218343987ef088a8e2e5d8e43c"],["/zh-cn/archives/2015/page/2/index.html","71d96de560ea7b64748075fdddb971ab"],["/zh-cn/archives/2015/page/3/index.html","ba5b54bab938abbe48a69d1ec8f6b86f"],["/zh-cn/archives/2016/01/index.html","c3e3cb0e8f4c64596a4811732790b178"],["/zh-cn/archives/2016/03/index.html","77d910a54d7729bee70f3e17f6f177df"],["/zh-cn/archives/2016/04/index.html","161c5c4391b5a47c0f2e365c3a7c4370"],["/zh-cn/archives/2016/06/index.html","a80b7a956714bf4c622bd479af97a480"],["/zh-cn/archives/2016/09/index.html","777622994c2088f0d414b803549f7abb"],["/zh-cn/archives/2016/10/index.html","bb411f1018b6a719ff26a46a2da88a2c"],["/zh-cn/archives/2016/12/index.html","670675ad2b7c31172b7e6dbf991dad60"],["/zh-cn/archives/2016/index.html","5efc4070c96b3ccdf91442540c9d89a6"],["/zh-cn/archives/2016/page/2/index.html","2780809221534a1c368e72f212870122"],["/zh-cn/archives/2017/01/index.html","29f5da1bb37055b4a1a9e22fa01194b7"],["/zh-cn/archives/2017/04/index.html","6f8ab53c1d042d4b4cc5ddd91ad17082"],["/zh-cn/archives/2017/06/index.html","02464e67a534b159a681757e99740dbe"],["/zh-cn/archives/2017/08/index.html","1f3b4297546c0e08c89c6a92feacb4f3"],["/zh-cn/archives/2017/index.html","6a06302f35af9aa89181fb1135c026d5"],["/zh-cn/archives/index.html","47587bdac9101c43018c6368c47b7296"],["/zh-cn/archives/page/2/index.html","58f67c30edf085c6256c5e923f4e6d72"],["/zh-cn/archives/page/3/index.html","fe723595ef8a1c7770bc46dcfb9d757b"],["/zh-cn/archives/page/4/index.html","c19b2cf9a42cac49d43aca600488e2e2"],["/zh-cn/archives/page/5/index.html","42d501d7aa3c6e3307a4bd9f2d3b2429"],["/zh-cn/categories/ACG/Music/index.html","7fd7b559636919bfa54650e3850e027a"],["/zh-cn/categories/ACG/Music/self-copy/index.html","04b316f42cf611e3b980aba68df8262d"],["/zh-cn/categories/ACG/Travel/index.html","37dfe8d07a04d2e3b84982a8b659575b"],["/zh-cn/categories/ACG/figures/index.html","b8909c9893c37b814d955a2917427f19"],["/zh-cn/categories/ACG/index.html","4c2184132d335939df03eff880291c9e"],["/zh-cn/categories/dev/Front-End-Dev/index.html","09bdf6a39243e60c712d148269d74922"],["/zh-cn/categories/dev/HTML-CSS/index.html","d70610ad70c76f6f8e419ef20f688537"],["/zh-cn/categories/dev/android/index.html","6b63a6ca6332e538dfd863e20136e7b4"],["/zh-cn/categories/dev/cpp/index.html","7e7e9831fabd2b062b7ab39dfa537f1f"],["/zh-cn/categories/dev/git/index.html","63dc582b952841e26f400d9ffd075e39"],["/zh-cn/categories/dev/index.html","3749db46b87837d2176c8d7921e01a82"],["/zh-cn/categories/dev/java/index.html","f063a3e888dd9dcb3de3fc7f19f2b882"],["/zh-cn/categories/dev/page/2/index.html","7e24adae888476eab2340ab24abcf705"],["/zh-cn/categories/maintaince/blog-setup/index.html","d5b447da5c36270f592c33b664333898"],["/zh-cn/categories/maintaince/index.html","fbaa14211fdf03d16174ef6660858910"],["/zh-cn/categories/maintaince/macbook/index.html","402aa807dfbdaa531466942acf7346d4"],["/zh-cn/categories/maintaince/router-config/index.html","277d2e11f1dff0e5bbb988a1b246b45a"],["/zh-cn/categories/notes/index.html","37ece19bb291508c122c2a6dd9f64eee"],["/zh-cn/categories/tricks/android/index.html","10d48ab869270c79c91d56dc3cdc651c"],["/zh-cn/categories/tricks/index.html","7249bf601acddfc4dba145d392baa4a7"],["/zh-cn/categories/uncategorized/index.html","e532b1539a4cb92347a3c669439bd007"],["/zh-cn/categories/works/Front-End-Dev/index.html","5509c689c4a1de43fffd48dda83c93a2"],["/zh-cn/categories/works/csharp-wpf/index.html","2c6fd1e7018f100914a7ff0290eb170a"],["/zh-cn/categories/works/index.html","c413e05931aab220018356c275dcd533"],["/zh-cn/index.html","042f29bbc4979ef773362eda02ecb6cc"],["/zh-cn/page/2/index.html","33357ee58cc66cd92b31937ff1cfa661"],["/zh-cn/page/3/index.html","6aeef06a3f7b17f8e37aae5ac4ddfa98"],["/zh-cn/page/4/index.html","5f0500973e16388096bab7d628439247"],["/zh-cn/page/5/index.html","380578c7324df0c90768345ca92871c3"]];
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
