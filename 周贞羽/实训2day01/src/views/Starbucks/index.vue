<template>
  <div class="starbuck">
    <el-container>
      <el-aside width="200px">
        <!-- 引入左侧菜单 -->
        <side-all></side-all>
      </el-aside>
      <el-container>
        <el-header>
          星巴克
          <el-button type="success" plain class="tbun" @click="SignOut"
            >退出</el-button
          >
        </el-header>
        <el-main>
          <!-- 开启二级路由 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideAll from "@/components/SideAll.vue";
export default {
  components: {
    SideAll,
  },
  methods: {
    // 退出主页 (清空token，跳转登录页)
    SignOut() {
      this.$store.dispatch("my_user/TokenDel");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.tbun {
  float: right;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  /* text-align: center; */
  line-height: 60px;
  padding-top: 10px;
  box-sizing: border-box;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  line-height: 25px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>