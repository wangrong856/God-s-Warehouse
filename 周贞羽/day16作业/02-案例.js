setTimeout(function () {
  console.log(1)
}, 0)

new Promise(function (resolve) {
  console.log(2)
  resolve()
 
}).then(function () {
  console.log(3)
})
setTimeout(function () {
  console.log(6)
},0)
console.log(4)