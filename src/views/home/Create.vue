<template>
  <div class="main-page">
    <!-- <el-form ref="createProduct" :model="createProduct" :rules="createProductRules" label-width="180px" disabled size="mini" label-suffix=":"> -->
    <el-form ref="createProduct" :model="createProduct" :rules="createProductRules" label-width="180px" label-suffix=":">
      <el-form-item label="产品名称" prop="proName">
        <el-input v-model="createProduct.proName" class="inputWidth400"></el-input>
      </el-form-item>
      <el-form-item label="产品标识ID">
        <el-radio-group v-model="createProduct.prdId" @change="handleRadio">
          <el-radio label="sys">系统生成</el-radio>
          <el-radio label="defi">自定义</el-radio>
        </el-radio-group>
        <el-input v-model="createProduct.defiNum" size="mini" class="defiNumStyle" v-if="createProduct.prdId==='defi'"></el-input>
      </el-form-item>
      <el-form-item label="描述说明" prop="desc">
        <el-input v-model="createProduct.desc" class="inputWidth400"></el-input>
      </el-form-item>
      <el-form-item label="计算规则或模型" prop="rule">
        <el-select v-model="createProduct.rule">
          <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
        <span style="margin: 6px">或</span>
        <el-button type="text" disabled>本地添加</el-button>
      </el-form-item>
      <el-form-item label="外部申请数据" prop="applyData">
        <el-select v-model="createProduct.applyData">
          <el-option v-for="item in applyDataOptions" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品类型" prop="proType">
        <el-select v-model="createProduct.proType">
          <el-option v-for="item in proTypeOptions" :label="item.label" :value="item.value" :key="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="接口地址" prop="url">
        <el-input v-model="createProduct.url" class="inputWidth400"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      createProduct: {
        proName: '', // 产品名称
        prdId: '', // 产品标识ID
        desc: '', // 描述说明
        defiNum: '', // 产品标识ID- 自定义
        rule: '', // 计算规则或模型
        applyData: '', // 外部申请数据
        proType: '', // 产品类型
        url: '', // 接口地址
      },
      createProductRules: {
        proName: [
          { required: true, message: '请输入产品名称', trigger: 'change' },
        ],
        prdId: [
          { required: true, message: '请输入产品标识ID', trigger: 'change' },
        ],
        desc: [
          { required: true, message: '请输入产品标识ID', trigger: 'change' },
        ],
        defiNum: [
          { required: true, message: '请输入产品标识ID', trigger: 'change' },
        ],
      },
      // 计算规则或模型options
      options: [
        { value: '0', label: '请选择模型' },
        { value: '1', label: '个人逾期模型' },
        { value: '2', label: '企业逾期模型' },
        { value: '3', label: '信用评分模型' },
      ],
      // 外部申请数据options
      applyDataOptions: [
        { value: '0', label: '请选择模型' },
        { value: '1', label: '个人逾期模型' },
        { value: '2', label: '企业逾期模型' },
        { value: '3', label: '信用评分模型' },
      ],
      // 产品类型options
      proTypeOptions: [
        { value: '0', label: '请选择模型' },
        { value: '1', label: '联邦建模-本地使用' },
      ],
    }
  },
  created() {
  },
  methods: {
    handleRadio(val) {
      console.log(val)
    }
  },
}
</script>

<style lang="stylus" scoped>
.main-page{
  padding 20px
  .defiNumStyle {
    width 200px
    margin-left 10px
  }
  .inputWidth400 {
    width 400px
  }
}
</style>
