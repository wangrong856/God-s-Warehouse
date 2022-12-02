import Vue from "vue"
import Vuex from "Vuex"

import userModule from "./module/user"
import goodsModule from "./module/goods"

Vue.use(Vuex)

const store =new Vuex.Store({
    modules:{
        "my_user":userModule,
        "my_goods":goodsModule
    },
    getters:{
        token:(state)=>state.my_user.token
    }
})
export default store