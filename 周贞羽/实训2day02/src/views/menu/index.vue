<template>
  <div class="menu">
    订单管理
    <el-row type="flex" justify="about">
      <el-col :span="12">
        <el-date-picker
          v-model="query.order_time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </el-col>
      <el-col :span="12">
        <el-select v-model="query.table_number" placeholder="请选择桌号">
          <el-option
            v-for="item in tablelaber"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col>
        <el-button type="success" @click="getmenus">查询</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableDate" style="width: 100%">
      <el-table-column prop="order_time" label="交易时间" width="180">
      </el-table-column>
      <el-table-column prop="table_number" label="桌号" width="180">
      </el-table-column>
      <el-table-column prop="number_of_diners" label="用餐人数">
      </el-table-column>
      <el-table-column label="菜单详情">
        <template slot-scope="{ row }">
          <el-button @click="detailview(row._id)">详情菜单</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="sett_amount" label="交易金额"> </el-table-column>
      <el-table-column label="交易状态">
        <template slot-scope="{ row }">
          <el-button
            type="danger"
            v-if="row.transac_status == 'success'"
            disabled
            >已结账</el-button
          >
          <el-button type="danger" v-if="row.transac_status == 'unsettled'"
            >未结账</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :visible.sync="visibleync"
      :before-close="closeBdforeTrue"
      :close-on-press-escape="true"
    >
      <div v-for="(item, index) in detailDate" :key="index">
        <span class="indexs">第{{ index + 1 }}次下单</span>
        <div>
          <img :src="item.image[0].url" alt="" />
        </div>
        <div class="names">
          {{ item.name }}
          {{ item.quantity }}{{ item.unit }}
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 订单管理 //获取桌号 //详情菜单
import { MenuOrder, gettableue, getvieworder } from "@/Api/menu";
export default {
  data() {
    return {
      visibleync: false, //弹框显示隐藏
      tableDate: [], //订单数据
      query: {
        page: 0,
        pagesize: 10,
        table_number: '', //桌号
        order_time: [], //交易时间
      },
      tablelaber: [], //桌号数据
      detailDate: [], //详情数据
    };
  },
  created() {
    this.getmenus(), this.getlabel();
  },
  methods: {
    // 订单管理数据
    async getmenus() {
      let data = {
        ...this.query,
        order_time: JSON.stringify(this.query.order_time || []),
      };
      let meu = await MenuOrder(data);
      console.log(meu);
      // console.log(meu.data.result);
      this.tableDate = meu.data.result;
    },
    // 获取桌号
    async getlabel() {
      let ren = await gettableue();
      // console.log(ren.data);
      this.tablelaber = ren.data;
      // console.log(this.tablelaber);
    },
    // 点击详情菜单
    async detailview(id) {
      let ids = await getvieworder(id);
      console.log(ids.data[0].goods_list);
      this.detailDate = ids.data[0].goods_list;
      this.visibleync = true;
    },
    // 点击关闭弹框
    closeBdforeTrue() {
      // 弹框隐藏
      this.visibleync = false;
    },
  },
};
</script>

<style scoped>
.indexs {
  font-size: 15px;
  color: gray;
}
.names {
  width: 100vw;
  font-size: 20px;
  font-weight: 700;
}
img {
  width: 480px;
  height: 240px;
}
</style>