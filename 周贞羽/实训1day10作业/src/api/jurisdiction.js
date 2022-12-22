import http from "@/utils/index"
// 所有权限点
export function jurisdiction(){
    return http({
        url:'/sys/permission',
        method:'GET'
    })
}

// 添加权限点
export function addiction(data){
    return http({
        url:"/sys/permission",
        method:'POST',
        data
    })
}
// 给角色分配权限  (分配权限)
export function treeiction(data){
    return http({
        url:"/sys/role/assignPrem",
        method:'PUT',
        data
    })
}







// 根据id获取权限点详情 
export function getxqiction(id){
    return http({
        url:`/sys/permission/${id}`,
        method:'GET',
    })
}
// 根据id获取角色详情
export function getxqictions(id){
    return http({
        url:`/sys/role/${id}`,
        method:'GET',
    })
}

// 编辑权限  
export function editxqiction(data){
    return http({
        url:`/sys/permission/${data.id}`,
        method:'PUT',
        data
    })
}


// 根据id删除权限点
export function deliction(id){
    return http({
        url:`/sys/permission/${id}`,
        method:'DELETE',
    })
}
