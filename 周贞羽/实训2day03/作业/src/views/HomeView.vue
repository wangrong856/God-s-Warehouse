<template>
  <div class="application application-offset">
    <div class="container-fluid container-application">
      <div class="sidenav show" id="sidenav-main">
        <!-- Sidenav header -->
        <div class="sidenav-header d-flex align-items-center">
          <a class="navbar-brand" href="./index.html">
            <span class="logo">·ITCAST·</span>
          </a>
        </div>
        <!-- User mini profile -->
        <div
          class="
            sidenav-user
            d-flex
            flex-column
            align-items-center
            justify-content-between
            text-center
          "
        >
          <!-- Avatar -->
          <div>
            <a href="#" class="avatar rounded-circle avatar-xl">
              <img
                alt="Image placeholder"
                src="https://yanxuan-item.nosdn.127.net/8b27deb1670c53e67c42ca3e1ed6fd12.jpg"
                class=""
              />
            </a>
            <div class="mt-5">
              <h5 class="mb-0 text-white">积云前端</h5>
              <span class="d-block text-sm text-white opacity-8 mb-3"
                >数据可视化</span
              >
              <a
                href="javascript:;"
                class="
                  btn btn-sm btn-white btn-icon
                  rounded-pill
                  shadow
                  hover-translate-y-n3
                "
              >
                <span class="btn-inner--text">学前端来积云</span>
              </a>
            </div>
          </div>
        </div>
        <!-- Application nav -->
        <div class="nav-application clearfix">
          <a href="./index.html" class="btn btn-square text-sm">
            <span class="btn-inner--icon d-block"
              ><i class="bi bi-house bi-2x"></i
            ></span>
            <span class="btn-inner--icon d-block pt-2">首页</span>
          </a>
          <a href="./student.html" class="btn btn-square text-sm active">
            <span class="btn-inner--icon d-block"
              ><i class="bi bi-people bi-2x"></i
            ></span>
            <span class="btn-inner--icon d-block pt-2">学生</span>
          </a>
          <a href="javascript:;" class="btn btn-square text-sm">
            <span class="btn-inner--icon d-block"
              ><i class="bi bi-columns bi-2x"></i
            ></span>
            <span class="btn-inner--icon d-block pt-2">排版</span>
          </a>
          <a href="javascript:;" class="btn btn-square text-sm">
            <span class="btn-inner--icon d-block"
              ><i class="bi bi-files bi-2x"></i
            ></span>
            <span class="btn-inner--icon d-block pt-2">资料</span>
          </a>
          <a href="javascript:;" class="btn btn-square text-sm">
            <span class="btn-inner--icon d-block"
              ><i class="bi bi-receipt bi-2x"></i
            ></span>
            <span class="btn-inner--icon d-block pt-2">就业</span>
          </a>
          <a href="javascript:;" class="btn btn-square text-sm">
            <span class="btn-inner--icon d-block"
              ><i class="bi bi-gear bi-2x"></i
            ></span>
            <span class="btn-inner--icon d-block pt-2">设置</span>
          </a>
        </div>
        <!-- Misc area -->
        <div class="card bg-gradient-warning">
          <div class="card-body">
            <h5 class="text-white">哈喽, 朋友!</h5>
            <p class="text-white mb-4">
              为什么不现在开始学习前端，创造一些令人惊叹的东西呢？
            </p>
            <a
              href="http://itcast.cn"
              class="btn btn-sm btn-block btn-white rounded-pill"
              target="_blank"
              >Get started</a
            >
          </div>
        </div>
      </div>
      <div class="main-content position-relative">
        <nav
          class="navbar navbar-main navbar-expand-lg navbar-dark navbar-border"
          id="navbar-main"
        >
          <div class="container-fluid">
            <!-- Navbar nav -->
            <div
              class="collapse navbar-collapse navbar-collapse-fade"
              id="navbar-main-collapse"
            >
              <ul class="navbar-nav align-items-lg-center">
                <!-- Home  -->
                <li class="nav-item">
                  <a class="nav-link pl-lg-0" href="./index.html"> 首页 </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link pl-lg-0" href="./index.html"> 积云教育 </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link pl-lg-0" href="./index.html"> 程序员 </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link pl-lg-0" href="./index.html"> 文档 </a>
                </li>
              </ul>
              <!-- Right menu -->
              <ul
                class="
                  navbar-nav
                  ml-lg-auto
                  align-items-center
                  d-none d-lg-flex
                "
              >
                <li class="nav-item dropdown dropdown-animate">
                  <a
                    class="nav-link pr-lg-0"
                    href=".dropdown-menu"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div class="media media-pill align-items-center">
                      <span class="avatar rounded-circle">
                        <img
                          alt="Image placeholder"
                          src="https://yanxuan-item.nosdn.127.net/8b27deb1670c53e67c42ca3e1ed6fd12.jpg"
                        />
                      </span>
                      <div class="ml-2 d-none d-lg-block">
                        <span class="mb-0 text-sm font-weight-bold">Admin</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    @click="layout"
                    class="nav-link pl-lg-0"
                    id="logout"
                    href="javascript:;"
                  >
                    退出
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="page-content">
          <router-view></router-view>
          <!-- footer -->
          <div class="footer pt-5 pb-4 footer-light" id="footer-main">
            <div class="row text-center text-sm-left align-items-sm-center">
              <div class="col-sm-6">
                <p class="text-sm mb-0">
                  © 2022
                  <a href="https://itcast.cn" class="h6 text-sm" target="_blank"
                    >前端学科</a
                  >. All rights reserved.
                </p>
              </div>
              <div class="col-sm-6 mb-md-0">
                <ul class="nav justify-content-center justify-content-md-end">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Support</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Terms</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pr-0" href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- add Modal -->
    <div class="modal fade" id="modal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <!-- 当具体点击到添加或修改时，这个标题随机应变 -->
            <h5 class="modal-title">某标题</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form id="form" class="g-3 row" autocomplete="off" novalidate>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="input-group-label">姓名：</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="请输入姓名"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="input-group-label">性别：</label>
                  <div class="input">
                    <div class="form-check d-inline-block">
                      <input
                        value="0"
                        checked
                        id="cb01"
                        class="form-check-input"
                        type="radio"
                        name="gender"
                      />
                      <label for="cb01" class="form-check-label">男</label>
                    </div>
                    <div class="form-check d-inline-block">
                      <input
                        value="1"
                        id="cb02"
                        class="form-check-input"
                        type="radio"
                        name="gender"
                      />
                      <label for="cb02" class="form-check-label">女</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="input-group-label">年龄：</label>
                  <input
                    type="text"
                    name="age"
                    class="form-control"
                    placeholder="请输入年龄"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="input-group-label">组号：</label>
                  <input
                    type="text"
                    name="group"
                    class="form-control"
                    placeholder="请输入1-8组号"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="input-group-label">期望薪资：</label>
                  <input
                    type="text"
                    name="hope_salary"
                    class="form-control"
                    placeholder="请输入期望薪资"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="input-group-label">就业薪资：</label>
                  <input
                    type="text"
                    name="salary"
                    class="form-control"
                    placeholder="请输入就业薪资"
                  />
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="input-group-label">籍贯：</label>
                  <div class="input pl-0">
                    <select class="form-select custom-select" name="province">
                      <option value="">--省份--</option>
                    </select>
                    <select class="form-select custom-select" name="city">
                      <option value="">--城市--</option>
                    </select>
                    <select class="form-select custom-select" name="area">
                      <option value="">--地区--</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-blue" id="submit">确认</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 点击退出
    layout() {
      // 调用置空token的方法
      this.$store.dispatch("m_user/signout");
      // 重新跳转到登录页
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
</style>