/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","9a8f74db87ac905492e84d454626053a"],["/2015/03/android-hostname-change/index.html","7f5050a3a2ea9edcc4fcde4d7ba40dd2"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","679b086c749a5998e4703b00cbc70424"],["/2015/04/android-chrome-issues-with-webpage/index.html","d646b2775a645bcd1709cf3f44585eb8"],["/2015/04/cpp-study-log/index.html","10a6e18c4684fc5c3077b5c84ba44416"],["/2015/04/github-pages-ssl/index.html","f69908069037f6ae4f8c8faa61363b4d"],["/2015/04/hello-world/index.html","618c2368ee0f3d54134d17ba03522710"],["/2015/04/hexo-setup-log/index.html","3f393b8ec5f8e4f3a26f6cb7c8662276"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","f4cfe6848f2cc2ae51cc4f727b43f778"],["/2015/05/cpp-inherit/index.html","77cb89b869916077acf859f9ad2a7b6f"],["/2015/05/cpp-polymorphism/index.html","1f3a3fea203f3b154f0282971f263fd2"],["/2015/09/android-root-ota/index.html","e9986c17eeadba5f8fa0917b9653b63d"],["/2015/09/java-learningNotes-1/index.html","f1d9d2311f12bdb18ef98ab67ae1a7eb"],["/2015/09/newblog-newlife-2015/index.html","2484e7839310387f78b604642c6ba489"],["/2015/09/router-rebuild-2015/index.html","ce8e07235696aa29dd174ac2a1043721"],["/2015/12/2015-12-21/index.html","5cc44fe9f6eced9468c771e453c749e4"],["/2015/12/PixInTouch/index.html","17acd4c73f5c11c9551f944825939e96"],["/2015/12/git-study-1/index.html","f33cfefb7bd339ef483d1225ffd5aa3e"],["/2015/12/hexo-backup-and-migrate/index.html","130d1873a28deb09fafe282ae319c536"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","fe3e6966b657fa2000fa16dbc6c3712a"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","833e6776fafb81afea58e0ecabc10da8"],["/2015/12/router-reconfig-2015/index.html","e200a1c9b5b6ba0e3b1c54b5b76468fa"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","d8ce2d739dc717e3210d8467841b5234"],["/2016/01/2016-stepping-further/index.html","1dd6f2090704d62de12c3953b387718f"],["/2016/01/Android-Study-1-22/index.html","8062ff69fca76d68e1855adf452518d3"],["/2016/03/2016-03-20/index.html","8b6e30e3dcfe4f5c1a763714e743cc9a"],["/2016/03/GSC-535/index.html","aaf4e87e19b60f8e33cf43d0e8734f3c"],["/2016/03/gulpjs-1/index.html","eb582399bf5ab23bb7c797353562529b"],["/2016/03/hexo-theme-paper-white/index.html","5a150ddbdfbd68764e2103a3ee437154"],["/2016/04/2016-04-19/index.html","d0cf55c8345bcce0d13f9e5421609e8f"],["/2016/06/2016-06-16/index.html","925bac5f905ef432c87b80069a614602"],["/2016/09/2016-09-18/index.html","aa0c081802842b5f0d1fd92c7861884a"],["/2016/10/2016-10-27/index.html","3e3258fb64c9ad55fdbd6d0534bb869c"],["/2016/12/config-switchresx-and-2khidpi/index.html","887ad8711fb76f227652a00a89dd5038"],["/2016/12/improve-duoshuo/index.html","8b5493a7935c7de5604b32e2c7ba5171"],["/2016/12/use-travis-ci-your-blog/index.html","4df366433bc4a29a4b8450f5db34a437"],["/2017/01/2017-iyahoi/index.html","bd380a6021f2931cc798b020cb569f70"],["/2017/01/webpack-amd/index.html","e9e1acaf5c8597580f1197a851ff7f09"],["/2017/04/kotobukiya-syaoran/index.html","068bfdc09b4df90e760ac9dee3650ca4"],["/2017/04/macbook-and-surface/index.html","0bc4cb23ba2c9a794fd9be7850c0c87d"],["/2017/04/uc-hyakuya-yuichiro/index.html","8b5a666fb9b5841ba68a4671b709ec1f"],["/2017/06/noragami-seichijunrei/index.html","9ec98428e9c427993286cae71b527e8c"],["/2017/08/cross-compile-55-libev/index.html","71d71364e2fa2216ce2dfdf56bc822c7"],["/2017/08/explore-service-worker-working-lifetime/index.html","a202ae551a14bdbdf67b45853dfb00b1"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","3d738ff859b3a29d14624c489daa78bc"],["/2017/09/record-user-login-status-methods/index.html","9d6d38c22eced144331b0c174b31aa2b"],["/2017/10/vue-typescript-early/index.html","c0f818ca7ea2d4e947c5d59fafd69d28"],["/2018/04/2017-end/index.html","874d41cd7540463c9abfe607fb5584ed"],["/2018/04/twitter-account-activity-api/index.html","81e93824856852f37de34259812ffcc0"],["/2018/05/buddy-complex-seichijunrei/index.html","edb03490bcb60af79897a7b2f87a9280"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","39299a6986f3bd48105745bbbc91ff87"],["/2019/05/2019-05-17-google-io-tech/index.html","2295fc953541d691e5543f93484ba3c6"],["/404.html","7bf71a776dad1b8b620643064a6725d2"],["/about/index.html","22ad62ee7f458f47dc4c0a4966b2d30d"],["/archives/2015/03/index.html","01b284e62afae78ee022c42c5fd2bffc"],["/archives/2015/04/index.html","308ac361a55756c9f992f86fa807f5fd"],["/archives/2015/05/index.html","834aa2cbbbba00c7969a839d3695a903"],["/archives/2015/09/index.html","0aa587e66bf5bc48d9279e5bcb42568b"],["/archives/2015/12/index.html","ef79a514b53255f4aacc9b56e6e7fb25"],["/archives/2015/index.html","9cc22216f047822140833e41cb6f9222"],["/archives/2015/page/2/index.html","633a2a08256d47c6a8197c38edd8a4c2"],["/archives/2015/page/3/index.html","207627aed6a787cd8d63ca82c0a68822"],["/archives/2016/01/index.html","4b9be88ead5ae04df099c3324e92ca51"],["/archives/2016/03/index.html","2f7e2c2706986c48de7c517119c6799f"],["/archives/2016/04/index.html","bd2eafc75ebcbd1bd04cef545633559d"],["/archives/2016/06/index.html","0228407b097cf4d5f38545e7e67b272c"],["/archives/2016/09/index.html","435b17f0b1f6b6508d199936688e5eeb"],["/archives/2016/10/index.html","4b0d68d6b694cd7b0ca7c676525b9b3a"],["/archives/2016/12/index.html","36c107fc00320b47f829dc522755bf21"],["/archives/2016/index.html","65ab293ab82d9cf86879f0629ac6be69"],["/archives/2016/page/2/index.html","739a6ff52f254e8b6a6a4e7149d6f074"],["/archives/2017/01/index.html","d132cf790c9ddc6532ec9ef6fbdf9d66"],["/archives/2017/04/index.html","f34367c9697f186d09b64152182f74b1"],["/archives/2017/06/index.html","b9074b5e674d6864039f57b47236f8eb"],["/archives/2017/08/index.html","1cf4b9de1a2a38054cc1bb425e823203"],["/archives/2017/09/index.html","4fed91cc0ac6a4128af462b63ee8ee1a"],["/archives/2017/10/index.html","631402f7bf6ebf13e9a0c9109f4c7523"],["/archives/2017/index.html","54996417ab8da1956aac00e6682057d7"],["/archives/2017/page/2/index.html","7f4b8d44a388a3f9bd282fff5d53233b"],["/archives/2018/04/index.html","01110cb64004383a5042d403cadd1d74"],["/archives/2018/05/index.html","449999fe651d94f66a5d8a539d64b298"],["/archives/2018/index.html","af2fbfa08ccfef262149fb5e84b906dc"],["/archives/2019/05/index.html","d0de7235f76c1766958cfcc9eb93582f"],["/archives/2019/index.html","5412d100a1886194fd56cdb3607c5dbf"],["/archives/index.html","d6c1f2a8bdf56d77797098c1d9f3315b"],["/archives/page/2/index.html","83341fd1af1ddc4058abac7b52c975cb"],["/archives/page/3/index.html","612c103887b4d8d7a21e1857a57baa51"],["/archives/page/4/index.html","96bcb050eeed55fe46575cdd47726e90"],["/archives/page/5/index.html","fad6cd2668a429cf876a3b0039e98adf"],["/archives/page/6/index.html","5c587e28eea7f4433a16c71cf393f44c"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","495ce9e138201ddeb5120f6be9b9c0f7"],["/categories/ACG/Music/self-copy/index.html","ee00a3ab3cbb141910d760a706eb7786"],["/categories/ACG/Travel/index.html","104eb65d8b606db010b5042a4146be2d"],["/categories/ACG/figures/index.html","56d4ea723715fa1a7ce87354431b1adc"],["/categories/ACG/index.html","0df4881c979cf5333a94d8331b5a6ae7"],["/categories/dev/Front-End-Dev/index.html","e3884c61b019b27f95b96f22c81205b0"],["/categories/dev/HTML-CSS/index.html","6b45dc9f6d7116f9a15e96299a90aaef"],["/categories/dev/android/index.html","3ab484d4b97d62a39a662e4370b065e1"],["/categories/dev/cpp/index.html","27fc0f4933d8acd47b30241c260268a8"],["/categories/dev/git/index.html","c0f5cf842193e45d7be66262d32467e6"],["/categories/dev/index.html","c8678ebf3e58b5d3e83ae1de1f5265ef"],["/categories/dev/java/index.html","67fadfd540f3b2081d54543c3b89d836"],["/categories/dev/page/2/index.html","ca69f73184d4e4ff6a9d85f7f913a5b7"],["/categories/maintaince/blog-setup/index.html","5b89626489a1c98ea444a51dcd7e7aec"],["/categories/maintaince/index.html","49438c1ac0856b66ca17df0ce9cfec9a"],["/categories/maintaince/macbook/index.html","be30dd725787c77077845e5f19b5bc80"],["/categories/maintaince/router-config/index.html","a365c792219a9e9893e2af837ec2d7a2"],["/categories/notes/index.html","6ae0e6ca662b972d417c88909ac33e0a"],["/categories/tricks/android/index.html","969bab97a325704da2a3a7a3c8a8d54d"],["/categories/tricks/index.html","34cf2484baa01788562eba5f8cd6aca2"],["/categories/uncategorized/index.html","97c39f3e500d3b34f0f3459210735a6c"],["/categories/works/Front-End-Dev/index.html","17e4c991330ca7ef3cf917bd3e907039"],["/categories/works/csharp-wpf/index.html","26ea215e58546f8ad7d966ab5116295b"],["/categories/works/index.html","a17c9b5ebe9c3fb34631a4560c25aa3e"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","4a4c6e730227957df2b1ba9afdddbf10"],["/ja/2015/03/WNDR4300-setup-log/index.html","bf94d628d9624367a6eb8c9763ebfbcc"],["/ja/2015/03/android-hostname-change/index.html","6b7f9921e311223fc1256c124962445b"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","d9e7fd7a851eeeb6504baef713b6571b"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","8deb0c128f9fff0b3c43596e6e01d04e"],["/ja/2015/04/cpp-study-log/index.html","cde1e7426f328c0c1b919ab76a89cec3"],["/ja/2015/04/github-pages-ssl/index.html","6c8123f324a5ed97c30758b0d41f6e98"],["/ja/2015/04/hello-world/index.html","b5466b256e94d6f4187a8b60ec567319"],["/ja/2015/04/hexo-setup-log/index.html","aa8c4e94a45dc32d37c90add0f4b12db"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","0a68402618d99efc9e5a984363418a85"],["/ja/2015/05/cpp-inherit/index.html","16461fe8c1dee11961625637a1f3c225"],["/ja/2015/05/cpp-polymorphism/index.html","e9fd3acb7a09d08847f84c3fdf5bb8b8"],["/ja/2015/09/android-root-ota/index.html","802d69fa4a18320ad28cfb2901140949"],["/ja/2015/09/java-learningNotes-1/index.html","723c2cb69103e6d7c892ce81d3810380"],["/ja/2015/09/newblog-newlife-2015/index.html","e6408151475c7f328478bee5120ebc6f"],["/ja/2015/09/router-rebuild-2015/index.html","3e7d6c01c2a6c00e9692f0d7883da22e"],["/ja/2015/12/2015-12-21/index.html","24fbd0c88614fff0059fba1041261583"],["/ja/2015/12/PixInTouch/index.html","dffbae79a861835601ec28e0215096c5"],["/ja/2015/12/git-study-1/index.html","b480f8e5cb8b395abdcfce002a26fa93"],["/ja/2015/12/hexo-backup-and-migrate/index.html","defa6735fe2f7d31654564161454164f"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","1eaf3d0b40bae5019a8a92b85f26d133"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","c9fe82628f8ab74c112ae3963ac68630"],["/ja/2015/12/router-reconfig-2015/index.html","a47f660ddf8c6364d5864b5d99d6c78f"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","1c9d2effe914441d267e6cb00ae222a2"],["/ja/2016/01/2016-stepping-further/index.html","91ec44aff1282cc67755fdd0fcd25fe7"],["/ja/2016/01/Android-Study-1-22/index.html","4e3f8cad47294bb29a59698e2f40467c"],["/ja/2016/03/2016-03-20/index.html","63cf9979494189cb3c6f817940db7603"],["/ja/2016/03/GSC-535/index.html","e215c35162fd8134374c314aa05f778c"],["/ja/2016/03/gulpjs-1/index.html","3b62b7465f2332815a64ef65e4400cca"],["/ja/2016/03/hexo-theme-paper-white/index.html","cf60449000eff7ad0900a6900ac4068e"],["/ja/2016/04/2016-04-19/index.html","47b62db3cbd4866af64f0301484631e1"],["/ja/2016/06/2016-06-16/index.html","cc65e8f96fbd8e09d3e60e7470df2396"],["/ja/2016/09/2016-09-18/index.html","dc20ff83da3897e9a0fe90bc2e983eb5"],["/ja/2016/10/2016-10-27/index.html","cfcd1a58291d3391c96486db6f5b9118"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","72f7c07660e1627f7f86b4901a3588bb"],["/ja/2016/12/improve-duoshuo/index.html","0814c3746e4a5908bfb82bb9b22661ab"],["/ja/2016/12/use-travis-ci-your-blog/index.html","c1096c26cee40d9e8a395ddddec53e7f"],["/ja/2017/01/2017-iyahoi/index.html","d5d3b8d96d28e592c52c0092f8c31cf0"],["/ja/2017/01/webpack-amd/index.html","24ab9397f680c2dcd77c8744a84759bb"],["/ja/2017/04/kotobukiya-syaoran/index.html","143b2e017991e3d4de0811584bbf4ab1"],["/ja/2017/04/macbook-and-surface/index.html","ad011e4c80128301dd329b637c78c5bf"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","5bc9acc51e7f9d4272465a93f3de7769"],["/ja/2017/06/noragami-seichijunrei/index.html","976a7ed6fd5018e8d789c78708f32509"],["/ja/2017/08/cross-compile-55-libev/index.html","67f771cb7fcf9943a2a3fbf3f200535d"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","6344161fe666762aee78f433b0ba481f"],["/ja/2017/08/hello-jp-world/index.html","757d7f3f429d86b25457b03a83a2fb27"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","fbe07129843f5e9e87a966a4866e3873"],["/ja/2017/09/record-user-login-status-methods/index.html","e60d33720f03b001df60fdc585ee9513"],["/ja/2017/10/vue-typescript-early/index.html","e9372e89dc51d9e388ad297df5b54aa7"],["/ja/2018/04/2017-end/index.html","f64fa04843cb9a1d89dbaa25e63ac0a2"],["/ja/2018/04/twitter-account-activity-api/index.html","fb626c0ed13a15d904d3c4b4faa11bfd"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","6b6ee03c4d3ab3ddfca631ada2f5965f"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","555589c09f5995a538d45dda5d3acdd8"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","0f64f562f0e0b11c4a21c9cab53c6a39"],["/ja/404.html","52a71f2ee5a93505540b43e488153a58"],["/ja/about/index.html","cbc9e78ed4b103db6dddc82d5ea4f4b9"],["/ja/archives/2017/08/index.html","df0b2d10fea67e3e1bfc7d5e36e07a46"],["/ja/archives/2017/09/index.html","998c460dd5126d6f02c45d68d807c789"],["/ja/archives/2017/10/index.html","b6ad1f4f64636663df1fb3f0ea75c284"],["/ja/archives/2017/index.html","12076c8623915cb7245467a36dc4dc64"],["/ja/archives/2018/04/index.html","7174129e24e2614db92bce5ae2c7d180"],["/ja/archives/2018/05/index.html","b65093a20f89c84b3e95d44d86fbbd06"],["/ja/archives/2018/index.html","78188ad1774aff96151d6ca7039e3c91"],["/ja/archives/2019/05/index.html","e0b7082bd234477b205bac3186b1a5ed"],["/ja/archives/2019/index.html","6344adf9d9561e640aaea7777fad0184"],["/ja/archives/index.html","f1d7485bf119ae422c7b1ddee9742958"],["/ja/categories/ACG/Travel/index.html","aeb69465a6ffa8cfab70e260415ee487"],["/ja/categories/ACG/index.html","c3dac77252a3a63549221aee1d698def"],["/ja/categories/dev/Front-End-Dev/index.html","a4cf1d39807330b4bb980a4a2314ce50"],["/ja/categories/dev/index.html","125d5ecf4385b9042c010050f440964d"],["/ja/categories/uncategorized/index.html","8db2a0851ebef265ea96de13ec84b0cc"],["/ja/index.html","5fe63d6e46cb40704cade66995b11061"],["/ja/nihongo-test-page/index.html","9d336f063bf0267a18559011898018a5"],["/ja/resume/en/index.html","f18cd5e51221f94750d5ece4a29165fa"],["/ja/resume/index.html","d8ed95c0f4dcea5d4a819f67fe990a32"],["/ja/resume/ja/index.html","8455914c42fe8658d9ffa720bc4ae2a1"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","1636f62111f467c27394eeaa2bcad213"],["/page/2/index.html","d50b72f97e60903f20e0b33bdf1445f9"],["/page/3/index.html","d6b588813230b21f7d14e6a23c67372d"],["/page/4/index.html","291ad04f47d2b57696dd9ca07a7f24ae"],["/page/5/index.html","454a89fc4975b4541bb526494e41b240"],["/page/6/index.html","c4a08b79c274b1bf187d14e4fde04389"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","7d44c348ac0173be9c11724831c5e4a2"],["/resume/index.html","c0ce7718a977664d3dd4542ad79f1000"],["/resume/ja/index.html","992434f72081224fe44728146cc9b1c7"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","5f4df975bd30e50925e49831bdc4d5e2"],["/zh-cn/archives/2015/03/index.html","c4496c305dab14e78c61f9828a28958b"],["/zh-cn/archives/2015/04/index.html","2426a110400e5d2867458dfa98c3dbc5"],["/zh-cn/archives/2015/05/index.html","23e36c0bfd5da16996a5f5b4d25878a3"],["/zh-cn/archives/2015/09/index.html","fe9cd8401cbad717e7a9459c4a2e6164"],["/zh-cn/archives/2015/12/index.html","73c6a104d5e50bb4f1e1857d08b49428"],["/zh-cn/archives/2015/index.html","bb85f651f604db96889fa0c3980b63f3"],["/zh-cn/archives/2015/page/2/index.html","b4581eb7ec8dc576fd25bc4566889bb8"],["/zh-cn/archives/2015/page/3/index.html","a96d7b33012afb4be1cf651b90e3096c"],["/zh-cn/archives/2016/01/index.html","6b47fc15e75eda0fa3e9476ad567f2e1"],["/zh-cn/archives/2016/03/index.html","111a6346dc7d7a8416d9030927a6bb3f"],["/zh-cn/archives/2016/04/index.html","b59a5dd26ffc08ed7b2163b09e3146ad"],["/zh-cn/archives/2016/06/index.html","342fbe4c6f6bc629f1f2d1d60dfde2c5"],["/zh-cn/archives/2016/09/index.html","3ed9495d2e8531495c6360e46e69b3e7"],["/zh-cn/archives/2016/10/index.html","bd90913390207e4fe62b739ac1df8525"],["/zh-cn/archives/2016/12/index.html","78a78d259330a2baace5457a81df08e4"],["/zh-cn/archives/2016/index.html","4eb9680cec410aebfa3c0b8112001908"],["/zh-cn/archives/2016/page/2/index.html","665951325f0ec3c2878d4f075bdc5c41"],["/zh-cn/archives/2017/01/index.html","a11cffa3402bdc35d2ab491949e6698e"],["/zh-cn/archives/2017/04/index.html","6fc5d14506703ed7fe72075aaa03d6d7"],["/zh-cn/archives/2017/06/index.html","e56f02fd2ad1d5ebd11f53d91d1a66fd"],["/zh-cn/archives/2017/08/index.html","a5186dddd1849ef5ade62f0406d2f9fc"],["/zh-cn/archives/2017/09/index.html","199c9e085000aee3f6edf80e7b85b583"],["/zh-cn/archives/2017/10/index.html","ed9cc758efbce75277d2da5265aadec8"],["/zh-cn/archives/2017/index.html","a39bc43b111a23ed3211a23db685731a"],["/zh-cn/archives/2017/page/2/index.html","676823129305f119664a1b947e0fc3b5"],["/zh-cn/archives/2018/04/index.html","fb5464226c0c5c8961696afe89be666a"],["/zh-cn/archives/2018/05/index.html","23e6492469289c77cf9e2572b3764058"],["/zh-cn/archives/2018/index.html","6a83454871f6d36cace8ccabd85abe1a"],["/zh-cn/archives/2019/05/index.html","97d4446d1ec267d307b8c7d7710f7cfa"],["/zh-cn/archives/2019/index.html","5e08e329199795562aa7c065623f39c5"],["/zh-cn/archives/index.html","59dcc7d96ba560fbec5cfa2c18d32acb"],["/zh-cn/archives/page/2/index.html","ba58b40db56ee8abfd2871eb996119c0"],["/zh-cn/archives/page/3/index.html","d93376493f1bd0c53b3a37523372daff"],["/zh-cn/archives/page/4/index.html","cc8dd829b3dec4258e6cedf91e0ca9f3"],["/zh-cn/archives/page/5/index.html","90213a9bfafff801f7d249f2f9c82af5"],["/zh-cn/archives/page/6/index.html","36825f6337b69853346500d144408116"],["/zh-cn/categories/ACG/Music/index.html","21670f1e3ce276971093069788f8eb27"],["/zh-cn/categories/ACG/Music/self-copy/index.html","15e701c499c04b8bc1713abdd71891e8"],["/zh-cn/categories/ACG/Travel/index.html","06d3bbfe66c707402390db16c848b277"],["/zh-cn/categories/ACG/figures/index.html","1b081879d4c4c81181687aa9c1964a4d"],["/zh-cn/categories/ACG/index.html","c21231becbb8fe9a73d7abe6f898cd2e"],["/zh-cn/categories/dev/Front-End-Dev/index.html","0eac1a14c168c32ffc156d2ca4ef8ffa"],["/zh-cn/categories/dev/HTML-CSS/index.html","07b63123b29f853106e2d1a2e9a2c4e6"],["/zh-cn/categories/dev/android/index.html","20b8608937b06b11726fe3eeb28183d2"],["/zh-cn/categories/dev/cpp/index.html","fe0fe1b39639f98ca7b53dad9b366a25"],["/zh-cn/categories/dev/git/index.html","2102bae84d291fe2fc4993b9fbe3a7df"],["/zh-cn/categories/dev/index.html","b70dff49c02f93e0f3dcfc7aa335bed4"],["/zh-cn/categories/dev/java/index.html","df913bc6e618afb8d6c61a79624af291"],["/zh-cn/categories/dev/page/2/index.html","03dca95dfa66faa04fa64ad63d5e0c2a"],["/zh-cn/categories/maintaince/blog-setup/index.html","070b067755bd94cb0e119e9d6d7e7320"],["/zh-cn/categories/maintaince/index.html","0b159cbb0966373e3e4d0895569e32ac"],["/zh-cn/categories/maintaince/macbook/index.html","0fdb03b2b44673f2d6ff2a69159b10ba"],["/zh-cn/categories/maintaince/router-config/index.html","158d367577e7438639e6e74e5dd2fb87"],["/zh-cn/categories/notes/index.html","b30e4dffca9259d63ff0b85291cf8ab3"],["/zh-cn/categories/tricks/android/index.html","cc4019942ba15c9d0857aad93321b159"],["/zh-cn/categories/tricks/index.html","6793fe7ca5d1d21b8c712c27b3947f40"],["/zh-cn/categories/uncategorized/index.html","a9f6da32299183301e100134730d11c7"],["/zh-cn/categories/works/Front-End-Dev/index.html","a2eda1967c30fa9067c2255d24a3207e"],["/zh-cn/categories/works/csharp-wpf/index.html","cacef79f88f1f7f4f2744abe000608a7"],["/zh-cn/categories/works/index.html","351766729ad829c3a6cdc7ff06667dbd"],["/zh-cn/index.html","ff6d001f904a056f0d8b4e47948e4710"],["/zh-cn/page/2/index.html","a19176e475616f60f3ef62ed3a034a4a"],["/zh-cn/page/3/index.html","a82971d47e016506528564ad311ce66a"],["/zh-cn/page/4/index.html","e9595d247f0de728218c9e1cd4d001a4"],["/zh-cn/page/5/index.html","be45d40e18e8b0623a9ffbc93abe4752"],["/zh-cn/page/6/index.html","0ca833b10bc1f5f7c2161766253b5262"]];
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
