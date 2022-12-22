import layout from '@/layout'
export default{
    path:'/salarys',
    name:'salarys',
    component:layout,
    meta:{title:"权限管理",icon:""},
    children:[
       {
        path:'',
        component:()=>import('@/views/salarys')
       }
    ]
}