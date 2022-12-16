<template>
    <div class="head-nav">
    
       <el-row>
        <el-col :span="6" class="logo-container">
            <span class="title">蓝图在线后台管理系统</span>
        </el-col>
        <el-col :span="6" class="user">
            <div class="userinfo">
                    <p>欢迎</p>
                    <p>{{userinfo.name}}</p>
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="info">个人信息</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-col>
       </el-row>
    </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
    export default {
        computed:{
          ...mapGetters(['userinfo'])
        },
        
        methods: {
            ...mapMutations('my_user',['removeToken']),
            handleCommand(com) {
                console.log(com)
                switch(com){
                    case "info":
                        break;
                    case "logout":
                        this.logout()
                        break;
                }
            },
            logout(){
            //  退出
                this.removeToken()
                this.$router.push('/login')
            }
        },
    }
</script>

<style scoped>
.head-nav{
    width: 100%;
    height: 60px;
    background:#324057;
    min-width: 600px;
    padding: 5px;
    color: #fff;
}
.logo-container{
    line-height: 60px;
    min-width: 400px;
}
.title{
    font-size: 20px;
    font-family: "微软雅黑";
    letter-spacing: 3px;
}
.user{
    
    text-align: right;
    float: right;
    padding: 10px;
}
.userinfo{

    display: flex;
    justify-content: flex-end;
   
}
</style>