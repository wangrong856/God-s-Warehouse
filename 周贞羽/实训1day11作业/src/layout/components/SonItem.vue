<template>
  <div class="sonitem">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router 
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <item-sync :item="route"
       v-for="route in routes" :key="route.path"></item-sync>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ItemSync from './ItemSync.vue'
export default {
  components:{
    ItemSync
  },
    created(){
      console.log(this.$router.options);
    },
    computed:{
      ...mapGetters(['isCollapse']),
      routes(){
        return this.$router.options.routes
      }
    }
}
</script>

<style>

</style>