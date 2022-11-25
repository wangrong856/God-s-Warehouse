<template>
  <div class="reverse">
    {{msg|zhu}}
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'678910'
        }
    },
    filters:{
        one(val){
            var aolg=val.length-1;
            var obj="";
            for(var i=aolg;i>=0;i--){
                obj+=val[i];
            }
            return obj
        }
    }
}
</script>

<style>

</style>