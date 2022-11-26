<template>
  <div>
    <NavigationChunk 
      v-for="(wheelItem, wheelIndex) in wheel" 
      :key="wheelIndex" 
      :routerInfo="InitRouter(fileChildList, wheelItem.folder)"
    >
      {{ wheelItem.title }}
    </NavigationChunk>
  </div>
</template>

<script>
import { InitRouter } from '../../utils/pagesInitRouter.js'
const { sideBarConfig } = require('../../.vuepress/data/sideBarData.js')
const fileChildList = require.context('../../pages/wheel', true, /.md$/)

export default {
  name: "Wheel",
  data () {
    return {
      wheel: sideBarConfig[3].sideBarInfo,
      InitRouter,
      fileChildList
    }
  }
}
</script>
