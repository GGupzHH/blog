<template>
  <div>
    <NavigationChunk 
      v-for="(analysisItem, analysisIndex) in analysis" 
      :key="analysisIndex" 
      :routerInfo="InitRouter(fileChildList, analysisItem.folder)"
    >
      {{ analysisItem.title }}
    </NavigationChunk>
  </div>
</template>

<script>
import { InitRouter } from '../../utils/pagesInitRouter.js'
const { sideBarConfig } = require('../../.vuepress/data/sideBarData.js')
const fileChildList = require.context('../../pages/analysis', true, /.md$/)

export default {
  name: "Analysis",
  data () {
    return {
      analysis: sideBarConfig[1].sideBarInfo,
      InitRouter,
      fileChildList
    }
  }
}
</script>
