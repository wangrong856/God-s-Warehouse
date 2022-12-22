import layout from '@/layout'
export default{
    path:'/settings',
    name:'settings',
    component:layout,
    meta:{title:"工资",icon:""},
    children:[
       {
        path:'',
        component:()=>import('@/views/settings')
       }
    ]
}