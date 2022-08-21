<template>
  <el-row :gutter="30" style="height: 100%">
    <el-col :span="6" style="height: 100%">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">成功率</el-menu-item>
          <el-menu-item index="2">返回信息</el-menu-item>
        </el-menu>
      </el-scrollbar>

      <el-row
        v-for="(data, index) in dataurl"
        :key="index"
        :gutter="10"
        class="box"
      >
        <el-col
          :span="16"
          style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap"
        >{{ data.url }}</el-col>
        <el-col :span="8">{{ data.num }}({{ data.rate }})|100% </el-col>
      </el-row>
    </el-col>
    <el-col v-if="activeIndex1==='1'" :span="18">
      成功率
      <el-divider />
      <SuccessRate />
      链路追踪
      <el-divider />
      <SuccessDetail />
    </el-col>
    <el-col v-else :span="18">
      Msg调用详情
      <el-divider />
      <Message />
    </el-col>
  </el-row>
</template>

<script>
import SuccessRate from './charts/SuccessRate.vue'
import SuccessDetail from './charts/SuccessDetail.vue'
import Message from './charts/Message.vue'
export default {
  name: '',
  components: {
    SuccessRate,
    SuccessDetail,
    Message
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex1: '1',
      dataurl: [
        {
          url: 'https://blog.csdn.net/qq_44724181/article/details/120994479',
          num: 10,
          rate: '60%'
        },
        {
          url: 'https://blog.csdn.net/qq_44724181/article/details/120994479',
          num: 10,
          rate: '60%'
        }
      ]
    }
  },
  methods: {
    handleSelect() {
      this.activeIndex1 = this.activeIndex1 === '2' ? '1' : '2'
    }
  }
}
</script>
<style scoped lang='less'>
.box {
  background-color: rgb(129, 224, 253);
  color: #fff;
  padding: 10px;
  margin: 1vh 0;
  font-size: 10px;
}
</style>
