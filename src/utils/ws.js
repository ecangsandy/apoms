import { mainAxios } from "@/utils/apilocal";

var ips;
var MySocket;
//  fetch('https://api.ipify.org?format=json')
// .then(x => x.json())
// .then(({ ip }) => {
//     console.log(ip);
//     ips = ip;
// });
// const formdatas = new FormData();
// formdatas.append("ip", ips);
mainAxios.get("Setting/getWS/").then((response) => {
  ips = response.data.data.FS_PRINTER_NAME;
  //   console.log("ok" + response.data.data.FS_PRINTER_NAME);
  MySocket = new WebSocket(ips);
});
// console.log(ips);
// MySocket.onmessage = function (event) {
//     // this.messagews = "Nyambung";
//     console.log(event);
//   };

//   MySocket.onopen = function (event) {
//     // this.messagews = "Nyambungss";
//     // console.log(event)
//     // console.log("Successfully connected to the echo websocket server...")
//   };
//   console.log("Starting connection to " +ips);

export { ips, MySocket };
