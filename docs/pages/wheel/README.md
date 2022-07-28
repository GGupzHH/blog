<template>
  <div>
    <NavigationChunk :routerInfo="AxiosRouterInfo">Axios配置</NavigationChunk>
  </div>
</template>

<script>
import { InitRouter } from '../../utils/pagesInitRouter.js'

const AxiosContext = require.context( './axios/', false, /.md$/)

export default {
  name: "GGupzHHWheel",
  data () {
    return {
      AxiosRouterInfo: InitRouter(AxiosContext, 'Axios')
    }
  }
}
</script>
