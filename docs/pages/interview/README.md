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
import { InitRouter } from '../../utils/pagesInitRouter.js'

const jsContext = require.context( './JavaScript基础知识/', false, /.md$/)
const vueContext = require.context( './JavaScript进阶知识/', false, /.md$/)

export default {
  name: "GGupzHHDocument1",
  data () {
    return {
      jsRouterInfo: InitRouter(jsContext, 'JavaScript基础知识'),
      vueRouterInfo: InitRouter(vueContext, 'JavaScript进阶知识')
    }
  }
}
</script>
