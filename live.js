// @name 廿二日自用-live

WidgetMetadata = {
    id: "liveTao",
    title: "直播源",
    detailCacheDuration: 60,
    modules: [
        {
            title: "直播源",
            requiresWebView: false,
            functionName: "loadLiveItems",
            cacheDuration: 21600,
            params: [
                {
                    name: "url",
                    title: "订阅链接",
                    type: "input",
                    description: "输入直播订阅链接地址",
                    placeholders: [
                        {
                            title: "Kimentanm",
                            value: "https://raw.githubusercontent.com/Kimentanm/aptv/master/m3u/iptv.m3u"
                        },
                        {
                            title: "网络直播",
                            value: "https://tv.iill.top/m3u/Live"
                        },
                        {
                            title: "smart(港澳台)",
                            value: "https://smart.pendy.dpdns.org/m3u/merged_judy.m3u"
                        },
                        {
                            title: "YanG-Gather1",
                            value: "https://tv.iill.top/m3u/Gather"
                        },
                        {
                            title: "YanG-Gather2",
                            value: "https://raw.githubusercontent.com/YanG-1989/m3u/main/Gather.m3u"
                        },
                        {
                            title: "suxuang",
                            value: "https://bit.ly/suxuang-v4"
                        },
                        {
                            title: "PlutoTV-美国",
                            value: "https://raw.githubusercontent.com/HelmerLuzo/PlutoTV_HL/refs/heads/main/tv/m3u/PlutoTV_tv_US.m3u"
                        },
                        {
                            title: "PlutoTV-墨西哥",
                            value: "https://raw.githubusercontent.com/HelmerLuzo/PlutoTV_HL/refs/heads/main/tv/m3u/PlutoTV_tv_MX.m3u"
                        },
                        {
                            title: "PlutoTV-意大利",
                            value: "https://raw.githubusercontent.com/HelmerLuzo/PlutoTV_HL/refs/heads/main/tv/m3u/PlutoTV_tv_IT.m3u"
                        },
                        {
                            title: "PlutoTV-英国",
                            value: "https://raw.githubusercontent.com/HelmerLuzo/PlutoTV_HL/refs/heads/main/tv/m3u/PlutoTV_tv_GB.m3u"
                        },
                        {
                            title: "PlutoTV-法国",
                            value: "https://raw.githubusercontent.com/HelmerLuzo/PlutoTV_HL/refs/heads/main/tv/m3u/PlutoTV_tv_FR.m3u"
                        },
                        {
                            title: "PlutoTV-西班牙",
                            value: "https://raw.githubusercontent.com/HelmerLuzo/PlutoTV_HL/refs/heads/main/tv/m3u/PlutoTV_tv_ES.m3u"
                        },
                        {
                            title: "PlutoTV-德国",
                            value: "https://raw.githubusercontent.com/HelmerLuzo/PlutoTV_HL/refs/heads/main/tv/m3u/PlutoTV_tv_DE.m3u"
                        },
                        {
                            title: "PlutoTV-智利",
                            value: "https://raw.githubusercontent.com/HelmerLuzo/PlutoTV_HL/refs/heads/main/tv/m3u/PlutoTV_tv_CL.m3u"
                        },
                        {
                            title: "PlutoTV-加拿大",
                            value: "https://raw.githubusercontent.com/HelmerLuzo/PlutoTV_HL/refs/heads/main/tv/m3u/PlutoTV_tv_CA.m3u"
                        },
                        {
                            title: "PlutoTV-巴西",
                            value: "https://raw.githubusercontent.com/HelmerLuzo/PlutoTV_HL/refs/heads/main/tv/m3u/PlutoTV_tv_BR.m3u"
                        },
                        {
                            title: "PlutoTV-阿根廷",
                            value: "https://raw.githubusercontent.com/HelmerLuzo/PlutoTV_HL/refs/heads/main/tv/m3u/PlutoTV_tv_AR.m3u"
                        },
                        {
                            title: "全球",
                            value: "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlist.m3u8"
                        },
                        {
                            title: "IPTV1",
                            value: "https://raw.githubusercontent.com/skddyj/iptv/main/IPTV.m3u"
                        },
                        {
                            title: "IPTV2-CN",
                            value: "https://iptv-org.github.io/iptv/countries/cn.m3u"
                        },
                        {
                            title: "IPTV3",
                            value: "https://cdn.jsdelivr.net/gh/Guovin/iptv-api@gd/output/result.m3u"
                        },
                        {
                            title: "安徽移动",
                            value: "https://itv.aptv.app/china-iptv/ahyd.m3u"
                        },
                        {
                            title: "移动咪咕",
                            value: "https://raw.githubusercontent.com/YanG-1989/m3u/refs/heads/main/Migu.m3u"
                        },
                        {
                            title: "综艺直播",
                            value: "https://mgtv.ottiptv.cc/mglist.m3u?url=https://mgtv.ottiptv.cc"
                        }
                    ]
                },
                {
                    name: "group_filter",
                    title: "按组关键字过滤(选填)，如央视",
                    type: "input",
                    description: "输入组关键字，如央视，会筛选出所有group-title中包含央视的频道",
                    placeholders: [
                        {
                            title: "全部",
                            value: "",
                        },
                        {
                            title: "央视&卫视",
                            value: ".*(央视|卫视).*",
                        },
                        {
                            title: "央视",
                            value: "央视",
                        },
                        {
                            title: "卫视",
                            value: "卫视",
                        },
                    ]
                },
                {
                    name: "name_filter",
                    title: "按频道名关键字过滤(选填)，如卫视",
                    type: "input",
                    description: "输入频道名关键字过滤(选填)，如卫视",
                    placeholders: [
                        {
                            title: "全部",
                            value: "",
                        },
                        {
                            title: "B站&虎牙&斗鱼",
                            value: ".*(B站|虎牙|斗鱼).*",
                        },
                        {
                            title: "英雄联盟",
                            value: "英雄联盟",
                        },
                        {
                            title: "王者荣耀",
                            value: "王者荣耀",
                        },
                        {
                            title: "绝地求生",
                            value: "绝地求生",
                        },
                        {
                            title: "和平精英",
                            value: "和平精英",
                        },
                    ]
                },
                {
                    name: "bg_color",
                    title: "台标背景色",
                    type: "input",
                    description: "支持RGB颜色，如DCDCDC",
                    value: "DCDCDC",
                    placeholders: [
                        {
                            title: "亮灰色",
                            value: "DCDCDC",
                        },
                        {
                            title: "钢蓝",
                            value: "4682B4",
                        },
                        {
                            title: "浅海洋蓝",
                            value: "20B2AA",
                        },
                        {
                            title: "浅粉红",
                            value: "FFB6C1",
                        },
                        {
                            title: "小麦色",
                            value: "F5DEB3",
                        },
                    ]
                },
                {
                    name: "direction",
                    title: "台标优先显示方向",
                    type: "enumeration",
                    description: "台标优先显示方向，默认为竖向",
                    value: "V",
                    enumOptions: [
                        {title: "竖向", value: "V"},
                        {title: "横向", value: "H"},
                    ]
                },
            ],
        },
    ],
    version: "2.1",
    requiredVersion: "0.0.1",
    description: "解析直播订阅链接",
    author: "廿二日",
};


