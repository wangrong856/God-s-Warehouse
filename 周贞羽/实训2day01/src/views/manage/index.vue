<template>
  <div class="manage">
    用户列表
    <el-table :data="tableDatas" style="width: 100%" align="center">
      <el-table-column prop="time" label="注册时间" >
      </el-table-column>
      <el-table-column prop="name" label="姓名" > </el-table-column>
      <el-table-column label="头像" >
        <template slot-scope="{ row }">
          <img :src="row.head" alt="" @click="imgClick(row.head)" />
        </template>
      </el-table-column>
      <el-table-column prop="sex" label="性别" ></el-table-column>
      <el-table-column prop="position" label="职业" ></el-table-column>
    </el-table>
    <el-dialog :visible.sync="visibleync" align="center" width="40vw">
      <img class="imgsy" :src="imgs" alt="" >
    </el-dialog>
  </div>
</template>

<script>
// 引入用户列表的数据
import { userlistll } from "@/Api/user";
export default {
  data() {
    return {
      tableDatas: [],
      // 请求参数
      query: { 
        page: 1,
        pagesize: 10,
      },
      visibleync:false,
      imgs:""
    };
  },
  created() {
    this.getuserlist();
  },
  methods: {
    async getuserlist() {
      let ress = await userlistll(this.query);
      console.log(ress.data.result);
      this.tableDatas=ress.data.result
    },
    // 点击图片
    imgClick(head){
      this.visibleync=true
      this.imgs=head
    }
  },
};
</script>

<style scoped>
  .imgsy{
    height: 200px;
    width: 400px;
  }
  img{
    width: 120px;
    height: 90px;
  }
</style>