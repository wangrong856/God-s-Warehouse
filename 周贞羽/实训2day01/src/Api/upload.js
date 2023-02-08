import http from '@/utils/index'
export function getuploads(data){
    return http({
        url:"/uploadres",
        data
    })
}