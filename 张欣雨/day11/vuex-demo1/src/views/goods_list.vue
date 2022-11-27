<template>
    <div>
        <!-- table组件 -->
        <my-table :list="arr">
            <template v-slot:del="{ index }">
                <button class="del" @click="del(index)">删除</button>
            </template>
            <template v-slot:add="{ item }">
                <td class="tags">
                    <span class="addtab" v-if="!item.inputVisible" @click="btn(item)">
                        +tab
                    </span>
                    <input type="text" v-else v-model="item.inputValues" v-focus @blur="lose(item)"
                        @keyup.13="add(item)">
                    <br>
                    <p>
                        <span v-for="(it, ind) in item.tags" :key="ind" class="tag">{{ it }}</span>
                    </p>
                </td>
            </template>
        </my-table>
    </div>
</template>

<script>
import myTable from '@/components/myTable.vue';
export default {
    name: 'GoodsList',
    components: {
        myTable
    },
    data() {
        return {
            arr: []
        };
    },
    created() {
        this.$http.get('https://www.escook.cn/api/goods').then(res => {
            this.arr = res.data
        })
    },
    mounted() {

    },

    directives: {
        focus: {
            // 指令的定义
            inserted: function (el) {
                el.focus()
            }
        }
    },

    methods: {
        // 点击删除按钮
        del(index) {
            // 删除index位置1个
            this.arr.splice(index, 1)
        },
        // 点击+tag
        btn(item) {
            // 让input显示
            item.inputVisible = true
        },
        // 失去焦点方法
        lose(item) {
            // 隐藏input 
            item.inputVisible = false
        },
        // 添加tag
        add(item) {
            // 判断输入框是否为空
            if (item.inputValues == "") return alert("内容不能为空")
            // 获取输入框的值
            var str = item.inputValues
            // 添加到tags中
            item.tags.push(str)
            // 关闭inpu显示+tag
            item.inputVisible = false
            // 清空输入框内容
            item.inputValues = ""
        }
    },
};
</script>

<style lang="scss" scoped>
.del {
    border-radius: 5px;
    padding: 5px 8px;
    box-sizing: border-box;
    font-size: 14px;
    border: none;
    color: #fff;
    background-color: #c72232;
}
</style>