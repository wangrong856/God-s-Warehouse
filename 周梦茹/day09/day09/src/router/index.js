import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
   {
    path:"/",
    component:()=>import('@/views/home')
   },
   {
    path:"/one",
    component:()=>import('@/views/one')
   },
   {
    path:"/two",
    component:()=>import('@/views/two')
   },
   {
    path:"/three",
    component:()=>import('@/views/three')
   },
   {
    path:"/ysgs",
    component:()=>import('@/views/ysgs')
   },
   {
    path:"/tab",
    component:()=>import('@/views/tab')
   },
   {
    path:"/flag",
    component:()=>import('@/views/flag')
   },
   
]

const router = new VueRouter({
  routes
})

export default router
