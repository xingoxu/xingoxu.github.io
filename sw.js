/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","a51354236da8132c5d00897c1961911b"],["/2015/03/android-hostname-change/index.html","0f736d278ed307b8785832223f3ed968"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","ea02fbad2d7769af8e027db8d65e815a"],["/2015/04/android-chrome-issues-with-webpage/index.html","1024e7476d5066f7863b282f3f24c8d1"],["/2015/04/cpp-study-log/index.html","252efe19f9cd65c2ff182e8691e2d919"],["/2015/04/github-pages-ssl/index.html","4ae8a0b9cf7fe1f5cd5ddfce020236b5"],["/2015/04/hello-world/index.html","9da64b8639caf16ea5717973e829c942"],["/2015/04/hexo-setup-log/index.html","632dc0a5c32a1addf06d6f8b960efe7c"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","e2001d6adeeb698444dcbd282205b182"],["/2015/05/cpp-inherit/index.html","7b80a20853f027ef1a8568ee34bf6190"],["/2015/05/cpp-polymorphism/index.html","24db014f78e427004bfca65dd8eadad6"],["/2015/09/android-root-ota/index.html","15901a8f0283aec013f5d907719063c4"],["/2015/09/java-learningNotes-1/index.html","13af0c2e0c2a775244dbb24b986ceecd"],["/2015/09/newblog-newlife-2015/index.html","c716e392fd89627b60e7eed2014015fa"],["/2015/09/router-rebuild-2015/index.html","c51d65f37733f9dc5291e7c4d84574b3"],["/2015/12/2015-12-21/index.html","286c67facb3830fe94e5db78f417135d"],["/2015/12/PixInTouch/index.html","47e7e6adc3bb4f00319529a30bcb2732"],["/2015/12/git-study-1/index.html","b98fa084abc082ebc56e1e78bfcad9e3"],["/2015/12/hexo-backup-and-migrate/index.html","9838645dc6f07498043623746d217b70"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","2c54a5fdc08611422f4e21aa17654136"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","a19549d71b7a93d458af6e4670eca9b2"],["/2015/12/router-reconfig-2015/index.html","d0349aed13064d5d1642ac463218111b"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","32df215adc162e207e8aafe72b6102c6"],["/2016/01/2016-stepping-further/index.html","15e8103c18bd01cc93c79c9ea947e5b0"],["/2016/01/Android-Study-1-22/index.html","9b9ef7bd00105e821f2b3bc035d72fc8"],["/2016/03/2016-03-20/index.html","1fe1220b597ba44d7c7552d621a26742"],["/2016/03/GSC-535/index.html","d94e839a88ea510c59daab3d7901cc13"],["/2016/03/gulpjs-1/index.html","1359407e80c62df01a1dd8bd886c2de4"],["/2016/03/hexo-theme-paper-white/index.html","54634976ed8fe3b3004db0cf638f91d9"],["/2016/04/2016-04-19/index.html","3cd53cf479bab17dc8fc8d66f02c4d59"],["/2016/06/2016-06-16/index.html","e8fd0feffc724f335783309cf762e849"],["/2016/09/2016-09-18/index.html","ba81b67b7b0c067ca6318d676e2d3a21"],["/2016/10/2016-10-27/index.html","7c51254eb912c867029c5dab14763192"],["/2016/12/config-switchresx-and-2khidpi/index.html","7a4448f2c5eb10a5857024ee7cb3aaa4"],["/2016/12/improve-duoshuo/index.html","6dea0a825f09fd1effe32fdf6b20a328"],["/2016/12/use-travis-ci-your-blog/index.html","b0a178264efbc451fba49ea0d4ac2c86"],["/2017/01/2017-iyahoi/index.html","f9311b13ddf69af3d2b79a2d6cd422ed"],["/2017/01/webpack-amd/index.html","861076fa941ea51a90213adca994ddfd"],["/2017/04/kotobukiya-syaoran/index.html","e1d07ec60fcb864f68e9dfb306f3d805"],["/2017/04/macbook-and-surface/index.html","7c4ff73ee1ae62fba50d7199d41f8129"],["/2017/04/uc-hyakuya-yuichiro/index.html","60d5547e7be0967ceadb17b7a547616e"],["/2017/06/noragami-seichijunrei/index.html","c98359508a1caa4d65e82193503abddb"],["/2017/08/cross-compile-55-libev/index.html","141092aeacf9a19291512970ce29a564"],["/2017/08/explore-service-worker-working-lifetime/index.html","a4990b7695f0eb6143cfd717b2b24878"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","b1eec1957a4502acfcfa82da4268ff9c"],["/2017/09/record-user-login-status-methods/index.html","604838a779c97c12fe849abaa0b10a67"],["/2017/10/vue-typescript-early/index.html","c779cd8d087fc5f20a04df94a9461dff"],["/2018/04/2017-end/index.html","63303043785994a43c89008633294dbb"],["/2018/04/twitter-account-activity-api/index.html","a2ea818febc8d824c339b190560d6f40"],["/2018/05/buddy-complex-seichijunrei/index.html","83322a39e4ac57540ed637f6a461dd90"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","4eac09ea49512f32bcbe8aa0d42cf87c"],["/2019/05/2019-05-17-google-io-tech/index.html","cccdeeeb6caba0460eacf1c3fac5688b"],["/2020/06/cls/index.html","a2049f0ef2e66037e6227b388f811094"],["/2020/06/try-serverless/index.html","bc9d1b7bccc60a49e4acdba3de6f31f3"],["/404.html","4318f895f901537657e50fe39c975fd1"],["/about/index.html","61599925a8f32c9c00cfb892fcb605c5"],["/archives/2015/03/index.html","8c821f3bc08765f8f0c6595348f61ef7"],["/archives/2015/04/index.html","676d8a7b8e62232e019966c31b67a1cb"],["/archives/2015/05/index.html","a8fc52a0f5c4bca6b825a6b0e7b30d0d"],["/archives/2015/09/index.html","94dafb69778e5c680c6d07feb8508d4e"],["/archives/2015/12/index.html","60e6579909214e284d566f1893710a7f"],["/archives/2015/index.html","542104e5b1e75449ee008885d2e762d6"],["/archives/2015/page/2/index.html","5448ac405a4bbd5e63d0819eabf60a7a"],["/archives/2015/page/3/index.html","190b9370993ac47025cb0ec90a41d0c7"],["/archives/2016/01/index.html","c134268887b0fc51949610b432c4dbce"],["/archives/2016/03/index.html","5c789e806eb8f6a8d5a2503ea2395ec0"],["/archives/2016/04/index.html","48cbd79b060431f099e1846f42293f10"],["/archives/2016/06/index.html","7a23b55ee19284c6a207f617e4401d3e"],["/archives/2016/09/index.html","4f32037d056e6255efb099b806cc1f97"],["/archives/2016/10/index.html","1c5b9d1bb4d3e87bfd1c47da8d9476c1"],["/archives/2016/12/index.html","d968743baf1ff32de758e9015f3505ff"],["/archives/2016/index.html","8a77f7fb1041767b4f4d1bc424fedeed"],["/archives/2016/page/2/index.html","61f1a95e1d1e7681dc6cb31a38d7e714"],["/archives/2017/01/index.html","fed03a831b14ac2552b1e291203b56d0"],["/archives/2017/04/index.html","0a4b3b1e21e1566e11a74f10626026eb"],["/archives/2017/06/index.html","8a0b9f456471c017ddad7d5801f91824"],["/archives/2017/08/index.html","cfd2f37386ac8fb8e187dab774e4cf70"],["/archives/2017/09/index.html","bddef19b89ae5b0e15b4fbda5a1d149b"],["/archives/2017/10/index.html","b5a56a6411ed4f4b83f79ef17c9534ec"],["/archives/2017/index.html","76dd398782f1da3203bc72a0ba9e521c"],["/archives/2017/page/2/index.html","2b984e3eebbf889573286f8b6b0c2e9b"],["/archives/2018/04/index.html","0ca61798be27af8c95eca1134f190a1a"],["/archives/2018/05/index.html","344754dbe311fe3b0bf6c85bc59d0a5e"],["/archives/2018/index.html","4591379e354b7fc1515133168e4f2980"],["/archives/2019/05/index.html","11f9781548375c93933d519f0f31fb23"],["/archives/2019/index.html","2ab703e44474f103caa2d6b13403fb57"],["/archives/2020/06/index.html","46b50189091dbacc69d59d55d729b742"],["/archives/2020/index.html","9c90df5c0800bb5af6e6f13270074185"],["/archives/index.html","29d4db08fb536502d656cc176cf98abc"],["/archives/page/2/index.html","9aed95d763a108e60a377c8e89baebf5"],["/archives/page/3/index.html","1390f313bfd8e7ed762a76acf034abe7"],["/archives/page/4/index.html","954192ef671fe908033cf25c057ab275"],["/archives/page/5/index.html","ae022343c6f26259230d68d3010ed227"],["/archives/page/6/index.html","5a14d27aaacda6b292c10698da5e066f"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","9b7dcf99f1fca4389a2928c7f86001c4"],["/categories/ACG/Music/self-copy/index.html","59343ff504cae0c88bfa969d7e91b099"],["/categories/ACG/Travel/index.html","050f593fe91c7c7a1fd6f2e1df8d4f14"],["/categories/ACG/figures/index.html","d65e0511dc8827476d0f709e76092e60"],["/categories/ACG/index.html","c636efc1488ae875cd78f31e9e0fb21e"],["/categories/dev/Front-End-Dev/index.html","4ff06c4b5d56ababec89f8c2a68dbc5b"],["/categories/dev/Front-End-Dev/page/2/index.html","7067b99c05641740847bc4052a2af0fd"],["/categories/dev/HTML-CSS/index.html","24e506e09cdda7dae70ccd65d0d9d47a"],["/categories/dev/android/index.html","85e5eeed77574544df78cb53f8ef36d4"],["/categories/dev/cpp/index.html","761381ca9fd1a32f6f1cca5e955423ad"],["/categories/dev/git/index.html","2956f268cf64073c11481cbb7cf93399"],["/categories/dev/index.html","41e2c051027aba5351195ef508e82c0b"],["/categories/dev/java/index.html","fc3e1d19837c27a90b20dd7f694605ec"],["/categories/dev/page/2/index.html","f1c9068a8c74a4ff26bc36598a6b4c77"],["/categories/dev/page/3/index.html","e82b59593fd3e07462bde1194bd7e82a"],["/categories/maintaince/blog-setup/index.html","d6edc69956f04b17d79941d5ac43850e"],["/categories/maintaince/index.html","1c98a14aa6eb7946595e43603049069d"],["/categories/maintaince/macbook/index.html","1d05c965265f292e1c44fa4d8678123b"],["/categories/maintaince/router-config/index.html","d66ff8b7e6bc379524eb7adb6c975c10"],["/categories/notes/index.html","c73344eea0b2f0477ee088399bbf9099"],["/categories/tricks/android/index.html","841fe6a61872d076aef34fc9e45be1ca"],["/categories/tricks/index.html","b1129a5115532e384d62d4f4cedffb9a"],["/categories/uncategorized/index.html","a8b1e35e7d7ab015df913e42c436680a"],["/categories/works/Front-End-Dev/index.html","0375af782b8d62c9db6eca3788ec7840"],["/categories/works/csharp-wpf/index.html","e5ec94046468642371212e978a6f2f17"],["/categories/works/index.html","beef5c6f78a666900af38f4a24c1fcef"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","b57ffe2777a3b344e16bde8598d4d772"],["/ja/2015/03/WNDR4300-setup-log/index.html","dc9a9e9dc3d5c325682526e3f8e0bc29"],["/ja/2015/03/android-hostname-change/index.html","f913b2d315b0d60cd3fece309d9cd562"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","a5dc3c5db7cf46095eedb131a854ac07"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","ec7aa2f6f13020f4d6aa8321ada38ebe"],["/ja/2015/04/cpp-study-log/index.html","a5dd963694d22af7d3932f92859c5602"],["/ja/2015/04/github-pages-ssl/index.html","80d37ce6cbc76774b54fcfca517d8a96"],["/ja/2015/04/hello-world/index.html","0e366d7e4c60779cc0a7729b3a2c008b"],["/ja/2015/04/hexo-setup-log/index.html","f6392633f3c9ba6b1cb2421bfaf3ff40"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","c460e69b433fb5edcc1e74526a4fc51b"],["/ja/2015/05/cpp-inherit/index.html","7b26a6ab61f3e8a2c06299263bf88099"],["/ja/2015/05/cpp-polymorphism/index.html","1acf30cb990c8f645e856c4651fa82e9"],["/ja/2015/09/android-root-ota/index.html","38d5bfecf11e89dc0a4b206003903ea4"],["/ja/2015/09/java-learningNotes-1/index.html","0e8f1931a9befccbc50fae71ae4c5360"],["/ja/2015/09/newblog-newlife-2015/index.html","fb198cf278e47982b7257a6343d2455d"],["/ja/2015/09/router-rebuild-2015/index.html","f5a39f7eae3b6e41fc84d2ff5ae5d386"],["/ja/2015/12/2015-12-21/index.html","f4135a74e0b481da6e44bedc0886d505"],["/ja/2015/12/PixInTouch/index.html","ee59fe3eb3f1b0c6764501c4dc9dd4a8"],["/ja/2015/12/git-study-1/index.html","7b81ba24d9597ef8fc70a8873843560f"],["/ja/2015/12/hexo-backup-and-migrate/index.html","3c49eec67c35fb73123d3440d5b8f8f8"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","83aff9e2d1d70c6b349309c3c837aeb1"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","9211d393a2919a4191ad0e2da0bbdb9a"],["/ja/2015/12/router-reconfig-2015/index.html","13a64c01c4529df75af235edb63cd09f"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","048de30fefef1e020f9e474193bf0db7"],["/ja/2016/01/2016-stepping-further/index.html","8c728bc957086d6513aae61fdb52889f"],["/ja/2016/01/Android-Study-1-22/index.html","96ac28a4f85f7318384bdb40d1c0ea54"],["/ja/2016/03/2016-03-20/index.html","69f60f1e5aeb08afe824c03e256f2857"],["/ja/2016/03/GSC-535/index.html","d7c937c182587d80fa1ce443ecede77c"],["/ja/2016/03/gulpjs-1/index.html","6e9ede55a8ed4412e1fb1eec0d23bb71"],["/ja/2016/03/hexo-theme-paper-white/index.html","391319d588034f3e1c7dbd4dff40dbbf"],["/ja/2016/04/2016-04-19/index.html","d69bf3dbb015564efcf451615c706532"],["/ja/2016/06/2016-06-16/index.html","1623247aa280a4c03113341e59578023"],["/ja/2016/09/2016-09-18/index.html","f719433bafb26ba48bd4ab7379f5d00c"],["/ja/2016/10/2016-10-27/index.html","c9622fa885c68224ae2bc4fbcafb5739"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","5ff0a3c74483d6dc49e3f0e3a0474a32"],["/ja/2016/12/improve-duoshuo/index.html","6c1a530be99755ec7678dee88dfe6aef"],["/ja/2016/12/use-travis-ci-your-blog/index.html","e20145d32badaa00d6162246d5305b34"],["/ja/2017/01/2017-iyahoi/index.html","a0bba99a0279c40acdcbe837758aa8e7"],["/ja/2017/01/webpack-amd/index.html","c131da436363159f829a4fe4906e6d2a"],["/ja/2017/04/kotobukiya-syaoran/index.html","342d931dc21d8f4a812e5f2bf826d60c"],["/ja/2017/04/macbook-and-surface/index.html","c074085beee60ccbde0921a3115528cb"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","24057b53e2000e12c191b8b9da4bcfcd"],["/ja/2017/06/noragami-seichijunrei/index.html","0ab360e83dd996d0ebfa01a263861935"],["/ja/2017/08/cross-compile-55-libev/index.html","21ddb352209267d3534e9fbc7ceb5ac7"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","1d19c439defced5e209d64a7a23b678a"],["/ja/2017/08/hello-jp-world/index.html","0b6d0336d83fb1a214474388af90c874"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","54acc84c0358269cd912097194a3ddb0"],["/ja/2017/09/record-user-login-status-methods/index.html","77fa408941444ab12d7c139edaf2c4c5"],["/ja/2017/10/vue-typescript-early/index.html","c0aec905ffbbe8da6f395a725ebbc6aa"],["/ja/2018/04/2017-end/index.html","3d8427d1596bd2911c97b8d3cb21b803"],["/ja/2018/04/twitter-account-activity-api/index.html","a1c2f56072b00feffe3e44f2c99392d3"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","f3a0b2ded94fe74a7658ecd90b9b1e70"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","2f055039f3d8be855e30321c79165d8f"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","39a51f7453b61e48bd653e0755b94357"],["/ja/2020/06/cls/index.html","efe0d1b6ae7870da8d7100ca2f922fa4"],["/ja/2020/06/try-serverless/index.html","121ecec1258f9487915010dc7e7b3bc4"],["/ja/404.html","a284b03a8ac00735f393305cd89eedbf"],["/ja/about/index.html","a9e86fafdc3edf1c0f7bcfc909fc6b02"],["/ja/archives/2017/08/index.html","5a17480e0a0f9d620c83f5b977206ba2"],["/ja/archives/2017/09/index.html","2b21bc46ce9d5cf8c9606241389a0dce"],["/ja/archives/2017/10/index.html","180006bbc50da223011f4b7c2565b6e2"],["/ja/archives/2017/index.html","73647d0feabcdf8d423218613f4580ac"],["/ja/archives/2018/04/index.html","96ed29c3004cfb02a1b088f7762bcfa7"],["/ja/archives/2018/05/index.html","868e2c882c6f4411a90427fc9e18e897"],["/ja/archives/2018/index.html","91f82151efa0b5785024c92ce2077859"],["/ja/archives/2019/05/index.html","eb2499804b6c8bc8d7c20adf68ec09fc"],["/ja/archives/2019/index.html","3ae1e3da17e84c36244f5b17987135e1"],["/ja/archives/2020/06/index.html","fc4e1b7f8b4c03d85211163601bcc9bd"],["/ja/archives/2020/index.html","404a63f2a1ba62393113e1ef9c3a9ee7"],["/ja/archives/index.html","15020f5a9db81260e135e40802d7c170"],["/ja/categories/ACG/Travel/index.html","57d85dc100d3af82a599a057f7c3f6d3"],["/ja/categories/ACG/index.html","f7c5c3fa8ef63d153aa0c32d86652fd2"],["/ja/categories/dev/Front-End-Dev/index.html","35a39ed92508b53e93ab65a4c43e22b3"],["/ja/categories/dev/index.html","2a566dfb3d8516ba4afb5af8ff5ac137"],["/ja/categories/uncategorized/index.html","adcaca021e363ba80fdb9ccf1cb993b4"],["/ja/index.html","251a2042a54bbd9d9491b5c1faf39975"],["/ja/nihongo-test-page/index.html","aee2d372c655dad6277b1198eef58101"],["/ja/resume/en/index.html","e1c7e7ed4d4e8c2f057b56b01e728781"],["/ja/resume/index.html","fc40128626c894dc94095e4a4318c5e7"],["/ja/resume/ja/index.html","9e82df19c3638fd56d481834f049dbc1"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","2bfd4035674e9d69a1bd3aef58536b3d"],["/page/2/index.html","f5ef102afaf021b93621d283385b1315"],["/page/3/index.html","28202543a1b9f9a1cb21a9f61456e780"],["/page/4/index.html","6e71803d8784cbbf77da1080c6c3fcd8"],["/page/5/index.html","045155deadf94317b9081848aa7e07c7"],["/page/6/index.html","b7aee7e72ebe7041658572c0bbff758a"],["/page/7/index.html","5fce3d18bfe35d9f3f298b3dd81d475e"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","e13afee8ccfc9f7f6afb4a9ffa8dd169"],["/resume/index.html","d06216e09edcfa9f29a0903de7ec4d58"],["/resume/ja/index.html","3fa082b0d35d14f474ed37a41c46e2a9"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","b2720230c588e84de10b6b4241f9e4aa"],["/zh-cn/archives/2015/03/index.html","a2503f00e17d7ec9af0ca162dee00bfc"],["/zh-cn/archives/2015/04/index.html","21fee34637b071248c04ce42ca3814b2"],["/zh-cn/archives/2015/05/index.html","d892b5bee107a1d586a0da03739b36b3"],["/zh-cn/archives/2015/09/index.html","707e2c5d9f69c99514d902b1de2e9cbe"],["/zh-cn/archives/2015/12/index.html","bcb07549e974fdb137cf44d5579b8ea6"],["/zh-cn/archives/2015/index.html","75b1dba281d95520ad19548594dddf46"],["/zh-cn/archives/2015/page/2/index.html","716f710ea1306b6d9faa96a102f909e9"],["/zh-cn/archives/2015/page/3/index.html","cedc80321bdb654ff55ac380274d90a6"],["/zh-cn/archives/2016/01/index.html","c964f180de846c324f6c70028fe9df59"],["/zh-cn/archives/2016/03/index.html","65b9d698106d7c84e28bd9ba161f35b6"],["/zh-cn/archives/2016/04/index.html","e90ac7582b1392fb731a3671bcc5e087"],["/zh-cn/archives/2016/06/index.html","d074972f0ee3d50455d8bae1b31d7803"],["/zh-cn/archives/2016/09/index.html","5cd9dfb6fe9f21c94e9bd9bdbfc6b834"],["/zh-cn/archives/2016/10/index.html","b9ea1342f2ddfa0eb54ed4e6e0878918"],["/zh-cn/archives/2016/12/index.html","94ad0e9ce9ae202ba69377f15ad08c9d"],["/zh-cn/archives/2016/index.html","d8062c90d96df705bc3eb48c92031f7c"],["/zh-cn/archives/2016/page/2/index.html","ff753599094bcd009b11db60b917c6bd"],["/zh-cn/archives/2017/01/index.html","c5db64359f7fe8e6e3dd6992cdc0074d"],["/zh-cn/archives/2017/04/index.html","fd8d7001d32492ea528c5e533434781a"],["/zh-cn/archives/2017/06/index.html","db71ca003b07c5589aeba4265b2ff123"],["/zh-cn/archives/2017/08/index.html","69dc787fd9e3bc49c12ddaaa4349d226"],["/zh-cn/archives/2017/09/index.html","09dfdfbaea8c1848cdef1caa1048d330"],["/zh-cn/archives/2017/10/index.html","057c2949e0fedddcf6b9d09d7626f593"],["/zh-cn/archives/2017/index.html","47c8ae5b55666002baa7681eb51d9cad"],["/zh-cn/archives/2017/page/2/index.html","34eea6fb5912e7cf6658ecb659343e26"],["/zh-cn/archives/2018/04/index.html","8ec509cb25cb39786ec947b97a8abfa5"],["/zh-cn/archives/2018/05/index.html","9581ddc138bb834ffc74d774ce199906"],["/zh-cn/archives/2018/index.html","f11548b2fc9fe8b02835a3fe1983555e"],["/zh-cn/archives/2019/05/index.html","73bec4c7af1dafb05d4fd715fac3d800"],["/zh-cn/archives/2019/index.html","99879523ee6c28c8b075a4231fd00e5d"],["/zh-cn/archives/2020/06/index.html","d3097c51a9332aa6d5b6db8fcf2ee113"],["/zh-cn/archives/2020/index.html","643981f3b92799cdee71dbfaa058cfc9"],["/zh-cn/archives/index.html","bcefd87e9e737b7ee3eebc5890ea6792"],["/zh-cn/archives/page/2/index.html","caf27c442ce1bb218230a1527015b2d2"],["/zh-cn/archives/page/3/index.html","3dae2c44a588593bfe0fbe44d2c30b3f"],["/zh-cn/archives/page/4/index.html","746dac29210cdb42377981fb4fe7f834"],["/zh-cn/archives/page/5/index.html","d0851a6312ce6de6ddf80c85906b5e52"],["/zh-cn/archives/page/6/index.html","75a2a37d347a450118941a994798699c"],["/zh-cn/categories/ACG/Music/index.html","cb9194493ac44491f97571d8587fe159"],["/zh-cn/categories/ACG/Music/self-copy/index.html","d652711f7c14aec7d1a6d9efd277bb80"],["/zh-cn/categories/ACG/Travel/index.html","e6ea3c2be18aa5e7a065f0df91457c0e"],["/zh-cn/categories/ACG/figures/index.html","ee2cded5cb07316f2521867aba1865ba"],["/zh-cn/categories/ACG/index.html","dcdaceda3245706403244ba2141582b8"],["/zh-cn/categories/dev/Front-End-Dev/index.html","f906ac83bb13c171e7e789b869fb52a4"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","ec0a6998cfa047af5f2e5bc5c09f82fb"],["/zh-cn/categories/dev/HTML-CSS/index.html","1d95fa1bfed11d449bce2d6fbb9255b7"],["/zh-cn/categories/dev/android/index.html","9b30bb124a24b71aba2a5d204722df60"],["/zh-cn/categories/dev/cpp/index.html","e7e89fe471e579907fa48ef2fb1bb823"],["/zh-cn/categories/dev/git/index.html","2c742667343b5021d32bf95fedb81b85"],["/zh-cn/categories/dev/index.html","487c06cab4654573a276bfa97c133887"],["/zh-cn/categories/dev/java/index.html","62a488d2d877e60d980794eebabf7e6b"],["/zh-cn/categories/dev/page/2/index.html","21b62016f71fc85d141c2f00e0b599df"],["/zh-cn/categories/dev/page/3/index.html","06ba8cb07d3ee43a9ef6ab12a253f2bd"],["/zh-cn/categories/maintaince/blog-setup/index.html","cf53d0fcee0f44348deea18cea9ab6d5"],["/zh-cn/categories/maintaince/index.html","1732967e01ad66a176c284fef3801d2e"],["/zh-cn/categories/maintaince/macbook/index.html","717e87084cd0663c8283621ddcd135f5"],["/zh-cn/categories/maintaince/router-config/index.html","6b351c03103746d5eb00031a3f38b78b"],["/zh-cn/categories/notes/index.html","dd9fb50bb0b013e7ff724991096946bf"],["/zh-cn/categories/tricks/android/index.html","2d7dd4d65806b2504f6a26d5709871fd"],["/zh-cn/categories/tricks/index.html","817af822993b6aabcb2395d8ceb03492"],["/zh-cn/categories/uncategorized/index.html","36aa6dcad1f260c1c0c7f95a48916ec4"],["/zh-cn/categories/works/Front-End-Dev/index.html","e5c3297b22b8bd45d1841bb4822cc385"],["/zh-cn/categories/works/csharp-wpf/index.html","523f2a22bf960b326b95563b36ad19a5"],["/zh-cn/categories/works/index.html","ef12729e893f6e34edd71de8eadf8180"],["/zh-cn/index.html","aa585251a8b5e56098098439e97a1ebd"],["/zh-cn/page/2/index.html","aecd4b426254b164c47e7557836b27d2"],["/zh-cn/page/3/index.html","9f613bd4d26954b3e1774e42c1ba4d00"],["/zh-cn/page/4/index.html","794898b587eaae68853b0d0863e95333"],["/zh-cn/page/5/index.html","ff2f6ab543ef1a3cd17221fc363da88c"],["/zh-cn/page/6/index.html","40be3b27f009727f664d2ba4bfafe13c"]];
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
