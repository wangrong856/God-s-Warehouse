<template>
    <div>
        <input type="text" v-model.number="a"> <br>
        <input type="text" v-model.number="b"> <br>
        {{num}}
    </div>
</template>

<script>
export default {
    name: 'Day09One',

    data() {
        return {
            a:"",
            b:""
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    computed:{
        num(){
            return this.a+this.b
        }
    }
};
</script>

<style lang="scss" scoped>

</style>