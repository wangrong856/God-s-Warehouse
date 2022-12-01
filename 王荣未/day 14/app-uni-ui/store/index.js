import Vue  from "vue"
import Vuex  from "vuex"
Vue.use(Vuex)
export const store = new Vuex.Store({
  state:{
    num:1,
    goodsList:JSON.parse(uni.getStorageSync("goodsList")) || []
  },
  mutations:{
    submitGoods(state,obj){
      let index = state.goodsList.findIndex((item)=>{
        return item.id == obj.id
      })
      // console.log(index);
      if(index == -1){
        state.goodsList.push(obj)
      }else{
        state.goodsList[index].num++
      }
      uni.setStorageSync("goodsList",JSON.stringify(state.goodsList))
      // console.log(state.goodsList);
      // console.log(uni.getStorageSync("goodsList"));
    },
    checkFx(state,c){
      state.goodsList[c].flag = !state.goodsList[c].flag
      uni.setStorageSync("goodsList",JSON.stringify(state.goodsList))
    },
    checkAllTota(state,v){
       state.goodsList.forEach(item=>{
        return item.flag = v
      })
       uni.setStorageSync("goodsList",JSON.stringify(state.goodsList))
    },
    changCl(state,i){
      state.goodsList.splice(i,1)
      uni.setStorageSync("goodsList",JSON.stringify(state.goodsList))
    }
  },
  getters:{
    checkLeng(state){
      let arr = state.goodsList.filter(item=>{
        return item.flag
      })
      return arr.length
    },
    checkPrice(state){
      return state.goodsList.reduce((sum,item)=>{
        if(item.flag){
          sum += item.num * item.price
        }
        return sum
      },0)
    }
  },
  actions:{}
})

