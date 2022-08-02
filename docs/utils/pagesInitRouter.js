/**
 * @routerMapping 文件夹映射关系
 * @folder        文件夹名称
 * @returns       需要渲染的HTML
 * */
export function InitRouter(fileChildList, folder) {
  // 获取文件目录映射关系
  const routerMapping = setRouterFileMapping(fileChildList)
  // 获取对应文件夹的文件列表
  const keys = routerMapping[folder]

  return keys && keys.map(filePathName => {
    // 去除文件后缀，获取文件名
    const fileName = filePathName.slice(0, filePathName.lastIndexOf('.'))
    const path = `./${folder}/${fileName}.html`
    return { path, fileName }
  })
}

/**
 * @contextFiles 文件夹目录所有md文件列表
 * @returns      文件夹和文件对应关系 
 * */
export const setRouterFileMapping = (contextFiles) => {
  // 获取文件夹下所有md文件列表
  const keys = contextFiles.keys()
  // 去掉最外层组件md文件
  const componentIndex = keys.indexOf('./README.md')
  const contextChildeFilesPath = keys.splice(componentIndex, 1) && keys
  // 声明映射对象
  const routerFileMapping = {}

  // 遍历文件列表，将文件夹和文件对应
  contextChildeFilesPath.forEach(filePath => {
    const parentFileName = filePath.split('/')[1]
    const childFileName = filePath.split('/')[2]

    if (routerFileMapping[parentFileName]) {
      routerFileMapping[parentFileName].push(childFileName)
    } else {
      routerFileMapping[parentFileName] = []
      routerFileMapping[parentFileName].push(childFileName)
    }
  })
  return routerFileMapping
}