    //将列表数据转换为树形数据==>递归算法
    // 先找父级 


export function tranListToTreeData(list,rootValue){
    var arr=[]
    list.forEach(item=>{
        if(item.pid===rootValue){
            // 找到之后 再去找item下面所有的子节点
            const children=tranListToTreeData(list,item.id)
            if(children.length){
                item.children=children
            }
            arr.push(item)
        }
    })
    return arr
}