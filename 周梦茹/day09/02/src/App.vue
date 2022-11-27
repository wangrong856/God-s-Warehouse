<template>
  <div class="app">
   <div class="app1">
    <router-link to="/mathematics">数学题</router-link> |
    <router-link to="/goods">购物车</router-link> |
    <router-link to="/food">买好吃的</router-link> |
    <router-link to="/sellOut">卖光了！</router-link> |
    <router-link to="/dog">狗狗</router-link> 
   </div>
<router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.app{
  width: 700px;
  margin: auto;
}
.app1{
  text-align: center;
}
</style>