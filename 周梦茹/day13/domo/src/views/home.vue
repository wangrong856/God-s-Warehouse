<template>
  <div>
    <button @click="add">点击</button>
  </div>
</template>

<script>
export default {
  name: "MyHome",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    add() {
      console.log(1);

    //   function throttle(fn, delay) {
    //     // 设置一个触发开关
    //     let canUse = true;
    //     return function () {
    //       //如果为true，就触发技能，否则就不能触发
    //       if (canUse) {
    //         fn.apply(this, arguments);
    //         //触发技能后，关闭开关
    //         canUse = false;
    //         //在3秒后打开开关
    //         setTimeout(() => (canUse = true), delay);
    //       }
    //     };
    //   }
    //   throttle()
    },
  },
};
</script>

<style lang="scss" scoped>
</style>