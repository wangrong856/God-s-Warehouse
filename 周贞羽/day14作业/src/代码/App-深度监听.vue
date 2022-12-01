<template>
  <div>
    <input type="text" v-model="user.name" />
    <input type="text" v-model.number="user.age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        age: 0,
      },
    }
  },
  watch: {
    user: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      deep: true,
      immediate: true, //网页打开  handler执行一次
    },
  },
}
</script>

<style scoped></style>
