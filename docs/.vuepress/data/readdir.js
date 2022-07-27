const fs = require('fs')
const path = require('path')

// 读取文件，返回符合 config.js 中的数组
function fslist(filePath, folderName) {
  const fullFilePath = path.join(filePath, folderName)
  // 读取目录
  const files = fs.readdirSync(fullFilePath)
  return files.map(f => {
    const pathJoin = path.join(fullFilePath, f)
    // 是文件还是文件夹
    const stat = fs.statSync(pathJoin)
    if (stat.isFile()) {

      const fileName = f.slice(0, f.lastIndexOf('.'))
      return [ `${folderName}/${fileName}`, fileName ]
    } else {
      return fslist(pathJoin)
    }
  })
}

// 柯里化
function curry(fn, args) {
  var length = fn.length // 获取要柯里化的函数的形参总长度
  var args = args || [] // 获取当前函数在调用前的实参
  return function() {
    var _args = [...args, ...arguments] // 当前实参的集合
    if (_args.length < length) {
      return curry.call(this, fn, _args) // 递归逻辑 - 实参的长度小于形参时返回一个函数用来接收剩余参数
    } else {
      return fn.apply(this, _args) // 终止条件
    }
  }
}

function sideBarFunc(arr, fn) {
  return arr.map((item) => {
    return {
      title: item.title, 
      collapsable: false,
      children: fn(item.folder)
    }
  })
} 

// 前端面试之道
const readInterview = curry(fslist)(path.resolve(__dirname, '../../pages/interview'))
const interview = [
  { title: 'JavaScript基础知识', folder: 'JavaScript基础知识' },
  { title: 'JavaScript进阶知识', folder: 'JavaScript进阶知识' },
]

// 知识就是力量
const readKnowledge = curry(fslist)(path.resolve(__dirname, '../../pages/knowledge'))
const knowledge = [
  { title: 'JavaScript-疑难杂症', folder: '01-js-疑难杂症' },
  { title: 'JavaScript-数组&对象', folder: '02-js-数组&对象' },
  { title: 'JavaScript-异步编程', folder: '03-js-异步编程' },
  { title: 'JavaScript-引擎', folder: '04-js-引擎' },
]

// 工具·轮子
const readWheel = curry(fslist)(path.resolve(__dirname, '../../pages/wheel'))
const wheel = [
  { title: 'Axios', folder: 'axios' }
]

// Vue源码分析
const readAnalysis = curry(fslist)(path.resolve(__dirname, '../../pages/analysis'))
const analysis = [
  { title: 'Vue2源码剖析', folder: 'vue2' },
  { title: 'Vue3源码剖析', folder: 'vue3' }
]

// 进阶·博文
const readDocument = curry(fslist)(path.resolve(__dirname, '../../pages/document'))
const document = [
  { title: 'JavaScript', folder: 'js' },
  { title: 'Vue源码剖析', folder: 'vue' }
]


const sideBarData = {
  '/pages/interview/': sideBarFunc(interview, readInterview),
  '/pages/knowledge/': sideBarFunc(knowledge, readKnowledge),
  '/pages/wheel/': sideBarFunc(wheel, readWheel),
  '/pages/analysis/': sideBarFunc(analysis, readAnalysis),
  '/pages/document/': sideBarFunc(document, readDocument),
}

module.exports = {
  sideBarData
}
