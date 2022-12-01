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
let b = JSON.parse(JSON.stringify(a))

a.message.index = 10;
console.log(a,b)
