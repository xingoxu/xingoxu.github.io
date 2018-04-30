/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","0cbae2185f3c2413c0ee0d07f97acddb"],["/2015/03/android-hostname-change/index.html","56d199b4e7cc79b08af31e0a200d24db"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","dc5e80802429bdf2ee85c9e34d8ba4a4"],["/2015/04/android-chrome-issues-with-webpage/index.html","7f124487a7c0afc05004e8f4ec28664e"],["/2015/04/cpp-study-log/index.html","c33a26903555a087e70a957a3d78e62d"],["/2015/04/github-pages-ssl/index.html","ddb2bfcfb8e7103df2bb5eff6b3af6d1"],["/2015/04/hello-world/index.html","61b9235957d36b8cf3712dd7eb7cefa9"],["/2015/04/hexo-setup-log/index.html","dd37bc16ac7e9ec2ac306437083f6dad"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","0e27131e788f81758cb50b0824bb9c2a"],["/2015/05/cpp-inherit/index.html","e41e23bbd31fd8fd99b09e3c920d9e1b"],["/2015/05/cpp-polymorphism/index.html","215719206e3dc7dc16ee15c147156c35"],["/2015/09/android-root-ota/index.html","32e94a49f4651c2cbe9c8ccfd797a829"],["/2015/09/java-learningNotes-1/index.html","bf85249eb6657095d6be05ab95ce6d5f"],["/2015/09/newblog-newlife-2015/index.html","39a7fd4cae14419f69f23f1ad6149684"],["/2015/09/router-rebuild-2015/index.html","551b7282af76a84c34639f4d70c9c681"],["/2015/12/2015-12-21/index.html","ac1bfbfd2d2f1ae2326fb238fda91920"],["/2015/12/PixInTouch/index.html","68ec9732959b256e160827b9b8dc69d9"],["/2015/12/git-study-1/index.html","aad4542cfe5136e1a8db5497f4d79870"],["/2015/12/hexo-backup-and-migrate/index.html","c2b7e0c07fda8fc8ebaadffe1b694fe3"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","d8ebf1152f65bae5aef1ace50c75bf27"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","7e26c2c866aa0de3c50e13da41f8f51f"],["/2015/12/router-reconfig-2015/index.html","13bd822983bbf726af0fda023e573615"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","c5c9071535e95403f30ac4dc400acb77"],["/2016/01/2016-stepping-further/index.html","74916b9cc2b79d1644913f5d74ca0523"],["/2016/01/Android-Study-1-22/index.html","884e1ad23706cdbfb99865f289065494"],["/2016/03/2016-03-20/index.html","c42744197de6ecad2df85f729d19f362"],["/2016/03/GSC-535/index.html","d1aeb9b24348a9d0eb0a4520707293de"],["/2016/03/gulpjs-1/index.html","a8059c752ae1d59d354dcb22a69e6940"],["/2016/03/hexo-theme-paper-white/index.html","109b6564eb6bf114e9d27542744699f3"],["/2016/04/2016-04-19/index.html","f9c8ebde7ff9c6156b598bfdab80f797"],["/2016/06/2016-06-16/index.html","9ca00a877da2101e41dd3bb37cab189f"],["/2016/09/2016-09-18/index.html","e84c240b65055a5f433e0fe4ac9bd866"],["/2016/10/2016-10-27/index.html","533fcd63a12b5cd49fb649f0fa933ef3"],["/2016/12/config-switchresx-and-2khidpi/index.html","85ad16a9110631b6b708337f4b1dcf50"],["/2016/12/improve-duoshuo/index.html","ecc517f9255e626ec3ca0c9746b120f4"],["/2016/12/use-travis-ci-your-blog/index.html","745dfa937fad2149c8e2b1261c1ae6f1"],["/2017/01/2017-iyahoi/index.html","18a645962b37382a3883f08d9cff5f5a"],["/2017/01/webpack-amd/index.html","5bfe61703ab2960d0e305c27a2a9b2eb"],["/2017/04/kotobukiya-syaoran/index.html","aca08e9b9df05d9757f8c130daf10b6e"],["/2017/04/macbook-and-surface/index.html","445753c5e1a34ba28ae5d471523bf514"],["/2017/04/uc-hyakuya-yuichiro/index.html","a727a2fc1bb0a305e8a3e5a32d484193"],["/2017/06/noragami-seichijunrei/index.html","1fdedceb251c8cf0050d7d1e80ac0826"],["/2017/08/cross-compile-55-libev/index.html","8320c0f3b00706d4d76f11dbc158762d"],["/2017/08/explore-service-worker-working-lifetime/index.html","e0f71dc73f9347951d305ef5ee93b8ca"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","ae7f2a2ca488402b1d36dd071c889639"],["/2017/09/record-user-login-status-methods/index.html","abbfb61b55723c58a4320cdd338f6711"],["/2017/10/vue-typescript-early/index.html","a26e458720f0925f1df9742d48bbea83"],["/2018/04/2017-end/index.html","356c73e1cd8c6ed2207b5e661cb3b1bd"],["/2018/04/twitter-account-activity-api/index.html","fbe711ebe7f904d64ddb74db1999c34f"],["/404.html","5d581cb50cd8f316ffb54d818bff0c4c"],["/about/index.html","8d4b45817bb00580a60fec3292d0d8e9"],["/archives/2015/03/index.html","b994bef2a925c81db175c891ca41b92e"],["/archives/2015/04/index.html","b68e68f0aecb840c6e66ebaf84331b4d"],["/archives/2015/05/index.html","404b2eb0b86c1dc0858ea625f5335713"],["/archives/2015/09/index.html","3befc43578c4740968c05b3280de6c02"],["/archives/2015/12/index.html","b2d2d0c6f1818549d4fc9a6f8cd992d0"],["/archives/2015/index.html","07ae23c3b21ac786bc2c9dd5afb2974c"],["/archives/2015/page/2/index.html","5521b8f5c3422683340e218eae31358c"],["/archives/2015/page/3/index.html","c7aa3e25c896fcb9183289ddfbf7241b"],["/archives/2016/01/index.html","8b55b99b8e56e00bc5f6c28354afc1fe"],["/archives/2016/03/index.html","e7d6a45d3ff16b8f359812bc66f14ab7"],["/archives/2016/04/index.html","b9a0ab79b02f1ef8b2fdb8e46adf3907"],["/archives/2016/06/index.html","14795633a4f7961bcff81ba49d4e44fc"],["/archives/2016/09/index.html","16f108129e322021ab3b772e77b21fc0"],["/archives/2016/10/index.html","67ce62fef928aaf7a698e2291b7d1926"],["/archives/2016/12/index.html","0ba67f1508a0747ebe7619952bd959f3"],["/archives/2016/index.html","5d636cd7c4ee9f29111753eea1f89fdb"],["/archives/2016/page/2/index.html","3efb9ab62cc56c3bc26f7a98e21ef63d"],["/archives/2017/01/index.html","609ae5b934c0fbd4d1e55018f12588a2"],["/archives/2017/04/index.html","cfd35cf6fd9c75ca3c7aa75d74888995"],["/archives/2017/06/index.html","1f2131851361d10f5684e210e9feee0e"],["/archives/2017/08/index.html","2c316e27376dfd85246c39460a312bd1"],["/archives/2017/09/index.html","ef6a03507851ab2ffbde30b28bc76f8e"],["/archives/2017/10/index.html","77f4462e5dbb63dddbc8bec16df07d0e"],["/archives/2017/index.html","39ca87c5db8cd1e0f46bfea89063cc2c"],["/archives/2017/page/2/index.html","19f357265abf1d86a2446be035ed582a"],["/archives/2018/04/index.html","bda6db919786aea5ea5697a1a3e7260f"],["/archives/2018/index.html","71bd0cbbf02b1215c77f4c2b8820fda3"],["/archives/index.html","5be799ee22210a96f43d13d3c93f75d9"],["/archives/page/2/index.html","e2240dedbe6c49994a3091783fce8618"],["/archives/page/3/index.html","7d12877fbabaf2fa4cc5efb6e0d83ee2"],["/archives/page/4/index.html","e3ad655e092958117e3d7aea939b15ba"],["/archives/page/5/index.html","03b895ac7811b01e1e039d8d7d0ab454"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","2def85e598a1ac1d2932fa76a5c98d46"],["/categories/ACG/Music/self-copy/index.html","858dee4143dfeb333ad36069e270fe71"],["/categories/ACG/Travel/index.html","b99b37d45b90fb2bb04eee7017ad302d"],["/categories/ACG/figures/index.html","038abc9e0ba97888f1b1563d3e31a8bd"],["/categories/ACG/index.html","d200ae6cd4b272f2f9efeb507b8df61b"],["/categories/dev/Front-End-Dev/index.html","abbb1bafefa0cf9a11e8119b7330626c"],["/categories/dev/HTML-CSS/index.html","da9c53d609a0d473dd3ad4c5f3995957"],["/categories/dev/android/index.html","49970a642e06867c4a8d2ec7dac4b4ae"],["/categories/dev/cpp/index.html","f440c8933faf87266126e97d7a079eea"],["/categories/dev/git/index.html","9b75c587f6be8dc9f37f2cd9605c2e84"],["/categories/dev/index.html","fd221854097c15b2d04c50fb6fbc95a2"],["/categories/dev/java/index.html","d3fd0b07f785beb1d20b0cdcaa730820"],["/categories/dev/page/2/index.html","f54a30da44ad3d982c290778f18dc250"],["/categories/maintaince/blog-setup/index.html","0895f8821b0dfa73b3966a0fe98b63dc"],["/categories/maintaince/index.html","53381d2ed11460aa519c106eb81b30ef"],["/categories/maintaince/macbook/index.html","01b663ec59c2484f38fa8248219b5280"],["/categories/maintaince/router-config/index.html","ff5007b8c06b0b64a83f797cf904d41b"],["/categories/notes/index.html","eb002b23499face95ea6b2db45f6ec0e"],["/categories/tricks/android/index.html","a1981de0cdf81b112ee9449a3b4146c4"],["/categories/tricks/index.html","18cbcae17d0685f064f84111af7fa8cc"],["/categories/uncategorized/index.html","b1b99a1f2672205698bb87f014fd2923"],["/categories/works/Front-End-Dev/index.html","83093c2a3c23f491a02c789d1e669450"],["/categories/works/csharp-wpf/index.html","311f0b93f13db202c98b6b59af205dba"],["/categories/works/index.html","c522578ae6f46479b6d01eee6b1b67aa"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","c4ef599d74a160ef5fa4f4fae6101e19"],["/ja/2015/03/WNDR4300-setup-log/index.html","181d40c2ead0277410506e1863db933c"],["/ja/2015/03/android-hostname-change/index.html","66f41f6ebc7e790b6e66935407bb2dfe"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","e095e86e7209cb5161e9458a47504843"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","5c172e932b0c462848c5850820978a0f"],["/ja/2015/04/cpp-study-log/index.html","16f56f49dbb1eb9f092370000e4758a4"],["/ja/2015/04/github-pages-ssl/index.html","ab7732924991e912ffb966e326464a02"],["/ja/2015/04/hello-world/index.html","b0a2234dc04b565842b7cb2aa7b31f8e"],["/ja/2015/04/hexo-setup-log/index.html","aeb8ed5e0584c7b196f0709b7c2d4e60"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","c6fabbbdbf31282f0c96f38ad4aef701"],["/ja/2015/05/cpp-inherit/index.html","40c6dfd2d0ce8c0139a89cfa6f59f1d8"],["/ja/2015/05/cpp-polymorphism/index.html","724f530d463d73d08a6cf50f714ffd96"],["/ja/2015/09/android-root-ota/index.html","e979cf08540a88c47c7b918481b8f217"],["/ja/2015/09/java-learningNotes-1/index.html","34ddd3afcac3077e4d76a92b62df2fff"],["/ja/2015/09/newblog-newlife-2015/index.html","e04a3f3ec9b1c2aac2227cba83a0ce31"],["/ja/2015/09/router-rebuild-2015/index.html","33478e419e8cd50e4de1309a3fcf9a43"],["/ja/2015/12/2015-12-21/index.html","c6521f829aec3ca3bce26abdb6e6824f"],["/ja/2015/12/PixInTouch/index.html","490e3a0d64e5b5aba066e1fcbbe4fdd5"],["/ja/2015/12/git-study-1/index.html","7b16ce46a439402f963952fd9136a34b"],["/ja/2015/12/hexo-backup-and-migrate/index.html","efc5cae288fac072bdb4a9fdd1eeb3c6"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","70c0c61e1006db26279df19297a518a2"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","901f6e37064392b0f268802ff1e9e73a"],["/ja/2015/12/router-reconfig-2015/index.html","68e6181f28dc525d7c14e9693c40e354"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","c86e4f430d6413e2b2ca02b5050f158b"],["/ja/2016/01/2016-stepping-further/index.html","ce39189199ebe18d6991726121a40d9e"],["/ja/2016/01/Android-Study-1-22/index.html","ce8ff18fc3916a3d94687d0ff9a2697e"],["/ja/2016/03/2016-03-20/index.html","3d7e837016634a7d572366b283b17300"],["/ja/2016/03/GSC-535/index.html","a7666324b7240d35b274def34c5a254c"],["/ja/2016/03/gulpjs-1/index.html","e5998fc6de4e3833effa4fd8987bc6f9"],["/ja/2016/03/hexo-theme-paper-white/index.html","76dbca67092ee792aae1c84e4b0198b5"],["/ja/2016/04/2016-04-19/index.html","544e496841a84ba096d1a1833a2c63c6"],["/ja/2016/06/2016-06-16/index.html","82a1bce5daedd8a18b5b863cc66740f9"],["/ja/2016/09/2016-09-18/index.html","46a15218a8891c51c6d20aeeabc924b0"],["/ja/2016/10/2016-10-27/index.html","30b772b70687423fa541909cd898e34f"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","ad7eba5274e86b0f049cc38bfedd83c0"],["/ja/2016/12/improve-duoshuo/index.html","39e71b09b6a7401baba3b6fabf77b3bc"],["/ja/2016/12/use-travis-ci-your-blog/index.html","2ae64824f4dd7cd8a007d482e100c4db"],["/ja/2017/01/2017-iyahoi/index.html","34bc5a363f2c97f34c46ce0edb82e8e2"],["/ja/2017/01/webpack-amd/index.html","8e4f207f781290f54f68f068627d816e"],["/ja/2017/04/kotobukiya-syaoran/index.html","fc91545f3f7acfec6b808b80471a8f46"],["/ja/2017/04/macbook-and-surface/index.html","9d61aee872ea3caf7a3e1963d212c253"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","16c5913a605b1f5ca769441b9efb1041"],["/ja/2017/06/noragami-seichijunrei/index.html","01f9b23a6a8ceb49da3fc5949fde12c8"],["/ja/2017/08/cross-compile-55-libev/index.html","a1b94b4bd33b972511d136ee70c8ca69"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","be7ab2e7e52d6903545d1697162a59e1"],["/ja/2017/08/hello-jp-world/index.html","fe5f5f78fbffd229e5fdf596734a35ec"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","3a0ba048f493cef66f6104ec7660100d"],["/ja/2017/09/record-user-login-status-methods/index.html","d847677bbf64e6d0ab224ecf18b789bf"],["/ja/2017/10/vue-typescript-early/index.html","9cd9f278ad2c2b0de62b91e85fdea501"],["/ja/2018/04/2017-end/index.html","e466aab3e06577ba72c99fc782ca427a"],["/ja/2018/04/twitter-account-activity-api/index.html","86e3b909a90d8cc9aa799e5b8e8e681c"],["/ja/404.html","949c1a6045cefda9ec32509355a1d866"],["/ja/about/index.html","1993e20a1bd16f9d6fcc06589aa3c453"],["/ja/archives/2017/08/index.html","6c2c55d63d4a8b343c71868776fb9407"],["/ja/archives/2017/09/index.html","a7fefd047d0db8f5baeae9dd37c80018"],["/ja/archives/2017/10/index.html","2683b3a5137115ddae72d0c24a5f125a"],["/ja/archives/2017/index.html","e29cf7891bdd4d69a5739e60f79f332c"],["/ja/archives/index.html","771286bb8c0ffa1dab1b072f3badbf66"],["/ja/categories/dev/Front-End-Dev/index.html","50da75e0a319f979f15e76e8becde54e"],["/ja/categories/dev/index.html","a5cbd41e2fc51fad7b602a165259c56d"],["/ja/categories/uncategorized/index.html","285f2db57995c718ab52b7e7752ff227"],["/ja/index.html","0f1bf078e9ff48fdb539c1065a2d97ab"],["/ja/nihongo-test-page/index.html","2da1effa2f3a100d25fb0d8e712e0c36"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","44242a73c5609c097c9cc86f1d9105dd"],["/page/2/index.html","738c324d209012e910f374b02af28776"],["/page/3/index.html","68404835ec315837267ab99108074d30"],["/page/4/index.html","861b16a20f7b9900300ea00efd73155d"],["/page/5/index.html","44784ed1b8ac55bb1b2787130f3c7331"],["/page/6/index.html","64adb0761c420709e8093dabd621c02d"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","f7ab9b0308135940cb5697a05d0e2cae"],["/zh-cn/archives/2015/03/index.html","77547f2fb53165812711a915fe0ba1f3"],["/zh-cn/archives/2015/04/index.html","23beb76ad7ace6275b954fef528c4d15"],["/zh-cn/archives/2015/05/index.html","40a6620513b38732c4b7979a47a51f8e"],["/zh-cn/archives/2015/09/index.html","d65c63569d23ef40fd5fae38acdf89b0"],["/zh-cn/archives/2015/12/index.html","6ad8c350d899437423ad4788e06b684e"],["/zh-cn/archives/2015/index.html","86c65f964819a2d22c45288a33b767dc"],["/zh-cn/archives/2015/page/2/index.html","8c6c744403b32135aff1a97db0f1591e"],["/zh-cn/archives/2015/page/3/index.html","b34c0bbdd98979e913c86bd4ce98b231"],["/zh-cn/archives/2016/01/index.html","ef3014838c9053bc1b667eb4d50dfc70"],["/zh-cn/archives/2016/03/index.html","acbd940d5d51a260865769afb00d71ad"],["/zh-cn/archives/2016/04/index.html","ad1d7b3fa2b0cd3166705bacdced34c4"],["/zh-cn/archives/2016/06/index.html","482903d32f279e9968d282faccb35c6d"],["/zh-cn/archives/2016/09/index.html","fec400d7f0bb19ee090e62bf25038859"],["/zh-cn/archives/2016/10/index.html","2f070779e403cbfef1e750de8f1feb3d"],["/zh-cn/archives/2016/12/index.html","ceaaf16fca4dff66c16400c7ea41f520"],["/zh-cn/archives/2016/index.html","6201a91ab329beffae0a442e76b26173"],["/zh-cn/archives/2016/page/2/index.html","ca4c4445b14d106fd1fe03ea146306cd"],["/zh-cn/archives/2017/01/index.html","19166695b1b770114fb72fa16d2710e3"],["/zh-cn/archives/2017/04/index.html","98066861c359454611b31b709659a624"],["/zh-cn/archives/2017/06/index.html","a4dc7415b7a61cc59ed703dc67de87f3"],["/zh-cn/archives/2017/08/index.html","bb817e1e094631780e2090fdf5daa039"],["/zh-cn/archives/2017/09/index.html","7905d03e84dd3b296eeb275b15ad7cc3"],["/zh-cn/archives/2017/10/index.html","3c35fd3f7729d74c0685d1de363571a3"],["/zh-cn/archives/2017/index.html","2c8a33c60c2b80bd7a6491180555f1f1"],["/zh-cn/archives/2017/page/2/index.html","dfdee181c33c5c99786d34ad358eb37a"],["/zh-cn/archives/2018/04/index.html","3b58bc6e79d209e5b751f478a9180173"],["/zh-cn/archives/2018/index.html","84d02f4ea829659591be09735bd5c050"],["/zh-cn/archives/index.html","5d831772ae062ce20369332ad00257f9"],["/zh-cn/archives/page/2/index.html","19785fe87d9153b8f4ca194a97bac91e"],["/zh-cn/archives/page/3/index.html","a63004397c8acc10cd38857f909b7004"],["/zh-cn/archives/page/4/index.html","186870274b08fc2c65d976686ea9cdb8"],["/zh-cn/archives/page/5/index.html","86589f3eb1e523f60cf6f40c0fed1ae6"],["/zh-cn/categories/ACG/Music/index.html","17ab25bf5d6331bbc782536a82373b77"],["/zh-cn/categories/ACG/Music/self-copy/index.html","ead2565baa4f9c79c499912d0c9e148d"],["/zh-cn/categories/ACG/Travel/index.html","903d8a6e15714b78f9c9397771d19c95"],["/zh-cn/categories/ACG/figures/index.html","0e88595c51f6bc7c51da42df70b1b6ca"],["/zh-cn/categories/ACG/index.html","d03c6ddf66f402eda32f10dde317615a"],["/zh-cn/categories/dev/Front-End-Dev/index.html","e7c87d986c4190044f442c22da7b9f80"],["/zh-cn/categories/dev/HTML-CSS/index.html","73376d2188538d241c37b4cd6151b34a"],["/zh-cn/categories/dev/android/index.html","5cf53fcc2e42fbecdfc542f3304ed987"],["/zh-cn/categories/dev/cpp/index.html","9e4a8945def2e2f39fdcabb925fe52ed"],["/zh-cn/categories/dev/git/index.html","1233f81a420fe6211edfa1b85dd9b4e0"],["/zh-cn/categories/dev/index.html","4024552216cb1146da74fab537a651dc"],["/zh-cn/categories/dev/java/index.html","8ccaedc09b2e1ab917fd97831404f662"],["/zh-cn/categories/dev/page/2/index.html","cc261af3af00dc586eef27496cf5a542"],["/zh-cn/categories/maintaince/blog-setup/index.html","fed0621d21f24edbb1eeb6d81b1d9841"],["/zh-cn/categories/maintaince/index.html","76703c6075dbb56edfc009d6dd48d31c"],["/zh-cn/categories/maintaince/macbook/index.html","28365b0fd6d385d86612dc61057cae47"],["/zh-cn/categories/maintaince/router-config/index.html","66c5faf78e1e85204528457a3c97b95f"],["/zh-cn/categories/notes/index.html","9b68b492f728ebc7620a59882ab159a7"],["/zh-cn/categories/tricks/android/index.html","d7aecc5f5cefc008af1908783361ad14"],["/zh-cn/categories/tricks/index.html","36f325a08ec5b3b653b0fce628b4748d"],["/zh-cn/categories/uncategorized/index.html","667a84f521f1d6838265937c269fa5f3"],["/zh-cn/categories/works/Front-End-Dev/index.html","20fe38a5f5a4dea73b36b1cde62772d6"],["/zh-cn/categories/works/csharp-wpf/index.html","e27964c8a1f29e1fc7fad8308f62e6d3"],["/zh-cn/categories/works/index.html","daab24411f47a8d121b4f8c4a683d2b6"],["/zh-cn/index.html","6f59a66a9f5abaf9f3911b58057bf46d"],["/zh-cn/page/2/index.html","d6a67a2548da3aec8022c0c260820e34"],["/zh-cn/page/3/index.html","7ff0ccfcb475b3f6d584a55ef3c98a1c"],["/zh-cn/page/4/index.html","1faa91f9b9b257a955525ed967e763e2"],["/zh-cn/page/5/index.html","823fc8a8715b8b2c6df395be0e99d202"]];
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
