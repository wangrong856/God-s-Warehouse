<template>
  <div class="application application-offset">
    <div class="container-fluid container-application">
      <div class="main-content position-relative">
        <!-- Page content -->
        <div class="page-content">
          <div class="min-vh-100 py-5 d-flex align-items-center">
            <div class="w-100">
              <div class="row justify-content-center">
                <div class="col-sm-8 col-lg-4">
                  <div class="card shadow zindex-100 mb-0">
                    <div class="card-body px-md-5 py-5">
                      <div class="mb-5">
                        <h6 class="h3">积云教育-登录</h6>
                      </div>
                      <span class="clearfix"></span>
                      <form role="form" autocomplete="off">
                        <div class="form-group">
                          <label class="form-control-label">账号</label>
                          <div class="input-group input-group-merge">
                            <div class="input-group-prepend">
                              <span class="input-group-text"
                                ><i class="bi bi-person"></i
                              ></span>
                            </div>
                            <input
                              v-model="loginDates.username"
                              name="username"
                              type="text"
                              class="form-control"
                              id="input-email"
                              placeholder="请输入账号"
                            />
                          </div>
                        </div>
                        <div class="form-group mb-4">
                          <div
                            class="
                              d-flex
                              align-items-center
                              justify-content-between
                            "
                          >
                            <div>
                              <label class="form-control-label">密码</label>
                            </div>
                            <div class="mb-2">
                              <a
                                href="javascript:;"
                                class="
                                  small
                                  text-muted
                                  text-underline--dashed
                                  border-primary
                                "
                                >忘记密码</a
                              >
                            </div>
                          </div>
                          <div class="input-group input-group-merge">
                            <div class="input-group-prepend">
                              <span class="input-group-text"
                                ><i class="bi bi-key"></i
                              ></span>
                            </div>
                            <input
                              v-model="loginDates.password"
                              name="password"
                              type="password"
                              class="form-control"
                              id="input-password"
                              placeholder="请输入密码"
                            />
                            <div class="input-group-append">
                              <span class="input-group-text">
                                <a
                                  href="javascript:;"
                                  data-toggle="password-text"
                                  data-target="#input-password"
                                >
                                  <i class="bi bi-eye-fill text-blue"></i>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="mt-4">
                          <button
                            @click="loginsync"
                            id="btn-login"
                            type="button"
                            class="
                              btn btn-sm btn-info btn-icon btn-blue
                              rounded-pill
                            "
                          >
                            <span class="btn-inner--text">登录</span>
                            <span class="btn-inner--icon"
                              ><i class="bi bi-arrow-right"></i
                            ></span>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="card-footer px-md-5">
                      <small>没有注册？</small>
                      <router-link
                        to="/register"
                        class="small font-weight-bold text-blue"
                        >创建账号</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- toast -->
    <div
      class="position-fixed top-0 start-50 pt-4"
      style="z-index: 999; transform: translateX(-50%)"
    >
      <div id="myToast" class="toast bg-rgba">
        <div class="toast-body">提示消息</div>
      </div>
    </div>
 
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginDates: {
        username: "zzy129",
        password: "123456",
      },
    };
  },
  methods: {
    loginsync() {
      this.$store.dispatch("m_user/loginsyncs", this.loginDates);
      this.$message.success("登录成功")
      this.$router.push('/')
    },
  },
};
</script>

<style  scoped>
@import url(../assets/css/login.css);
</style>