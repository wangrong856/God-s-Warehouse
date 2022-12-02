<template>
  <div id="app">
    <list :num="num"></list>
    <goods></goods>
    <button @click="login">登录</button>
     <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import List from './components/List.vue';
import Goods from './components/Goods.vue';
import { mapGetters, mapMutations } from 'Vuex';
export default {
  components:{
    List,
    Goods
  },
  data(){
    return{
      num:12
    }
  },
  computed:{
    ...mapGetters(['token'])
  },
  methods:{
    ...mapMutations('my_user',['loginSync']),
    login(){
      console.log(this.$store);
      // this.$store.dispatch('my_user/loginSync',{uname:"66",pass:123})
      this.loginSync({uname:"饿饿饿",pass:"123456"})
    }
  }
}
</script>
<style lang="scss">

</style>
