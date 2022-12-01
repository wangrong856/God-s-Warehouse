import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login", component: () => import("@/views/Login"),
    children: [
      { path: "/welcome", component: () => import("@/views/Welcome") },
      { path: "/users", component: () => import("@/views/user/users") },
    ],
  },


  {
    path: "/home",component: () => import("@/views/Home"),
  },
];

const router = new VueRouter({
  routes,
});

// 路由拦截
router.beforeEach((to, from, next) => {
  // let token = window.localStorage.token;
  // // 如果没有token 则 去登录页面
  // if (!token && to.path == "/home") {
  //   return next("/login");
  // }
  next();
});
export default router;