async function loadLiveItems(params = {}) {
    try {
        const url = params.url || "";
        const groupFilter = params.group_filter || "";
        const nameFilter = params.name_filter || "";
        const bgColor = params.bg_color || "";
        const direction = params.direction || "";

        if (!url) {
            throw new Error("必须提供电视直播订阅链接");
        }

        const response = await fetchM3UContent(url);
        if (!response) return [];

        const iconList = await fetchIconList();
        const items = parseM3UContent(response, iconList, bgColor, direction);

        let groupRegex = null;
        let nameRegex = null;

        if (groupFilter) {
            try {
                groupRegex = new RegExp(groupFilter, 'i');
            } catch (e) {
                groupRegex = null;
            }
        }

        if (nameFilter) {
            try {
                nameRegex = new RegExp(nameFilter, 'i');
            } catch (e) {
                nameRegex = null;
            }
        }

        const filteredItems = items.filter(item => {
            let groupMatch = !groupFilter;
            if (groupFilter) {
                if (groupRegex) {
                     groupMatch = groupRegex.test(item.metadata?.group || '');
                } else {
                     groupMatch = (item.metadata?.group?.toLowerCase() || '').includes(groupFilter.toLowerCase());
                }
            }

            let nameMatch = !nameFilter;
            if (nameFilter) {
                if (nameRegex) {
                    nameMatch = nameRegex.test(item.title || '');
                } else {
                    nameMatch = (item.title?.toLowerCase() || '').includes(nameFilter.toLowerCase());
                }
            }

            return groupMatch && nameMatch;
        });

        const totalCount = filteredItems.length;

        return filteredItems.map((item, index) => ({
            ...item,
            title: `${item.title} (${index + 1}/${totalCount})`
        }));
    } catch (error) {
        return [];
    }
}


