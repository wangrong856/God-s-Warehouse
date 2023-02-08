import axios from "axios";
import { Base64 } from "js-base64";
import {getToken} from '@/utils/auth'
import store from "@/store";
import { Message } from "element-ui";
const stance = axios.create({
    baseURL: "/apit",
    timeout: 5000
})
const base64_token=Base64.encode(getToken()+ ":");
// 请求拦截器
stance.interceptors.request.use(
    config => {
        // 判断有token
        // if(getToken()){
            config.headers.Authorization=`Basic ${base64_token}`
        // }
        return config
    },
    error => {
        Message.error(error)
        return Promise.reject(error)
    }
)
// 响应拦截器
stance.interceptors.response.use(
    (response) => {
        // console.log(response.data);
        let {data,status}=response
        if(status==200){
            return data
        }
    },
    (error)=>{
        Message.error(error)
        return Promise.reject(error)
    }

)
export default stance