import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


// vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


// axios组件
import axios from 'axios';
Vue.prototype.$axios = axios


// 引入 Element
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
