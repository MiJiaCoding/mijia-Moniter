<template>
  <div id="system" style="height: 400px; width: 500px" />
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
      this.chart = echarts.init(document.getElementById('system'))
      this.chart.setOption({
        title: {
          text: '系统分类统计'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'windows' },
              { value: 735, name: 'MAC OS' },
              { value: 580, name: 'ISO' }
            ]
          }
        ]
      })
    }
  }
}
</script>
<style scoped lang='less'>
</style>
