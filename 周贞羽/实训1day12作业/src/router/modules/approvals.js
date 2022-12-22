import layout from '@/layout'
export default{
    path:'/approvals',
    name:'approvals',
    component:layout,
    meta:{title:"首页",icon:""},
    children:[
       {
        path:'',
        component:()=>import('@/views/approvals')
       }
    ]
}