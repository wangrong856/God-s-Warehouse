import layout from '@/layout'
export default{
    path:'/permissions',
    name:'permissions',
    component:layout,
    meta:{title:"员工管理",icon:""},
    children:[
       {
        path:'',
        component:()=>import('@/views/permissions')
       }
    ]
}