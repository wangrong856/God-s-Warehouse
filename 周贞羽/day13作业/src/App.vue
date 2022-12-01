<template>
  <div>
    <div>使用翻转过滤器{{ msg | reverseFn('--') }}</div>
    <div>多个过滤器{{ msg | toUp | reverseFn('|') }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello word',
    }
  },
  filters: {
    // 翻转过滤器  -  | ..
    reverseFn(val, v) {
      return val.split('').reverse().join(v)
    },
    toUp(val) {
      return val.toUpperCase()
    },
  },
}
</script>

<style scoped></style>
