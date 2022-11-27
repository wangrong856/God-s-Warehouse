<template>
    <div>
        商品名称：<input type="text" v-model="user.name">
        商品价格：<input type="text" v-model="user.price">
        <button @click="add">添加商品</button>
    </div>
</template>

<script>
export default {
    name: 'topIndex',

    data() {
        return {
            user:{
                name:'',
                price:''
            },
           
        };
    },

    mounted() {
        
    },

    methods: {
        add(){
            this.$emit("y",this.user)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>