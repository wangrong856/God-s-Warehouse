<template>
  <div class="boxinfo">
    <div class="boxc">
      <el-button type="primary" @click="add">添加权限</el-button>
      <el-table
        :data="group"
        style="width: 100%; "
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="name" label="名称" > </el-table-column>
        <el-table-column prop="code" label="标识" > </el-table-column>
        <el-table-column prop="description" label="描述"> </el-table-column>
        <el-table-column prop="address" label="操作" >
          <template slot-scope="{row}">
            <el-button type="text" v-if="row.pid==='0'" @click="addone(row)">添加</el-button>
            <el-button type="text" @click="edit(row)">编辑</el-button>
            <el-button type="text" @click="del(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 子组件 -->
      <add-edit :form="form" :dialog="dialog" @addstyle="getdiction"></add-edit>
    </div>
  </div>
</template>

<script>
import { jurisdiction,deliction,getxqiction } from "@/api/jurisdiction";
import { tranListToTreeData } from "@/utils/tree";
import AddEdit from './components/AddEdit.vue'

export default {
  components:{
    AddEdit
  },
  data() {
    return {
      group: [],
      dialog:{
        title:"新增权限",
        showdialog:false,
        options:'add',
      },
      form:{
        name:"",//名字
        code:"",//标识
        description:"",//描述
        enVisible:"0",
        type:0,
        pid:'0'
      }
    };
  },
  created() {
    this.getdiction();
  },
  methods: {
    async getdiction() {
      const res = await jurisdiction();
      this.group = tranListToTreeData(res, "0");
      console.log(this.group);
      // console.log(res);
    },
    // 添加
    add(){
      this.dialog={
        title:"新增权限",
        showdialog:true,
        options:'add',
      }
      this.form={
        name:"",//名字
        code:"",//标识
        description:"",//描述
        enVisible:"0",
        type:1,
        pid:'0'
      }
    },
    // 二级添加
    addone(row){
      this.dialog={
        title:"新增权限2",
        showdialog:true,
        options:'add',
      }
      this.form={
        name:"",//名字
        code:"",//标识
        description:"",//描述
        enVisible:"0",
        type:2,
        pid:row.id,
      }
    },
    // 编辑
    async edit(row){
      this.dialog={
        title:"编辑权限",
        showdialog:true,
        options:'edit',
      }
      this.form= await getxqiction(row.id)
    },
    // 删除
     del(row){
      this.$confirm('你确定删除吗')
      .then(()=>{
        return deliction(row.id)
      })
      .then(()=>{
        this.getdiction();
        this.$message.success("删除成功")
      })
    }
  },
};
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>