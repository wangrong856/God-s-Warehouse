<template>
    <tr>
        <td><input type="checkbox" v-model="item.checked"></td>
        <td>{{ item.goods_name }}</td>
        <td>{{ item.goods_price }}</td>
        <td><button @click="item.goods_num--">-</button>{{ item.goods_num }} <button
                @click="item.goods_num++">+</button> </td>
        <td>{{ item.goods_num * item.goods_price }}</td>
        <td><button @click="del">删除</button></td>
    </tr>
</template>

<script>
export default {
    name: 'GoodsItem',
    props: ['item', 'index'],

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        del() {
            this.$emit('del', this.index)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>