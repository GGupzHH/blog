const { sideBarFilter } = require('./utils')

const sideBarConfig = [
  // 前端面试之道
  {
    curryUri: '/pages/interview',
    sideBarInfo: [
      { title: 'JavaScript基础知识', folder: 'JavaScript基础知识' },
      { title: 'JavaScript进阶知识', folder: 'JavaScript进阶知识' },
    ]
  },
  // 知识就是力量
  {
    curryUri: '/pages/knowledge',
    sideBarInfo: [
      { title: 'JavaScript-疑难杂症', folder: '01-js-疑难杂症' },
      { title: 'JavaScript-数组&对象', folder: '02-js-数组&对象' },
      { title: 'JavaScript-异步编程', folder: '03-js-异步编程' },
      { title: 'JavaScript-引擎', folder: '04-js-引擎' },
    ]
  },
  // 工具·轮子
  {
    curryUri: '/pages/wheel',
    sideBarInfo: [
      { title: 'Axios', folder: 'axios' }
    ]
  },
  // Vue源码分析
  {
    curryUri: '/pages/analysis',
    sideBarInfo: [
      { title: 'Vue2源码剖析', folder: 'vue2' },
      { title: 'Vue3源码剖析', folder: 'vue3' }
    ]
  },
  // 进阶·博文
  {
    curryUri: '/pages/document',
    sideBarInfo: [
      { title: 'JavaScript', folder: 'js' },
      { title: 'Vue源码剖析', folder: 'vue' }
    ]
  }
]

const sideBarData = sideBarFilter(sideBarConfig)

module.exports = {
  sideBarData
}