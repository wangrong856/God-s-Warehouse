<template>
  <div class="zzy">
    <span class="spa">品牌管理</span>
    <table class="table table-bordered" v-if="this.list.length>0">
        <tr style="font-weight:800;height: 50px;" >
            <td style="width:85px;">编号</td>
            <td style="width:145px;">资本名称</td>
            <td style="width:105px;">价格</td>
            <td style="width:525px;">创建时间</td>
            <td>操作</td>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
            <td style="border:1px solid rgb(212, 212, 212)">{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.time |todate}}</td>
            <td>
                <a href="JavaScript:;" @click="del(index)">删除</a>
            </td>
        </tr>
        <tr style="height:40px">
            <td>统计：</td>
            <td>总价钱为：{{sum}}</td>
            <td colspan="2">平均价：{{mean}}</td>
            <td></td>
        </tr>
    </table>
    <div v-else>暂无数据</div>
   
    <form class="form-inline">
        <div class="form-group">
             <input  class="form-control"  placeholder="资产名称" v-model="name">
             <input type="password" class="form-control"  placeholder="0" v-model="price">
             <button type="button" class="btn btn-primary btn-lg active" @click="addproperty">添加资产</button>
        </div>
    </form>
  </div>
</template>

<script>

export default {
  name: "zzyIndex",
  data() {
    return {
      list:JSON.parse(localStorage.getItem('list'))|| [
        { id: 100, name: "外套", price: 199, time: new Date("2010-08-12") },
        { id: 101, name: "裤子", price: 34, time: new Date("2013-09-01") },
        { id: 102, name: "鞋", price: 25.4, time: new Date("2018-11-22") },
        { id: 103, name: "头发", price: 19900, time: new Date("2020-12-12") },
      ],
      name:'',
      price:''
    };
  },
  computed:{
    // 总价
    sum(){
        return this.list.reduce((sum,item)=>sum+=item.price,0)
    },
    // 平均值
    mean(){
        var str=this.list.reduce((sum,item)=>sum+=item.price,0)/this.list.length
        return  str.toFixed(2)
    }
  },
  watch:{
    // 深度监听
    list:{
        handler(val){
            localStorage.setItem('list',JSON.stringify(val))
        },
        deep:true,
        immediate:true,
    },
 
  },
  methods: {
    // 添加
    addproperty(){
        let id=this.list[this.list.length-1].id;
        var obj={
            id:Number(id+1),
            name:this.name,
            price:Number(this.price),
            time:new Date()
        }
        if(this.name==""||this.price==""){
                alert("不能为空")
        }else{
            this.list.push(obj)
        }
        // 添加
        this.name="";
        this.price=0;
    },
    // 删除
    del(index){
        if(confirm("你确认删除吗")){
            this.list.splice(index,1)
        }
    }
  },
};
</script>

<style>
    .table{
        margin-top: 20px;
        width: 1000px;
         /* width: 800px; */
         margin-left: 20px;
         border-left: 1px solid rgb(212, 212, 212);
         border-right: 1px solid rgb(212, 212, 212);
    }
   .table tr td{
     border:1px solid rgb(212, 212, 212);
     padding-left:10px;

     box-sizing: border-box;
   }
   .spa{
    font-size: 28px;
   }
   .form-control{
    width: 180px;
    float: left;
   }
</style>    