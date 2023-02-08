const tokenc='tokenc'
// 设置
export function setTokens(token){
    return localStorage.setItem(tokenc,token)
}
// 读取
export function getTokens(){
    return localStorage.getItem(tokenc)
}
// 删除
export function delTokens(){
    return localStorage.removeItem(tokenc)
}