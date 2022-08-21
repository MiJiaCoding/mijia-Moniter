<template>
  <div>
    <p>错误总览</p>
    <el-row :gutter="10" class="edge">
      <el-col
        :span="8"
      ><p class="gray">错误数</p>
        <p class="big">91</p></el-col>
      <el-col
        :span="8"
      ><p class="gray">JS错误率</p>
        <p class="big">0.64%</p></el-col>
      <el-col
        :span="8"
      ><p class="gray">影响用户数</p>
        <p class="big">24(4.99%)</p></el-col>
    </el-row>
    <el-divider />
    <el-row>
      <ErrorAll />
    </el-row>
    <el-row style="height: 80vh">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">页面错误率分布</el-menu-item>
        <el-menu-item index="2">高频错误</el-menu-item>
        <el-menu-item index="3">错误分布</el-menu-item>
      </el-menu>
      <div v-if="activeIndex1 === '1'"><ErrorDis /></div>
      <div v-else-if="activeIndex1 === '2'"><ErrorHigh /></div>
      <div v-else><ErrorType /></div>
    </el-row>
  </div>
</template>

<script>
import ErrorAll from './charts/ErrorAll.vue'
import ErrorDis from './charts/ErrorDis.vue'
import ErrorHigh from './charts/ErrorHigh.vue'
import ErrorType from './charts/ErrorType.vue'
export default {
  name: '',
  components: {
    ErrorAll,
    ErrorDis,
    ErrorHigh,
    ErrorType
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex1: '1'
    }
  },
  methods: {
    handleSelect(index) {
      // console.log(index);
      this.activeIndex1 = index
    }
  }
}
</script>
<style scoped lang='less'>
.edge {
  font-size: 10px;
  text-align: center;
  // background-color: rgb(247, 248, 250);
}
.big {
  font-size: 30px;
  font-weight: 700;
}
.gray {
  color: gray;
}
.red {
  color: red;
}
</style>
