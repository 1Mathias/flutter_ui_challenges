'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "19aee96bfc4d766c0a48d7d9da3c11ef",
"index.html": "998d0d82bf512d91909e823d8cc6e395",
"/": "998d0d82bf512d91909e823d8cc6e395",
"manifest.json": "0a3ff767e53856d2cc5d4e30fb675a4b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "94881b5dee062c8c78e29bbbf3f6cfad",
"assets/lib/src/nic_asia_clone/nic_asia_app.dart": "157a0bf4a562a5edcd520ca906701ed5",
"assets/lib/src/khalti_clone/main.dart": "64d423c25d75417db2a25462db6c0590",
"assets/lib/src/furniture_app/furniture_app.dart": "609b1f5b24a442a6b17e511f1296fcbf",
"assets/lib/src/pages/animations/anim4.dart": "c2bc595cea9d2d232b1f35862dc742be",
"assets/lib/src/pages/animations/anim5.dart": "c57d209fbe30729712bdb38c195bb58f",
"assets/lib/src/pages/animations/anim2.dart": "f1ecb5a2bfa5362349c0a83aeeffe00c",
"assets/lib/src/pages/animations/anim3.dart": "3bca822a790fbdfce85c32324161dd04",
"assets/lib/src/pages/animations/animation1/details.dart": "18bb89611f9065b24943456a447a6e80",
"assets/lib/src/pages/animations/animation1/animation1.dart": "40e95edd7ed750587af78cb089358db1",
"assets/lib/src/pages/quotes/quotes2.dart": "8c9be36b16c15c1202d719490d74754f",
"assets/lib/src/pages/quotes/quotes1.dart": "923f33ca0b72c1b883bf9254c6cbc418",
"assets/lib/src/pages/food/food_checkout.dart": "d981bef0227382b5eb9ced7b52e0c68f",
"assets/lib/src/pages/food/recipe_list.dart": "3c0be74b8044c795aff914f70dd6d189",
"assets/lib/src/pages/food/cake.dart": "14eb8ccc237275e4a6f128d0a1b61b81",
"assets/lib/src/pages/food/avocado.dart": "18a7ac01843c00bbeb8506d39f5bcf60",
"assets/lib/src/pages/food/recipe_details.dart": "f32ce27aa5ce71d2f04d77385e761a38",
"assets/lib/src/pages/food/recipe_single.dart": "72b3d733edc2712650fea02b291b0c9f",
"assets/lib/src/pages/food/fdhome.dart": "a6ece5724c1b2688d6d7a4e4e82565c5",
"assets/lib/src/pages/invitation/inlanding.dart": "be9d9a4ae3ded85db2884a9ef7104126",
"assets/lib/src/pages/invitation/inauth.dart": "7f88e94363d49d90051236600775e76b",
"assets/lib/src/pages/invitation/invitation1.dart": "917c79c2ae183aaaade37b7ca0bd8ca8",
"assets/lib/src/pages/dialogs/dialogs.dart": "9223fea89d576fd2d1f02d6967b07e52",
"assets/lib/src/pages/quiz_app/quiz_options.dart": "b63a481841f3c36b4d25b8aabfb94a75",
"assets/lib/src/pages/quiz_app/quiz_page.dart": "48038009491627fbe8a921b6948c96ca",
"assets/lib/src/pages/quiz_app/question.dart": "d02e60aae88c74518525712d8c5b866a",
"assets/lib/src/pages/quiz_app/category.dart": "2ee2f4909b9dfad8271f4800ac803c75",
"assets/lib/src/pages/quiz_app/check_answers.dart": "c5444343b5d48d63234954c4bc13486b",
"assets/lib/src/pages/quiz_app/quiz_finished.dart": "749ea8cfe5bd9f6205c28945087176b4",
"assets/lib/src/pages/quiz_app/demo_values.dart": "94f1bb4e0e7243fbdd22d895743775bd",
"assets/lib/src/pages/quiz_app/home.dart": "6bcb0f981fb7feb1dc0c9d173c1c32d2",
"assets/lib/src/pages/settings/profilesettings.dart": "0a55f226cf50811a955844814ed00d42",
"assets/lib/src/pages/settings/settings3.dart": "8d48f16f67b00b32f5042ff1eda4533b",
"assets/lib/src/pages/settings/settings1.dart": "89fe8a768427ca7e4b136508cd78162d",
"assets/lib/src/pages/settings/settings4.dart": "8fe47fedd9ffe82e9c1dfe0e5f964cb5",
"assets/lib/src/pages/settings/settings2.dart": "db080d21d16c67d38f16404bcc6aa36f",
"assets/lib/src/pages/blog/sports_news1.dart": "7be6856873ea483757d627bd35bc17da",
"assets/lib/src/pages/blog/article1.dart": "3ad9acc80ea3bb67688880e803241bc8",
"assets/lib/src/pages/blog/article2.dart": "689102fa003bc1f747784831e76f2115",
"assets/lib/src/pages/blog/news1.dart": "87fa7fe831118c25cf913c2fbd3066d4",
"assets/lib/src/pages/blog/bhome1.dart": "98e7144199a7e71ac130eafef2e06f89",
"assets/lib/src/pages/misc/navybar.dart": "a7dabfa358f895c77490742c352897a0",
"assets/lib/src/pages/misc/sliders.dart": "2e5c8c6b25d8e8eb866d34244660e188",
"assets/lib/src/pages/misc/bottomsheet.dart": "c19f0a57a32b40fc68cf95eeb462454c",
"assets/lib/src/pages/misc/chatui.dart": "44faf8b80f6ec8374de99c7aca007335",
"assets/lib/src/pages/misc/youtube_homepage.dart": "3351ea6425137d5ec7a0da11b17b423e",
"assets/lib/src/pages/misc/gallery1.dart": "fd8a835294dc3b67f04ada664169e015",
"assets/lib/src/pages/misc/whatsapp.dart": "464f856b1690f33259e70350d4b6a109",
"assets/lib/src/pages/misc/image_popup.dart": "bc9814224b04077b4165b416cfb83a60",
"assets/lib/src/pages/misc/discovery_page.dart": "04d0e58486fe038ce326ae21a0121d09",
"assets/lib/src/pages/misc/musicplayer.dart": "22ea368acc598939b5a4604087874b5f",
"assets/lib/src/pages/misc/crop.dart": "f9b0cb98f723c8843cc26d427969e9f0",
"assets/lib/src/pages/misc/musicplayer2.dart": "6a8aed72677809ec6114a79ea416f9fa",
"assets/lib/src/pages/misc/form_elements.dart": "78d9ac9017db530e477eb56ec5f0c3ef",
"assets/lib/src/pages/misc/springy_slider_page.dart": "31edc95d505094c610c3c22ea5f7497d",
"assets/lib/src/pages/misc/sliver_appbar.dart": "4a178a1fe1c613f981fd4180326fa926",
"assets/lib/src/pages/misc/chat2.dart": "ef49175775b07d1a573556834195056a",
"assets/lib/src/pages/misc/otp.dart": "9a6fcf2eb36549b580d858269939d077",
"assets/lib/src/pages/misc/loaders.dart": "21efc81bc6ec2d3294f3c6047eaeb984",
"assets/lib/src/pages/dashboard/dash2.dart": "567ee93f1a848ddd04c04e0f8c619238",
"assets/lib/src/pages/dashboard/dash3.dart": "31a462f26638c1826d29e44c7b5c3676",
"assets/lib/src/pages/dashboard/dash1.dart": "e5a65330c525d95fa854ab8c756c7e71",
"assets/lib/src/pages/lists/grid_view.dart": "8a359703223a89127c1f4bfeccd5bfad",
"assets/lib/src/pages/lists/list2.dart": "72b61f2b13c010e85defaeccd3d530bf",
"assets/lib/src/pages/lists/list1.dart": "f6e52d5420b73757d0c39cdb2d8ac584",
"assets/lib/src/pages/profile/profile2.dart": "e7ed48a49bc9cb5c0576e67dcda04c5c",
"assets/lib/src/pages/profile/profile8.dart": "c1c3f8258e79d4beda51cf379b4c9197",
"assets/lib/src/pages/profile/profile1.dart": "cd48581816fd61987dd39f1845881232",
"assets/lib/src/pages/profile/profile9.dart": "8b20cde77fb1f3cbff59022d3fa33cb6",
"assets/lib/src/pages/profile/profile7.dart": "fcc4cfcf7b63386114f11a90c945df7d",
"assets/lib/src/pages/profile/profile6.dart": "7d53f80b02e0330d569d4b4eeb947ffa",
"assets/lib/src/pages/profile/profile11.dart": "2b74544c25533c60e9e0db3cc4d1847b",
"assets/lib/src/pages/profile/profile3.dart": "721610d9a997ab2498f542e98910ab92",
"assets/lib/src/pages/profile/profile5.dart": "afe35e8dc2a1b3aa4173762caadd03e0",
"assets/lib/src/pages/profile/profile4.dart": "b9f6cc666c3d178651a4dcf3f31defd2",
"assets/lib/src/pages/profile/profile10.dart": "6b133f4f48483520ced05b67ca7a3a83",
"assets/lib/src/pages/login/login14.dart": "0f82ef0221fe5846f901677db2a292fc",
"assets/lib/src/pages/login/login10.dart": "d5eb5a4b238eb06da19135de1da12e4f",
"assets/lib/src/pages/login/login8.dart": "373657c3115b4f2bbaa1bc20964950bf",
"assets/lib/src/pages/login/auth2.dart": "33e629f8404ef49f544cf132fee81923",
"assets/lib/src/pages/login/login12.dart": "d57f015d774c1705443dec49a15e0465",
"assets/lib/src/pages/login/login3.dart": "7c1a199860c2c5d15ffe28eb6869ca20",
"assets/lib/src/pages/login/login7.dart": "0b5e842f1710c3ff56888793ccf54783",
"assets/lib/src/pages/login/login6.dart": "5253f82cac7968b2c0f2b0b6f4111540",
"assets/lib/src/pages/login/login11.dart": "1b7aaacd99c6d17eaa2842d059f00f90",
"assets/lib/src/pages/login/signup2.dart": "386c883de4e6e554de6fe7b0096d362b",
"assets/lib/src/pages/login/signup1.dart": "cfa8447333b3b17603e1be3fb97f6938",
"assets/lib/src/pages/login/auth3.dart": "014fc89ab60994b3a074ce16c90eeb0d",
"assets/lib/src/pages/login/login2.dart": "056593784c3ca7748739efc20421b5ad",
"assets/lib/src/pages/login/login13.dart": "6378b9c3a1d5bb5021f705f1d265fd51",
"assets/lib/src/pages/login/login5.dart": "d890d97cd550eb07b08b904c203acb37",
"assets/lib/src/pages/login/login9.dart": "a95232fb9df3528059e7861d6d363473",
"assets/lib/src/pages/login/login4.dart": "44a49e80166954063d5d6b7d2e55fd43",
"assets/lib/src/pages/login/auth1.dart": "4fad605193f698bf08187a22419ff813",
"assets/lib/src/pages/login/login1.dart": "7d3fca413adc2580903e7db1601b1774",
"assets/lib/src/pages/login/signup3.dart": "8aa4ab3f38616ec24bb4ddc1c82d551e",
"assets/lib/src/pages/navigation/drawer1.dart": "ce8c8c27bd7b04856c7d60d207a82598",
"assets/lib/src/pages/navigation/automultiscreen.dart": "bab7bec57025bde9dbb9eaf0091e771a",
"assets/lib/src/pages/navigation/menu1.dart": "e208dcfeeec68183f3fbdaeae23da010",
"assets/lib/src/pages/navigation/drawer2.dart": "bbaea9bdec7b422f72be60dcedafd4c5",
"assets/lib/src/pages/navigation/hiddenmenu.dart": "3bcf7292500baa43baa600d4e2025e70",
"assets/lib/src/pages/bike/home_page.dart": "b066c6defac3a337073a8c21d3999e3f",
"assets/lib/src/pages/bike/bike_details.dart": "25fb53fad55291a27043c3e2b6f9cf88",
"assets/lib/src/pages/bike/bikeshop_ui.dart": "aa3e68f84fad8e52a3fdaffefb88b26d",
"assets/lib/src/pages/hotel/details.dart": "9fbb99fd2af7b3dac3fa81d6ca3631a8",
"assets/lib/src/pages/hotel/hotelbooking.dart": "20b2a8625c82b179cadcc517b2d156a5",
"assets/lib/src/pages/hotel/hhome.dart": "63fe16de4858646c305e9e13850764eb",
"assets/lib/src/pages/ecommerce/ecommerce2.dart": "81953ec63f6f5d008a8c3887e97bb1a8",
"assets/lib/src/pages/ecommerce/ecommerce_detail2.dart": "550d6094c4f73a02533d3c9a01ffd32c",
"assets/lib/src/pages/ecommerce/cart2.dart": "d023fb844cb740ebae9397cfc7a35e79",
"assets/lib/src/pages/ecommerce/ecommerce5.dart": "430e2ebaa83418a958ee0dd4f537babd",
"assets/lib/src/pages/ecommerce/ecommerce4.dart": "53b64bc0ca14e4e8f4896b11ca405f62",
"assets/lib/src/pages/ecommerce/confirm_order1.dart": "67c810750de034071402b3ec919334b3",
"assets/lib/src/pages/ecommerce/cart1.dart": "5547185a9e61a4299fd5f165fb4e13cc",
"assets/lib/src/pages/ecommerce/ecommerce1.dart": "1d525fa2f19e5258661e2a419646d6f0",
"assets/lib/src/pages/ecommerce/cart3.dart": "a6d29be20e70d6008862820582b3368a",
"assets/lib/src/pages/ecommerce/ecommerce_detail3.dart": "a38993530078e6a82064c24c9784bc5a",
"assets/lib/src/pages/ecommerce/ecommerce_detail1.dart": "8586e21611541a19b351b507b6b8d975",
"assets/lib/src/pages/ecommerce/checkout1.dart": "866cc195a61cdabcdc594bb80e9678a7",
"assets/lib/src/pages/onboarding/landing1.dart": "d28efb97c47fdf65a9add788177c9bed",
"assets/lib/src/pages/onboarding/intro4.dart": "c1ba486b2d13e10bfd04ca075164a462",
"assets/lib/src/pages/onboarding/intro2.dart": "edfbd313b4ca1a321ecd1f8ba581f334",
"assets/lib/src/pages/onboarding/intro6.dart": "bd2e48681dcd8ecbabb4f983c11e0653",
"assets/lib/src/pages/onboarding/intro3.dart": "a8f4e1c182579c34669f1c2f3a2a59bd",
"assets/lib/src/pages/onboarding/intro5.dart": "348b72c19dce59dc9b828b2e2a1c6012",
"assets/lib/src/pages/todo/todo_home2.dart": "a51bc38b16d80d0b24bad6d2077f1e95",
"assets/lib/src/pages/todo/todo_home3.dart": "9019d2c87139f905279eb7873b7c81d7",
"assets/lib/src/pages/todo/todo2.dart": "6d7c74f24415dc658ed1dcea3b2d2210",
"assets/lib/src/pages/todo/todo_home1.dart": "260522387a504f33f32509c742ec33a0",
"assets/lib/src/pages/travel/tdestination.dart": "2034d467da8e000f63867c03ac0119e3",
"assets/lib/src/pages/travel/travel_nepal.dart": "1bb8ba8fbbf1dc4a3daf62de0a7b2dd3",
"assets/lib/src/pages/travel/travel_home.dart": "6944cf35c11dcc413fe665b577e27af6",
"assets/lib/src/pages/travel/thome.dart": "19a1e3cc39652907d13250d99af231db",
"assets/lib/src/pages/grocery/gdetails.dart": "e70867666a7b6f24dfef85ed14c2b2e7",
"assets/lib/src/pages/grocery/ghome.dart": "f01d3d53af1156b33d72d861334a9807",
"assets/FontManifest.json": "a7549cf183a470287a8b925843a5906d",
"assets/NOTICES": "9e63151c0d25bb36581524504ea05c56",
"assets/AssetManifest.json": "7897238927ee46d1cbbec4d48e0c1e3f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/icon/app-store-logo.jpg": "15657cc002c20325ee66acacd3619c38",
"assets/assets/icon/icon.png": "3c8ccc520c55ee2300ec0d477ec2922d",
"assets/assets/icon/feature_store.jpg": "dbd61a243681374e435a922bedc5c4b4",
"assets/assets/placeholder.jpg": "2ffedeeb13be4dc6e4fc5d6cb30a307e",
"assets/assets/smwallet/swipe-right.png": "9ce867bd21ea4694627a380f6d890351",
"assets/assets/smwallet/wallet1.png": "80de561effd0aa7fbe8b586d966015d6",
"assets/assets/smwallet/wallet3.png": "fdc24f56361b8c884691f03701327ce4",
"assets/assets/smwallet/wallet2.png": "8e20a3f80ebedeaea74b2dd8fda070e0",
"assets/assets/smwallet/logo.png": "e832e0abc9cbf4a991f70c73b46ac9bf",
"assets/assets/flare/bus.flr": "06c14bd0cb5adc270d81dc235b14720e",
"assets/assets/nicasiaassets/ic_scan2pay_64_4.png": "ce670278424d7781c01aa8e8c1e1fb4d",
"assets/assets/nicasiaassets/ic_topup.png": "6636a56a7d0d2e1197e554ed50380c7d",
"assets/assets/nicasiaassets/contact_list.png": "2ed773c46e42a7923e749f207c85c5b5",
"assets/assets/nicasiaassets/ic_username.png": "2642c170b53b1535a02fe04698592bfd",
"assets/assets/nicasiaassets/ic_calendar.png": "c4638ed6ec405897fba3d7a4e493ab58",
"assets/assets/nicasiaassets/ic_accout_list_24.png": "d52d5a34f03ff3ffa366502a1876a980",
"assets/assets/nicasiaassets/profile.jpg": "df1bb8e030851d7e754873223263f394",
"assets/assets/nicasiaassets/air.png": "ac171fc7b717830915ae1193c31ba302",
"assets/assets/nicasiaassets/crop__ic_done.png": "f58bf6d1c4e505b75bae312d0368f037",
"assets/assets/nicasiaassets/nicLogo.png": "ac01b1a0344f7e0290a635b44de0d14b",
"assets/assets/nicasiaassets/ic_view_statement.png": "4960adf548ecc5353727e5e3e7093b18",
"assets/assets/nicasiaassets/sas.png": "4f869dc823327ba730c3d4450cfb3c22",
"assets/assets/nicasiaassets/crop__ic_cancel.png": "527b955533f6f560c28e5bea9d520aec",
"assets/assets/nicasiaassets/logo.png": "0cb100c9a48943a4c180c903e3e467f5",
"assets/assets/nicasiaassets/general_inquiry.png": "44733960a1ac008028782b83d13d44f1",
"assets/assets/nicasiaassets/brand_f1soft.png": "8afca482643e3d64975e819cf1bc2487",
"assets/assets/nicasiaassets/fill_1_copy.png": "efd8a2edffa5b1e902a948d3c9ccdaee",
"assets/assets/nicasiaassets/tv.png": "ff37133e9649bd444c26f6f10550f63e",
"assets/assets/nicasiaassets/icon_more.png": "41b415c1ea302d6b64f530ab13362bff",
"assets/assets/nicasiaassets/router.png": "69dc88471434849ee43b34840f34424b",
"assets/assets/nicasiaassets/ic_fingerprint.png": "6fbedb82f216a826943cb555fa70429f",
"assets/assets/nicasiaassets/el.png": "fed8f11a3113a518c2727809b9275641",
"assets/assets/nicasiaassets/brand_alternate.png": "8f56f8d7f8a08f5b8c432a82dedbb7df",
"assets/assets/nicasiaassets/umb.png": "f5070041f5162e64fec885301145b99b",
"assets/assets/nicasiaassets/ic_account.png": "62c46f6daf94b86f6b32b84083126cfb",
"assets/assets/nicasiaassets/settings.png": "298e7d6952441c6c93f5a3cf630556cd",
"assets/assets/nicasiaassets/powered_by_google_light.png": "c33b6986f9630c954038133ba0b5fd8e",
"assets/assets/nicasiaassets/ic_action_payment.png": "245fa6f5c6110f8059c880897515220c",
"assets/assets/nicasiaassets/esewa.jpg": "0d1801371f4fc5f39b09041ad6bbece5",
"assets/assets/nicasiaassets/ic_payments_64_4.png": "bd0c06ec2055d912a229d6043fb2eea8",
"assets/assets/nicasiaassets/ic_transfer_32_4.png": "dabca4fa9bf9339145e1ba0e09ea061e",
"assets/assets/nicasiaassets/scan_2_pay.png": "edbd302049f27bb78ae7ce66c6a9e609",
"assets/assets/nicasiaassets/ic_contact_list_24.png": "dc4f0a77b64ca0a115bec53354ec6798",
"assets/assets/nicasiaassets/ic_sch_payment_64_4.png": "2535754d0627f2153bfc0944a66cf969",
"assets/assets/nicasiaassets/credit_cards.png": "604ba10071ac60e529be33a7d1f70dd8",
"assets/assets/nicasiaassets/mountain.png": "59644be997f78521b96638792217511a",
"assets/assets/nicasiaassets/ic_launcher_round.png": "2a459f034fc8c7862f925cddfd3ecc75",
"assets/assets/nicasiaassets/ic_fund_transfer.png": "e4b0ac78ff2bae15e7b5e0a952bf19ec",
"assets/assets/nicasiaassets/ic_sms_32.png": "3ec60d3a5dc09a1d564448e1dfc5caf5",
"assets/assets/fonts/MyFlutterApp.ttf": "22510a62b0a16eb5edd08efb55ee70a6",
"assets/assets/fonts/icomoon.ttf": "d300230d95aef9b7e6259de1443e0e85",
"assets/assets/hotel/room3.jpg": "582b5c922588fcfcb655ef2c5e082c75",
"assets/assets/hotel/room2.jpg": "6f3ed637989dc9a91852ca9e859e9595",
"assets/assets/hotel/room1.jpg": "813ee64a2c15f48baf28e109ded1a66f",
"assets/assets/hotel/room4.jpg": "894aa1aade9429e89d5da03e4b542937",
"assets/assets/discoveryimages/cuisine.png": "1e3af986bf9d2a4d7bfacd9176ed31f9",
"assets/assets/discoveryimages/cafe.png": "74016c8a1dee92890335470c5bc60898",
"assets/assets/discoveryimages/beer.png": "9fb728e336083acf92715d2816c77419",
"assets/assets/discoveryimages/tracking.png": "4c86987e243b3c506cdf6ac462fdf748",
"assets/assets/discoveryimages/fast-food.png": "bf3ba231544165bb698b7f89f8d70a3a",
"assets/assets/discoveryimages/dining.png": "4d753be8f9114fcb378ab26bcd180676",
"assets/assets/fooditem/plate2.jpg": "3884904a8634d93a4faa217a17b36cc0",
"assets/assets/fooditem/plate4.jpg": "50f445794b887096c16ecac85b6e5b80",
"assets/assets/fooditem/plate3.jpg": "323c71373db265b78e84779edf2ee1e8",
"assets/assets/fooditem/plate1.jpg": "5492ad351bb41016834744b9f91861f0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
