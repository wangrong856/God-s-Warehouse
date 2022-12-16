import {setToken,getToken,removeToken} from '@/utils/auth'
import {login} from '@/api/users'
import jwtDecode from 'jwt-decode'



export default{
    namespaced: true,
    state:()=>{
        return {
            token:getToken(),
            userInfo:JSON.parse(localStorage.getItem('userinfo')||'[]')
        }
    },
    mutations: {
       setToken(state,token){
            state.token=token
            // 存储到本地
            setToken(token)
       },
       setUser(state,user){
            state.userInfo=user
            localStorage.setItem('userinfo',JSON.stringify(state.userInfo))
       },
       removeToken(state){
           state.token=null
           state.userInfo=null
           removeToken()
       }
    },
    // 
    actions:{
        loginAsync(context,data){
            // 1调用登录接口   2修改token
            return new Promise((resolve,reject)=>{
              login(data)
              .then(res=>{
                // 存储token
                console.log(res)
                context.commit('setToken',res.token)
                // 解密 拿到用户信息
                let userinfo=jwtDecode(res.token)
                console.log(userinfo)
                context.commit('setUser',userinfo)
                resolve()  //表示异步请求执行完成
              })
            })
        }
    }
}