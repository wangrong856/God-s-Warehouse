<template>
  <div>
    姓名：<input type="text" v-model="user.name" /> <br />
    年龄：<input type="number" v-model="user.age" /> <br />
    性别：
    <select name="" id="" v-model="user.sex">
      <option value="男">男</option>
      <option value="女">女</option>
    </select>
    <br />
    <button @click="addOrEdit">添加/修改</button>
    <table border cellspacing="0" width="500px">
      <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in arr" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.sex }}</td>
        <td>
          <button>删除</button>
          <button @click="Edit(item)">编辑</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "tableIndex",

  data() {
    return {
      isok: true,
      arr: [
        {
          name: "恐龙",
          age: 18,
          sex: "女",
        },
      ],
      user: {
        name: "",
        age: 0,
        sex: "男",
      },
    };
  },

  mounted() {},

  methods: {
    addOrEdit(){
        this.isok?this.add():this.Editupdate()
        this.user={}
    },
    // 添加
    add() {
      if (
        this.user.name.length == 0 ||
        this.user.age.length == 0 ||
        this.user.sex.length == 0
      ) {
        return alert("内容不能为空");
      }
      var obj = {
        ...this.user,
        id: Date.now(),
      };
      this.arr.push(obj);
    },
    // 编辑回显
    Edit(item) {
      this.user = { ...item };
      this.isok=false
    },
    // 修改数据
    Editupdate() {
      let index = this.arr.findIndex((item) => item.id === this.user.id);
      this.arr[index] = this.user;
      // console.log(index);
      this.isok=true
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  text-align: center;
}
</style>