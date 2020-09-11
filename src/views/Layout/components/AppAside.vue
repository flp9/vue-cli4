<template>
  <el-menu
    style="height: 100%"
    default-active="1-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <div v-for="(menu, index) in menuList" :key="index">
      <el-submenu v-if="menu.children" :index="menu.path">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span>{{ menu.name }}</span>
        </template>
        <el-menu-item
          :index="item.path"
          v-for="(item, i) in menu.children"
          :key="i"
          >{{ item.name }}</el-menu-item
        >
      </el-submenu>
      <el-menu-item v-else :index="menu.path">
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.name }}</span>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script>
export default {
  name: "appAside",
  data() {
    return {
      // sidebarData
      menuList: [
        {
          name: "首页",
          path: "/home",
          icon: "el-icon-s-home"
        },
        {
          name: "表格",
          path: "/table",
          icon: "el-icon-s-grid",
          children: [
            {
              name: "基本表格",
              path: "/table/baseTab",
              icon: ""
            },
            {
              name: "复杂表格",
              path: "/table/complexTab",
              icon: ""
            }
          ]
        },
        {
          name: "图表管理",
          path: "/echars",
          icon: "el-icon-s-data",
          children: [
            {
              name: "混合图表",
              path: "/echars/BarChart",
              icon: ""
            },
          ]
        },
        {
          name: "地图",
          path: "/map",
          icon: "el-icon-map-location",
          children: [
            {
              name: "电子地图",
              path: "/map/emap",
              icon: ""
            },
            {
              name: "百度地图",
              path: "/map/BaiDuMap",
              icon: ""
            }
          ]
        },
        {
          name: "图片瀑布流",
          path: "/pic",
          icon: "el-icon-picture"
        }
      ]
    };
  },
  created() {
    console.log("this.$route", this.$route);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped></style>
