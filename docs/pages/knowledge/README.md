<template>
  <div>
    <NavigationChunk 
      v-for="(knowledgeItem, knowledgeIndex) in knowledge" 
      :key="knowledgeIndex" 
      :routerInfo="InitRouter(fileChildList, knowledgeItem.folder)"
    >
      {{ knowledgeItem.title }}
    </NavigationChunk>
  </div>
</template>

<script>
import { InitRouter } from '../../utils/pagesInitRouter.js'
const { sideBarConfig } = require('../../.vuepress/data/sideBarData.js')
const fileChildList = require.context('../../pages/knowledge', true, /.md$/)

export default {
  name: "Knowledge",
  data () {
    return {
      knowledge: sideBarConfig[1].sideBarInfo,
      InitRouter,
      fileChildList
    }
  }
}
</script>
