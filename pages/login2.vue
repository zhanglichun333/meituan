<template>
  <div class="page-login">
    <header>
      <a href="http://">美团</a>
    </header>
    <section>
      <img src="~assets/img/1.jpg" alt="">
      <div class="site-section">
        <template>
          <div class="validate-info">
            <i class="el-icon-remove"></i>
            账号或密码错误，请重新输入
          </div>
          <div>
            账号登录
            <div class="methods">
              <span>手机动态码登录</span>
              <i></i>
            </div>
          </div>
          <div class="number">
            <div>
              <i class="el-icon-plus"><span>86</span></i>
              <i class="el-icon-arrow-right"></i>
            </div>
            <input type="text" v-model="number" placeholder="手机号">
          </div>
          <div class="password">
            <span class="el-icon-unlock"></span>
            <input type="text" v-model="password" placeholder="密码">
          </div>
          <div class="forget">
            <a href="http://">忘记密码?</a>
          </div>
          <button>登录</button>
          <p>
            还没有账号？
            <nuxt-link to="/register" class="account">免费注册</nuxt-link>
          </p>
        </template>
        <div class="footer">
          <p>用合作网站账号登录</p>
          <div>
            <a href="http://" class="qq"></a>
            <a href="http://" class="weibo"></a>
          </div>
        </div>
        <!-- <template v-else>
          <div class="validate-info">
            账号或密码错误，请重新输入
          </div>
          <div class="methods">
            <span>账号登录</span>
            <span>手机动态码登录<i class="el-icon-mobile-phone"></i></span>
            <span>普通方式登录<i class="el-icon-user"></i></span>
          </div>
          <div class="number">
            <div>
              <i class="el-icon-plus"></i>
              <span>86</span>
              <i class="el-icon-arrow-right"></i>
            </div>
            <input type="text" v-model="number" placeholder="手机号">
          </div>
          <div class="code">
            <span class="el-icon-unlock"></span>
            <input type="text" v-model="password" placeholder="动态码">
            <span>获取手机动态码</span>
          </div>
          <div class="forget">
            <a href="http://">忘记密码</a>
          </div>
          <button>登录</button>
          <p class="account">
            还没有账号？
            <nuxt-link to="/register">免费注册</nuxt-link>
          </p>
          <p>提示：未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意《美团网用户协议》</p>
        </template> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'block',
  data() {
    return {
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
        .validate-info {
          box-sizing: border-box;
          height: 40px;
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #f5d8a7;
          background-color: #FFF6DB;
          font-size: 12px;
          color: #666;
          .el-icon-remove {
            font-size: 18px;
          }
          .el-icon-remove:before {
            color: #FF8800;
          }
        }
        .methods {
          font-size: 12px;
          float: right;
          i {
            display: inline-block;
            width: 12px;
            height: 14px;
            background-image: url('~assets/img/sprite.png');
            background-position: -878px -676px;
          }
        }
        .number {
          position: relative;
          padding: 8px 0;
          line-height: 36px;
          div {
            position: absolute;
            top: 8px;
            left: 0px;
            i {
              font-size: 12px;
              span {
                font-size: 14px;
              }
            }
          }
          input {
            box-sizing: border-box;
            width: 100%;
            height: 36px;
            padding-left: 50px;
          }
        }
        .password {
          position: relative;
          padding: 8px 0;
          .el-icon-unlock {
            position: absolute;
            top: 16px;
            left: 12px;
            font-size: 20px;
            color: #DDDDDD;
          }
          input {
            box-sizing: border-box;
            width: 100%;
            height: 38px;
            padding-left: 36px;
          }
        }
        .forget {
          box-sizing: border-box;
          height: 26px;
          padding-bottom: 8px;
          a {
            float: right;
            font-size: 12px;
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
              background-position:  -1250px -508px;
              margin-right: 10px;
            }
            .weibo {
              display: inline-block;
              width: 18px;
              height: 18px;
              background-image: url('~assets/img/sprite.png');
              background-position:  -1250px -545px;
            }
          }
        }
      }
    }
  }
</style>