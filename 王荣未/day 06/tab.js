
// 获取全局this
var then;

// 创建class
class Tab {
    // 函数构造
    constructor(id) {
        // 获取全局this
        then = this
        // 获取最大的盒子
        this.tab = document.getElementById(id)
        // 获取ul标签
        this.ul = this.tab.querySelector("ul")
        // 获取详情数据
        this.tabscon = this.tab.querySelector(".tabscon")
        // 页面初始化调用函数
        this.init()
    }

    // 创建初始化函数
    init() {
        // 获取多的数据
        this.Elupdate()
        this.tab.querySelector(".tabadd").onclick = this.addTab
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].ind = i
            this.lis[i].onclick = this.togooleTab
            this.icon[i].onclick = this.removeIcon
            this.span[i].ondblclick = this.edit
            this.sec[i].ondblclick = this.edit
        }
    }

    Elupdate() {
        this.lis = this.tab.querySelectorAll("li")
        this.sec = this.tab.querySelectorAll("section")
        this.icon = this.tab.querySelectorAll(".icon-guanbi")
        this.span = this.tab.querySelectorAll("li span:first-child")
    }

    togooleTab() {
        then.clearClass()
        this.className = "liactive"
        then.sec[this.ind].className = "conactive"
    }

    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ""
            this.sec[i].className = ""
        }
    }

    addTab() {
        then.clearClass()
        var li = `<li class="liactive">
                    <span> 新数据1</span>
                    <span class="iconfont icon-guanbi"></span>
                </li>`
        var sec = `<section class="conactive"> 新数据1</section>`
        // then this innerHTML push unshift
        then.ul.insertAdjacentHTML("beforeend", li)
        then.tabscon.insertAdjacentHTML("beforeend", sec)
        then.init()
    }

    removeIcon(e) {
        e.stopPropagation();
        var index = this.parentNode.ind
        then.lis[index].remove()
        then.sec[index].remove()
        then.init()
        if (document.querySelector(".liactive")) return
        if (index != 0) {
            index--
        }
        then.lis[index] && then.lis[index].click()
    }

    edit() {
        var str = this.innerHTML
        this.innerHTML = '<input type="text">'
        var input = this.children[0]
        input.value = str
        input.select()
        input.onblur = function () {
            this.parentNode.innerHTML = this.value
        }
        input.onkeyup = function (e) {
            if (e.keyCode == 13) {
                this.blur()
            }
        }
    }
}

new Tab("tab")