<template>
    <div>
        <div class="box" v-for="(item, index) in list" :key="index">
            <span>{{ item.num1 }}</span>
            <span>+</span>
            <span>{{ item.num2 }}</span>
            <span>=</span>
            <input type="Number" v-model="item.he">
            <button @click="btn(item, index)" :disabled="item.disabled">提交</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'numB',
    props: ['list'],
    data() {
        return {
        }
    },
    methods: {
        // 点击提交按钮
        btn(item) {
            // 判断he为空 提示不能为空
            if(item.he=='')return alert("请输入结果")
            // 修改按钮禁用状态
            item.disabled=true
            // 判断数据num1+num2是否等于输入he变量  等于让flag状态为0 正确状态 否则为1错误状态
            item.num1 + item.num2 === Number(item.he) ? item.flag = 0 : item.flag = 1
            // 传递给父组件修改
            this.$emit('update:list', this.list)
        }
    }
}
</script>

<style scoped lang="scss">
.box {
    width: 900px;
    display: flex;
    align-items: center;
    margin: auto;

    input {
        margin: 0 5px;
        width: 40px;
    }
}
</style>