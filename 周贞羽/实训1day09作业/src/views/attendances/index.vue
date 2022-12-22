<template>
  <div class="boxinfo">
    <div class="boxc">
      <el-table :data="getstyle" border style="width: 100%">
        <el-table-column type="index" label="日期" align="center">
        </el-table-column>
        <el-table-column prop="username" label="姓名"> </el-table-column>
        <el-table-column prop="staffPhoto" label="头像">
          <template slot-scope="{ row }">
            <img :src="row.staffPhoto" alt="" v-imgs="imgsrc" />
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号"> </el-table-column>
        <el-table-column prop="workNumber" label="工号"> </el-table-column>
        <el-table-column
          prop="formOfEmployment"
          label="聘用形式"
        ></el-table-column>
        <el-table-column prop="departmentName" label="部门"> </el-table-column>
        <el-table-column prop="correctionTime" label="入职时间">
        </el-table-column>
        <el-table-column label="账户状态">
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-table-column>
        <el-table-column label="操作" width="290px">
          <template slot-scope="{row}">
            <el-button type="text">查看</el-button>
            <el-button type="text">转正</el-button>
            <el-button type="text">调岗</el-button>
            <el-button type="text">离职</el-button>
            <!-- <el-button type="text" @click="userRolesybc(row)">角色</el-button> -->
            <el-button type="text" @click="userRolesynd(row)">角色</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <use-roles :showlog.sync="showlog" ref="userRef" :userid="userid"></use-roles> -->
      <!-- 自己的子组件 -->
      <role-person :showlosg.sync="showlosg" ref="roleRed" :roleId="roleId"></role-person>
    </div>
  </div>
</template>

<script>
// 员工列表接口
import { staffcell } from "@/api/staffperson";
// 引入子组件
import UseRoles from "./components/UseRoles";

// 
import RolePerson from './components/RolePerson.vue'
export default {
  components: {
    UseRoles,
    RolePerson,
  },
  data() {
    return {
      showlosg:false,
      roleId:'',
      showlog: false,
      userid:'',//id记录下来
      // 数组用来存放请求回来的数据
      getsz: [],
      // 更详细的数据放入数组中
      getstyle: [],
      value: true,

      // 不稳定图片的路径
      imgsrc: require("../../assets/logo.png"),
    };
  },
  created() {
    // 页面一打开就监听这个事件
    this.getstulls();
  },
  methods: {
    // 请求数据的接口
    async getstulls() {
      // 请求的数据赋值给数据
      this.getsz = await staffcell();
      // 把rows层的数据赋值新数组
      this.getstyle = this.getsz.rows;
      // console.log(this.getsz);
    },
    // 角色分配
    userRolesybc(row){
      this.userid=row.id;
      this.$refs.userRef.getroles(row.id)
      this.showlog=true
    },
    // 角色分配1
    userRolesynd(row){
      // 点击角色 让弹框显示
      this.showlosg=true;
      // 把id保留
      this.roleId=row.id;
      // 获取子组件实例 传递id
      this.$refs.roleRed.getuser(row.id)
    }
  },
};
</script>

<style scoped>
img {
  width: 70px;
  height: 70px;
}
</style>