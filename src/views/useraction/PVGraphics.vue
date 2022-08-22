<template>
  <div id="pv" style="height: 300px; width: 1300px" />
</template>

<script>
import echarts from 'echarts'
export default {
  name: '',
  data() {
    return {
      chart: null
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
      this.chart = echarts.init(document.getElementById('pv'))
      console.log(this.chart)
      this.chart.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            '08/14 17:00',
            '',
            '',
            '',
            '08/15 23:00',
            '',
            '',
            '',
            '08/15 05:00',
            '',
            '',
            '',
            '08/15 11:00',
            '',
            '',
            '',
            '08/15 17:00',
            ''
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [33, 46, 38, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 7, 0],
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
