export function InitRouter(context, folder) {
  const keys = context.keys()
  return keys.map(filePath => {
    const filePathName = filePath.split('/')[1]
    const fileName = filePathName.slice(0, filePathName.lastIndexOf('.'))
    const path = `./${folder}/${fileName}.html`
    return { path, fileName }
  })
}
