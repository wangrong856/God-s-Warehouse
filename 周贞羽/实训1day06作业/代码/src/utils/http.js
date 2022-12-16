import store from '@/store'
import axios from 'axios'
import {Message} from 'element-ui'
import router from '@/router'

// 创建axios实例
const  http=axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000
})
// 请求拦截
http.interceptors.request.use(config=>{

    // 此处统一注入token
    if(store.getters.token){
      // 如果token存在 注入token
      config.headers['Authorization']=`Bearer ${store.getters.token}`
    }

    return config  //返回请求配置
},error=>{
  return Promise.reject(error)
})

// 响应拦截
http.interceptors.response.use(response=>{
  // return response
  let {code,data,message,success} =response.data
  if(success){
    return data
  }else{
    Message.error(message)
    return Promise.reject(message)
  }
},error=>{
    // error信息 里面有response的对象
    if(error.response&&error.response.data&&error.response.data.code===10002){
      // token过期了
      store.dispatch('my_user/logout')
      router.push('/login')
    }else{
      Message.error(error)
    }
    
    return Promise.reject(error)
})

export default http