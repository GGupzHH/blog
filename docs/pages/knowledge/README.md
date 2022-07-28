<template>
  <div>
    <NavigationChunk :routerInfo="jsRouterInfo_01">JavaScript-疑难杂症12</NavigationChunk>
    <NavigationChunk :routerInfo="jsRouterInfo_02">JavaScript-数组&对象</NavigationChunk>
    <NavigationChunk :routerInfo="jsRouterInfo_03">JavaScript-异步编程</NavigationChunk>
    <NavigationChunk :routerInfo="jsRouterInfo_04">JavaScript-JS 引擎</NavigationChunk>
  </div>
</template>

<script>
import { InitRouter } from '../../utils/pagesInitRouter.js'

const jsContext_01 = require.context( './01-js-疑难杂症/', false, /.md$/)
const jsContext_02 = require.context( './02-js-数组&对象/', false, /.md$/)
const jsContext_03 = require.context( './03-js-异步编程/', false, /.md$/)
const jsContext_04 = require.context( './04-js-引擎/', false, /.md$/)

export default {
  name: "GGupzHHKnowledge",
  data () {
    return {
      jsRouterInfo_01: InitRouter(jsContext_01, '01-js-疑难杂症'),
      jsRouterInfo_02: InitRouter(jsContext_02, '02-js-数组&对象'),
      jsRouterInfo_03: InitRouter(jsContext_03, '03-js-异步编程'),
      jsRouterInfo_04: InitRouter(jsContext_04, '04-js-引擎'),
    }
  }
}
</script>
