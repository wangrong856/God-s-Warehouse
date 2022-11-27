// 在该模块中定义的方法  变量  只能在当前模块中使用----模块作用域---防止全局变量污染

// 遵循COMMONjs规范  require导入  module.exports导出
// 一个js文件就是一个模块  ,.js自定义的模块 都有一个module对象，存储了和当前模块相关的信息
// module.exports将模块成员暴露出去

// module.exports上指向了一个全新的对象
module.exports = {
  name: 'zs',
  age: 23,
  gender: '男',
}
