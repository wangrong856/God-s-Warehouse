import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/mathematics'
  },
  {
    path:'/mathematics',
    component:()=>import('@/views/mathematics')

  },
  {
    path:'/goods',
    component:()=>import('@/views/goods')
  },
  {
    path:'/food',
    component:()=>import('@/views/food')
  },
  {
    path:'/sellOut',
    component:()=>import('@/views/sellOut')
  },
  {
    path:'/dog',
    component:()=>import('@/views/dog')
  }
]

const router = new VueRouter({
  routes
})

export default router
