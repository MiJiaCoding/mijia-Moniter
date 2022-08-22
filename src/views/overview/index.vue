<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6" class="edge">
        <el-card>
          <el-row>
            <el-col :span="11">
              <span class="big">8</span>
              <br />
              <span class="gray">JS错误数</span>
            </el-col>
            <el-col :span="2">
              <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="11">
              <span class="big">1.52%</span>
              <br />
              <span class="gray">JS错误率</span>
            </el-col>
          </el-row>
          <br />
          <el-row>
            <el-col :span="12"
              ><span class="gray">周同比：</span
              ><span class="red">100%</span></el-col
            >
            <el-col :span="12"
              ><span class="gray">周同比：</span
              ><span class="red">--%</span></el-col
            >
          </el-row>
          <br />
          <el-row>
            <span class="gray">环比新增错误</span><span class="red"> 3类</span>
          </el-row>
        </el-card>
        <br />
        <el-card>
          <el-row>
            <el-col :span="11">
              <span class="big">0</span>
              <br />
              <span class="gray">API错误数</span>
            </el-col>
            <el-col :span="2">
              <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="11">
              <span class="big">100%</span>
              <br />
              <span class="gray">API请求成功率</span>
            </el-col>
          </el-row>
          <br />
          <el-row>
            <el-col :span="12"
              ><span class="gray">周同比：</span
              ><span class="red">--%</span></el-col
            >
            <el-col :span="12"
              ><span class="gray">周同比：</span
              ><span class="red">0%</span></el-col
            >
          </el-row>
          <br />
          <el-row>
            <span class="gray">环比新增错误</span><span class="red"> 0类</span>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <el-row><PVUV /></el-row>
        </el-card>
      </el-col>
      <el-col :span="6" class="edge">
        <el-card>
          <el-row>
            <span class="big">938ms</span>
            <br />
            <span class="gray">首次渲染耗时</span>
          </el-row>
          <br />
          <br />
          <el-row>
            <span class="gray">同周比：</span><span class="red">128.22%</span>
          </el-row>
          <br />
        </el-card>
        <br />
        <el-card>
          <el-row>
            <span class="big">732</span>
            <br />
            <span class="gray">资源错误</span>
            <br />
            <br />
            <span class="gray">周同比：</span><span class="red">24.49%</span>
          </el-row>
          <br />
          <el-row>
            <span class="gray">环比新增错误</span
            ><span class="red"> 734类</span>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-card>
        <div slot="header">
          <span>JS错误</span>
        </div>
        <JSerror />
      </el-card>
    </el-row>
  </div>
</template>

<script>
import PVUV from "./charts/PVUV.vue";
import JSerror from "./charts/JSerror.vue";
export default {
  name: "",
  components: {
    PVUV,
    JSerror,
  },
};
</script>
<style scoped lang='less'>
.edge {
  font-size: 10px;
  text-align: center;
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