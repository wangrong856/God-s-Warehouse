import thenFs from 'then-fs'
console.log("A");
thenFs.readFile('./files/1.txt', 'utf8').then(data => {
  console.log("B");
})
setTimeout(() => {
  console.log("C");
}, 0)
console.log("D");