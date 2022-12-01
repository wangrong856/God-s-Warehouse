<template>
  <div>
    <!-- <myb :visible="num" @update:visible="num = $event"></myb> -->

    <!-- 语法糖 
     sync修饰符是自定义一个事件，然后通知父组件
      $event 就是传递的参数
      更改父组件的数据
    
    -->
    <myb :visible.sync="num"></myb>
  </div>
</template>

<script>
import Myb from './components/myb.vue'
export default {
  components: { Myb },
  data() {
    return {
      num: 0,
    }
  },
  methods: {},
}
</script>

<style scoped></style>
