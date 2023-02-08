import {getToken,setToken,delToken} from '@/utils/auth'
import {logins} from '@/Api/index'
export default{
    namespaced:true,
    state:()=>{
        return{
            // 获取的token进行赋值
            token:getToken()
        }
    },
    mutations:{
        setTokens(state,token){
            state.token=token
            setToken(token)
        },
        delTokens(state){
            state.token=null
            delToken()
        }
    },
    actions:{
        // 登录的事件 存储token 
        async loginsync({commit},data){
            console.log(data);
         let ress=   await logins(data)
         console.log(ress);//token
         commit('setTokens',ress.data.token)
         return ress.data.token
        },
        // 退出事件 置空token
        TokenDel({commit}){//commit指的是上下文
            commit('delTokens')
        }
    }
}