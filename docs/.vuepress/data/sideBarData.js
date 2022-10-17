/**
 * curryUri 需要导入的文件路径
 * sideBarInfo 
 *   title 二级标题名称，需要和pages下面的文件名一致
 *   folder 二级标题对应的文件名称
 */
const sideBarConfig = [
  // 前端面试之道
  {
    curryUri: '/pages/interview',
    sideBarInfo: [
      {
        title: 'JavaScript基础知识',
        folder: 'JavaScript基础知识',
      },
      {
        title: 'JavaScript进阶知识',
        folder: 'JavaScript进阶知识',
      },
    ]
  },
  // 知识就是力量
  {
    curryUri: '/pages/knowledge',
    sideBarInfo: [
      { 
        title: 'JavaScript-疑难杂症', 
        folder: '01-js-疑难杂症',
      },
      { 
        title: 'JavaScript-数组&对象', 
        folder: '02-js-数组&对象',
      },
      { 
        title: 'JavaScript-异步编程', 
        folder: '03-js-异步编程',
      },
      { 
        title: 'JavaScript-引擎', 
        folder: '04-js-引擎',
      },
      {
        title: 'Git篇',
        folder: 'git' ,
      },
      {
        title: 'Node篇',
        folder: 'node' ,
      },
      {
        title: 'Dart&Flutter篇',
        folder: 'dart' ,
      },
      {
        title: 'Nest篇',
        folder: 'nest' ,
      }
    ]
  },
  // 工具·轮子
  {
    curryUri: '/pages/wheel',
    sideBarInfo: [
      { 
        title: 'Axios', 
        folder: 'axios',
      }
    ]
  },
  // Vue源码分析
  {
    curryUri: '/pages/analysis',
    sideBarInfo: [
      {
        title: 'Vue2源码剖析',
        folder: 'vue2',
      },
      {
        title: 'Vue3源码剖析',
        folder: 'vue3',
      }
    ]
  },
  // 进阶·博文
  {
    curryUri: '/pages/document',
    sideBarInfo: [
      {
        title: 'HTML相关篇',
        folder: 'html',
      },
      {
        title: 'Css相关篇',
        folder: 'css',
      },
      {
        title: 'JavaScript相关篇',
        folder: 'js',
      },
      {
        title: 'TypeScript相关篇',
        folder: 'ts',
      },
      {
        title: '数据结构篇',
        folder: 'structure',
      },
      {
        title: '算法篇',
        folder: 'algorithm',
      },
      {
        title: 'Vue源码剖析',
        folder: 'vue' ,
      },
      {
        title: 'Python篇',
        folder: 'python',
      },
      {
        title: '网络篇',
        folder: 'network',
      },
      {
        title: '控制台篇',
        folder: 'console' ,
      },
      {
        title: '服务器篇',
        folder: 'server' ,
      },
      {
        title: '接口相关篇',
        folder: 'api' ,
      },
    ]
  }
]

module.exports = {
  sideBarConfig,
}
