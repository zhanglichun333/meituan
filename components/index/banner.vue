<template>
  <div class="m-banner">
    <div class="up">
      <el-carousel :interval="5000">
        <el-carousel-item v-for="item in list" :key="item.img">
          <a :href="item.href">
            <img :src="item.img" alt="">
          </a>
        </el-carousel-item>
      </el-carousel>
      <a href="http://" class="sing">
        <img src="~/assets/img/sing.jpg" alt="">
      </a>
      <template v-if="user">
        <div class="logOut">
          <nuxt-link to="/login" class="setting">
            <i class="el-icon-s-tools"></i>
          </nuxt-link>
          <nuxt-link to="/login" class="avatar">
            <img src="~/assets/img/avatar.jpg" alt="">
          </nuxt-link>
          <p>你好</p>
          <div class="personal">
            <nuxt-link to="/" v-for="(item, i) in list1" :key="i">
              <i :class="item.type"></i>
              <p>{{ item.name }}</p>
            </nuxt-link>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="loginIn">
          <img src="~/assets/img/avatar.jpg" alt="">
          <p>Hi! &nbsp;你好</p>
          <nuxt-link to="/register">注册</nuxt-link>
          <nuxt-link to="/login">立即登录</nuxt-link>
        </div>
      </template>
    </div>
    <div class="down">
      <a href="http://" class="live">
        <img src="~/assets/img/live.png" alt="">
      </a>
      <a href="http://" class="guitar">
        <img src="~/assets/img/guitar.jpg" alt="">
      </a>
      <a href="http://" class="merchant">
        <img src="~/assets/img/merchant.jpg" alt="">
      </a>
      <div class="download">
        <img src="~/assets/img/download-qr.png" alt="">
        <p>美团APP手机版</p>
        <span class="first-child">一元起</span>
        <span>吃喝玩乐</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      list: [{
        href: '#1',
        img: require('~/assets/img/free.png')
      },{
        href: '#2',
        img: require('@/assets/img/food.jpg')
      },{
        href: '#3',
        img: require('@/assets/img/hotel.png')
      },{
        href: '#4',
        img: require('@/assets/img/movie.jpg')
      },{
        href: '#5',
        img: require('@/assets/img/takeout.jpg')
      }],
      list1: [{
        type: 'el-icon-s-order',
        name: '我的订单'
      },{
        type: 'el-icon-star-on',
        name: '我的收藏'
      },{
        type: 'el-icon-s-ticket',
        name: '抵用券'
      },{
        type: 'balance',
        name: '余额'
      },{
        type: 'el-icon-more',
        name: '更多'
      }]
    }
  },
  async mounted() {
    const {status, data:{username}} = await this.$axios.get("/users/getUser")
    this.user = username
  }
}
</script>

<style lang="scss" scoped>
  .m-banner{
    width: 950px;
    height: 417px;
    float: left;
    margin: 10px 0 0 10px;
    .up {
      width: 950px;
      height: 240px;
      .el-carousel {
        float: left;
        width: 550px;
        height: 240px;
        overflow: hidden;
        .el-carousel__arrow {
          top: 45%;
        }
        img {
          width: 550px;
          height: 240px;
        }
        .el-carousel__button  {
          width: 10px!important;
        }
      }
      .sing {
        margin: 0 10px;
        float: left;
        img {
          width: 150px;
          height: 240px;
        }
      }
      .loginIn {
        text-align: center;
        float: left;
        width: 228px;
        height: 238px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        padding-top: 30px;
        img {
          width: 47px;
          height: 47px;
          border-radius: 50%;
          border: 4px solid #E5E5E5;
          margin-bottom: 4px;
        }
        p {
          color: #222;
          margin-bottom: 10px;
        }
        a {
          margin: 0 auto;
          display: block;
          width: 124px;
          height: 40px;
          border: 1px solid #e5e5e5;
          border-radius: 20px;
          text-align: center;
          line-height: 40px;
          color: #222;
          margin-bottom: 15px;
        }
      }
      .logOut {
        float: left;
        width: 228px;
        height: 238px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        padding-top: 30px;
        text-align: center;
        .setting {
          position: absolute;
          top: 15px;
          right: 15px;
        }
        .avatar>img {
          box-sizing: border-box;
          width: 55px;
          height: 55px;
          border: 4px solid #e5e5e5;
          border-radius: 50%;
        }
        p {
          color: #222;
          margin: 4px 0 10px;
        }
        .personal {
          padding: 0px 15px;
          a {
            display: block;
            float: left;
            width: 33.3%;
            height: 49px;
          }
          i {
            font-family: 'iconfont';
            color: #96E4DA;
            font-style: normal;
          }
          .balance:before {
            content: "\e927";
          }
          p {
            font-size: 12px;
            color: #222;
          }
        }
      }
    }
    .down {
      width: 950px;
      height: 167px;
      margin-top: 10px;
      a {
        float: left;
        margin-right: 10px;
      }
      .live>img,.guitar>img {
        width: 270px;
        height: 165px;
      }
      .merchant>img {
        width: 150px;
        height: 165px;
      }
      .download {
        box-sizing: border-box;
        float: left;
        width: 230px;
        height: 167px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        text-align: center;
        img {
          width: 95px;
          height: 95px;
          margin: 2px 0;
        }
        p {
          font-size: 16px;
          color: #222;
          margin-bottom: 5px;
        }
        .first-child {
          color: #EC5330;
          font-size: 12px;
          margin-right: 5px;
        }
        span:last-child {
          font-size: 12px;
          color: #222;
        }
      }
    }
  }
</style>