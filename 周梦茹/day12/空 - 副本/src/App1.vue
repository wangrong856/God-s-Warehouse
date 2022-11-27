<template>
    <div id="app">
        <my-text>
            <template #one>
                <p>用户名</p>
            </template>
            <template #two>
                <input type="text">
            </template>
        </my-text>
        <my-text>
            <template #one>
                <p>密码</p>
            </template>
            <template #two>
                <input type="text">
            </template>
        </my-text>
        <my-text>
            <template #one>
                <p>性别</p>
            </template>
            <template #two>
                <input type="radio" value="男" name="男">男
                <input type="radio" value="女" name="男">女
            </template>
        </my-text>
        <my-text>
            <template #one>
                <p>爱好</p>
            </template>
            <template #two>
                <input type="checkbox"> 抽烟
                <input type="checkbox"> 喝酒
                <input type="checkbox"> 烫头
            </template>
        </my-text>
        <my-text>
            <template #one>
                <p>来自于</p>
            </template>
            <template #two>
                <select name="" id="">
                    <option value="北京">北京</option>
                    <option value="上海">上海</option>
                    <option value="广州">广州</option>
                </select>
            </template>
        </my-text>
    </div>
</template>

<script>
import myText from './components/myText.vue';
export default {
    name:'App',
    components:{
        myText
    }
}
</script>

<style>

</style>