import Vue from 'vue'
import Vuex from 'vuex'
// 引入模块
import m_user from './modules/m_user'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        m_user:m_user
    },
    getters:{
        token:(state)=>state.m_user.token
    }
})