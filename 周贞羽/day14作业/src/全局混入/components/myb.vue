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
    return { msg: 'hello' }
  },

  created() {
    this.add()
    console.log(this.arr)
    console.log(this.msg)
  },
}
</script>

<style scoped></style>
