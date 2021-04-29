import Vue from "vue";
import VueRouter from "vue-router";
import AuthRequired from "./utils/AuthRequired";
import { adminRoot } from "./constants/config";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "./views/home"),
    // redirect: `${adminRoot}/piaf`,
  },
  {
    path: adminRoot,
    component: () => import(/* webpackChunkName: "app" */ "./views/app"),
    redirect: `${adminRoot}`,
    beforeEnter: AuthRequired,
    children: [
      { path: 'start', component: () => import(/* webpackChunkName: "piaf" */ './views/app/piaf/Start') },
      { path: 'account', component: () => import(/* webpackChunkName: "piaf" */ './views/app/account') },
      {
        path: "domain",
        component: () =>
          import(/* webpackChunkName: "domain" */ "./views/app/domain")
      },
      {
        path: "system",
        component: () =>
          import(/* webpackChunkName: "system" */ "./views/app/system")
      },
      // {
      //   path: "system",
      //   component: () =>
      //   import(/* webpackChunkName: "website" */ "./views/app/system/apptest")
      // },
      
      {
        path: "website",
        component: () =>
          import(/* webpackChunkName: "website" */ "./views/app/website")
      },
      
      {
        path: "noti",
        component: () =>
          import(/* webpackChunkName: "website" */ "./views/app/noti/notify")
      },
      {
        path: "create",
        component: () =>
          import(/* webpackChunkName: "website" */ "./views/app/noti/create")
      }
      
    ]
  },
  {
    path: "/error",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "user" */ "./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Login")
      },
      {
        path: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Register")
      },
      {
        path: "forgot-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ResetPassword")
      },
    ]
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history"
});

export default router;
