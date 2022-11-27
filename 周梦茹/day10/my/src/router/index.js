import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/',
  //   component:()=>import('@/views/home')
  // },
  {
    path:'/',
    component:()=>import('@/views/mathematics')
  },
  {
    path:'/checked',
    component:()=>import('@/views/checked')
  }
]

const router = new VueRouter({
  routes
})

export default router
