/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","413a2a6f0859b9e33b8fe6bc3d58364b"],["/2015/03/android-hostname-change/index.html","0810529658c777b4e3c8c23693bb2c21"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","9f3ce532fe0a58f206b62eda8275118e"],["/2015/04/android-chrome-issues-with-webpage/index.html","26b41a6785c20a8c4cfada62fbbaac07"],["/2015/04/cpp-study-log/index.html","78d75f1dae1a3e1e2e2ef7a720404156"],["/2015/04/github-pages-ssl/index.html","faa39c3a055ad41590cfa83a193d141a"],["/2015/04/hello-world/index.html","18022b92592239f3e1bdd1e4b823eb4a"],["/2015/04/hexo-setup-log/index.html","55272ce22f37dde5e8dfc48bc53b484c"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","f925b5908181aa3635a26fbd7775c4f0"],["/2015/05/cpp-inherit/index.html","520a2c51226f33969a3d4bd469f2d281"],["/2015/05/cpp-polymorphism/index.html","af957301c44c5b3c2681f3ba316708fa"],["/2015/09/android-root-ota/index.html","bb6bc8a8699d961a9a2bc357c5d90875"],["/2015/09/java-learningNotes-1/index.html","39dcb3c47858890fa6dc385e66594dd4"],["/2015/09/newblog-newlife-2015/index.html","cb0400ae53ef595eeb5fdb605dc6b854"],["/2015/09/router-rebuild-2015/index.html","46326cb4c6b02dad8595c6007575ae25"],["/2015/12/2015-12-21/index.html","d93591b5570cc298daea13299a5d86e3"],["/2015/12/PixInTouch/index.html","c740daf6038ff43cc5b7f900aad70ffa"],["/2015/12/git-study-1/index.html","e04b35dfd9d02a706747d9d9d090f4b1"],["/2015/12/hexo-backup-and-migrate/index.html","5b591b1455c8d1faf0104fb2f7f79687"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","80d2bb14996841201dbc7eeeb6e21f47"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","4a76313ac8ebe4438003a1f92a1f825a"],["/2015/12/router-reconfig-2015/index.html","26349adebcf8d848d8098f0a69197fd0"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","6fb7c2d454ef961720331b99a58dd56d"],["/2016/01/2016-stepping-further/index.html","76676a422736213f090bd9e63e386b14"],["/2016/01/Android-Study-1-22/index.html","26343a93bb23a4a3447e4147bdb6f0f0"],["/2016/03/2016-03-20/index.html","1f8bbefc2023d9f159434c061bad7089"],["/2016/03/GSC-535/index.html","ac947d7190b42c1ca164b9bc0c764429"],["/2016/03/gulpjs-1/index.html","a4b5e075b420eeb5c8b1d39485fb95c4"],["/2016/03/hexo-theme-paper-white/index.html","e45bddef921d6b371bd285adcc5645ee"],["/2016/04/2016-04-19/index.html","41744c55b11ef884ef7dfe6fe7d438a8"],["/2016/06/2016-06-16/index.html","b05f0c4aa23d5eed35ccc021f42dead0"],["/2016/09/2016-09-18/index.html","7ec2f2843ea8c643d81d848b381c135e"],["/2016/10/2016-10-27/index.html","3b2376e248ec9eb456d2cac08190b168"],["/2016/12/config-switchresx-and-2khidpi/index.html","c028cff34b97bde5c2546f196f0d3753"],["/2016/12/improve-duoshuo/index.html","cf154e2dff7bba8f1a22cbcf40f9aa4b"],["/2016/12/use-travis-ci-your-blog/index.html","35ff99ff89c270e34ae1a40ee6e883b0"],["/2017/01/2017-iyahoi/index.html","d5be4fb37bbe08bc5321619d67457da5"],["/2017/01/webpack-amd/index.html","d791c75d5e8ac2571fa05309e2bd4f1d"],["/2017/04/kotobukiya-syaoran/index.html","095de0878e1aebb03c28e8f4111be29f"],["/2017/04/macbook-and-surface/index.html","d41c75d618d8fb61ed036f649e82384b"],["/2017/04/uc-hyakuya-yuichiro/index.html","dfab85d2117dc061485aa7d30cab2835"],["/2017/06/noragami-seichijunrei/index.html","91ebb76e82e9b047b6a7266641d8c9ad"],["/2017/08/cross-compile-55-libev/index.html","88b24c11c7c87601d9d75258c33de18d"],["/2017/08/explore-service-worker-working-lifetime/index.html","21187b342dc54d1506897117fa9e5a25"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","6a2fb6e3ac5e007400959832e7d800c1"],["/2017/09/record-user-login-status-methods/index.html","34cbfc847ca40c9078a12b7c4e41a4ed"],["/2017/10/vue-typescript-early/index.html","2ba34edc758a3bc02a91ec370b5823d1"],["/2018/04/2017-end/index.html","fd8ece4c5a400639a919f16e10f3446c"],["/2018/04/twitter-account-activity-api/index.html","46dbedae48ebb42cd20b8d7d9beb042d"],["/2018/05/buddy-complex-seichijunrei/index.html","0e9e53cdf8477c7a1c43f3a784c5e7fa"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","e08f66a10540b76c6acfee124f84b321"],["/2019/05/2019-05-17-google-io-tech/index.html","71745c7622520b7c10feabf57e3e80c0"],["/404.html","a87c0475896579b44818e18b6b1023fc"],["/about/index.html","9034dda68f0b49d704823b0b43362797"],["/archives/2015/03/index.html","5acccaa9aac869dc6e239327edbc74d5"],["/archives/2015/04/index.html","06b81d6bb8891c472bb98bcc0cb8ed25"],["/archives/2015/05/index.html","a72d62d5182d01087fa78e052970c5c5"],["/archives/2015/09/index.html","674a8d3f75e25649ba022e153d485393"],["/archives/2015/12/index.html","e2e6a2fb853bef83b732eab28fb1c2ef"],["/archives/2015/index.html","fdafa413c0384e246e86640ab6f06de7"],["/archives/2015/page/2/index.html","68a2e5bee13750141ae6b0de81f2b556"],["/archives/2015/page/3/index.html","9bc4ca789e9ed0a726b34242e8cd814a"],["/archives/2016/01/index.html","f025ff27a2e07ec7eb94cd614e1b7a9c"],["/archives/2016/03/index.html","bf1b4bdc97c5c0a1a355c7a3e63fd2f6"],["/archives/2016/04/index.html","0419563ae575406fcfc8c62cd797a83d"],["/archives/2016/06/index.html","0e59aea98a67472d5e09902bde8e89f6"],["/archives/2016/09/index.html","ec4945943d4e86cd11e845511b85807c"],["/archives/2016/10/index.html","59c87cb7dd889915ad546e861485cf4f"],["/archives/2016/12/index.html","78c3c37a206a09e2894b6b27687fc878"],["/archives/2016/index.html","a9ae24ad51791e4e23aed9c4f1f87a82"],["/archives/2016/page/2/index.html","f7426053a6b5ff42326fd01aa8c6f046"],["/archives/2017/01/index.html","f007a888feecf180f32facfdfe5c751a"],["/archives/2017/04/index.html","82397bdaf3c492aa1dca419d3afb369a"],["/archives/2017/06/index.html","ab4e163129b013a439200b0c8070c4d5"],["/archives/2017/08/index.html","1ddd5a8e3c7a076f2e6a661dfb75b481"],["/archives/2017/09/index.html","466b39f1f76d784c96ee948d28e627e5"],["/archives/2017/10/index.html","e403c0486d6e533ce2cb729045b24a9f"],["/archives/2017/index.html","4d84010041ab4a8dc9269091ab1e4d60"],["/archives/2017/page/2/index.html","36c96678774015df05442159193aeaa6"],["/archives/2018/04/index.html","07d723050bcddd64bcfeaf3e33e4774a"],["/archives/2018/05/index.html","cede2386731e482c66153864ef09c62f"],["/archives/2018/index.html","b29ecfdcc325952ab3964ef4f795cf3e"],["/archives/2019/05/index.html","b4ad7ad9f3545de3a9f4c3aa2dc3862c"],["/archives/2019/index.html","701a80413f5b8dd500dfc685a639c76f"],["/archives/index.html","f6efa0a12a358619cd8dd89448b0eb97"],["/archives/page/2/index.html","356254141d93cce362bf84d61a3c593f"],["/archives/page/3/index.html","d4abc859a525d38bca4965491b9956d3"],["/archives/page/4/index.html","962275d83581bcfe455bf86ebf43dc15"],["/archives/page/5/index.html","befb54cd379d05d20626fd804b9af3ca"],["/archives/page/6/index.html","47c04e50c07f854e1acf209bb55ab5b4"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","39b06ab50927effc73cfd385176c779e"],["/categories/ACG/Music/self-copy/index.html","aea5fb8e1d9467ba0895fa04dea3d802"],["/categories/ACG/Travel/index.html","6cb65765cd166b29fdf79b90f13306f2"],["/categories/ACG/figures/index.html","ffe8c5116d34be785e5711292e982994"],["/categories/ACG/index.html","22c3309a62c64b59144880f951065889"],["/categories/dev/Front-End-Dev/index.html","a25c9981138dd5cd779aa04dc6460cd1"],["/categories/dev/HTML-CSS/index.html","ab58e0f3feefb148782933dc7e9314e4"],["/categories/dev/android/index.html","3fc658e4ee0c28d6c20b71c95dd977ac"],["/categories/dev/cpp/index.html","6e038cfbe97b372385f8d4491b928c4e"],["/categories/dev/git/index.html","692948bb5f9351e44114eb1aa5c4725d"],["/categories/dev/index.html","b5248b9364c05005ef836aae3a42716c"],["/categories/dev/java/index.html","be2216fefcceed14b04ea8e75c6ce059"],["/categories/dev/page/2/index.html","1da7829987e39ce141573abdd6192815"],["/categories/maintaince/blog-setup/index.html","f83841c228cf298c41e5d40b7ffe8898"],["/categories/maintaince/index.html","3b9edfa40e07fb396f7c685b821c3ebb"],["/categories/maintaince/macbook/index.html","4a874e4fdffde99f451f9cc44c057782"],["/categories/maintaince/router-config/index.html","f15690a771c8f6bceb68a32d463ec9fd"],["/categories/notes/index.html","3ae30c63886e378057e07fe99256b7f8"],["/categories/tricks/android/index.html","0271c79deeab375c731ea179fbc6a830"],["/categories/tricks/index.html","01ecbf23f2a9d7312b9f1e04c1598d34"],["/categories/uncategorized/index.html","9b0f32aba502f1dde93d0ea3c4bca183"],["/categories/works/Front-End-Dev/index.html","883d0f8f87b68319ff4f25cc66a5d2f5"],["/categories/works/csharp-wpf/index.html","43e60e3cc22a351096cbd6525da858a1"],["/categories/works/index.html","3395b23eb2f847ce6eb5bc099edfdd4e"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","456b893f19bd12b6b594f471811a1f01"],["/ja/2015/03/WNDR4300-setup-log/index.html","202588280d0926a805995aa58d303696"],["/ja/2015/03/android-hostname-change/index.html","27ccb468949b56bbaa1c04060d96f189"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","5731baa6f889d963ccac64d32070914c"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","583e8ebf425e10b471dc600cf96614c0"],["/ja/2015/04/cpp-study-log/index.html","0a42497aa96116456c923c7d9f85d9c9"],["/ja/2015/04/github-pages-ssl/index.html","58789b679fb7d8509bf54916ce703fdf"],["/ja/2015/04/hello-world/index.html","da0d9432ce58951d703bcc60f2a99ff1"],["/ja/2015/04/hexo-setup-log/index.html","8e284b5f1e5e193f3d7c350fd26db5e5"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","d1d0f12ccf293cb88bb9b34ed8642042"],["/ja/2015/05/cpp-inherit/index.html","71ea80ceeec139b032ce103d1ad2d5df"],["/ja/2015/05/cpp-polymorphism/index.html","9414ed227f2c9117eddc8d0cd0a78845"],["/ja/2015/09/android-root-ota/index.html","5c7925d4c2dad7dcf606adf678657c8a"],["/ja/2015/09/java-learningNotes-1/index.html","c9e5f7f38806c04c79f98dc656076763"],["/ja/2015/09/newblog-newlife-2015/index.html","b52706c3aa6310527f11696397f732cd"],["/ja/2015/09/router-rebuild-2015/index.html","b49bc4bfba33c05c69216bf5b6be351f"],["/ja/2015/12/2015-12-21/index.html","ae3719c8cf3cc593333593af060cebf0"],["/ja/2015/12/PixInTouch/index.html","c9bdc8a3402b0a78da7a6233e65e131d"],["/ja/2015/12/git-study-1/index.html","cfc85c78e7b648e2cfcfb972714232ff"],["/ja/2015/12/hexo-backup-and-migrate/index.html","1595f9138cacf0043c52631e4dafe5f1"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","7b176e6afee6c1955b40b26e3ed4f6b4"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","18b176664fbe2975046654253aec9b14"],["/ja/2015/12/router-reconfig-2015/index.html","5d997ff33bb4e8c0f42c963add88759d"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","84a84b2e8c305c6d3c1c5c2c9682e0d7"],["/ja/2016/01/2016-stepping-further/index.html","bf91807bbb2bb69b73ed03e1f2e0b4b6"],["/ja/2016/01/Android-Study-1-22/index.html","9d8d6292c251c9862921a22abce78537"],["/ja/2016/03/2016-03-20/index.html","155fe1872549a9922d2e1c05c3cbd4db"],["/ja/2016/03/GSC-535/index.html","292c4a080c444cff60a83bde089e61fb"],["/ja/2016/03/gulpjs-1/index.html","301aae2bf0549fcc65359d8e3a08f5cc"],["/ja/2016/03/hexo-theme-paper-white/index.html","91fbbfd3a17bef9b265f925bee2317f9"],["/ja/2016/04/2016-04-19/index.html","3aef580db1cba2591b2a7268c0619140"],["/ja/2016/06/2016-06-16/index.html","7daaa7257475661ac5ac2583d7e857d3"],["/ja/2016/09/2016-09-18/index.html","266dfb1d2751f1f189b430dc157d91fb"],["/ja/2016/10/2016-10-27/index.html","5b2157a5632f0cb139fa4d6c2ede7e59"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","a571832e7e739ae2decb7a66facc57a8"],["/ja/2016/12/improve-duoshuo/index.html","907b8ed6377154d4f0dcd17f86ec90bf"],["/ja/2016/12/use-travis-ci-your-blog/index.html","9b194072a8c882ab6f0ed7d7aa1249c0"],["/ja/2017/01/2017-iyahoi/index.html","17190a05c5ff8cfab063548e9aa2c6be"],["/ja/2017/01/webpack-amd/index.html","8e9a2e0460891e2934a1bef4483d4f90"],["/ja/2017/04/kotobukiya-syaoran/index.html","3d1bffe978ebe027fe529269aed57ef6"],["/ja/2017/04/macbook-and-surface/index.html","a28ec84c2a93c8f5701e70c68bbf4a7b"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","fe2cea54ba5f5ba80d8c57b366e3b551"],["/ja/2017/06/noragami-seichijunrei/index.html","8d27bc489db9a7fc0740f065242c1b45"],["/ja/2017/08/cross-compile-55-libev/index.html","6ed40b049b9317609a1350b5a1e995fd"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","8ea356e18d12bd7f397851835372050d"],["/ja/2017/08/hello-jp-world/index.html","48c1eb1b41c40765781ce24bc94b59bf"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","16dc259ac91c15de8ca52b1077dfaf04"],["/ja/2017/09/record-user-login-status-methods/index.html","c5535b9151aaca5d66f70824b10c3af0"],["/ja/2017/10/vue-typescript-early/index.html","e7cdcfecb6e5435c4b4d6caa2e9dbe74"],["/ja/2018/04/2017-end/index.html","796e7d88cc71bf68b98549c9198fb55d"],["/ja/2018/04/twitter-account-activity-api/index.html","c7b1e520541206b31ff8b1d948050494"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","053718de7ed7659d36a8b0889be1a2a1"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","c5707fd72720565f3eb457d0c2c2593f"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","a611512d33b0ac106bd13a8d8443cc9c"],["/ja/404.html","f8b63f8a937367527061478cacceb640"],["/ja/about/index.html","18733b0f3051b36d553c85db402d5333"],["/ja/archives/2017/08/index.html","15a7e5483e9253ca090623239b55e700"],["/ja/archives/2017/09/index.html","ef23f4b91d6241b1dc01d44b64f24011"],["/ja/archives/2017/10/index.html","be268d8da455acfceb995574524a2da8"],["/ja/archives/2017/index.html","d6f2b69f9ae401490807efae0dab59c0"],["/ja/archives/2018/04/index.html","62e02ef6daf0f190807b395640a3ea71"],["/ja/archives/2018/05/index.html","6bb8a2f42b61e301928b0fc37e96425c"],["/ja/archives/2018/index.html","75d8045a16a96339ad0ad6e8dbb0522f"],["/ja/archives/2019/05/index.html","46a33919caa998c839c4a23d9db22ae6"],["/ja/archives/2019/index.html","d96098fd63af91a91c2a375c6ec132d1"],["/ja/archives/index.html","a35695315a1d6e606369befd5cc66fba"],["/ja/categories/ACG/Travel/index.html","125805061c6825988258b6210160bbfc"],["/ja/categories/ACG/index.html","7b8a1f24646dcb19b44b44ba801c8174"],["/ja/categories/dev/Front-End-Dev/index.html","d2eb1cc2b887407c2668debb0f0c01c3"],["/ja/categories/dev/index.html","9f6ecf2634303c7a964a0363137ce8c9"],["/ja/categories/uncategorized/index.html","5b4a495635d7006f4ffeee9f76a81885"],["/ja/index.html","c4d96d339626633e9da5c159f5c818e1"],["/ja/nihongo-test-page/index.html","d1cacaf85df68d4a5549d3a57738d813"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","151877867b9c8dda90272be21178cf39"],["/page/2/index.html","f49c55d770120de4b374e2118520050e"],["/page/3/index.html","48f545db62dd4ffd25db9c2c905cec61"],["/page/4/index.html","96e06472e9fbbdc1742094c4fc26e0b9"],["/page/5/index.html","a1eedece690fc7642bcb3ece46bf94f9"],["/page/6/index.html","937b8a477131c9b1e9bf9b34723bdc73"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","daced0450c0b2e841935134d1d6d9f0d"],["/zh-cn/archives/2015/03/index.html","b134e7f6f490dbdf01521b7c569d058f"],["/zh-cn/archives/2015/04/index.html","4eae53d4c20cb8113f9344f6567ff504"],["/zh-cn/archives/2015/05/index.html","d6ffa6f63555d5c0c525ac741a13efaa"],["/zh-cn/archives/2015/09/index.html","fa36decde20cecf18f158bde713d48ac"],["/zh-cn/archives/2015/12/index.html","f695626dc1066f7c5a32db4de4a0bc97"],["/zh-cn/archives/2015/index.html","eadcf21933243c7d9fa0b8e9de77d9ed"],["/zh-cn/archives/2015/page/2/index.html","840480664055d8c705bda68231ee9791"],["/zh-cn/archives/2015/page/3/index.html","a498720a3f8994febc6848c606907c64"],["/zh-cn/archives/2016/01/index.html","35df0ac4bd7a5d9f34f7bd169c73041e"],["/zh-cn/archives/2016/03/index.html","62ba2ecec550318bc8c1c960cfb2f48a"],["/zh-cn/archives/2016/04/index.html","8897948e49f16ab12c14078a6108a1bb"],["/zh-cn/archives/2016/06/index.html","f8a0d3bf2a818d466c519e4d9543b486"],["/zh-cn/archives/2016/09/index.html","9932c7a2367ec7e6e9edfd21f9470941"],["/zh-cn/archives/2016/10/index.html","e20e6a6b6dae00241508699a70172400"],["/zh-cn/archives/2016/12/index.html","226eab746e4a20380dc48339d3eee9fa"],["/zh-cn/archives/2016/index.html","349c327732175feb7f07deaa86f6c7ea"],["/zh-cn/archives/2016/page/2/index.html","074e0a18a357915ae3a4ec71d9b99e6d"],["/zh-cn/archives/2017/01/index.html","7779536e9f0ed7f1efbffdee57dcb25d"],["/zh-cn/archives/2017/04/index.html","4a9ecb15c9a448d1cf80aaeefbc075bc"],["/zh-cn/archives/2017/06/index.html","cd7090d1336df8c67a484e23c360db82"],["/zh-cn/archives/2017/08/index.html","c9534e715e93a32225600a51693ae944"],["/zh-cn/archives/2017/09/index.html","14c26c7b40fc15edc9f3be7ebed8d63c"],["/zh-cn/archives/2017/10/index.html","6fad94cbd81a2d7f4e218524b97cd03e"],["/zh-cn/archives/2017/index.html","434775eadbcc72a199101e7cdb009658"],["/zh-cn/archives/2017/page/2/index.html","8577ed37aa6b3598dd69972f0c592b9b"],["/zh-cn/archives/2018/04/index.html","62b3219d139d80f93d1eba2222b6a9b6"],["/zh-cn/archives/2018/05/index.html","38bc5aa1b49aaf6ac88dc9a92cc9aa72"],["/zh-cn/archives/2018/index.html","4f5be67b492a4f6674c97a2e1dfbf99e"],["/zh-cn/archives/2019/05/index.html","c5922d02377d5a57c639787df03874e0"],["/zh-cn/archives/2019/index.html","1cd6abb0d6ceafa3e8d81eab76e70c1e"],["/zh-cn/archives/index.html","db16ba8a5ff095dc3053f92f35a6d537"],["/zh-cn/archives/page/2/index.html","c1a0bb072372f817910f70dfb54b7ac7"],["/zh-cn/archives/page/3/index.html","91b01cc4fe58a86a06b900c7c0d35450"],["/zh-cn/archives/page/4/index.html","7b79f356b887d924602551d3f70dbf84"],["/zh-cn/archives/page/5/index.html","c1a994ef03d8c3da6bf2269193ef8996"],["/zh-cn/archives/page/6/index.html","a071eaa55221f168a5a6f3dad6b727e6"],["/zh-cn/categories/ACG/Music/index.html","6237c97e8c2fd6acd6ccccfcbce8561f"],["/zh-cn/categories/ACG/Music/self-copy/index.html","a81d267b369c57207a3af32e520a6029"],["/zh-cn/categories/ACG/Travel/index.html","998995c4899a81c65d25c1146cddcd97"],["/zh-cn/categories/ACG/figures/index.html","c8f64660d9d960d8444ea086c96f4539"],["/zh-cn/categories/ACG/index.html","860b4178603840dca59ed0cb54de76e4"],["/zh-cn/categories/dev/Front-End-Dev/index.html","8ff8f9a13ac7e656e9b018018f1aa4a6"],["/zh-cn/categories/dev/HTML-CSS/index.html","bde80b37de019cc40e272b667901089e"],["/zh-cn/categories/dev/android/index.html","892e56ff7b9c6eb0bfbd4952280cf18e"],["/zh-cn/categories/dev/cpp/index.html","4439f2ceb220e1b9ea9bcd8be4fcf0da"],["/zh-cn/categories/dev/git/index.html","820ff2178da1c3d40eafc3923a4a33f7"],["/zh-cn/categories/dev/index.html","ab757486fcba3826c84d12ff974327d3"],["/zh-cn/categories/dev/java/index.html","9296b41adcf63d01fa26c06ff218db35"],["/zh-cn/categories/dev/page/2/index.html","fc9a86c7ea94000afd212091c9a47d95"],["/zh-cn/categories/maintaince/blog-setup/index.html","07a8fba616002d413584d09e17d0aab9"],["/zh-cn/categories/maintaince/index.html","4b64e3718999e8be16f90858db2c01ac"],["/zh-cn/categories/maintaince/macbook/index.html","e64e814a296d03301209151234e2f6b5"],["/zh-cn/categories/maintaince/router-config/index.html","8027f34978f04d7dc63201b1c1405146"],["/zh-cn/categories/notes/index.html","f77a67e47e3f9f5d8d6d6c542f449c1c"],["/zh-cn/categories/tricks/android/index.html","25a7528981badfddd01c21dc5183597f"],["/zh-cn/categories/tricks/index.html","5a8e10ddd0bcaca6953b3a1b2db3ebcd"],["/zh-cn/categories/uncategorized/index.html","f3afe9851bec38fb0f164f2c3892e8b2"],["/zh-cn/categories/works/Front-End-Dev/index.html","3675d96cfe0263c3bfdc953eaacbd135"],["/zh-cn/categories/works/csharp-wpf/index.html","e52f785781f4167f85c0d23bfafa6d97"],["/zh-cn/categories/works/index.html","9c9a04f8a2287abc28ab32729c1aca17"],["/zh-cn/index.html","1019c9541defb055ed0a84c99b9d38b9"],["/zh-cn/page/2/index.html","76caf8dfc641cf2d6d815569887d5a0f"],["/zh-cn/page/3/index.html","f757c88a45050813a3d2716fdb3e392e"],["/zh-cn/page/4/index.html","071bbb62c5463a879f382b08ff1f6975"],["/zh-cn/page/5/index.html","56004abacf243fe8a7d929f96c31e6f6"],["/zh-cn/page/6/index.html","f402b203000ae44e9e10631526728652"]];
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
