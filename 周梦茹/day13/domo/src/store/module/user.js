export default {
    namespaced:true,
    state: {
        token:null
    },
    mutations: {
        seToken(state,token){
            state.token=token
        },
        removeToken(state){
            state.token=null
        }
    },
    actions: {
        loginSync(context){
            setTimeout(()=>{
                let t="123456"
                context.commit('setToken',t)
            },1000)
        }
    },
    getters: {}
}
