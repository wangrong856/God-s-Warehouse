import Vue from 'vue'
import Vuex from 'vuex'
import my_user from './module/user'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        "my_user":my_user,
    },
    getters:{
        token:(state)=>state.my_user.token
    },
    plugins: [persistedState()]
})
