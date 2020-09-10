<template>
  <el-container>
    <el-header>
      <app-header></app-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <app-aside></app-aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppAside from "./components/AppAside";

export default {
  components: {
    AppAside,
    AppHeader
  },
  name: "layout",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#app > .el-container {
  height: 100vh;
  .el-header {
    height: 60px;
    line-height: 60px;
    background-color: #b3c0d1;
  }
  .el-aside {
    background-color: #d3dce6;
  }
  .el-main {
    background-color: #e9eef3;
    padding: 10px;
    overflow: hidden;
  }
}
</style>
