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
    // 
    this.add = this.tabId.querySelector('.tabadd')
    // li的父元素
    this.ul = this.tabId.querySelector('ul')
    this.fsection = this.tabId.querySelector('.tabscon')
    // 调用
    this.init()
  }
  // 初始化方法
  init() {
    // 全局变量=
    that = this
    // this 当前类的实例
    // 获取全部的li
    this.lis = this.tabId.querySelectorAll('li')
    this.cons = this.tabId.querySelectorAll('section')
    this.removes = this.tabId.querySelectorAll('.icon-guanbi')
    //点击事件 
    this.add.onclick = this.addTab
    // for循环 
    for (var i = 0; i < this.lis.length; i++) {

      this.lis[i].index = i
      this.lis[i].onclick = this.toggleTab
      this.removes[i].onclick = this.removeTab
    }
  }
  // 切换
  toggleTab() {
    // this 点击的事件源
    // console.log(this, 'toggleTab')
    // 将所有的标题与内容样式全部清空

    that.clearClass()
    // 当前点击的进行激活
    this.className = 'liactive'
    that.cons[this.index].className = 'conactive'
  }
  // 清除所有的li样式  所有的内容样式
  clearClass() {
    // this 实例对象
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = ''
      this.cons[i].className = ''
    }
  }
  // 添加
  addTab() {
    // this 添加的按钮
    that.clearClass()
    // 创建li和section元素
    var li = `
      <li  class="liactive">
      <span> 新选项卡</span>
      <span class="iconfont icon-guanbi"></span>
      </li>
      `
    var section = `
    <section class="conactive">新内容</section>
    `
    // 把两个元素添加到父元素
    that.ul.insertAdjacentHTML('beforeend', li)
    that.fsection.insertAdjacentHTML('beforeend', section)
    //  执行初始化方法
    that.init()
  }

  // 删除
  removeTab(e) {
    // this 点击的删除按钮
    // 阻止冒泡
    e.stopPropagation()

    var index = this.parentNode.index
    // 因为有点击事件,所以this指向当前点击的数据
    // that全局 找到所有li[下标].remove删除
    that.lis[index].remove()
    that.cons[index].remove()

    that.init()
    // 当我们删除的不是选中状态的li  原来的选中状态的li的样式保持不变
    // 当我们删除的是选中状态的li  让他的前一个li选中
    if (document.querySelector('.liactive')) return
      
    if (index !== 0) {
      index--
    }
    console.log(index, 'index')
    that.lis[index] && that.lis[index].click()
  }
}
// 调用 Tab
new Tab('tab')
