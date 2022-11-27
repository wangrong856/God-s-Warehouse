import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:()=>import('@/views/home')
  },
  {
    path:'/check',
    component:()=>import('@/views/check')
  },
  {
    path:'/case3',
    component:()=>import('@/views/case3')
  },
]

const router = new VueRouter({
  routes
})

export default router
