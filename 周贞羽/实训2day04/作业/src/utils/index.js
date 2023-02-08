import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
const repoase=axios.create({
    baseURL:"http://ajax-api.itheima.net",
    timeout:3000
})
// 请求拦截器
repoase.interceptors.request.use(
    config=>{
        if(store.getters.token){
            config.headers.Authorization=`${store.getters.token}`
        }
        return config
    }
)




// 响应拦截器
repoase.interceptors.response.use(
    (reponse)=>{
        console.log(reponse);
        let {statusText,data,status}=reponse
        if(status==200){
            return data.data
        }
    },
    (error)=>{
            Message.error(error)
            return Promise.reject(error)
    }
)

export default repoase