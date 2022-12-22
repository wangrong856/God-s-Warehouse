import layout from '@/layout'
export default{
    path:'/attendances',
    name:'attendances',
    component:layout,
    meta:{title:"员工",icon:""},
    children:[
       {
        path:'',
        component:()=>import('@/views/attendances')
       }
    ]
}