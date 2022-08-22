<template>
  <div id="uv" style="height: 300px; width: 1300px" />
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
      this.chart = echarts.init(document.getElementById('uv'))
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
            data: [5, 2, 3, 2.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0],
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
