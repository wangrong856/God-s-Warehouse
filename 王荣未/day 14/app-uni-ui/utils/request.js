import {$http} from "@escook/request-miniprogram"
$http.baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1/'

$http.beforeRequest = function (options) {
  // do somethimg...
  uni.showLoading({
    title:"数据加载中"
  })
}
// 请求完成之后做一些事情  响应拦截器
$http.afterRequest = function () {
  // do something...
  uni.hideLoading();
}
export default $http