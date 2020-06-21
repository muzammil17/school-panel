import axios from "axios";
import { serverUrl } from "../utils/Constants";

function Api(url, method, data) {
  console.log(serverUrl + url);
  var token = localStorage.getItem("token");
  console.log(token);
  console.log(`bearer ${token}`);
  if (
    method === "get" ||
    method === "Get" ||
    method === "delete" ||
    method === "Delete"
  ) {
    return axios({
      method: method,
      url: serverUrl + url,
      params: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    });
  }
  return axios({
    method: method,
    url: serverUrl + url,
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    config: {
      headers: { "Content-Type": "application/json" },
    },
  });
}
export { Api };
