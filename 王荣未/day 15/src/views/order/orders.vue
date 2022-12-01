<template>
  <div class="orders">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            v-model="ordersInfo.query"
            clearable
            @clear="getOrders"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getOrders"
            ></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table :data="ordeersList" border style="width: 100%">
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="order_number" label="订单编号"></el-table-column>
        <el-table-column prop="order_price" label="订单价格"></el-table-column>
        <el-table-column label="是否付款">
          <template slot-scope="{ row }">
            <el-tag>{{ row.is_send }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="{ row }">
            {{ row.update_time | fomesay }}
          </template>
        </el-table-column>
        <el-table-column prop="date" label="操作" width="180">
          <template slot-scope="{ row }">
            <el-button type="success" @click="ordersAdd(row)"
              >物流信息</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="ordersInfo.pagenum"
        :page-sizes="[10, 15, 20, 25]"
        :page-size="ordersInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <el-dialog title="提示" :visible.sync="ordersDialogVisible" width="50%">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in ordersActivities"
          :key="index"
          :timestamp="activity.time"
        >
          {{ activity.context }}
        </el-timeline-item>
      </el-timeline>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Deom03Orders",

  data() {
    return {
      ordeersList: [],
      ordersInfo: {
        query: "",
        pagesize: 10,
        pagenum: 1,
      },
      total: 0,
      ordersDialogVisible: false,
      ordersActivities: [],
    };
  },

  mounted() {},

  created() {
    this.getOrders();
  },

  methods: {
    async getOrders() {
      let res = await this.$http.get("/orders", { params: this.ordersInfo });
      let { data, meta } = res.data;
      if (meta.status != 200) return this.$message.error(meta.msg);
      //   console.log(data);
      this.ordeersList = data.goods;
      this.total = data.total;
    },
    handleSizeChange(size) {
      thisa.ordersInfo.pagesize = size;
      this.getOrders();
    },
    handleCurrentChange(num) {
      this.ordersInfo.pagenum = num;
      this.getOrders();
    },
    async ordersAdd(row) {
      let res = await this.$http.get(`/kuaidi/${1106975712662}`);
      let { data, meta } = res.data;
      if (meta.status != 200) return this.$message.error(meta.msg);
      this.ordersActivities = data;
      // console.log(data);
      this.ordersDialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
