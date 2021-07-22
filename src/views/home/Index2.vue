<template>
  <div class="main-page">
    <h1>在线产品列表</h1>
    <el-button type="primary" size="mini">添加</el-button>
    <el-table :data="dataSource">
      <el-table-column
        v-for="item in dataSourceColumn"
        :key="item.id"
        :prop="item.prop"
        :label="item.label"
        :width="item.width">
      </el-table-column>
      <el-table-column label="操作">
        <template >
          <el-button type="text">详情</el-button>
          <el-button type="text">在线测试</el-button>
          <el-button type="text">删除</el-button>
          <!-- <div>{{scope.row[item.prop]}}</div> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      dataSource: [
        { name: '通用分服务', id: '20190816191911', type: '联邦建模', entry: '模型名称', data: '黑产反欺诈', gmtTime: '2019-11-25 11:00:00', status: '使用中' },
      ],
      dataSourceColumn: [
        { label: '产品名称', prop: 'name', width: '' },
        { label: '产品标识ID', prop: 'id', width: '' },
        { label: '产品类型', prop: 'type', width: '' },
        { label: '计算实体(模型)', prop: 'entry', width: '' },
        { label: '合作数据', prop: 'data', width: '' },
        { label: '更新时间', prop: 'gmtTime', width: '' },
        { label: '状态', prop: 'status', width: '' },
      ],
    }
  },
  created() {
  },
}
</script>

<style lang="stylus" scoped>
.main-page{
}
</style>
