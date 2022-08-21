<template>
  <div>
    <el-card class="box-card">
      <h4>页面平均耗时</h4>
      <el-divider />
      <el-descriptions :column="4" direction="vertical">
        <el-descriptions-item
          label="平均加载耗时(s)"
        >1.1123s</el-descriptions-item>
        <el-descriptions-item
          label="平均白屏耗时(ms)"
        >124.33ms</el-descriptions-item>
        <el-descriptions-item
          label="平均DOM构建耗时(s)"
        >0.773s</el-descriptions-item>
        <el-descriptions-item
          label="平均解析DOM耗时(s)"
        >0.443s</el-descriptions-item>
        <el-descriptions-item
          label="平均DNS解析耗时(s)"
        >0.40s</el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-row class="box-card">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">性能统计</el-menu-item>
        <el-menu-item index="2">页面关键性能指标</el-menu-item>
      </el-menu>
    </el-row>
    <el-row v-if="activeIndex1 === '1'" :gutter="20" class="box-card">
      <el-col :span="12" style="">
        <el-card>
          <System />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <Browser />
        </el-card>
      </el-col>
    </el-row>
    <el-row v-else>
      <el-card>
        <PageLoadTime />
      </el-card>
    </el-row>
  </div>
</template>

<script>
import System from './charts/System.vue'
import Browser from './charts/Browser.vue'
import PageLoadTime from './charts/PageLoadTime.vue'
export default {
  name: '',
  components: {
    System,
    Browser,
    PageLoadTime
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex1: '1'
    }
  },
  // watch:{
  //   activeIndex:
  // }
  methods: {
    handleSelect() {
      this.activeIndex1 = this.activeIndex1 === '2' ? '1' : '2'
    }
  }
}
</script>
<style scoped>
.box-card {
  margin-bottom: 4vh;
}
</style>
