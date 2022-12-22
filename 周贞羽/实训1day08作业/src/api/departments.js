import http from "@/utils/index"

// 获取组件架构数据
export function getDepartments(){
    return http({
        url:"/company/department"
    })
}
// 根据id删除部门
export function delDepartments(id){
    return http({
        url:`/company/department/${id}`,
        method:'DELETE'
    })
}