<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item, i) in $store.state.geo.menu" :key="i" @mouseenter = "mouseenter">
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item, index) in curdetail.child">
        <div class="block">
          <h4 :key="index"><a href="http://">{{ item.title }}</a></h4>
          <a href="http://" class="more">更多<i class="el-icon-arrow-right"></i></a>
          <a v-for="v in item.child" :key="v" class="some">
            {{ v }}
          </a>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: '',
    }
  },
  computed: {
    curdetail: function() {
      return this.$store.state.geo.menu.filter((item) => {
        return item.type === this.kind
      })[0]
    }
  },
  methods: {
    mouseleave() {
      let self = this
      this._timer = setTimeout(() => {
        self.kind = ''
      }, 150)
    },
    mouseenter(e) {
      this.kind = e.target.querySelector('i').className
    },
    sover() {
      clearTimeout(this._timer)
    },
    sout() {
      this.kind = ''
    }
  }
}
</script>

<style lang="scss">
  .m-menu {
    float: left;
    box-sizing: border-box;
    width: 230px;
    height: 475px;
    margin-top: -50px;
    color: white;
    background: -webkit-linear-gradient(-90deg,rgba(2,181,157,.85) 2%,rgba(22,146,183,.85) 100%);
    dt {
      box-sizing: border-box;
      height: 50px;
      padding: 15px 15px 0;
      margin-bottom: 10px;
    }
    dd {
      box-sizing: border-box;
      position: relative;
      height: 25px;
      padding: 2px 12px;
      font-size: 14px;
      &:hover {
        background: rgba(255, 255, 255, .2);
        &>i {
          opacity: 1;
        }
      }
    }
    .nav {
      dd>i {
        font-family: 'meituan';
        font-size: 14px;
        font-style: normal;
        opacity: 0.3;
        margin-right: 11px;

        &:before {
          width: 14px;
          height: 14px;
          display: inline-block;
        }
      }
      .food {
        &:before {
          content: "\e622";
        }
      }
      .takeout {
        &:before {
          content: "\e630";
        }
      }
      .hotel {
        &:before {
          content: "\e62a";
        }
      }
      .homestay {
        &:before {
          content: "\e631";
        }
      }
      .movie {
        &:before {
          content: "\e62c";
          position: relative;
          left: -2px;
        }
      }
      .airport {
        &:before {
          content: "\e632";
        }
      }
      .ktv {
        &:before {
          content: "\e627";
        }
      }
      .life {
        &:before {
          content: "\e633";
        }
      }
      .hair {
        &:before {
          content: "\e626";
          transform: scale(0.7);
        }
      }
      .marry {
        &:before {
          content: "\e629";
        }
      }
      .offspring {
        &:before {
          content: "\e623";
        }
      }
      .sport {
        &:before {
          content: "\e62b";
        }
      }
      .furniture {
        &:before {
          content: "\e625";
        }
      }
      .study {
        &:before {
          content: "\e624";
        }
      }
      .health {
        &:before {
          content: "\e628";
        }
      }
      .bar {
        &:before {
          content: "\e621";
        }
      }
      .arrow {
        display: inline-block;
        width: 4px;
        height: 4px;
        border-bottom: 1px solid #fff;
        border-right: 1px solid #fff;
        transform: rotate(-45deg);
        position: absolute;
        top: 8px;
        right: 12px;
      }
    }
    .detail {
      z-index: 1000;
      box-sizing: border-box;
      width: 400px;
      height: 416px;
      position: absolute;
      top: 10px;
      left: 230px;
      background-color: #fff;
      color: #666;
      padding: 20px 20px 0px 20px;
      a {
        font-family: "-apple-system",BlinkMacSystemFont,Roboto,"Helvetica Neue","MIcrosoft YaHei",sans-serif!important;
        color: #999;
        text-decoration: none;
        font-weight: 400;
      }
      h4 {
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        margin-bottom: 5px;
        &>a {
          font-size: 16px;
          color: #222222;
        }
      }
      .more {
        font-size: 12px;
      }
      .some {
        font-size: 12px;
        margin-right: 12px;
      }
      .block {
        margin-bottom: 30px;
      }
    }
  }
</style>
