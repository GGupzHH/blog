<template>
  <div>
    <NavigationChunk :routerInfo="AxiosRouterInfo">Axios配置</NavigationChunk>
  </div>
</template>

<script>
const AxiosContext = require.context( './axios/', false, /.md$/)
  
function routeInfo(context, folder) {
  const keys = context.keys()
  return keys.map(filePath => {
    const filePathName = filePath.split('/')[1]
    const fileName = filePathName.slice(0, filePathName.lastIndexOf('.') + 1)
    const path = `./${folder}/${fileName}.html`
    return { path, fileName }
  })
}

export default {
  name: "GGupzHHWheel",
  data () {
    return {
      AxiosRouterInfo: routeInfo(AxiosContext, 'Axios')
    }
  }
}
</script>
