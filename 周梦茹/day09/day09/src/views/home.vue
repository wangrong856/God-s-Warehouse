<template>
  <div>
    <div class="box">
      <div class="box1" v-for="(item, index) in data" :key="index">
        <img :src="item.dogImgUrl" alt="" />
        <p>{{ item.dogName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Day09Home",

  data() {
    return {
      data: [
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
          dogName: "博美",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=3450621237,1339787000&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=616",
          dogName: "泰迪",
        },
        {
          dogImgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.toutiaoimg.com%2Forigin%2Fpgc-image%2F8f648c4c66424ddaa68f38dacc55fd54%3Ffrom%3Dpc&refer=http%3A%2F%2Fp6.toutiaoimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671715130&t=7fd5927a12447b514ed7d853e72bc0d3",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=3900504685,1182230902&fm=253&fmt=auto&app=120&f=JPEG?w=440&h=634",
          dogName: "哈士奇",
        },
        {
          dogImgUrl:
            "https://img2.baidu.com/it/u=1487159074,1306979666&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=532",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=2601112964,2574209207&fm=253&fmt=auto&app=138&f=JPEG?w=511&h=500",
          dogName: "萨摩耶",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.box {
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .box1{
    width: 33%;
    text-align: center;
  }
  img {
    width: 100px;
    height: 100px;
  }
}
</style>