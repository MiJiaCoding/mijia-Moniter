<template>
  <div id="ErrorAll" style="height: 300px; width: 1200px; font-size: 10px" />
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
      this.chart = echarts.init(document.getElementById("ErrorAll"));
      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          data: ["错误数", "错误率"],
        },
        xAxis: [
          {
            type: "category",
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
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "错误数",
            min: 0,
            max: 3,
            interval: 0.5,
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "错误率",
            min: 0,
            max: 4,
            interval: 2,
            axisLabel: {
              formatter: "{value} %",
            },
          },
        ],
        series: [
          {
            name: "错误数",
            type: "bar",
            color: 'rgb(37, 201, 227)',
            data: [3, 2, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "错误率",
            type: "line",
            yAxisIndex: 1,
            color: 'rgb(73, 149, 225)',
            smooth: true,
            data: [3.5, 1.7, 0, 2.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
