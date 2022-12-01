<template>
  <view>
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 750rpx;">
      <swiper-item v-for="(t,i) in goods_info.pics" :key="i">
        <view class="swiper-item">
          <image :src="t.pics_big" style="width: 100%;" mode="widthFix" @click="onPerView(i)"></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="vi_con">
      <view class="vi_top">
        ¥ {{goods_info.goods_price}}
      </view>
      <view class="vi_cen">
        <view class="vi_left">
          {{goods_info.goods_name}}
        </view>
        <view class="vi_right">
          <uni-icons type="star" size="20"></uni-icons>
          收藏
        </view>
      </view>
      <view class="vi_bot">
        快递：免运费
      </view>
    </view>
    <rich-text :nodes="goods_info.goods_introduce"></rich-text>
    <view class="goods-carts">
      <uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
        @buttonClick="buttonClick" />
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex"
  export default {
    data() {
      return {
        goods_info: {},
        options: [{
          icon: 'shop',
          text: '店铺',
          infoBackgroundColor: '#007aff',
          infoColor: "#f5f5f5"
        }, {
          icon: 'cart',
          text: '购物车',
          info: 2
        }],
        buttonGroup: [{
            text: '加入购物车',
            backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
            color: '#fff'
          },
          {
            text: '立即购买',
            backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
            color: '#fff'
          }
        ],
      };
    },
    onLoad(options) {
      // console.log(options);
      this.getGoodsDetail(options.goods_id)
    },
    methods: {
      ...mapMutations(['submitGoods']),
      onClick(e) {
        console.log(e,1);
      },
      buttonClick(e) {
        // console.log(e,2)
        if(e.index == 0){
          let obj = {
            img:this.goods_info.goods_small_logo,
            name:this.goods_info.goods_name,
            price:this.goods_info.goods_price,
            num:this.goods_info.goods_number,
            id:this.goods_info.goods_id,
            flag:false
          }
          // console.log(obj);
          this.submitGoods({...obj})
          uni.switchTab({
            url:"/pages/cate/cate"
          })
        }
      },
      async getGoodsDetail(goods_id) {
        this.goods_info = await uni.$obtainGet("goods/detail", {
          goods_id
        })
        // console.log(this.goods_info);
      },
      onPerView(i) {
        uni.previewImage({
          current: i,
          urls: this.goods_info.pics.map(v => v.pics_big)
        })
      }
    },
    computed:{
      ...mapState(['goodsList'])
    }
  }
</script>

<style lang="scss">
  .goods-carts {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    position: fixed;
    left: 0;
    right: 0;
    /* #ifdef H5 */
    left: var(--window-left);
    right: var(--window-right);
    /* #endif */
    bottom: 0;
  }

  .vi_con {
    width: 100%;
    display: flex;
    flex-direction: column;

    .vi_top {
      padding: 6px;
      color: red;
    }

    .vi_cen {
      width: 100%;
      display: flex;

      .vi_left {
        width: 70%;
        font-size: 25rpx;
        padding: 6px;
      }

      .vi_right {
        flex: 1;
        font-size: 30rpx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #cecece;
        color: #ccc;
      }
    }

    .vi_bot {
      font-size: 29rpx;
      color: #cecece;
      padding: 6px;
    }
  }
</style>
