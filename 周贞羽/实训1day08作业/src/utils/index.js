import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
const stance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 3000,
})
// 请求拦截
stance.interceptors.request.use(
    config => {
        if(store.getters.token){
            config.headers['Authorization']=`Bearer ${store.getters.token}`
        }
        return config
    }, err => {
        Message.error(err)
        return Promise.error(err)
    }
)
// 响应拦截
stance.interceptors.response.use(
    (reopance) => {
        const { success, data, code, message } = reopance.data;
        if (reopance.status === 200) {
            return data
        } else {
            Message.error(success)
            return Promise.reject(success)
        }
    },
    (err) => {
        // 第一种 有refresh_token的时候
        // if(err.reopance.data.code===10002){
        //       const token=  store.state.my_user.refresh_token
        //      if(refresh_token){
        //    let res= await axios({
        //         url:"",
        //         method:"put",
        // headers:{
        //     Authorization=`Bearer ${refresh_token}`
        // }
        //     })
        //       token=res.data.data.token
        //      }else{
        //         store.dispatch('my_user/removeinfo')
        //         router.push('/login')
        //      }
        // }
        // 第二种 没有refresh_token的时候
        // if(err.reopance||err.reopance.data||err.reopance.data.code===10002){
        //     store.dispatch('my_user/removeinfo')
        //     router.push('/login')
        // }else{
            Message.error(err)
        // }
        return Promise.reject(err)
    },
)
export default stance;