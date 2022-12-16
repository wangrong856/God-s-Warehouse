import { getToken } from '@/utils/auth'
import Vue from 'vue'
import VueRouter from 'vue-router'


/* 
官方提供的插件，vuex。vue-router   需要和vue深度集成
第三方插件  ElementUi  Vant

vue.js暴露的一个install方法，该方法的第一个参数是Vue构造器，第二个参数可选的选项对象用于传入插件的配置
MyPlugin.install=function(Vue,options){

}
提供了两个组件  router-link  router-view
*/
Vue.use(VueRouter)
// 路由懒加载---匹配到路由时 才去引入
// 创建路由规则
// 地址栏上的地址和路由规则进行匹配，匹配成功把component引入的组件 映射到router-view组件上
const routes = [
  {
    path: '/',
    name: 'home',
    component:()=> import('../views/HomeView.vue'),
    children:[
      {
        path:'foundlist',
        component:()=>import('../views/FoundList.vue')
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component:()=> import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:()=> import('../views/LoginView.vue')
  },
  // 地址栏上的地址和路由规则匹配不到， * 匹配所有的路由  ，就显示404页面
  {
    path:'*',
    name:"notfound",
    component:()=>import('../views/NotFound.vue')
  }
]
// 凡是对象就有属性和方法 
// 创建路由对象   方法  go()   push()
const router = new VueRouter({
  routes
})
// 鉴权
router.beforeEach((to,from,next)=>{
    if(to.path=="/login"||to.path=='/register'){
      next()
    }else{
      if(getToken()){
        next()
      }else{
        next('/login')
      }
    }
})

// 遵循es6模块化  在前端和后端都可以使用   import引入  export 按需导出 --{}   export default 默认导出
export default router

