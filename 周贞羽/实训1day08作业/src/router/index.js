import Vue from 'vue'
import VueRouter from 'vue-router'

import nprogress from 'nprogress'

import store from '@/store'

Vue.use(VueRouter)
export const startsroutea = [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/layout'),
        children:[
            {
                path:'approvals',
                component:()=>import('@/views/approvals')
            }
        ],
        // meta:{title:"首页",icon:""},
        hidden:true,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
        hidden:true,
    },
    {
        path: "404",
        name: 'found',
        component: () => import('@/views/found'),
        hidden:true,
    },
    {
        path: "*",
        name: 'found',
        component: () => import('@/views/found'),
        hidden:true,
    }
]

import approvals from '@/router/modules/approvals'
import attendances from '@/router/modules/attendances'
import departments from '@/router/modules/departments'
import employees from '@/router/modules/employees'
import permissions from '@/router/modules/permissions'
import salarys from '@/router/modules/salarys'
import settings from '@/router/modules/settings'
import social_securitys from '@/router/modules/social_securitys'

export const sonthoeabs=[
    approvals,
    attendances,
    departments,
    employees,
    permissions,
    salarys,
    settings,
    social_securitys
]

const router = new VueRouter({
    routes:[...startsroutea],
})



const whriteuser = ['/404', '/login']
// 路由守卫 前置钩子函数
router.beforeEach(async (to, from, next) => {
    nprogress.start()
    // 判断是否存在token
    if (store.getters.token) {
        // 判断是否是登录页面
        if (to.path === '/login') {
            // 如果是 直接跳转主页面
            next('/')
        } else {
            // 不明白！！！！！！！！！！！
            if (!store.getters.userId) {
              let {roles}=  await store.dispatch('my_user/logininfo')
              const routes=await store.dispatch('permission/filtercontet',roles.menus)
              router.addRoutes(routes)
              next(to.path)
            }else{
                next()
            }
            // 不是的话直接放行
            next()
        }
    } else {
        // 判断白名单里 存在的话直接放行
        if (whriteuser.indexOf(to.path) > -1) {
            next()
        } else {
            // 不存在的话跳转登录页面
            next('/login')
        }
    }
})
// 后置钩子函数
router.afterEach((to,from,next)=>{
    nprogress.done()
})
export default router;