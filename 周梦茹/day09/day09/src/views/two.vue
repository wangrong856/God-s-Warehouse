<template>
  <div>
    <!-- computed的完整写法写全选反选 -->
    <ul>
      <li><input type="checkbox" v-model="checkAll" />全选</li>
      <li v-for="(item, index) in list" :key="index">
        <input type="checkbox" v-model="item.isok" />复选
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Day09Two",

  data() {
    return {
      list: [
        { isok: false },
        { isok: false },
        { isok: false },
        { isok: false },
        { isok: false },
      ],
    };
  },

  mounted() {},

  methods: {},
  computed: {
    checkAll: {
      set(v) {
        this.list.forEach((item) => (item.isok = v));
      },
      get() {
        return this.list.every((item) => item.isok == true);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  list-style: none;
}
</style>