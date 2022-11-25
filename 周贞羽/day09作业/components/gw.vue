<template>
  <div class="gw">
    <table border="1" cellspacing="0">
        <tr style="font-weight:800">
            <td style="width:90px;text-align: center;">
                <input type="checkbox" v-model="isall">全选
            </td>
            <td style="width:80px">名称</td>
            <td style="width:80px">价格</td>
            <td style="width:80px">数量</td>
            <td style="width:80px">总价</td>
            <td style="width:80px">操作</td>
        </tr>
        <tr v-for="(item,index) in obj" :key="index">
            
            <td >
                <input v-model="item.checked" type="checkbox">
            </td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>
                <button @click="jian(item)">-</button>
                {{item.num}}
                <button @click="jia(item)">+</button>
            </td>
            <td>{{item.jiag}}</td>
            <td>
                <button @click="del(index)">删除</button>
            </td>
        </tr>
        <tr>
            <td>合计:</td>
            <td colspan="5">
                {{he}}
            </td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
    data(){
        return {
            obj:[
                {
                    name:"诸葛亮",
                    price:1000,
                    num:1,
                    jiag:1000,
                    checked:false,
                },
                {
                    name:"蔡文姬",
                    price:1500,
                    num:1,
                    jiag:1500,
                    checked:false,
                },
                {
                    name:"妲己",
                    price:2000,
                    num:1,
                    jiag:2000,
                    checked:false,
                },
                {
                    name:"鲁班",
                    price:2200,
                    num:1,
                    jiag:2200,
                    checked:false,
                },
            ]
        }
    },
    computed:{
        he(){
            return this.obj.reduce((sum,item)=>{
                if(item.checked==true){
                    return sum+=item.price*item.num
                }
                return sum
            },0)
        },
        isall:{
            set(v){
                return this.obj.forEach(item=>{
                    item.checked=v
                })
            },
            get(){
                return this.obj.every(item=>{
                    item.checked==true
                })
            }
        }
    },
    methods:{
        del(index){
           this.obj.splice(index,1)
        },
        jia(i){
            return i.num++
        },
        jian(i){
            if(i==0){
                return 
            }else{
                return i.num--
            }
        }
    }
}
</script>

<style>

</style>