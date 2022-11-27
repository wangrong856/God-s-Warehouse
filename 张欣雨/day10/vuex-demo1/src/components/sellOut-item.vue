<template>
    <tr>
        <td><input type="number" v-model.number="item.count"></td>
        <td>{{ item.goodsName }}</td>
        <td>{{ item.count==0?'卖光了':''}}</td>
    </tr>
</template>

<script>
export default {
    name: 'SellOutItem',
    props: ['item'],
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>

</style>