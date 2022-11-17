/* 
点击tab栏，实现切换效果
点击 + 号，可以添加tab项和内容项
点击x 可以删除当前的tab项和内容项
双击tab项或者内容项文字 可以修改里面的文字内容
准备
 1 获取标题元素
 2 获取内容元素
 3 获取删除的小按钮x
 4 新建js文件  定义类 添加需要的属性和方法(切换 ，删除，增加，修改)
 5 注意this指向问题

*/

var that
// that的存在是因为 我们的this指向在改变时 会报错 赋值给一个新变量 就可以(在改变this的时候使用)
class Tab {
  constructor(id) {
    that = this
    // 获取整个的id
    this.main = document.querySelector(id)
    // 根据id查找点击添加的按钮 是单个所以不用for循环
    this.add = this.main.querySelector('.tabadd')

    // li的父元素(标题)
    this.ul = this.main.querySelector('.nav ul:first-child')

    // section的父元素(内容)
    this.fsection = this.main.querySelector('.tabscon')

    this.init()
  }
  // 初始化(每次刷新页面 会重新执行)  初始化操作  让相关的元素绑定事件
  init() {
    // this  类的实例对象
    this.updateNode()
    this.add.onclick = this.addTab
    for (var i = 0; i < this.lis.length; i++) {
      // 给每一个li自定义属性 传一个下标
      this.lis[i].index = i

      this.lis[i].onclick = this.toggleTab//切换
      this.remove[i].onclick = this.removeTab//删除
      // 标签双击(使用的同样的方法)
      this.spans[i].ondblclick = this.editTab//修改
      // 内容双击
      this.section[i].ondblclick = this.editTab
    }
  }
// （init()和updateNode() 当成一个也可以 把他拆分开了而已）
  // 因为我们要动态的添加元素  从新获取元素
  updateNode() {
    // this  类的实例对象
    // li标签
    this.lis = this.main.querySelectorAll('li')
    // 内容
    this.section = this.main.querySelectorAll('section')
    // 删除标签
    this.remove = this.main.querySelectorAll('.icon-guanbi')
    // li标签里面的标题                  
    this.spans = this.main.querySelectorAll('.nav li span:first-child')
  }
  // 1切换
  toggleTab() {
    // this 函数的调用者 点击的li
    that.clearClass()
    // 留下我自己！
    this.className = 'liactive'
    that.section[this.index].className = 'conactive'
  }
  // 清除所有其他的li标签和内容的样式（干掉所有人）！
  clearClass() {
    // this  类的实例对象 遍历li标签是因为是多个
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = ''
      this.section[i].className = ''
    }
  }

  // 删除

  removeTab(e) {
    // console.log(123)
    // li和span标签都绑定点击事件了
    // 阻止冒泡 如果不防止的话 就会li标签执行一次 span标签执行一次 就会报错 所以要阻止事件冒泡就ok
    e.stopPropagation()
// 
    var index = this.parentNode.index
    // console.log(index)
    // 根据索引号删除对应的li和section
    that.lis[index].remove()
    that.section[index].remove()
    that.init()
    // 当我们删除的不是选中状态的li，原来的选中状态样式保持不变
    if (document.querySelector('.liactive')) return
    // 我们删除了选中状态的li 让他的前一个li选中

    if (index !== 0) {
      // 例如第二个 删除完第一个之后 要变成1 不然就是死的
      index--
    }
    console.log(index)
    // 手动调用点击事件
    that.lis[index] && that.lis[index].click()
  }
  // 添加
  addTab() {
    // this指向 点击的+按钮
    that.clearClass()
    // 创建li和section元素
    var li =
      '<li class="liactive"><span> 新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
    var section = '<section class="conactive">新测试项</section>'
    // 把两个元素追加到对应的父元素里
    // insertAdjacentHTML不会对原数组产生影响  （beforeend后面，添加的内容） 
    that.ul.insertAdjacentHTML('beforeend', li)
    that.fsection.insertAdjacentHTML('beforeend', section)
    // 执行初始化方法
    that.init()
  }

  // 修改
  editTab() {
    // this.innerHTML会被覆盖 不会追加
    var str = this.innerHTML
    this.innerHTML = '<input type="text" />'
    // span标签里面input标签的第一个 所以是children[0]
    var input = this.children[0]
    input.value = str
    // 文本框文字处于选中状态
    input.select()
    input.onblur = function () {
      // 获取文档层次中的父对象
      // 当前指向的input赋值给父级的span标签
      this.parentNode.innerHTML = this.value
    }
    // 按下回车 也可以把input的值给span
    input.onkeyup = function (e) {
      if (e.keyCode === 13) {
        // 手动调用失去焦点 事件
        this.blur()
      }
    }
  }
}

new Tab('#tab')
