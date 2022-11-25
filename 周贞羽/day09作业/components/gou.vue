<template>
  <div class="box">
    <div class="box1">
      <img src="../assets/gou.png" alt="" />
      <p @click="gouClick">这是一个孤独可怜的狗</p> 
    </div>
    <div class="box1" style="border-left:none">
      <img src="../assets/gou.png" alt="" />
      <p>这是一个孤独可怜的狗</p>
    </div>
  </div>
</template>

<script>

export default {
    methods:{
        gouClick(){

        }
    }
};
</script>

<style scoped >
.box{
    width: 100%;
    height: 230px;
    display: flex;
    text-align: center;
}
.box .box1{
    width: 250px;
    height: 230px;
    border: 1px solid black;
}
.box .box1 img{
    width: 250px;
    height: 200px;

}
</style>