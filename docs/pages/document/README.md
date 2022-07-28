<template>
  <div>
    <NavigationChunk :routerInfo="jsRouterInfo">JavaScript博文</NavigationChunk>
    <NavigationChunk :routerInfo="vueRouterInfo">Vue源码剖析</NavigationChunk>
  </div>
</template>

<script>
import { InitRouter } from '../../utils/pagesInitRouter.js'
const jsContext = require.context( './js/', false, /.md$/)
const vueContext = require.context( './vue/', false, /.md$/)
  
export default {
  name: "GGupzHHDocument",
  data () {
    return {
      jsRouterInfo: InitRouter(jsContext, 'js'),
      vueRouterInfo: InitRouter(vueContext, 'vue')
    }
  }
}
</script>
