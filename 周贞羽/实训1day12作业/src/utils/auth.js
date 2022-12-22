const Tsoken='yytoken'
// 读取
export function getToken(){
    return localStorage.getItem(Tsoken)
}
// 写入
export function setToken(token){
    localStorage.setItem(Tsoken,token)
}
// 删除
export function removeToken(){
    localStorage.removeItem(Tsoken)
}