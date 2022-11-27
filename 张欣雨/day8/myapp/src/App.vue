<template>
  <div>
    <template>
      <el-table :data="list" border >
        <el-table-column prop="id" label="编号" >
        </el-table-column>
        <el-table-column prop="name" label="资产名称" >
        </el-table-column>
        <el-table-column prop="price" label="价格">
        </el-table-column>
        <el-table-column prop="time" label="创建时间">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
        
      </el-table>
      <input type="text" v-model="tx1">
      <input type="text" v-model="tx2">
      <button @click="add">添加</button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MyappApp',

  data() {
    return {
      list: [
        { id: 100, name: "外套", price: 199,time: new Date()},
        { id: 101, name: "裤子", price: 34,time: new Date()},
        { id: 102, name: "鞋", price: 25.4, time: new Date() },
        { id: 103, name: "头发", price: 19900, time: new Date() }
      ],
      tx1:'',
      tx2:''
    };
  },

  mounted() {

  },

  methods: {
    handleDelete(index, row) {
      this.list.splice(index,1)
      },
      add(){
        var obj={id:1,name:this.tx1,price:this.tx2,time:new Date().toLocaleDateString()}
        this.list.push(obj)


      }
        
      

  },

};
</script>

<style lang="scss" scoped>

</style>