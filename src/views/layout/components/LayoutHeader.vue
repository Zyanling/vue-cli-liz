<template>
  <el-header class="layout-header">
    <div class="logo">要素市场</div>
    <el-menu :default-active="activeIndex" class="header-menu" mode="horizontal" router>
      <template v-for="(menu, menuIndex) in getMenuList()">
        <el-submenu :index="menu.routePath" :key="menuIndex" v-if="menu.children">
          <template slot="title">{{menu.name}}</template>
          <el-menu-item :index="subMenu.routePath" v-for="(subMenu, subIndex) in menu.children" :key="subIndex">{{subMenu.name}}</el-menu-item>
        </el-submenu>
        <el-menu-item :index="menu.routePath" :key="menuIndex" v-else>{{menu.name}}</el-menu-item>
      </template>
    </el-menu>
    <el-dropdown class="setting-down">
      <span class="el-dropdown-link">
        <el-avatar size="small" :src="avatar"></el-avatar>
        <span class="user-name">王小明</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template slot="dropdown">
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-user-solid">账号中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script>
import avatar from '@/assets/images/avatar.png'
export default {
  name: 'LayoutHeader',
  data() {
    return {
      activeIndex: '1',
      avatar,
      // 运营管理平台菜单
      operationMenus: [
        {
          name: '市场资源管理',
          code: 'marketResource',
          englishName: 'Market Resource',
          routePath: '/market-resource',
          routeName: 'marketResource',
          children: [
            {
              name: '数据资源',
              code: 'dataResource',
              englishName: 'Data Resource',
              routePath: '/market-resource',
              routeName: 'dataResource',
            },
          ],
        },
        {
          name: '交易管理',
          code: 'transactionManagement',
          englishName: 'Transaction Management',
          routePath: '/transaction-management',
          routeName: 'transactionManagement',
          children: [
            {
              name: '交易订单',
              code: 'transactionOrder',
              englishName: 'Transaction Order',
              routePath: '/transaction-management',
              routeName: 'transactionOrder',
            },
          ],
        },
        {
          name: '用户管理',
          code: 'userManagement',
          englishName: 'User Management',
          routePath: '/user-management',
          routeName: 'userManagement',
          children: [
            {
              name: '用户账号',
              code: 'account',
              englishName: 'User Account',
              routePath: '/user-management/account',
              routeName: 'userAccount',
            },
            {
              name: '机构管理',
              code: 'orgManagement',
              englishName: 'Organization Management',
              routePath: '/user-management/org-management',
              routeName: 'orgManagement',
            },
          ],
        },
      ],
      // 联邦市场菜单
      marketMenus: [
        {
          name: '联邦市场',
          code: 'federalMarket',
          englishName: 'Federal Market',
          routePath: '/federal-market',
          routeName: 'federalMarket',
        },
        {
          name: '我的产品',
          code: 'myProduct',
          englishName: 'My Product',
          routePath: '/my-product',
          routeName: 'myProduct',
        },
      ],
      // 需求方菜单
      demandMenus: [
        {
          name: '我的资源',
          code: 'myResource',
          englishName: 'My Resource',
          routePath: '/my-resource',
          routeName: 'myResource',
        },
        {
          name: '联邦合作',
          code: 'federalCooperation',
          englishName: 'Federal Cooperation',
          routePath: '/federal-cooperation',
          routeName: 'federalCooperation',
          children: [
            {
              name: '在线产品',
              code: 'onlineProduct',
              englishName: 'Online Product',
              routePath: '/online-product',
              routeName: 'onlineProduct',
            },
          ],
        },
      ],
      // 提供方菜单
      providerMenus: [
        {
          name: '我的资产',
          code: 'myAssets',
          englishName: 'My Assets',
          routePath: '/my-assets',
          routeName: 'myAssets',
        },
        {
          name: '联邦合作',
          code: 'federalCooperation',
          englishName: 'Federal Cooperation',
          routePath: '/federal-cooperation',
          routeName: 'federalCooperation',
          children: [
            {
              name: '在线产品',
              code: 'onlineProduct',
              englishName: 'Online Product',
              routePath: '/online-product',
              routeName: 'onlineProduct',
            },
          ],
        },
      ],
    }
  },
  methods: {
    /**
     * 获取菜单
     * 需根据用户角色，返回相对应的菜单
     */
    getMenuList() {
      return this.operationMenus
      // return this.marketMenus
    },
  },
}
</script>

<style lang="stylus" scoped>
.layout-header {
  padding 0
  display flex
  align-items center
  justify-content space-between
  border-bottom solid 1px #e6e6e6
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  .logo{
    height 40px
    line-height 40px
    width 120px
    margin-left 20px
  }
  .header-menu.el-menu--horizontal{
  }
  .setting-down{
    margin-right 20px
    .el-dropdown-link{
      .user-name{
        vertical-align super
      }
      .el-icon-arrow-down{
        vertical-align super
      }
    }
  }
}
</style>
