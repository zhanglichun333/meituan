<template>
  <div class="page-register">
    <header>
      <div class="wrapper">
        <a href="http://" class="site-logo"></a>
        <span class="login">
          <em class="bold">已有美团账号</em>
          <a href="/login">
            <el-button type="primary" size="small">登录</el-button>
          </a>
        </span>
      </div>
    </header>
    <section>
      <div class="form">
        <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username" class="username">
            <el-input v-model="ruleForm.username" @focus="focus"></el-input>
            <span class="common"  ref="common1">注册成功之后，全美团通用</span>
            <div class=error>{{ error1 }}</div>
          </el-form-item>
          <el-form-item label="邮箱" prop="email" class="email">
            <el-input v-model="ruleForm.email" type="email"></el-input>
            <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
            <span class="status">{{ statusMsg }}</span>
          </el-form-item>
          <el-form-item label="验证码" prop="code" class="code">
            <el-input v-model="ruleForm.code"></el-input>
            <div class=error>{{ error2 }}</div>
          </el-form-item>
          <el-form-item label="创建密码" prop="pwd">
            <el-input v-model="ruleForm.pwd" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确定密码" prop="cpwd" class="cpwd">
            <el-input v-model="ruleForm.cpwd" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register" class="register">同意以下协议并注册</el-button>
          </el-form-item>
        </el-form>
        <div class="term">
          <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
        </div>
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
  import cryptoJs from 'crypto-js'
  export default {
    layout: 'block',
    data() {
      return {
        statusMsg: '',
        timerid: '',
        error1: '',
        error2: '',
        ruleForm: {
          username: '',
          email: '',
          code: '',
          pwd: '',
          cpwd: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          email: [
            { required: true,message: '请输入邮箱', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          cpwd: [
            {
              required: true,
              validator: (rule, value, callback) => {
                if (value === '') {
                  callback(new Error('请再次输入密码'))
                } else if (value !== this.ruleForm.pwd) {
                  callback(new Error('两次输入密码不一致'))
                } else {
                  callback()
                }
              },
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      focus() {
        this.$refs.common1.style.display = 'none'
      },
      focus1() {
        document.querySelectorAll('input')
      },
      sendMsg() {
        const self = this
        let namePass, emailPass
        // if(self.timerid) {
        //   return false
        // }
        this.$refs['ruleForm'].validateField('username', (valid) => {
          namePass = valid
        })
        if (namePass) {
          return false
        }
        this.$refs['ruleForm'].validateField('email', (valid) => {
          emailPass = valid
        })
        self.statusMsg = ''
        if (!namePass && !emailPass) {
          this.$axios.post('/users/verify', {
            username: encodeURIComponent(self.ruleForm.username),
            email: self.ruleForm.email
          }).then(({ status, data}) => {
            if(status===200 && data && data.code===0) {
              let count = 60
              self.statusMsg = `验证码已发送，剩余${count--}秒`
              self.timerid = setInterval(() => {
                self.statusMsg = `验证码已发送，剩余${count--}秒`
                if (count === 0) {
                  clearInterval(self.timerid)
                  self.statusMsg = '请重新获取验证码'
                }
              }, 1000);
            } else {
              self.statusMsg = data.msg
            }
          })
        }
      },
      register() {
        let self = this
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            this.$axios.post("/users/signup", {
              username: window.encodeURIComponent(this.ruleForm.username),
              password: cryptoJs.MD5(this.ruleForm.pwd).toString(),
              email: this.ruleForm.email,
              code: this.ruleForm.code
            })
              .then(({ status, data }) => {
                if (status === 200) {
                  if (data && data.code === 0) {
                    location.href = "/login"
                  } else {
                    self.statusMsg = data.msg
                    self.error1 = data.msg1
                    self.error2 = data.msg2
                  }
                }
                else {
                  self.error = `服务器出错，错误码:${status}`
                }
              })
          }
        })
      }
    },
  }
</script>

<style lang="scss">
  .page-register {
    background-color: #FFFFFF;

    header {
      border-bottom: 2px solid #2bb8aa;

      .wrapper {
        width: 980px;
        margin: 0 auto;
        padding: 10px 0;

        .site-logo {
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

        .el-form-item {
          margin: 0 0;
          position: relative;

          .el-form-item__label {
            color: #333
          }


          .el-form-item__content {
            position: relative;
            margin-bottom: 15px;

            .el-input {
              .el-input__inner {
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

            .el-form-item__error {
              font-size: 14px;
              width: 130px;
              position: absolute;
              top: 9px;
              left: 285px;
            }

            .error {
              width: 130px;
              position: absolute;
              top: 0px;
              left: 285px;
              color: #F56C6C;
            }

            .common {
              color: #999;
              font-size: 12px;
              position: absolute;
              top: 0px;
              right: -50px;
            }

            .status {
              margin-left: 5px;
              color: #F56C6C;
              font-size: 12px;
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
          }
        }
      }

      .term {
        position: relative;

        .f1 {
          position: absolute;
          top: 0px;
          left: 90px;
          font-size: 13px;
          text-decoration: none;
          color: #2bb8aa;
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

      a {
        color: #999;
        text-decoration: none;
        margin-right: 2px;
      }
    }
  }
</style>