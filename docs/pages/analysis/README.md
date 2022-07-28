<template>
  <div>
    <NavigationChunk :routerInfo="vue2">Vue2</NavigationChunk>
    <NavigationChunk :routerInfo="vue3">Vue3</NavigationChunk>
  </div>
</template>

<script>
import { InitRouter } from '../../utils/pagesInitRouter.js'

const vue2Context = require.context( './vue2/', false, /.md$/)
const vue3Context = require.context( './vue3/', false, /.md$/)

export default {
  name: "GGupzHHDocument2",
  data () {
    return {
      vue2: InitRouter(vue2Context, 'vue2'),
      vue3: InitRouter(vue3Context, 'vue3')
    }
  }
}
</script>
