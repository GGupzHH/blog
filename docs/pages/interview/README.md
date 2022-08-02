<template>
  <div>
    <NavigationChunk 
      v-for="(interviewItem, interviewIndex) in interview" 
      :key="interviewIndex" 
      :routerInfo="InitRouter(fileChildList, interviewItem.folder)"
    >
      {{ interviewItem.title }}
    </NavigationChunk>
  </div>
</template>

<script>
import { InitRouter } from '../../utils/pagesInitRouter.js'
const { sideBarConfig } = require('../../.vuepress/data/sideBarData.js')
const fileChildList = require.context('../../pages/interview', true, /.md$/)

export default {
  name: "Interview",
  data () {
    return {
      interview: sideBarConfig[0].sideBarInfo,
      InitRouter,
      fileChildList
    }
  }
}
</script>
