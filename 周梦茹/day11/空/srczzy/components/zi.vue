<template>
  <div class="zi">
    {{visible}}
    <button @click="changeNum">更改num</button>
  </div>
</template>

<script>
export default {
    props:{
        visible:{
            type:Number,
        }
    },
    data(){
        return {
            n:2
        }
    },
    methods:{
        changeNum(){
            this.$emit('update:visible',this.n+5)
        }
    }
}
</script>

<style>

</style>