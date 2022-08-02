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

const sideBarFilter = sideBarConfig => {
  const sideBarData = {}
  sideBarConfig.forEach(sideBarItem => {
    sideBarData[sideBarItem.curryUri + '/'] = sideBarFunc(sideBarItem.sideBarInfo, curry(fslist)(path.resolve(__dirname, '../..' + sideBarItem.curryUri)))
  })
  return sideBarData
}

module.exports = {
  sideBarFilter
}
