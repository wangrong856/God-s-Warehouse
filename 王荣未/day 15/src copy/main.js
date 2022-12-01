import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//1. 注册 elementui组件
import ElementUI from "element-ui";
//2. 引入全局样式
// import "element-ui/lib/theme-chalk/index.css";

// import store from "./store";
// 引入请求对象
import request from "./request";
// 全局样式
// import "./assets/css/global.css";
// // 字体样式
// import "./assets/fonts/iconfont.css";

import ZkTable from 'vue-table-with-tree-grid'

import Vant from 'vant';

import 'vant/lib/index.css';

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 
  'inline': true, //启用lnline模式
  'button': true, //显示右上角关闭按钮
  'navbar': true, //显示缩略图导航
  'title': true, //显示当前图片的标题
  'toolbar': true, //显示工具栏
  'tooltip': true, //显示缩放百分比
  'movable': true, //显示可移动
  'zoomable': true, //图片是否可缩放
  'rotatable': true, //图片是否可旋转
  'scalable': true, //图片是否可翻转
  'transition': true, //使用css3过度
  'fullscreen': true, //播放时是否全屏
  'keyboard': true, //是否支持键盘
  'url': 'data-source' //设置大图片的url
  }
})

Vue.use(Vant);
 
Vue.component('terr-table',ZkTable)

//3. 安装组件
Vue.use(ElementUI);

// 把请求对象挂载到原型中
Vue.config.productionTip = false;
// 把请求对象挂载到原型中
Vue.prototype.$http = request;
new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
