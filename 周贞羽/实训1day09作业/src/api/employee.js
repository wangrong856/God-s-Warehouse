import http from '@/utils/index'
// 获取所有权限点
export function getSimple(){
    return http({
        url:'/sys/user/simple',
        
    })
}