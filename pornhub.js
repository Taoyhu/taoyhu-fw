const VIDEO_CATEGORIES = [{title:"全部",value:""},{title:"已认证素人",value:"138"},{title:"已认证模特",value:"139"},{title:"亚洲人",value:"1"},{title:"已认证情侣",value:"482"},{title:"60帧",value:"105"},{title:"大学",value:"79"},{title:"18-25岁",value:"teen"},{title:"韩国人",value:"103"},{title:"日本人",value:"111"},{title:"校园",value:"88"},{title:"欧洲人",value:"55"},{title:"英国人",value:"96"},{title:"法国人",value:"94"},{title:"浪漫",value:"522"},{title:"女性自慰",value:"492"},{title:"女性高潮",value:"502"},{title:"3P",value:"65"},{title:"Cosplay",value:"241"},{title:"Gaming",value:"881"},{title:"Podcast",value:"891"},{title:"上班时观赏",value:"221"},{title:"乱交群欢",value:"2"},{title:"交互式",value:"108"},{title:"佩戴式阳具",value:"542"},{title:"俄国人",value:"99"},{title:"公众野战",value:"24"},{title:"内射中出",value:"15"},{title:"内嵌字幕",value:"732"},{title:"劲爆重口味",value:"21"},{title:"卡通",value:"86"},{title:"印度人",value:"101"},{title:"双性恋男",value:"76"},{title:"双龙入洞",value:"72"},{title:"口交",value:"13"},{title:"古典派",value:"43"},{title:"合集",value:"57"},{title:"名人",value:"12"},{title:"大号美女",value:"6"},{title:"女同",value:"27"},{title:"娇妻偷吃",value:"242"},{title:"射精",value:"16"},{title:"巨乳",value:"8"},{title:"巨屌",value:"7"},{title:"巴西人",value:"102"},{title:"德国人",value:"95"},{title:"性玩具",value:"23"},{title:"恋物癖",value:"18"},{title:"恋足",value:"93"},{title:"意大利人",value:"97"},{title:"手交",value:"20"},{title:"手淫",value:"22"},{title:"抽烟",value:"91"},{title:"拉丁裔美女",value:"26"},{title:"拳交",value:"19"},{title:"指交",value:"592"},{title:"按摩",value:"78"},{title:"捆绑",value:"10"},{title:"捷克人",value:"100"},{title:"搞笑",value:"32"},{title:"撒尿",value:"211"},{title:"深发女",value:"11"},{title:"滑稽模仿",value:"201"},{title:"潮吹",value:"69"},{title:"火辣保姆",value:"89"},{title:"熟女",value:"28"},{title:"爆菊",value:"35"},{title:"片场直击",value:"141"},{title:"独家",value:"115"},{title:"男同",value:"63"},{title:"男性自慰",value:"92"},{title:"真人实拍",value:"31"},{title:"第一视角",value:"41"},{title:"粗暴性爱",value:"67"},{title:"素人",value:"3"},{title:"红毛",value:"42"},{title:"纹身女",value:"562"},{title:"继家庭幻想",value:"444"},{title:"老少欢",value:"181"},{title:"聚会",value:"53"},{title:"肌肉男",value:"512"},{title:"肥臀",value:"4"},{title:"脱衣舞",value:"33"},{title:"自述视频",value:"231"},{title:"舔屄",value:"131"},{title:"色情日漫",value:"36"},{title:"色情明星",value:"30"},{title:"视频激情",value:"61"},{title:"角色扮演",value:"81"},{title:"试镜",value:"90"},{title:"贫乳",value:"59"},{title:"跨性别",value:"83"},{title:"跨种族",value:"25"},{title:"轮交",value:"80"},{title:"辣妈",value:"29"},{title:"金发女",value:"9"},{title:"阿拉伯人",value:"98"},{title:"集体颜射",value:"14"},{title:"音乐",value:"121"},{title:"风情少女",value:"5"},{title:"高清色情片",value:"38"},{title:"黑人女",value:"17"}];
const COUNTRIES_OPTIONS = [{title:"全球",value:"world"},{title:"日本",value:"jp"},{title:"韩国",value:"kr"},{title:"美国",value:"us"},{title:"英国",value:"gb"},{title:"法国",value:"fr"},{title:"德国",value:"de"},{title:"澳大利亚",value:"au"},{title:"俄罗斯",value:"ru"},{title:"塞尔维亚",value:"rs"},{title:"丹麦",value:"dk"},{title:"阿根廷",value:"ar"},{title:"奥地利",value:"at"},{title:"比利时",value:"be"},{title:"巴西",value:"br"},{title:"保加利亚",value:"bg"},{title:"加拿大",value:"ca"},{title:"智利",value:"cl"},{title:"克罗地亚",value:"hr"},{title:"捷克",value:"cz"},{title:"埃及",value:"eg"},{title:"芬兰",value:"fi"},{title:"希腊",value:"gr"},{title:"匈牙利",value:"hu"},{title:"印度",value:"in"},{title:"爱尔兰",value:"ie"},{title:"以色列",value:"il"},{title:"意大利",value:"it"},{title:"墨西哥",value:"mx"},{title:"摩洛哥",value:"ma"},{title:"荷兰",value:"nl"},{title:"新西兰",value:"nz"},{title:"挪威",value:"no"},{title:"巴基斯坦",value:"pk"},{title:"波兰",value:"pl"},{title:"葡萄牙",value:"pt"},{title:"罗马尼亚",value:"ro"},{title:"斯洛伐克",value:"sk"},{title:"西班牙",value:"es"},{title:"瑞典",value:"se"},{title:"瑞士",value:"ch"},{title:"乌克兰",value:"ua"}];
const PRODUCTIONS_OPTIONS = [{title:"全部",value:""},{title:"专业",value:"professional"},{title:"自制",value:"homemade"}];
const RESOLUTION_OPTIONS = [{title:"全部",value:""},{title:"仅高清",value:"1"}];
const SORT_BASIC = [{title:"最新发布",value:"new"},{title:"最多播放",value:"views"},{title:"最高评分",value:"rating"}];

