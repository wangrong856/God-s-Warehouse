<template>
  <div id="app">
    <!-- <top @y="add"></top>
     <list :arr="arr"></list> -->
     <router-view></router-view>
  </div>
</template>
<script>
// import list from "@/components/list.vue"
// import top from  "@/components/top.vue"
export default {
    name: 'App',
    // components:{
    //   list,
    //   top
    // },
    data() {
        return {
            arr:[]
        };
    },

    mounted() {
        
    },

    methods: {
      add(v){
         this.arr.push(v)
         
      }
    },
};
</script>
<style lang="scss">

</style>
