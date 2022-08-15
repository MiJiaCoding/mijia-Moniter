<template>
  <div>
    <el-card class="box-card">
      <el-descriptions title="今日概括">
        <el-descriptions-item label="PV">145555</el-descriptions-item>
        <el-descriptions-item label="UV">181000</el-descriptions-item>
        <el-descriptions-item label="IP">2087</el-descriptions-item>
      </el-descriptions>
    </el-card>
    <!-- 实时PV -->
    <el-card class="box-card">
      <!-- <PVGraphics /> -->
    </el-card>
    <!-- 实时UV -->
    <el-card>
      <UVGraphics />
    </el-card>
  </div>
</template>

<script>
// import PVGraphics from './PVGraphics.vue'
import UVGraphics from './UVGraphics.vue'
export default {
  name: '',
  components: {
    // PVGraphics,
    UVGraphics
  },
  data() {
    return {
      num: 10
    }
  }
}
</script>
<style scoped>
.box-card{
    margin-bottom: 4vh;
}
</style>
