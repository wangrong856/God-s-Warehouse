<template>
  <div class="gou2">
    <ul>
        <li v-for="(item,index) in sz" :key="index">
           <img :src="item.dogImgUrl" alt="">
           <p>{{item.dogName}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            sz:[
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
]
        }
    }
}
</script>

<style>
    ul{
        width: 79.4%;
        height: 486px;
        border: 1px solid black;
        box-sizing: border-box;
    }
    ul li{
        width: 200px;
        height: 240px;
        float: left;
        border: 1px solid black;
    }
    ul li img{
        width: 200px;
        height: 200px;
    }
    p{
        text-align: center;
        margin-top: 4px;
    }
</style>