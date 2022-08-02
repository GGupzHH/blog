<template>
  <div>
    <NavigationChunk 
      v-for="(documentItem, documentIndex) in document" 
      :key="documentIndex" 
      :routerInfo="InitRouter(fileChildList, documentItem.folder)"
    >
      {{ documentItem.title }}
    </NavigationChunk>
  </div>
</template>

<script>
import { InitRouter } from '../../utils/pagesInitRouter.js'
const { sideBarConfig } = require('../../.vuepress/data/sideBarData.js')
const fileChildList = require.context('../../pages/document', true, /.md$/)

export default {
  name: "Document",
  data () {
    return {
      document: sideBarConfig[4].sideBarInfo,
      InitRouter,
      fileChildList
    }
  }
}
</script>
