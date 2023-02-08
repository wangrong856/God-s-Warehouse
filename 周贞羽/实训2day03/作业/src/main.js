import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/bootstrap/bootstrap.min.css';
import './assets/bootstrap/bootstrap-icons.css';
import './assets/css/common.css';
// 引入echarts

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
