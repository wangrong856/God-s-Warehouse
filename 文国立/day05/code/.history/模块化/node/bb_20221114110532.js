// 在该模块中定义的方法  变量  只能在当前模块中使用----模块作用域---防止全局变量污染

// Node.JS遵循CommonJS规范  require导入  module.exports导出

/* 
CommonJS规范
1.每个模块内部，module变量代表当前模块
2.module变量是一个对象，它的exports属性 向外共享成员
3.require加载模块

*/

// 一个js文件就是一个模块  ,.js自定义的模块 都有一个module对象，存储了和当前模块相关的信息
// module.exports将模块成员暴露出去

// module.exports对象上挂载属性username
// module.exports.username = 'ls'
// module.exports对象上挂载方法  sayhello
// module.exports.sayhello = function () {
//   console.log(123)
// }

// module.exports上指向了一个全新的对象
// module.exports = {
//   name: 'zs',
//   age: 23,
//   gender: '男',
// }

// 以module.exports指向的对象为准

// module.exports单词写起来复杂  为了简化 提供了exports
// 默认情况下 exports和module.exports指向同一个对象
// 但是最终的结果 以module.exports指向的对象为准

// exports.username = 'zs'
// exports.age = 20
// exports.sayhello = function () {
//   console.log(123)
// }

// -------
// exports.username = 'ls'

// module.exports = {
//   name: 'zs',
//   age: 23,
//   gender: '男',
// }

// --------------------
// module.exports.username = 'ls'

// exports = {
//   name: 'zs',
//   age: 23,
//   gender: '男',
// }

// ------------------{ username: 'zs', gender: '女' }
exports.username = 'zs'
module.exports.gender = '女'
