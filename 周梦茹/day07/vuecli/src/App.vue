<template>
  <div>
    <van-tabs
      v-model="active"
      background="#68841e"
      title-active-color="#0d238f"
      title-inactive-color="white"
    >
      <van-tab title="全部">
        <div class="box">
          <van-checkbox
            v-model="flag"
            checked-color="#000"
            @click="checkAll(flag)"
            >全选</van-checkbox
          >
          <a href="javascript:;" @click="delAll">删除选中</a>
        </div>
        <div class="goods" v-for="(item, index) in data" :key="item.id">
          <van-card>
            <template #tags>
              <p>订单价格:{{ item.price }}</p>
            </template>
            <template #title>
              <h1>{{ item.name }}</h1>
            </template>
            <template #price>
              <p>商品描述:{{ item.subscribe }}</p>
            </template>
            <template #num>
              <van-checkbox
                v-model="item.checked"
                checked-color="#000"
                @click="changone(index)"
              ></van-checkbox>
            </template>
          </van-card>
        </div>
      </van-tab>
      <van-tab title="未付款">未付款</van-tab>
      <van-tab title="已付款">已付款</van-tab>
      <van-tab title="已发货">已发货</van-tab>
      <van-tab title="已完成">已完成</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "App",

  data() {
    return {
      active: 0,
      // flag: false,
    };
  },

  mounted() {},

  methods: {
    ...mapMutations(["changone", "checkAll","delAll"]),
  },
  computed: {
    ...mapState(["data"]),
    flag: {
      get() {
        return this.data.every(item=>item.checked)
      },
      set(val) {
        this.checkAll(val)
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;
  a {
    color: #b4bca5;
  }
}
</style>