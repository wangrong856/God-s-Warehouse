<template>
    <div>
        <h2>作用域插槽</h2>
        <slot :msg="msg" :num="num"></slot>
    </div>
</template>

<script>
export default {
    name: 'ScopeIndex',

    data() {
        return {
            msg:"中午吃什么",
            num:555
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