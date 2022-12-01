<template>
  <div class="users">
    users
    {{obj}}
    <button @click="obj.n.a++">++</button>
  </div>
</template>

<script>
export default {
  name: 'usersIndex',

  data() {
    return {
      obj:{
        n:{
          a:1,
        }
      }
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
  watch:{
    obj:{
      handler(v){
        console.log(vn.a);
      },
      deep:true
    }
  }
};
</script>

<style lang="scss" scoped>

</style>