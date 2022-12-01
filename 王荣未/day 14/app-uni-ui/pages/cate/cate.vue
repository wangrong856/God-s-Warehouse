<template>
  <view>
    <view class="vi_header_icons">
    </view>
    <view class="vi_goods-con" style="margin-bottom: 20rpx;" v-for="(item,index) in goodsList" :key="item.id">
      <uni-swipe-action >
        <!-- 基础用法 -->
        <uni-swipe-action-item :right-options="options"  @click="changCl(index)">
          <view class="vi_swiper_box">
            <view class="vi_top">
              <radio-group >
                <radio :value="item.flag" :checked="item.flag" style="text-align: center;" color="red" />
              </radio-group>
            </view>
            <view class="vi_image">
              <image :src="item.img" mode="widthFix" style="width: 200rpx;height: 200rpx;"></image>
            </view>
            <view class="vi_bot">
              <view class="vi_s">
                {{item.name}}
              </view>
              <view class="vi_x">
                <view class="vi_price">
                  ¥ {{item.price}}
                </view>
                <uni-number-box class="vi_number" v-model="item.num" @blur="blur" @focus="focus"
                  @change="changeValue" />
              </view>
            </view>
          </view>
        </uni-swipe-action-item>
      </uni-swipe-action>
    </view>
    
    <view class="vi_footer">
      <view class="vi_top">
        <radio-group >
          <radio :value="isEdit" :checked="isEdit" style="text-align: center;" color="red"  />全选
        </radio-group>
      </view>
      <view class="vi_cen">
        合计：<text>¥ {{checkPrice}}</text>
      </view>
      <view class="vi_bot">
        结算({{checkLeng}})
      </view>
    </view>
    
  </view>
</template>

<script>
  import { mapGetters } from "vuex";
import {
    mapState,
    mapMutations
  } from "vuex"
  export default {
    data() {
      return {
        isEdit:false,
        options: [{
          text: '删除',
          style: {
            backgroundColor: '#dd524d'
          }
        }]
      };
    },
    onLoad() {
      // console.log(this.goodsList);
      // console.log(this.goodsList);
    },
    methods: {
      ...mapMutations(["checkFx","checkAllTota","changCl"]),
    },
    computed: {
      ...mapState(["goodsList"]),
      ...mapGetters(['checkLeng','checkPrice'])
    },
    watch:{

    }
  }
</script>

<style lang="scss">
  .vi_swiper_box {
    width: 100%;
    display: flex;

    .vi_top {
      width: 8%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 10rpx;
      box-sizing: border-box;
    }

    .vi_image {
      width: 30%;
    }

    .vi_bot {
      box-sizing: border-box;
      flex: 1;
      padding: 10rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .vi_s{
        font-size: 25rpx;
      }
      .vi_x {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .vi_footer{
    width: 100%;
    height: 110rpx;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 10rpx;
    box-sizing: border-box;
    .vi_top{
      
    }
    .vi_cen{
      text{
        color: red;
      }
    }
    .vi_bot{
      width: 200rpx;
      height: 110rpx;
      line-height: 130rpx;
      background: #c00;
      color: #fff;
      text-align: center;
      font-size: 32rpx;
    }
  }
</style>
