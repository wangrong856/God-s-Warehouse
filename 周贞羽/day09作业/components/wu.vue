<template>
  <div class="five">
    商品清单如下：
   <div v-for="(item,index) in shuz" :key="index">
    <p>
        <span>{{item.shopName}}</span>
        <span>{{item.price}}元/份</span>
    </p>
   </div>
   请选择购物数量
   <div v-for="(item,ind) in sz" :key="ind">
    <p>
        <span>{{item.shopName}}</span>
        <span>
            <button @click="jia(item)">+</button>
            {{item.count}}
            <button @click="jian(item)">-</button>
        </span>
    </p>
   </div>
   <p>总价为：{{zong}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shuz: [
        { shopName: "可比克薯片", price: 5.5, count: 0 },
        { shopName: "草莓酱", price: 3.5, count: 0 },
        { shopName: "红烧肉", price: 55, count: 0 },
        { shopName: "方便面", price: 12, count: 0 },
      ],
      sz: [
        { shopName: "可比克薯片", price: 5.5, count: 0 },
        { shopName: "草莓酱", price: 3.5, count: 0 },
        { shopName: "红烧肉", price: 55, count: 0 },
        { shopName: "方便面", price: 12, count: 0 },
      ],
     
    };
  },
  computed:{
    zong(){
        // 总价用reduce
       var zhi=this.sz.reduce((sum,item)=>sum+=item.count-0,0)
       return  zhi.toFixed(2)//留两位小数
    }
  },
  methods:{
    jia(i){
        return i.count++
    },
    jian(i){
        if(i.count==0){
            return 
        }else{
            return i.count--
        }
    }
  }
};
</script>

<style>
</style>