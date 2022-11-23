const navBarData = [
  {
    text: 'Home',
    link: '/',
    icon: 'reco-home',
  },
  {
    text: '前端面试之道',
    link: '/pages/interview',
    icon: 'fa-book-bookmark',
    items: [
      {
        text: 'JavaScript基础知识',
        link: '/pages/interview/JavaScript%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%861.html'
      },
      {
        text: 'JavaScript进阶知识',
        link: '/pages/interview/JavaScript进阶知识/进阶知识1.html'
      },
    ]
  },
  {
    text: '知识就是力量',
    link: '/pages/knowledge/',
    icon: ''
  },
  {
    text: '工具·轮子',
    link: '/pages/wheel/',
    icon: ''
  },
  {
    text: 'Vue源码分析',
    link: '/pages/analysis/',
    icon: ''
  },
  {
    text: '进阶·博文',
    link: '/pages/document/',
    icon: ''
  }
]

module.exports = {
  navBarData,
}
