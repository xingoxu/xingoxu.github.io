/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","a57b9c07f3ee6a2e0f7a7954950364f8"],["/2015/03/android-hostname-change/index.html","ba2cf9058df29f37ab9d5588510210bb"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","63107a3d910019d20ee85d23f9d95470"],["/2015/04/android-chrome-issues-with-webpage/index.html","f4f6df232a947ab6e71d4fd6851fdf6f"],["/2015/04/cpp-study-log/index.html","ee78ce19dccf2c809bdf784c7e16b442"],["/2015/04/github-pages-ssl/index.html","7a209484d6b72e683303183b103596ae"],["/2015/04/hello-world/index.html","b74d58a7d6f647a9659872f7a86e6ae2"],["/2015/04/hexo-setup-log/index.html","4fd90787840c001fbadb954b79452c29"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","0568a81a150dccae53e2813107a6ffbb"],["/2015/05/cpp-inherit/index.html","1803a7af99bc02232691cf5eea3a8ccf"],["/2015/05/cpp-polymorphism/index.html","96e411c0eb87cddf807be7da70f9cf5b"],["/2015/09/android-root-ota/index.html","c80028f0431e0b9f8ae06f599b56a171"],["/2015/09/java-learningNotes-1/index.html","665b753aa3d8334e3f3b5d157c992122"],["/2015/09/newblog-newlife-2015/index.html","5e5a1dde8141c29b9d11ac5453607faf"],["/2015/09/router-rebuild-2015/index.html","9a143c90573fcba0fb40085ffbb886ec"],["/2015/12/2015-12-21/index.html","c44b1e096f00ebca177f573db0b476b4"],["/2015/12/PixInTouch/index.html","506d98856ce6e1a34c865320f36d9b3c"],["/2015/12/git-study-1/index.html","13d20139cee091c73e6a88aefa93481d"],["/2015/12/hexo-backup-and-migrate/index.html","a33d5ddf254928a04e42a5232540ade0"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","6a61494e2cd57b864a8f1cf67263cf4e"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","13b9d03b8587993fc9047a306f1f7378"],["/2015/12/router-reconfig-2015/index.html","8f98306b24d53f2c6c9d7ab5aeedd837"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","ffb1cfb8b476c34653e60e8a7c19e6a7"],["/2016/01/2016-stepping-further/index.html","b3156e4154f2909b274fe21c810e8ea4"],["/2016/01/Android-Study-1-22/index.html","1c989efbd5161019517c705c3cccab5c"],["/2016/03/2016-03-20/index.html","e536ad2bba5dcaf1d92c658904930ac3"],["/2016/03/GSC-535/index.html","a375675be49520178d9cfde1482bf76d"],["/2016/03/gulpjs-1/index.html","ce1d67e6e6db4fba651f2cf40242bd88"],["/2016/03/hexo-theme-paper-white/index.html","09b724daab580a1fe67d70abd045a9da"],["/2016/04/2016-04-19/index.html","9afeebb4ded335823995243272de048b"],["/2016/06/2016-06-16/index.html","b98ee5edd7ad6dccdfc7da92e9696d7c"],["/2016/09/2016-09-18/index.html","2d0837c4fc630dd5310857ed6056cc3d"],["/2016/10/2016-10-27/index.html","17c58b1910b99354582c15c61c7a8619"],["/2016/12/config-switchresx-and-2khidpi/index.html","501ee72bcb714d8f2f7c6560437845c5"],["/2016/12/improve-duoshuo/index.html","052daf83b57fde112fc6264efa65cefa"],["/2016/12/use-travis-ci-your-blog/index.html","ca7d05e371c2fb638794efa4ee5f9639"],["/2017/01/2017-iyahoi/index.html","472cda4b058d184e2b8af99a97c07691"],["/2017/01/webpack-amd/index.html","120528255fd91fd2130b8e676e1041e4"],["/2017/04/kotobukiya-syaoran/index.html","e05f3e2bedf75578fc54ab14c302349f"],["/2017/04/macbook-and-surface/index.html","88489333a1cb4bd9303008fe1bbe690d"],["/2017/04/uc-hyakuya-yuichiro/index.html","96cc731adf4b9990cb81145532108ca3"],["/2017/06/noragami-seichijunrei/index.html","ca778530d21bc7892b3da72f6760236e"],["/2017/08/cross-compile-55-libev/index.html","d3f9b12623ed0b0e6736156267d4a747"],["/2017/08/explore-service-worker-working-lifetime/index.html","8cf60fe753c4b1ac9e417f457cd51d07"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","ea2689dc3c841780d0bd832b925d34f3"],["/2017/09/record-user-login-status-methods/index.html","3b510b1d80dd858f0c6e9b8b627f59e3"],["/2017/10/vue-typescript-early/index.html","504a7922b187281f4ba12531a20a99f2"],["/2018/04/2017-end/index.html","6c10b615460f939266c9987684e86634"],["/2018/04/twitter-account-activity-api/index.html","52d04562e25133c4484ca68ee8ac43a3"],["/2018/05/buddy-complex-seichijunrei/index.html","3e30de0c2975d62eb679f0cc1bf6e7ea"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","639917ed0eae612d42260c5dcdfec4a5"],["/2019/05/2019-05-17-google-io-tech/index.html","9b0189b6765690e7590edaa736c59ac2"],["/2020/06/cls/index.html","e38b9ce25eedc36b4ff4f306fb26c6ee"],["/2020/06/try-serverless/index.html","12f45233fdc9af8bc654121b6286d047"],["/2020/07/macos-node-require-path-case-insensitive/index.html","78fef5ee1c1f39e71f8059a582993909"],["/404.html","6b745aa3dd93f14ef8b5dd10f568c7fd"],["/about/index.html","fe12137e0561f5e80d262c132db5236b"],["/archives/2015/03/index.html","b4162b51e078fa0ac3da041c932c722f"],["/archives/2015/04/index.html","3e5a0b6e3cb0ce5a4b24ee4917d709ee"],["/archives/2015/05/index.html","9e6eb330e0312d9a99661f027c5d9bac"],["/archives/2015/09/index.html","bf83c54903c8ce418748aa79d90b07f3"],["/archives/2015/12/index.html","9a3b914cbaea6751753251ca01801215"],["/archives/2015/index.html","1003d21deb0b60b4a9e52b98eb265449"],["/archives/2015/page/2/index.html","58a4871c6d1ab75ae19998b2cd73898e"],["/archives/2015/page/3/index.html","4b62312709ea120038e71268b44c03d9"],["/archives/2016/01/index.html","526b8bbf29828ca790d58c6b95709877"],["/archives/2016/03/index.html","3b370b93e838e1d38874763cc3d384d6"],["/archives/2016/04/index.html","05dc8b8ea1423b68b3a73f01260ab236"],["/archives/2016/06/index.html","5d5797f1d270e2adbc7f5a2ec3580387"],["/archives/2016/09/index.html","164d4c7de4faa2eaae0ebf9064806361"],["/archives/2016/10/index.html","1bffd93b62b742e95303598fe21f6325"],["/archives/2016/12/index.html","624bfdd522458e4f9a8fc86251d85d85"],["/archives/2016/index.html","edb18a17aa660f1bf7b47c4820ab7ba3"],["/archives/2016/page/2/index.html","a8b758e966505358c673227fe91f5846"],["/archives/2017/01/index.html","a1ec79a758315c9681127bae78c6041d"],["/archives/2017/04/index.html","2d78d40d2a53b1037c3e427666dc2ae1"],["/archives/2017/06/index.html","f5e593c013230c79f9869ebf881b73af"],["/archives/2017/08/index.html","66b04f714dfa2ad9be838f56d646c150"],["/archives/2017/09/index.html","d0ac5ddbc70c22e7367496e18889266b"],["/archives/2017/10/index.html","8eb8aa69f44e134ac9cd7f80cb045d54"],["/archives/2017/index.html","e0dcbebfa84b210ddd389f9a9d481aa7"],["/archives/2017/page/2/index.html","0a82c7fa1ca91fca829a91579ea733b1"],["/archives/2018/04/index.html","ab193959f8df7730550b81707d741b86"],["/archives/2018/05/index.html","eeaa3c9caac9f1bba9e0447b6b105cca"],["/archives/2018/index.html","decc7062c05f0dec80f7f638809bddc2"],["/archives/2019/05/index.html","5d33e62bcd7ebb47c1272b38da260d5d"],["/archives/2019/index.html","a656290c5761e7cedde7dd8e3e609624"],["/archives/2020/06/index.html","36dbf1a9f1c044230acde51fb7bae8eb"],["/archives/2020/07/index.html","7735e139ccb004224011bf8805aa48eb"],["/archives/2020/index.html","7c0d6296b69d0b7445cd7e7547943dff"],["/archives/index.html","dea6aade0557b23f52a3a636e921753c"],["/archives/page/2/index.html","c49c9bd2ffdbe3b49af951e871d3064f"],["/archives/page/3/index.html","1623dbafd940d56d35d52788f5be39d2"],["/archives/page/4/index.html","b3e539e47209b982254e86fad9d72c5a"],["/archives/page/5/index.html","449647af107517762d3baeb4140cd46c"],["/archives/page/6/index.html","6173fe8c76c56e016ad48a60b4ff3333"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","426776128d22ffe1ebe3c25f08bf477d"],["/categories/ACG/Music/self-copy/index.html","dd19a06784aa0fb7680b07d407432402"],["/categories/ACG/Travel/index.html","1af6132ea66aa2fc428dad4cc30627bb"],["/categories/ACG/figures/index.html","e0b1f4ee572a085fb5aa55c6f10909d3"],["/categories/ACG/index.html","0123349b63e898fab4c32a8e5fd9686e"],["/categories/dev/Front-End-Dev/index.html","5446ecd5f6ce62e1835d704d87ac8535"],["/categories/dev/Front-End-Dev/page/2/index.html","a2fc3b4c81f0f253757c4f849b7e5b12"],["/categories/dev/HTML-CSS/index.html","ec9386e20be23b7c625758f3b5d33c7a"],["/categories/dev/android/index.html","46cf1753b8b29ad8e73da59387369737"],["/categories/dev/cpp/index.html","6497b54cede966a1b636f6c3bd55e502"],["/categories/dev/git/index.html","38d61ceb962b0ce3621547ee4a6efdb1"],["/categories/dev/index.html","81b83d33f7625bd116bf1dc329d50d98"],["/categories/dev/java/index.html","c325dffbd27418f1ec61784ed5d25a08"],["/categories/dev/page/2/index.html","6ff7bf9d33a64090b86998c69c1d6efa"],["/categories/dev/page/3/index.html","4532bbf85ab2a919e91292472a11bd59"],["/categories/maintaince/blog-setup/index.html","62bb5b6329e9d7fd9f9999a5d836f4e1"],["/categories/maintaince/index.html","c6280f34785f75dd63b1422388bee54a"],["/categories/maintaince/macbook/index.html","a7c574274a6a17cf9d00e5d379f65f62"],["/categories/maintaince/router-config/index.html","f79b108d4b790f68a08915935bb6d787"],["/categories/notes/index.html","3879f8b580dda79a4db18181c50b4d38"],["/categories/tricks/android/index.html","9cd10c94dc0f3653e69568e4ab987dee"],["/categories/tricks/index.html","c5c69e92c9730cd2c1e3c97392a44dfd"],["/categories/uncategorized/index.html","5d75a81696a86238bd56b3604f23072d"],["/categories/works/Front-End-Dev/index.html","5d8da1ff803d67341730660a95471edc"],["/categories/works/csharp-wpf/index.html","6cb64f51822a149c061b41ebac80c407"],["/categories/works/index.html","89e01aea78a2f2235c394f43565c0832"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","ac12457a414c3adf9615fc974b2bec95"],["/ja/2015/03/WNDR4300-setup-log/index.html","71821848dd64b1aee577418073acaa35"],["/ja/2015/03/android-hostname-change/index.html","7f6f33968784829666e21a10e9319c30"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","d7229d98b5937edc30ff7ae973aeea04"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","dc4d5b01779bb53eeb8bf2d355b82625"],["/ja/2015/04/cpp-study-log/index.html","f723c4f1453d47542dfda88cbfac2355"],["/ja/2015/04/github-pages-ssl/index.html","abd351f639d4b203ef5fee68f60c340f"],["/ja/2015/04/hello-world/index.html","05614f19c8fb438648f3cc6ad3303cf8"],["/ja/2015/04/hexo-setup-log/index.html","fdf29356c14e8cc629fadc5c2a0a8ddc"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","896acf333782881d6fc12e117eec2d04"],["/ja/2015/05/cpp-inherit/index.html","dee6e805a9c5d19ad24ee72f0cb387aa"],["/ja/2015/05/cpp-polymorphism/index.html","468606f22853352b079418b52837e271"],["/ja/2015/09/android-root-ota/index.html","ce692f4b0819a93a143ee7243ff96da0"],["/ja/2015/09/java-learningNotes-1/index.html","d480db607046ae4b4801fa72ab509dd0"],["/ja/2015/09/newblog-newlife-2015/index.html","7a6f173a78ae6215cc1537104166db02"],["/ja/2015/09/router-rebuild-2015/index.html","4213d45735980cd470409e1100fcd067"],["/ja/2015/12/2015-12-21/index.html","6df72887fc93a5dd425e921367da0e1f"],["/ja/2015/12/PixInTouch/index.html","3ab4fb5b779e3c6e7a3ad6baa695b2b7"],["/ja/2015/12/git-study-1/index.html","a21b47518d6cd2962cdd4326a1352da0"],["/ja/2015/12/hexo-backup-and-migrate/index.html","811e09d25244c9572c3818ce64d26803"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","922f41a2c9fcb9f4cf4ab1c839fdc811"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","e5b4d0892b29b5164091b8215abb0b48"],["/ja/2015/12/router-reconfig-2015/index.html","7427bb2111fdf1e0a891f49b58528934"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","1b835d2ce7e1fcea89556b4193b5072c"],["/ja/2016/01/2016-stepping-further/index.html","1673258d9fdb430cdd1dc26be05c1b40"],["/ja/2016/01/Android-Study-1-22/index.html","76675dab9f0d332eebc0e5f1cf49bf5e"],["/ja/2016/03/2016-03-20/index.html","8365c5f34f319c8c1e87f0122e0e95b0"],["/ja/2016/03/GSC-535/index.html","948350df647e91ce7c097ea9095ab0f7"],["/ja/2016/03/gulpjs-1/index.html","e84ed564a1caa95903611b5cdf28ad62"],["/ja/2016/03/hexo-theme-paper-white/index.html","a9b15976a8c1e69572539d5404119c86"],["/ja/2016/04/2016-04-19/index.html","c4667d21823d643a8b8c6af787c625b2"],["/ja/2016/06/2016-06-16/index.html","dac0d0408823d494817ebc3d5eb2db53"],["/ja/2016/09/2016-09-18/index.html","ffe335e661c20eb19ec909da3fd17159"],["/ja/2016/10/2016-10-27/index.html","ca720259af2a10f1141f209ebbf099e9"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","aa63e91b4f913e5abef6b0c270c9eb38"],["/ja/2016/12/improve-duoshuo/index.html","080d40d8817aa6f49cf236f1407bd850"],["/ja/2016/12/use-travis-ci-your-blog/index.html","8cfffdcb4ec6d72e36098db02cfbed23"],["/ja/2017/01/2017-iyahoi/index.html","e039fb7646c449046d3b8db214763fef"],["/ja/2017/01/webpack-amd/index.html","d3b386154d72854c4231c11b4d0a7fe0"],["/ja/2017/04/kotobukiya-syaoran/index.html","bf8155e5afdad88bd279b700b38fe271"],["/ja/2017/04/macbook-and-surface/index.html","a6b848a82cb6015e0d97eda83f2bf77e"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","aa4ae06b5fc1e19a839849c0efeb91a4"],["/ja/2017/06/noragami-seichijunrei/index.html","e5643c312eca439048a68d89704a8cff"],["/ja/2017/08/cross-compile-55-libev/index.html","1ba452d3afae23598a9a421f19e7f198"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","6f0c715ab1e9f17f07bcfd3517810743"],["/ja/2017/08/hello-jp-world/index.html","de2f70f3f97325928e5249441d0874d2"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","b589df86402022c557936bb195cf757e"],["/ja/2017/09/record-user-login-status-methods/index.html","5fd902627a07e9fb9b73febab3ebaa69"],["/ja/2017/10/vue-typescript-early/index.html","014f02656b7fc8ebd0c0a966823b6a83"],["/ja/2018/04/2017-end/index.html","398a3afac0ff9a1ea6d2f99ae953c039"],["/ja/2018/04/twitter-account-activity-api/index.html","74540b00825fb327fedafdee48c5fc54"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","217de332055c1d944e133c3377418be9"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","1b352883bcfc04cc87fc7fc86eae373c"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","d90ef40c3f78d88f02121469df8aa184"],["/ja/2020/06/cls/index.html","dd28c78f874bb37ddd859e43bd68e3b9"],["/ja/2020/06/try-serverless/index.html","4ac8d2db9852a865986eb6faebadae4c"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","e83d785e20f8bf44bf9e0dfe0e7b2bd3"],["/ja/404.html","b731b495d0be411e2d6ff3b7c28b494d"],["/ja/about/index.html","4ffb1354589f4e2e1d4ea27bdb2c1ed5"],["/ja/archives/2017/08/index.html","12e2b67a415c43a9e0da3943aa74fe0a"],["/ja/archives/2017/09/index.html","6cf7de92ca08fededdee0499a9363814"],["/ja/archives/2017/10/index.html","369316dff5cabaed4a82ba43471b8956"],["/ja/archives/2017/index.html","1595dd20086eaf90200e767f38d17d1f"],["/ja/archives/2018/04/index.html","2d54d63dc0b605e5c81e3d5a28492cab"],["/ja/archives/2018/05/index.html","3285ddcb20f014e3d1ff7d467c971475"],["/ja/archives/2018/index.html","bc74b686bd902dd85bf7130dbbcfe421"],["/ja/archives/2019/05/index.html","26fa74a8a1d1d69666770acf37b88492"],["/ja/archives/2019/index.html","cce66947f3085f95bce1b9aa43141866"],["/ja/archives/2020/06/index.html","87331514cdced5e841f8cb84212f3fc2"],["/ja/archives/2020/07/index.html","57df604e6cb19f3ffa4d964b5f5b1ccb"],["/ja/archives/2020/index.html","95972dd5e40978bbb485ac283281d9aa"],["/ja/archives/index.html","ea5b0afd6e09d76765485637cd2f905a"],["/ja/categories/ACG/Travel/index.html","3b6c0949113e34269f74aef9836f98a1"],["/ja/categories/ACG/index.html","8cbbf2c654c72387a993382abc6b42b7"],["/ja/categories/dev/Front-End-Dev/index.html","0a0bc4c1bb1b03f32cb584de8a341e1a"],["/ja/categories/dev/index.html","4a7fe0afca1e93452a7bbfd292987bef"],["/ja/categories/uncategorized/index.html","8174f248b58636a70588851000de9c01"],["/ja/index.html","0f105222eb782c70196eac6fc3b74315"],["/ja/nihongo-test-page/index.html","9f44f1cdb7c035102512cbe06bef092e"],["/ja/resume/en/index.html","e018cdcc593735204ddeb9769e6d0992"],["/ja/resume/index.html","091dd48b6dd546a34d704c04ce95cdf3"],["/ja/resume/ja/index.html","0c55a26e5927be2eb9a8f9ea37c4b707"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","6404a1d8100fe5e955a13204e868bedf"],["/page/2/index.html","c2aba2a15d02b691fe8ef45d35207afc"],["/page/3/index.html","0a96be89ec73e9239cc8b3a98b68522d"],["/page/4/index.html","a4b51edf6d5efa6bc4d1859d89762074"],["/page/5/index.html","8bd68be34b26b64060dae1dd1aaf0507"],["/page/6/index.html","98c0431ca2376252cb5faa544daa2cc6"],["/page/7/index.html","8c68281f6ef9ded77e394f3e30251f34"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","a320b8c23acdc859e6f6e54c8c3c9c1a"],["/resume/index.html","f2db2f469c8746df175dae419cf9c2c3"],["/resume/ja/index.html","6733099e1c7e018517843edea9359cf3"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","156f516ee5be13ecbbe362f3864149b3"],["/zh-cn/archives/2015/03/index.html","30b8cef9710072594b9653d16a3e8670"],["/zh-cn/archives/2015/04/index.html","53d3b1acd30df8058a8ccfbe6c132bf6"],["/zh-cn/archives/2015/05/index.html","55083571d9fcdc4b069d11eef2ebf69d"],["/zh-cn/archives/2015/09/index.html","c137e30de0e0645799db562f83ce3922"],["/zh-cn/archives/2015/12/index.html","9ba7a757dc20431f6f4ca48525b4eb7d"],["/zh-cn/archives/2015/index.html","1e89870504299d70b525f858b8642b80"],["/zh-cn/archives/2015/page/2/index.html","9dc7be8f99afef89bde7375c000f2226"],["/zh-cn/archives/2015/page/3/index.html","bfc471bc91298091ccbd0271d1ad798e"],["/zh-cn/archives/2016/01/index.html","521ede741d92c90bfdf2156cdb7269ed"],["/zh-cn/archives/2016/03/index.html","0be56fbfad5d032982e5c940661e8b4d"],["/zh-cn/archives/2016/04/index.html","2df655c07ab3a5f810b74067c25c0edb"],["/zh-cn/archives/2016/06/index.html","76c96cc348a548ff12861e5b92c6c350"],["/zh-cn/archives/2016/09/index.html","0d2e09d1bedbce6f834c1d628babe230"],["/zh-cn/archives/2016/10/index.html","ad27925f4f603aa1df6be3489344e9a0"],["/zh-cn/archives/2016/12/index.html","df080bfed7dd9dd45af6db578dbf5404"],["/zh-cn/archives/2016/index.html","0b220b0bb6528e2027e152cf3d3b9c43"],["/zh-cn/archives/2016/page/2/index.html","9fb8e005a93aee1c2e87ae58b55adab2"],["/zh-cn/archives/2017/01/index.html","f0ab13a73b2c61ad5ee96a4fef30c0ff"],["/zh-cn/archives/2017/04/index.html","255f0c9b8ac8686dd0f70cb6bd7d9cb0"],["/zh-cn/archives/2017/06/index.html","945f2f114a922a573b0d8c1b8a3b4905"],["/zh-cn/archives/2017/08/index.html","c490c6b21b572270c1a20be90ed9d312"],["/zh-cn/archives/2017/09/index.html","fbd44c80863c937e419e25bd26139dbc"],["/zh-cn/archives/2017/10/index.html","cdb0d7bec4d54a98e24ffefa37352e6f"],["/zh-cn/archives/2017/index.html","8133021cf9e92f9757d8b1906ce19ec5"],["/zh-cn/archives/2017/page/2/index.html","9685e7207baefd7f50496c52ade4bc9e"],["/zh-cn/archives/2018/04/index.html","a1da7c80cb8ea850b69489324ee2a61a"],["/zh-cn/archives/2018/05/index.html","82165ab62f46d6c9eb1415681cb57551"],["/zh-cn/archives/2018/index.html","8ca02d917f6825ffc268628e655c1b29"],["/zh-cn/archives/2019/05/index.html","f28a5a3c6ae20f1f2e5e68b667850bb9"],["/zh-cn/archives/2019/index.html","73a6267f3322fc4f83a3fc5294e4ef3b"],["/zh-cn/archives/2020/06/index.html","12a6c94e001b848222db294e50edac57"],["/zh-cn/archives/2020/07/index.html","7c8cc72b9134a6809ae90a4d27bd6d0e"],["/zh-cn/archives/2020/index.html","eccb5e35247243c91ea06b79df79aeac"],["/zh-cn/archives/index.html","4eb1b4cce8216933734dea4ff8bb2e43"],["/zh-cn/archives/page/2/index.html","cb1e4c9463c44fd421369e06a88c1d66"],["/zh-cn/archives/page/3/index.html","967ced4aaf4ad83c4557e80be2962d23"],["/zh-cn/archives/page/4/index.html","a494714c9720582413dac0f26fdc74e1"],["/zh-cn/archives/page/5/index.html","cf9544d15d03a594e2fa2b39353e46e7"],["/zh-cn/archives/page/6/index.html","6bf7554c8c1a205e39810e71c22167b4"],["/zh-cn/categories/ACG/Music/index.html","e24a08c40f6cc76692a45f31bc709fb2"],["/zh-cn/categories/ACG/Music/self-copy/index.html","d6daef2042c9736e08f5b632da6a5130"],["/zh-cn/categories/ACG/Travel/index.html","bfb9c170bbba3aa08e1021e59dd1030b"],["/zh-cn/categories/ACG/figures/index.html","8dfef374932cf726b89ab13654f7c0ed"],["/zh-cn/categories/ACG/index.html","3aca32a192f182e5fc20608d0fb7577a"],["/zh-cn/categories/dev/Front-End-Dev/index.html","482c3bd196f69c3fdbbfc6ba94f4d7ba"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","a2e50a249b602357a7b0e55cc3044dc8"],["/zh-cn/categories/dev/HTML-CSS/index.html","9512c14533f8924cb1e50f57872ad50f"],["/zh-cn/categories/dev/android/index.html","2a572550715957c1cfb49d17400a6257"],["/zh-cn/categories/dev/cpp/index.html","5df35d43ff8a773b3845ae3d2c5af7e4"],["/zh-cn/categories/dev/git/index.html","317edaa15b8abcb0ff1293db08c08e7a"],["/zh-cn/categories/dev/index.html","e90d2c76c039d2f93430ff222f420655"],["/zh-cn/categories/dev/java/index.html","19f6566b3846de409d4433aef08f5c44"],["/zh-cn/categories/dev/page/2/index.html","238f29fa876cf92d3e45c51ee9509c24"],["/zh-cn/categories/dev/page/3/index.html","1824d8c1472609a942831b9445878518"],["/zh-cn/categories/maintaince/blog-setup/index.html","9016fd6ab02b8d0ffdcfce4c3ca532e4"],["/zh-cn/categories/maintaince/index.html","c24dded8879c4108388a0dfa08c9b8f8"],["/zh-cn/categories/maintaince/macbook/index.html","97c31b1cff0fe9b0c8f394c4c155eb04"],["/zh-cn/categories/maintaince/router-config/index.html","3b008f5626ec3e499ad33cc1a1a5cfee"],["/zh-cn/categories/notes/index.html","9414b88e1b3e3b4092fe96a5d42ceced"],["/zh-cn/categories/tricks/android/index.html","337ef7b8986beab36d76eb75b0739b41"],["/zh-cn/categories/tricks/index.html","3b07853d247631a0305ae24f3afbb50c"],["/zh-cn/categories/uncategorized/index.html","da93754fa1b09569505745783fbd3e12"],["/zh-cn/categories/works/Front-End-Dev/index.html","5700b72139c07c5acda01d6155658b65"],["/zh-cn/categories/works/csharp-wpf/index.html","88845025de34aaa4e011258c4fa836f2"],["/zh-cn/categories/works/index.html","d138427f25d1f9276dc2f7a3dd455223"],["/zh-cn/index.html","4b044f89d8e53fec0de617645a033dc6"],["/zh-cn/page/2/index.html","06c951d8a9e4defb27807bdaa9bd3146"],["/zh-cn/page/3/index.html","c59c78632149a041d7c96f2324b94e94"],["/zh-cn/page/4/index.html","ed7496e9d14c6fdcec39e306271e9cf2"],["/zh-cn/page/5/index.html","1cc70e9c9d1bc3c2a0b557becc139300"],["/zh-cn/page/6/index.html","163503a1b8c63de65c807a1c21d1e23e"]];
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