WidgetMetadata = {
    id: "pornhubTao",
    title: "pornhub",
    version: "1.1.2",
    requiredVersion: "0.0.1",
    description: "Pornhub网站聚合",
    author: "廿二日",
    site: "https://cn.pornhub.com",
    detailCacheDuration: 60,
    globalParams: [
        { name: "cookie", title: "全局登录Cookie", type: "input", description: "用于获取推荐视频等私有数据", value: "" },
        { name: "username", title: "全局用户名", type: "input", description: "用于获取我的最爱等用户数据，示例：watchadog", value: "" }
    ],
    search: {
        title: "Pornhub搜索",
        functionName: "searchVideos",
        params: [
            {
                name: "keyword",
                title: "搜索关键词",
                type: "input",
                value: ""
            },
            {
                name: "page",
                title: "页码",
                type: "page",
                value: "1"
            }
        ]
    },
    modules: [
        {
            id: "searchKeyword",
            title: "全站搜索",
            functionName: "getSearchResults",
            cacheDuration: 86400,
            params: [
                { name: "search_query", title: "搜索关键词", type: "input", value: "" },
                { name: "search_type", title: "是否开启精准搜索", type: "enumeration", value: "no", enumOptions: [{title:"关闭",value:"no"},{title:"开启",value:"yes"}] },
                { name: "sort_by", title: "排序方式", type: "enumeration", value: "", enumOptions: [{title:"最相关",value:""},...SORT_BASIC] },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        {
            id: "favorites",
            title: "我的最爱",
            functionName: "getFavorites",
            cacheDuration: 180,
            params: [
                { name: "sort_by", title: "排序方式", type: "enumeration", value: "new", enumOptions: SORT_BASIC },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        {
            id: "searchUser",
            title: "优选艺人",
            functionName: "getUserUploads",
            cacheDuration: 86400,
            params: [
                {
                    name: "username", title: "艺人名称", type: "enumeration", value: "HongKongDoll",
                    belongTo: { paramName: "sort_by", value: ["new", "views", "rating"] },
                    enumOptions: [
                        {title:'HongKongDoll',value:'HongKongDoll'},{title:'Nana_taipei',value:'Nana_taipei'},{title:'Sweetie Fox',value:'sweetie-fox'},
                        {title:'Diana Rider',value:'diana-rider'},{title:'Sola Zola',value:'solazola'},{title:'Candy Love',value:'candy-love'},
                        {title:'Anastangel',value:'anastangel'},{title:'HottiesTwo',value:'hottiestwo'},{title:'Shinaryen',value:'shinaryen'},
                        {title:'Mila Muse',value:'milamuse'},{title:'Melody Marks',value:'melody-marks'},{title:'Eva Elfie',value:'eva-elfie'},
                        {title:'麻豆传媒',value:'asiam'},{title:'麻豆-LiRongRong',value:'Li Rong Rong'},{title:'Cabbage Sweety',value:'Cabbage Sweety'},
                        {title:'Lindainlove',value:'Lindainlove'},{title:'SweetieYico',value:'SweetieYico'},{title:'june liu',value:'june liu'},
                        {title:'77bandage',value:'77bandage'},{title:'youyou',value:'youyou'},{title:'manachanx',value:'manachanx'},
                        {title:'k production film',value:'k production film'},{title:'798DS',value:'798DS'},{title:'aiwanxiongxiong',value:'aiwanxiongxiong'},
                        {title:'ano ano chan',value:'ano ano chan'},{title:'bibi Fluffy',value:'bibi Fluffy'},{title:'CandyKissVip',value:'CandyKissVip'},
                        {title:'Chinese Bunny',value:'Chinese Bunny'},{title:'DemiFairyTW',value:'DemiFairyTW'},{title:'Eve',value:'Eve'},
                        {title:'fortunecutie',value:'fortunecutie'},{title:'LIs Evans',value:'LIs Evans'},{title:'loliiiiipop99',value:'loliiiiipop99'},
                        {title:'Makissse',value:'Makissse'},{title:'nan12138',value:'nan12138'},{title:'Nuomibaby',value:'nuomibaby'},
                        {title:'papaxmama',value:'papaxmama'},{title:'Qiobnxingcaiii',value:'Qiobnxingcaiii'},{title:'SakuraCandy',value:'SakuraCandy'},
                        {title:'thelittlejuicer',value:'thelittlejuicer'},{title:'TLMS_SVJ',value:'TLMS_SVJ'},{title:'twtutu',value:'twtutu'},
                        {title:'Vita Won',value:'Vita Won'},{title:'Yuqiao Chen',value:'Yuqiao Chen'},{title:'comatozze',value:'comatozze'},
                        {title:'Mirari Model',value:'mirari-model'}
                    ]
                },
                { name: "sort_by", title: "排序方式", type: "enumeration", value: "new", enumOptions: SORT_BASIC },
                { name: "logo", title: "标识符", type: "constant", value: "yx" },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        {
            id: "premiumArtists",
            title: "搜索艺人",
            functionName: "getUserUploads",
            cacheDuration: 300,
            params: [
                { name: "user_type", title: "艺人类型", type: "enumeration", value: "model", enumOptions: [{title:"模特",value:"model"},{title:"频道",value:"channels"},{title:"明星",value:"pornstar"}] },
                { name: "username", title: "艺人名称", type: "input", value: "" },
                { name: "sort_by", title: "排序方式", type: "enumeration", value: "new", enumOptions: SORT_BASIC },
                { name: "logo", title: "标识符", type: "constant", value: "ss" },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        {
            id: "recommended",
            title: "推荐视频",
            functionName: "getRecommendedVideos",
            cacheDuration: 86400,
            params: [
                { name: "sort_by", title: "推荐逻辑", type: "enumeration", value: "", enumOptions: [{title:"最相关",value:""},{title:"最新",value:"time"}] },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        {
            id: "languageVideos",
            title: "语言筛选",
            functionName: "getVideosByLanguage",
            cacheDuration: 86400,
            params: [
                { name: "language", title: "视频语言", type: "enumeration", value: "chinese", enumOptions: [{title:"中文",value:"chinese"},{title:"日语",value:"japanese"},{title:"俄语",value:"russian"},{title:"德语",value:"german"},{title:"法语",value:"french"},{title:"西班牙语",value:"spanish"},{title:"荷兰语",value:"dutch"},{title:"波兰语",value:"polish"},{title:"捷克语",value:"czech"},{title:"葡萄牙语",value:"portuguese"}] },
                { name: "p", title: "制作平台", type: "enumeration", value: "", enumOptions: PRODUCTIONS_OPTIONS },
                { name: "hd", title: "分辨率", type: "enumeration", value: "", enumOptions: RESOLUTION_OPTIONS },
                { name: "sort_by", title: "排序方式", type: "enumeration", value: "", enumOptions: [{title:"最新精选",value:""},{title:"热播",value:"ht"},{title:"最多观看",value:"mv"},{title:"最高评分",value:"tr"},{title:"最新视频",value:"cm"}] },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        {
            id: "hotVideos",
            title: "热播视频",
            functionName: "getVideos",
            cacheDuration: 600,
            params: [
                { name: "pageType", title: "页面类型", type: "constant", value: "ht" },
                { name: "p", title: "出品类型", type: "enumeration", value: "", enumOptions: PRODUCTIONS_OPTIONS },
                { name: "hd", title: "分辨率", type: "enumeration", value: "", enumOptions: RESOLUTION_OPTIONS },
                { name: "c", title: "视频类型", type: "enumeration", value: "", enumOptions: VIDEO_CATEGORIES },
                { name: "country", title: "国家/地区", type: "enumeration", value: "world", enumOptions: COUNTRIES_OPTIONS },
                { name: "sort_by", title: "时间范围", type: "enumeration", value: "", enumOptions: [{title:"每周",value:""},{title:"每天",value:"t"},{title:"每月",value:"m"},{title:"每年",value:"y"},{title:"迄今为止",value:"a"}] },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        {
            id: "topViews",
            title: "最多观看",
            functionName: "getVideos",
            cacheDuration: 600,
            params: [
                { name: "pageType", title: "页面类型", type: "constant", value: "mv" },
                { name: "p", title: "出品类型", type: "enumeration", value: "", enumOptions: PRODUCTIONS_OPTIONS },
                { name: "hd", title: "分辨率", type: "enumeration", value: "", enumOptions: RESOLUTION_OPTIONS },
                { name: "c", title: "视频类型", type: "enumeration", value: "", enumOptions: VIDEO_CATEGORIES },
                { name: "sort_by", title: "时间范围", type: "enumeration", value: "", enumOptions: [{title:"每月",value:""},{title:"每天",value:"t"},{title:"每周",value:"w"},{title:"每年",value:"y"},{title:"迄今为止",value:"a"}] },
                { name: "country", title: "国家/地区", type: "enumeration", value: "world", enumOptions: COUNTRIES_OPTIONS },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        {
            id: "maxRating",
            title: "最高评分",
            functionName: "getVideos",
            cacheDuration: 600,
            params: [
                { name: "pageType", title: "页面类型", type: "constant", value: "tr" },
                { name: "p", title: "出品类型", type: "enumeration", value: "", enumOptions: PRODUCTIONS_OPTIONS },
                { name: "hd", title: "分辨率", type: "enumeration", value: "", enumOptions: RESOLUTION_OPTIONS },
                { name: "c", title: "视频类型", type: "enumeration", value: "", enumOptions: VIDEO_CATEGORIES },
                { name: "sort_by", title: "时间范围", type: "enumeration", value: "", enumOptions: [{title:"每月",value:""},{title:"每天",value:"t"},{title:"每周",value:"w"},{title:"每年",value:"y"},{title:"迄今为止",value:"a"}] },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        {
            id: "latestFeatured",
            title: "最新精选",
            functionName: "getVideos",
            cacheDuration: 600,
            params: [
                { name: "c", title: "视频类型", type: "enumeration", value: "", enumOptions: VIDEO_CATEGORIES },
                { name: "p", title: "出品类型", type: "enumeration", value: "", enumOptions: PRODUCTIONS_OPTIONS },
                { name: "hd", title: "分辨率", type: "enumeration", value: "", enumOptions: RESOLUTION_OPTIONS },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        {
            id: "newVideos",
            title: "最新视频",
            functionName: "getVideos",
            cacheDuration: 600,
            params: [
                { name: "pageType", title: "页面类型", type: "constant", value: "cm" },
                { name: "p", title: "出品类型", type: "enumeration", value: "", enumOptions: PRODUCTIONS_OPTIONS },
                { name: "hd", title: "分辨率", type: "enumeration", value: "", enumOptions: RESOLUTION_OPTIONS },
                { name: "c", title: "视频类型", type: "enumeration", value: "", enumOptions: VIDEO_CATEGORIES },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        }
    ]
};

const PH_BASE_URL = "https://cn.pornhub.com";
const COMMON_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/137.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
};

const COVER_CACHE = {};
const DETAIL_COVER_CACHE = {};
const DETAIL_COVER_FAILED = {};
const DETAIL_COVER_FAIL_TTL = 10 * 60 * 1000;
const VIDEO_ITEM_SELECTOR = "a[href*='view_video.php?viewkey='], a[href*='/view_video.php?viewkey='], li.pcVideoListItem, li.videoblock, div.pcVideoListItem, div.videoblock, div.videoBox, li[data-video-vkey], div[data-video-vkey], article[data-video-vkey]";

const ARTIST_CATALOG = [
    { title: 'HongKongDoll', value: 'HongKongDoll', type: 'model' },
    { title: '麻豆传媒', value: 'asiam', type: 'channels' },
    { title: '麻豆-LiRongRong', value: 'Li Rong Rong', type: 'pornstar' },
    { title: 'june liu', value: 'june liu', type: 'pornstar' },
    { title: 'Cabbage Sweety', value: 'Cabbage Sweety', type: 'model' },
    { title: 'Lindainlove', value: 'Lindainlove', type: 'model' },
    { title: 'SweetieYico', value: 'SweetieYico', type: 'model' },
    { title: 'wanrous', value: 'wanrous', type: 'model' },
    { title: '77bandage', value: '77bandage', type: 'model' },
    { title: 'youyou', value: 'youyou', type: 'model' },
    { title: 'manachanx', value: 'manachanx', type: 'model' },
    { title: 'Karesi ni Baretara Kaisan', value: 'Karesi ni Baretara Kaisan', type: 'model' },
    { title: 'k production film', value: 'k production film', type: 'model' },
    { title: '798DS', value: '798DS', type: 'model' },
    { title: 'aiwanxiongxiong', value: 'aiwanxiongxiong', type: 'model' },
    { title: 'andmlove', value: 'andmlove', type: 'model' },
    { title: 'ano ano chan', value: 'ano ano chan', type: 'model' },
    { title: 'bibi Fluffy', value: 'bibi Fluffy', type: 'model' },
    { title: 'CandyKissVip', value: 'CandyKissVip', type: 'model' },
    { title: 'Chinese Bunny', value: 'Chinese Bunny', type: 'model' },
    { title: 'DemiFairyTW', value: 'DemiFairyTW', type: 'model' },
    { title: 'Elle Lee', value: 'Elle Lee', type: 'model' },
    { title: 'Eve', value: 'Eve', type: 'model' },
    { title: 'fortunecutie', value: 'fortunecutie', type: 'model' },
    { title: 'LIs Evans', value: 'LIs Evans', type: 'model' },
    { title: 'loliiiiipop99', value: 'loliiiiipop99', type: 'model' },
    { title: 'Makissse', value: 'Makissse', type: 'model' },
    { title: 'nan12138', value: 'nan12138', type: 'model' },
    { title: 'Nana_taipei', value: 'Nana_taipei', type: 'model' },
    { title: 'Nuomibaby', value: 'nuomibaby', type: 'model' },
    { title: 'papaxmama', value: 'papaxmama', type: 'model' },
    { title: 'Qiobnxingcaiii', value: 'Qiobnxingcaiii', type: 'model' },
    { title: 'SakuraCandy', value: 'SakuraCandy', type: 'model' },
    { title: 'sskok16', value: 'sskok16', type: 'model' },
    { title: 'SSR Peach', value: 'SSR Peach', type: 'model' },
    { title: 'thelittlejuicer', value: 'thelittlejuicer', type: 'model' },
    { title: 'TLMS_SVJ', value: 'TLMS_SVJ', type: 'model' },
    { title: 'twtutu', value: 'twtutu', type: 'model' },
    { title: 'Vita Won', value: 'Vita Won', type: 'model' },
    { title: 'Yuqiao Chen', value: 'Yuqiao Chen', type: 'model' },
    { title: 'YuzuKitty', value: 'YuzuKitty', type: 'model' },
    { title: 'comatozze', value: 'comatozze', type: 'model' },
    { title: 'Sweetie Fox', value: 'sweetie-fox', type: 'model' },
    { title: 'Lina MiguRtt', value: 'linamigurtt', type: 'model' },
    { title: 'Diana Rider', value: 'diana-rider', type: 'model' },
    { title: 'Mirari Model', value: 'mirari-model', type: 'model' },
    { title: 'Sola Zola', value: 'solazola', type: 'model' },
    { title: 'Candy Love', value: 'candy-love', type: 'model' },
    { title: 'Anastangel', value: 'anastangel', type: 'model' },
    { title: 'HottiesTwo', value: 'hottiestwo', type: 'model' },
    { title: 'Shinaryen', value: 'shinaryen', type: 'model' },
    { title: 'Mila Muse', value: 'milamuse', type: 'model' },
    { title: 'Melody Marks', value: 'melody-marks', type: 'pornstar' },
    { title: 'Eva Elfie', value: 'eva-elfie', type: 'pornstar' }
];

const createDefaultHeaders = extra => ({ ...COMMON_HEADERS, ...extra });
const normalizeText = val => String(val || "").replace(/\s+/g, " ").trim();
const trimUrl = url => url ? url.replace(/\r?\n|\r/g, "").trim() : "";
const looksLikePlaceholderUrl = url => /(?:placeholder|spacer|loading|blank|default|sprite|gif;base64|data:image\/gif)/i.test(url) || url.length < 12;

const buildUrl = (path, query) => {
    let base = path.startsWith("http") ? path : `${PH_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
    if (!query) return base;
    const qs = Object.entries(query)
        .filter(([_, v]) => v !== undefined && v !== null && v !== "")
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join("&");
    return qs ? `${base}${base.includes("?") ? "&" : "?"}${qs}` : base;
};

const extractViewkey = ($, element) => {
    const $el = $(element);
    let vkey = $el.attr('data-video-vkey') || $el.attr('data-id') || $el.attr('id') || $el.find('a[href*="viewkey="]').attr('href')?.match(/viewkey=([^&]+)/)?.[1];
    return vkey?.replace(/^(video|vkey|v|vfavouriteVideo)_/, "") || null;
};

const extractAuthor = ($, element) => {
    const $el = $(element);
    return $el.find('.usernameWrap a').attr('title')?.trim() 
        || $el.find('.usernameWrap a').text().trim() 
        || $el.find('.usernameBadgesWrapper a[title]').attr('title')?.trim() 
        || $el.find('.usernameBadgesWrapper a[title]').text().trim() || "";
};

const extractPreviewUrl = ($, element, viewkey) => {
    const $el = $(element);
    const cands = [];
    $el.find('img, source, video').addBack('img, source, video').each((_, node) => {
        const $n = $(node);
        cands.push($n.attr('src'), $n.attr('data-src'), $n.attr('data-webm'), $n.attr('data-preview'), $n.attr('poster'));
    });
    cands.push($el.attr('data-webm'), $el.attr('data-preview'), $el.attr('poster'));
    return cands.map(url => url ? trimUrl(url) : "").find(url => url && !looksLikePlaceholderUrl(url)) || "";
};

const buildVideoItem = ($, element, viewkey, fallbackLink = "") => {
    const $el = $(element);
    const title = $el.attr('title') || $el.find('.title a[title]').attr('title') || $el.find('.title a').text().trim() || "未知标题";
    let link = $el.attr('href') || $el.find('.title a').attr('href') || $el.find("a[href*='viewkey=']").attr('href') || fallbackLink || `https://cn.pornhub.com/view_video.php?viewkey=${viewkey}`;
    if (!/^https?:\/\//.test(link)) link = link.startsWith('/') ? `${PH_BASE_URL}${link}` : `${PH_BASE_URL}/${link}`;

    const listCoverUrl = extractListImageUrl($, element);
    const detailCoverUrl = viewkey ? (COVER_CACHE[viewkey] || DETAIL_COVER_CACHE[viewkey]) : "";
    const coverUrl = listCoverUrl || detailCoverUrl || "";
    const previewUrl = coverUrl || detailCoverUrl || extractPreviewUrl($, element, viewkey);
    
    const durationText = $el.find('.duration, .videoDuration, [class*="duration"]').first().text().trim() || "未知时长";
    const author = extractAuthor($, element);

    return {
        id: viewkey, type: "link", mediaType: "movie", title, coverUrl, previewUrl,
        durationText, duration: 0, link, description: author ? `作者：${author}` : ""
    };
};

const extractListImageUrl = ($, element) => {
    const $el = $(element);
    const cands = [];
    $el.find('img').addBack('img').each((_, node) => {
        const $n = $(node);
        cands.push($n.attr('src'), $n.attr('data-src'), $n.attr('data-thumb'), $n.attr('data-mediumthumb'));
    });
    return cands.map(url => url ? trimUrl(url) : "").find(url => url && !looksLikePlaceholderUrl(url)) || "";
};

const extractDetailCoverFromHtml = (html, $root) => {
    try {
        const root = $root || Widget.html.load(html || "");
        for (const sel of ['meta[property="og:image:secure_url"]', 'meta[property="og:image"]']) {
            const val = trimUrl(root(sel).first().attr('content'));
            if (val && !looksLikePlaceholderUrl(val)) return val;
        }
        const match = html.match(/"imageUrl"\s*:\s*"([^"]+)"/i) || html.match(/"thumbnailUrl"\s*:\s*"([^"]+)"/i);
        return match?.[1]?.replace(/\\/g, "") || "";
    } catch { return ""; }
};

const fetchDetailCoverForViewkey = async (viewkey) => {
    if (!viewkey || DETAIL_COVER_CACHE[viewkey]) return DETAIL_COVER_CACHE[viewkey] || "";
    if (DETAIL_COVER_FAILED[viewkey] && (Date.now() - DETAIL_COVER_FAILED[viewkey]) < DETAIL_COVER_FAIL_TTL) return "";
    try {
        const res = await Widget.http.get(`https://cn.pornhub.com/view_video.php?viewkey=${viewkey}`, { headers: createDefaultHeaders({ "Referer": "https://cn.pornhub.com/" }) });
        const cover = extractDetailCoverFromHtml(res?.data || "");
        if (cover) {
            DETAIL_COVER_CACHE[viewkey] = cover;
            delete DETAIL_COVER_FAILED[viewkey];
            return cover;
        }
        throw new Error();
    } catch {
        DETAIL_COVER_FAILED[viewkey] = Date.now();
        return "";
    }
};

const hydrateMissingCovers = async (items) => {
    const targets = items.filter(i => !i.coverUrl && i.id).slice(0, 5);
    await Promise.all(targets.map(async item => {
        const cover = await fetchDetailCoverForViewkey(item.id);
        if (cover) item.coverUrl = item.previewUrl = COVER_CACHE[item.id] = cover;
    }));
    return items;
};

const extractM3u8FromHtml = html => {
    try {
        for (const pattern of [/"mediaDefinitions"\s*:\s*(\[.+?\])/s, /var\s+flashvars_\d+\s*=\s*({.+?});/s, /"sources"\s*:\s*(\[[\s\S]+?\])/i]) {
            const match = html.match(pattern);
            if (match) {
                const parsed = JSON.parse(match[1].replace(/'/g, '"').replace(/,\s*]/g, ']'));
                const list = (parsed.mediaDefinitions || parsed).filter(i => /hls|m3u8/i.test(i.format || i.type) || /\.m3u8/.test(i.videoUrl || i.url));
                if (list.length) {
                    list.sort((a, b) => (parseInt(b.quality || b.resolution || 0) - parseInt(a.quality || a.resolution || 0)));
                    return {
                        videoUrl: list[0].videoUrl || list[0].url,
                        quality: String(list[0].quality || list[0].resolution || "").replace(/[^\d]/g, '') + 'p',
                        formats: list.map(i => ({ url: i.videoUrl || i.url, format: String(i.quality || i.resolution || "").replace(/[^\d]/g, '') + 'p', ext: 'm3u8', type: 'hls' }))
                    };
                }
            }
        }
        const directMatch = html.match(/https?:\/\/[^\"'\s]+\.m3u8(?:\?[^\"'\s]*)?/i);
        if (directMatch) return { videoUrl: directMatch[0], quality: '', formats: [{ url: directMatch[0], format: '', ext: 'm3u8', type: 'hls' }] };
    } catch {}
    return null;
};

async function getSearchResults(params) {
    const query = params.keyword || params.search_query;
    const url = buildUrl('/video/search', {
        search: normalizeText(query).replace(/[\s\-]+/g, ' '),
        o: params.sort_by === 'new' ? 'mr' : params.sort_by === 'views' ? 'mv' : params.sort_by === 'rating' ? 'tr' : '',
        page: Math.max(1, Number(params.page) || 1) > 1 ? params.page : ''
    });
    
    const res = await Widget.http.get(url, { headers: createDefaultHeaders({ "Referer": "https://cn.pornhub.com/" }) });
    const $ = Widget.html.load(res?.data || "");
    const items = [];
    $(VIDEO_ITEM_SELECTOR).each((_, el) => {
        const vkey = extractViewkey($, el);
        if (!vkey) return;
        
        const title = normalizeText($(el).find(".title a").attr("title") || $(el).find(".title").text() || $(el).attr('title'));
        const author = extractAuthor($, el);
        if (params.search_type === 'yes' && query && !title.toLowerCase().includes(query.toLowerCase()) && !author.toLowerCase().includes(query.toLowerCase())) return;
        
        items.push(buildVideoItem($, el, vkey));
    });
    return hydrateMissingCovers(items);
}

async function getFavorites(params) {
    if (!params.username) throw new Error("请在全局参数中填写您的用户名");
    let url = buildUrl(`/users/${encodeURIComponent(params.username)}/videos/favorites`, {
        o: params.sort_by === 'views' ? 'mv' : params.sort_by === 'rating' ? 'tr' : '',
        page: Math.max(1, Number(params.page) || 1) > 1 ? params.page : ''
    });

    const res = await Widget.http.get(url, { headers: createDefaultHeaders({ "Referer": "https://cn.pornhub.com/" }) });
    if (!res || !res.data) throw new Error("获取失败");
    if (res.data.includes("没有收藏视频") || res.data.includes("No videos found")) return [];

    const $ = Widget.html.load(res.data);
    const items = [];
    $(VIDEO_ITEM_SELECTOR).each((_, el) => {
        const vkey = extractViewkey($, el);
        if (vkey) items.push(buildVideoItem($, el, vkey));
    });
    return hydrateMissingCovers(items);
}

async function getUserUploads(params) {
    let type = params.logo === 'yx' ? ARTIST_CATALOG.find(o => o.value === params.username)?.type : normalizeText(params.user_type || 'model').toLowerCase();
    if (!type) throw new Error('无效的艺人信息');
    
    const username = normalizeText(params.username).replace(/\s+/g, '-').toLowerCase();
    const page = Math.max(1, Number(params.page) || 1);
    const sortStr = params.sort_by === 'views' ? (type === 'channels' ? 'vi' : 'mv') : params.sort_by === 'rating' ? (type === 'channels' ? 'ra' : 'tr') : 'mr';
    
    const url = type === 'pornstar' ? buildUrl(`/pornstar/${username}/videos/upload`, { o: 'mr', page: page > 1 ? page : '' }) 
              : type === 'channels' ? buildUrl(`/channels/${username}/videos`, { o: sortStr, page: page > 1 ? page : '' })
              : buildUrl(`/model/${username}/videos`, { o: sortStr, page: page > 1 ? page : '' });

    const res = await Widget.http.get(url, { headers: createDefaultHeaders({ "Referer": "https://cn.pornhub.com/" }) });
    const $ = Widget.html.load(res?.data || "");
    const items = [];
    
    $(VIDEO_ITEM_SELECTOR).each((_, el) => {
        const vkey = extractViewkey($, el);
        if (vkey) items.push(buildVideoItem($, el, vkey));
    });
    return hydrateMissingCovers(items);
}

async function getRecommendedVideos(params) {
    const rawCookie = params.cookie || "";
    const page = Math.max(1, Number(params.page) || 1);
    
    const cookieStr = rawCookie.split(";").map(s => s.trim()).filter(s => s.includes("=") && !/undefined/i.test(s)).join("; ");
    const url = buildUrl('/recommended', { o: params.sort_by || '', page: page > 1 ? page : '' });
    
    const res = await Widget.http.get(url, { headers: createDefaultHeaders({ "Cookie": cookieStr, "Referer": "https://cn.pornhub.com/" }) });
    const html = res?.data || "";
    if (!html.includes('class="logged-in"') && !html.includes("isLogged = 1") && !html.includes("topProfileMenu")) throw new Error("未登录或 Cookie 已失效，请在全局参数中更新 Cookie");
    
    const $ = Widget.html.load(html);
    const items = [];
    $(VIDEO_ITEM_SELECTOR).each((_, el) => {
        const vkey = extractViewkey($, el);
        if (vkey) items.push(buildVideoItem($, el, vkey));
    });
    return hydrateMissingCovers(items);
}

async function getVideosByLanguage(params) {
    const page = Math.max(1, Number(params.page) || 1);
    const url = buildUrl(`/language/${encodeURIComponent(params.language || "chinese")}`, {
        page: page > 1 ? page : '', p: params.p || '', hd: params.hd || '', o: params.sort_by || ''
    });
    
    const res = await Widget.http.get(url, { headers: createDefaultHeaders({ "Referer": "https://cn.pornhub.com/" }) });
    const $ = Widget.html.load(res?.data || "");
    const items = [];
    $(VIDEO_ITEM_SELECTOR).each((_, el) => {
        const vkey = extractViewkey($, el);
        if (vkey) items.push(buildVideoItem($, el, vkey));
    });
    return hydrateMissingCovers(items);
}

async function getVideos(params) {
    const page = Math.max(1, Number(params.page) || 1);
    const { pageType = "cm", c = "", country = "", hd = "", p = "", sort_by = "" } = params;
    
    const qs = { page };
    if (hd === "1") qs.hd = "1";
    if (p) qs.p = p;
    if (c && c !== "teen") qs.c = c;
    if (country && country !== "world") qs.cc = country;
    if (sort_by) qs.t = sort_by;
    qs.o = pageType === "latestFeatured" ? "" : pageType;

    const base = c === "teen" ? "/categories/teen" : "/video";
    const url = buildUrl(base, qs);
    
    const res = await Widget.http.get(url, { headers: createDefaultHeaders({ "Referer": "https://cn.pornhub.com/" }) });
    const $ = Widget.html.load(res?.data || "");
    const items = [];
    $(VIDEO_ITEM_SELECTOR).each((_, el) => {
        const vkey = extractViewkey($, el);
        if (vkey) items.push(buildVideoItem($, el, vkey));
    });
    return hydrateMissingCovers(items);
}

async function loadDetail(link) {
    const viewkey = link.match(/viewkey=([^&]+)/)?.[1];
    if (!viewkey) throw new Error("无效的视频链接");

    const fullUrl = `https://cn.pornhub.com/view_video.php?viewkey=${viewkey}`;
    const res = await Widget.http.get(fullUrl, { headers: createDefaultHeaders({ "Referer": "https://cn.pornhub.com/" }) });
    const html = res?.data || "";
    const $ = Widget.html.load(html);

    const coverUrl = extractDetailCoverFromHtml(html, $) || COVER_CACHE[viewkey] || "";
    const m3u8Data = extractM3u8FromHtml(html);
    if (!m3u8Data?.videoUrl) throw new Error("无法获取视频播放链接");

    const author = $('.usernameWrap a').first().attr('title') || "";
    const childItems = [];
    $(VIDEO_ITEM_SELECTOR).slice(0, 10).each((_, el) => {
        const vk = extractViewkey($, el);
        if (vk && vk !== viewkey) childItems.push(buildVideoItem($, el, vk));
    });

    return {
        id: viewkey, type: "detail", mediaType: "movie", videoUrl: m3u8Data.videoUrl,
        customHeaders: { "Referer": fullUrl, "User-Agent": COMMON_HEADERS["User-Agent"] },
        quality: m3u8Data.quality, title: "视频播放", coverUrl, duration: 0,
        formats: m3u8Data.formats, description: author ? `作者：${author}` : "", childItems
    };
}

async function searchVideos(params) {
    return getSearchResults(params); 
}
