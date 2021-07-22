<template>
  <el-container class="layout-container" direction="vertical">
    <LayoutHeader></LayoutHeader>
    <el-scrollbar class="main-scrollbar">
      <el-main>
        <router-view></router-view>
      </el-main>
      <BackTop target=".main-scrollbar .el-scrollbar__wrap"></BackTop>
    </el-scrollbar>
  </el-container>
</template>
<script>
import LayoutHeader from '@/views/layout/components/LayoutHeader'
import BackTop from '@/views/layout/components/BackTop'
export default {
  name: 'layout',
  components: { LayoutHeader, BackTop },
  data() {
    return {
    }
  },
}
</script>

<style lang="stylus" scoped>
.layout-container{
  .main-scrollbar {
    height calc(100vh - 60px)
    width 100%
    background #f1f3f8
  }
}
</style>
