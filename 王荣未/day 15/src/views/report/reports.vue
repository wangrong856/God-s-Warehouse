<template>
  <div class="reports">
    <el-card>
      <el-row>
        <el-col>
          <span>用户来源</span>
        </el-col>
      </el-row>
      <div class="echartss"></div>
    </el-card>
  </div>
</template>

<script>
// export default xx es6  ==>  import xx from 'xx
// module.exports = {} ==> require('xx')

let echarts = require("echarts");

// import * as echarts from 'echarts'

export default {
  name: "Deom03Reports",

  data() {
    return {
      options: {
        title: {
          //   text: "用户来源",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#E9EEF3",
            },
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            boundaryGap: false,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
      },
    };
  },
  boundaryGap: true,

  async mounted() {
    let res = await this.$http.get("reports/type/1");
    let { data, meta } = res.data;
    if (meta.status != 200) return this.$message.error(meta.msg);
    const list = { ...this.options, ...data };
    list.xAxis[0].boundaryGap = false;
    let MyEcharts = echarts.init(document.querySelector(".echartss"));
    MyEcharts.setOption(list);
  },

  created() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
span {
  font-size: 20px;
  color: #fff;
}
.echartss {
  width: 1017px;
  height: 500px;
  box-sizing: border-box;
  background: #fff;
  margin-top: 10px;
  padding-top: 15px;
}
</style>
