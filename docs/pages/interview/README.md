<template>
  <div>
    <NavigationChunk 
      :routerInfo="jsRouterInfo"
    >
      基础知识
    </NavigationChunk>
    <NavigationChunk :routerInfo="vueRouterInfo">进阶知识</NavigationChunk>
  </div>
</template>

<script>
const jsContext = require.context( './JavaScript基础知识/', false, /.md$/)
const vueContext = require.context( './JavaScript进阶知识/', false, /.md$/)
  
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
  name: "GGupzHHDocument1",
  data () {
    return {
      jsRouterInfo: routeInfo(jsContext, 'JavaScript基础知识'),
      vueRouterInfo: routeInfo(vueContext, 'JavaScript进阶知识')
    }
  }
}
</script>
