/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","e2555807c4a5f334bf9539cb814f2abc"],["/2015/03/android-hostname-change/index.html","2183d530a2af6da8a6abbfb2f540a5e6"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","0d0a044ed29241c93bd18d34ad690d25"],["/2015/04/android-chrome-issues-with-webpage/index.html","75f714bec2a0cbdc978856de8d6dbd9f"],["/2015/04/cpp-study-log/index.html","156b0d15191bdb896c53c41a28caf67f"],["/2015/04/github-pages-ssl/index.html","92024a56dfd3e4af94a42626538c8429"],["/2015/04/hello-world/index.html","5abd68d7f61f21a8f3dba6b52b79202b"],["/2015/04/hexo-setup-log/index.html","b934a5f30ae1244ae5c8700ebd79fcbe"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","8dd4427cf50d8fb7d05a2b58e38928f2"],["/2015/05/cpp-inherit/index.html","8e7b0629b2d59efe9b2c6a65fa32068c"],["/2015/05/cpp-polymorphism/index.html","b2b511efa79185f64deb4609f997c703"],["/2015/09/android-root-ota/index.html","6f93ee2a08d7e909b648a2d366dcabbd"],["/2015/09/java-learningNotes-1/index.html","74ae857a53c90658fd74446c934a1db9"],["/2015/09/newblog-newlife-2015/index.html","a2505a14cb0df15e198f447acf9e46ce"],["/2015/09/router-rebuild-2015/index.html","63f4c3fdc6b361020fe1b4233faa6bad"],["/2015/12/2015-12-21/index.html","84217bf73d572a0bbfa71689b20d91a2"],["/2015/12/PixInTouch/index.html","27a4c8c6d5e32f6b3fc9974f33a6c3be"],["/2015/12/git-study-1/index.html","939c6126a56124f6897815fc781d1247"],["/2015/12/hexo-backup-and-migrate/index.html","a37b90eba2070561749473ae29997b7b"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","5f6a9d5adf9423014ef205448f30b5ac"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","ad811822b2e2666cfc6e61cd8ed830e3"],["/2015/12/router-reconfig-2015/index.html","5d17522d70174199914bfe9c7932b8f1"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","015e995b617ab38d67a4db34fad4f387"],["/2016/01/2016-stepping-further/index.html","d52acf71a3d20846cbc5f6c771b6ebea"],["/2016/01/Android-Study-1-22/index.html","8952d960edfe235714317152c0db4b0b"],["/2016/03/2016-03-20/index.html","dc8dce6e5f4234d6abd4c5fba5b157be"],["/2016/03/GSC-535/index.html","1d1652443acbcad6a3db2508b91fe99c"],["/2016/03/gulpjs-1/index.html","a5cef5f708b9d9ae8f322fd8b03c42ef"],["/2016/03/hexo-theme-paper-white/index.html","97ef3527d60035160ed4593e5d7c08a1"],["/2016/04/2016-04-19/index.html","158b4c001db5fe81f29d2c1310eaa360"],["/2016/06/2016-06-16/index.html","d6cbb944f79046d890a509582d76a454"],["/2016/09/2016-09-18/index.html","e6580ba6682858f0c96042c0406ec708"],["/2016/10/2016-10-27/index.html","a7622820f049cea1f60c66f9ef91f185"],["/2016/12/config-switchresx-and-2khidpi/index.html","9fc2383c8480a9ae8dc5cb28e88f2b2e"],["/2016/12/improve-duoshuo/index.html","3a8d670ff60a7b4df54ef33f2e77c729"],["/2016/12/use-travis-ci-your-blog/index.html","bec915be7e469f7b6760239b06fc5115"],["/2017/01/2017-iyahoi/index.html","23c735d2dcd8f7d24201fa0db56d3826"],["/2017/01/webpack-amd/index.html","632f0fb06b063b66410e5c587884160a"],["/2017/04/kotobukiya-syaoran/index.html","62f49bc219eceb97b2db9affc1d4c373"],["/2017/04/macbook-and-surface/index.html","3423287a791cd35390562d71ff82b795"],["/2017/04/uc-hyakuya-yuichiro/index.html","1d3176a26fe4e2e29eacc062e4b19238"],["/2017/06/noragami-seichijunrei/index.html","0a37c15cfcbd96db3658fdd544480c8c"],["/2017/08/cross-compile-55-libev/index.html","dfddfab068ea2791cac1bc0eaf59f35a"],["/2017/08/explore-service-worker-working-lifetime/index.html","9fc4f8ae7a6aae2c787bd23fdb62a46b"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","5d19d25d3a6589b96d1ea4366ccf6497"],["/2017/09/record-user-login-status-methods/index.html","0127f13478f8fb1b342eafdc2d97a3da"],["/2017/10/vue-typescript-early/index.html","01cc08dcf7a97b6abbb0f702f9851670"],["/2018/04/2017-end/index.html","9e36c38b8f310849c58f140b19361fbc"],["/2018/04/twitter-account-activity-api/index.html","d2821c3dff61825a61058a2a2f5ce9b6"],["/2018/05/buddy-complex-seichijunrei/index.html","f37311b70367cf57b92ed376de840ee0"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","6d13764b6807c95969d5cda8ed290da2"],["/2019/05/2019-05-17-google-io-tech/index.html","a858ad44e1a3301592608ea786ba7e61"],["/404.html","f47eb584d84e2b15d887104a5798ad9f"],["/about/index.html","ca3d5fb32a1e595d7b3b0d8c992a45d0"],["/archives/2015/03/index.html","6f772e158cd1841ebb0c1b1b7d7c8ad7"],["/archives/2015/04/index.html","eb8b3701761fc9c4e4cd92be40fc1de7"],["/archives/2015/05/index.html","0ea9049ca8dfeddc0576246745c69751"],["/archives/2015/09/index.html","1bc0aa663c9540742a93932dd9d16579"],["/archives/2015/12/index.html","da104579eb24f40c7aec7df646802eb7"],["/archives/2015/index.html","31acb6af8eab2c4652593e5dc5dc730b"],["/archives/2015/page/2/index.html","e3daa7e6a1ee1af0e79011bd94aed4d3"],["/archives/2015/page/3/index.html","085d62f8dc5bba7bb89db72632247a68"],["/archives/2016/01/index.html","d7af22761fa01cc98cdf5202cbb16cd5"],["/archives/2016/03/index.html","f1a182686d293fcdebda95277e48269b"],["/archives/2016/04/index.html","9af4d9f8d430d5a6ce72e9f3218db8bc"],["/archives/2016/06/index.html","42150910757283a0123d072d7cdb89f8"],["/archives/2016/09/index.html","1bdc9856105359d1151559335777d8dd"],["/archives/2016/10/index.html","da3c97ee6885c3c9b9fdc95ed2a2d1cd"],["/archives/2016/12/index.html","e82c89c5583064f1b395264e0d902f1d"],["/archives/2016/index.html","8069672731265bf4f54a972536cdb88a"],["/archives/2016/page/2/index.html","222fd3f593a9fc48767e20d65aa3ac27"],["/archives/2017/01/index.html","707bac157e4736641c52c6b47a07a5f2"],["/archives/2017/04/index.html","6ba5a37788ca297910a032bf5574af9c"],["/archives/2017/06/index.html","6bca3f02f05039d97c850079623e201e"],["/archives/2017/08/index.html","e083459197caa49a25f4be2198fbbdad"],["/archives/2017/09/index.html","07c43f8d898b97816c9f899d5f723c14"],["/archives/2017/10/index.html","909a648937b3c9fdeadd62a81e7dcea0"],["/archives/2017/index.html","3c2039425baeb4b6ede2fb87e417f259"],["/archives/2017/page/2/index.html","22f7982cf21886830566bc12b70f9394"],["/archives/2018/04/index.html","f5fe961fe058c543c75a402d02a244e9"],["/archives/2018/05/index.html","639d803107f5a7c4a0b217e5e23ed7e3"],["/archives/2018/index.html","5221e9a040586c852d30e2603d0843f6"],["/archives/2019/05/index.html","0019371a7365ea99f49e5b6971d7831d"],["/archives/2019/index.html","8327cc27914484812257f8288194e4ff"],["/archives/index.html","8adc81c520e72e037bbd366d46c20972"],["/archives/page/2/index.html","e01d9e131a07d26801921ea0e99169ab"],["/archives/page/3/index.html","36b9a85853f1fa54ce3a008f6efa732f"],["/archives/page/4/index.html","03fd566d66dded37e73b3f988513729f"],["/archives/page/5/index.html","e7e7ec3a9729e4e32e0b33e0e15b3005"],["/archives/page/6/index.html","14474c74e40237ac35681bc92143f277"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","8391163083bea55e1f6ae1ffb573f4d2"],["/categories/ACG/Music/self-copy/index.html","44c112bada7505e74793681bae03b3fd"],["/categories/ACG/Travel/index.html","32b0c83e3741c5cb4581deb7d6de1150"],["/categories/ACG/figures/index.html","264a2b3fe513d10f75fec323db35bc82"],["/categories/ACG/index.html","bf8df96ad9040972b2af4d6bca62b8a7"],["/categories/dev/Front-End-Dev/index.html","908a1b0d6ddf5aa899cde7e48018fc3d"],["/categories/dev/HTML-CSS/index.html","db5a626c9bb7b19a3f53f3dc57a5cdec"],["/categories/dev/android/index.html","8406e7e91470c88196415be68a611a7b"],["/categories/dev/cpp/index.html","657584fe3fb79c7a5a936e8fafd2569d"],["/categories/dev/git/index.html","561281864819d754eebbd91cc4394953"],["/categories/dev/index.html","554c58b74784d7e9372d86cf64f1e18d"],["/categories/dev/java/index.html","a1b73f0c0aa03f5ede0b50cc0997ee77"],["/categories/dev/page/2/index.html","9c27b7c58de0e7becad0a533e81b5ffd"],["/categories/maintaince/blog-setup/index.html","2d104c391638b6f041e2791c9100bfbe"],["/categories/maintaince/index.html","6855f3728c35245477f36a2b1e747300"],["/categories/maintaince/macbook/index.html","e817cd47650f32fed8211b1fdaa8791c"],["/categories/maintaince/router-config/index.html","d3213e8f89e6aafcad910092246ae4cb"],["/categories/notes/index.html","c9ed183ee5e5aa04bc366e85e542da19"],["/categories/tricks/android/index.html","6d4c42f409c6cc0206dd79a6daad1215"],["/categories/tricks/index.html","e77022c2cf8b1ab7583e3748e65fc519"],["/categories/uncategorized/index.html","7fb29255b297e0a3715021269f18c6c5"],["/categories/works/Front-End-Dev/index.html","e4fc568d42935b7511525d73ac7ce777"],["/categories/works/csharp-wpf/index.html","fdf8895675ffbd1436fd9f7f3b0dbcc7"],["/categories/works/index.html","a8914919e61d965c89b4cea57a0273ad"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","8bcfff274c069fecc6d9c57cc9fb804d"],["/ja/2015/03/WNDR4300-setup-log/index.html","0a62fc60881656debea8b37011093452"],["/ja/2015/03/android-hostname-change/index.html","8f3f3fc301c21b8162d8cd2eb9b40650"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","d78c5bea60a5f50f513f30debe769316"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","232c1264c13f5bb0e1f54ca069e9395c"],["/ja/2015/04/cpp-study-log/index.html","0851a7498be4ec72292cffe730c6c564"],["/ja/2015/04/github-pages-ssl/index.html","1af1bd29c6e61e54c1ebaca8091c2d66"],["/ja/2015/04/hello-world/index.html","b688735a3ceb75cc24cc373e2fc554da"],["/ja/2015/04/hexo-setup-log/index.html","1bf28cc7c32533c6e680ebd65e5687ee"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","d104943cf00a7bbde29805db96435c7a"],["/ja/2015/05/cpp-inherit/index.html","1084fcfc1db69b83604be61563712d93"],["/ja/2015/05/cpp-polymorphism/index.html","b427f60615ca64d82a2b2efbac10016f"],["/ja/2015/09/android-root-ota/index.html","b14e47e6cf92e3e063e9918561fb6786"],["/ja/2015/09/java-learningNotes-1/index.html","30bf31ada88b584bcf7be8ea97d09da5"],["/ja/2015/09/newblog-newlife-2015/index.html","305b479db01d44836375045deeb907be"],["/ja/2015/09/router-rebuild-2015/index.html","1d59b6389680e8730cdaf417ca336d56"],["/ja/2015/12/2015-12-21/index.html","638f312b1dac2842203dae45588d49f9"],["/ja/2015/12/PixInTouch/index.html","bcc5de53fc3838b08f800f50bbd2e153"],["/ja/2015/12/git-study-1/index.html","1f015734e098a57fd5a6d6c57a87c0b3"],["/ja/2015/12/hexo-backup-and-migrate/index.html","67dd67eb35c454273f83d32d47c2b045"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","36095fc89959512ca16df18a9121be2e"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","53f8587ad6fe6d90a73fa4d41e976e3c"],["/ja/2015/12/router-reconfig-2015/index.html","781825cfc7199d20bb93d5846a9be41d"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","a0340d5851fd580280e7ee02213e31fb"],["/ja/2016/01/2016-stepping-further/index.html","04d2138df240682605263b2d45709cc7"],["/ja/2016/01/Android-Study-1-22/index.html","bae0788daf30c242e08b5d478bf9cd72"],["/ja/2016/03/2016-03-20/index.html","7f922025408b9c11a5ccd6e26bf50a46"],["/ja/2016/03/GSC-535/index.html","1401a00293c5e88e61fcb8cf37200ef7"],["/ja/2016/03/gulpjs-1/index.html","f61324d297be8262e546162e17513cb4"],["/ja/2016/03/hexo-theme-paper-white/index.html","33f36518d7fabef1fc3880f80f3cdb02"],["/ja/2016/04/2016-04-19/index.html","2f839d59a2b12bd18b8cb2f28a7b3bbb"],["/ja/2016/06/2016-06-16/index.html","2a5d187451576d270df8bc51d4008087"],["/ja/2016/09/2016-09-18/index.html","db308d0e6b3208706d295d46661c46c6"],["/ja/2016/10/2016-10-27/index.html","c896ff6598b65e6ae7c58a6e47770764"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","ab14c9ce9fccc587937a518894b1f141"],["/ja/2016/12/improve-duoshuo/index.html","dfdbb8a75857434cabf26499f292347b"],["/ja/2016/12/use-travis-ci-your-blog/index.html","74a4941cd1d80c9b602bbffeda5a6f8b"],["/ja/2017/01/2017-iyahoi/index.html","735a591b889d8790c2a91e1be6095bf6"],["/ja/2017/01/webpack-amd/index.html","b004416c44074f6caf96887c1e80e2f5"],["/ja/2017/04/kotobukiya-syaoran/index.html","71661a49c255248b7710f9967f9917f9"],["/ja/2017/04/macbook-and-surface/index.html","3f5eb45d3793844b4f0b77ac5c0d7747"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","d3e4f2867b3faffe62915ac8210d8af4"],["/ja/2017/06/noragami-seichijunrei/index.html","94df805a7c74da8946b8fc2f5b281c74"],["/ja/2017/08/cross-compile-55-libev/index.html","4d9410cc7596c56b189062d054af6e3e"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","8eff5a7fcd5003b33c9640ac96408007"],["/ja/2017/08/hello-jp-world/index.html","0eb01062c19cf6132dab4d4b512183ad"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","7b97b3c7fb81c9aec857ac50d2141017"],["/ja/2017/09/record-user-login-status-methods/index.html","47427b08bda3ce24d095917d209e3fab"],["/ja/2017/10/vue-typescript-early/index.html","de5d5b61c03053ce5fdf7055a4f3a267"],["/ja/2018/04/2017-end/index.html","4e4af79899855419ecfbed2a9091f088"],["/ja/2018/04/twitter-account-activity-api/index.html","4b6a6bc4300c6f19fb28275d85d2e259"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","78541ff03b1376990d07e351d7774863"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","2701eef460bbb2dcfad2f8a40e9fcf77"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","59c5b42b1b6c7c76f6cd721ccaeb303c"],["/ja/404.html","6c2a633cd930c70ecf847d1696c964da"],["/ja/about/index.html","4e7acead9d355f0af9aa952bc872b578"],["/ja/archives/2017/08/index.html","24fc5b73b11af1f0878e2d766f69b271"],["/ja/archives/2017/09/index.html","cda3b48284b63c9cec10e8d2840b7177"],["/ja/archives/2017/10/index.html","332bb2690bcfd1655f193d77fb7d7854"],["/ja/archives/2017/index.html","3b4c3d96b68aadf17b9512e0ce5e6475"],["/ja/archives/2018/04/index.html","531f032d1b4abc7c0b63952dacf6ffe3"],["/ja/archives/2018/05/index.html","41eb92cca328d5c9fa1e426320ea485d"],["/ja/archives/2018/index.html","6f437010b87aadfc9b37bde39e420305"],["/ja/archives/2019/05/index.html","5bc2194ee5bc9977054a00ff9d33d5de"],["/ja/archives/2019/index.html","605747c9dbd0b8db61a256c2bd84a0ee"],["/ja/archives/index.html","4db5187fe8874fd602a0d258e159cf59"],["/ja/categories/ACG/Travel/index.html","e47ecd010deb152f7b91782475fdabdd"],["/ja/categories/ACG/index.html","120e5ab93ca26c7273d3f5998b5b598b"],["/ja/categories/dev/Front-End-Dev/index.html","111efac721cd3adcad1d24874979c68b"],["/ja/categories/dev/index.html","f86ebf1d10a4a351f0274a2ff57a6de7"],["/ja/categories/uncategorized/index.html","0e223ee5b8e90290ed1aa3212b4cde83"],["/ja/index.html","75fa05f96cc522007eceaae71fd886ed"],["/ja/nihongo-test-page/index.html","0d9530d2586095e0dcf4e194868b72e9"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","0c1a1e29a629c762957b58582cbda55a"],["/page/2/index.html","e7e63b0a66e3cd337c638043d89f32e2"],["/page/3/index.html","27f361c4130f95c684df10d073fa1635"],["/page/4/index.html","4790688022bbb0f1a2bd030b6a176fa1"],["/page/5/index.html","ca47b48486a2cf55222fd5f31efdfe60"],["/page/6/index.html","b0f5ae7546af6ce0dc636ea015ba706b"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","0032289a09f2e5fc8cb31858cfeac0d3"],["/zh-cn/archives/2015/03/index.html","71f2122aad3400a5819fdad247768eca"],["/zh-cn/archives/2015/04/index.html","c5e07f31f2355a47cc78dd48d231ff16"],["/zh-cn/archives/2015/05/index.html","b7fd3a590e55c4dd1359321227b7e893"],["/zh-cn/archives/2015/09/index.html","23b2869808da5ac33e3fb96f6a9dad00"],["/zh-cn/archives/2015/12/index.html","23f67d0382b57109cd6cea7ebdec8f91"],["/zh-cn/archives/2015/index.html","a4d6c0f2d43f9a5d1f40457c0c4f2d6f"],["/zh-cn/archives/2015/page/2/index.html","0470d99ae68dfd79963aa335e92898d1"],["/zh-cn/archives/2015/page/3/index.html","1b3df8fc84a0b0d3b7afa4ef79fe0400"],["/zh-cn/archives/2016/01/index.html","741b473c1503e975d3ecb74981efaf0f"],["/zh-cn/archives/2016/03/index.html","56b207609bc3c61dcd4956aa76d09940"],["/zh-cn/archives/2016/04/index.html","fa2694fa243fb56106754d4a42b1d9ce"],["/zh-cn/archives/2016/06/index.html","93d1bbc68b5a9a07fc61bb924bb2d16e"],["/zh-cn/archives/2016/09/index.html","f4134070be5cafc261b24fde2fa0f957"],["/zh-cn/archives/2016/10/index.html","8df53f92b669a75969ff372b9c310495"],["/zh-cn/archives/2016/12/index.html","77a01759329cc0247a0fc26936632da0"],["/zh-cn/archives/2016/index.html","93eb0ea37b0833d0efc11cfb90d2d7ed"],["/zh-cn/archives/2016/page/2/index.html","ed33dabbf8e61080c2e3789c650627b4"],["/zh-cn/archives/2017/01/index.html","ccff1e82a6987c6fabdbc2c83a2e9c71"],["/zh-cn/archives/2017/04/index.html","60b033a95c10787a80b13926f7327d16"],["/zh-cn/archives/2017/06/index.html","6b306809e86786903b13eb5b4cf4438e"],["/zh-cn/archives/2017/08/index.html","dd832175f17d211556ea8f0fd5c5abe8"],["/zh-cn/archives/2017/09/index.html","8c09ea8585b870ecece3ffdaa63444e4"],["/zh-cn/archives/2017/10/index.html","4bbb3175eaeafb8d05286d36f874147f"],["/zh-cn/archives/2017/index.html","27115d1cf072e3d008a543312a58be7d"],["/zh-cn/archives/2017/page/2/index.html","b3825d65f2b3526dd59ce243bc628063"],["/zh-cn/archives/2018/04/index.html","5f717201d0744e18a508b1a3bb6a5081"],["/zh-cn/archives/2018/05/index.html","1ca2ee8c0264eb3ad20c54b7d69dc280"],["/zh-cn/archives/2018/index.html","649fe8ab5144655eae7a235bd7181567"],["/zh-cn/archives/2019/05/index.html","cf8cbd9a3b304fbe3c53fc684317b35d"],["/zh-cn/archives/2019/index.html","4dde427047f4656033540206920a3a8a"],["/zh-cn/archives/index.html","cdbb99ab27283f99545a51746f6d0ee3"],["/zh-cn/archives/page/2/index.html","033b677933f99699fa1eae7ebf927db0"],["/zh-cn/archives/page/3/index.html","20442b16415e5d26ba3c79c53066f612"],["/zh-cn/archives/page/4/index.html","f785c8b34da2dfa23d9470e5c8f3e46d"],["/zh-cn/archives/page/5/index.html","94a6ebea6aba3473051a11af0a3b2424"],["/zh-cn/archives/page/6/index.html","e57f25c0e5a904ed002fb1576819802e"],["/zh-cn/categories/ACG/Music/index.html","a166813d3b7794e6e0763a51cbb7e10b"],["/zh-cn/categories/ACG/Music/self-copy/index.html","80bcc22fcc4412bb2f8f95a2ea61d1f4"],["/zh-cn/categories/ACG/Travel/index.html","d530c75b45e9922e197848484b4f1346"],["/zh-cn/categories/ACG/figures/index.html","6a2079ea1bb7956e9039e8bf463c0eff"],["/zh-cn/categories/ACG/index.html","683b1ab878478ca22c74caf8b47e1d72"],["/zh-cn/categories/dev/Front-End-Dev/index.html","75fd4abdd86d6a2f23ec5549183bb151"],["/zh-cn/categories/dev/HTML-CSS/index.html","e37d5d3cb28e400240a2c60484a379c0"],["/zh-cn/categories/dev/android/index.html","a69b1bc855acd6b3a5d4d79219f9be52"],["/zh-cn/categories/dev/cpp/index.html","61ce1514508e12c039d625cf1412a23c"],["/zh-cn/categories/dev/git/index.html","fe60d54e47f5ede1428538bd28b3c541"],["/zh-cn/categories/dev/index.html","b404d6d1b765d67b5c22b09bbf6b4270"],["/zh-cn/categories/dev/java/index.html","0726362835a166ae78c1e42e3713a07f"],["/zh-cn/categories/dev/page/2/index.html","ff3e73608fbcc157b9156d7280699060"],["/zh-cn/categories/maintaince/blog-setup/index.html","fdf1b93cd7e1473b2c21d0e97695085f"],["/zh-cn/categories/maintaince/index.html","d15ad2fc76efdd8df84b04245bdc3752"],["/zh-cn/categories/maintaince/macbook/index.html","196454594d7f8dea9e6d971a4059daa7"],["/zh-cn/categories/maintaince/router-config/index.html","dfc29a454dccb1954a0677c0c5b639b3"],["/zh-cn/categories/notes/index.html","4d6b15aee82e2ff2108a1d18edb920e3"],["/zh-cn/categories/tricks/android/index.html","daa04102dd4dc2a33d8a910b51b86ba7"],["/zh-cn/categories/tricks/index.html","ab97eb3b4e1c57ae7c9311c748d19af0"],["/zh-cn/categories/uncategorized/index.html","3ab7bf01ede3f163ffff7079b3f5e83e"],["/zh-cn/categories/works/Front-End-Dev/index.html","8420b0b8f8e629679b0e1ba07e8aee20"],["/zh-cn/categories/works/csharp-wpf/index.html","48e8e781f013d25729bc1bcb70e28542"],["/zh-cn/categories/works/index.html","e891c147ae807e257a57ac9d19874bda"],["/zh-cn/index.html","4d6f8269a539a6903eab33ff9e9d962a"],["/zh-cn/page/2/index.html","7df26fbd105cf78e83ab3b74f78a421c"],["/zh-cn/page/3/index.html","1cdb1afc1bce1c1d14a379c464d63fec"],["/zh-cn/page/4/index.html","26a76dd72e38869ffb2ae93f4e29f719"],["/zh-cn/page/5/index.html","f0fcb416408e8f18e27a1387cd5f4531"],["/zh-cn/page/6/index.html","a415d3ebbc587d3ef76742ceece3afa8"]];
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
