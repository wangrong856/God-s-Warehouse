import axios from 'axios'
import {Loading, Message} from 'element-ui'
import {getToken} from '@/utils/auth'

let loadingInstance;
function startLoading(){
   loadingInstance = Loading.service({
      text:"拼命加载中...",
      background:"rgba(0,0,0,0.6)"
   })
}

function endLoading(){
    loadingInstance.close()
}



// 创建实例
let instance=axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:3000
})


// 请求拦截
instance.interceptors.request.use(
    config=>{
        // 查看是否有token 有的话返回数据
        if(getToken()){
            // 请求头设置token
            config.headers.Authorization=getToken()
        }
        startLoading()
        return config  //一定要返回config
    },
    error=>{
        // 没有的话提示信息
        endLoading()
        return Promise.reject(error)
    }
)

// 响应拦截
instance.interceptors.response.use(
    // 成功
    (response)=>{
        // 提示
        endLoading()
        // console.log(response)
        // 解构数据
        let {data,status,statusText}=response
        if(status===200){
            return data
        }else{
          Message.error(statusText)
          return Promise.reject(new Error(statusText))
        }
    },
    // 失败
    (err)=>{
        // 提示
        endLoading()
       Message.error(err.message)  //提示错误信息
       return Promise.reject(err)  //返回执行错误 让当前的执行链接跳出成功  直接进入catch
    }
)


export default instance 