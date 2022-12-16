import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Nprogress from 'nprogress'

Vue.use(VueRouter)

// 引入多个模块的路由规则
import approvalsRouter from './modules/approvals'
import attendancesRouter from './modules/attendances'
import departmentsRouter from './modules/departments'
import employeesRouter from './modules/employees'
import permissionRouter from './modules/permission'
import salarysRouter from './modules/salarys'
import settingRouter from './modules/setting'
import socialRouter from './modules/social'

// 动态路由 
export const asyncRoutes = [
    approvalsRouter,
    attendancesRouter,
    departmentsRouter,
    employeesRouter,
    permissionRouter,
    salarysRouter,
    settingRouter,
    socialRouter
  ]


// 静态页面
const  constantRoutes=[
    {
        path:'/',
        redirect:'/dashboard',
        name:"layout",
        component:()=>import('../LayOut'),
        meta:{title:"首页",icon:"icon-shouye"},
        children:[
            {
                path:'/dashboard',
                component:()=>import('@/views/dashboard'),
                // 路由元信息  其实就是存储数据的对象 我们可以在这里放置一些信息
                // meta属性的里面的属性 随意定义  title对应左侧边栏的标题内容
                
            }
        ]
    },
    {
        path:'/login',
        name:"login",
        component:()=>import('../views/Login'),
        hidden:true  //添加该属性 左侧边栏不显示
    },
    {
        path:"/404",
        component:()=>import('../views/NotFound.vue'),
        hidden:true
    },

    {
        path:"*",
        component:()=>import('../views/NotFound.vue'),
        hidden:true
    }
]

const router=new VueRouter({
    routes:[...constantRoutes,...asyncRoutes]
})

// 定义白名单  所有不受权限控制的页面
const whiteList=['/404','/login']

// 路由前置守卫
router.beforeEach(async (to,from,next)=>{
    Nprogress.start()  //开启进度条
    //   首先判断是否有token
    if(store.getters.token){
        // 有token 判断是否是登录页
        if(to.path==='/login'){
            
            // 免登录
            next('/home')
        }else{
            // 获取用户资料
            if(!store.getters.userId){
                // 没有这个id值 才会调用vuex获取用户资料的action
              await  store.dispatch('my_user/getUserInfo')
            //    为什么要写await   因为我们想要获取完资料再去放行
            }

            next()  //直接放行
        }
    }else{
      //  没有token
      if(whiteList.indexOf(to.path)>-1){
        // 找到了 表示在白名单李
        next()
      }else{
        next('/login')
      }
    }
})
// 后置守卫
router.afterEach(()=>{
    Nprogress.done()  //关闭进度条
})

export default router
