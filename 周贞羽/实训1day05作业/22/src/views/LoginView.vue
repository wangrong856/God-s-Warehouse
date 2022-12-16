<template>
  <div>
    <div class="register">
      <div class="regcon">
        <el-form
          ref="registerRef"
          label-width="60px"
          :model="registerForm"
          :rules="registerRules"
        >
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerForm.email" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="registerForm.password" />
          </el-form-item>

          <el-form-item>
            <el-button @click="login" type="primary">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      registerForm: {
        email: "9888@qq.com",
        password: "123456",
      },
      registerRules: {
        email: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          {
            pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
            message: "邮箱格式不正确",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 16, message: "密码长度为6~16位", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    ...mapActions("my_user", ["loginAsync"]),
    async login() {
      // 1 调用actions的方法
      await this.loginAsync(this.registerForm);
      // 2跳转到主页
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.register {
  background-color: pink;
  width: 100vw;
  height: 100vh;
}
.regcon {
  width: 500px;
  height: 400px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  padding-top: 70px;
  padding-left:0px ;
  box-sizing: border-box;
}
</style>