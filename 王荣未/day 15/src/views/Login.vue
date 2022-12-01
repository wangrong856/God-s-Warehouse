<template>
  <div class="login">
    <!-- 登陆布局 -->
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登陆表单 -->
      <el-form
        :model="loginForm"
        status-icon
        :rules="loginrules"
        ref="loginruleForm"
        class="demo-ruleForm login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-user"
            v-model="loginForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-3702mima"
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <!-- 点击登录 -->
          <el-button type="primary" @click="loginSubmitForm()">登陆</el-button>
          <!-- 点击重制 -->
          <el-button @click="loginResetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginIndex",

  data() {
    return {
      // 表单内容
      loginForm: {
        username: "admin",
        password: "123456",
      },
      // 校验表单
      loginrules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },

  mounted() {},

  methods: {
    // 登陆方法
    loginSubmitForm() {
      // 校验表单
      this.$refs.loginruleForm.validate(async (caclback) => {
        if (!caclback) return;
        let res = await this.$http.post("http://123.57.143.201:8888/api/private/v1/login", this.loginForm);
        let { data, meta } = res.data;
        if (meta.status != 200) return this.$message.error(meta.msg);
        this.$message.success(meta.msg);
        window.localStorage.token = data.token;
        this.$router.push("/home");
      });
    },
    // 重制方法
    loginResetForm() {
      this.$refs.loginruleForm.resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  // background: #00c9a7;
  background-image: linear-gradient(
    to right top,
    #00c9a7,
    #00c8c5,
    #00c6df,
    #00c1f2,
    #32bafd,
    #4cb4fe,
    #62aefd,
    #75a8fa,
    #67a4f9,
    #56a0f7,
    #419cf6,
    #2098f4
  );
  .login_box {
    width: 450px;
    height: 300px;
    background: #fff;
    padding: 60px 20px 0px 0px;
    position: relative;
    top: 50%;
    border-radius: 8px;
    left: 50%;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    .avatar_box {
      background-color: #fff;
      position: absolute;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -85%);
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      -webkit-box-shadow: 0 0 10px #ddd;
      box-shadow: 0 0 10px #ddd;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
    .login_form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
}
::v-deep .el-form-item__content {
  display: flex;
  justify-content: flex-end;
}
</style>
