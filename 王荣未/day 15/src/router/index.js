import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: () => import("@/views/Login") },
  {
    path: "/home",
    redirect: "/welcome",
    component: () => import("@/views/Home"),
    children: [
      { path: "/welcome", component: () => import("@/views/Welcome") },
      { path: "/users", component: () => import("@/views/user/users") },
      { path: "/goods", component: () => import("@/views/goods/goods") },
      { path: "/roles", component: () => import("@/views/prowr/roles") },
      { path: "/rights", component: () => import("@/views/prowr/rights") },
      { path: "/categories", component: () => import("@/views/goods/categories") },
      { path: "/orders", component: () => import("@/views/order/orders") },
      { path: "/reports", component: () => import("@/views/report/reports") },
      { path: "/params", component: () => import("@/views/prowr/params") },
    ],
  },
];

const router = new VueRouter({
  routes,
});

// 路由拦截
router.beforeEach((to, from, next) => {
  let token = window.localStorage.token
  if(to.path == '/login')return next()
  if(!token)return next('/login')
  return next()
});
export default router;
