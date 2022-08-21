<template>
  <div>
    <el-card>
      <h4>页面平均耗时</h4>
      <el-divider />
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="url" label="URL" width="440" />
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
export default {
  name: '',
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
<style scoped lang='less'>
</style>
