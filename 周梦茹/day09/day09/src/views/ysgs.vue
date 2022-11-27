<template>
    <div>
        <input type="checkbox" v-model="checkAll"> 全选
        <p v-for="item,index in list" :key="index">
            <input type="checkbox" v-model="item.isok">复选
        </p>
    </div>
</template>

<script>
export default {
    name: 'Day09Ysgs',

    data() {
        return {
            list:[
                {isok:false},
                {isok:false},
                {isok:false},
                {isok:false},
                {isok:false}
            ]
        };
    },

    mounted() {
        
    },
    computed:{
        checkAll:{
            set(v){
                this.list.forEach(item=>item.isok=v)
            },
            get(){
              return  this.list.every(item=>item.isok==true)
            }
        }
    },
    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>