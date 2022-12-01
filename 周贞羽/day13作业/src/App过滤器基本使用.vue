<template>
  <div>
    {{ msg | toReverse }}
    <div>
      {{ msg | toUp }}
    </div>
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
    // 局部过滤器
    toUp(val) {
      return val.toUpperCase()
    },
  },
}
</script>

<style scoped></style>
