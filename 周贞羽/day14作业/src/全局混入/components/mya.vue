<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index" @click="del(index)">
        {{ item }}
      </li>
    </ul>
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return { msg: 'world' }
  },

  created() {},
}
</script>

<style scoped></style>
