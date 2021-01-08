<template>
  <div>
    <NavigationChunk :routerInfo="jsApiRouterInfo">JavaScript-API</NavigationChunk>
    <NavigationChunk :routerInfo="jsRouterInfo">JavaScript知识点</NavigationChunk>
  </div>
</template>

<script>
const jsContext = require.context( './js/', false, /.md$/)
const jsApiContext = require.context( './01-js-api/', false, /.md$/)
  
function routeInfo(context, folder) {
  const keys = context.keys()
  return keys.map(item => {
    const fileName = item.split('/')[1].split('.')[0]
    const path = `./${folder}/${fileName}.html`
    return { path, fileName }
  })
}

export default {
  name: "GGupzHHKnowledge",
  data () {
    return {
      jsApiRouterInfo: routeInfo(jsApiContext, './01-js-api/'),
      jsRouterInfo: routeInfo(jsContext, 'js')
    }
  }
}
</script>
