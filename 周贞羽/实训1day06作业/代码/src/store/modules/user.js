import {getToken,setToken,removeToken} from '@/utils/auth'
import{login,getUserInfo,getUserImg} from '@/api/user'

const state=()=>{
    return {
       token:getToken(),
       userInfo:{} ,  //为什么是{} 不是null
       isCollapse:false
    }
}
const mutations= {
    setIsCollapse(state){
       state.isCollapse=!state.isCollapse
    },
    setToken(state,token){
        state.token=token
        setToken(token)
    },
    removeToken(state){
        state.token=null
        removeToken()
    },
    // 设置用户信息
    setUserInfo(state,userInfo){
        state.userInfo={...userInfo}
    },
    // 删除用户信息
    removeUserInfo(state){
        state.userInfo={}
    }
}

const actions={
    async  loginAsync({commit},data){
         let result= await login(data)
         commit('setToken',result)
    },
    // 获取用户资料action
    async getUserInfo({commit}){
      const result=  await getUserInfo()
      const basicInfo=await getUserImg(result.userId)
      console.log(basicInfo,9)
    //   把用户信息和用户头像合并
      const basicResult={...result,...basicInfo}
      commit('setUserInfo',basicResult)
    //  目前用不上
      return basicResult
    },
    logout({commit}){
        // 删除token
        commit('removeToken')
        // 删除用户信息
        commit("removeUserInfo")
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}