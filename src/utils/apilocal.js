import axios from "axios";

// For common config
// axios.defaults.headers.post["Content-Type"] = "application/json";
let ips;
let iplocal;
const mainAxios = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
});

const apomAxios = axios.create({
  // api apom
  baseURL: process.env.VUE_APP_BASE_API_APOM,
});

mainAxios.get("Setting/getWS/").then((response) => {
  if (response.data.data) {
    ips = response.data.data.FS_PRINTER_NAME;
  } else {
    ips = "ws://172.166.122.218:8085/Print";
  }
  iplocal = response.data.iplocal;
  // console.log("ok" + response.data.data.FS_PRINTER_NAME);
  //  MySocket = new WebSocket(ips);
});

export { mainAxios, apomAxios, ips, iplocal };
