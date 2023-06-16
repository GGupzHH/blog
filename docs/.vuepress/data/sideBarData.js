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
      },
      {
        title: '深入浅出-Vite',
        folder: '深入浅出-Vite',
      }
    ]
  },
  // 知识就是力量
  {
    curryUri: '/pages/knowledge',
    sideBarInfo: [
      // {
      //   title: 'JavaScript篇',
      //   folder: 'javascript' ,
      // },
      {
        title: 'TypeScript篇',
        folder: 'ts' ,
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
        title: 'Nest篇',
        folder: 'nest' ,
      },
      {
        title: 'Dart篇',
        folder: 'dart' ,
      },
      {
        title: 'Flutter篇',
        folder: 'flutter' ,
      },
      {
        title: 'Python篇',
        folder: 'python',
      },
      {
        title: '网络篇',
        folder: 'network',
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
      },
      { 
        title: '通用', 
        folder: 'general',
      },
    ]
  },
  // 进阶·博文
  {
    curryUri: '/pages/document',
    sideBarInfo: [
      {
        title: 'HTML相关',
        folder: 'html',
      },
      {
        title: 'Css相关',
        folder: 'css',
      },
      {
        title: 'JavaScript相关',
        folder: 'js',
      },
      {
        title: 'TypeScript相关',
        folder: 'ts',
      },
      {
        title: 'Vue相关',
        folder: 'vue',
      },
      {
        title: 'Flutter相关',
        folder: 'flutter',
      },
      {
        title: '数据结构相关',
        folder: 'structure',
      },
      {
        title: '算法相关',
        folder: 'algorithm',
      },
      {
        title: 'Git相关',
        folder: 'git' ,
      },
      {
        title: '命令行相关',
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
      {
        title: 'GitHub相关篇',
        folder: 'github' ,
      },
      {
        title: '其他',
        folder: 'other' ,
      },
    ]
  }
]

module.exports = {
  sideBarConfig,
}
