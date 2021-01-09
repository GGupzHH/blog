<template>
  <div>
    <NavigationChunk :routerInfo="jsRouterInfo">JavaScript</NavigationChunk>
  </div>
</template>

<script>
const jsContext = require.context( './js/', false, /.md$/)
  
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
      jsRouterInfo: routeInfo(jsContext, 'js')
    }
  }
}
</script>
