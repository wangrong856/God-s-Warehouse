import Layout from '@/LayOut.vue'

// 路由子模块 外层都是layout  组件位于layout的二级路由里面
export default {
    path:'/permission',  //路径
    name:'permission',
    component:Layout, //组件
    meta:{title:"权限管理",icon:""},
    children:[
        {
            // 二级路由的path什么都不写的时候，表示该路由为当前二级路由的默认路由
            path:"",
            component:()=>import('@/views/permission'),
            
        }
    ]
}