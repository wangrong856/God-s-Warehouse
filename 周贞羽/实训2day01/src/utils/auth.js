const tokens='tokens'
export function getToken(){
    return localStorage.getItem(tokens)
}

export function setToken(token){
   return localStorage.setItem(tokens,token)
}

export function delToken(){
   return localStorage.removeItem(tokens)
}
