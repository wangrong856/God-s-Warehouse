<template>
    <div>
        <!-- watch  求两个数的和 显示在页面上 -->
        <input type="text" v-model.number="a">
        <input type="text" v-model.number="b">
        {{num}}
    </div>
</template>

<script>
export default {
    name: 'Day09Three',

    data() {
        return {
          num:0,
          a:"",
          b:""
        };
    },
    watch:{
      a(){
        this.num=this.a+this.b
      },
      b(){
        this.num=this.a+this.b
      },
      deep:true
        
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>