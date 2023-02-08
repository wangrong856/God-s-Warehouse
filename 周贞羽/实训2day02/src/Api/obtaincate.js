import http from '@/utils/index'
// // 获取菜单类目
export function obtaincate(){
    return http({
        url:"/obtaincate",
    })
}
// // 获取菜品单位
export function getobtainunit(){
    return http({
        url:"/obtainunit",
        
    })
}
// // 上架菜单
// export function getputdishes(){
//     return http({
//         url:"/putdishes",
//         method:'POST'
//     })
// }
// 获取菜品数据
export function gettainshes(params){
    return http({
        url:"/obtaindishes",
        params
    })
}
// 上架菜品
export function putdishes(data){
    return http({
        url:"/putdishes",
        method:"POST",
        data
    })
}
// 下架菜品
export function deletesyn(data){
    return http({
        url:"/fromsale?id="+data,
    })
}