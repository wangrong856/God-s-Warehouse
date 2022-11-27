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
      <select v-model="user.sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addAndEdit">添加/修改</button>
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
        <tr v-for="(item, index) in arr" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button>删除</button>
            <button @click="editlist(item)">编辑</button>
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
      // 铺设数据
      arr: [
        {
          name: "王武",
          age: 34,
          sex: "男",
        },
      ],
      // 双向绑定 添加
      user: {
        name: "",
        age: 0,
        sex: "男",
      },
      // true是添加 false是编辑
      isshowaddedit: true,
    };
  },
  methods: {
    // 添加
    addAndEdit() {
      // 三元表达式 默认是添加  否则是编辑
      this.isshowaddedit ? this.add() : this.edit();
        // 添加之后把数据清空
        this.user = {
          name: "",
          age: 0,
          sex: "男",
        };
    },
    editlist(item) {
      // 进行回显
      this.user = { ...item };
      // false时为编辑
      this.isshowaddedit = false;
    },
    add() {
          // 非空校验
      if (
        this.user.name.length == 0 ||
        this.user.age.length == 0 ||
        this.user.sex.length == 0
      ) {
        return alert("内容不能为空");
      }
        // 由于要传id 修改功能需要用到
        var obj = {
          // 把填入的数据添加进去
          ...this.user,
          // id设为当前时间戳
          id: Date.now(),
        };
        // 把数据添加到原始数据上 进行渲染
        this.arr.push(obj);
    },
    edit() {
        // 根据id查找下标
      var index=  this.arr.findIndex(item=>item.id==this.user.id)
    //   把当前修改完的数据赋值给原数据进行渲染即可
      this.arr[index]=this.user;
     //   修改完是true
      this.isshowaddedit=true
    },
  },
};
</script>
  


<style>
</style>