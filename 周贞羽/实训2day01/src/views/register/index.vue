<template>
  <div class="register">
    <div class="box">
      <el-form :model="Formsync" :rules="FormRules">
        <el-form-item prop="account">
          <el-input v-model="Formsync.account"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="Formsync.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="registerfn">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { register } from "@/Api/index";
export default {
  data() {
    return {
      Formsync: {
        account: "17600000000", //手机号
        password: "s123456", //密码
      },
      //   校验
      FormRules: {
        account: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1(3|4|5|6|7|8|9)\d{9}$/,
            message: "手机号输入不正确",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
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
    // 注册事件
        async registerfn() {
        // this.$refs.FormRefs.validate(async (isok)=>{
            // if(isok){
              const res= await register(this.Formsync)
              console.log(res);
              this.$router.push('/login')
            // }
        // })
    },
  },
};
</script>

<style scoped>
.register {
  width: 100vw;
  height: 100vh;
  background: slateblue;
  position: relative;
  background: url(../../assets/lou.jpg);
}
.box {
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