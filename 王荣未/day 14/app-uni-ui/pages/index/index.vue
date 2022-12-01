<template>
  <view>
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="width: 100%;">
      <swiper-item v-for="item in swiperList" :key="item.goods_id">
        <navigator class="swiper-item" :url="'../../subpkg/subpkg_detail/subpkg_detail?goods_id='+item.goods_id"
          open-type="navigate">
          <image :src="item.image_src" mode="widthFix"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <view class="vi_header">
      <view class="vi_li" v-for="(item,index) in catitemsList" :key="index" @click="cartNavigator(index)">
        <image :src="item.image_src" mode="widthFix"></image>
      </view>
    </view>
    <view class="vi_body" v-for="(item,index) in footerList" :key="index">
      <image :src="item.floor_title.image_src" class="vi_header_img" mode="widthFix"></image>
      <view class="vi_body_ul">
        <view class="vi_left">
          <image :src="item.product_list[0].image_src" mode="widthFix"
            :style="{width:item.product_list[0].image_width + 'rpx'}"></image>
        </view>
        <view class="vi_right">
          <image :src="item.image_src" :style="{width:item.image_width + 'rpx'}" mode="widthFix"
            v-for="(item,index) in item.product_list" v-if="index !== 0" :key="index"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        swiperList: [],
        catitemsList: [],
        footerList: []
      };
    },

    onLoad() {
      this.getSwiper()
      this.getCatitems()
      this.getFooterData()
    },

    methods: {
      async getSwiper() {
        const {
          data: res
        } = await uni.$http.get("home/swiperdata")
        if (res.meta.status !== 200) {
          uni.showToast({
            title: '获取数据失败',
            duration: 2000,
            icon: 'none'
          });
          return false
        }
        this.swiperList = res.message
      },
      async getCatitems() {
        this.catitemsList = await uni.$obtainGet("home/catitems", {}, "请求失败了", 3000)
      },
      cartNavigator(index) {
        if (index == 0) {
          wx.switchTab({
            url: "../cart/cart"
          })
        }
      },
      async getFooterData() {
        this.footerList = await uni.$obtainGet("home/floordata")
      }
    },
  }
</script>

<style lang="scss">
  .vi_body {
    .vi_header_img {
      width: 100%;
    }

    .vi_body_ul {
      display: flex;

      .vi_left {
        width: 230rpx;
      }

      .vi_right {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
      }
    }
  }

  .swiper-item {
    width: 100%;
    height: 100%;

    image {
      width: 100%;
      height: 100%;
    }
  }

  .vi_header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .vi_header_img {
      width: 100%;
    }

    .vi_li {
      width: 20%;

      image {
        width: 100%;
      }
    }
  }
</style>
