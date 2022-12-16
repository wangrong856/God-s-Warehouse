const mytoken="HR_TOKEN"

// 读取
export function getToken(){
    return localStorage.getItem(mytoken)
}


// 写入
export function setToken(token){
    return localStorage.setItem(mytoken,token)
}

// 删除
export function removeToken(){
    return localStorage.removeItem(mytoken)
}
