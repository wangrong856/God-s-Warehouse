import http from '@/utils/http'

/* 
获取组织架构数据
*/
export function getDepartments(){
    return http({
        url:"/company/department"
    })
}