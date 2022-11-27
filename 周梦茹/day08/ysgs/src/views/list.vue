<template>
  <div>
    品牌管理
    <el-table :data="list" border>
      <el-table-column prop="id" label="编号"> </el-table-column>
      <el-table-column prop="name" label="资产名称"> </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="time" label="创建时间"> </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <input v-model="username" type="text" placeholder="资产名称">
    <input v-model="money" type="text" placeholder="0">
    <el-button type="primary" @click="add">添加资产</el-button>


    
  </div>
</template>

<script>
export default {
  name: "YsgsList",
  data() {
    return {
      list: [
        { id: 100, name: "外套", price: 199, time: "2010-08-12" },
        { id: 101, name: "裤子", price: 34, time: "2013-09-01" },
        { id: 102, name: "鞋", price: 25.4, time: "2018-11-22" },
        { id: 103, name: "头发", price: 19900, time: "2020-12-12" },
      ],
      username:"",
      money:""
    };
  },

  mounted() {},

  methods: {
    handleDelete(index, row) {
        console.log(index, row);
        this.list.splice(index,1)
      },
    // 添加
    add(){
        var obj={
            name:this.username,
            price:this.money,
            time:new Date().toLocaleString()
        }
        this.list.push(obj)
        this.username=this.money=""
    }
  },
};
</script>