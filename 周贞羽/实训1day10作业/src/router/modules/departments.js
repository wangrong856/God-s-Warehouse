import layout from '@/layout'
export default{
    path:'/departments',
    name:'departments',
    component:layout,
    meta:{title:"公司设置",icon:""},
    children:[
       {
        path:'',
        component:()=>import('@/views/departments')
       }
    ]
}