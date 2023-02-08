<template>
  <div class="twoindex">
    <div id="lines" style="width: 300px; height: 400px"></div>
  </div>
</template>

<script>
import store from "@/store";
import { dashboards } from "@/Api/index";
import * as echarts from "echarts";
export default {
  created() {
    this.gettwo();
  },
  methods: {
    async gettwo() {
      let res = await dashboards(store.getters.token);
      // console.log(res.salaryData);
      let myCharts = echarts.init(document.getElementById("lines"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "班级薪资分布",
          top: 30,
          left: 40,
          textStyle: {
            fontWeight: 700,
            fontSize: 25,
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          bottom: "5%",
          left: "center",
        },
        series: [
          {
            name: "班级薪资分布",
            type: "pie",
            radius: ["40%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            color: ["#fda224", "#5097ff", "#3abcfa", "#34d39a"],
            labelLine: {
              show: false,
            },
            data:res.salaryData.map(item=>{return {name:item['label'],value:item['b_count']}}),
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myCharts.setOption(option);
    },
  },
};
</script>

<style>
</style>