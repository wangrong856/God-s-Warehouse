// 只拷贝最外层的拷贝方式---浅拷贝

let obj = {
  uname: "张三",
  age: 22,
  sex: "男",
  color:['red','yellow','pink']
}

let newObj = {}

// for (let key in obj) {
//   newObj[key] = obj[key]
// }
// obj.color[1]="aaa"

Object.assign(newObj,obj)
// obj.color[1]="aaa"
console.log(obj,newObj)
