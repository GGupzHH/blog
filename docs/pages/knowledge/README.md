<template>
  <div>
    <NavigationChunk :routerInfo="jsRouterInfo">JavaScript 深度剖析</NavigationChunk>
    <NavigationChunk :routerInfo="jsRouterInfo">JavaScript</NavigationChunk>
  </div>
</template>

<script>
const jsContext = require.context( './01-js-深度剖析/', false, /.md$/)
  
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
      jsRouterInfo: routeInfo(jsContext, '01-js-深度剖析')
    }
  }
}
</script>
