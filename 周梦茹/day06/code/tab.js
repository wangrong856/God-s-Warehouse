/* 
属性
 1: 标题元素
 2：内容元素
 3：删除的小按钮
 4：添加的小按钮
 方法
 切换  删除  增加  修改
*/
var that
class Tab {
  constructor(tabname) {
    this.tabId = document.getElementById(tabname)
    this.init()
    this.addTab = this.tabId.querySelector(".tabadd")
    this.addTab.onclick = this.add
  }
  // 添加方法
  add() {
    this.clearClass()
    // 创建一个li
    // var li = `
    // <li class="liactive">
    // <span> 新添加标题</span>
    // <span class="iconfont icon-guanbi"></span>
    // </li>
    // `
    // // 创建一个内容
    // var section=`
    // <section class="conactive">新添加内容</section>
    // `
    // that.ul.insertAdjacentHTML('beforeend',li)
    // that.tabscon.insertAdjacentHTML('beforeend',section)
    // that.init()
  }
  // 初始化
  init() {
    that = this
    // this指的是实例对象
    this.lis = this.tabId.querySelectorAll('li')
    this.cons = this.tabId.querySelectorAll('section')
    // this.ul=this.tabId.querySelector("ul")
    // this.tabscon=this.tabId.querySelector(".tabscon")

    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i
      this.lis[i].onclick = this.toggleTab
    }
  }
  // 切换方法
  toggleTab() {
    // this指的是事件源
    that.clearClass()
    this.className = 'liactive'
    that.cons[this.index].className = 'conactive'
  }
  clearClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = ''
      this.cons[i].className = ''
    }
  }
}


new Tab('#tab')