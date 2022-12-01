// 深拷贝  所有层都拷贝的方式
let a = {
  uname: "张三",
  age: 22,
  sex: "男",
  color: ['red', 'yellow', 'pink'],
  message: {
    index: 1,
    score:100
  }
}
let b = {}

// 循环再循环---递归
function kaobei (newObj, obj) {
  for (let key in obj) {
    // instanceof判断一个数据具体是哪一种object
    if (obj[key] instanceof Array) {
      // 循环 obj[key]是数组
      newObj[key] = []
      kaobei(newObj[key],obj[key])
    }else if (obj[key] instanceof Object) {
      // 遍历
      newObj[key] = {}
      kaobei(newObj[key],obj[key])
    }else {
      newObj[key] = obj[key]
    }
  }
}

kaobei(b, a)
a.message.index = 9
console.log(b,a)