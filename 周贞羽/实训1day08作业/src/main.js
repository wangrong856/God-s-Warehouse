import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store/index'
import "./assets/index.css"
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.directive('imgs',{
  inserted(el,binding){
    el.onerror=function(){
      el.src=binding.value
    }
  }
})

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
