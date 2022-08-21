<template>
  <el-table :data="tableData" border :fit="false" style="width: 100%; font-size: 10px">
    <el-table-column prop="api" label="API名称" width="654" />
    <el-table-column prop="num" label="调用次数" width="80" />
    <el-table-column prop="status" label="HTTP状态码" width="80" />
    <el-table-column prop="isSuccess" label="isSuccess" width="80" />
  </el-table>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      tableData: [
        {
          api: 'sadndcobibufcnsmmxyuhijkalskdhsj',
          num: 90,
          status: 200,
          isSuccess: 1
        },
        {
          api: 'sadndcobibufcnsmmxyuhijkalskdhsj',
          num: 144,
          status: 200,
          isSuccess: 1
        }
      ]
    }
  }
}
</script>
<style scoped lang='less'>
</style>
