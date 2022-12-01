<template>
  <div>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseMessage }}</p>

    <p>{{ getMessage() }}</p>
    <p>{{ getMessage() }}</p>
    <p>{{ getMessage() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello word',
    }
  },
  computed: {
    // 变量
    reverseMessage() {
      console.log('计算属性执行了')
      return this.msg.split('').reverse().join('')
    },
  },

  methods: {
    getMessage() {
      console.log('methods执行了')
      return this.msg.split('').reverse().join('')
    },
  },
}
</script>

<style scoped></style>
