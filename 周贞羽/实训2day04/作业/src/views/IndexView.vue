<template>
  <div>
    <!-- Page Title -->
    <div class="page-title">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-6 mb-3 mb-md-0">
          <h5 class="h3 font-weight-400 mb-0 text-white">Dashboard</h5>
          <span class="text-sm text-white opacity-8">前端 2202A</span>
        </div>
      </div>
    </div>
    <!-- charts -->
    <div class="row">
      <div class="col-xl-3 col-md-6">
        <div class="card card-stats">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h6 class="text-muted mb-1">就业薪资</h6>
                <span name="salary" class="h3 font-weight-bold mb-0"
                  >
                  {{ sz['age'] }}
                  </span
                >
              </div>
              <div class="col-auto">
                <i class="bi bi-coin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card card-stats">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h6 class="text-muted mb-1">班级人数</h6>
                <span name="student_count" class="h3 font-weight-bold mb-0"
                  > {{ sz['group_count'] }}</span
                >
              </div>
              <div class="col-auto">
                <i class="bi bi-people"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card card-stats">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h6 class="text-muted mb-1">平均年龄</h6>
                <span name="age" class="h3 font-weight-bold mb-0"> {{ sz['salary'] }}</span>
              </div>
              <div class="col-auto">
                <i class="bi bi-calendar2-week"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h6 class="text-muted mb-1">小组个数</h6>
                <span name="group_count" class="h3 font-weight-bold mb-0"
                  > {{ sz['student_count'] }}</span
                >
              </div>
              <div class="col-auto">
                <i class="bi bi-collection"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-xl-8">
        <div class="card" id="line" style="height: 400px">
          <!-- one ! ! ! 
          
          -->

          <div id="mainsync" style="width: 620px; height: 500px"></div>
        </div>
      </div>
      <div class="col col-xl-4">
        <div class="card" id="salary" style="height: 400px">
        <!-- two!!!!! -->
        <!-- asdajhfkjagkfhajsh -->
       <two-cndex></two-cndex>
        </div>
      </div>
      <div class="col col-xl-12">
        <div class="card" style="height: 400px">
          <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="mb-0">班级每组薪资</h6>
              <div id="btns">
                <button type="button" class="btn btn-xs btn-blue">1</button>
                <button type="button" class="btn btn-xs" @click="twoClick">2</button>
                <button type="button" class="btn btn-xs">3</button>
                <button type="button" class="btn btn-xs">4</button>
                <button type="button" class="btn btn-xs">5</button>
                <button type="button" class="btn btn-xs">6</button>
                <button type="button" class="btn btn-xs">7</button>
                <button type="button" class="btn btn-xs">8</button>
              </div>
            </div>
          </div>
          <div class="card-body p-0" id="lines">
            <zhu-index></zhu-index>

          </div>
        </div>
      </div>
      <div class="col col-xl-4">
        <div class="card" id="gender" style="height: 500px">
          <have-two></have-two>
        </div>
      </div>
      <div class="col col-xl-8">
        <div class="card" id="map" style="height: 500px">
          <my-map></my-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { dashboards } from "@/Api/index";
import store from "@/store";
import TwoCndex from '@/components/TwoIndex.vue'
import ZhuIndex from '@/components/ZhuIndex.vue'
import HaveTwo from '@/components/HaveTwo.vue'
// 引入地图
import MyMap from '@/components/MyMap.vue'
export default {
  components:{
    TwoCndex,ZhuIndex,HaveTwo,MyMap
  },
  data() {
    return {
      sz:[]
    };
  },
  created() {
    this.getdash();
  },
  methods: {
    twoClick(){
      this.$router.push('/twoindexs')
    },
    async getdash() {
      // console.log(store.getters.token);
      let ress = await dashboards(store.getters.token);
      console.log(ress);
      this.sz=ress.overview
      // console.log(this.sz.overview['age']);
    var myCharts = echarts.init(document.getElementById("mainsync"));
    let option = {
      xAxis: {
        type: "category",
        data: ress.year.map(item=>{return item['month']}),
        axisLine: {
          lineStyle: {
            type: "dashed",
            color: ["#aaa"],
          },
        },
      },
      title: {
        text: "2021全学科薪资走势",
        textStyle: {
          fontWeight: "bold",
        },
        top: "15",
        left: "23",
      },
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "#4a9cee", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#5c76ef", // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
      yAxis: {
        type: "value",
        splitLine: {
          lineStyle: {
            type: "dashed",
          },
        },
      },
      tooltip: {
        show: true,
      },
      series: [
        {
          showSymbol: true,
          symbolSize: 10,
          data:ress.year.map(item=>{return item['salary']}),
          type: "line",
          smooth: true,
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 0.7,
              colorStops: [
                {
                  offset: 0,
                  color: "#bfddf9", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#ffffff", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          lineStyle: {
            width: 9,
          },
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myCharts.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>