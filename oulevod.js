// @name 欧乐影视
// @description 搜索，分类，登录
// @version 2.9.8

var DEFAULT_API_HOST = "https://api.olelive.com";
var REFERER = "https://www.olelive.com";
var REQUEST_TIMEOUT = 10000;
var MAX_RETRIES = 2;
var CACHE_TTL = 3600000;

var GLOBAL_COOKIE = "";

var REQUEST_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  "Accept": "application/json, text/plain, */*",
  "Accept-Language": "zh-CN,zh;q=0.9",
  "Referer": REFERER,
  "Origin": REFERER,
  "Content-Type": "application/json"
};

var cacheStore = new Map();

function getCacheKey(seriesName, type, episode) {
  return seriesName + "_" + type + "_" + (episode || "all");
}

function getFromCache(key) {
  var entry = cacheStore.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) {
    logInfo("缓存命中: " + key);
    return entry.data;
  }
  if (entry) cacheStore.delete(key);
  return null;
}

function setToCache(key, data) {
  cacheStore.set(key, { data: data, timestamp: Date.now() });
  if (cacheStore.size > 50) {
    var oldestKey = cacheStore.keys().next().value;
    cacheStore.delete(oldestKey);
  }
}

function md5(string){
  function md5cycle(x,k){var a=x[0],b=x[1],c=x[2],d=x[3];
  a=ff(a,b,c,d,k[0],7,-680876936);d=ff(d,a,b,c,k[1],12,-389564586);c=ff(c,d,a,b,k[2],17,606105819);b=ff(b,c,d,a,k[3],22,-1044525330);
  a=ff(a,b,c,d,k[4],7,-176418897);d=ff(d,a,b,c,k[5],12,1200080426);c=ff(c,d,a,b,k[6],17,-1473231341);b=ff(b,c,d,a,k[7],22,-45705983);
  a=ff(a,b,c,d,k[8],7,1770035416);d=ff(d,a,b,c,k[9],12,-1958414417);c=ff(c,d,a,b,k[10],17,-42063);b=ff(b,c,d,a,k[11],22,-1990404162);
  a=ff(a,b,c,d,k[12],7,1804603682);d=ff(d,a,b,c,k[13],12,-40341101);c=ff(c,d,a,b,k[14],17,-1502002290);b=ff(b,c,d,a,k[15],22,1236535329);
  a=gg(a,b,c,d,k[1],5,-165796510);d=gg(d,a,b,c,k[6],9,-1069501632);c=gg(c,d,a,b,k[11],14,643717713);b=gg(b,c,d,a,k[0],20,-373897302);
  a=gg(a,b,c,d,k[5],5,-701558691);d=gg(d,a,b,c,k[10],9,38016083);c=gg(c,d,a,b,k[15],14,-66047Normally I can help with things like this, but I don't seem to have access to that content. You can try again or ask me for something else.
