
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import $http from "./utils/request"
import { obtainGet } from "utils/obtainGet.js"
import {store} from "./store"

uni.$http = $http
uni.$obtainGet = obtainGet

Vue.config.productionTip = false

App.mpType = 'app'


const app = new Vue({
    ...App,
    store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif