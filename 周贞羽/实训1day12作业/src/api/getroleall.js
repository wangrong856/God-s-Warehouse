import http from '@/utils/index'
// 获取所有角色列表
export function getallRole(params){
    return http({
        url:"/sys/role",
        method:"GET",
        params,
    })
}

// 获取当前用户的角色
export function getuserRole(id){
    return http({
        url:`/sys/user/${id}`,
        method:"GET",
    })
}

// 给员工分配角色
export function getuserRoleALL(data){
    return http({
        url:`/sys/user/assignRoles`,
        method:"PUT",
        data
    })
}


// 添加角色
export function AddallRole(data){
    return http({
        url:"/sys/role",
        method:"POST",
        data
    })
}
// 获取角色详情
export function xqallRole(id){
    return http({
        url:`/sys/role/${id}`,
        method:"GET",
    })
}
// 获取id更新角色
export function editallRole(data){
    return http({
        url:`/sys/role/${data.id}`,
        method:"PUT",
        data
    })
}

// 根据id删除角色
export function deltallRole(id){
    return http({
        url:`/sys/role/${id}`,
        method:"DELETE",
    })
}
