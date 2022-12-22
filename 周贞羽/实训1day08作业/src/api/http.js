import http from "@/utils/index"

//登录接口 
export function login(data){
    return http({
        url:"/sys/login",
        method:"POST",
        data,
    })
}
// 用户信息接口
export function getuserinfo(){
    return http({
        url:"/sys/profile",
        method:"POST",
    })
}
// 用户信息图片
export function imguserig(id){
    return http({
        url:`/sys/user/${id}`,
    })
}
