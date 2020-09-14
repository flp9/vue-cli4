<template>
  <div>
    <div class="header-left">
      <i class="el-icon-s-grid pointer"></i>
      后台管理系统
    </div>
    <div class="header-right">
      <!-- <el-dropdown class="mar-r-2">
        <i class="el-icon-user-solid user-setting pointer"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="setting">系统设置</el-dropdown-item>
          <el-dropdown-item command="user">个人中心</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
       <div class="mar-r-2">
        <i class="el-icon-switch-button pointer" @click="loginOut"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appHeader",
  methods:{
    loginOut(){
      this.$router.push('/')
    }
  }
};
</script>

<style lang="scss" scoped>
.header-left {
  float: left;
  color: white;
}
.header-right {
  float: right;
  display: flex;
  color: white;
}
.mar-r-2{
  margin-right: 10px;
}
</style>
