import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/index'
import store from '@/store/index'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import '@/css/index.css'
Vue.config.productionTip = false

new Vue({
  router,//挂载
  store,
  render: h => h(App)
}).$mount('#app')
