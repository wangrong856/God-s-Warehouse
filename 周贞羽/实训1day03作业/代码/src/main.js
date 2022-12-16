import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.directive('imagerror',{
  inserted(el,binging){
    console.log(el,binging)
    // binging 指令中的变量的解释  有一个属性value 拿到该变量的值
    // 当图片有地址 但是地址没有加载成功  会报错， 会触发图片的一个时间 onerror
    el.onerror=function(){
      el.src=binging.value
    }

  }
})

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
