import http from '@/utils/index'
// 订单管理数据 请求参数 
export function MenuOrder(params){
    return http({
        url:"/obtainorder",
        params
    })
}

// 获取桌号
export function gettableue(){
    return http({
        url:"/gettable",
    })
}
// 查看详情菜单
export function getvieworder(id){
    return http({
        url:`/vieworder?id=`+id,
    })
}
