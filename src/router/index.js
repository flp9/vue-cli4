import Vue from "vue";
import VueRouter from "vue-router";
import login from "views/login/login.vue";
import Layout from "views/Layout/layout.vue";
import home from "views/home/home";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: login
  },
  {
    path: "/table",
    component: Layout,
    redirect: "/table/baseTab",
    children: [
      {
        path: "/table/baseTab",
        component: () => import("views/table/baseTab")
      },
      {
        path: "/table/complexTab",
        component: () => import("views/table/complexTab")
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        icon: "el-icon-s-home",
        title: "首页",
        component: home
      }
    ]
  },
  {
    path: "/echars",
    component: Layout,
    redirect: "/echars/BarChart",
    children: [
      {
        path: "BarChart",
        name: "BarChart",
        title: "柱状图",
        component: () => import("views/echars/BarChart")
      },
      {
        path: "LineChart",
        name: "LineChart",
        title: "折线图",
        component: () => import("views/echars/LineChart")
      },
      {
        path: "PieChart",
        name: "PieChart",
        title: "饼图",
        component: () => import("views/echars/PieChart")
      }
    ]
  },
  {
    path: "/pic",
    component: Layout,
    redirect: "/pic/pic",
    children: [
      {
        path: "/pic/pic",
        component: () => import("views/pic/pic")
      }
    ]
  },
  {
    path: "/map",
    component: Layout,
    redirect: "/map/emap",
    children: [
      {
        path: "/map/emap",
        component: () => import("views/map/emap")
      }
    ]
  }
];
const router = new VueRouter({
  routes
});

export default router;
