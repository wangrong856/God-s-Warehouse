<template>
  <div class="gou3">
    <ul class="u1">
      <li class="li1" v-for="(item, index) in sz" :key="index">
        <img :src="item.dogImgUrl" alt="" />
        <p @click="targetColor(item,index)" ref="refdag">{{ item.dogName }}</p>
      </li>
    </ul>
    <div class="right">
      你喜欢的狗如下:
      <ul>
        <li v-for="(item,index) in shuz" :key="index">
            {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      sz: [
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
          dogName: "博美",
        },
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
          dogName: "泰迪",
        },
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "哈士奇",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "萨摩耶",
        },
      ],
      shuz:[]
    };
  },
  methods:{
    targetColor(item,index){
        this.r=Math.floor(Math.random()*255)-0;
        this.g=Math.floor(Math.random()*255)-0;
        this.b=Math.floor(Math.random()*255)-0;
        this.shuz.push(item.dogName)
        this.$refs.refdag[index].style.background=`rgb(${this.r},${this.g},${this.b})`
    } 
  }
};
</script>
  
  <style>
.gou3 {
  width: 100%;
  height: 486px;
  display: flex;
}
.gou3 .right {
  width: 100px;
  height: 485px;
  border: 1px solid black;
}
.u1 {
  width: 50.4%;
  height: 486px;
  border: 1px solid black;
  box-sizing: border-box;
}
.u1 .li1 {
  width: 255px;
  height: 240px;
  float: left;
  border: 1px solid black;
}
.u1 .li1 img {
  width: 255px;
  height: 200px;
}
p {
  text-align: center;
  margin-top: 4px;
}
</style>