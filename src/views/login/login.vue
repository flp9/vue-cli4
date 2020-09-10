<template>
  <div id="login">
    <!--<div id="bgd">-->
    <!--<canvas-->
    <!--id='myCanvas'-->
    <!--:width='width'-->
    <!--:height='height'-->
    <!--&gt;-->
    <!--</canvas>-->
    <!--</div>-->
    <div id="loginBox">
      <h4>后台管理系统模板</h4>
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
      >
        <el-form-item prop="userName" style="margin-top:40px;">
          <el-input
            class="inps"
            prefix-icon="el-icon-user"
            placeholder="用户名"
            v-model="loginForm.userName"
          ></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
            class="inps"
            prefix-icon="el-icon-lock"
            placeholder="密码"
            v-model="loginForm.passWord"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item style="margin-top:55px;">
          <el-button
            type="primary"
            class="submitBtn"
            @click="submitForm('loginForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import { login } from "@/api/getdata";
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请输入正确的用户名！"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码至少六位！"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        userName: "admin",
        passWord: "flp123"
      },
      // 两种验证写法
      loginRules: {
        userName: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        passWord: [{ required: true, trigger: "blur", validator: validatePass }]
      }
    };
  },
  methods: {
    //提交登录
    submitForm(formName) {
      const that = this;
      that.$refs[formName].validate(valid => {
        if (valid) {
          login(that.loginForm).then(res => {
            if (res.data.code === 200) {
              that.$router.push("/home");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
#login {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
  background: #242645 url("../../assets/Starry.png") no-repeat left top;
  background-size: 100%;
  font-size: 16px;
  color: #fff;
  font-family: "Source Sans Pro";
  position: relative;
  text-align: center;
  #loginBox {
    width: 240px;
    height: 280px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 50px 40px 40px 40px;
    border: 2px solid #7d7979;
    border-image: -webkit-linear-gradient(#e4e7ed, #7d7979) 30 30;
    border-image: -moz-linear-gradient(#e4e7ed, #7d7979) 30 30;
    border-image: linear-gradient(#e4e7ed, #7d7979) 30 30;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    background: linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%
    );
    .submitBtn {
      width: 200px;
    }
  }
}
</style>
