<template>
    <div>
        <h1>Goods</h1>
        <button @click="login">{{token}}登录</button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'Vuex';

export default {
    name: 'DomoGoods',
    data() {
        return {
            num:12
        };
    },
    computed:{
        ...mapState('my_user',['token'])
    },
    mounted() {
        
    },

    methods: {
        ...mapActions(['my_user/loginSync']),
        login(){
            this['my_user/loginSync']({uname:"zs",pass:"123456"})
        }
    },
};
</script>

<style lang="scss" scoped>

</style>