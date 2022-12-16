<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      router
      :collapse="isCollapse"
      active-text-color="#ffd04b">

      <item :item="route" 
      v-for="route in routes" 
      :key="route.path"></item>

      
      
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import item from './item'
    export default {
      components:{
        item
      },
        created(){
            console.log(this.$router.options)
        },
        computed:{
          ...mapGetters(['isCollapse']),
          routes(){
            return this.$router.options.routes  
          }
        }
    }
</script>

<style scoped>

</style>