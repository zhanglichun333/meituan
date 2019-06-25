<template>
  <div class="page-register">
    <header>
      <div class="wrapper">
        <a href="http://" class="site-logo"></a>
        <span class="login">
          <em class="bold">已有美团账号</em>
          <a href="/login">
            <el-button  type="primary" size="small">登录</el-button>
          </a>
        </span>
      </div>
    </header>
    <section>
      <div class="form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="手机号" prop="phone" class="phone">
            <el-input v-model="ruleForm.phone"></el-input>
            <span class="common">注册成功之后，全美团通用</span>
          </el-form-item>
          <el-form-item>
            <el-button class="code" size="mini"  @click="sendMsg">免费获取动态短信码</el-button>
            <span class="status">{{ statusMsg }}</span>
          </el-form-item>
          <el-form-item label="短信动态码" prop="code" class="code">
            <el-input v-model="ruleForm.code"></el-input>
          </el-form-item>
          <el-form-item label="创建密码" prop="pwd">
            <el-input v-model="ruleForm.pwd" type="password"></el-input>
            <div class=degree>
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </el-form-item>
          <el-form-item label="确定密码" prop="cpwd" class="cpwd">
            <el-input v-model="ruleForm.cpwd" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register" class="register">同意以下协议并注册</el-button>
            <div class="error">{{ error }}</div>
          </el-form-item>
          <el-form-item>
            <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
          </el-form-item>
        </el-form>
      </div>
    </section>
    <footer>
      <p>
        ©
        <a href="http://">meituan.com</a>
        <a href="http://">京ICP证070791号</a>
        <span>京公网安备11010502025545号</span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  layout: 'block',
  data() {
    return {
      sendMsg: '',
      error: '',
      ruleForm: {
        phone: '',
        code: '',
        pwd: '',
        cpwd: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入短信动态码', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        cpwd: [
          { required: true, 
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.ruleForm.pwd) {
                callback(new Error('两次输入密码不一致'))
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    sendMsg() {

    },
    register() {

    }
  }
}
</script>

<style lang="scss">
.page-register {
  background-color: #FFFFFF;

  header {
    border-bottom: 2px solid #2bb8aa;

    .wrapper{
      width: 980px;
      margin: 0 auto;
      padding: 10px 0;

      .site-logo{
        display: inline-block;
        width: 54px;
        height: 36px;
        background-position: -669px -748px;
        background-image: url('~assets/img/sprite.png');
      }

      .login {
        float: right;
        line-height: 36px;

        .bold {
          font-style: normal;
          font-size: 14px;
          color: #666;
          margin-right: 10px;
        }

        .el-button--primary {
          color: #FFF;
          background-color: #2db3a6;
          border-color: #2db3a6;
        }
      }
    }
  }

  section {

    .form {
      margin: 30px auto 20px;
      width: 980px;
      padding-right: 520px;
      box-sizing: border-box;
      .el-form-item{
        margin: 0 0;
        position: relative;

        .el-form-item__label{
          color: #333
        }
        .el-form-item__content{
          position: relative;
          .el-input{
            .el-input__inner {
              border: 1px solid #aaa;
              width: 260px;
              height: 36px;
            }
            .el-input__suffix {
              font-size: 14px;
              position: absolute;
              right: 65px;
              top: 0px;
            }
          }
          .el-form-item__error{
            font-size: 14px;
            width: 130px;
            position: absolute;
            top: 9px;
            left: 300px;
          }
          .common {
            color: #999;
            font-size: 12px;
            position: absolute;
            top: 0px;
            right: -50px;
          }
          .code {
            padding: 4px 8px 1px;
            letter-spacing: .1em;
            font-size: 12px;
            color: #333;
            background-color: #ECECEC;
            border-bottom: 1px solid #aaa;
          }
          .degree {
            margin: 8px 0;
            width: 262px;
            height: 20px;
            display: flex;

            span {
              font-size: 12px;
              line-height: 20px;
              margin-right: 2px;
              color: #fff;
              background-color: #EEEEEE;
              flex: 1;
              text-align: center;
            }
          }
          .register {
            width: 180px;
            height: 35px;
            padding: 0;
            font-size: 14px;
            letter-spacing: .1em;
            line-height: 35px;
            font-weight: 700;
            background-color: #2DBBAD;
          }
          .f1 {
            font-size: 13px;
            text-decoration: none;
          }
        }
      }
      .sms {
        margin-bottom: 15px;
      }
      .cpwd {
        margin-bottom: 15px;
      }
    }

  }

  footer {
    padding-top: 20px;
    font-size: 13px;  
    color: #999;
    text-decoration: none;
    border-top: 1px solid #EEE;
    text-align: center;
    a{
      color: #999;
      text-decoration: none;
      margin-right: 2px;
    }
  }
}

</style>
