import http from '@/utils/index'
export function analysis(){
    return http({
        url:"/analysis",
    })
}