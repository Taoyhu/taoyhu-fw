var WidgetMetadata = {
    id: "labeiTao",
    title: "厂牌检索",
    author: "廿二日",
    site: "https://www.themoviedb.org",
    description: "TMDB厂牌与平台库",
    version: "2.1.0",
    requiredVersion: "0.0.2",
    detailCacheDuration: 10800,
    modules: [
        {
            title: "动漫名社集",
            description: "按日本动画制作公司精准浏览作品",
            requiresWebView: false,
            functionName: "fetchStudioWorks",
            cacheDuration: 3600,
            params: [
                {
                    name: "company",
                    title: "出品/制作公司",
                    type: "enumeration",
                    value: "2883",
                    enumOptions: [
                        { title: "Aniplex", value: "2883" },
                        { title: "KADOKAWA (角川)", value: "2073" },
                        { title: "东映动画", value: "5542" },
                        { title: "京都动画", value: "5438" },
                        { title: "飞碟社 (Ufotable)", value: "5887" },
                        { title: "MAPPA", value: "21444" },
                        { title: "骨头社 (Bones)", value: "2849" },
                        { title: "霸权社 (WIT STUDIO)", value: "31058" },
                        { title: "A-1 Pictures", value: "13113" },
                        { title: "CloverWorks", value: "121589" },
                        { title: "疯房子 (Madhouse)", value: "3464" },
                        { title: "节操社 (J.C.Staff)", value: "11884" },
                        { title: "扳机社 (Trigger)", value: "50908" },
                        { title: "动画工房", value: "41996" },
                        { title: "Shaft (沙发套)", value: "6689" },
                        { title: "P.A. Works", value: "20867" },
                        { title: "Production I.G", value: "529" },
                        { title: "东映广告", value: "121739" },
                        { title: "吉卜力工作室", value: "10342" }
                    ]
                },
                {
                    name: "media_type",
                    title: "内容类型",
                    type: "enumeration",
                    value: "all",
                    enumOptions: [
                        { title: "全部", value: "all" },
                        { title: "番剧 (TV)", value: "tv" },
                        { title: "剧场版 (Movie)", value: "movie" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序规则",
                    type: "enumeration",
                    value: "popularity",
                    enumOptions: [
                        { title: "近期热门", value: "popularity" },
                        { title: "最新上映", value: "date" },
                        { title: "最高评分", value: "score" }
                    ]
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "TMDB 播出平台",
            description: "按流媒体/电视台筛选全球剧集",
            requiresWebView: false,
            functionName: "tmdbDiscoverByNetwork",
            cacheDuration: 3600,
            params: [
                {
                    name: "with_networks",
                    title: "播出平台",
                    type: "enumeration",
                    value: "213",
                    enumOptions: [
                        { title: "Netflix", value: "213" },
                        { title: "Disney+", value: "2739" },
                        { title: "HBO", value: "49" },
                        { title: "Apple TV+", value: "2552" },
                        { title: "Amazon Prime", value: "1024" },
                        { title: "Bilibili", value: "1605" },
                        { title: "Tencent", value: "2007" },
                        { title: "iQiyi", value: "1330" },
                        { title: "Youku", value: "1419" },
                        { title: "YouTube Premium", value: "1436" },
                        { title: "TV Tokyo", value: "94" },
                        { title: "Fuji TV", value: "1" },
                        { title: "Crunchyroll", value: "1112" }
                    ]
                },
                {
                    name: "with_genres",
                    title: "内容类型",
                    type: "enumeration",
                    value: "",
                    enumOptions: [
                        { title: "全部类型", value: "" },
                        { title: "动画", value: "16" },
                        { title: "动作冒险", value: "10759" },
                        { title: "犯罪", value: "80" },
                        { title: "喜剧", value: "35" },
                        { title: "剧情", value: "18" },
                        { title: "悬疑", value: "9648" },
                        { title: "科幻奇幻", value: "10765" },
                        { title: "纪录片", value: "99" }
                    ]
                },
                {
                    name: "air_status",
                    title: "上映状态",
                    type: "enumeration",
                    value: "released",
                    enumOptions: [
                        { title: "已上映", value: "released" },
                        { title: "未上映", value: "upcoming" },
                        { title: "全部", value: "" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    value: "first_air_date.desc",
                    enumOptions: [
                        { title: "上映时间↓", value: "first_air_date.desc" },
                        { title: "人气最高", value: "popularity.desc" },
                        { title: "评分最高", value: "vote_average.desc" }
                    ]
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "TMDB 出品公司",
            description: "按全球制片厂筛选电影作品",
            requiresWebView: false,
            functionName: "tmdbCompanies",
            cacheDuration: 3600,
            params: [
                {
                    name: "with_companies",
                    title: "出品公司",
                    type: "enumeration",
                    value: "420",
                    enumOptions: [
                        { title: "Marvel Studios", value: "420" },
                        { title: "Disney", value: "2" },
                        { title: "Warner Bros.", value: "174" },
                        { title: "Universal", value: "33" },
                        { title: "Sony Pictures", value: "34" },
                        { title: "Paramount", value: "4" },
                        { title: "20th Century Studios", value: "25" },
                        { title: "A24", value: "41077" },
                        { title: "Toho", value: "882" },
                        { title: "Studio Ghibli", value: "10342" }
                    ]
                },
                {
                    name: "with_genres",
                    title: "内容类型",
                    type: "enumeration",
                    value: "",
                    enumOptions: [
                        { title: "全部类型", value: "" },
                        { title: "动画", value: "16" },
                        { title: "动作", value: "28" },
                        { title: "冒险", value: "12" },
                        { title: "科幻", value: "878" },
                        { title: "奇幻", value: "14" },
                        { title: "喜剧", value: "35" },
                        { title: "惊悚", value: "53" },
                        { title: "恐怖", value: "27" },
                        { title: "剧情", value: "18" }
                    ]
                },
                {
                    name: "air_status",
                    title: "上映状态",
                    type: "enumeration",
                    value: "released",
                    enumOptions: [
                        { title: "已上映", value: "released" },
                        { title: "未上映", value: "upcoming" },
                        { title: "全部", value: "" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    value: "primary_release_date.desc",
                    enumOptions: [
                        { title: "上映时间↓", value: "primary_release_date.desc" },
                        { title: "人气最高", value: "popularity.desc" },
                        { title: "评分最高", value: "vote_average.desc" }
                    ]
                },
                { name: "page", title: "页码", type: "page" }
            ]
        }
    ]
};

const GENRE_MAP = { 16: "动画", 28: "动作", 12: "冒险", 35: "喜剧", 18: "剧情", 14: "奇幻", 878: "科幻", 9648: "悬疑", 80: "犯罪", 10759: "动作冒险", 10765: "科幻奇幻", 99: "纪录片", 53: "惊悚", 27: "恐怖" };

function getGenreTitle(ids) {
    if (!ids || !ids.length) return "";
    return ids.map(id => GENRE_MAP[id]).filter(Boolean).slice(0, 2).join(" • ");
}

function getBeijingDate() {
    const now = new Date();
    const beijingTime = now.getTime() + (8 * 60 * 60 * 1000);
    const date = new Date(beijingTime);
    return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}`;
}

async function commonTmdbMapper(res, endpoint) {
    const isMovie = endpoint.includes("movie");
    return (res.results || []).map(item => ({
        id: String(item.id),
        type: "tmdb",
        mediaType: isMovie ? "movie" : "tv",
        title: item.name || item.title,
        description: item.overview || "暂无简介",
        releaseDate: item.first_air_date || item.release_date || "",
        posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "",
        backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "",
        rating: item.vote_average ? item.vote_average.toFixed(1) : "0.0",
        genreTitle: getGenreTitle(item.genre_ids),
        _popularity: item.popularity || 0,
        _voteAverage: item.vote_average || 0
    }));
}

async function fetchStudioWorks(params) {
    const { company, media_type, sort_by, page } = params;
    const endpoints = media_type === "all" ? ["/discover/tv", "/discover/movie"] : [media_type === "tv" ? "/discover/tv" : "/discover/movie"];

    const promises = endpoints.map(async (endpoint) => {
        let sortParam = sort_by === "date" ? (endpoint === "/discover/tv" ? "first_air_date.desc" : "primary_release_date.desc") : (sort_by === "score" ? "vote_average.desc" : "popularity.desc");
        const queryParams = { with_companies: company, with_genres: "16", sort_by: sortParam, page: page || 1, language: "zh-CN" };
        if (sort_by === "score") queryParams["vote_count.gte"] = 50;
        const res = await Widget.tmdb.get(endpoint, { params: queryParams });
        return await commonTmdbMapper(res, endpoint);
    });

    let results = (await Promise.all(promises)).flat();

    if (media_type === "all") {
        results.sort((a, b) => sort_by === "date" ? new Date(b.releaseDate) - new Date(a.releaseDate) : (sort_by === "score" ? b._voteAverage - a._voteAverage : b._popularity - a._popularity));
    }
    return results;
}

async function tmdbDiscoverByNetwork(params) {
    const { with_networks, with_genres, air_status, sort_by, page } = params;
    const queryParams = { with_networks, sort_by, page: page || 1, language: "zh-CN" };
    if (with_genres) queryParams.with_genres = with_genres;
    if (air_status === 'released') queryParams['first_air_date.lte'] = getBeijingDate();
    else if (air_status === 'upcoming') queryParams['first_air_date.gte'] = getBeijingDate();
    const res = await Widget.tmdb.get("/discover/tv", { params: queryParams });
    return await commonTmdbMapper(res, "/discover/tv");
}

async function tmdbCompanies(params) {
    const { with_companies, with_genres, air_status, sort_by, page } = params;
    const queryParams = { with_companies, sort_by, page: page || 1, language: "zh-CN" };
    if (with_genres) queryParams.with_genres = with_genres;
    if (air_status === 'released') queryParams['primary_release_date.lte'] = getBeijingDate();
    else if (air_status === 'upcoming') queryParams['primary_release_date.gte'] = getBeijingDate();
    const res = await Widget.tmdb.get("/discover/movie", { params: queryParams });
    return await commonTmdbMapper(res, "/discover/movie");
}
