import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import data from "../../public/data.json"
export default new Vuex.Store({
  state: {
    data:data.goods
  },
  mutations: {
    // 单个状态
    changone(state,index){
      state.data[index].checked
    },
    // 全选
    checkAll(state,flag) {
      state.data.forEach(item=>item.checked=flag)
    },
    delAll(state) {
      state.data=state.data.filter(item=>!item.checked)
    }
  },
  actions: {},
  modules: {}
})