import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utlils/request'
import './index.css'
// 全局引入mixins
import {mixins} from './mixins'
Vue.mixin(mixins)
// 把axios挂载到vue的原型上  每一个组件都可以访问$axios属性
Vue.prototype.$axios = axios

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
