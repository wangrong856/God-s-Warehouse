// 引入axios实例

import http from '../utils/http'


// 
/* 
登录
post
data  登录需要传递的数据
*/

export function login(data){
    return http({
        url:"/users/login",
        method:'POST',
        data:data
    })
}


/* 
注册
post

*/

export function register(data){
    return http({
        url:"/users/register",
        method:'POST',
        data
    })
}