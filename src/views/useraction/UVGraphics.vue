<template>
  <div id="uv" style="height: 500px; width: 1000px" />
</template>

<script>
import echarts from 'echarts'
export default {
  name: '',
  data() {
    return {
      chart: null,
      data: [
        ['2000-06-05', 116],
        ['2000-06-06', 129],
        ['2000-06-07', 135],
        ['2000-06-08', 86],
        ['2000-06-09', 73],
        ['2000-06-10', 85],
        ['2000-06-11', 73],
        ['2000-06-12', 68],
        ['2000-06-13', 92],
        ['2000-06-14', 130],
        ['2000-06-15', 245],
        ['2000-06-16', 139],
        ['2000-06-17', 115],
        ['2000-06-18', 111],
        ['2000-06-19', 309],
        ['2000-06-20', 206],
        ['2000-06-21', 137],
        ['2000-06-22', 128],
        ['2000-06-23', 85],
        ['2000-06-24', 94],
        ['2000-06-25', 71],
        ['2000-06-26', 106],
        ['2000-06-27', 84],
        ['2000-06-28', 93],
        ['2000-06-29', 85],
        ['2000-06-30', 73],
        ['2000-07-01', 83],
        ['2000-07-02', 125],
        ['2000-07-03', 107],
        ['2000-07-04', 82],
        ['2000-07-05', 44],
        ['2000-07-06', 72],
        ['2000-07-07', 106],
        ['2000-07-08', 107],
        ['2000-07-09', 66],
        ['2000-07-10', 91],
        ['2000-07-11', 92],
        ['2000-07-12', 113],
        ['2000-07-13', 107],
        ['2000-07-14', 131],
        ['2000-07-15', 111],
        ['2000-07-16', 64],
        ['2000-07-17', 69],
        ['2000-07-18', 88],
        ['2000-07-19', 77],
        ['2000-07-20', 83],
        ['2000-07-21', 111],
        ['2000-07-22', 57],
        ['2000-07-23', 55],
        ['2000-07-24', 60]
      ]
    }
  },
  computed: {
    // 日期数组
    dataList: function() {
      return this.data.map((item) => item[0])
    },
    valueList: function() {
      return this.data.map((item) => item[1])
    }
  },
  mounted() {
    console.log(123)
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('uv'))
      console.log(this.chart)
      this.chart.setOption({
        title: {
          text: '实时访问UV'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
      })
    }
  }
}
</script>
<style scoped lang='less'>
</style>
