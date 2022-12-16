import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './module/user'

Vue.use(Vuex)

// 创建vuex实例对象
export default new Vuex.Store({
    modules:{
        "my_user":userModule
    },
    getters:{
        userinfo:(state)=>state.my_user.userInfo
    }
})