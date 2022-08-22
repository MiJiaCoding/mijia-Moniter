<template>
  <div id="PVUV" style="height: 265px; width: 650px; font-size: 10px" />
</template>

<script>
import echarts from "echarts";
export default {
  name: "",
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById("PVUV"));
      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#c7d6e1",
            },
          },
        },
        legend: {
          data: ["PV", "UV"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
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
            type: "category",
            boundaryGap: false,
            data: [
              "08/14 17:00",
              "",
              "",
              "",
              "08/15 23:00",
              "",
              "",
              "",
              "08/15 05:00",
              "",
              "",
              "",
              "08/15 11:00",
              "",
              "",
              "",
              "08/15 17:00",
              "",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "PV",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            color: "rgb(255, 215, 47)",
            smooth: true,
            data: [33, 46, 38, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 7, 0],
          },
          {
            name: "UV",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            color: "rgb(0, 193, 222)",
            smooth: true,
            data: [5, 2, 3, 2.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0],
          },
        ],
      });
    },
  },
};
</script>
<style scoped lang='less'>
.text {
  color: #c7d6e1;
}
</style>
