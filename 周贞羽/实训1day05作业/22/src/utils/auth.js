const mytoken='LTToken'

// 获取
export function getToken(){
    return localStorage.getItem(mytoken)
}


// 设置
export function setToken(token){
    localStorage.setItem(mytoken,token)
}


// 删除
export function removeToken(){
    localStorage.removeItem(mytoken)
}