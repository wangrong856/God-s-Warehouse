console.log(1)   //1
setTimeout(function () {
  console.log(2)    //4
  new Promise(function (resolve) {
    console.log(3)   //5
    resolve()
  }).then(function () {
    console.log(4)  //6
  })
})

new Promise(function (resolve) {
  console.log(5)    //2
  resolve()
}).then(function () {
  console.log(6)   //3
})

setTimeout(() => {
  console.log(7)//7
  new Promise(function (resolve) {
    console.log(8)//8
    resolve()
  }).then(function () {
    console.log(9)//9
  })
});