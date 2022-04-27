<template>
  <div>
    <NavigationChunk :routerInfo="jsRouterInfo">JavaScript博文</NavigationChunk>
    <NavigationChunk :routerInfo="vueRouterInfo">Vue源码剖析</NavigationChunk>
  </div>
</template>

<script>
const jsContext = require.context( './js/', false, /.md$/)
const vueContext = require.context( './vue/', false, /.md$/)
  
function routeInfo(context, folder) {
  const keys = context.keys()
  return keys.map(filePath => {
    console.log(filePath)
    const filePathName = filePath.split('/')[1]
    const fileName = filePathName.slice(0, filePathName.lastIndexOf('.'))
    console.log(fileName)
    const path = `./${folder}/${fileName}.html`
    return { path, fileName }
  })
}

export default {
  name: "GGupzHHDocument",
  data () {
    return {
      jsRouterInfo: routeInfo(jsContext, 'js'),
      vueRouterInfo: routeInfo(vueContext, 'vue')
    }
  }
}
</script>
