<template>
  <div class="page-login">
    <header>
      <a href="http://">美团</a>
    </header>
    <section>
      <img src="~assets/img/1.jpg" alt="">
      <div class="site-section">
        <div>
          <div class="validate-info" v-if="error">
            <i class="el-icon-circle-close"></i>
            <span>{{error}}</span>
          </div>
          <p>
            账号登录
          </p>
          <div class="input">
            <input type="text" v-model="username" placeholder="用户名" name="username"></input>
            <i class="el-icon-user"></i>
          </div>
          <div class="input">
            <input type="password" v-model="password" placeholder="密码" name="password"></input>
            <i class="el-icon-unlock"></i>
          </div>
          <div class="forget">
            <a href="http://">忘记密码?</a>
          </div>
          <button @click="login">登录</button>
          <p>
            还没有账号？
            <nuxt-link to="/register" class="account">免费注册</nuxt-link>
          </p>
        </div>
        <div class="footer">
          <p>用合作网站账号登录</p>
          <div>
            <a href="http://" class="qq"></a>
            <a href="http://" class="weibo"></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import cryptoJs from 'crypto-js'
  export default {
    layout: 'block',
    data() {
      return {
        error: '',
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        this.$axios.post('/users/signin', {
          username: window.encodeURIComponent(this.username),
          password: cryptoJs.MD5(this.password).toString()
        })
          .then(({ status, data }) => {
            if (status === 200) {
              if (data && data.code === 0) {
                location.href = '/'
              } else {
                this.error = data.msg
              }
            } else {
              this.error = `服务器出错，状态码${status}`
            }
          })
      }
    }
  }
</script>

<style lang="scss">
  .page-login {
    background-color: #fff;
    box-sizing: border-box;

    header {
      width: 980px;
      margin: 40px auto 30px;

      a {
        text-indent: -9999px;
        overflow: hidden;
        display: inline-block;
        width: 83px;
        height: 55px;
        background: url('~assets/img/sprite.png') -188px -807px;
      }
    }

    section {
      width: 980px;
      margin: 0 auto 70px;
      font-size: 14px;
      color: #666;

      img {
        float: left;
        width: 480px;
        height: 370px;
        margin-right: 115px;
      }

      .site-section {
        float: left;
        width: 270px;
        padding-top: 50px;
        position: relative;

        .validate-info {
          position: absolute;
          top: 0px;
          left: 0px;
          box-sizing: border-box;
          width: 100%;
          height: 40px;
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #F56C6C;
          font-size: 12px;
          color: #666;

          .el-icon-circle-close {
            font-size: 18px;
            color: #F56C6C;
          }

          span {
            position: absolute;
            top: 9px; 
            left: 36px;
            font-size: 14px;
            color: #F56C6C;
          }
        }
        
        .input {
          position: relative;
          input::-webkit-input-placeholder {
            color: #ccc;
          }
          input {
            box-sizing: border-box;
            padding: 2px 25px;
            margin: 8px 0;
            width: 100%;
            height: 40px;
            outline: none;
            &:focus {
              outline: none;
              border: 1px solid #2DBCAE;
            }
          }
          i {
            position: absolute;
            top: 21px;
            left: 10px;
          }
        }

        .forget {
          box-sizing: border-box;
          height: 26px;
          padding-bottom: 8px;

          a {
            float: right;
            font-size: 12px;
            color: #2BB8AA;
          }
        }

        button {
          margin: 8px 0;
          width: 270px;
          height: 36px;
          color: white;
          background-color: #2DBCAE;
          border: 1px solid #2DBCAE;
        }

        .account {
          text-decoration: none;
          color: #2BB8AA;
        }
      }
      .footer {
        position: relative;
        margin-top: 20px;
        border-top: 1px solid #CCC;

        p {
          position: absolute;
          top: -10px;
          left: 70px;
          padding: 0 8px;
          background-color: #fff;
        }

        div {
          position: absolute;
          top: 30px;
          left: 100px;

          .qq {
            display: inline-block;
            width: 18px;
            height: 18px;
            background-image: url('~assets/img/sprite.png');
            background-position: -1250px -508px;
            margin-right: 10px;
          }

          .weibo {
            display: inline-block;
            width: 18px;
            height: 18px;
            background-image: url('~assets/img/sprite.png');
            background-position: -1250px -545px;
          }
        }
      }
    }
  }
</style>