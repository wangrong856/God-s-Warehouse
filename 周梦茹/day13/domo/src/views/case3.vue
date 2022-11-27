<template>
    <div>
        <num-a :list.sync="list"></num-a>
        <num-b :list="list"></num-b>
    </div>
</template>

<script>
import numA from '@/components/numA.vue';
import numB from '@/components/numB.vue';
export default {
    name: 'caseIndex',
    components: {
        numA,
        numB
    },
    data() {
        return {
            list: []
        };
    },

    mounted() {

    },
    created() {
        // 调用数据方法
        this.num()
        console.log(this.list);
    },
    methods: {
        num() {
            // 封装随机数函数
            function sjs(min, max) {
                // 返回随机数
                return Math.floor(Math.random() * (max - min)) + min
            }
            for (var i = 0; i < 5; i++) {
                // 创建两个随机数
                var numA = sjs(1, 10)
                var numB = sjs(1, 10)
                // 数据存储数组中
                this.list.push({
                    numA, numB, he: '', msg: '未完成', color: 'gray', disabled: false,flag:-1
                })
            }
        }
    },
};
</script>

<style lang="scss" scoped>

</style>