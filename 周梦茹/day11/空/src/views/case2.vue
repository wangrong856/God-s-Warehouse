<template>
    <div id="app">
        <div>
            <span>姓名:</span>
            <input type="text" v-model="user.name" />
        </div>
        <div>
            <span>年龄:</span>
            <input type="number" v-model="user.age" />
        </div>
        <div>
            <span>性别:</span>
            <select v-model="user.six">
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
        </div>
        <div>
            <button @click="update">添加/修改</button>
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
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.six }}</td>
                    <td>
                        <button @click="del(index)">删除</button>
                        <button @click="updatebtn(item)">编辑</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name:"caseIndex",
    data() {

        return {
            user: {
                name: "",
                age: 0,
                six: ''
            },
            list: []
        }
    },
    methods: {
        // 首先点击添加或者修改按钮 进行非空判断 如果不为空 执行添加 或者修改
        btn() {
            // 非空判断 内容为空 提示不能为空
            if (this.user.name == "" || this.user.age == "" || this.user.six == "") {
                return alert('内容不能为空')
            }
            //如果user数据有ID 就执行 修改方法 没有id 执行添加方法
            this.user.id ? this.update() : this.add()
        },
        // 添加的方法
        add() {
            // 数组添加数据
            this.list.push({ ...this.user, id: +new Date() })
            // 添加完成清空
            this.user = {}
        },
        // 修改的方法
        update() {
            // 从数组当前修改的下标
            var index = this.list.findIndex(item => item.id == this.user.id)
            // 当前数据重新赋值
            this.list[index] = this.user
            // 添加完成清空
            this.user = {}
        },
        // 点击修改按钮 进行表单回填
        updatebtn(item) {
            //赋值当前行的数据
            this.user = { ...item }
        },
        // 删除方法
        del(index){
            // 判断确定是否删除吗
            if(confirm("确定删除吗？")){
                // 在index下标位置删除1个
                this.list.splice(index,1)
            }
        }
    }
}
</script>
  