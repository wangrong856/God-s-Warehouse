import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        'my_user':userModule
    },
    getters:{
        token:(state)=>state.my_user.token,
        userId:state=>state.my_user.userInfo.userId,
        username:state=>state.my_user.userInfo.username,
        staffPhoto:state=>state.my_user.userInfo.staffPhoto
    }
})

