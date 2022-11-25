<template>
  <div class="mytext">
    <AddCony>
        <template v-slot:one>
            用户名
        </template>
        <template v-slot:two>
            <input type="text">
        </template>
    </AddCony>
    <AddCony>
        <template v-slot:one>
            密码
        </template>
        <template v-slot:two>
            <input type="text">
        </template>
    </AddCony>
    <AddCony>
        <template v-slot:one>
            性别
        </template>
        <template v-slot:two>
            <input type="radio" value="女" name="女">女
            <input type="radio" value="男" name="男">男
        </template>
    </AddCony>
    <AddCony>
        <template v-slot:one>
            爱好
        </template>
        <template v-slot:two>
            <input type="checkbox">抽烟
            <input type="checkbox">喝酒
            <input type="checkbox">烫头
        </template>
    </AddCony>
    <AddCony>
        <template v-slot:one>
            来自于
        </template>
        <template v-slot:two>
          <select>
            <option value="北京">北京</option>
            <option value="天津">天津</option>
            <option value="上海">上海</option>
          </select>
        </template>
    </AddCony>
  </div>
</template>

<script>
import AddCony from '../components/AddCony.vue'
export default {
    components:{
        AddCony
    }
}
</script>

<style>

</style>