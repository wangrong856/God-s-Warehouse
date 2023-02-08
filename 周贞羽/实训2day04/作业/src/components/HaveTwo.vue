<template>
  <div class="havetwo">
    <div id="cake" style="width: 300px; height: 550px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import store from "@/store";
import { dashboards } from "@/Api/index";
export default {
  created() {
    this.gethave();
  },
  methods: {
    async gethave() {
      let res = await dashboards(store.getters.token);
    //   console.log(res.salaryData);
      var myChart = echarts.init(document.getElementById("cake"));
      let option = {
        title: [
          {
            text: "男女薪资分布",
            top: 10,
            left: 30,
            textStyle: {
              fontSize: 20,
            },
          },
          {
            text: "男生",
            top: 210,
            left: 120,
            textStyle: {
              fontSize: 20,
            },
          },
          {
            text: "女生",
            top: 390,
            left: 120,
            textStyle: {
              fontSize: 20,
            },
          },
        ],

        tooltip: {
          trigger: "item",
        },
        legend: {
          bottom: "5%",
          left: "center",
        },
        series: [
          {
            silent:true,
            name: "Access From",
            type: "pie",
            radius: ["20%", "30%"],
            center: ["50%", "25%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 0,
              borderColor: "#fff",
              borderWidth: 0,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: res.salaryData.map(item=>{return {value:item['b_count']}}),
            color: ["#fda224", "#5097ff", "#3abcfa", "#34d39a"],
          },
          // 第二个
          {
            silent:true,
            // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
            name: "Access From",
            type: "pie",
            radius: ["20%", "30%"],
            center: ["50%", "60%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 0,
              borderColor: "#fff",
              borderWidth: 0,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: res.salaryData.map(item=>{return {value:item['g_count']}}),
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
</style>