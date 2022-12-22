import layout from '@/layout'
export default{
    path:'/social_securitys',
    name:'social_securitys',
    component:layout,
    meta:{title:"公司设置",icon:""},
    children:[
       {
        path:'',
        component:()=>import('@/views/social_securitys')
       }
    ]
}