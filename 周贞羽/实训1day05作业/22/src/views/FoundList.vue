<template>
  <div class="fillcontainer">
    <!-- 帅选 -->
    <el-form :inline="true" :model="search_data" ref="search_data">
      <el-form-item label="时间帅选:">
        <el-date-picker
          v-model="search_data.startTime"
          type="datetime"
          placeholder="选择开始日期"
        >
        </el-date-picker>
        --
        <el-date-picker
          v-model="search_data.endTime"
          type="datetime"
          placeholder="选择结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="onScreeoutMoney"
          >帅选</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="allTableData" max-height="555">
      <el-table-column
        label="序号"
        type="index"
        align="center"
        width="70"
      ></el-table-column>

      <el-table-column
        label="创建时间"
        prop="date"
        align="center"
      ></el-table-column>
      <el-table-column
        label="收支类型"
        prop="type"
        align="center"
      ></el-table-column>
      <el-table-column
        label="收支描述"
        prop="describe"
        align="center"
      ></el-table-column>
      <el-table-column
        label="收入"
        prop="income"
        align="center"
      ></el-table-column>
      <el-table-column
        label="支出"
        prop="expend"
        align="center"
      ></el-table-column>
      <el-table-column
        label="账户现金"
        prop="cash"
        align="center"
      ></el-table-column>
      <el-table-column
        label="备注"
        prop="remark"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="{ row, $index }">
          <el-button type="warning" size="mini" @click="editc(row, $index)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="paginations.page_index"
      :page-sizes="paginations.page_sizes"
      :page-size="paginations.page_size"
      :layout="paginations.layout"
      :total="paginations.total"
    >
    </el-pagination>
    <son-view :dialog="dialog" @update="getTableList" :form="form"></son-view>
    <el-button v-hide type="primary" @click="addd">添加</el-button>
  </div>
</template>

<script>
import SonView from "../components/SonView.vue";
import { getProfiles } from "@/api/profile";

export default {
  components: {
    SonView,
  },
  data() {
    return {
      dialog: {
        show: false,
        title: "编辑资金信息",
        option: "add",
      },
      form: {
        type: "",
        describe: "",
        income: "",
        expend: "",
        cash: "",
        remark: "",
        _id: "",
      },
      search_data: {
        startTime: "",
        endTime: "",
      },
      tableDate: [], //所有的数据
      allTableData: [], //筛选的数据
      paginations: {
        page_index: 1, //当前位于哪页
        total: 0, //总数
        page_size: 5, //1页显示多少条
        page_sizes: [5, 10, 15, 20],
        layout: "total, sizes, prev, pager, next, jumper", //翻页属性
      },
    };
  },
  created() {
    this.getTableList();
  },
  methods: {
    // 编辑按钮
    editc(row, index) {
      (this.dialog = {
        show: true,
        title: "编辑资金信息",
        option: "edit",
      }),
        //   表单回显
        (this.form = {
          type: row.type,
          describe: row.describe,
          income: row.income,
          expend: row.expend,
          cash: row.cash,
          remark: row.remark,
          _id: row._id,
        });
    },
    // 点击添加按钮
    addd() {
      (this.dialog = {
        show: true,
        title: "添加资金信息",
        option: "add",
      }),
        (this.form = {
          type: "",
          describe: "",
          income: "",
          expend: "",
          cash: "",
          remark: "",
          _id: "",
        });
      // this.getTableList();
    },
    async getTableList() {
      let res = await getProfiles();
      this.tableDate = res;
      this.allTableData = res; //拿到所有数据
      //  设置分页的初始值
      // this.setPaginations();
      this.paginations.total = this.allTableData.length;
      this.pageList();
    },
    // 设置分页初始值
    setPaginations() {
      this.paginations.total = this.allTableData.length;
      this.paginations.page_index = 1;
      this.paginations.page_size = 5;
      //   分页数据操作
      this.pageList();
    },
    pageList() {
      // 过滤分页数据
      // 分页数据显示
      // 当前页数据
      /* 
                1页   0-5
                2页   5-10
                3     10-15
                n   index>=n-1*pagesize     index<n*pagesize
                                页数 *条数  */   
      
      // this.allTableData = this.tableDate.slice(
      //   (this.paginations.page_index - 1) * this.paginations.page_size,
      //   this.paginations.page_index * this.paginations.page_size
      // )
      this.allTableData = this.tableDate.filter((item, index) => {
        return (
          index < this.paginations.page_index * this.paginations.page_size &&
          index >=
            (this.paginations.page_index - 1) * this.paginations.page_size
        );
      });
    },
    // 帅选
    onScreeoutMoney() {
      console.log(123);
      // 非空判断
      if (!this.search_data.startTime || !this.search_data.endTime) {
        this.$message({
          type: "warning",
          message: "请选择时间区间",
        });
        return;
      }
      // 开始时间的时间戳
      const stime = this.search_data.startTime.getTime();
      // 结束时间的时间戳
      const etime = this.search_data.endTime.getTime();

      // 在 所有的数据中进行过滤  在开始和结束中间的时间戳的数据
      this.allTableData = this.tableDate.filter((item) => {
        // 转换时间对象
        let date = new Date(item.date);
        // 获取时间戳
        let time = date.getTime();

        return time >= stime && time <= etime;
      });
    },
    handleSizeChange(val) {
      //点击每页条数
      this.paginations.page_size = val;
      this.pageList();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //点击的是当前页
      this.paginations.page_index = val;
      this.pageList();
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style scoped>
</style>