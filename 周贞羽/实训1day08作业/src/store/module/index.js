import {getToken,setToken,removeToken} from '@/utils/auth'
import {login,getuserinfo,imguserig} from '@/api/http'
export default{
    // 命名空间
    namespaced:true,
    state:()=>{
        return {
            token:getToken(),
            userinfo:JSON.parse(localStorage.getItem('userin'))||{},
            isCollapse:false,
        }
    },
    mutations:{
        setcollapse(state){
            state.isCollapse=!state.isCollapse
        },
        // 本地存储token
        setToken(state,token){
            state.token=token;
            setToken(token)
        },
        // 用户信息本地存储
        setuser(state,userinfo){
            state.userinfo={...userinfo};
            localStorage.setItem("userin",JSON.stringify(userinfo))
        },
        // 用户信息删除
        removeuser(state){
            state.userinfo={}
            localStorage.removeItem('userin')
        },
        // 删除token
        removeToken(state){
            state.token=null;
            removeToken()
        }
    },
    actions:{
        async loginuse({commit},data){
           const res= await login(data)
            console.log(res);
           commit('setToken',res)
        },
        async logininfo({commit}){
         let user=  await getuserinfo()
        //  图片
         let users= await imguserig(user.userId)
        //  图片和数据进行合并
         const us={...user,...users};
         commit('setuser',us)
        },
        // 退出登录
        removeinfo({commit}){
            commit('removeToken')
            commit('removeuser')
        }
    }
}