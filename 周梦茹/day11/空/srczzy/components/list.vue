<template>
  <div class="list">
    <table border="1" cellspacing="0">
            <tr>
                <td>商品序号</td>
                <td>商品名称</td>
                <td>商品价格</td>
                <td>删除商品</td>
            </tr>
            <tr v-for="(item,index) in list" :key="index">
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>
                    <button @click="del(index)">删除</button>
                </td>
            </tr>
        </table>
  </div>
</template>

<script>
export default {
    props:['list'],
    methods:{
       
       del(index){
           this.list.splice(index,1)
       }
   }
}
</script>

<style>

</style>