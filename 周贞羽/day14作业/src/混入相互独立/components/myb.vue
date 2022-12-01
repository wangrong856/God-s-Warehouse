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
/* 
mixins里的生命周期函数会和组件的生命周期函数一起合并执行
mixin中的data数据在组件中可以使用
mixin中的methods函数在组件中可以调用
生命周期函数合并后执行的顺序，先执行mixin中的，后执行组件的
*/

// 引入混入对象
import { mixins } from '../mixins/index'
export default {
  data() {
    return { msg: 'hello' }
  },
  // 局部混入
  mixins: [mixins],
  created() {
    this.add()
    console.log(this.arr)
    console.log(this.msg)
  },
}
</script>

<style scoped></style>
