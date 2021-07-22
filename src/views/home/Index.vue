<template>
  <div class="main-page">
    <h2>需求方- 我的资源-外部资源</h2>
    <el-button-group size="mini">
      <el-button @click="handleClick">外部申请</el-button>
      <el-button>本地数据</el-button>
    </el-button-group>
    <div>
      <el-button type="primary" size="mini">去申请</el-button>
    </div>
    <div>
      <el-collapse v-model="activeNames" @change="handleChangeCollapse">
        <el-collapse-item v-for="(item, index) in collapseItem" :key="index">
          <template slot="title">
            <ul class="content">
              <li class="content-item">资源名称： {{item.sourceName}}</li>
              <li class="content-item">资源名称： {{item.status}}</li>
              <li class="content-item">资源名称： {{item.gmTime}}</li>
              <li class="content-item"><el-button type="text" size="mini">去使用</el-button></li>
            </ul>
          </template>
          <div>
            数据状态说明：
          </div>
          <div>
            匹配键(ID)信息：
          </div>
          <div>
            特征信息：
          </div>
          <div>
            支持联邦系统：
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      activeNames: [],
      collapseItem: [
        {
          title: 'KYC-身份认证(编号：data_id1301929)',
          sourceName: 'KYC-身份认证(编号：data_id1301929)',
          status: '审批中',
          gmTime: '2012-10-10 11:11:11',
        },
      ]
    }
  },
  created() {
  },
  methods: {
    handleClick(e) {
      console.log(e.target)
    },
    handleChangeCollapse() {
    },
  }
}
</script>

<style lang="stylus" scoped>
.main-page{
  height 1500px
  // width 2900px
}
.content{
  display flex
  width 100%
  list-style none
}
.content-item{
  flex-grow 1
}
</style>
