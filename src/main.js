import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/index.scss"; // 全局的css
Vue.config.productionTip = false;
Vue.use(ElementUI);
require("@/api/mock");
import "./static/js/jquery.mousewheel.min.js";
// 引入百度地图
import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
  ak: "HacdQIApCMjv5jNk6MtGEMQoO7sYKAs6"
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
