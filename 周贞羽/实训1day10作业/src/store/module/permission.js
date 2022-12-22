import {startsroutea,sonthoeabs} from '@/router/index'
const state={
    routes:[]
}

const mutations={
    setrouter(state,newroutes){
        state.routes=[...startsroutea,...newroutes]
    }
}

const actions={
    filtercontet(context,menus){
        const routes=[]
        menus.filter(key=>{
            routes.push(...sonthoeabs.filter(item=>item.name===key))
        })
        context.commit('setrouter',routes)
        return routes;
    }
}   



export default{
    namespaced:true,
    state,
    mutations,
    actions
}