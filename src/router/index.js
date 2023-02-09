import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Apom from "@/views/KeyboardView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: Apom,
    meta: { title: 'APOM' }
    // redirect: "keyboard",
    // component: () => import("@/components/Main"),
    // children: [
    //   {
    //     path: "/keyboard",
    //     name: "keyboard",
    //     component: Apom,
    //     meta: { title: 'APOM' } 
    //   },
    // ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/print",
    name: "print",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PrintView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("@/components/LoginPage"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import("@/views/PendaftaranView"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  // console.log(to);
  document.title = to.meta.title || "Other Title";
  next();
});
export default router;
