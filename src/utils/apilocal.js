import axios from "axios";

// For common config
// axios.defaults.headers.post["Content-Type"] = "application/json";

const mainAxios = axios.create({
    baseURL: process.env.VUE_APP_BASE_API
});

const apomAxios = axios.create({ // api apom
    baseURL: process.env.VUE_APP_BASE_API_APOM
});

export {
  mainAxios,
  apomAxios
};