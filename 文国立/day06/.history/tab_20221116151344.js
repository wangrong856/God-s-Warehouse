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
    for (var i = 0; i < lis.length; i++) {
      lis[i].onclick = this.toggleTab
    }
  }

  // 切换
  toggleTab() {
    console.log(this, 'toggleTab')
  }
}

new Tab('tab')
