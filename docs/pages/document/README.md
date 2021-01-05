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
  return keys.map(item => {
    const fileName = item.split('/')[1].split('.')[0]
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
