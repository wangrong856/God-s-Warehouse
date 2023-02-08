import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path:'/Starbucks',
        name:"Starbucks",
        component:()=>import('@/views/Starbucks/index'),
        children:[
            {
                path:'/',
                component:()=>import('@/views/welcome/index')
            },
            {
                path:'/analysis',
                component:()=>import('@/views/analysis/index')
            },
            {
                path:'/manage',
                component:()=>import('@/views/manage/index')
            },
            {
                path:'/menu',
                component:()=>import('@/views/menu/index')
            },
            {
                path:'/order',
                component:()=>import('@/views/order/index')
            },
            {
                path:'/user',
                component:()=>import('@/views/user/index')
            },
            {
                path:'/role',
                component:()=>import('@/views/user/components/role')
            },
            {
                path:'/ofdishes',
                component:()=>import("@/views/order/components/OfdiShes")
            }
        ]
    }
    ,
    {
        path: '/zc',
        name: "zc",
        component: () => import("@/views/register/index")
    },
    {
        path:'/login',
        name:"login",
        component:()=>import('@/views/login/index')
    },
   
]
const router = new VueRouter({
    routes
})

export default router