<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>今日概况</span>
      </div>
      <el-descriptions style="font-size: 30px">
        <el-descriptions-item
          label="PV"
        ><span class="red">139</span>
        </el-descriptions-item>
        <el-descriptions-item
          label="UV"
        ><span class="red">5</span></el-descriptions-item>
        <el-descriptions-item label="IP">3</el-descriptions-item>
      </el-descriptions>
    </el-card>
    <!-- 实时PV -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>实时访问PV</span>
      </div>
      <PVGraphics />
    </el-card>
    <!-- 实时UV -->
    <el-card>
      <div slot="header" class="clearfix">
        <span>实时访问UV</span>
      </div>
      <UVGraphics />
    </el-card>
  </div>
</template>

<script>
import PVGraphics from './PVGraphics.vue'
import UVGraphics from './UVGraphics.vue'
export default {
  name: '',
  components: {
    PVGraphics,
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
.box-card {
  margin-bottom: 4vh;
}
.red {
  color: red;
}
</style>
