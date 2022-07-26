const { navBarData } = require('./data')
const { 
  documentSideBar,
  knowledgeSideBar,
  wheelSideBar
} = require('./data/readdir')

module.exports = {
  base: '/blog/',
  // 页面标题
  title: 'GGupzHH',
  // 网页描述
  description: '绳锯木断，水滴石穿',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  // 端口号
  port: 3000,
  extraWatchFiles: [
    '.vuepress/data/*.js',
    'pages'
  ],
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom'
  ],
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
    smoothScroll: true, // 启动页面滚动
    lastUpdated: '最后更新时间', // 最后更新时间
    sidebar: 'auto', // 所有页面自动生成侧边栏
    repo: 'https://github.com/GGupzHH/blog', // 仓库地址
    repoLabel: 'Github',  // 仓库链接label
    // 编辑链接
    // editLinks: true,
    // 编辑链接label
    // editLinkText: '编辑此页',
    nav: navBarData,
    sidebar: {
      // '/pages/interview': 
      '/pages/knowledge/': knowledgeSideBar,
      '/pages/wheel/': wheelSideBar,
      // 'pages/analysis':
      '/pages/document/': documentSideBar,
      // '/pages/': 
    }
  },
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../../images/vuepress',
        '@vue': '../../images/vue'
      }
    }
  }
}