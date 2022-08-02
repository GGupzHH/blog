<template>
  <div>
    <NavigationChunk 
      v-for="(knowledgeItem, knowledgeIndex) in knowledge" 
      :key="knowledgeIndex" 
      :routerInfo="InitRouter(routerMapping, knowledgeItem.folder)"
    >
      {{ knowledgeItem.title }}
    </NavigationChunk>
  </div>
</template>

<script>
import { InitRouter, setRouterFileMapping } from '../../utils/pagesInitRouter.js'
const { curryUri, sideBarConfig } = require('../../.vuepress/data/sideBarData.js')
const fileChileList = require.context('../../pages/analysis', true, /.md$/)

export default {
  name: "GGupzHHKnowledge",
  data () {
    return {
      fileChileList,
      knowledge: sideBarConfig[3].sideBarInfo,
      InitRouter,
      routerMapping: setRouterFileMapping(fileChileList)
    }
  }
}
</script>
