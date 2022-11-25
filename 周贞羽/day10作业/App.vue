<template>
  <div>
    <Child>
      <a href="#">123</a>
    </Child>
    <hr />
    <!-- slot 被废弃 -->
    <my-child>
      <template slot="two">
        <h1>123</h1>
      </template>
      <template slot="one">
        <h4>123445</h4>
      </template>
    </my-child>

    <!-- 推荐写法 -->
    <my-child>
      <template v-slot:one>
        <h1>123</h1>
      </template>
      <template v-slot:two>
        <h4>123445</h4>
      </template>
    </my-child>
  </div>
</template>

<script>
import Child from './components/Child.vue'
import MyChild from './components/MyChild.vue'
export default {
  components: { Child, MyChild },
}
</script>

<style scoped></style>
