import {setTokens,getTokens,delTokens} from '@/utils/auth'
import {login} from '@/Api/index'
export default {
    // 开启命名空间
    namespaced:true,
    state:()=>{
        return {
            token:getTokens(),//读取
        }
    },
    mutations:{
        // 本地存储
        setToken(state,token){
            state.token=token
            setTokens(token)//token！！！别忘了
        },
        // 置空token 
        delToken(state){
            state.token=null
            delTokens()
        }
    },
    actions:{
        async loginsyncs({commit},data){
            console.log(data);
         let res= await login(data)
         console.log(res.token);
         commit('setToken',res.token)
        },
        // 退出
         signout({commit}){
            // 置空
            commit('delToken')
        }
    }
}
