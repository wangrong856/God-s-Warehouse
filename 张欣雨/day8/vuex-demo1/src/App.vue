<template>
  <div class="app">
    <div class="b">
      <router-link to="/home">品牌案例</router-link> |
      <router-link to="/my">全选反选案例</router-link> |
      <router-link to="/books">买点书案例</router-link> |
      <router-link to="/tab">tab</router-link>|
      <router-link to="/pupil">学生信息</router-link>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.app {
  width: 700px;
  margin: auto;
}
.b{
  display: flex;
  justify-content: center;
  align-items: center;
}
button{
  border: 1px solid #ccc;
}
</style>