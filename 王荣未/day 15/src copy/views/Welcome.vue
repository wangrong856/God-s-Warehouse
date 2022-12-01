<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: 'Deom03Welcome',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>

<!-- <template>
  <div class="welcome">
    <h1>welcome</h1>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in list" :key="item.id">
        <img class="img" :src="item.picUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="header_box">
      <ul>
        <li v-for="(item,index) in lisst" :key="index">
          <img src="../assets/logo.png" alt="" />
          <p>{{item.name}}</p>
          <p>{{item.age}}</p>
        </li>
      </ul>
    </div>
    <div class="foo" style="margin-bottom: 80px"></div>
    <router-link to=""></router-link>
  </div>
</template>

<script>
export default {
  name: "welcomeIndex",
  mounted() {
    this.getSwipt();
  },
  data() {
    return {
      list: [
      ],
      lisst: [
        {
          name:103289042804,
          age:"asdsadkwehjoeiruyrowe"
        },
        {
          name:103289042804,
          age:"asdsadkwehjoeiruyrowe"
        },
        {
          name:103289042804,
          age:"asdsadkwehjoeiruyrowe"
        },
        {
          name:103289042804,
          age:"asdsadkwehjoeiruyrowe"
        },
        {
          name:103289042804,
          age:"asdsadkwehjoeiruyrowe"
        },
      ],
    };
  },
  methods: {
    async getSwipt() {
      let { data: res } = await this.$http.get(
        "https://api.it120.cc/small4/banner/list"
      );
      console.log(res);
      this.list = res;
    },
  },
};
</script>

<style scoped lang="scss">
.my-swipe .van-swipe-item {
  color: #fff;
  text-align: center;
}
.img {
  width: 375px;
  height: 375px;
}
.header_box {
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      img {
        width: 100%;
        height: 300px;
      }
      p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style> -->
