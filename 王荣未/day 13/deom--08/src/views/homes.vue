<template>
  <div class="home">
    <hello-world :numEvent="num" @update:numEvent="num += $event"></hello-world>
    <hello-world :numEvent.sync="num"></hello-world>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  components: { HelloWorld },
  name: "Deom08Home",

  data() {
    return {
      num:1,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
