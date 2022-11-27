import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home' 
  },
  {
    path:'/home',
    component:()=>import("@/views/home")
  },
  {
    path:'/my',
    component:()=>import("@/views/my")
  },
  {
    path:'/books',
    component:()=>import("@/views/books")
  },
  {
    path:'/tab',
    component:()=>import("@/views/tab")
  },
  {
    path:'/pupil',
    component:()=>import("@/views/pupil")
  }
]

const router = new VueRouter({
  routes
})

export default router
