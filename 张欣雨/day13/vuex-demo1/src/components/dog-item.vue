<template>
    <div class="box-item">
        <img :src="item.dogImgUrl" alt="" width="100%" height="300px">
        <p @click="dogname(item.dogName)" :style="{background:`rgb(${r}+${g}+${b})`}">{{ item.dogName }}</p>

    </div>
</template>

<script>
export default {
    name: 'DogItem',
    props: ['item'],

    data() {
        return {
            love: '',
            r:'',
            b:'',
            g:''
            
        };
    },

    mounted() {

    },

    methods: {
        dogname(name) {
            this.r = Math.floor(Math.random() * 255)+','
            this.g = Math.floor(Math.random() * 255)+','
            this.b = Math.floor(Math.random() * 255)
            this.$emit('love',name)
        }
    },
};
</script>

<style lang="scss" scoped>
.box-item {
    width: 30%;
    border: 1px solid #ccc;
    }
</style>