<template>
  <div class="a">
   
      <div class="box" >
        <span>{{results.num1}}</span>
        <span>+</span>
        <span>{{results.num2}}</span>
        <span>=</span>
        <input type="text" v-model="results.result">
        <button @click="submit(index)">提交</button>
      </div>
  </div>
</template>

<script>
export default {
    props:['results','index'],
    data(){
        return {
            bian:""
        }
    },
    methods:{
    submit(index){
      let yu=this.results.num1+this.results.num2==this.results.result
      if(yu){
        this.bian='成功'
        this.$emit('update:vidate','成功')
        // this.results[index].status='成功'
      }else{
        this.bian='失败'
        this.$emit("update:vidate",'失败')
        // this.results[index].status='失败'
      }
      this.$emit('update:disabled',true)
    }
  }
}
</script>

<style scoped >
   
</style>