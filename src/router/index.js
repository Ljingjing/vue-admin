import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import Login from "../views/Login/index.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: "login"
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;