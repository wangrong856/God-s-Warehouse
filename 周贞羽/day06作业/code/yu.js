

var that;
class Zy{
    constructor(id){
        that=this
        // 获取最大盒子的id
        this.idd=document.querySelector(id)
        // 添加按钮（1）
        this.add=this.idd.querySelector('.tabadd')
        // li标签的父
        this.ull=this.idd.querySelector(".nav ul:first-child")
        // section标签的父
        this.fsection=this.idd.querySelector(".tabscon")
        this.init()
    }
    init(){
        this.updateNode()
        // 添加按钮绑定点击事件
        this.add.onclick=this.addTab
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i;
            this.lis[i].onclick=this.toggleTab//切换
            this.removeo[i].onclick=this.removesTab//删除
            this.sectons[i].ondblclick=this.liemsTab
            this.liem[i].ondblclick=this.liemsTab
        }
    }
    updateNode(){
        // li标签
        this.lis=this.idd.querySelectorAll('li')
        // span标签
        this.liem=this.idd.querySelectorAll('.nav li span:first-child')
        // 删除按钮
        this.removeo=this.idd.querySelectorAll(".icon-guanbi")
        // 下面内容部分
        this.sectons=this.idd.querySelectorAll('section')
    }
    // 切换
    // 点击li标签时 this指向 内容就置空 that指向 
    // 当前li标签的样式 this指向 内容的样式 that指向
    toggleTab(){
        that.clearClass()
        this.className='liactive'
        that.sectons[this.index].className='conactive'
    }
    // 清除所有li标签和内容标签的样式 干掉所有人
    clearClass(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className=""
            this.sectons[i].className=""
        }
    }
    // 删除
    removesTab(event){
        // 阻止事件冒泡 （点击li的时候span也会执行 所以会报错）阻止事件冒泡就只执行一次
        event.stopPropagation();
        // span标签删除 
        var index=this.parentNode.index
        console.log(index);
        that.lis[index].remove()
        that.sectons[index].remove()
        // 重新初始化 执行点击事件
        that.init()
        // 查看我们li标签里面看有没有数据 没有的话不执行
        if(document.querySelector('.liactive')) return ;
        // 删除第一个数据下标0的数据后 后面的数据下标进行减减 
        // 比如第一个删完了 第一个数据的下标-1
        if(index!==0){
            index--
        }
        // 下标为真的话添加点击事件
        that.lis[index]&&that.lis[index].click()
    }
    // 添加 
    
    addTab(){
        // 
        that.clearClass()
        var liy='<li class="liactive"><span> 新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        var sectiony='<section class="conactive">新测试项</section>'
        that.ull.insertAdjacentHTML('beforeend',liy)
        that.fsection.insertAdjacentHTML('beforeend',sectiony)
        // 执行初始化方法
        that.init()
    }
    // 修改
    liemsTab(){
      var str=this.innerHTML
      this.innerHTML='<input type="text"/>'
       var input=this.children[0]
      input.value=str
      input.select()
    //   失去焦点
      input.onblur=function(){
        this.parentNode.innerHTML=this.value
      }
    //   回车事件
      input.onkeyup=function(e){
        if(e.keyCode==13){
            this.blur()
        }
      }
    }
}
new Zy('#tab')