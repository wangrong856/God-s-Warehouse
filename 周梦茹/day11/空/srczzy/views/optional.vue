<template>
  <div class="optional">
    <ul class="list">
        <li class="one" v-for="(item,index) in list" :key="index" >
            <h2 >
                <input @click="changechecked(index)" type="checkbox" v-model="item.checkeds">
                <!-- 默认把下面的li隐藏 点击谁 谁下面的数据显示 -->
                <span @click="zhouyu(index)">{{item.names}}</span>
              
                <ul class="children" v-show="item.isall"> 
                    <li v-for="(it,ind) in item.children" :key="ind">
                        <input type="checkbox" v-model="it.ischeck">
                        {{it.name}}
                    </li>
                </ul>
            </h2>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {
                    names:"水果",
                    checkeds:false,
                    isall:false,
                    children:[
                        {
                            name:"第一组",
                            ischeck:false
                        },
                        {
                            name:"第一组",
                            ischeck:false
                        },
                        {
                            name:"第一组",
                            ischeck:false
                        },
                        {
                            name:"第一组",
                            ischeck:false
                        },
                        {
                            name:"第一组",
                            ischeck:false
                        },
                    ]
                },
                {
                    names:"哈密瓜",
                    checkeds:false,
      
                    children:[
                        {
                            name:"第二组",
                            ischeck:false
                        },
                        {
                            name:"第二组",
                            ischeck:false
                        },
                        {
                            name:"第二组",
                            ischeck:false
                        },
                        {
                            name:"第二组",
                            ischeck:false
                        },
                        {
                            name:"第二组",
                            ischeck:false
                        },
                    ]
                },
                {
                    names:"香蕉",
                    checkeds:false,
                    isall:false,
                    children:[
                        {
                            name:"第三组",
                            ischeck:false
                        },
                        {
                            name:"第三组",
                            ischeck:false
                        },
                        {
                            name:"第三组",
                            ischeck:false
                        },
                        {
                            name:"第三组",
                            ischeck:false
                        },
                        {
                            name:"第三组",
                            ischeck:false
                        },
                    ]
                },
            ]
        }
    },
    // 因为全选和反选的数据都被绑定 所以不能用computed 要用watch监听
    watch:{
        list:{
            handler(){
                 this.list.forEach(item=>{
                    item.checkeds=item.children.every(it=>it.ischeck===true)
                })
            },
            deep:true
        }
    },
    methods:{
        zhouyu(index){
            this.list.forEach((item)=>{
                item.isall=false
            })
            this.list[index].isall=true
        },
        changechecked(index){
            this.list[index].children.forEach(item=>{
                return item.ischeck=!this.list[index].checkeds
            })
        }
    }
}
</script>

<style>
    .list>.one{
        padding: 0px 5px;
        box-sizing: border-box;
       list-style: none;
    }
    .list{
        padding: 10px 0px;
        box-sizing: border-box;
        /* height: 700px; */
        width: 600px;
        margin: 100px auto;
    }
    .list>li>h2{
        background: #ccc;
        padding: 0px 0px;
        box-sizing: border-box;
    }
    .list>li>h2>span{
        margin-left: 200px;
    }
    ul h2 .children li{
        background: white;
        list-style: none;
    }
</style>