WidgetMetadata = {
    id: '91pornTao',
    title: '91Porn',
    description: '91Porn网站聚合',
    version: "2.1.0",
    requiredVersion: '0.0.1',
    author: "廿二日",
    site: 'https://91porn.com',
    detailCacheDuration: 1,
    detail: {
        functionName: 'loadDetail'
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
                        { value: 'long', title: "10分钟以上 " },
                        { value: 'longer', title: "20分钟以上 " },
                        { value: 'hd', title: "高清" },
                        { value: 'mf', title: "收藏最多" }
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

const DEFAULT_HEADERS = {
    'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7'
};

class WidgetAPI {
    constructor(getDefaultOptions) {
        this.getDefaultOptions = getDefaultOptions;
    }

    async get(url, options) {
        let baseOptions = { headers: DEFAULT_HEADERS };
        if (this.getDefaultOptions) {
            try {
                const defaultOptions = await this.getDefaultOptions();
                baseOptions = { 
                    ...baseOptions, 
                    ...defaultOptions, 
                    headers: { ...baseOptions.headers, ...defaultOptions?.headers } 
                };
            } catch (error) {
                console.warn("获取默认配置失败，使用基础配置:", error);
            }
        }
        
        const finalOptions = { 
            ...baseOptions, 
            ...options, 
            headers: { ...baseOptions.headers, ...options?.headers } 
        };

        try {
            const resp = await Widget.http.get(url, finalOptions);
            if (!resp || resp.statusCode !== 200) throw new Error(`HTTP Error: ${resp?.statusCode || "Unknown"}`);
            return resp.data;
        } catch (error) {
            throw new Error(`请求失败: ${error instanceof Error ? error.message : "未知错误"}`);
        }
    }

    async getHtml(url, options) {
        const resp = await this.get(url, options);
        return Widget.html.load(resp);
    }
}

const DEFAULT_BASE_URL = 'https://91porn.com';
const widgetAPI = new WidgetAPI();

async function getList(params) {
    params.sort_by = params.sort_by || 'ori';
    params.page = params.page || 1;
    params.base_url = params.base_url || DEFAULT_BASE_URL;
    
    try {
        const $ = await widgetAPI.getHtml(`${params.base_url}/v.php?category=${params.sort_by}&viewtype=basic&page=${params.page}`);
        const list = Array.from($('.videos-text-align')).map((el) => {
            const $el = $(el);
            if ($el.closest('.col-lg-8').length > 0) return null;
            
            const link = $el.find('a').attr('href');
            if (!link) return null;
            
            const backdropPath = $el.find('.img-responsive').attr('src');
            const result = {
                id: link,
                type: 'detail',
                mediaType: 'movie',
                link,
                title: $el.find('.video-title').text().trim(),
                backdropPath,
                durationText: $el.find('.duration').text().trim() || undefined
            };

            const videoID = backdropPath?.split('/').pop()?.split('.').shift();
            if (videoID) result.previewUrl = `https://vthumb.killcovid2021.com/thumb/${videoID}.mp4`;

            const addTimeEl = $el.find('.info').filter((_, e) => $(e).text().includes("添加时间"));
            const nextSibling = addTimeEl[0]?.nextSibling;
            if (nextSibling?.textContent) result.releaseDate = nextSibling.textContent.trim();

            return result;
        });
        
        return list.filter(Boolean);
    } catch (error) {
        console.error("视频列表加载失败", error);
        return [];
    }
}

async function loadDetail(url) {
    try {
        const $ = await widgetAPI.getHtml(url);
        const player = $('#player_one');
        const script = player.find("script").text();
        const strencodeMatch = script.match(/strencode2\("(.*?)"\)/);
        
        const sourceHtml = decodeURIComponent(strencodeMatch?.[1] || '');
        const $source = Widget.html.load(sourceHtml);
        const videoUrl = $source('source').attr('src');
        if (!videoUrl) throw new Error("未找到视频资源");

        const result = {
            id: url,
            type: 'detail',
            mediaType: 'movie',
            link: url,
            title: $('#videodetails h4').first().text().trim(),
            backdropPath: player.attr('poster'),
            videoUrl,
            releaseDate: $('.title-yakov').eq(0).text() || undefined,
            description: Widget.html.load($('#v_desc').html()?.replace(/<br\s*\/?>/g, '\n') || '').text() || undefined
        };

        const duration = $('#useraction').find('.info').filter((_, el) => $(el).text().includes("时长")).find('.video-info-span').text().trim();
        if (duration) result.durationText = duration;

        result.childItems = Array.from($('.well')).map((el) => {
            const $el = $(el);
            const link = $el.find('a').attr('href');
            if (!link) return null;
            
            return {
                id: link,
                type: 'detail',
                mediaType: 'movie',
                link: link,
                title: $el.find('.video-title').text().trim(),
                durationText: $el.find('.duration').text().trim(),
                backdropPath: $el.find('.img-responsive').attr('src')
            };
        }).filter(Boolean);

        return result;
    } catch (error) {
        console.error("视频详情加载失败", error);
        return null;
    }
}
