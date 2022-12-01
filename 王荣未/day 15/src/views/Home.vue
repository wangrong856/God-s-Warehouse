<template>
  <div class="home">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <div class="header_box">
          <img src="../assets/heima.png" alt="" />
          <span> 电商后台管理系统 </span>
        </div>
        <!-- 返回按钮 -->
        <el-button type="info" @click="returnInfo">返回</el-button>
      </el-header>
      <el-container>
        <!-- 导航菜单 -->
        <el-aside :width="!isCollapse ? '200px' : '64px'">
          <!-- 折叠导航 -->
          <div class="aside_box" @click="isCollapse = !isCollapse">| | |</div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            text-color="#fff"
            background-color="#06442F"
            active-text-color="#ffd04b"
            :collapse-transition="false"
            :collapse="isCollapse"
            unique-opened
            router
          >
            <el-submenu
              :index="item.id + ''"
              v-for="item in menuFrom"
              :key="item.id"
            >
              <template slot="title">
                <i :class="[iconObj[item.id]]" style="margin-right: 8px"></i>
                <span>{{ item.authName }}</span>
              </template>
              <el-menu-item
                :index="'/' + it.path"
                v-for="it in item.children"
                :key="it.id"
              >
                <i class="el-icon-menu"></i>
                <span slot="title">{{ it.authName }}</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "homeIndex",

  data() {
    return {
      isCollapse: false,
      menuFrom: [],
      // 字体图标
      iconObj: {
        125: "iconfont icon-users",
        103: "iconfont icon-tijikongjian",
        101: "iconfont icon-shangpin",
        102: "iconfont icon-danju",
        145: "iconfont icon-baobiao",
      },
    };
  },

  mounted() {},
  created() {
    this.getmenuFrom();
  },

  methods: {
    // 返回方法
    returnInfo() {
      window.localStorage.removeItem("token");
      this.$router.push("/login");
    },
    // 获取导航
    async getmenuFrom() {
      let res = await this.$http.get("menus");
      let { data, meta } = res.data;
      if (meta.status != 200) return this.$message.error(meta.$message);
      this.menuFrom = data;
      // console.log(res);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  .el-container {
    width: 100%;
    height: 100%;
    .el-header {
      // background: #4b4453;
      background-image: linear-gradient(
        to right,
        #051937,
        #004d7a,
        #008793,
        #00bf72,
        #a8eb12
      );
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        vertical-align: middle;
      }
      span {
        font-size: 20px;
        color: #fff;
      }
    }
    .el-aside {
      // background: #008f7a;
      background-image: linear-gradient(
        to right,
        #06442f,
        #06442f,
        #06442f,
        #06442f,
        #06442f
      );
      .aside_box {
        line-height: 30px;
        text-align: center;
        color: #fff;
        background: #06442f;
      }
    }
    .el-main {
      // background-color: #eaedf1;
      background-image: linear-gradient(
        to right top,
        #ffc7e4,
        #e1b6d9,
        #c3a7cc,
        #a597bc,
        #8888ab,
        #7d89aa,
        #728aa8,
        #698aa4,
        #6e9bb0,
        #75abb9,
        #80bbc1,
        #90cbc7
      );
    }
  }
}
</style>
