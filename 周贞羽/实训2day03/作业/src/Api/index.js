import http from '@/utils/index'
export function register(data){
    return http({
        url:"/register",
        method:'POST',
        data
    })
}
export function login(data){
    return http({
        url:"/login",
        method:'POST',
        data
    })
}

export function dashboards(){
    return http({
        url:"/dashboard",
        method:"GET"
    })
}