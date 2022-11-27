<template>
    <div id="app">
        <div>
            <span>姓名:</span>
            <input type="text" v-model="obj.name" />
        </div>
        <div>
            <span>年龄:</span>
            <input type="number" v-model="obj.num" />
        </div>
        <div>
            <span>性别:</span>
            <select v-model="obj.six">
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
        </div>
        <div>
            <button @click="btn">添加/修改</button>
        </div>
        <div>
            <table border="1" cellpadding="10" cellspacing="0">
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(item, index) in list" :key="index">
                    <td>{{ ++index }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.num }}</td>
                    <td>{{ item.six }}</td>
                    <td>
                        <button @click="del(index)">删除</button>
                        <button @click="update(item, index)">编辑</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            obj: {
                name: '',
                num: 0,
                six: ''
            },
            list: [],
            flag: true,
            num: 0
        }
    },
    methods: {
        btn() {
            if (this.obj.name == '' || this.obj.six == '' || this.obj.num == '') {
                return alert('内容不能为空')
            }
            if (this.flag) {
                this.list.push({ ...this.obj })
                this.obj = {}
                return
            }
            this.$set(this.list, this.num, this.obj);
            this.obj = {}
            this.flag = true
        },
        del(index) {
            this.list.splice(index, 1)
        },
        update(item, index) {
            this.obj = { ...item }
            this.flag = false
            this.num = index - 1
        },
    },
    watch: {

    }
}
</script>
  