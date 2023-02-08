<template>
  <div class="order">
    菜品管理<br />
    <el-button type="success" @click="addClick">添加菜品</el-button>
    <el-table :data="date" style="width: 100%">
      <el-table-column prop="time" label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="name" label="类目" width="180"> </el-table-column>
      <el-table-column prop="name" label="菜单名称"> </el-table-column>
      <el-table-column prop="image" label="商品图片">
        <template slot-scope="{ row }">
          <img :src="row.image[0].url" alt="" />
        </template>
      </el-table-column>
      <el-table-column prop="unitprice" label="价格"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{ row }">
          <el-button type="primary" size="mini">编辑</el-button>
          <el-button  type="danger" size="mini" v-show="row.onsale" @click="deletel(row._id)"
            >下架</el-button
          >
          <el-button type="danger" size="mini" v-show="!row.onsale"
            disabled>已下架</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// 获取菜品数据 //下架菜品
import { gettainshes, deletesyn } from "@/Api/obtaincate";
// 引入子组件  添加菜品
export default {
  data() {
    return {
      showing: false,
      date: [],
      query: {
        page: 0,
      },
    };
  },
  created() {
    this.getObtainCate();
  },
  methods: {
    async getObtainCate() {
      let res = await gettainshes(this.query);
      console.log(res.data.result);
      this.date = res.data.result;
      console.log(this.date);
    },
    // 上架
    addClick() {
      this.$router.push("/ofdishes");
    },
    // 下架
    async deletel(id) {
      // console.log(row._id);
      await deletesyn(id);
      this.$message({
        type: "success",
        message: "删除成功!",
      });
      // 刷新页面 初始化数据
      this.getObtainCate()
    },
  },
};
</script>

<style scoped>
img {
  width: 80px;
  height: 80px;
}
</style>