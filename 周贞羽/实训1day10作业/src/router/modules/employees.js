import layout from '@/layout'
export default{
    path:'/employees',
    name:'employees',
    component:layout,
    meta:{title:"组织框架",icon:""},
    children:[
       {
        path:'',
        component:()=>import('@/views/employees')
       }
    ]
}