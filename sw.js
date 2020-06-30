/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","9356d36693bf7b82a29d1aaaf36ee056"],["/2015/03/android-hostname-change/index.html","05808adaa5a3c7ddb72c2f6a914726a6"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","d5d2852888dd34fca3dd0e82df790151"],["/2015/04/android-chrome-issues-with-webpage/index.html","491fde8a8aa87be737e323ce0c5c1a88"],["/2015/04/cpp-study-log/index.html","21de4004f23d84725a4ed071bdb2426f"],["/2015/04/github-pages-ssl/index.html","582e85930f93bd76e489984cad31e02a"],["/2015/04/hello-world/index.html","d94240127bc5314e80bbc7474e7044ee"],["/2015/04/hexo-setup-log/index.html","5511f1915fc41e89bd981acefc877307"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","1a8070f0e237bf7a79b726c2b6d67644"],["/2015/05/cpp-inherit/index.html","1e022d23564de5548942bd7b3f85f49e"],["/2015/05/cpp-polymorphism/index.html","b4c25e6cc193762d6686eb7c409c4236"],["/2015/09/android-root-ota/index.html","046f863357d6fdc0fd7c832b5640b6f9"],["/2015/09/java-learningNotes-1/index.html","79efddde75ca4275f4e1246d5e898d90"],["/2015/09/newblog-newlife-2015/index.html","a29c195c4b63579e1f086fd75bbd6168"],["/2015/09/router-rebuild-2015/index.html","9efcc78b1151ab04d3599d68dd65be79"],["/2015/12/2015-12-21/index.html","d5d29e7cd3d660cb2126890c50160fb5"],["/2015/12/PixInTouch/index.html","348a687334ecc1797c4bad144a62b3c7"],["/2015/12/git-study-1/index.html","f18154aa07d9a3e45088d12f59ef3386"],["/2015/12/hexo-backup-and-migrate/index.html","a4a2828eb798dcf0b8ea6125784096e5"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","50bde9a77c12a2c27fa7e84b257bd405"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","3e6b052267635dec667bbf19a4cc72d8"],["/2015/12/router-reconfig-2015/index.html","64217e26b81c8c9d01cb844883466458"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","fa15a19e7ae01a5e98f04513d93e7641"],["/2016/01/2016-stepping-further/index.html","e6a19de45781c957123b148fe1ee6f53"],["/2016/01/Android-Study-1-22/index.html","1ced36c7fbdab7b8efc78f0ff1979e91"],["/2016/03/2016-03-20/index.html","c448d64ced9f236f93ac8e68eb577c56"],["/2016/03/GSC-535/index.html","46fc2dca6e0e4d9dccb478fd25580472"],["/2016/03/gulpjs-1/index.html","f6d16632b2f6696b3626ee73ca5d13a3"],["/2016/03/hexo-theme-paper-white/index.html","ac0f689bf6662bb1ce107168a189e629"],["/2016/04/2016-04-19/index.html","ee5dbf130a2e9a72e1ef0602292a8d4b"],["/2016/06/2016-06-16/index.html","12d7de096d26dd39aa01e270f31640e4"],["/2016/09/2016-09-18/index.html","1114d06cb2fd507ff570eef0087c0ad8"],["/2016/10/2016-10-27/index.html","98f7868317882f33ff31a0d4c4627efc"],["/2016/12/config-switchresx-and-2khidpi/index.html","7e7e20cf595501fbed43f5ba54569dae"],["/2016/12/improve-duoshuo/index.html","c27590860df37001de33ee0157a21e85"],["/2016/12/use-travis-ci-your-blog/index.html","ded3f2ae8211a5da7b4950a50032b33b"],["/2017/01/2017-iyahoi/index.html","eda4af54b517313c0d0365da7763253f"],["/2017/01/webpack-amd/index.html","88a3bcbffb412186b2f0635dc64a3a2d"],["/2017/04/kotobukiya-syaoran/index.html","14c97a2ab4f699d8b9034fabf0737da1"],["/2017/04/macbook-and-surface/index.html","0d4ab2d1e6031dd27a46cc7eaeb4ba3a"],["/2017/04/uc-hyakuya-yuichiro/index.html","c6dc960cbe97d6d69d920636b1f4abf0"],["/2017/06/noragami-seichijunrei/index.html","a3824ee717c4aedaffb2bcedcc56a050"],["/2017/08/cross-compile-55-libev/index.html","7f23f02891f745aea0ff3b1c17618992"],["/2017/08/explore-service-worker-working-lifetime/index.html","16ff4d341326b2032f1efa00f0667850"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","817276061761cb5f7e6c56da39263270"],["/2017/09/record-user-login-status-methods/index.html","118ec64fb0b9230ebc8e39a33fabe755"],["/2017/10/vue-typescript-early/index.html","eed6b0b76d03ef972d4d985140833975"],["/2018/04/2017-end/index.html","36f3c49adaac621389c2587c3b450733"],["/2018/04/twitter-account-activity-api/index.html","adc91425933f7081dcab13104b580b88"],["/2018/05/buddy-complex-seichijunrei/index.html","b06f24bc1ace03ba6e48e3af045e50bd"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","bd280393d84f4cb6a6ac723f3f14fae6"],["/2019/05/2019-05-17-google-io-tech/index.html","f21aabcd670097e3d267f0d913c7844b"],["/2020/06/cls/index.html","53739d85b17236cf3ef1736ae48c844f"],["/2020/06/try-serverless/index.html","ba81d4825e7d98b6442557fbfb02380a"],["/404.html","4ab1c67d0b5dfd79eb5b7b64dc69ebcd"],["/about/index.html","0fdc9450b4ee083584fae8f5e15c9969"],["/archives/2015/03/index.html","af80fe14d5e0c230008671ced0c93c82"],["/archives/2015/04/index.html","574b3a39c2ff68eedc9678dc3818a94d"],["/archives/2015/05/index.html","b0f012f1dcb40bb3f9171048019f57c6"],["/archives/2015/09/index.html","866d4d1548d0b8964a749d7711472add"],["/archives/2015/12/index.html","05becdeca5e031941735ae8f825b8a94"],["/archives/2015/index.html","2913a49e2fba84823a25277e0cda576b"],["/archives/2015/page/2/index.html","af111062252e3783fefde08de5281fda"],["/archives/2015/page/3/index.html","a65286d3fbe4cca9091b5aeca1026099"],["/archives/2016/01/index.html","a2bd0cf2266c82b8c6e33dd6320d8cb3"],["/archives/2016/03/index.html","fc408bdc5f9d9eccae9d152e59aac639"],["/archives/2016/04/index.html","2fdad93ee27f1718e12f88f45b8bebba"],["/archives/2016/06/index.html","45e92d0b0b59ce29279dc339454906a8"],["/archives/2016/09/index.html","8b1230bff7e63aacc6ebad14d132c56e"],["/archives/2016/10/index.html","045de47e4da3826c6b87886c1dc12a70"],["/archives/2016/12/index.html","d73aa2d82777310548d33b70c3d10309"],["/archives/2016/index.html","ec253aafc497578ba89a867750a33cc0"],["/archives/2016/page/2/index.html","3f28c3539eb2c5c76c92b13bcabb7f6e"],["/archives/2017/01/index.html","6d4565bfce0ca4b32f7cce22182446f9"],["/archives/2017/04/index.html","4199386ea54ebf4dd0e98815c6652710"],["/archives/2017/06/index.html","e9ed7cc6031bbb980fad3d28fc536933"],["/archives/2017/08/index.html","1fddee969114b9ab83442543c1e5ab5d"],["/archives/2017/09/index.html","0921f3f099e21ec3ff03d3075fee37bb"],["/archives/2017/10/index.html","ed2f2009aef43666e405fcfe4b798cc9"],["/archives/2017/index.html","a44610b352b785a6377bf3f9fe996bf4"],["/archives/2017/page/2/index.html","3dfb813337bfbe17e23a5a5fe47c71cb"],["/archives/2018/04/index.html","8c7d2f7ea77a0f2c9093cee979308074"],["/archives/2018/05/index.html","476ceef5c59a800aece2b8b27defc3f6"],["/archives/2018/index.html","68eee3054ab95c8916fc48edf5fb332f"],["/archives/2019/05/index.html","0b8b39a0bfefee7307dfaa0470ed8874"],["/archives/2019/index.html","1fad54906bd84901b0f364db1a49cb0d"],["/archives/2020/06/index.html","5539ef421c5dd5053d795d7cd5974bf5"],["/archives/2020/index.html","092b343ccda7baab692b51761680af36"],["/archives/index.html","424b3f0232f422139bea56cf82358d77"],["/archives/page/2/index.html","2466b2b24c6c8d3d209aeb33b9ac12c5"],["/archives/page/3/index.html","271174464865c8f12c738039d57a9df6"],["/archives/page/4/index.html","0a15874ce30e1ae04344c4d94348babe"],["/archives/page/5/index.html","69c96be6de4888b6ad4174cfa27226a0"],["/archives/page/6/index.html","58f7513c80280a602c313137f1667bd6"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","3c245c0d943b786b4d1947bdbbd0b0ce"],["/categories/ACG/Music/self-copy/index.html","5f9e3aedfd2f6d1cbccb36a0b696c5e0"],["/categories/ACG/Travel/index.html","47d61c2819a4242147b070371a4938ea"],["/categories/ACG/figures/index.html","8048f3e87c3bdac07a63809da12e50a8"],["/categories/ACG/index.html","6fe12f9bda2b16dc82d37fdf7cca9838"],["/categories/dev/Front-End-Dev/index.html","ef58682bf3ca4803041b84f9ffa0e4fb"],["/categories/dev/Front-End-Dev/page/2/index.html","60d64f9cc0be5fc089861f9716091b7f"],["/categories/dev/HTML-CSS/index.html","236d6b69beb2a3f74f0128dd2d21f977"],["/categories/dev/android/index.html","b789ce2e2fb8616d9521bfc411531ff1"],["/categories/dev/cpp/index.html","0f9ee91c1e45fc352937f657b69a6585"],["/categories/dev/git/index.html","daa70967f560affe302de5372b599cd9"],["/categories/dev/index.html","3156b2b16d28c12cd8f03f6e445f6d7e"],["/categories/dev/java/index.html","29173cdd9453875572ce15536bd7ada9"],["/categories/dev/page/2/index.html","2d189ae2fb887f285191fd5c68a89d24"],["/categories/dev/page/3/index.html","4e5e550430533beb634c2ffb96a06c88"],["/categories/maintaince/blog-setup/index.html","0bfa4fa6cdcdec96b355959c58149578"],["/categories/maintaince/index.html","02452fbdb12bf7129707a2da12ce9ba6"],["/categories/maintaince/macbook/index.html","2c7161a0c8d82ffecdab777fd53bc446"],["/categories/maintaince/router-config/index.html","848a3198696e21110f977bfd82b98471"],["/categories/notes/index.html","7fe5c4e3b394519e4240b3753b72826c"],["/categories/tricks/android/index.html","85a6e28648a644f9d88127192cd37cac"],["/categories/tricks/index.html","65aa6ee57d4b505d1b9f542ba2137e35"],["/categories/uncategorized/index.html","dd317a5b4a694422f10071e1a042831c"],["/categories/works/Front-End-Dev/index.html","6d86222de68b7efd760986786b0dfcf4"],["/categories/works/csharp-wpf/index.html","57ecb77a2a13716f2cbf164a7d00c230"],["/categories/works/index.html","dae333b4d5f4a7cd3a748ce8da51dc87"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","c3040409ade9e54a638fd8b1f3f43cce"],["/ja/2015/03/WNDR4300-setup-log/index.html","854c4fb52eb406530dff73bf08f9f282"],["/ja/2015/03/android-hostname-change/index.html","ea45ccf4cb03c8f109d356615f3b66f7"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","543823d588a87dcd31bd75260d0803a1"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","45b7ac5dea29d8f8e8f677d8540c1cab"],["/ja/2015/04/cpp-study-log/index.html","a9edcb4bd0fb447a6fb7004d838b89f3"],["/ja/2015/04/github-pages-ssl/index.html","af7c04beec2db21934b022ab06194358"],["/ja/2015/04/hello-world/index.html","ebd9d3e38f8076046934cf8acee1d72a"],["/ja/2015/04/hexo-setup-log/index.html","5e268a4fa43760183fca52248ad704a0"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","4a4d559c63721fdc0a26b07a8c2d9205"],["/ja/2015/05/cpp-inherit/index.html","7f19fe8911b6b287fa4ad30eb372f82f"],["/ja/2015/05/cpp-polymorphism/index.html","8ab00a85117f0a99a5622d2d520b16b9"],["/ja/2015/09/android-root-ota/index.html","ecfb8b428cadb0d3ffd0344ddda7a17c"],["/ja/2015/09/java-learningNotes-1/index.html","ae99ca44119ac3f867fbc09d712d7f7c"],["/ja/2015/09/newblog-newlife-2015/index.html","3d6c969e2b5a2636177f8cf07322b373"],["/ja/2015/09/router-rebuild-2015/index.html","3a8f0268bff361311ef3b7378cbde49d"],["/ja/2015/12/2015-12-21/index.html","0b7994fb4067d01d3ebdb4861d666abf"],["/ja/2015/12/PixInTouch/index.html","acad6e555b9c296b652e842075182055"],["/ja/2015/12/git-study-1/index.html","6663d03fdf9b935785affc4b6360bc08"],["/ja/2015/12/hexo-backup-and-migrate/index.html","33d622cc53b88baf98a547487e0bcb98"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","8b90154b1ea9d8a4c422791fa736610f"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","acdf98acaffc319393ed008469c94600"],["/ja/2015/12/router-reconfig-2015/index.html","df02d4c280e90304e339a03b19ce7591"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","539ef42a2a1d4fbbc035d68aa282be48"],["/ja/2016/01/2016-stepping-further/index.html","6cb00cf08eabd7d78ea78d6642c9c3c7"],["/ja/2016/01/Android-Study-1-22/index.html","2b3528f165b82dbd29b39e0a4a16f87d"],["/ja/2016/03/2016-03-20/index.html","0ca445b809e2983f579674cdadb7f729"],["/ja/2016/03/GSC-535/index.html","2989d3a14f10faebbf147650552c51b3"],["/ja/2016/03/gulpjs-1/index.html","8ebb8ca9abc342f39dc0889ab0e14d69"],["/ja/2016/03/hexo-theme-paper-white/index.html","0c2af0d8dae68c47bcb3d222e77afa5b"],["/ja/2016/04/2016-04-19/index.html","c7b0996af5d6844ab26653468f22aa48"],["/ja/2016/06/2016-06-16/index.html","361b93c40cd86c7a85f555a73286bb0c"],["/ja/2016/09/2016-09-18/index.html","cc925ac410ecded51c2b23d31344b1ab"],["/ja/2016/10/2016-10-27/index.html","d73249f96694159c1cb581832c5fb139"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","48f8feb456b7bfb4c9003227b939cb6f"],["/ja/2016/12/improve-duoshuo/index.html","3ebec6a4d23ff0c80c94dc5b09f61b48"],["/ja/2016/12/use-travis-ci-your-blog/index.html","99f54d63659ab04e1e35faac1921a83d"],["/ja/2017/01/2017-iyahoi/index.html","0539a5621c77e4e1c3ef430019423c71"],["/ja/2017/01/webpack-amd/index.html","c77e7dd10da4bfccaf4e2a48bf78d60a"],["/ja/2017/04/kotobukiya-syaoran/index.html","5f541606991148e4226d81018f589bc4"],["/ja/2017/04/macbook-and-surface/index.html","2d28a6b33dd7f22db12cb1c09aaab9c0"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","7a3a8b5b39dae44cdef7d3e4683e4fe9"],["/ja/2017/06/noragami-seichijunrei/index.html","57dcc7eb27434e3f66478b92d44669f9"],["/ja/2017/08/cross-compile-55-libev/index.html","77c896a46325cfbd16148f2381efde15"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","f7ed6d2636c2b4c8e8b547aa7558db42"],["/ja/2017/08/hello-jp-world/index.html","536f0d41def74444778e47d8876a8eb9"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","43f80913579eb0d7a6334a05a8f63c8e"],["/ja/2017/09/record-user-login-status-methods/index.html","12a6c5d01939ae8d022793c4d87bd72d"],["/ja/2017/10/vue-typescript-early/index.html","e2be4f2a8f3d5f453d39482d85e64182"],["/ja/2018/04/2017-end/index.html","f4ada1f9214e50556477b833179c80d2"],["/ja/2018/04/twitter-account-activity-api/index.html","ce309bc8944071bb32873e4cfac89942"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","ea224effe0a47a0ab1e3e41b6305b7a0"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","69f71f8f17aad7f83365306705a30f7c"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","803a47c358754e116aabdeff8bedb9c8"],["/ja/2020/06/cls/index.html","5dda388e56d6011f72489e19b3221a51"],["/ja/2020/06/try-serverless/index.html","1fbdbc6ca970c80052426c0a6173888d"],["/ja/404.html","9633028df49004ded8ea465ca3c09b3e"],["/ja/about/index.html","1fc017c1ae12fe67f5f0f0041f25b693"],["/ja/archives/2017/08/index.html","0b525fe02bd870d92c7e2c8337a7e5a1"],["/ja/archives/2017/09/index.html","e4a64adfc55ffd798f7fc733cb19fdd3"],["/ja/archives/2017/10/index.html","91814b63b00a12a9c012df9112747668"],["/ja/archives/2017/index.html","aa1f66a602760b9bce2a4dd16fbb958c"],["/ja/archives/2018/04/index.html","f93f62f8fd8bf5dbbf249c7b0ba6f8a6"],["/ja/archives/2018/05/index.html","0e97ce4aa4ec7c2b175cb892b35d5423"],["/ja/archives/2018/index.html","3296f61f27b7bac1ccc90c7e0fade710"],["/ja/archives/2019/05/index.html","09b066f2290edd160c583b957bb470b8"],["/ja/archives/2019/index.html","6e33a8f5bd8127ced88c0661230ffd04"],["/ja/archives/2020/06/index.html","65906e284c0987a8e2825b701656bb71"],["/ja/archives/2020/index.html","2acfcca8a26c43d9056fbe02d9e47860"],["/ja/archives/index.html","a4bf889711c67e685305aa38289ad46a"],["/ja/categories/ACG/Travel/index.html","57ca70a0fdc9d74f80ad85c632257e96"],["/ja/categories/ACG/index.html","5ab9dfae702191ea364c7f185fd2ffeb"],["/ja/categories/dev/Front-End-Dev/index.html","7fbdeceaf4d886e9688f6f77e33f9270"],["/ja/categories/dev/index.html","e987d3b9e6a67527207de5982aa90931"],["/ja/categories/uncategorized/index.html","1b20482bdb22aa569a4120228606bb03"],["/ja/index.html","ea046d48675412128733b9ea11fd125f"],["/ja/nihongo-test-page/index.html","1bb0d08cc9444de25ce78e6950321854"],["/ja/resume/en/index.html","109a5749432454c2b7ba10ac45127d1d"],["/ja/resume/index.html","dbf9fe46fcaefc7a3b32b797cbb92f1a"],["/ja/resume/ja/index.html","c2176eb42b1d46e099eeedac3ac43c2f"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","78e1d8bf8807d5955e968ad36de238b3"],["/page/2/index.html","a2b47e1f4805e16894b449424e70c232"],["/page/3/index.html","58169540520916b939d0bfc8596da9e6"],["/page/4/index.html","007f84cec3c91e64bb6a01b4945b970f"],["/page/5/index.html","958aa51e2e9c440d6e3a1f6a0157f38c"],["/page/6/index.html","bd91ec13bf425c4db483c1ea838db166"],["/page/7/index.html","447e2f52fb1d02041d5481f131e9c765"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","3e3b99f2e89bf8022d531989f212fc39"],["/resume/index.html","7a8b1e8435c5cd30006a27a23144fb0d"],["/resume/ja/index.html","59fe3c3474221f99c6ed3a53d2b4cc43"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","863a1501f80fb64f1876f4caf8f432ea"],["/zh-cn/archives/2015/03/index.html","5cbee5b31eabd342ac92592a40188c97"],["/zh-cn/archives/2015/04/index.html","4fbec5d6bed2b4d537b9b82e1185c05a"],["/zh-cn/archives/2015/05/index.html","2242eb07cb59253f8f102b640528b580"],["/zh-cn/archives/2015/09/index.html","b0cde2b99852553412e82b27236a5a72"],["/zh-cn/archives/2015/12/index.html","ac6ff77075ffa3e6b6c6d9eefe883823"],["/zh-cn/archives/2015/index.html","e43c71e92f64372f0f184744874bca1a"],["/zh-cn/archives/2015/page/2/index.html","ccd3ad153268ad6ae3e26b5248b5a4aa"],["/zh-cn/archives/2015/page/3/index.html","0a457ea0aa661dc688050c4823ecd90f"],["/zh-cn/archives/2016/01/index.html","5f681a31f1418f3ceed8d872a103fe00"],["/zh-cn/archives/2016/03/index.html","d89183e26b57532218f06b3f5b92bf7b"],["/zh-cn/archives/2016/04/index.html","e4b4d7bd61b6d30cf938f2f6ad496516"],["/zh-cn/archives/2016/06/index.html","4d735bd2f1ab57b28e0da5079027253f"],["/zh-cn/archives/2016/09/index.html","a03c8a2af16ff35a1fb55f271ee83c60"],["/zh-cn/archives/2016/10/index.html","260483df609a87ecfbf113fcb1ef78fc"],["/zh-cn/archives/2016/12/index.html","24dfdb1aa8369e9a60930753a0dd2411"],["/zh-cn/archives/2016/index.html","a1b2b4af546435f3bae53763b7d9bdc4"],["/zh-cn/archives/2016/page/2/index.html","25b67fb5a1100a149058c4552453adb2"],["/zh-cn/archives/2017/01/index.html","444d1161d5798d6427ba1676d2831354"],["/zh-cn/archives/2017/04/index.html","a41cdd259a792419a3bdabd0fd75e2f6"],["/zh-cn/archives/2017/06/index.html","40c77419b3452263ccbb210a901c6551"],["/zh-cn/archives/2017/08/index.html","32091dd0f8b78d51c0a2c0a90dde13e7"],["/zh-cn/archives/2017/09/index.html","6669995f8dc75cfdeace854960df3765"],["/zh-cn/archives/2017/10/index.html","a02e8e299bdf15766bc36ff65c6a2807"],["/zh-cn/archives/2017/index.html","6424f99740ddd1e7958b1720da3ac772"],["/zh-cn/archives/2017/page/2/index.html","e05c315d8455a9321cf9033a3be89878"],["/zh-cn/archives/2018/04/index.html","563b30d7a8a3447108bad4170c3ae6c1"],["/zh-cn/archives/2018/05/index.html","e2b028c492fb164b8d094cefbc82ba49"],["/zh-cn/archives/2018/index.html","c32dff1ea978c5245ce9c2b5a1290d82"],["/zh-cn/archives/2019/05/index.html","340986e72f4e83916e3c37af3682cda9"],["/zh-cn/archives/2019/index.html","21404447481dad9214f0643bac93d825"],["/zh-cn/archives/2020/06/index.html","5818211f00356ca8ea82266bd4aa2bfb"],["/zh-cn/archives/2020/index.html","03baa58f86f3a96d180e053e04a2f6c3"],["/zh-cn/archives/index.html","c9ed89d3e2acc5c9c063b5cd7a249128"],["/zh-cn/archives/page/2/index.html","b3f315c2d88162e18c0bb6912c2ff413"],["/zh-cn/archives/page/3/index.html","39c9ed43d576ccd584166a0f4dcd1dad"],["/zh-cn/archives/page/4/index.html","eade27074fd205ac9a2d77e21ed2a560"],["/zh-cn/archives/page/5/index.html","7a876800a1d727f507a3029b36bf03c4"],["/zh-cn/archives/page/6/index.html","8ed8169a73f5a5236fb72f0e48ff76ec"],["/zh-cn/categories/ACG/Music/index.html","e13cda71fcb1b516a84f24158bcd2d51"],["/zh-cn/categories/ACG/Music/self-copy/index.html","f624647c6bc0971138f7b0da3f1ba862"],["/zh-cn/categories/ACG/Travel/index.html","b9b5f34eded386a6a268cdf468ce5b9c"],["/zh-cn/categories/ACG/figures/index.html","12272143ddfd6e3c5029206bbafee284"],["/zh-cn/categories/ACG/index.html","26cc2db5cacb73aeaf56d57f73fd5ca8"],["/zh-cn/categories/dev/Front-End-Dev/index.html","a1c9d08eca3923446c5e51c79bdc5591"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","61c7041e481ecf13853f869848b0ec39"],["/zh-cn/categories/dev/HTML-CSS/index.html","e5d4f31624cedd8397984a6ff7d57148"],["/zh-cn/categories/dev/android/index.html","2272eb7487ffe75121dcf50657ba52c8"],["/zh-cn/categories/dev/cpp/index.html","27535fb9be02cda14bd5301508d6de25"],["/zh-cn/categories/dev/git/index.html","20e15be5c1f4b3d95526cee809814b4a"],["/zh-cn/categories/dev/index.html","0b05a8a3043c98047659d04701588ab2"],["/zh-cn/categories/dev/java/index.html","854fa6512f18b00a879046e4e85087c4"],["/zh-cn/categories/dev/page/2/index.html","8a2a9f5bf7090b4efed9d6cfe331bde2"],["/zh-cn/categories/dev/page/3/index.html","4fa9652f1a6dc833c9d5a6813bf53100"],["/zh-cn/categories/maintaince/blog-setup/index.html","c113f5e0fa49ae066dec50e8366e6980"],["/zh-cn/categories/maintaince/index.html","e2a74e6f55e9c38888c3cd89014f2666"],["/zh-cn/categories/maintaince/macbook/index.html","7601f4195f8aec180d8da56b31ee6f7b"],["/zh-cn/categories/maintaince/router-config/index.html","0b18cc95f888e4064d2d6b935b0ff38e"],["/zh-cn/categories/notes/index.html","3e9f22058eeab9c7a24ac7b287fb6544"],["/zh-cn/categories/tricks/android/index.html","7843cbe61331ab4538294313eaf9067f"],["/zh-cn/categories/tricks/index.html","b08df2fc1e84c44897ff02b4010a40be"],["/zh-cn/categories/uncategorized/index.html","9ff184e0406c74085423e6b600667f57"],["/zh-cn/categories/works/Front-End-Dev/index.html","18bc162ccbe0162d4b6b56ac9e6e87ea"],["/zh-cn/categories/works/csharp-wpf/index.html","33450cc041298cac51ce1d410c302e5d"],["/zh-cn/categories/works/index.html","a85ea2a4d5a90dd3f382cc1b131fd608"],["/zh-cn/index.html","bb1bab2d99e27cf48a26ef77fc368a95"],["/zh-cn/page/2/index.html","8c029f007e08a13dc513e64b96215557"],["/zh-cn/page/3/index.html","1fc07d2782acdefd500d13cd9955a816"],["/zh-cn/page/4/index.html","1b93faee4599229eb6200c63db1434bf"],["/zh-cn/page/5/index.html","8ddc6ec3416ebe63cb81d0a79b1a0693"],["/zh-cn/page/6/index.html","31058521e49db77f4160bd708435b860"]];
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
