module.exports = {
    title: '陶先森de博客',
    description: '记录点滴，开源项目源码，分享经验与技术。',
    dest: 'public',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.ico'
            }
        ],
        [
            'link',
            {
                rel: 'shortcut icon',
                href: '/favicon.ico'
            }
        ],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,user-scalable=no'
            }
        ],
        [
            'meta',
            {
                name: 'keywords',
                content: 'SaintIC,staugur,Linux,DevOps,python'
            }
        ]
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    theme: 'reco',
    themeConfig: {
        nav: [
            {
                text: '首页',
                link: '/',
                icon: 'reco-home'
            },
            {
                text: '时间轴',
                link: '/timeline/',
                icon: 'reco-date'
            },
            {
                text: '站点',
                icon: 'reco-message',
                items: [
                    {
                        text: '主站',
                        link: 'https://www.saintic.com',
                        icon: 'reco-home'
                    },
                    {
                        text: '文档',
                        link: 'https://docs.saintic.com',
                        icon: 'reco-document'
                    },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/staugur',
                        icon: 'reco-github'
                    },
                    {
                        text: 'Gitee',
                        link: 'https://gitee.com/staugur',
                        icon: 'reco-mayun'
                    }
                ]
            }
        ],
        type: 'blog',
        codeTheme: 'tomorrow',
        blogConfig: {
            category: {
                location: 2,
                text: '分类'
            },
            tag: {
                location: 3,
                text: '标签'
            }
        },
        friendLink: [
            {
                title: "WangMao's Blog",
                link: 'https://blog.wangmao.me/'
            },
            {
                title: 'OOIII',
                desc: 'Change or Die',
                link: 'https://ooiii.com/'
            },
            {
                title: '木法传',
                link: 'https://www.mofazhuan.com/'
            },
            {
                title: '薛定喵君',
                link: 'http://xuedingmiao.com/'
            }
        ],
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: '最后更新',
        author: 'Hiroshi.tao',
        authorAvatar: '/avatar.png',
        // 备案
        record: '京ICP备14058611号',
        recordLink: 'http://www.beian.miit.gov.cn/',
        // 项目开始时间，只填写年份
        startYear: '2017'
    },
    markdown: {
        lineNumbers: true
    }
}
