<template>
  <el-main class="error-404-page">
    <img :src="img404"/>
  </el-main>
</template>
<script>
import img404 from '@/assets/images/404.png'

export default {
  name: 'error-404',
  data() {
    return {
      img404,
    }
  },
}
</script>
<style lang="stylus" scoped>
.error-404-page{
  img {
    margin 100px auto
    display block
    width 602px
    height 336px
  }
}
</style>
