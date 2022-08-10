<template>
  <div class="loginbox">
    <el-form
      ref="userForm"
      :model="user"
      status-icon
      :rules="rules"
      class="logincon"
    >
      <div class="tit">登录</div>
      <el-form-item label="" prop="phone">
        <el-input
          v-model="user.phone"
          type="text"
          placeholder="账号"
          @blur.native.capture="searchPhone"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="user.password"
          type="password"
          placeholder="密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="userLogin">提交</el-button>
      </el-form-item>
      <span>其他方式登录 </span><a href="#">QQ</a>
      <a href="#">微信</a>
    </el-form>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'
// import code from '@/utils/code'
export default {
  name: 'Login',
  data() {
    return {
      user: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            pattern: /^1\d{10}$/,
            message: '请輸入正确的格式',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // {
          //   pattern: /^[0-9A-Za-z]{8,20}$/,
          //   message: "请輸入正确的格式",
          //   trigger: "blur",
          // },
        ]
      }
    }
  },
  methods: {
    userLogin() {
      // this.$refs.userForm.validate(async (valid) => {
      //   if (valid) {
      //     try {
      //       const { phone, password } = this.user;
      //       await this.$store.dispatch("UserLogin", { phone, password });
      //       let toPath = this.$route.query.path || "/home";
      //       this.$router.push(toPath);

      //     } catch (error) {
      //       alert(error.message);
      //     }
      //   }
      // });
    },
    // 手机号输入框失去焦点后后触发
    searchPhone() {
      // 表单验证通过
      // if(this.user.phone === code.decrypt(Cookies.get('phone'))){
      //   this.user.password = code.decrypt(Cookies.get('password'))
      // }
    }
  }
}
</script>

<style lang="less" scoped>
.loginbox {
  height: 100vh;
  /*弹性布局居中*/
  display: flex;
  justify-content: center;
  align-items: center;
  /*渐变背景*/
  background: linear-gradient(200deg, #f6dbf079, #b5caf0);
  /*溢出影藏*/
  overflow: hidden;
  .logincon {
    /*相对定位*/
    position: relative;
    z-index: 1;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    /*垂直配列*/
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 500px;
    /*阴影*/
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    .tit {
      font-size: 26px;
      margin: 65px auto 70px auto;
    }
    .el-input {
      width: 280px;
      height: 30px;
      margin: 12px auto;
      .el-input__inner {
        text-indent: 8px;
        border: none;
        border-bottom: 1px solid #ddd;
        outline: none;
      }
    }
    .el-button {
      width: 280px;
      height: 40px;
      // margin: 35px auto 40px auto;
      border: none;
      background: linear-gradient(-200deg, #f6dbf079, #b5caf0);
      color: #fff;
      font-weight: bold;
      letter-spacing: 8px;
      border-radius: 10px;
      cursor: pointer;
      /*动画过渡*/
      transition: 0.5s;
    }
    .el-button:hover {
      background: linear-gradient(-200deg, #b5caf0, #f6dbf079);
      background-position-x: -280px;
    }
    span {
      font-size: 14px;
    }
    a {
      color: plum;
      text-decoration: none;
    }
  }
}
</style>
