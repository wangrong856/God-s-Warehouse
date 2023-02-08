<template>
  <div class="analysis">
    数据分析
    <!-- <div class="box2">
      <div class="analysis"></div>
      <div class="two"></div>
    </div>
    <div class="line"></div> -->
  </div>
</template>

<script>
// // 拿到数据分析的数据
// import { analysis } from "@/Api/analysis";
// // 引入ECharts图表
// import * as echarts from "echarts";

export default {
  // created() {
  //   this.getanalysis();
  // },
  // methods: {
  //   async getanalysis() {
  //     let res = await analysis();
  //     console.log(res);
  //     var myEchart = echarts.init(document.querySelector(".analysis"));
  //     var myEcharts = echarts.init(document.querySelector(".two"));
  //     var myEcharts1 = echarts.init(document.querySelector(".line"));
  //     let options = {
  //       title: {
  //         text: "客户年龄分布",
  //         left: "left",
  //       },
  //       xAxis: {
  //         type: "category",
  //         data: res.data[1].map((item) => {
  //           return item.age;
  //         }),
  //         axisLabel: {
  //           interval: 0, //设置间隔为0
  //         },
  //       },
  //       yAxis: {
  //         type: "value",
  //       },

  //       series: [
  //         {
  //           data: res.data[1].map((item) => {
  //             return {
  //               name: item.age,
  //               value: item["sales-volume"],
  //             };
  //           }),
  //           type: "bar",
  //           showBackground: true,
  //           backgroundStyle: {
  //             color: "rgba(180, 180, 180, 0.2)",
  //           },
  //         },
  //       ],
  //     };
  //     // 饼图
  //     let option = {
  //       title: {
  //         text: "菜品销量排行榜",
  //         left: "center",
  //       },
  //       tooltip: {
  //         trigger: "item",
  //       },
  //       legend: {
  //         orient: "vertical",
  //         left: "left",
  //       },
  //       series: [
  //         {
  //           name: "Access From",
  //           type: "pie",
  //           radius: "50%",
  //           data: res.data[0],
  //           label: {
  //             formatter: "{b} {d}%",
  //           },
  //           emphasis: {
  //             itemStyle: {
  //               shadowBlur: 10,
  //               shadowOffsetX: 0,
  //               shadowColor: "rgba(0, 0, 0, 0.5)",
  //             },
  //           },
  //         },
  //       ],
  //     };
      // 折线图
      // let option1 = {
      //   title: {
      //     text: "菜品分布销量趋势",
      //     left: "left",
      //   },
      //   xAxis: {
      //     type: "category",
      //     data: res.data[2].map((item) => {
      //       return item.month;
      //     }),
      //   },
      //   yAxis: {
      //     type: "value",
      //   },
      //   series: [
      //     {
      //       data: res.data[2].map((item) => {
      //         return {
      //           name: item.month,
      //           value: item["sales-volume"],
      //         };
      //       }),
      //       type: "line",
      //     },
      //   ],
      // };
      // // 菜品销量排行榜
      // myEchart.setOption(option);
      // // 客户年龄分布
      // myEcharts.setOption(options);
      // // 菜品分布销量趋势
      // myEcharts1.setOption(option1);
    // },
  // }
};
</script>

<style scoped>
  /* .box2{
    width: 100vw;
    height: 500px;
    background: red;
    display: flex;
    justify-content: space-between;
  }
  .analysis{
    width: 50%;
    height: 500px;
    background: white;
  }
  .two{
    width: 50%;
    height: 500px;
    background: white;
  }
  .line{
    width: 100vw;
    height: 500px;
    background: wheat;
  } */
</style>