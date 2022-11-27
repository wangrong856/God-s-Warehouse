<template>
  <div class="app">
    <!-- 头部组件 -->
    <my-hander></my-hander>
    <!-- mylist组件 -->
    <my-list ></my-list>
    <!-- 底部tabber组件 -->
    <my-tabber></my-tabber>
  </div>
</template>

<script>

import myHander from './components/myHander.vue';
import myList from './components/myList.vue';
import myTabber from './components/myTabber.vue';
export default {
  components: {
    myHander, myList, myTabber
  },
  data() {
    return {
      arr: []
    }
  },
  
}
</script>

<style scoped>
.app {
  width: 1000px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>