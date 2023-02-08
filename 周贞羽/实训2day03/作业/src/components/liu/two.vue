<template>
    <div class="zhu">
      <div id="classiy" style="width: 800px; height: 350px"></div>
    </div>
  </template>
  
  <script>
  import * as echarts from "echarts";
  import store from "@/store";
  import { dashboards } from "@/Api/index";
  export default {
    created() {
      this.getzhus();
    },
    methods: {
      async getzhus() {
        let res = await dashboards(store.getters.token);
        console.log(res.groupData);
        console.log(res.groupData[2]);
        var myChart = echarts.init(document.getElementById("classiy"));
        let option = {
          xAxis: {
            type: "category",
            data: res.groupData[2].map(item=>{return item['name']}),
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
              data: res.groupData[2].map(item=>{return item['hope_salary']}),
              type: "bar",
            },
            {
              data:res.groupData[2].map(item=>{return item['salary']}) ,
              type: "bar",
            },
          ],
          color: ["#51d9a8", "#55a5ef"],
        };
        myChart.setOption(option);
      },
    },
  };
  </script>
  
  <style>
  </style>