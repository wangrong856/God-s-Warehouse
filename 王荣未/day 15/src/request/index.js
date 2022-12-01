import axios from "axios";
// 请求对象
const request = axios.create({
  // baseURL: "http://shiyansong.cn:8888/api/private/v1", // 请求的基准路径
  baseURL: 'http://123.57.143.201:8888/api/private/v1/',
  timeout: 5000, // 请求时间
});
// 请求拦截
request.interceptors.request.use(
  function (config) {
    // 每次发送请求  都检查 是否有token ==> 登录令牌
    // config.headers.Authorization = window.localStorage.get("token")
    config.headers.Authorization = window.localStorage.token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截
request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 抛出内容
export default request;
