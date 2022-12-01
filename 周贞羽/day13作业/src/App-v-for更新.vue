<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="revBtn">数组翻转</button>
    <button @click="sliceBtn">截取前3个</button>
    <button @click="updateBtn">更新第一个元素值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [3, 4, 5, 6, 7],
    }
  },
  methods: {
    revBtn() {
      // /reverse 数组翻转 可以让v-for更新
      this.arr.reverse()
    },
    sliceBtn() {
      // 数组slice不会造成v-for更新
      // slice不会改变原始数组
      // this.arr.slice(0, 3)

      // 解决v-for更新----覆盖原始数组
      let newArr = this.arr.slice(0, 3)
      this.arr = newArr
    },
    updateBtn() {
      // 更新某个值 v-for检测不到
      // this.arr[0] = 1000

      // 解决办法  this.$set(更新的目标结构，更新位置，更新值)
      this.$set(this.arr, 0, 2000)
    },
  },
}
</script>

<style scoped></style>
