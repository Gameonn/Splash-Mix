/* eslint-disable no-labels */
import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
});
// instance.defaults.headers.common["Authorization"] =
//   "XHAH77aAo8XYUEhMt4xB5E0MiyMvJITu_BvMrjOsGzs";
instance.defaults.params = {
  client_id: "XHAH77aAo8XYUEhMt4xB5E0MiyMvJITu_BvMrjOsGzs",
};

export default instance;
