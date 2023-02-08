<template>
  <div class="role">
    员工详情<br />
    <div class="box">
      <el-button type="success" @click="addrole">添加员工</el-button>
      <el-button type="danger" @click="deleteDates">批量删除</el-button>
    </div>
    <el-table :data="tablesync" style="width: 100%" @selection-change="tablechange">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="time" label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="jobnumber" label="工号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column prop="position" label="职位"> </el-table-column>
      <el-table-column prop="quit" label="是否离职">
        <template slot-scope="{ row }">
          <el-switch
            v-model="row.quit"
            active-color="#13ce66"
            inactive-color="#87CEEB"
          >
          </el-switch>
        </template>
      </el-table-column>
    </el-table>

    <!-- 子组件 -->
    <add-role @updatadd="getess" :dialog.sync="dialog" :addsync="addsync"></add-role>
  </div>
</template>

<script>
// 引入弹框组件
import AddRole from "./AddRole.vue";
// 引入接口拿到员工详情 //是否是离职状态 //删除员工接口
import { getemloyess, modifyresi ,deleemsync} from "@/Api/getemployess";
export default {
  components: {
    AddRole,
  },
  data() {
    return {
      dialog: false,
      tablesync: [],
      addsync: {
        date:new Date().toLocaleString(),
        time: "",
        jobnumber: "",
        name: "",
        sex: "",
        position: "",
        quit:false,
      },
      // 请求参数
      page: 0,
      userRole:[]
    };
  },
  created() {
    console.log(this.tablesync);
    this.getess();
  },
  methods: {
    async getess() {
      let res = await getemloyess({ page: this.page });
      console.log(res.data.result);
      this.tablesync = res.data.result;
      console.log(this.tablesync[0].quit);
      let ress = await modifyresi({
        id: this.tablesync[0]._id,
        quit: this.tablesync[0].quit,
      });
      console.log(ress.msg);
      this.$message.success(ress.msg)
    },
    // 添加
    addrole() {
      this.dialog = true;
    },
    // 删除
    async deleteDates(){
     let m= await deleemsync({arrayid:this.userRole})
     console.log(m);
     this.$message.success(m.msg)
     this.getess()//初始化数据 刷新页面 更新数据
    },
    // 当选择性发生改变时就会触发该事件
    tablechange(val){
      console.log(val);
      this.userRole=val.map(item=>item._id)
      console.log(this.userRole);
    }
  },
};
</script>

<style scoped>
.box {
  margin: 10px 0px;
}
</style>