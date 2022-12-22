<template>
  <div class="login">
    <div class="logininfo">
      <el-form label-width="70px" :model="loginform" :rules="loginrules" ref="loginRef">
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="loginform.mobile"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginform.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      loginform: {
        mobile: "13800000002",
        password: "123456",
      },
      loginrules: {
        mobile: [
          { required: true, message: "手机号输入不正确", trigger: "blur" },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: "手机号输入不正确",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "密码输入不正确", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "密码输入不正确",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions('my_user',['loginuse']),
    login() {
            this.$refs.loginRef.validate(async isok=>{
                if(isok){
                   await this.loginuse(this.loginform)
                    this.$router.push('/')
                }
            })
    },
  },
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: paleturquoise;
}
.logininfo {
  width: 350px;
  height: 250px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>