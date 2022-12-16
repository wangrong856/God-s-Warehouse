import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/CSS/index.css'

// ui鉴权
Vue.directive('hide',{
  inserted(el,binding){
    if(store.getters.userinfo.identity!=='管理员'){
      el.parentNode.removeChild(el)
    }
  }
})




Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  // 注入路由器，我们可以在任何组件内通过 this.$router 访问路由器，
  // 也可以通过 this.$route 访问当前路由对象
  router,
  // 可以在任何组件中访问this.$store
  store,
  render: h => h(App)
}).$mount('#app')
