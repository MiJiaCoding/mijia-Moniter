<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column prop="msg" label="错误信息" width="700"> </el-table-column>
      <el-table-column prop="enum" label="错误数" sortable width="180">
      </el-table-column>
      <el-table-column prop="unum" label="影响用户数" sortable width="180"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope>
          <el-button size="mini" type="danger">分析</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tableData: [
        {
          msg: "Next is not defined",
          enum: "1",
          unum: 1,
        },
        {
          msg: "Next is not defined",
          enum: "1",
          unum: 1,
        },
      ],
    };
  },
//   methods: {
//     formatter(row, column) {
//       return row.address;
//     },
//   },
};
</script>
<style scoped lang='less'>
</style>