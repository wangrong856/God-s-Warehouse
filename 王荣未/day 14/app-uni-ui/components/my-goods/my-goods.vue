<template>
    <view class="vi_con" >
            <view class="vi_left"> 
        <image :src="item.goods_big_logo || nullImage" mode=""></image>
      </view>
      <view class="vi_right">
        <view class="vi_text">{{item.goods_name}}</view>
        <view class="vi_price">¥ {{item.goods_price | toFixed}}</view>
      </view>
    </view>
</template>

<script>
  export default {
    name:"my-goods",
    data() {
      return {
        nullImage:"https://www.toptal.com/designers/subtlepatterns/uploads/moroccan-flower.png"
      };
    },
    props:{
      item:{
        type:Object,
        default:{}
      }
    },
    filters:{
      toFixed(v){
        return Number(v).toFixed(2)
      }
    }
  }
</script>

<style lang="scss">
  .vi_con{
    width: 100%;
    display: flex;
    margin-bottom: 15rpx;
    .vi_left{
      width: 256rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      image{
        width: 250rpx;
        height: 250rpx;
      }
    }
    .vi_right{
      flex: 1;
      padding: 20rpx;
      font-size: 30rpx;
      // width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .vi_text{
        width: 442rpx;
        text-overflow: ellipsis;
        white-space: pre-line;
        overflow: hidden;
      }
      .vi_price{
        color: red;
      }
    }
    
  }

</style>