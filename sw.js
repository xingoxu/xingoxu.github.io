/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","fdc5a9d3f25e3b945768c0dc0de0667e"],["/2015/03/android-hostname-change/index.html","f20f5b2b9b315ad6516eb6c55f8bb23e"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","d4df353b2c3291ebb12f91a91900815f"],["/2015/04/android-chrome-issues-with-webpage/index.html","5042001a70cfc9afc92ad3624dbf151c"],["/2015/04/cpp-study-log/index.html","7186116c73467d67c83382a2c766145b"],["/2015/04/github-pages-ssl/index.html","9c1f9f14606e84219f74526abee5a655"],["/2015/04/hello-world/index.html","e97b029ab909ca2d679df3e9334a4e95"],["/2015/04/hexo-setup-log/index.html","62927402aa745735950de9898595033d"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","8026c73c67cca4361b20964a2a14e66f"],["/2015/05/cpp-inherit/index.html","457cf073e5456ee50739851b4863bd5b"],["/2015/05/cpp-polymorphism/index.html","8e4de253b5a77a0510c0c6a9298b008c"],["/2015/09/android-root-ota/index.html","5ec3ffdf3ca4d3ecc02c4cb772a596eb"],["/2015/09/java-learningNotes-1/index.html","80537df0b5add29fc7cfb0391ea24e31"],["/2015/09/newblog-newlife-2015/index.html","0be98c8ee1fb1de352c537ab0e70704a"],["/2015/09/router-rebuild-2015/index.html","a900a8472cc25a6daf2874d892a0b20b"],["/2015/12/2015-12-21/index.html","11d355adf6f592406403497f1dddf372"],["/2015/12/PixInTouch/index.html","4464cc3a237326fb7cf7a69008e34870"],["/2015/12/git-study-1/index.html","5187ac7915961c5265783fda84a1d244"],["/2015/12/hexo-backup-and-migrate/index.html","ae285b3cda235bbb3486ed978ab244f9"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","a8eebcc11a717630acfa10f1248990be"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","cd16e38abd13dc8ce1d75d7e11d5a3a3"],["/2015/12/router-reconfig-2015/index.html","d9ba96d2af543e31d4c3b786985a62ed"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","012d289f86b06f59bfe930d642ab2c6d"],["/2016/01/2016-stepping-further/index.html","93d692cc1e74587454b55cafccab40d5"],["/2016/01/Android-Study-1-22/index.html","99173db304987697e8a3d3d38d49fdbe"],["/2016/03/2016-03-20/index.html","c7abb49af6247bf51a26321096ec0204"],["/2016/03/GSC-535/index.html","df9c004117bd62b6e82b416696d0aadf"],["/2016/03/gulpjs-1/index.html","f96cac649ab839be55dd9062351062fb"],["/2016/03/hexo-theme-paper-white/index.html","e60ee89ee36d7334442e4daabdc90034"],["/2016/04/2016-04-19/index.html","aec1aae30730771f81f523b02c057d0b"],["/2016/06/2016-06-16/index.html","d0b6c7f895b5349439c7272481be30bb"],["/2016/09/2016-09-18/index.html","92aa84a9f20e96a70412797dce67cbcb"],["/2016/10/2016-10-27/index.html","3a11b4443cf2b77acbd9d40132aeb676"],["/2016/12/config-switchresx-and-2khidpi/index.html","a3efd126251210220586f011b22fe8a8"],["/2016/12/improve-duoshuo/index.html","2ffb1df1e6e61b68284d675ebd6a8cee"],["/2016/12/use-travis-ci-your-blog/index.html","ea9f18287993aec45c1d7d3818bbdf4f"],["/2017/01/2017-iyahoi/index.html","0958d6255302bb451ab3093c9b0319ec"],["/2017/01/webpack-amd/index.html","3c3e26ee833dd1f9701d639f8337c4d8"],["/2017/04/kotobukiya-syaoran/index.html","f1d718156ecc3309dcd7fbce6ad91533"],["/2017/04/macbook-and-surface/index.html","edeeb9698b14192b1348ade3bc20148b"],["/2017/04/uc-hyakuya-yuichiro/index.html","a8f3130c0a69702035be86455c9c5aba"],["/2017/06/noragami-seichijunrei/index.html","3fa2675474f2597e40cdfae3bf2361c1"],["/2017/08/cross-compile-55-libev/index.html","695a3ab9f322a8c027068e5d2d60981c"],["/2017/08/explore-service-worker-working-lifetime/index.html","5735374613a5e9c18fb35797f99878af"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","ae0137718102e0d7911d0ea7f90691ec"],["/2017/09/record-user-login-status-methods/index.html","c23b2068f7b1e0a00646710525ba7d79"],["/2017/10/vue-typescript-early/index.html","c492b9e0fa7f3cb1f61e47cd127de64e"],["/2018/04/2017-end/index.html","ec178d740a06bf60f2082ced0901f19c"],["/2018/04/twitter-account-activity-api/index.html","60a1c6d57eef8b585acb5c13b6d5a843"],["/2018/05/buddy-complex-seichijunrei/index.html","53f78eaa9bb61be398bbef108a67716b"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","b528a8c57fa4a0bf75bf3fd0cc4b671b"],["/404.html","a427d9015b97bfdaa338832875b599fe"],["/about/index.html","f1ce0726b0484edb582f5cee71e0be28"],["/archives/2015/03/index.html","cd0e46ab29c20cc519757413d47fb4a4"],["/archives/2015/04/index.html","8d419d26e43a468432467e23bf82f692"],["/archives/2015/05/index.html","0dcb778ef684cb22a7d277f707e5b1d3"],["/archives/2015/09/index.html","227b004bd4f6bd22bea8384fe4521661"],["/archives/2015/12/index.html","b166df2f2067ed95f783ca868d019ca9"],["/archives/2015/index.html","b59198e523dde5fdac404fa9a8096202"],["/archives/2015/page/2/index.html","b429a5502dc7063cc10e05529eba10c6"],["/archives/2015/page/3/index.html","88608b64f0b3e3b7b1780b33617e2d38"],["/archives/2016/01/index.html","6f6965712c3f45f98b083e232a17feea"],["/archives/2016/03/index.html","8490b479f7f24e02853a893bffdcdaef"],["/archives/2016/04/index.html","d221627b4b2fdb5242ad8977c3bc69ed"],["/archives/2016/06/index.html","3eba85583809cd68f92594e681b40181"],["/archives/2016/09/index.html","6d5e16d4bc2214cff8218cdb557eca25"],["/archives/2016/10/index.html","702ecad764d96ff5a179921f8362f9aa"],["/archives/2016/12/index.html","074e90a65a45d7b91fa612eb28d88b61"],["/archives/2016/index.html","5db197e755a8edb8e7f1444dfaad3802"],["/archives/2016/page/2/index.html","afc97bf6d6039a346c4dad927244c0dd"],["/archives/2017/01/index.html","4ea198e456e717e3ca570e9bd60941e8"],["/archives/2017/04/index.html","36cd5b544e8de9a6d0a6305b3b50b65f"],["/archives/2017/06/index.html","98ea93b7b49ccb4f883661ed9ea38be8"],["/archives/2017/08/index.html","813b4249b6d593b8a003a495cb88f6a6"],["/archives/2017/09/index.html","eb667966eef954e3b1f7f83014d43ee0"],["/archives/2017/10/index.html","018592ae8db6f73dc843f114c80c99c4"],["/archives/2017/index.html","e03e3190529dead60a51d849ff352d7e"],["/archives/2017/page/2/index.html","45e86aa4d14cc20392149af24e80721c"],["/archives/2018/04/index.html","93e52915ef430c8d95ddbcf012224185"],["/archives/2018/05/index.html","971e2771758e2cce7f5374afa028c395"],["/archives/2018/index.html","4d4753391771edef4ffb0fac54b54cf2"],["/archives/2019/05/index.html","d347a68d4db7d065d785ed79d6b83236"],["/archives/2019/index.html","4d37868df16c02124114c2a1cc99e453"],["/archives/index.html","e0291aee41f5f8a549941da6af158c97"],["/archives/page/2/index.html","788c98f7506169a0de4b72bf5b9e366f"],["/archives/page/3/index.html","5e22afad53114244006633062e95b765"],["/archives/page/4/index.html","401c3814402b25b61ec090419ee3e09e"],["/archives/page/5/index.html","027b91181b78d1a6a5344d9db91cb88d"],["/archives/page/6/index.html","65ae779c6a4a976f01087f406a21aebf"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","9247e33307a7915e04f545d474787b93"],["/categories/ACG/Music/self-copy/index.html","c09aa73317e8ac4161b4f0a13d7f2b16"],["/categories/ACG/Travel/index.html","2ba920a223c8d30570f8cf06f6ccfe6f"],["/categories/ACG/figures/index.html","0ba4a0e5ad83a74349dbde92b0fe25fa"],["/categories/ACG/index.html","6ebe2249e10bc719cab836788b0098c8"],["/categories/dev/Front-End-Dev/index.html","647e58198aeb4f57a43b1712fac8a5b2"],["/categories/dev/HTML-CSS/index.html","36c814750825731cee84a9d1b9bc0ba7"],["/categories/dev/android/index.html","e8f113ae11086bfddd3c0c4fd364d715"],["/categories/dev/cpp/index.html","45b72822d4ffd9ce339090f77589b093"],["/categories/dev/git/index.html","6d2c25ba798b4e44139d15dc0f5502e6"],["/categories/dev/index.html","747d5e2f82020e399f27deaca26d74ad"],["/categories/dev/java/index.html","daa7cfe282d5c95715b599d4d1ac84a7"],["/categories/dev/page/2/index.html","114347ea90e1ea1f7acab91a2bde963e"],["/categories/maintaince/blog-setup/index.html","4db1cd39f62c2d1b03a74f813b86060c"],["/categories/maintaince/index.html","196fedcfbd82adc9cbf6d7bad2254b27"],["/categories/maintaince/macbook/index.html","e166b7ec01b1ceae2196a87ad9798f14"],["/categories/maintaince/router-config/index.html","7712001eb506a7cf336105d9dd0e5545"],["/categories/notes/index.html","2aa1c67d6414a3bdd608e88668684a1e"],["/categories/tricks/android/index.html","c039be65db622d4d72bf44fd2fb5ccb3"],["/categories/tricks/index.html","02c8f89a7e231e40f8abfeae474e9a5a"],["/categories/uncategorized/index.html","b6bb63f62564f4d0cf0991c561cee521"],["/categories/works/Front-End-Dev/index.html","d70f339f3802ed17e25a357e6be70679"],["/categories/works/csharp-wpf/index.html","22fa3fd915d39f2e9ccd47404a76ad0f"],["/categories/works/index.html","08e9d20465d406bcf96fb0d102fd7e1f"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","4d33747ea1f19f553a399bd857200a51"],["/ja/2015/03/WNDR4300-setup-log/index.html","897ce5798eb0f8f755e819e5293b5010"],["/ja/2015/03/android-hostname-change/index.html","194df8ecd9cec4593ed4ad2d0a98c0c3"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","5387f59323a81d08bc3a9df6e49113da"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","27fa0fff52ff3268c3c4f0a820246872"],["/ja/2015/04/cpp-study-log/index.html","936c641d88b67fff8bd321c4de8edbf3"],["/ja/2015/04/github-pages-ssl/index.html","f0dd61895f221bc029b71fab17b942a9"],["/ja/2015/04/hello-world/index.html","0a11087203c513c24122ce2f169cda75"],["/ja/2015/04/hexo-setup-log/index.html","c331000958d6121fd2cd86824a3b9c82"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","52eda0c5866c839373ea5b7341f76eab"],["/ja/2015/05/cpp-inherit/index.html","95cb616f9de39387a63a6ec9ecc03850"],["/ja/2015/05/cpp-polymorphism/index.html","2a8e9e35035f70dce2fadfa740961427"],["/ja/2015/09/android-root-ota/index.html","3d6f0411b198168993b488ff0ebf801b"],["/ja/2015/09/java-learningNotes-1/index.html","5ea7073a55d49690733e58747da45f5b"],["/ja/2015/09/newblog-newlife-2015/index.html","c52b197e1e2fe2c096ac030a22923a36"],["/ja/2015/09/router-rebuild-2015/index.html","9be13dd3889f7030eb3297953e42d2aa"],["/ja/2015/12/2015-12-21/index.html","c5a72facaaf2abcc27eacb07b480d73d"],["/ja/2015/12/PixInTouch/index.html","102ceb5c7b358bb53bd9c73bea0c1f97"],["/ja/2015/12/git-study-1/index.html","5ae5e14fec18d839f63bdce7936e6c6b"],["/ja/2015/12/hexo-backup-and-migrate/index.html","35e8e76b5caec74bc6ea1eadc809cd6e"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","00c72a5a5703cdd531a12b685d8a2144"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","af1b97310413d4deed2e1b8d55e8de1b"],["/ja/2015/12/router-reconfig-2015/index.html","5a68d440a1a292e3f0b50f541ee62997"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","640e38f0141ab44a29724292ea247367"],["/ja/2016/01/2016-stepping-further/index.html","75e075f0d3800ccab1bff83ccdd233f3"],["/ja/2016/01/Android-Study-1-22/index.html","8c87a1c76458fe389c4532afb951d72e"],["/ja/2016/03/2016-03-20/index.html","f48bb994cf97a8c14ad57fad7a56bca9"],["/ja/2016/03/GSC-535/index.html","c65520a3a6debee6a615d2d525f888b4"],["/ja/2016/03/gulpjs-1/index.html","f1b6ab7cd7dad7fb988982e0176360ec"],["/ja/2016/03/hexo-theme-paper-white/index.html","0cfaecc008434c3ebb203d8c4adededf"],["/ja/2016/04/2016-04-19/index.html","53292a8d79e38ca25b6424fb7fdc7414"],["/ja/2016/06/2016-06-16/index.html","7739f8a593f2af9ff1b8c229817dd40f"],["/ja/2016/09/2016-09-18/index.html","23ba186e4552ff6e9b2ac89f993ff1f5"],["/ja/2016/10/2016-10-27/index.html","18984b127592b031c3103f07bfb4f0d9"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","27ad2088f7442b39b0c2ab1daa642937"],["/ja/2016/12/improve-duoshuo/index.html","eb757d06a10f8ad2220a6625f556e6fe"],["/ja/2016/12/use-travis-ci-your-blog/index.html","7215bffb90c61eb404161fe77b703bd4"],["/ja/2017/01/2017-iyahoi/index.html","47aa87ddff2500cb10224bd368fc8603"],["/ja/2017/01/webpack-amd/index.html","1e190342e758eb79ed980982fe8c8b98"],["/ja/2017/04/kotobukiya-syaoran/index.html","ab9d9ae24957f75c1e1974552808dc97"],["/ja/2017/04/macbook-and-surface/index.html","b199cb0adfc9876c7f0c6b870fa6fc3a"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","bfbcbd07f102ad5c8c94248acf64cdd8"],["/ja/2017/06/noragami-seichijunrei/index.html","b22086d96cb251e5515fc6e89736d3ce"],["/ja/2017/08/cross-compile-55-libev/index.html","c273bf6e4109a1718bd4bf5e0ebf9cd5"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","1e8800cfc685a6963564509d7f1640d7"],["/ja/2017/08/hello-jp-world/index.html","517502a349c2fd7c64c9417160a87a89"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","8334e29ed0bf331b94b969c617de6617"],["/ja/2017/09/record-user-login-status-methods/index.html","cede1b71ff2d18767b60bd3b98f74c98"],["/ja/2017/10/vue-typescript-early/index.html","69e5c3030d6b4b79a804f3946ba1efab"],["/ja/2018/04/2017-end/index.html","0811844de86a8c8263bb0e846de9e480"],["/ja/2018/04/twitter-account-activity-api/index.html","7dff6d512bce042bad8d785ac15d7bed"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","fa11462cadeacd0191a81ecee093ec92"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","7640d5ecb1cb6323131719a7144ee848"],["/ja/404.html","b61a619e29deda7533f44cec27fcd42f"],["/ja/about/index.html","055d63ab07bb99449abf61b26fbd7418"],["/ja/archives/2017/08/index.html","c2ca832403691cef13818c56401d59a2"],["/ja/archives/2017/09/index.html","753f3594ec119bcf61fc038f0183a93f"],["/ja/archives/2017/10/index.html","abd5eb5545907697c7cdbf1f5b83d64e"],["/ja/archives/2017/index.html","8863f865acbff03078e79b231b9c7f75"],["/ja/archives/2018/04/index.html","ca60635359aa2492f6a520c33fffdce0"],["/ja/archives/2018/05/index.html","bc0a90ca9207d48b42c5db22fe87e4df"],["/ja/archives/2018/index.html","d6a160f03104d8a1a939668ef2c784ce"],["/ja/archives/2019/05/index.html","0cfc05a4e7fbacec1f0eb60beb7dc65f"],["/ja/archives/2019/index.html","254b7b86e6fb24fb92a55af37650fc11"],["/ja/archives/index.html","a685b8723b193e6c311c36a28bd375cb"],["/ja/categories/ACG/Travel/index.html","c34c71f5e2c41596cffb3d30bad09eb6"],["/ja/categories/ACG/index.html","8580cf851d105ac3b1a604d09039a869"],["/ja/categories/dev/Front-End-Dev/index.html","d31aa2d62ebe0e9c902269823652c580"],["/ja/categories/dev/index.html","509dca9d1616b48f9391e66306898032"],["/ja/categories/uncategorized/index.html","80e88a133ec6da5ee7df21823e191219"],["/ja/index.html","b17b352dec209620ae3e242add844479"],["/ja/nihongo-test-page/index.html","f3bb1cdd2c351302adc8c9bc11ae4230"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","a857e4d5eb3eee3cd83c9a8147496935"],["/page/2/index.html","48b6ef303fc4d475cc5daa15a0ff88a0"],["/page/3/index.html","821586185c8fb6aafe60863e06baa88e"],["/page/4/index.html","73d983c2418bed6c6438aac23212fa96"],["/page/5/index.html","eb7ffe402933d2ca07f6acfd3670d0ab"],["/page/6/index.html","03ef69350c330f938f59749801dc4e4d"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","92d037050535b053b2b4206c92120233"],["/zh-cn/archives/2015/03/index.html","7fc85db258477d1a9cb294e29cd67a40"],["/zh-cn/archives/2015/04/index.html","192b89e2fffdff7e1d98b41f1dc4de6d"],["/zh-cn/archives/2015/05/index.html","c7f84eec685da121f9abcccebace8b4c"],["/zh-cn/archives/2015/09/index.html","ee6c481ee200cd6c22fd92d8ad41dc7b"],["/zh-cn/archives/2015/12/index.html","b38a9b020b6b45d26912ad5c2c82f8da"],["/zh-cn/archives/2015/index.html","4302fed2b13ed9b42c8f296e4906fffc"],["/zh-cn/archives/2015/page/2/index.html","d286debf11b0e52bd9914fe69df721c8"],["/zh-cn/archives/2015/page/3/index.html","c474f74ca8b297e90e86a15c4b4417d1"],["/zh-cn/archives/2016/01/index.html","15518c59fc3a49dc1f5cfd9d268f8ca7"],["/zh-cn/archives/2016/03/index.html","a45990b75a1788dd832964009e59b693"],["/zh-cn/archives/2016/04/index.html","7336aef1a9d80246f3ff6c5d14ec5097"],["/zh-cn/archives/2016/06/index.html","0b8ce157e1229febe055f30769bc0b80"],["/zh-cn/archives/2016/09/index.html","dcbfbca5ed1934508e8cd7ab55c2657a"],["/zh-cn/archives/2016/10/index.html","56de0f6d3ba6d851ff90dd28247ab2e5"],["/zh-cn/archives/2016/12/index.html","df99415b034c849102bdb7923092946c"],["/zh-cn/archives/2016/index.html","452dc2867abd96362533684f23046ebe"],["/zh-cn/archives/2016/page/2/index.html","aa4cf6b56f6afa5bdbb37a1601afc992"],["/zh-cn/archives/2017/01/index.html","a42ce1c1389b6c807e626008a2802866"],["/zh-cn/archives/2017/04/index.html","ed9f87f01b8e0a0d017ea132a7892cb7"],["/zh-cn/archives/2017/06/index.html","a03fdcf3049a2f43363b394cdcd74cdb"],["/zh-cn/archives/2017/08/index.html","d53b16ceebd5b92f8a10250460daf9f4"],["/zh-cn/archives/2017/09/index.html","eb47d5636fc3f5c9ee54a36cc3d23b99"],["/zh-cn/archives/2017/10/index.html","51a7105097ded5c91a2a0031435a54d7"],["/zh-cn/archives/2017/index.html","575a58dbf14dbc6d3aa27ebb7882664d"],["/zh-cn/archives/2017/page/2/index.html","01d8e48d8264d3a417ad34061539f33c"],["/zh-cn/archives/2018/04/index.html","35b790359252dc93d41290a75eb23f39"],["/zh-cn/archives/2018/05/index.html","0a6ca8d928f80400599accc624bf6412"],["/zh-cn/archives/2018/index.html","90ed638d8340adab694e48a56dbd2faf"],["/zh-cn/archives/2019/05/index.html","276578eab7053390aee70adb54bb5856"],["/zh-cn/archives/2019/index.html","6d0efbdab10d470687554c6d327e450b"],["/zh-cn/archives/index.html","956724845f7df6f03f9dbe53b97e69df"],["/zh-cn/archives/page/2/index.html","ea302c7b368c40b2b12f4f848c98efee"],["/zh-cn/archives/page/3/index.html","6666fb8317c995580773a5aabe53cd37"],["/zh-cn/archives/page/4/index.html","216569f6b174c7ec16e96f265e23d187"],["/zh-cn/archives/page/5/index.html","e016e81b20d988bf9f189c92e10d9aca"],["/zh-cn/archives/page/6/index.html","ad8cae9c189c52ae12218a4465693642"],["/zh-cn/categories/ACG/Music/index.html","334bf4b81150517718be28499f84ad63"],["/zh-cn/categories/ACG/Music/self-copy/index.html","ccbdae1521c6f93b4d71e6df40e61205"],["/zh-cn/categories/ACG/Travel/index.html","dcf8092f086f57a73c9b1e77958c02d1"],["/zh-cn/categories/ACG/figures/index.html","70fc2e55b4239be818ad5ea2c7d1c425"],["/zh-cn/categories/ACG/index.html","755c2346d6f9ad7921663728bfa0730e"],["/zh-cn/categories/dev/Front-End-Dev/index.html","afa38afeba21d31a3e655b1c90d413f3"],["/zh-cn/categories/dev/HTML-CSS/index.html","4bfabb190a6c171e7123c1d6452083b5"],["/zh-cn/categories/dev/android/index.html","fcccfaebf018c5b0ee455253fd80b374"],["/zh-cn/categories/dev/cpp/index.html","0f5716af52189e9f7a8024c43f23f491"],["/zh-cn/categories/dev/git/index.html","7c097f34148a840aceef04a993d1d08d"],["/zh-cn/categories/dev/index.html","da22efc0dd54e0087a0749bd169db017"],["/zh-cn/categories/dev/java/index.html","1c2e5fe4383c1c9024ee4796d6b9f6bc"],["/zh-cn/categories/dev/page/2/index.html","57dfb7b00b0a62d756d0610c292904da"],["/zh-cn/categories/maintaince/blog-setup/index.html","09e8e3a25780c1c9da50b44fb3fd4147"],["/zh-cn/categories/maintaince/index.html","6df025e6cd0a59eded02a74ff4061370"],["/zh-cn/categories/maintaince/macbook/index.html","c7665971fdec71e67daf0809d2aa72f2"],["/zh-cn/categories/maintaince/router-config/index.html","f65188750d11c00e194d9b84925be1ca"],["/zh-cn/categories/notes/index.html","0459f3faa294c8537bd7ef338ed935d9"],["/zh-cn/categories/tricks/android/index.html","dfb10c5b8842a299a08314c14306c46b"],["/zh-cn/categories/tricks/index.html","1ef3c4f2155c0d432c54adec71babcd0"],["/zh-cn/categories/uncategorized/index.html","2dd107f7d9763036b426559eb9736d5e"],["/zh-cn/categories/works/Front-End-Dev/index.html","be7cd40d7bef7241728bb411ba2a0363"],["/zh-cn/categories/works/csharp-wpf/index.html","9066a45e96d451ddf56fefa5cf51ff42"],["/zh-cn/categories/works/index.html","6e17baf8ecdfa36ffcae7bef84e9ed22"],["/zh-cn/index.html","6d1444b95a789bdbc027eb8e7f1c1975"],["/zh-cn/page/2/index.html","ef1f34ec77eeb75579b0ba88221bc3f4"],["/zh-cn/page/3/index.html","3d781efda7997ee939b5b374e63c439a"],["/zh-cn/page/4/index.html","d2e260064c4fbbeae44824203cbacc83"],["/zh-cn/page/5/index.html","5db473b6be1520e7d7f92b4a474281a8"],["/zh-cn/page/6/index.html","51d5b4f01776e0dec404832c9773738d"]];
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
