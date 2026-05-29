const WidgetMetadata = {
  id: "OleLiveTao",
  title: "欧乐影视",
  icon: "",
  version: "1.1.3",
  requiredVersion: "0.0.1",
  description: "全能聚合",
  author: "廿二日",
  site: "https://new.olevod.com",
  globalParams: [
    { name: "ApiHost", title: "欧乐API地址 (可填镜像站)", type: "input", value: "https://api.olelive.com" },
  ],
  search: {
    title: "搜索",
    functionName: "searchOle",
    params: [
      { name: "wd", title: "关键词", type: "input", value: "" },
      { name: "pg", title: "页码", type: "page", value: "1" }
    ]
  },
  modules: [
    { id: "ole_movie", title: "电影", functionName: "loadMovieList", type: "video", cacheDuration: 3600, params: [ { name: "area", title: "地区", type: "enumeration", value: "0", enumOptions: [ { title: "全部", value: "0" }, { title: "大陆", value: "大陆" }, { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" }, { title: "美国", value: "美国" }, { title: "日本", value: "日本" }, { title: "韩国", value: "韩国" }, { title: "英国", value: "英国" }, { title: "法国", value: "法国" }, { title: "德国", value: "德国" }, { title: "西班牙", value: "西班牙" }, { title: "泰国", value: "泰国" }, { title: "印度", value: "印度" } ] }, { name: "sort_by", title: "榜单类型", type: "enumeration", value: "hot", enumOptions: [ { title: "热门电影", value: "hot" }, { title: "高分电影", value: "score" }, { title: "最新电影", value: "update" }, { title: "最近添加", value: "desc" } ] }, { name: "page", title: "页码", type: "page", startPage: 1 } ] },
    { id: "ole_tv", title: "剧集", functionName: "loadTvList", type: "video", cacheDuration: 3600, params: [ { name: "area", title: "地区", type: "enumeration", value: "0", enumOptions: [ { title: "全部", value: "0" }, { title: "大陆", value: "大陆" }, { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" }, { title: "美国", value: "美国" }, { title: "日本", value: "日本" }, { title: "韩国", value: "韩国" }, { title: "英国", value: "英国" }, { title: "法国", value: "法国" }, { title: "德国", value: "德国" }, { title: "西班牙", value: "西班牙" }, { title: "泰国", value: "泰国" }, { title: "印度", value: "印度" } ] }, { name: "sort_by", title: "榜单类型", type: "enumeration", value: "hot", enumOptions: [ { title: "热门剧集", value: "hot" }, { title: "高分剧集", value: "score" }, { title: "最新剧集", value: "update" }, { title: "最近添加", value: "desc" } ] }, { name: "page", title: "页码", type: "page", startPage: 1 } ] },
    { id: "ole_variety", title: "综艺", functionName: "loadVarietyList", type: "video", cacheDuration: 3600, params: [ { name: "area", title: "地区", type: "enumeration", value: "0", enumOptions: [ { title: "全部", value: "0" }, { title: "大陆", value: "大陆" }, { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" }, { title: "美国", value: "美国" }, { title: "日本", value: "日本" }, { title: "韩国", value: "韩国" }, { title: "英国", value: "英国" }, { title: "法国", value: "法国" }, { title: "德国", value: "德国" }, { title: "西班牙", value: "西班牙" }, { title: "泰国", value: "泰国" }, { title: "印度", value: "印度" } ] }, { name: "sort_by", title: "榜单类型", type: "enumeration", value: "hot", enumOptions: [ { title: "热门综艺", value: "hot" }, { title: "高分综艺", value: "score" }, { title: "最新综艺", value: "update" }, { title: "最近添加", value: "desc" } ] }, { name: "page", title: "页码", type: "page", startPage: 1 } ] },
    { id: "ole_anime", title: "动漫", functionName: "loadAnimeList", type: "video", cacheDuration: 3600, params: [ { name: "area", title: "地区", type: "enumeration", value: "0", enumOptions: [ { title: "全部", value: "0" }, { title: "大陆", value: "大陆" }, { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" }, { title: "美国", value: "美国" }, { title: "日本", value: "日本" }, { title: "韩国", value: "韩国" }, { title: "英国", value: "英国" }, { title: "法国", value: "法国" }, { title: "德国", value: "德国" }, { title: "西班牙", value: "西班牙" }, { title: "泰国", value: "泰国" }, { title: "印度", value: "印度" } ] }, { name: "sort_by", title: "榜单类型", type: "enumeration", value: "hot", enumOptions: [ { title: "热门动漫", value: "hot" }, { title: "高分动漫", value: "score" }, { title: "最新动漫", value: "update" }, { title: "最近添加", value: "desc" } ] }, { name: "page", title: "页码", type: "page", startPage: 1 } ] },
    { id: "ole_short", title: "短剧", functionName: "loadShortList", type: "video", cacheDuration: 3600, params: [ { name: "area", title: "地区", type: "enumeration", value: "0", enumOptions: [ { title: "全部", value: "0" }, { title: "大陆", value: "大陆" }, { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" }, { title: "美国", value: "美国" }, { title: "日本", value: "日本" }, { title: "韩国", value: "韩国" }, { title: "英国", value: "英国" }, { title: "法国", value: "法国" }, { title: "德国", value: "德国" }, { title: "西班牙", value: "西班牙" }, { title: "泰国", value: "泰国" }, { title: "印度", value: "印度" } ] }, { name: "sort_by", title: "榜单类型", type: "enumeration", value: "hot", enumOptions: [ { title: "热门短剧", value: "hot" }, { title: "高分短剧", value: "score" }, { title: "最新短剧", value: "update" }, { title: "最近添加", value: "desc" } ] }, { name: "page", title: "页码", type: "page", startPage: 1 } ] },
    { id: "searchOle", title: "搜索", functionName: "searchOle", type: "video", cacheDuration: 300, params: [ { name: "wd", title: "关键词", type: "input", value: "" }, { name: "pg", title: "页码", type: "page", value: "1" } ] },
    { id: "loadResource", title: "测试", functionName: "loadResource", type: "stream", params: [] }
  ]
};

const DEFAULT_API_HOST = "https://api.olelive.com";
const REFERER = "https://new.olevod.com";
const DEFAULT_PIC_HOST = "https://static.olelive.com/";
const CACHE_TTL = 3600000;
let GLOBAL_COOKIE = "";

const REQUEST_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  "Accept": "application/json, text/plain, */*",
  "Accept-Language": "zh-CN,zh;q=0.9",
  "Referer": REFERER,
  "Origin": REFERER,
  "Content-Type": "application/json"
};

const cacheStore = new Map();

function getFromCache(key) {
  const entry = cacheStore.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) return entry.data;
  if (entry) cacheStore.delete(key);
  return null;
}

function setToCache(key, data) {
  cacheStore.set(key, { data, timestamp: Date.now() });
  if (cacheStore.size > 50) cacheStore.delete(cacheStore.keys().next().value);
}

function md5(str) {
  const rotateLeft = (l, s) => (l << s) | (l >>> (32 - s));
  const add = (x, y) => {
    const lX8 = x & 0x80000000, lY8 = y & 0x80000000;
    const lX4 = x & 0x40000000, lY4 = y & 0x40000000;
    const res = (x & 0x3FFFFFFF) + (y & 0x3FFFFFFF);
    if (lX4 & lY4) return res ^ 0x80000000 ^ lX8 ^ lY8;
    if (lX4 | lY4) return res & 0x40000000 ? res ^ 0xC0000000 ^ lX8 ^ lY8 : res ^ 0x40000000 ^ lX8 ^ lY8;
    return res ^ lX8 ^ lY8;
  };
  const ff = (a, b, c, d, x, s, ac) => add(rotateLeft(add(a, add(add((b & c) | (~b & d), x), ac)), s), b);
  const gg = (a, b, c, d, x, s, ac) => add(rotateLeft(add(a, add(add((b & d) | (c & ~d), x), ac)), s), b);
  const hh = (a, b, c, d, x, s, ac) => add(rotateLeft(add(a, add(add(b ^ c ^ d, x), ac)), s), b);
  const ii = (a, b, c, d, x, s, ac) => add(rotateLeft(add(a, add(add(c ^ (b | ~d), x), ac)), s), b);
  const toWords = s => {
    const len = s.length, blocks = ((len + 8) - ((len + 8) % 64)) / 64 + 1;
    const words = Array(blocks * 16 - 1).fill(0);
    let count = 0;
    while (count < len) {
      words[count >> 2] |= s.charCodeAt(count) << ((count % 4) * 8);
      count++;
    }
    words[count >> 2] |= 0x80 << ((count % 4) * 8);
    words[blocks * 16 - 2] = len << 3;
    words[blocks * 16 - 1] = len >>> 29;
    return words;
  };
  const toHex = val => [0, 1, 2, 3].map(i => ("0" + ((val >>> (i * 8)) & 255).toString(16)).slice(-2)).join("");
  const x = toWords(str);
  let [a, b, c, d] = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476];
  for (let k = 0; k < x.length; k += 16) {
    const [AA, BB, CC, DD] = [a, b, c, d];
    a = ff(a, b, c, d, x[k+0], 7, 0xD76AA478); d = ff(d, a, b, c, x[k+1], 12, 0xE8C7B756); c = ff(c, d, a, b, x[k+2], 17, 0x242070DB); b = ff(b, c, d, a, x[k+3], 22, 0xC1BDCEEE);
    a = ff(a, b, c, d, x[k+4], 7, 0xF57C0FAF); d = ff(d, a, b, c, x[k+5], 12, 0x4787C62A); c = ff(c, d, a, b, x[k+6], 17, 0xA8304613); b = ff(b, c, d, a, x[k+7], 22, 0xFD469501);
    a = ff(a, b, c, d, x[k+8], 7, 0x698098D8); d = ff(d, a, b, c, x[k+9], 12, 0x8B44F7AF); c = ff(c, d, a, b, x[k+10], 17, 0xFFFF5BB1); b = ff(b, c, d, a, x[k+11], 22, 0x895CD7BE);
    a = ff(a, b, c, d, x[k+12], 7, 0x6B901122); d = ff(d, a, b, c, x[k+13], 12, 0xFD987193); c = ff(c, d, a, b, x[k+14], 17, 0xA679438E); b = ff(b, c, d, a, x[k+15], 22, 0x49B40821);
    a = gg(a, b, c, d, x[k+1], 5, 0xF61E2562); d = gg(d, a, b, c, x[k+6], 9, 0xC040B340); c = gg(c, d, a, b, x[k+11], 14, 0x265E5A51); b = gg(b, c, d, a, x[k+0], 20, 0xE9B6C7AA);
    a = gg(a, b, c, d, x[k+5], 5, 0xD62F105D); d = gg(d, a, b, c, x[k+10], 9, 0x02441453); c = gg(c, d, a, b, x[k+15], 14, 0xD8A1E681); b = gg(b, c, d, a, x[k+4], 20, 0xE7D3FBC8);
    a = gg(a, b, c, d, x[k+9], 5, 0x21E1CDE6); d = gg(d, a, b, c, x[k+14], 9, 0xC33707D6); c = gg(c, d, a, b, x[k+3], 14, 0xF4D50D87); b = gg(b, c, d, a, x[k+8], 20, 0x455A14ED);
    a = gg(a, b, c, d, x[k+13], 5, 0xA9E3E905); d = gg(d, a, b, c, x[k+2], 9, 0xFCEFA3F8); c = gg(c, d, a, b, x[k+7], 14, 0x676F02D9); b = gg(b, c, d, a, x[k+12], 20, 0x8D2A4C8A);
    a = hh(a, b, c, d, x[k+5], 4, 0xFFFA3942); d = hh(d, a, b, c, x[k+8], 11, 0x8771F681); c = hh(c, d, a, b, x[k+11], 16, 0x6D9D6122); b = hh(b, c, d, a, x[k+14], 23, 0xFDE5380C);
    a = hh(a, b, c, d, x[k+1], 4, 0xA4BEEA44); d = hh(d, a, b, c, x[k+4], 11, 0x4BDECFA9); c = hh(c, d, a, b, x[k+7], 16, 0xF6BB4B60); b = hh(b, c, d, a, x[k+10], 23, 0xBEBFBC70);
    a = hh(a, b, c, d, x[k+13], 4, 0x289B7EC6); d = hh(d, a, b, c, x[k+0], 11, 0xEAA127FA); c = hh(c, d, a, b, x[k+3], 16, 0xD4EF3085); b = hh(b, c, d, a, x[k+6], 23, 0x04881D05);
    a = hh(a, b, c, d, x[k+9], 4, 0xD9D4D039); d = hh(d, a, b, c, x[k+12], 11, 0xE6DB99E5); c = hh(c, d, a, b, x[k+15], 16, 0x1FA27CF8); b = hh(b, c, d, a, x[k+2], 23, 0xC4AC5665);
    a = ii(a, b, c, d, x[k+0], 6, 0xF4292244); d = ii(d, a, b, c, x[k+7], 10, 0x432AFF97); c = ii(c, d, a, b, x[k+14], 15, 0xAB9423A7); b = ii(b, c, d, a, x[k+5], 21, 0xFC93A039);
    a = ii(a, b, c, d, x[k+12], 6, 0x655B59C3); d = ii(d, a, b, c, x[k+3], 10, 0x8F0CCC92); c = ii(c, d, a, b, x[k+10], 15, 0xFFEFF47D); b = ii(b, c, d, a, x[k+1], 21, 0x85845DD1);
    a = ii(a, b, c, d, x[k+8], 6, 0x6FA87E4F); d = ii(d, a, b, c, x[k+15], 10, 0xFE2CE6E0); c = ii(c, d, a, b, x[k+6], 15, 0xA3014314); b = ii(b, c, d, a, x[k+13], 21, 0x4E0811A1);
    a = ii(a, b, c, d, x[k+4], 6, 0xF7537E82); d = ii(d, a, b, c, x[k+11], 10, 0xBD3AF235); c = ii(c, d, a, b, x[k+2], 15, 0x2AD7D2BB); b = ii(b, c, d, a, x[k+9], 21, 0xEB86D391);
    a = add(a, AA); b = add(b, BB); c = add(c, CC); d = add(d, DD);
  }
  return (toHex(a) + toHex(b) + toHex(c) + toHex(d)).toLowerCase();
}

function signature() {
  const str = Math.floor(Date.now() / 1000).toString();
  const r = [[], [], [], []];
  for (let i = 0; i < str.length; i++) {
    const b = str[i].charCodeAt().toString(2).padStart(8, '0');
    r[0] += b[2]; r[1] += b[3]; r[2] += b[4]; r[3] += b.slice(5);
  }
  const a = r.map(bin => ("000" + parseInt(bin, 2).toString(16)).slice(-2));
  const n = md5(str);
  return n.slice(0, 3) + a[0] + n.slice(6, 11) + a[1] + n.slice(14, 19) + a[2] + n.slice(22, 27) + a[3] + n.slice(30);
}

const normalizeTitle = t => t?.toLowerCase().replace(/[^\u4e00-\u9fa5a-z0-9]/g, "") || "";

async function fetchApi(url) {
  for (let i = 0; i < 2; i++) {
    try {
      const headers = { ...REQUEST_HEADERS, ...(GLOBAL_COOKIE ? { "Cookie": GLOBAL_COOKIE } : {}) };
      const res = await Widget.http.get(url, { headers, timeout: 10000 });
      return typeof res.data === "string" ? JSON.parse(res.data) : res.data;
    } catch (e) {
      if (i === 1) return null;
      await new Promise(r => setTimeout(r, 1000));
    }
  }
}

function buildApiUrl(host, path, params = {}) {
  params._vv = signature();
  const qs = Object.entries(params)
    .filter(([_, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
  return `${host}${path}${qs ? (path.includes("?") ? "&" : "?") + qs : ""}`;
}

async function searchVodOle(apiHost, keyword, pg = 1) {
  const res = await fetchApi(buildApiUrl(apiHost, `/v1/pub/index/search/${encodeURIComponent(keyword)}/vod/0/${pg}/48`));
  const list = res?.data?.data?.find(d => d.type === "vod")?.list || [];
  return list.filter(item => GLOBAL_COOKIE || !item.vip).map(item => ({
    vod_id: String(item.id), vod_name: item.name, vod_pic: DEFAULT_PIC_HOST + item.pic,
    vod_remarks: item.remark || "", year: item.year || "", lang: item.lang || "",
    vod_type: item.type || "", vip: !!item.vip
  }));
}

const CATEGORY_MAP = { movie: 1, tv: 2, variety: 3, anime: 4, short: 14 };
const CATEGORY_NAMES = { 1: "电影", 2: "剧集", 3: "综艺", 4: "动漫", 14: "短剧" };

async function fetchCategoryList(params, cateKey) {
  const apiHost = (params?.ApiHost || DEFAULT_API_HOST).replace(/\/$/, "");
  const page = parseInt(params?.page || 1);
  const cateId = CATEGORY_MAP[cateKey];
  const sort = params?.sort_by || "hot";
  
  const res = await fetchApi(buildApiUrl(apiHost, `/v1/pub/vod/list/true/3/0/${params?.area || "0"}/${cateId}/0/0/${sort}/${page}/48`));
  const list = res?.data?.list || [];
  
  if (!list.length && page === 1) return [{ id: "empty", type: "text", title: "暂无数据，请检查网络或API地址" }];
  
  return list.map(item => ({
    id: `ole_${item.id}`, type: "url", title: item.name,
    posterPath: DEFAULT_PIC_HOST + item.pic, backdropPath: DEFAULT_PIC_HOST + item.pic,
    releaseDate: item.year || "", description: `${item.year || "未知年份"} · ${CATEGORY_NAMES[cateId]}`,
    genreTitle: CATEGORY_NAMES[cateId], vod_id: item.id, api_host: apiHost,
    link: `ole://detail?id=${item.id}&api=${encodeURIComponent(apiHost)}`
  }));
}

const loadMovieList = p => fetchCategoryList(p, "movie");
const loadTvList = p => fetchCategoryList(p, "tv");
const loadVarietyList = p => fetchCategoryList(p, "variety");
const loadAnimeList = p => fetchCategoryList(p, "anime");
const loadShortList = p => fetchCategoryList(p, "short");

async function searchOle(params = {}) {
  GLOBAL_COOKIE = params.Cookie || "";
  const apiHost = (params.ApiHost || DEFAULT_API_HOST).replace(/\/$/, "");
  const keyword = (params.wd || params.keyword || "").trim();
  if (!keyword) throw new Error("请输入搜索关键词");
  
  const results = await searchVodOle(apiHost, keyword, params.pg || 1);
  if (!results.length) return [{ id: "empty", type: "text", title: "未找到相关影片，请尝试其他关键词" }];
  
  return results.map(item => ({
    id: `ole_detail_${item.vod_id}`, type: "url", title: item.vod_name,
    posterPath: item.vod_pic, releaseDate: item.year,
    description: `${item.year ? item.year + " · " : ""}${item.vod_type === "movie" ? "电影" : "剧集"}${item.vip ? " [VIP]" : ""}`,
    link: `ole://detail?id=${item.vod_id}&api=${encodeURIComponent(apiHost)}`
  }));
}

async function loadDetail(params) {
  let detailId = typeof params === "object" ? (params.id || params.link || "") : params;
  let apiHost = (typeof params === "object" ? (params.api_host || params.ApiHost) : "") || DEFAULT_API_HOST;
  if (!detailId) throw new Error("无效的详情请求");
  if (!detailId.includes("ole://detail")) return { id: detailId, type: "url", title: "播放", videoUrl: detailId, mediaType: "movie" };

  const vodId = detailId.match(/[?&]id=(\d+)/)?.[1];
  const res = await fetchApi(buildApiUrl(apiHost.replace(/\/$/, ""), `/v1/pub/vod/detail/${vodId}/true`));
  const detail = res?.data;
  
  if (!detail?.urls?.length) throw new Error("获取详情失败或无播放源");
  
  const isMovie = detail.urls.length === 1 && !/(第\d+集|集)/.test(detail.urls[0].title || "");
  const episodeItems = detail.urls.filter(u => GLOBAL_COOKIE || !u.vip).map((u, i) => ({
    id: `${vodId}_${i}`, type: "url", title: u.title || "播放", videoUrl: u.url || u.play_url || u.link || "", mediaType: "episode"
  })).filter(u => u.videoUrl);

  if (!episodeItems.length) throw new Error("未找到可播放的链接");

  return {
    id: `ole_${vodId}`, type: "url", title: detail.title || detail.name || "未知标题", description: detail.intro || "",
    posterPath: detail.pic || "", backdropPath: detail.pic || "", mediaType: isMovie ? "movie" : "tv",
    episode: episodeItems.length, episodeItems, videoUrl: isMovie ? episodeItems[0].videoUrl : null
  };
}

async function loadResource(params = {}) {
  GLOBAL_COOKIE = params.Cookie || "";
  const apiHost = (params.ApiHost || DEFAULT_API_HOST).replace(/\/$/, "");
  const seriesName = params.seriesName || params.title || params.name || params.keyword || params.TestTitle || "";
  if (!seriesName) return [];
  
  const type = params.type === "movie" ? "movie" : "tv";
  const episode = params.episode ? parseInt(params.episode) : null;
  const cacheKey = `${seriesName}_${type}_${episode || "all"}`;
  
  if (getFromCache(cacheKey)) return getFromCache(cacheKey);

  const keyword = seriesName.replace(/[\(\[（【][^\)\]）】]*[\)\]）】]/g, "").split(/[:：\-—\s]+/)[0]?.trim();
  const searchResults = await searchVodOle(apiHost, keyword);
  if (!searchResults.length) return [];

  const userNorm = normalizeTitle(seriesName);
  const userYear = seriesName.match(/\b(19|20)\d{2}\b/)?.[0] ? parseInt(seriesName.match(/\b(19|20)\d{2}\b/)[0]) : null;

  const candidates = searchResults.map(item => {
    const itemNorm = normalizeTitle(item.vod_name);
    let score = itemNorm === userNorm ? 100 : 0;
    if (!score) {
      const iNoYr = itemNorm.replace(/\d+/g, ""), uNoYr = userNorm.replace(/\d+/g, "");
      if (iNoYr === uNoYr && uNoYr) score = 95;
      else if (itemNorm.includes(userNorm) || userNorm.includes(itemNorm)) score = 80;
    }
    return { item, score };
  }).filter(c => c.score > 0).sort((a, b) => b.score - a.score);

  if (!candidates.length) return [];

  let finalMatch = candidates[0].item;
  for (const { item } of candidates) {
    if ((!userYear || parseInt(item.year) === userYear) && (type !== "movie" || item.vod_type === "movie")) {
      finalMatch = item; break;
    }
  }

  const detailRes = await fetchApi(buildApiUrl(apiHost, `/v1/pub/vod/detail/${finalMatch.vod_id}/true`));
  if (!detailRes?.data?.urls?.length) return [];

  const realTitle = detailRes.data.title || detailRes.data.name || finalMatch.vod_name;
  const urlSet = new Set();
  const uniqueResources = [];

  for (const item of detailRes.data.urls) {
    if (!GLOBAL_COOKIE && item.vip) continue;
    const url = item.url || item.play_url || item.link || "";
    if (!url || urlSet.has(url)) continue;

    const title = item.title || "";
    let epNum = title.match(/第\s*(\d+)\s*[集话期]/)?.[1] ?? title.match(/[Ee][Pp]?\s*(\d+)/)?.[1];
    if (!epNum) {
      const m = title.match(/\b(\d{1,3})\b/);
      if (m && !/^(1080|720|480|2160|4k)$/i.test(m[1])) epNum = m[1];
    }
    epNum = epNum ? parseInt(epNum) : null;

    if (type === "tv" && episode !== null && epNum !== episode) continue;

    const fullStr = `${finalMatch.vod_remarks} ${title}`;
    const lang = /(国语|普通话)/.test(fullStr) ? "国语" : /粤语/.test(fullStr) ? "粤语" : /英语/.test(fullStr) ? "英语" : /日语/.test(fullStr) ? "日语" : /韩语/.test(fullStr) ? "韩语" : "";

    urlSet.add(url);
    uniqueResources.push({
      id: `${finalMatch.vod_id}_${Date.now()}_${uniqueResources.length}`,
      name: "欧乐影视", type,
      description: `${realTitle}${type === "tv" && !title.includes("正片") ? " " + title : ""}${lang ? ` [${lang}]` : ""}`,
      url
    });
  }

  setToCache(cacheKey, uniqueResources);
  return uniqueResources;
}
