import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import data from '../../public/data'
export default new Vuex.Store({
  state: {
    data:data.goods
    
  },
  getters: {
    
  },
  mutations: {
    checkAll(state,v){
      state.data.forEach(item=>{
         item.flag = v
      })
    },
    delAll(state){
      state.data = state.data.filter(item=>{
         return !item.flag
      })
    },
    // fanxuan(state,s){
    //   state.data[s].flag
    //   console.log(state.data[s].flag);
    // }
  },
  actions: {
  },
  modules: {
  }
})
