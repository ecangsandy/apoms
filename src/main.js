import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueFilterDateFormat from "vue-filter-date-format";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { mainAxios, apomAxios } from "./utils/apilocal";
import { ips } from "./utils/apilocal";
import "./registerServiceWorker";
import VueMobileDetection from 'vue-mobile-detection'
Vue.use(VueMobileDetection)
Vue.use(VueFilterDateFormat);

Vue.use(VueSweetalert2);
Vue.config.productionTip = true;

new Vue({
  mode: "history",
  router,
  store,
  vuetify,
  mainAxios,
  apomAxios,
  ips,
  // VueMobileDetection,
  render: (h) => h(App),
}).$mount("#app");
