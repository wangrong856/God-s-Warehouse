import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: HomeView,
    children:[
      {
        path: '/student',
        name: 'student',
        component: () => import('../views/StudentView.vue')
      },
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/IndexView.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/two',
    name: 'two',
    component: () => import('../components/TwoIndex')
  },
  {
    path:"/twoindexs",
    name:"twoindexs",
    component:()=>import('@/components/liu/two')
  }
]

const router = new VueRouter({
  routes
})

export default router
