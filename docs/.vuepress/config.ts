import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { comment } from "vuepress-plugin-comment2"


export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'zh-CN',
    title: '我家菜谱',
    description: '实用菜谱，记录美味家常菜做法。',
    
    head: [
          ['link', { rel: 'manifest', href: '/manifest.webmanifest' },],
          ['link', { rel: 'icon', href: '/images/favicon.ico' }],
          ['meta', { name: 'theme-color', content: '#3eaf7c' }],
          // ...其他标签
    ],
    
    plugins: [
        comment({
            type: 'waline',
            comment: true,
            serverURL: 'https://comment.caipu.ml',
            lang: 'zh',
            copyright: false,
            locale: {
                placeholder: '好吃你就夸夸我',
            }
        })
    ],
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.png',
        smoothScroll: true,
        navbar: [{
            text: 'Github',
            link: 'https://mapxn.ml',
        }],
        sidebarDepth: 0,
        contributors: false,
        lastUpdated: false,
        sidebar: [{
            text: '关于',
            link: '/',
            },
            {
            text: '红烧',
            link: '/Braised/',
            children: [{
                text: '红烧肉',
                link: encodeURI('/Braised/红烧肉'),
            },
            {
                text: '红烧排骨',
                link: encodeURI('/Braised/红烧排骨'),
            },
            {
                text: '红烧鱼',
                link: encodeURI('/Braised/红烧鱼'),
            },
            {
                text: '可乐鸡翅',
                link: encodeURI('/Braised/可乐鸡翅'),
            },
            ],
        },
        {
            text: '蒸',
            link: '/Steamed/',
            children: [{
                text: '清蒸鱼',
                link: encodeURI('/Steamed/清蒸鱼'),
            },
            ],
        },
        ]
    }
})