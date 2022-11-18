/* 
属性
 1: 标题元素
 2：内容元素
 3：删除的小按钮
 4：添加的小按钮
 方法
 切换  删除  增加  修改
*/

class Tab {
  constructor(tabname) {
    var tabId = document.getElementById(tabname)

    this.init()
  }

  // 初始化方法
  init() {
    var lis = this.tabId.querySelectorAll('li')
    var cons = this.tabId.querySelectorAll('section')
  }
}

new Tab('tab')
