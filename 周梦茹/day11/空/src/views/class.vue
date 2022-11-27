<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input v-model="user.name" type="text" />
    </div>
    <div>
      <span>年龄:</span>
      <input v-model="user.age" type="number" />
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
            <button @click="editAnd(item)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
  <script>
export default {
    // 学生信息管理
    name:"classIndex",
  data() {
    return {
      arr: [
        {
          // id:1,
          name: "恐龙",
          age: "18",
          sex: "女",
        },
      ],
      user: {
        name: "",
        age: 0,
        sex: "男",
        // id:new Date()
      },
    //   true的时候是添加 false的时候是修改
      isaddorEdit: true,
    };
  },
  methods: {
    addAndEdit() {
        // 三元表达式 如果为true是添加 否则是修改
      this.isaddorEdit?this.addone():this.updatetwo();
      this.user = {
        name: "",
        age: 0,
        sex: "男",
      };
    },
    updatetwo() {
       //判断findIndex    arr中的id和user中的id是不是相同的    如果是  返回true
      //  也就是当前下标    把当前下标赋值给index   
        let index=this.arr.findIndex(item=>item.id===this.user.id)
        // console.log(index);
        // 让当前回填的数据赋值arr
        this.arr[index]=this.user;
        // 再让全局变量等于true 
        this.isaddorEdit=true
    },
    // 添加
    addone() {
      // 非空校验
      if (
        this.user.name.length == 0 ||
        this.user.age.length == 0 ||
        this.user.sex.length == 0
      ) {
        return alert("内容不能为空");
      } 
      // 
        var obj = {
          ...this.user,
          id: Date.now(),
        };
        this.arr.push(obj);
    },
    editAnd(item) {
      // 回显 把当前条的数据给上面的绑定的数据结构
      this.user = { ...item };
      // 
      this.isaddorEdit=false
    },
  },
};
</script>
  