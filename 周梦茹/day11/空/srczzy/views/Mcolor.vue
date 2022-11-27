<template>
  <div class="mcolor">
    <h1>测试题</h1>
    <top v-for="(item,index) in match" :key="index" :index="index" :match="item" :vidate.sync="item.status"
    :disabled.sync="item.isshow"
    ></top>
    <bottom :match="match"></bottom>
    {{match}}
  </div>
</template>

<script>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue'
export default {
    components:{
        top,
        bottom,
    },
  data() {
    return {
        match: [
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          result: "", //结果
          isshow: false, //是否提交
          status: "未完成", //状态
        },
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          result: "", //结果
          isshow: false, //是否提交
          status: "未完成", //状态
        },
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          result: "", //结果
          isshow: false, //是否提交
          status: "未完成", //状态
        },
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          result: "", //结果
          isshow: false, //是否提交
          status: "未完成", //状态
        },
        {
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
          result: "", //结果
          isshow: false, //是否提交
          status: "未完成", //状态
        },
      ],
    };
  },

};
</script>

<style scoped>

</style>