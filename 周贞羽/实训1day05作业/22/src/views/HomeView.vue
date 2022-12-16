<template>
  <div class="indexcontainer">
    <head-nav></head-nav>
    <left-menu></left-menu>
    <div class="rightcontainer">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import HeadNav from '@/components/HeadNav.vue'
import LeftMenu from '@/components/LeftMenu.vue'
  export default {
  components: { LeftMenu,HeadNav },
    
  }
</script>

<style  scoped>
.indexcontainer{
  width: 100%;
  height: 100%;
}
.rightcontainer{
  position: relative;
  top: 0;
  left: 180px;
  width:calc(100% - 180px);
  height: calc(100% - 60px);
}
</style>