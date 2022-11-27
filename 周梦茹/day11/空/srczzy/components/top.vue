<template>
  <div class="one">
    <div class="match" >
      <span>{{ match.num1 }}</span>
      <span>+</span>
      <span>{{ match.num2 }}</span>
      <span>=</span>
      <input type="text" v-model="match.result" />
      <button @click="submit(index)" :disabled="match.isshow">提交</button>
    </div>
  </div>
</template>
 
<script>
export default {
    data(){
        return {
            oneto:"",
        }
    },
    props:['match','index'],
    methods:{
    submit(index){
        console.log(index);
        var submitresu=this.match.num1+this.match.num2==this.match.result;
        console.log(submitresu);

        if(submitresu){
            this.oneto='正确'
            this.$emit('update:vidate','正确');
            //  this.match[index].status="正确"
        }else{
            this.oneto='失败'
            this.$emit('update:vidate','失败')
            //  this.match[index].status="失败"
        }
        this.$emit('update:disabled',true)
    }
  }
};
</script>

<style>
.mcolor {
  margin: auto;
  width: 400px;
}
input {
  width: 35px;
  margin: 0px 5px;
}
.NoStatus{
    float: left;
}

</style>