WidgetMetadata = {
    id: '91pornTao',
    title: '91Porn',
    description: '91Porn网站聚合',
    version: "1.0.4",
    requiredVersion: '0.0.1',
    author: "廿二日",
    site: 'https://github.com/baranwang/forward-widget',
    detailCacheDuration: 1,
    search: {
        title: "搜索视频",
        functionName: "searchVideos",
        params: [
            {
                name: "keyword",
                title: "搜索关键词",
                type: "input",
                description: "输入你想搜索的视频内容",
                placeholders: [
                    { title: "制服", value: "制服" },
                    { title: "自拍", value: "自拍" },
                    { title: "少妇", value: "少妇" }
                ]
            },
            {
                name: 'base_url',
                title: "基础 URL",
                type: 'input',
                value: 'https://91porn.com'
            }
        ]
    },
    modules: [
        {
            id: '91porn.list',
            title: '91Porn',
            description: '91Porn',
            cacheDuration: 3600,
            requiresWebView: false,
            functionName: 'getList',
            params: [
                {
                    name: 'sort_by',
                    title: "分类",
                    description: "分类",
                    type: 'enumeration',
                    value: 'rf',
                    enumOptions: [
                        { value: 'rf', title: "最近加精" },
                        { value: 'hot', title: "当前最热" },
                        { value: 'top', title: "本月最热" },
                        { value: 'tf', title: "本月收藏" },
                        { value: 'md', title: "本月讨论" },
                        { value: 'top&m=-1', title: "上月最热" },
                        { value: 'ori', title: "91原创" },
                        { value: 'long', title: "10分钟以上" },
                        { value: 'longer', title: "20分钟以上" },
                        { value: 'mf', title: "收藏最多" },
                        { value: 'search', title: "搜索" } // 新增搜索分类
                    ]
                },
                {
                    name: "keyword",
                    title: "搜索关键词",
                    type: "input",
                    belongTo: {
                        paramName: "sort_by",
                        value: ["search"]
                    },
                    description: "当分类选择为【搜索】时生效",
                    placeholders: [
                        { title: "制服", value: "制服" },
                        { title: "自拍", value: "自拍" },
                        { title: "少妇", value: "少妇" }
                    ]
                },
                {
                    name: 'page',
                    title: "页码",
                    type: 'page',
                    value: '1'
                },
                {
                    name: 'base_url',
                    title: "基础 URL",
                    type: 'input',
                    value: 'https://91porn.com'
                }
            ]
        }
    ]
};

const DEFAULT_BASE_URL = 'https://91porn.com';

const getHeaders = () => ({
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36'
});

// 提取抽象的视频列表解析引擎
function parseVideoList($) {
    const list = [];
    $('.videos-text-align').each((_, el) => {
        const $el = $(el);
        // 规避蜜罐
        if ($el.closest('.col-lg-8').length > 0) return;

        const link = $el.find('a').attr('href');
        if (!link) return;

        const backdropPath = $el.find('.img-responsive').attr('src');
        const title = $el.find('.video-title').text().trim();
        const durationText = $el.find('.duration').text().trim();
        
        const result = {
            id: link,
            type: 'url',
            mediaType: 'movie',
            link,
            title,
            backdropPath,
            durationText: durationText || undefined
        };

        const videoID = backdropPath?.split('/').pop()?.split('.').shift();
        if (videoID) {
            result.previewUrl = `https://vthumb.killcovid2021.com/thumb/${videoID}.mp4`;
        }

        const infoTexts = $el.find('.info').text();
        const timeMatch = infoTexts.match(/添加时间:\s*([\d-]+\s[\d:]+)/);
        if (timeMatch && timeMatch[1]) {
            result.releaseDate = timeMatch[1].trim();
        }

        list.push(result);
    });
    return list;
}

