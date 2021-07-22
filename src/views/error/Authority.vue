<template>
  <div class="authority-wrap">
    <h2>权限</h2>
    <p>抱歉！您访问的页面<em>暂未开通权限，请联系管理员开通</em> ...</p>
  </div>
</template>

<script>
export default {
  name: 'errorAuthority',
}
</script>

<style lang="stylus" scoped>
.authority-wrap {
  padding 20px 0 40px 20px
  background #fff
  h2{
    font-size 18px
    color #333
    margin-bottom 10px
  }
  p{
    color #666
  }
  em{
    color #e60202
  }
}
</style>
