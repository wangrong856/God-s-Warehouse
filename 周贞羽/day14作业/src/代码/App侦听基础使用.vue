<template>
  <div>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  watch: {
    /* 变量名(newVal,oldVal){
      // 变量名对应的值改变 这里自动触发
    } */

    name(newVal, oldVal) {
      // newVal 当前最新值, oldVal 旧值
      console.log(newVal, oldVal)
    },
  },
}
</script>

<style scoped></style>
