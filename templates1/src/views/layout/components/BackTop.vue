<template>
  <el-backtop :target="target"></el-backtop>
</template>

<script>
export default {
  name: 'BackTop',
  props: {
    target: {
      type: String,
      default: '',
    },
  },
}
</script>
