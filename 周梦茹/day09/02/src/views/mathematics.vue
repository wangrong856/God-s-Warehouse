<template>
    <div class="math">
        <h1>测试题</h1>
        <num-a :list.sync="list"></num-a>
        <num-b :list="list"></num-b>
    </div>
</template>

<script>
import numA from "@/components/numA.vue"
import numB from "@/components/numB.vue"
export default {
    name: 'mathematics',
    components: {
        numA,
        numB
    },
    data() {
        return {
            list: []
        }
    },
    created() {
        this.randomNumber()
    },
    methods: {
        // 随机两个数
        randomNumber() {
            // 封装随机数函数
            function sjs(max, min) {
                // 返回随机数
                return Math.floor(Math.random() * (max - min)) + min
            }
            // 循环5次
            for (var i = 0; i < 5; i++) {
                // 创建五次两个随机数
                var num1 = sjs(1, 10)
                var num2 = sjs(1, 10)
                // 存储到数组 
                this.list.push({
                    // num1 数字1 num2 数字2  msg:默认状态为未完成 color 字体颜色  disabled 按钮禁用状态
                    num1, num2, flag: -1, he: '', msg: '未完成', color: 'gray', disabled: false
                })
            }
        }
    }
}
</script>

<style scoped>
.math{
    width: 500px;
    margin: auto;
}
</style>