<template>
  <div class="full">
    <span>姓名</span>
    <input type="text" v-model="fullover">
  </div>
</template>

<script>
export default {
    computed:{
        fullover:{
            set(v){
                console.log(v);
            },
            get(){
                return "加油"
            }
        }
    },
}
</script>

<style>

</style>