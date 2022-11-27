import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//1. 注册 elementui组件
import ElementUI from "element-ui";
//2. 引入全局样式
import "element-ui/lib/theme-chalk/index.css";
import "bootstrap/dist/css/bootstrap.css" // 默认找文件夹下的index文件(但是这个不是所以需要写路径)

import store from "./store";
// 引入请求对象
import request from "./request";

import Vant from 'vant';
import 'vant/lib/index.css';

// 时间组件
import moment from 'moment';
moment.locale('zh-cn');
Vue.filter('dateformat', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(dataStr).format(pattern)
})
Vue.use(Vant);
//3. 安装组件
Vue.use(ElementUI);

// 把请求对象挂载到原型中
Vue.config.productionTip = false;
// 把请求对象挂载到原型中
Vue.prototype.$http = request;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
