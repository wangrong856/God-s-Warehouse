<template>
    <div>
       <h1>home</h1> 
       <p ref="ppp">{{num}}</p>
       <button @click="add">获取p</button>
    </div>
</template>

<script>
export default {
    name: 'MyHome',

    data() {
        return {
            num:1
        };
    },

    mounted() {
        
    },

    methods: {
       add(){
        this.num++
        // console.log(this.$refs.ppp.innerHTML);
        this.$nextTick(()=>{
            console.log(this.$refs.ppp.innerHTML)
        })
       }
    },
};
</script>

<style lang="scss" scoped>

</style>