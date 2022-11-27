<template>
    <div>
        <ul>
            <li v-for="(item, index) in arr" :key="index">{{ item.shopName }} <button
                    @click="item.count++" >+</button>{{ item.count }}<button @click="item.count--" :disabled="item.count==0">-</button></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FoodItem',
    props: ['arr'],
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