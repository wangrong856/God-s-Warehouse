import Vue from 'vue'
import Vuex from 'vuex'

import myuser from './module/index'
import permission from './module/permission'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        "my_user":myuser,
        "permission":permission,
    },
    getters:{
        token:state=>state.my_user.token,
        userId:state=>state.my_user.userinfo.userId,
        username:state=>state.my_user.userinfo.username,
        staffPhoto:state=>state.my_user.userinfo.staffPhoto,
        isCollapse:state=>state.my_user.isCollapse,
        routes:(state)=>state.permission.routes
    }
})
