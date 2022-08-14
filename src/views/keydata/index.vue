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
    <el-card>
      <PageLoad />
    </el-card>
    <el-card>
      <h4>页面平均耗时</h4>
      <el-divider />
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column prop="url" label="URL" width="450" />
        <el-table-column prop="fp" label="白屏时间(ms)" width="90" />
        <el-table-column prop="fcp" label="首屏时间(ms)" width="90" />
        <el-table-column prop="dom_ready" label="DOM构建时间(ms)" width="180" />
        <el-table-column prop="dom_parse" label="解析dom时间(ms)" width="180" />
        <el-table-column prop="dns" label="DNS解析时间(ms)" width="180" />
      </el-table>
    </el-card>
  </div>
</template>

<script>
import PageLoad from './PageLoad.vue'
export default {
  name: '',
  components: {
    PageLoad
  },
  data() {
    return {
      tableData: [
        {
          url: 'https://blog.csdn.net/qq_44724181/article/details/120994479',
          fp: 1,
          fcp: 2,
          dom_ready: 3,
          dom_parse: 4,
          dns: 5
        }
      ]
    }
  }
}
</script>
<style scoped>
.box-card {
  margin-bottom: 4vh;
}
</style>
