import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: "/list",
    component: () => import('@/views/myGoodsList')
  },
  {
    path:"/table",
    component:()=>import('@/views/myTable')
  },
  {
    path:"/",
    component:()=>import('@/views/home')
  },
  {
    path:"/text",
    component:()=>import('@/components/myText')
  },
  {
    path:"/textList",
    component:()=>import('@/components/textList')
  },
]

const router = new VueRouter({
  routes
})

export default router
