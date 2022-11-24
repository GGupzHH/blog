const { navBarData } = require('./data/navBarData')
const { sideBarConfig } = require('./data/sideBarData')
const { sideBarFilter } = require('./data/utils')

module.exports = {
  base: '/blog/',
  // 页面标题
  title: 'Smoothness',
  // 网页描述
  description: 'Life can go smoothly...',
  head: [
    ["link", { rel: "stylesheet", href: "https://cdn.bootcdn.net/ajax/libs/font-awesome/6.2.1/css/all.css" }],
  ],
  // 端口号
  extraWatchFiles: [
    '.vuepress/data/*.js',
    'pages'
  ],
  // 默认语言
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress'
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    search: true,
    searchMaxSuggestions: 10,
    // 404
    noFoundPageByTencent: false,
    // 移动端优化
    head: [
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    // 作者
    author: 'Smoothness',
    // 头像
    authorAvatar: '/avatar.jpg',
    // 子侧边栏
    subSidebar: 'auto',
    
    activeHeaderLinks: false, // 默认值：true
    smoothScroll: true, // 启动页面滚动
    lastUpdated: '最后更新时间', // 最后更新时间
    sidebar: 'auto', // 所有页面自动生成侧边栏
    repo: 'https://github.com/GGupzHH/blog', // 仓库地址
    repoLabel: 'GitHub',  // 仓库链接label
    // 编辑链接
    // editLinks: true,
    // 编辑链接label
    // editLinkText: '编辑此页',
    nav: [
      ...navBarData,
      { text: '精彩瞬间', link: '/timeline/', icon: 'fa-solid fa-camera-retro' }
    ],
    sidebar: sideBarFilter(sideBarConfig),
  },
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
      }
    }
  }
}