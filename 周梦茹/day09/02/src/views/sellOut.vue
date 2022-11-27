<template>
    <div>
        <table>
            <sellOut-item v-for="(item, index) in goodsArr" :key="index" :item="item"></sellOut-item>
            <tr>All Number:{{ sum }}</tr>
        </table>
    </div>
</template>

<script>
import sellOutItem from '@/components/sellOut-item.vue';
export default {
    name: 'SellOut',
    components: {
        sellOutItem
    },
    data() {
        return {
            goodsArr: [
                {
                    count: 0,
                    goodsName: "Watermelon"
                }, {
                    count: 0,
                    goodsName: "Banana"
                }, {
                    count: 0,
                    goodsName: "Orange"
                }, {
                    count: 0,
                    goodsName: "Pineapple"
                }, {
                    count: 0,
                    goodsName: "Strawberry"
                }
            ]
        };
    },

    mounted() {

    },
    computed: {
        sum() {
            return this.goodsArr.reduce((sum, item) => sum += Number(item.count), 0)
        }
    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>

</style>