<template>
  <div class="zhu">
    <div id="classi" style="width: 800px; height: 350px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import store from "@/store";
import { dashboards } from "@/Api/index";
export default {
  created() {
    this.getzhu();
  },
  methods: {
    async getzhu() {
      let res = await dashboards(store.getters.token);
    //   console.log(res.groupData);
    //   console.log(res.groupData[1]);
      var myChart = echarts.init(document.getElementById("classi"));
      let option = {
        xAxis: {
          type: "category",
          data: res.groupData[1].map((item) => {
            return item["name"];
          }),
          axisLine: {
            lineStyle: {
              type: "dashed",
              color: "#CCCCCC",
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#CCCCCC",
            },
          },
        },
        series: [
          {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#64ddb1", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#fff", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            data: res.groupData[1].map((item) => {
              return item["hope_salary"];
            }),
            type: "bar",
          },
          {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#8dc3f4", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#fff", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            data: res.groupData[1].map((item) => {
              return item["salary"];
            }),
            type: "bar",
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style>
</style>