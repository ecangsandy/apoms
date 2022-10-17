import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// const qz = require("qz-tray");


import axios from "axios";
// axios.defaults.baseURL = "http://172.166.122.218/";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// const fs = require('./assets')
axios.defaults.baseURL = "http://172.166.122.217/e-pasien/api/";
// axios.defaults.baseURL = "http://172.166.122.218/vue-service/index.php/api/";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
