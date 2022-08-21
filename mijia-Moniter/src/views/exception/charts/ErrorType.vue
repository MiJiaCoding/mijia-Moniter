<template>
  <div>
      <br/>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <span>浏览器分布</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <span>操作系统分布</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <span>设备分布</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header">
            <span>版本分布</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>
<style scoped lang='less'>
</style>