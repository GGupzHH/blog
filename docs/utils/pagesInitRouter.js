export function InitRouter(routerMapping, folder) {
  const keys = routerMapping[folder]
  return keys.map(filePathName => {
    const fileName = filePathName.slice(0, filePathName.lastIndexOf('.'))
    const path = `./${folder}/${fileName}.html`
    console.log({ path, fileName })
    return { path, fileName }
  })
}

export const setRouterFileMapping = (contextFiles) => {
  const keys = contextFiles.keys()
  const contextChildeFilesPath = keys.shift() && keys
  const routerFileMapping = {}

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