async function fetchM3UContent(url) {
    try {
        const response = await Widget.http.get(url, {
            headers: {
                'User-Agent': 'AptvPlayer/1.4.6',
            }
        });
        if (response.data && response.data.includes("#EXTINF")) {
            return response.data;
        }
        return null;
    } catch (error) {
        return null;
    }
}


async function fetchIconList() {
    try {
        const response = await Widget.http.get("https://api.github.com/repos/fanmingming/live/contents/tv", {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        });
        return response.data.map(item => item.name.replace('.png', ''));
    } catch (error) {
        return [];
    }
}


function parseM3UContent(content, iconList, bgColor, direction) {
    if (!content || !content.trim()) return [];

    const lines = content.split(/\r?\n/);
    const items = [];
    let currentItem = null;

    const extInfRegex = /^#EXTINF:(-?\d+)(.*),(.*)$/;
    const groupRegex = /group-title="([^"]+)"/;
    const tvgNameRegex = /tvg-name="([^"]+)"/;
    const tvgLogoRegex = /tvg-logo="([^"]+)"/;
    const tvgIdRegex = /tvg-id="([^"]+)"/;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (!line || line.startsWith('#EXTM3U')) continue;

        if (line.startsWith('#EXTINF:')) {
            const match = line.match(extInfRegex);
            if (match) {
                const duration = match[1];
                const attributes = match[2];
                const title = match[3].trim();

                const groupMatch = attributes.match(groupRegex);
                const tvgNameMatch = attributes.match(tvgNameRegex);
                const tvgLogoMatch = attributes.match(tvgLogoRegex);
                const tvgIdMatch = attributes.match(tvgIdRegex);

                const group = groupMatch ? groupMatch[1] : '未分类';
                const tvgName = tvgNameMatch ? tvgNameMatch[1] : title;
                const cover = tvgLogoMatch ? tvgLogoMatch[1] : '';
                const tvgId = tvgIdMatch ? tvgIdMatch[1] : '';

                currentItem = {
                    duration,
                    title,
                    group,
                    tvgName,
                    tvgId,
                    cover,
                    url: null
                };
            }
        }
        else if (currentItem && line && !line.startsWith('#')) {
            const url = line;
            if (!bgColor) bgColor = "DCDCDC";
            
            const posterIcon = iconList.includes(currentItem.title)
                ? `https://ik.imagekit.io/huangxd/tr:l-image,i-transparent.png,w-bw_mul_3.5,h-bh_mul_3,bg-${bgColor},lfo-center,l-image,i-${currentItem.title}.png,lfo-center,l-end,l-end/${currentItem.title}.png`
                : "";
            
            const backdropIcon = iconList.includes(currentItem.title)
                ? `https://ik.imagekit.io/huangxd/tr:l-image,i-transparent.png,w-bw_mul_1.5,h-bh_mul_4,bg-${bgColor},lfo-center,l-image,i-${currentItem.title}.png,lfo-center,l-end,l-end/${currentItem.title}.png`
                : "";

            const item = {
                id: url,
                type: "url",
                title: currentItem.title,
                backdropPath: backdropIcon || currentItem.cover || "https://i.miji.bid/2025/05/17/c4a0703b68a4d2313a27937d82b72b6a.png",
                previewUrl: "", 
                link: url,
                playerType: "system",
                metadata: {
                    group: currentItem.group,
                    tvgName: currentItem.tvgName,
                    tvgId: currentItem.tvgId
                }
            };
            if (!direction || direction === "V") {
                item['posterPath'] = posterIcon || currentItem.cover || "https://i.miji.bid/2025/05/17/343e3416757775e312197588340fc0d3.png";
            }

            items.push(item);
            currentItem = null; 
        }
    }

    return items;
}
