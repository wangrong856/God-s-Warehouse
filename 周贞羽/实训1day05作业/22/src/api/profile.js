import http from '../utils/http'

// 渲染
export function getProfiles(data){
    return http({
        url:"/profiles",
        method:'GET'
    })
}
// 添加
export function addProfiles(data){
    return http({
        url:"/profiles/add",
        method:'POST',
        data
    })
}
// 编辑
export function editProfiles(data){
    return http({
        url:`/profiles/edit/${data._id}`,
        method:'POST',
        data
    })
}