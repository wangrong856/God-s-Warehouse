<template>
<el-container>
  <el-aside :width="isCollapse?'64px':'200px'">
    <div style="height:70px"></div>
    <side-bar></side-bar>
  </el-aside>
  <el-container>
    <el-header>
      <div class="head">
        <i class="el-icon-s-unfold" @click="setIsCollapse"></i>
        <div class="right">
            <img :src="staffPhoto" v-imagerror="defaultImg" width="50"/>
            <el-dropdown @command="logout">
                <span class="el-dropdown-link">
                    {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="home">首页</el-dropdown-item>
                    <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import SideBar from './components/SideBar.vue'
    export default {
  components: { SideBar },
      data() {
        return {
          defaultImg: require('@/assets/logo.png')
        }
      },
       computed:{
        ...mapGetters(['username','staffPhoto','isCollapse'])
       },
       methods:{
        ...mapMutations('my_user',['setIsCollapse']),
        logout(commd){
          console.log(commd)
          this.$store.dispatch('my_user/logout')
          this.$router.push('/login')
        }
       }
    }
</script>

<style scoped>
.el-container{
    height: 100%;
}
.head{
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.head>i{
    font-size: 24px;
}
.head .right{

}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;

  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;

  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;

  }

</style>