<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column prop="page" label="页面" width="700"> </el-table-column>
      <el-table-column prop="rate" label="错误率" sortable width="180">
      </el-table-column>
      <el-table-column prop="num" label="访问量" sortable width="180"> </el-table-column>
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
          page: "2022-8-14",
          rate: "7.1%",
          num: 14,
        },
        {
          page: "2022-8-15",
          rate: "3.7%",
          num: 54,
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