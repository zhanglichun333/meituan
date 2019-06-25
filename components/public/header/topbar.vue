<template>
  <el-row :gutter="0" class="h-topbar">
    <!-- <remote-js /> -->
    <div class="h-geo">
      <i class="el-icon-location">{{$store.state.geo.position.city}}</i>
      <nuxt-link class="changeCity" to="changeCity">切换城市</nuxt-link>
      [
      <a href="http://">深圳</a>
      <a href="http://">香港</a>
      <a href="http://">上海</a>
      ]
    </div>
    <div class="h-user">
      <template v-if="user">
        欢迎您，
        <span class="username">{{ user }}</span>
        [<nuxt-link to="/exit" class="exit">退出</nuxt-link>]
      </template>
      <template v-else>
        <nuxt-link to="/login" class="login">立即登录</nuxt-link>
        <nuxt-link to="/register" class="register">注册</nuxt-link>
      </template>
    </div>
    <div class="h-nav">
      <ul class="nav">
        <li class="list">
          <nuxt-link to="/my">我的美团</nuxt-link>
          <dt class="second my">
          <dd>
            <nuxt-link to="path">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="path">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="path">抵用券</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="path">账户设置</nuxt-link>
          </dd>
          </dt>
        </li>
        <li>
          <nuxt-link to="/mobile">手机APP</nuxt-link>
        </li>
        <li class="list">
          <nuxt-link to="/center">商家中心</nuxt-link>
          <dt class="second center">
          <dd>
            <nuxt-link to="path">登录商家中心</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="path">美团智能收银</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="path">我想合作</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="path">手机免费开店</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="path">餐饮代理商招募</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="path">商家申请开票</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="path">免费合作美团排队</nuxt-link>
          </dd>
          </dt>
        </li>
        <li class="list">
          <nuxt-link to="/guide">网站导航</nuxt-link>
          <div class="subContainer second">
            <dl class="hotel">
              <dt>
                <nuxt-link to="path">酒店旅游</nuxt-link>
              </dt>
              <dd>
                <nuxt-link to="path">国际机票</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">火车票</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">榛果民宿</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">经济型酒店</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">主题酒店</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">商务酒店</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">公寓</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">豪华酒店</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">客栈</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">青年旅社</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">度假酒店</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">别墅</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">农家院</nuxt-link>
              </dd>
            </dl>
            <dl class="food">
              <dt>
                <nuxt-link to="path">吃美食</nuxt-link>
              </dt>
              <dd>
                <nuxt-link to="path">烤鱼</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">特色小吃</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">烧烤</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">自助餐</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">火锅</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">代金券</nuxt-link>
              </dd>
            </dl>
            <dl class="movie">
              <dt>
                <nuxt-link to="path">看电影</nuxt-link>
              </dt>
              <dd>
                <nuxt-link to="path">热映电影</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">热门影院</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">热映电影口碑榜</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">最受期待电影</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">国内票房榜</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">北美票房榜</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="path">电影排行榜</nuxt-link>
              </dd>
            </dl>
            <dl class="app">
              <dt>
                <nuxt-link to="path">手机应用</nuxt-link>
              </dt>
              <dd><a href="http://"><img src="../../../assets/img/meituan.png" alt=""></a></dd>
              <dd><a href="http://"><img src="../../../assets/img/waimai.png" alt=""></a></dd>
              <dd><a href="http://"><img src="../../../assets/img/zhenguo.png" alt=""></a></dd>
              <dd><a href="http://"><img src="../../../assets/img/dianping.png" alt=""></a></dd>
              <dd><a href="http://"><img src="../../../assets/img/maoyan.png" alt=""></a></dd>
            </dl>
          </div>
        </li>
      </ul>
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      city: ''
    }
  },
  async mounted() {
    const {status, data:{username}} = await this.$axios.get('/users/getUser')
    if (status === 200) {
      this.user = username
    }

    // let self = this
    // let citysearch = new AMap.CitySearch()
    // citysearch.getLocalCity(function (status, result) {
    //   if (status === 'complete' && result.info === 'OK') {
    //     if (result && result.city && result.bounds) {
    //       self.city = result.city;
    //     }
    //   } else {
    //     self.city = ''
    //   }
    // })
  },
  // components: {
  //   'remote-js': {
  //     render(createElement) {
  //       return createElement('script', {
  //         attrs: {
  //           type: 'text/javascript',
  //           src: "https://webapi.amap.com/maps?v=1.4.15&key=141700854834072a0f5ce50231cce522&plugin=AMap.CitySearch"
  //         }
  //       })
  //     }
  //   }
  // }
}
</script>

<style lang="scss">
  .h-topbar {
    width: 1190px;
    height: 40px;
    margin: 0 auto;
    font-size: 12px;
    a:hover {
      color: #31BBAC;
    }

    .h-geo {
      float: left;
      padding-top: 12px;
      color: #999;
      margin-right: 30px;
      i {
        color: #666;
        font-size: 12px;
      }
      .changeCity {
        color: #666;
        background-color: #F4F4F4;
        padding: 0 2px;
        margin: 0 4px;
        border: 1px solid #E5E5E5;
        border-radius: 2px;
        &:hover {
          color: #31BBAC;
        }
      }
    }

    .h-user {
      float: left;
      padding-top: 12px;
      color: #999;
      .exit {
        color: #31BBAC;
      }
      .login {
        color: #31BBAC;
        margin-right: 5px;
      }
    }

    .h-nav {
      .nav {
        float: right;
        >li {
          float: left;
          position: relative;
          width: 78px;
          height: 40px;
          padding: 12px 14px;
          box-sizing: border-box;
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
        }
        .list:hover {
          border-bottom: none;
          border-color:#E5E5E5;
          background: #fff;
          box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
          >a {
            color: #31BBAC;
          }
          .second {
            display: block;
          }
        }
        .second {
          border: 1px solid #E5E5E5;
          background: #fff;
          text-align: center;
          z-index: 1000;
          position: absolute;
          right: -1px;
          top: 40px;
          box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          display: none;
          &:before {
            content: '';
            dispaly: block;
            height: 1px;
            width: 78px;
            background-color: #fff;
            position: absolute;
            top: -1px;
            right: 0px;
          }
        }
        .my {
          width: 100%;
          a {
            line-height: 35px;
          }
        } 
        .center {
          width: 140%;
          border-top-left-radius: 4px;
          a {
            line-height: 35px;
          }
        } 
        .subContainer {
          width: 1200px;
          box-sizing: border-box;
          border-top-left-radius: 4px;
          padding: 30px 36px 36px 47px;
          dl {
            float: left;
            margin-right: 47px;
            dt {
              margin-bottom: 26px;
              font-size: 14px;
              a {
                color: #31BBAC!important;
              }
            }
          }
          .hotel{
            width: 234px;
            dd {
              width: 33%;
              float: left;
              margin-bottom: 10px;
            }
          }
          .food {
            width: 156px;
            dd {
              width: 50%;
              float: left;
              margin-bottom: 10px;
            }
          }
          .movie {
            width: 90px;
            dd {
              margin-bottom: 10px;
            }
          }
          .app {
            float: right;
            dd {
              display: inline-block;
              margin: 0 8px;
              a {
                display: block;
                padding: 5px 0;
                img {
                  width: 60px;
                  height: 60px;
                  border: 0;
                }
              }
            }
          }
        }
      }
    }  
  }
</style>