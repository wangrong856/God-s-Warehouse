import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局过滤器   在任何一个组件中都可以使用
Vue.filter('toReverse', (val) => {
  return val.split('').reverse().join('')
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
