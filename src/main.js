import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// import VueHtmlToPaper from "vue-html-to-paper";
import VueFilterDateFormat from "vue-filter-date-format";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// const qz = require("qz-tray");
const token = localStorage.getItem("token");
// const base1 = 'http://172.166.122.218/vue-service/index.php/api'

// import axios from "axios";
import { mainAxios, apomAxios } from "./utils/apilocal";
import { ips } from "./utils/apilocal";
import "./registerServiceWorker";
// import { setHeaderToken } from "./utils/auth";
// axios.defaults.baseURL = "http://172.166.122.218/";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// const fs = require('./assets')
// axios.defaults.baseURL = "http://172.166.122.217/e-pasien/api/";
// axios.defaults.baseURL = "h";
// const axios1 = axios.create({
//   baseURL: 'ttp://172.166.122.218/vue-service/index.php/api/'
// });
// const options = {
//   name: "_blank",
//   specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
//   styles: [
//     "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
//     // 'https://unpkg.com/kidlat-css/css/kidlat.css',
//     "./print.css",
//   ],
//   timeout: 1000, // default timeout before the print window appears
//   autoClose: false, // if false, the window will not close after printing
//   windowTitle: window.document.title, // override the window title
// };
Vue.use(VueFilterDateFormat);
// Vue.use(VueHtmlToPaper, options);
// or using the defaults with no stylesheet
// Vue.use(VueHtmlToPaper);
Vue.use(VueSweetalert2);
Vue.config.productionTip = true;

// new Vue({
//   router,
//   store,
//   vuetify,
//   VueHtmlToPaper,
//   render: (h) => h(App),
// }).$mount("#app");

// if (token) {
//   setHeaderToken(token);
// }
// store.dispatch("get_user", token).then(() => {
  new Vue({
    mode: "history",
    router,
    store,
    vuetify,
    // VueHtmlToPaper,
    mainAxios,
    apomAxios,
    ips,
    // vuetify,
    render: (h) => h(App)
  }).$mount("#app");
// });
// router.beforeEach((to, from, next) => {
//   // const publicPages = ["/login"];
//   // const authRequired = !publicPages.includes(to.path);
//   // const loggedIn = localStorage.getItem("token");
//   // // trying to access a restricted page + not logged in
//   // // redirect to login page
//   // if (authRequired && !loggedIn) {
//   //   next("/login");
//   // } else {
//   // }
//   next();
// });
