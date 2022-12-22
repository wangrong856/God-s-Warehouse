<template>
  <div class="departments">
    <el-button type="text">角色管理</el-button><br />
    <el-button type="primary" @click="add">+增加角色</el-button>
    <el-table :data="roleszy" border style="width: 100%">
      <el-table-column type="index" label="序号" width="90px" align="center">
      </el-table-column>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="distribution(row.id)">分配权限</el-button>
          <el-button type="success" size="mini" @click="edit(row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="del(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 子组件 -->
    <add-edits :dialog="dialog" :form="form" @update="getallRoles"></add-edits>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="query.page"
      :page-sizes="[5, 6, 8, 10]"
      :page-size="query.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <!-- <peinss-able :showlogs.sync="showlogs" ref="peinssRef"></peinss-able> -->
    <tree-peinss :showcylog.sync="showcylog" ref="peinss"></tree-peinss>
  </div>
</template>

<script>
// 引入子组件 添加/编辑的封装组件
import AddEdits from "./components/AddEdits.vue";
// 按需导入 获取所有角色列表  // 角色详情 删除的接口
import { getallRole, xqallRole,deltallRole } from "@/api/getroleall";
import PeinssAble from './components/PeinssAble.vue'
// 自己子组件
import TreePeinss from './components/TreePeinss.vue'
export default {
  components: {
    AddEdits, //挂载
    PeinssAble,//权限
    TreePeinss,//自己权限
  },
  data() {
    return {
      showcylog:false,

      showlogs:false,

      // 定义新数组，把请求回来的数据放入数组
      rolesz: [],
      // rows那层数组
      roleszy: [],
      // 总页数
      total: 0,

      dialog: {
        title: "新增角色",
        showdialogs: false,
        options: "add",
      },
      form: {
        name: "",
        description: "",
        region: "",
        id:""
      },
      query:{
        // 页数
        page:1,
        // 条数
        pagesize:10
      }
    };
  },
  created() {
    // 监听获取角色列表的数据 页面一打开就能看到
    this.getallRoles();
  },
  methods: {
    // 分配权限
    // distribution(id){
    //   this.$refs.peinssRef.getallTree(id)
    //   this.showlogs=true;
    // },


    // 角色列表数据
    distribution(id){
      // 通过ref获取组件实例 传递id
        this.$refs.peinss.gettree(id)
        // 点击权限 模态框显示
        this.showcylog=true
    },
    async getallRoles() {
      // 请求回来的数据赋值给新数组
      this.rolesz = await getallRole(this.query);
      this.roleszy = this.rolesz.rows;
      console.log(this.roleszy);
      console.log(this.rolesz.rows);
      this.total = this.rolesz.total;
      console.log(this.rolesz.total);
    },
    // 添加
    add() {
      (this.dialog = {
        title: "新增角色",
        showdialogs: true,
        options: "add",
      }),
        (this.form = {
          name: "",
          description: "",
          region: "",
          id:""
        });
    },
    // 编辑 传递row就是当前行数据
    async edit(row){
      // 模态框弹出
      this.dialog={
        title: "编辑角色",
        showdialogs: true,
        options: "edit",
      },
      // 传递id 对表单进行回显
      this.form=await xqallRole(row.id)
    },
    // 删除
     del(row){
      // 弹出提示 是否删除
      this.$confirm("你确定删除吗")
      .then(()=>{
        // 调用删除接口 传递id
         deltallRole(row.id)
      })
      .then(()=>{
        // 重新刷新页面
        this.getallRoles()
        // 弹出信息 删除成功
        this.$message.success("删除成功")
      })
    },
    // 点击当前页
    handleCurrentChange(val){
      // 可以修改页面
      this.query.page=val;
      // 重新刷新数据
      this.getallRoles()
    }
  },
};
</script>

<style>
</style>