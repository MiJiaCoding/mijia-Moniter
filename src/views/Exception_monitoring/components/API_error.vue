<template>
  <div id="APIerror" class="main_container" />
</template>
<script>
import '/mock/error-counts-mock.js'
import axios from 'axios'
export default {
  data: function() {
    return {
      timeline: [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
        '24:00'
      ],
      API_error: []
    }
  },
  watch: {
    option: {
      handler(options) {
        this.APIerror_Chart.setOption(this.options)
      },
      deep: true
    }
  },
  mounted() {
    this.drawCharts()
  },
  methods: {
    initCharts(data) {
      // 基于准备好的dom，初始化echarts实例
      var APIerror = document.getElementById('APIerror')
      var APIerror_Chart = this.$echarts.init(APIerror)
      // 绘制图表
      APIerror_Chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          data: this.timeline
        },
        yAxis: {},
        series: [
          {
            name: '接口请求报错次数',
            type: 'line',
            data: data
          }
        ]
      })
    },

    async drawCharts() {
      const info = await axios.post('/error/counts', { data: this.timeline })
      for (var i of info.data.error) {
        this.API_error.push(i.counts)
      }
      await this.initCharts(this.API_error)
    }
  }
}
</script>
<style scoped>
.main_container {
  width: 350px;
  height: 250px;
  overflow: hidden;
}
</style>
