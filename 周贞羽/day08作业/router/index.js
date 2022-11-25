import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:()=>import('@/views/zzy')
  },
  {
    path:'/qx',
    component:()=>import('@/views/qx')
  },
  {
    path:'/reverse',
    component:()=>import('@/views/reverse')
  }
]

const router = new VueRouter({
  routes,
})

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   // to: 即将要进入的目标 用一种标准化的方式
//   // from: 当前导航正要离开的路由
//   // next  是否执行进入
//   //  next(false) 取消进入
//   // next('/login')  跳转到登陆页面
//   // console.log(to, from)
//   // next()
//   // -------------除了登陆页面其它的页面需要登陆之后才能进入
//   // 本地有token就属于登陆状态  没有token就不是登陆状态
//   // console.log(to)
//   if (to.path === '/login') {
//     next()
//     return
//   }
//   // 判断本地是否有token ，有token就进入  没有token就跳转到登陆页面
//   if (localStorage.getItem('token')) {
//     next()
//   } else {
//     next('/login') //跳转到登陆页面
//   }
// })

// export default router

// router.beforeEach((to, from, next) => {
  
//   if(to.path==='/login'){
//     next()
//     return
//   }
//   if(localStorage.getItem('token')){
//     next()
//   }else{
//     next('/login')
//   }
// })
export default router