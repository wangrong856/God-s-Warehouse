<template>
  <view>
    <view v-for="(item,index) in goodsDataList" :key="index" @click="getTodetail(item)">
      <my-goods :item="item"></my-goods>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        reqObj:{
          query:"",
          cid:"",
          pagenum:1,
          pagesize:10,
        },
        total:0,
        goodsList:[],
        goodsDataList:[],
        flag:false
      };
    },
    onLoad(options) {
      this.reqObj.cid = options.id ? options.id : ""
      this.getGoods()
    },
    onPullDownRefresh(){
      this.goodsList = []
      this.getGoods()
      uni.stopPullDownRefresh()
    },
    onReachBottom(){
      if(this.reqObj.pagenum*this.reqObj.pagesize > this.total){
        return uni.$obtainGet("",{},"没有更多了")
      }
      if(this.flag) return 
      this.reqObj.pagenum += 1
      this.getGoods()
    },
    methods:{
      async getGoods(){
        this.flag = true
         this.goodsList = await uni.$obtainGet("goods/search",this.reqObj)
         this.flag = false
         this.goodsDataList = [...this.goodsDataList,...this.goodsList.goods]
         this.total = this.goodsList.total
      },
      getTodetail(item){
        uni.navigateTo({
          url:"/subpkg/subpkg_detail/subpkg_detail?goods_id="+item.goods_id
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
