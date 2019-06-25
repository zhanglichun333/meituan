<template>
  <div class="h-header-searchbar">
    <el-row class="search">
      <el-col :span="3" class="left">
        <a href="http://">
          <img src="../../../assets/img/logo.png" alt="美团">
        </a>
      </el-col>
      <el-col :span="3" class="center">
        <div class="wrapper1">
          <div class="wrapper">
            <input v-model="search" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input"/>
            <button class="el-icon-search"></button>
          </div>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, i) in $store.state.geo.pois" :key="i">{{ item.name }}</dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, i) in searchList" :key="i">{{ item.name }}</dd>
          </dl>
        </div>
        <div class="suggest">
          <a href="http://" v-for="(item, i) in $store.state.geo.pois" :key="i">{{ item.name }}</a>
        </div>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">美团公益</nuxt-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      search: '',
      isFocus: false,
      // hotPlace: [],
      searchList: []
    }
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.search
    },
    isSearchList() {
      return this.isFocus && this.search
    }
  },
  methods: {
    focus() {
      this.isFocus = true
    },
    blur() {
      this.isFocus = false
    },
    input: _.debounce(async function () {
      const { data: { pois } } = await this.$axios.get(`https://restapi.amap.com/v3/place/text?keywords=${this.search}&city=${this.$store.state.geo.position.city}&offset=7&page=1&key=a776091c1bac68f3e8cda80b8c57627c&extensions=base`)
      this.searchList = pois
    })
  },
  // async mounted() {
  //  const { data: { pois: pois1 } } = await this.$axios.get(`https://restapi.amap.com/v3/place/text?keywords=景点|美食|酒店&city=${this.$store.state.geo.position.city}&offset=5&page=1&key=a776091c1bac68f3e8cda80b8c57627c&extensions=base`)
  //  this.hotPlace = pois1
  // }
}
  
</script>

<style lang="scss">
  .h-header-searchbar {
    background-color: #fff;
    .search {
      width: 1190px;
      height: 157px;
      margin: 0 auto;
      padding-top: 28px;
      .left {
        width: 126px;
        height: 46px;
        margin-right: 154px;
        img {
          width: 126px;
          height: 46px;
        }
      }
      .center {
        position: relative;
        .wrapper1 {
          .wrapper {
            width: 550px;
            border: 1px solid #13D1BE;
            border-radius: 4px;
            input::placeholder {
              /* color: #999; */
            }
            input {
              box-sizing: border-box;
              border-top-left-radius: 4px;
              border-bottom-left-radius: 4px;
              outline: 0;
              border: 0;
              width: 84%;
              height: 40px;
              padding: 10px;
              font-size: 15px;
              color: #999;
            }
            button {
              border: 0;
              width: 16%;
              height: 40px;
              float: right;
              cursor: pointer;
              background-color: #13D1BE;
              color: white;
            }
          }
          .hotPlace {
            box-sizing: border-box;
            width: 462px;
            border: 1px solid #E5E5E5;
            box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
            background-color: #fff;
            position: absolute;
            top: 42px; 
            left: 0px;
            padding: 10px 0 20px 18px;
            font-size: 12px;
            dt {
              color: #999;
              font-weight: 700;
              margin-bottom: 8px;
            }
            dd {
              float: left;
              color: #666;
              margin-right: 15px;
            }
          }
          .searchList {
            width: 462px;
            background-color: #fff;
            border: 1px solid #E5E5E5;
            position: absolute;
            top: 42px;
            z-index: 1002;
            dd {
              box-sizing: border-box;
              font-size: 12px;
              color: #222;
              padding: 4px 0 4px 8px;
              &:hover {
                background: rgba(0,0,0,0.03);
              }
            }
          }
        }
        .suggest {
          width: 550px;
          font-size: 12px;
          padding: 8px 0 0 12px;
          margin-bottom: 28px;
          a {
            margin-right: 20px;
          }
        }
        .nav {
          width: 640px;
          li {
            float: left;
            margin-right: 40px;
            a {
              font-size: 16px;
              font-weight: 700;
              color: #222;
            }
          }
        }
      }
    }
  }
</style>