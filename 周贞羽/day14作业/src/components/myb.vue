<template>
  <div>
    {{ visible }}

    <button @click="changeNum">更改num</button>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Number,
    },
  },
  data() {
    return {
      n: 8,
    }
  },
  methods: {
    changeNum() {
      // 通知父组件更改num   -----传递参数
      // this.$emit('numEvent', this.n + 2)

      this.$emit('update:visible', 5)
    },
  },
}
</script>

<style scoped></style>
