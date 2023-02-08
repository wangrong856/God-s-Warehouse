import http from '@/utils/index'
// 注册
export function register(data){
    return http({
        url:"/register",
        method:"POST",
        data
    })
}
// 登录
export function logins(data){
    return http({
        url:"/login",
        method:"POST",
        data
    })
}