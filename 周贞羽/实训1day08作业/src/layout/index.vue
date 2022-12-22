<template>
  <div class="home">
    <el-container>
    <el-aside :width="isCollapse?'64px':'200px'">
      <div style="height:70px"></div>
      <son-item></son-item>
    </el-aside>
    <el-container>
      <el-header>
        <div class="imgpoto">
          <i class="el-icon-s-unfold" @click="setcollapse"></i>
          <el-dropdown @command="logout">
            <span class="el-dropdown-link">
              <img v-imgs="imgpotyt" class="imgsync" :src="staffPhoto" width="50px" />
              {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="home">首页</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
   
        <el-main>
          <!-- 二级路由 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SonItem from "./components/SonItem.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    SonItem,
  },
  data() {
    return {
      imgpotyt: require("../assets/logo.png"),
    };
  },
  computed: {
    ...mapGetters(["username", "staffPhoto", "isCollapse"]),
  },
  methods: {
    ...mapMutations("my_user", ["setcollapse"]),
    logout() {
      this.$store.dispatch("my_user/removeinfo");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.imgpoto {
  float: right;
}
img {
  width: 50px;
  height: 50px;
 
}
.imgsync {
  width: 50px;
  height: 50px;
  
}
.el-icon-s-unfold{
  position: fixed;
  top: 15px;
  left: 230px;
  font-size: 30px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  /* text-align: center; */
  /* line-height: 60px; */
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
  text-align: center;
  line-height: 160px;
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