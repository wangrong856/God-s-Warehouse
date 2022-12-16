<template>
    <div class="login">
        <div class="login-con">
           <el-form :model="loginform" :rules="loginRules" ref="loginRef">
              <el-form-item prop="mobile">
                 <el-input  prefix-icon="el-icon-user-solid" v-model="loginform.mobile" />
              </el-form-item>
              <el-form-item prop="password">
                 <el-input type="password"  prefix-icon="el-icon-s-goods" v-model="loginform.password"  suffix-icon="el-icon-view"/>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="login">登录 </el-button>
              </el-form-item>
           </el-form>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
        data() {
            return {
                loginform: {
                    mobile:"13800000002",
                    password:"123456"
                },
                loginRules:{
                    mobile:[
                        {required:true,message:"请输入手机号",trigger:'blur'},
                        {pattern:/^1[3456789]\d{9}$/,message:"手机号格式不正确",trigger:'blur'}
                    ],
                    password:[
                        {required:true,message:"请输入密码",trigger:'blur'},
                        {min:6,max:15,message:"密码长度为6~15位",trigger:'blur'},
                    ]
                }
            }
        },
        methods:{
            ...mapActions('my_user',['loginAsync']),
            login(){
                this.$refs['loginRef'].validate(async isOk=>{
                    if(isOk){
                    //    登录操作
                    await this.loginAsync(this.loginform)
                    this.$router.push('/home')
                    }else{
                        console.log("error")
                        return false 
                    }
                })
            }
        }
    }
</script>

<style scoped>
.login{
    height: 100%;
    background-color: palegreen;
}
.login .login-con{
  width: 300px;
  height: 200px;
  padding: 20px;
  background-color: #fff;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>