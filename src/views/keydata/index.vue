<template>
  <div>
    <el-row>
      <el-descriptions
        class="margin-top"
        title="垂直无边框列表"
        :column="4"
        direction="vertical"
      >
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item
          label="居住地"
          :span="2"
        >苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item
          label="联系地址"
        >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
      </el-descriptions>
    </el-row>
    <el-row>
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column prop="fp" label="白屏时间(ms)" width="180" />
        <el-table-column prop="fcp" label="首屏时间(ms)" width="180" />
        <el-table-column prop="dom_ready" label="DOM构建时间(ms)" width="180" />
        <el-table-column prop="dom_parse" label="解析dom时间(ms)" />
        <el-table-column prop="dns" label="DNS解析时间(ms)" width="180" />
      </el-table>
    </el-row>
  </div>
</template>

<script>
// import echarts from 'echarts'

export default {
  name: '',
  data() {
    return {
      tableData: [
        {
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
