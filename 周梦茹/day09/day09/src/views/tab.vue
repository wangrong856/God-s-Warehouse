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
      <select>
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addAndModify">添加/修改</button>
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
        <tr v-for="(item, index) in arr" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button>删除</button>
            <button @click="edit">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
  <script>
export default {
  name: "Day09Tab",
  data() {
    return {
      arr: [{ id: 1, name: "刘德华", age: 32, sex: "男" }],
      user: {
        name: "",
        age: "",
        sex: "",
      },
      isAddorEdit: true,
    };
  },
  methods: {
    // 添加或修改
    addAndModify() {
      // 判断isAddorEdit的值是true还是false
      this.isAddorEdit ? this.addBtn() : this.putBtn();
      // 清空表单
      this.user = {
        name: "",
        age: 0,
        sex: "男",
      };
    },
    // 修改功能
    putBtn() {
      //  1查找下标
      let index = this.arr.findIndex((item) => item.id === this.user.id);
      // 修改
      this.arr[index] = this.user;
      // 把全局变量的值变为true
      this.isAddorEdit = true;
    },
    // 实现添加功能
    addBtn() {
      // 非空判断
      if (
        this.user.name.length === 0 ||
        this.user.age === 0 ||
        this.user.sex.length === 0
      ) {
        return alert("数据不能为空");
      }

      // 创建要添加的数据结构
      var obj = {
        ...this.user,
        id: Date.now(),
      };

      //  push添加
      this.arr.push(obj);
    },
    // 点击编辑
    edit(item) {
      // 数据的回显
      this.user = { ...item };

      // 点击编辑  更改isAddorEdit的值为false
      this.isAddorEdit = false;
    },
  },
};
</script>
  
<style lang="scss" scoped>
</style>