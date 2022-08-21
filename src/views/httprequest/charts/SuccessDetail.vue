<template>
  <el-table :data="tableData" border :fit="false" style="width: 100%; font-size: 10px">
    <el-table-column prop="report" label="上报时间" width="80" />
    <el-table-column prop="request" label="请求耗时" width="80" />
    <el-table-column
      prop="page"
      label="页面"
      width="180"
    />
    <el-table-column
      prop="page"
      label="API"
      width="180"
    />
    <el-table-column prop="status" label="HTTP状态码" width="104" />
    <el-table-column prop="msg" label="MSG" width="180" />
    <el-table-column label="操作" width="90">
      <template slot-scope>
        <el-button type="text" size="small"> 错路追踪 </el-button>
        <br>
        <el-button type="text" size="small"> 访问明细 </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      tableData: [
        {
          report: '2020-12-01 ',
          request: '183ms',
          api: 'sadndcobibufcnsmmxyuhijkalskdhsj',
          page: 'sadndcobibufcnsmmxyuhijkalskdhsj',
          status: 200,
          msg: ''
        },
        {
          report: '2020-12-01 ',
          request: '183ms',
          api: 'sadndcobibufcnsmmxyuhijkalskdhsj',
          page: 'sadndcobibufcnsmmxyuhijkalskdhsj',
          status: 200,
          msg: ''
        },
        {
          report: '2020-12-01 ',
          request: '183ms',
          api: 'sadndcobibufcnsmmxyuhijkalskdhsj',
          page: 'sadndcobibufcnsmmxyuhijkalskdhsj',
          status: 200,
          msg: ''
        },
        {
          report: '2020-12-01 ',
          request: '183ms',
          api: 'sadndcobibufcnsmmxyuhijkalskdhsj',
          page: 'sadndcobibufcnsmmxyuhijkalskdhsj',
          status: 200,
          msg: ''
        }
      ]
    }
  }
}
</script>
<style scoped lang='less'>
</style>
