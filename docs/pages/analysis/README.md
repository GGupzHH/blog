<template>
  <div>
    <NavigationChunk :routerInfo="vue2">Vue2</NavigationChunk>
    <NavigationChunk :routerInfo="vue3">Vue3</NavigationChunk>
  </div>
</template>

<script>
const vue2Context = require.context( './vue2/', false, /.md$/)
const vue3Context = require.context( './vue3/', false, /.md$/)
  
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
  name: "GGupzHHDocument2",
  data () {
    return {
      vue2: routeInfo(vue2Context, 'vue2'),
      vue3: routeInfo(vue3Context, 'vue3')
    }
  }
}
</script>
