import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utlils/request'
// 时间格式化
import moment  from 'moment'
Vue.filter('todate',(val)=>{
  return moment(val).format('YYYY-MM-DD');
})
// 
Vue.filter('zhu',(val)=>{
    let index=val.length-1;
    let zfc="";
    for(var a=index;a>=0;a--){
      zfc+=val[a]
    }
    return zfc
})
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
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
