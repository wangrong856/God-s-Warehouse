/* 
属性
 1: 标题元素
 2：内容元素
 3：删除的小按钮
 4：添加的小按钮
 方法
 切换  删除  增加  修改
*/
var that;

class Tab {
  constructor(tabname) {
    this.tabId = document.getElementById(tabname)

    this.init()
  }

  // 初始化方法
  init () {
    that=this
    // this 当前类的实例
    this.lis = this.tabId.querySelectorAll('li')
    this.cons = this.tabId.querySelectorAll('section')
    for (var i = 0; i < lis.length; i++) {
      lis[i].onclick = this.toggleTab
    }
  }

  // 切换
  toggleTab() {
    // this 点击的事件源
    // console.log(this, 'toggleTab')
    // 将所有的标题与内容样式全部清空
    for (var i = 0;i<)
  }
}

new Tab('tab')
