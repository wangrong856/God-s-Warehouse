<template>
  <div class="yu">
    
    <aa v-for="(item, index) in arr" :key="index" :results="item" :index="index" :vidate.sync="item.status" :disabled.sync="item.isall"></aa>
    <bb :results="arr"></bb>
  </div>
</template>

<script>
import aa from "../components/aa.vue";
import bb from "../components/bb.vue";
export default {
  components: {
    aa,
    bb,
  },
  data() {
    return {
      arr: [
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          isall: false, //是否提交
          result: "", //结果
          status: "未完成", //状态
        },
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          isall: false, //是否提交
          result: "", //结果
          status: "未完成", //状态
        },
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          isall: false, //是否提交
          result: "", //结果
          status: "未完成", //状态
        },
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          isall: false, //是否提交
          result: "", //结果
          status: "未完成", //状态
        },
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          isall: false, //是否提交
          result: "", //结果
          status: "未完成", //状态
        },
      ],
    };
  },
};
</script>

<style>
.yu {
  margin-top: 100px;
}
.box {
  width: 400px;
  margin: auto;
}
p {
  background: #ccc;
}
.lis {
  list-style: none;
}
</style>