<template>
    <div>
        <p> 商品清单如下:</p>
        <p> 可比克薯片 5.5元/份 <br> 草莓酱 3.5元/份 <br> 红烧肉 55元/份 <br> 方便面 12元/份</p>
        <p>请选择购买数量:</p>
        <food-item :arr="arr"></food-item>
        <p>总价格:{{sum }}</p>
    </div>
</template>

<script>
import foodItem from '@/components/food-item.vue';
export default {
    name: 'food-index',
    components: {
        foodItem
    },
    data() {
        return {
            arr: [
                {
                    "shopName": "可比克薯片",
                    "price": 5.5,
                    "count": 0
                },
                {
                    "shopName": "草莓酱",
                    "price": 3.5,
                    "count": 0
                },
                {
                    "shopName": "红烧肉",
                    "price": 55,
                    "count": 0
                },
                {
                    "shopName": "方便面",
                    "price": 12,
                    "count": 0
                }
            ]
        };
    },
    computed: {
        sum() {
            return this.arr.reduce((sum, item) => sum += item.count * item.price, 0)
        }
    },
    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>

</style>