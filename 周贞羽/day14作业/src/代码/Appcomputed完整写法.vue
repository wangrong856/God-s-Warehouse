<template>
  <div>
    <span>姓名</span>
    <input type="text" v-model="fullName" />
  </div>
</template>

<script>
export default {
  computed: {
    fullName: {
      // 给fullName赋值的时候触发set方法  （文本框写入内容）
      set(v) {
        console.log(v)
      },
      // 使用fullName的值的时候触发get方法
      get() {
        return '无名'
      },
    },
  },
}
</script>

<style scoped></style>
