// 引入axios
import axios from 'axios'

// 1-创建axios实例
// 每次发送请求，axios都会把接口基地址  拼接到我们接口地址的前面

const instance = axios.create({
  // 接口基地址
  baseURL: 'http://shiyansong.cn:8888/api/private/v1/',
  // 请求超时时间
  timeout: 1000,
})

// 2请求拦截  和响应拦截

// 添加请求拦截器
// 任何一个请求发送之前都要先执行请求拦截中的代码
instance.interceptors.request.use(
  function (config) {
    // 请求头上设置token

    let token = localStorage.getItem('token')
    if (token) {
      // 请求头上设置token
      // config.headers['Authorization'] = token
      config.headers.Authorization = token
    }

    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应回来的数据进行共性处理
    // console.log(response, 'response')
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 导出实例

export default instance
