<template>
  <div>
    <!-- 标签内的子标签/内容改变，diff算法如何对比 -->

    <ul id="myUl">
      <li v-for="(item, index) in arr" :key="item.id">
        {{ item.name }}
        <input type="text" />
      </li>
    </ul>

    <button @click="addFn">下标为1的位置新增1个</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        { id: 1, name: '老大' },
        { id: 2, name: '老2' },
        { id: 3, name: '老3' },
      ],
    }
  },
  methods: {
    addFn() {
      this.arr.splice(1, 0, { id: 4, name: '新来的' })
    },
  },
}
</script>

<style scoped></style>