// 核心业务：获取分类列表 (支持内部搜索)
async function getList(params) {
    const sortBy = params?.sort_by ?? 'ori';
    const page = params?.page ?? 1;
    const baseUrl = params?.base_url ?? DEFAULT_BASE_URL;

    try {
        // 如果选择的是“搜索”分类，且输入了关键词，则分流到搜索接口
        if (sortBy === 'search' && params?.keyword) {
            return await searchVideos({ ...params, query: params.keyword });
        }

        // 否则走常规的分类列表接口
        const resp = await Widget.http.get(`${baseUrl}/v.php?category=${sortBy}&viewtype=basic&page=${page}`, {
            headers: getHeaders()
        });

        if (!resp || resp.statusCode !== 200) {
            throw new Error(`请求失败: HTTP ${resp?.statusCode || '未知'}`);
        }

        return parseVideoList(Widget.html.load(resp.data));
    } catch (error) {
        console.error("[91Porn] 视频列表加载失败:", error);
        return [];
    }
}

// 核心业务：搜索视频 (全局与局部共用)
async function searchVideos(params = {}) {
    const keyword = (params.keyword || params.query || "").trim();
    if (!keyword) throw new Error("请输入搜索描述");

    const baseUrl = params?.base_url ?? DEFAULT_BASE_URL;
    
    try {
        const resp = await Widget.http.get(`${baseUrl}/search_result.php?search_id=${encodeURIComponent(keyword)}`, {
            headers: getHeaders()
        });

        if (!resp || resp.statusCode !== 200) {
            throw new Error(`搜索请求失败: HTTP ${resp?.statusCode || '未知'}`);
        }

        return parseVideoList(Widget.html.load(resp.data));
    } catch (error) {
        console.error("[91Porn] 视频搜索失败:", error);
        return [];
    }
}

// 核心业务：加载详情直链
async function loadDetail(url) {
    try {
        const resp = await Widget.http.get(url, {
            headers: getHeaders()
        });

        if (!resp || resp.statusCode !== 200) {
            throw new Error(`请求失败: HTTP ${resp?.statusCode || '未知'}`);
        }

        const $ = Widget.html.load(resp.data);
        const htmlContent = resp.data;
        
        let videoUrl = '';
        const match = htmlContent.match(/strencode2\("([^"]+)"\)/);
        
        if (match && match[1]) {
            try {
                const decodedScript = decodeURIComponent(match[1]);
                const sourceMatch = decodedScript.match(/src='([^']+)'/);
                if (sourceMatch && sourceMatch[1]) {
                    videoUrl = sourceMatch[1];
                }
            } catch (e) {
                console.error("解密视频源失败:", e);
            }
        }

        if (!videoUrl) {
            throw new Error("未找到视频资源");
        }

        const player = $('#player_one');
        const result = {
            id: url,
            type: 'detail',
            mediaType: 'movie',
            link: url,
            title: $('#videodetails h4').first().text().trim(),
            backdropPath: player.attr('poster') || '',
            videoUrl
        };

        const duration = $('#useraction .info:contains("时长") .video-info-span').text().trim();
        if (duration) result.durationText = duration;

        const releaseDate = $('.title-yakov').first().text().trim();
        if (releaseDate) result.releaseDate = releaseDate;

        const rawDesc = $('#v_desc').html()?.replace(/<br\s*\/?>/gi, '\n') || '';
        const description = Widget.html.load(rawDesc).text().trim();
        if (description) result.description = description;

        result.childItems = [];
        $('.well').each((_, el) => {
            const $el = $(el);
            const link = $el.find('a').attr('href');
            if (!link) return;

            result.childItems.push({
                id: link,
                type: 'url',
                mediaType: 'movie',
                link,
                title: $el.find('.video-title').text().trim(),
                durationText: $el.find('.duration').text().trim(),
                backdropPath: $el.find('.img-responsive').attr('src')
            });
        });

        return result;
    } catch (error) {
        console.error("[91Porn] 视频详情加载失败:", error);
        return null;
    }
}
