/**
 * curryUri 需要导入的文件路径
 * sideBarInfo 
 *   title 二级标题名称，需要和pages下面的文件名一致
 *   folder 二级标题对应的文件名称
 *   router require.context 的第一个参数只能是字面量，不能是变量,所以在这里接入
 */
console.log(require.context, 123)
const sideBarConfig = [
  // 前端面试之道
  {
    curryUri: '/pages/interview',
    sideBarInfo: [
      {
        title: 'JavaScript基础知识',
        folder: 'JavaScript基础知识',
        router: require.context('../../pages/interview/JavaScript基础知识/', false, /.md$/)
      },
      {
        title: 'JavaScript进阶知识',
        folder: 'JavaScript进阶知识',
        router: require.context('../../pages/interview/JavaScript进阶知识/', false, /.md$/)
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
        router: require.context('../../pages/knowledge/01-js-疑难杂症/', false, /.md$/)
      },
      { 
        title: 'JavaScript-数组&对象', 
        folder: '02-js-数组&对象',
        router: require.context('../../pages/knowledge/02-js-数组&对象/', false, /.md$/)
      },
      { 
        title: 'JavaScript-异步编程', 
        folder: '03-js-异步编程',
        router: require.context('../../pages/knowledge/03-js-异步编程/', false, /.md$/)
      },
      { 
        title: 'JavaScript-引擎', 
        folder: '04-js-引擎',
        router: require.context('../../pages/knowledge/04-js-引擎/', false, /.md$/)
      },
    ]
  },
  // 工具·轮子
  {
    curryUri: '/pages/wheel',
    sideBarInfo: [
      { 
        title: 'Axios', 
        folder: 'axios',
        router: require.context('../../pages/wheel/axios/', false, /.md$/)
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
        router: require.context('../../pages/analysis/vue2/', false, /.md$/)
      },
      {
        title: 'Vue3源码剖析',
        folder: 'vue3',
        router: require.context('../../pages/analysis/vue3/', false, /.md$/)
      }
    ]
  },
  // 进阶·博文
  {
    curryUri: '/pages/document',
    sideBarInfo: [
      {
        title: 'JavaScript',
        folder: 'js',
        router: require.context('../../pages/document/js/', false, /.md$/)
      },
      {
        title: 'Vue源码剖析',
        folder: 'vue' ,
        router: require.context('../../pages/document/vue/', false, /.md$/)
      }
    ]
  }
]

module.exports = {
  sideBarConfig
}
