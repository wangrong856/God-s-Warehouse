<template>
  <div>
    <van-tabs
      v-model="active"
      title-active-color="blue"
      background="#68841e"
      title-inactive-color="#fff"
    >
      <van-tab title="全部">
        <div class="da">
          <div class="title">
            <van-checkbox v-model="checked" >全选</van-checkbox>
            <span @click="delAll" :style="{ color: '#6b851b', 'font-size': '14px' }"
              >删除选中</span
            >
          </div>
          <!-- 滑动单元格 -->
          <div class="meige" v-for="item in data" :key="item.id">
            <van-swipe-cell>
              <van-card
                :title="item.name"
              >
                <template #desc>
                  <p>商品价格：{{item.price}}</p>
                </template>
                <template #price>
                  <p>商品描述：{{item.subscribe}}</p>
                </template>
                <template #num>
                    <van-checkbox  v-model="item.flag"></van-checkbox>
                </template>
              </van-card>
              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                />
              </template>
            </van-swipe-cell>
          </div>
        </div>
      </van-tab>
      <van-tab title="未付款">
         <!-- 滑动单元格 -->
         <div class="meige" v-show="item.state == 1" v-for="item in data" :key="item.id">
            <van-swipe-cell>
              <van-card
                :title="item.name"
              >
                <template #desc>
                  <p>商品价格：{{item.price}}</p>
                </template>
                <template #price>
                  <p>商品描述：{{item.subscribe}}</p>
                </template>
                <template #num>
                    <van-button @click="item.state = 2">付款</van-button>
                </template>
              </van-card>
              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                />
              </template>
            </van-swipe-cell>
          </div>
      </van-tab>
      <van-tab title="已付款">
           <!-- 滑动单元格 -->
           <div class="meige" v-show="item.state == 2" v-for="item in data" :key="item.id">
            <van-swipe-cell>
              <van-card
                :title="item.name"
              >
                <template #desc>
                  <p>商品价格：{{item.price}}</p>
                </template>
                <template #price>
                  <p>商品描述：{{item.subscribe}}</p>
                </template>
                <template #num>
                    <van-button @click="item.state = 3">发货</van-button>
                </template>
              </van-card>
              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                />
              </template>
            </van-swipe-cell>
          </div>
      </van-tab>
      <van-tab title="已发货">
           <!-- 滑动单元格 -->
           <div class="meige" v-show="item.state == 3" v-for="item in data" :key="item.id">
            <van-swipe-cell>
              <van-card
                :title="item.name"
              >
                <template #desc>
                  <p>商品价格：{{item.price}}</p>
                </template>
                <template #price>
                  <p>商品描述：{{item.subscribe}}</p>
                </template>
                <template #num>
                    <van-button @click="item.state = 4">收藏</van-button>
                </template>
              </van-card>
              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                />
              </template>
            </van-swipe-cell>
          </div>
      </van-tab>
      <van-tab title="已完成">
           <!-- 滑动单元格 -->
           <div class="meige" v-show="item.state == 4" v-for="item in data" :key="item.id">
            <van-swipe-cell>
              <van-card
                :title="item.name"
              >
                <template #desc>
                  <p>商品价格：{{item.price}}</p>
                </template>
                <template #price>
                  <p>商品描述：{{item.subscribe}}</p>
                </template>
                <template #num>
                    <van-button @click="item.state = 1">再来一单</van-button>
                </template>
              </van-card>
              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                />
              </template>
            </van-swipe-cell>
          </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "MyvueHome",

  data() {
    return {
      active: ""
    };
  },

  mounted() {
    // console.log(this.data);
  },

  methods: {
    ...mapMutations(['checkAll','delAll'])
  },
  computed: {
    ...mapState(["data"]),
    checked:{
        get(){
         return this.data.every(item=>item.flag)
        },
        set(v) {
            this.checkAll(v)
            // console.log(v);
        }
    }
  },
  
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.title {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.da {
  width: 100%;
  height: 100%;
  background-color: #f6f6f5;
}
.goods-card {
  margin: 0;
  background-color: white;
}
.meige {
  width: 90%;
  height: 100px;
  margin: 20px auto;
  border-radius: 25%;
}
.delete-button {
  height: 100%;
}
</style>