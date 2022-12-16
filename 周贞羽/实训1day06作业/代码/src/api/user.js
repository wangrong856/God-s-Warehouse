import http from '@/utils/http'

/* 
 登录接口
*/
export function login(data){
    return http({
        url:"/sys/login",
        method:"POST",
        data
    })
}


/* 
 获取用户资料
*/
export function getUserInfo(){
    return http({
        url:"/sys/profile",
        method:"POST"
    })
}

/* 
 获取用户头像
*/
export function getUserImg(id){
    return http({
        url:`/sys/user/${id}`
    })
}