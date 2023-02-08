import http from '@/utils/index'
// 员工详情  X
export function getemloyess(params){
    return http({
        url:"/getemployees",
        params
    })
}
// 修改是否是离职状态
export function modifyresi(params){
    return http({
        url:"/modifyresi",
        params
    })
}
// 添加员工
export function addemsync(data){
    return http({
        url:"/addem",
        method:'POST',
        data
    })
}
// 删除员工
export function deleemsync(data){
    return http({
        url:"/deleteemp",
        method:'POST',
        data
    })
}