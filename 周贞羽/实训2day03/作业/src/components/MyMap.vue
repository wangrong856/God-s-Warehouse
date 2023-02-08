<template>
  <div class="map">
    <div id="map" style="width: 300px; height: 400px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "../assets/china";
// 引入接口
import { dashboards } from "@/Api/index";
import store from "@/store";
export default {
  data() {
    return {
      objsync: [],
      data: [
        { name: "南海诸岛", value: 0 },
        { name: "北京", value: 0 },
        { name: "天津", value: 0 },
        { name: "上海", value: 0 },
        { name: "重庆", value: 0 },
        { name: "河北", value: 0 },
        { name: "河南", value: 0 },
        { name: "云南", value: 0 },
        { name: "辽宁", value: 0 },
        { name: "黑龙江", value: 0 },
        { name: "湖南", value: 0 },
        { name: "安徽", value: 0 },
        { name: "山东", value: 0 },
        { name: "新疆", value: 0 },
        { name: "江苏", value: 0 },
        { name: "浙江", value: 0 },
        { name: "江西", value: 0 },
        { name: "湖北", value: 0 },
        { name: "广西", value: 0 },
        { name: "甘肃", value: 0 },
        { name: "山西", value: 0 },
        { name: "内蒙古", value: 0 },
        { name: "陕西", value: 0 },
        { name: "吉林", value: 0 },
        { name: "福建", value: 0 },
        { name: "贵州", value: 0 },
        { name: "广东", value: 0 },
        { name: "青海", value: 0 },
        { name: "西藏", value: 0 },
        { name: "四川", value: 0 },
        { name: "宁夏", value: 0 },
        { name: "海南", value: 0 },
        { name: "台湾", value: 0 },
        { name: "香港", value: 0 },
        { name: "澳门", value: 0 },
      ],
    };
  },
  created() {
    this.getmap();
  },
  methods: {
    async getmap() {
      let resn = await dashboards();
      console.log(resn);
      // 遍历data 依次在后端返回得数据中
      this.data.forEach((item) => {
        let obj = resn.provinceData.find((v) => {
          let pattern = /省|维吾尔自治区|壮族自治区|回族自治区|自治区/g;
          return v.name.replace(pattern, "") === item.name;
        });
        console.log(obj);
        if (obj) {
          item.value = obj.value;
        }
      });
      var myCharts = echarts.init(document.getElementById("map"));
      let option = {
        visualMap: {
          min: 0,
          max: 6,
          left: "left",
          bottom: "10px",
          text: ["0", "6"],
          calculable: false,
          orient: "vertical",
          inRange: {
            color: ["#e0ffff", "#006edd"],
            symbolSize: [30, 100],
          },
        },
        tooltip: {
          formatter: "{b} {c}位成员",
          borderColor: "transparent",
          backgroundColor: "rgba(0,0,0,0.4)", //提示框背景透明度
          trigger: "item", //
          padding: 8,
          enterable: true,
          transitionDuration: 1,
          textStyle: {
            color: "#fff",
            decoration: "none",
          },
        },
        series: [
          {
            name: "籍贯分布",
            type: "map",
            mapType: "china",
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
              },
              emphasis: {
                label: {
                  show: true,
                },
              },
            },
            label: {
              normal: {
                //静态的时候展示样式
                show: true, //是否显示地图省份得名称
                textStyle: {
                  color: "black",
                  fontSize: 12,
                },
              },
              emphasis: {
                //动态展示的样式
                color: "#fff",
              },
            },
            data: this.data,
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