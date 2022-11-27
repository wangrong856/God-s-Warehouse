<template>
  <div class="watch">
    <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
    data(){
        return {
            name:""
        }
    },
    /*
    可以侦听data/computed属性值的改变
    watch:{
       变量名(newVal,oldVal){
          // 变量名对应的值改变 这里自动触发
        }
     }
    */
    watch:{
        // name(newz,oldz){
        //     console.log(newz,oldz);
        // }
        name:{
            handler(newz,oldz){
                console.log(newz,oldz);
            },
            deep:true,
            immediate:true
        }
    }
}
</script>

<style>

</style>