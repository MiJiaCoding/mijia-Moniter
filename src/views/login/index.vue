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
      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="user.username"
          type="text"
          placeholder="账号"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          ref="password"
          v-model="user.password"
          type="password"
          placeholder="密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="userLogin">提交</el-button>
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
        username: 'admin',
        password: '111111'
      },
      rules: {
        username: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
          // {
          //   pattern: /^1\d{10}$/,
          //   message: '请輸入正确的格式',
          //   trigger: 'blur'
          // }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // {
          //   pattern: /^[0-9A-Za-z]{8,20}$/,
          //   message: "请輸入正确的格式",
          //   trigger: "blur",
          // },
        ]
      },
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      loading: false,
      immediate: true
    }
  },
  mounted() {
    if (this.user.username === '') {
      this.$refs.username.focus()
    } else if (this.user.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    userLogin() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.user).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
      // this.$refs.userForm.validate(async (valid) => {
      //   if (valid) {
      //     try {
      //       const { username, password } = this.user;
      //       await this.$store.dispatch("UserLogin", { username, password });
      //       let toPath = this.$route.query.path || "/home";
      //       this.$router.push(toPath);

      //     } catch (error) {
      //       alert(error.message);
      //     }
      //   }
      // });
    }
    // 手机号输入框失去焦点后后触发
    // searchusername() {
    // 表单验证通过
    // if(this.user.username === code.decrypt(Cookies.get('username'))){
    //   this.user.password = code.decrypt(Cookies.get('password'))
    // }
    // },
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
