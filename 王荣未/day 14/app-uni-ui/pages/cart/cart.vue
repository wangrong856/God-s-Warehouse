<template>
  <view>
    <!-- 最大的盒子 -->
    <view class="vi_container_scroll">

      <!-- 左边的盒子 -->
      <scroll-view scroll-y="true" class="vi_scoll_left" :style="{height: wh + 'px'}">
        <view :class="['vi_left_item',i == index ? 'active' : '' ]" v-for="(item,index) in categoriesList" :key="index"
          @click="switchIndex(index)">
          {{item.cat_name}}
        </view>
      </scroll-view>

      <!-- 右边的盒子 -->
      <scroll-view class="vi_scoll_right" scroll-y="true" :style="{height: wh + 'px'}">
        <view class="vi_right_item" v-for="(item,index) in cateLeve2List" :key="index">
          <view class="vi_text">
            / {{item.cat_name}} /
          </view>
          <view class="vi_level3_con">
            <view class="vi_con_item" v-for="(ite,ind) in item.children" :key="ind" @click="onGoodsList(ite.cat_id)">
              <view class="vi_img">
                <image :src="ite.cat_icon" mode="widthFix"></image>
              </view>
              <view class="vi_ite_name">
                {{ite.cat_name}}
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        categoriesList: [],
        cateLeve2List: [],
        wh: 0,
        i: 0,
      };
    },

    onLoad() {
      let {
        windowHeight
      } = uni.getSystemInfoSync()
      this.wh = windowHeight
      this.getCategories()
    },
    methods: {
      async getCategories() {
        this.categoriesList = await uni.$obtainGet("categories")
        // console.log(this.categoriesList);
        this.cateLeve2List = this.categoriesList[0].children
      },
      switchIndex(index) {
        this.i = index
        this.cateLeve2List = this.categoriesList[index].children
      },
      onGoodsList(id){
        uni.navigateTo({
          url:"/subpkg/goods_list/goods_list?id="+id
        })
      }
    }
  }
</script>

<style lang="scss">
  .vi_container_scroll {
    display: flex;

    .vi_scoll_left {
      width: 210rpx;
      background-color: #ececec;

      .vi_left_item {
        line-height: 120rpx;
        text-align: center;
        font-size: 27rpx;

        &.active {
          background-color: #fff;
          position: relative;

          &::after {
            content: "";
            display: block;
            width: 6rpx;
            height: 60rpx;
            background: #c00;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
        }
      }
    }

    .vi_scoll_right {
      flex: 1;
      .vi_right_item{
        .vi_text{
          line-height: 80rpx;
          text-align: center;
          font-size: 30rpx;
        }
        .vi_level3_con{
          display: flex;
          flex-wrap: wrap;
          .vi_con_item{
            width: 33.3%;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 35rpx;
            box-sizing: border-box;
            margin-bottom: 20rpx;
            .vi_img{
              width: 100%;
              text-align: center;
              image{
                width: 80%;
              }
            }
          }
        }
      }
    }
  }
</style>
