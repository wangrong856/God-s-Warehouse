<template>
  <div class="login">
    <div class="box1">
      <el-form :model="Formsync">
        <el-form-item prop="account">
          <el-input v-model="Formsync.account"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="Formsync.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginsync">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Formsync: {
        account: "17600000000", //手机号
        password: "s123456", //密码
      },
    };
  },
  methods:{
    loginsync(){
      // 调用模块里登录的事件 传递手机号和密码
        this.$store.dispatch('my_user/loginsync',this.Formsync)
        // 成功的话提示信息
        this.$message.success("登录成功")
        // 跳转到主页
        this.$router.push('/Starbucks')
    }
  }
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url(../../assets/lou.jpg);
}
.box1 {
  width: 300px;
  height: 240px;
  background: rgb(200, 214, 227);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>