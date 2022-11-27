import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/my",
    component:()=>import('@/views/my')
  },
  {
    path:"/child",
    component:()=>import('@/views/Child')
  },
  {
    path:"/class",
    component:()=>import('@/views/class')
  },
  {
    path:"/table",
    component:()=>import('@/views/table')
  },
  {
    path:"/case2",
    component:()=>import('@/views/case2')
  },
  {
    path:"/love",
    component:()=>import('@/views/love')
  },
]

const router = new VueRouter({
  routes
})

export default router
