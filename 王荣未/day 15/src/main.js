import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//1. 注册 elementui组件
import ElementUI from "element-ui";
//2. 引入全局样式
import "element-ui/lib/theme-chalk/index.css";

// import store from "./store";
// 引入请求对象
import request from "./request";
// 全局样式
import "./assets/css/global.css";
// 字体样式
import "./assets/fonts/iconfont.css";

import ZYXh from 'vue-table-with-tree-grid'
 
import moment from 'moment';

import Vant from 'vant';

import 'vant/lib/index.css';

Vue.use(Vant);

// 中文简体
moment.locale('zh-cn');
Vue.filter('dateformat', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') =>{
    return moment(dataStr).format(pattern)
})

Vue.component('terr-table',ZYXh)

Vue.filter('fomesay',val=>{
  let date = new Date(val)
  let n = date.getFullYear()
  let y = date.getMonth() + 1
  let r = date.getDate()
  let s = date.getHours()
  let f = date.getMinutes()
  let m = date.getSeconds()
  return `${n}-${y}-${r} ${s}:${f}:${m}`
})

//3. 安装组件
Vue.use(ElementUI);

// 把请求对象挂载到原型中
Vue.config.productionTip = false;
// 把请求对象挂载到原型中
Vue.prototype.$http = request;
new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
