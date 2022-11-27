import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/goods_list'
  },
  {
    path:"/goods_list",
    component:()=>import("@/views/goods_list"),
  },
  {
    path:"/goods_search",
    component:()=>import("@/views/goods_search"),
  },
  {
    path:"/goods_my",
    component:()=>import("@/views/goods_my"),
  }
]

const router = new VueRouter({
  routes
})

export default router
