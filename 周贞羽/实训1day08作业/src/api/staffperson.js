import http from "@/utils/index"

export function staffcell(){
    return http({
        url:"/sys/user",
        method:'GET'
    })
}