<template>
  <div>
    <NavigationChunk 
      v-for="(knowledgeItem, knowledgeIndex) in knowledge" 
      :key="knowledgeIndex" 
      :routerInfo="InitRouter(knowledgeItem.router, knowledgeItem.folder)"
    >
      {{ knowledgeItem.title }}
    </NavigationChunk>
  </div>
</template>

<script>
import { InitRouter } from '../../utils/pagesInitRouter.js'
const { sideBarConfig } = require('../../.vuepress/data/sideBarData.js')

export default {
  name: "GGupzHHKnowledge",
  data () {
    return {
      knowledge: sideBarConfig[1].sideBarInfo,
      InitRouter
    }
  }
}
</script>
