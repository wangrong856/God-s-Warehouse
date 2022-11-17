
var that
class Tab {
    constructor(tabname) {
        // 获取大盒子元素
        this.tab = document.getElementById(tabname)
        // 获取ul元素
        this.ul = this.tab.querySelector('ul')
        // 获取tabscon元素
        this.tabscon = this.tab.querySelector('.tabscon')
        // 获取添加tabadd元素
        this.tabadd = this.tab.querySelector('.tabadd')
        // 初始化方法
        this.init()
    }
    // 初始化方法
    init() {
        // this 指向类实例对象
        // 存类的指向
        that = this
        // 获取所有li
        this.lis = this.tab.querySelectorAll('li')
        // 获取所有内容
        this.cons = this.tab.querySelectorAll('section')
        // 获取li标签里面第一个span标签
        this.spans = this.tab.querySelectorAll('.nav li span:first-child')
        // 获取所有删除
        this.removes = this.tab.querySelectorAll('.icon-guanbi')
        // 点击+调用添加方法
        this.tabadd.onclick = this.addTab
        // 遍历所有li
        for (var i = 0; i < this.lis.length; i++) {
            // 点击切换样式
            this.lis[i].onclick = this.toggle
            // 给li创建index属性存i
            this.lis[i].index = i
            // 点击x调用删除方法
            this.removes[i].onclick = this.removeTab
            // 双击span调用修改方法
            this.spans[i].ondblclick = this.edit
            // 双击内容调用修改方法
            this.cons[i].ondblclick = this.edit
        }
    }
    toggle() {
        //this 点击的事件源    
        // 清空所以li的样式 内容的样式
        that.clearClass()
        // 点击谁给谁添加样式
        this.className = 'liactive'
        // 点击谁给谁添加样式
        that.cons[this.index].className = 'conactive'

    }
    // 清空所以li的样式 内容的样式
    clearClass() {
        // this 指向类实例对象
        // 遍历所有li
        for (var i = 0; i < this.lis.length; i++) {
            //去掉所有li的样式 
            that.lis[i].className = ''
            //去掉所有内容的样式 
            that.cons[i].className = ''
        }
    }
    // 添加
    addTab() {
        // 调用清除全部样式
        that.clearClass()
        // 创建一个标题li
        var li = `<li class="liactive">
        <span> 新添加标题</span>
        <span class="iconfont icon-guanbi"></span>
            </li>`
        // 创建一个内容
        var section = `
        <section class="conactive">新内容</section>
        `
        // ul里面在后面添加li
        that.ul.insertAdjacentHTML('beforeend', li)
        // tabscon里面在后面添加section
        that.tabscon.insertAdjacentHTML('beforeend', section)
        // 重新初始化
        that.init()
    }
    // 删除
    removeTab(e) {
        // 阻止事件冒泡
        e.stopPropagation();
        // 获取父节点的index属性
        var index = this.parentNode.index
        // 从lis index位置删除元素
        that.lis[index].remove()
        // 从cons index位置删除元素
        that.cons[index].remove()
        // 判断是否删除是liactive的元素
        if (document.querySelector('.liactive')) return
        // 判断index不为0
        if (index !== 0) {
            // index--
            index--
        }
        // 手动调用我们的点击事件  不需要鼠标触发
        that.lis[index] && that.lis[index].click()
    }
    // 修改
    edit() {
        // 获取span文字
        var str = this.innerHTML
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // span修改为input输入框
        this.innerHTML = `<input type="text">`
        // 获取span的子节点
        var input = this.children[0]
        //  input自动选中文字内容
        input.select()
        // 给input默认显示内容
        input.value = str
        // 当input失去焦点
        input.onblur = function () {
            // 把input框内容赋值给他的父节点
            this.parentNode.innerHTML = this.value
        }
        // 当键盘敲下回车
        input.onkeyup = function (e) {
            if (e.keyCode == 13) {
                // 让input框自动失去焦点
                this.blur()
            }
        }

    }
}
new Tab('tab')
