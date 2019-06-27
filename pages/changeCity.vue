<template>
  <div class="changeCity">
    <div class="up">
      <span>按省份选择:</span>
      <el-select v-model="pvalue" placeholder="省份">
        <el-option v-for="item in province" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="cvalue" placeholder="城市" :disabled="!city.length" @visible-change="select" ref="currentCity"> 
        <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <span class="search">直接搜索：</span>
      <el-autocomplete v-model="search" :fetch-suggestions="querySearchAsync" placeholder="请输入城市中文或拼音" @select="handleSelect">
      </el-autocomplete>
    </div>
    <div class="middle">
      <dl>
        <dt>热门城市：</dt>
        <dd v-for="(item, i) in list" :key="i">
          <a href="http://">{{item}}</a>
        </dd>
      </dl>
    </div>
    <div class="down">
      <dl class="select">
        <dt>按拼音首字母选择：</dt>
        <dd v-for="(item, i) in list1" :key="i">
          <a :href="'#city-'+item">{{item}}</a>
        </dd>
      </dl>
      <dl v-for="item in block" :key="item.title" class="result">
        <dt :id="'city-'+item.title">{{item.title}}</dt>
        <dd>
          <a href="http://" v-for="(c, i) in item.city" :key="i">{{c}}</a>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
// 获取所有的数据，获取所有的省份，根据省份获取城市，获取所有的城市
import { mapMutations } from 'vuex'
import _ from 'lodash'
import jspy from 'js-pinyin'
export default {
  data() {
    return {
      pvalue: '',
      cvalue: '', 
      search: '',
      public: [],    //所有的数据
      province: [],  //所有的省份
      city: [],      //根据省份获取城市
      cities: [],    //获取所有的城市
      cities1: [],   //下拉框的所有城市
      list: ['北京', '上海', '广州', '深圳', '天津', '西安', '重庆', '杭州', '南京', '武汉', '成都'],
      list1: 'ABCDEFGHIJKLMNOPQRSTUVWYZ'.split(''),
      block: []
    }
  },
  watch: {
    //监听pvalue的变化，根据省份获取城市
    pvalue: function (newPvalue) {
      this.city = this.public.filter(item => item.adcode===newPvalue)[0].districts
      this.city = this.city.map(item => {
        return {
          value: item.name,
          label: item.name
        }
      })
    }
  },
  methods: {
    ...mapMutations({
      setPosition: 'geo/setPosition'
    }),
    // 点击下拉框，弹出所有的城市，根据输入的城市进行搜索
    querySearchAsync:_.debounce(async function (query, cb) {
      this.cities1 = this.cities.map(item => {
        return {
          value: item.name
        }
      })
      cb(this.cities1.filter(item => item.value.indexOf(query) > -1))
    }, 200),
    //根据输入的城市跳转页面
    handleSelect(item) {
      this.$store.commit('geo/setCity', item.value)
      location.href = '/'
    },
    async select () {
      const isSelect = this.$refs.currentCity.value
      if (isSelect) {
        this.$store.commit('geo/setCity', isSelect)
        location.href = '/'
      }
    }
  },
  //1.获取所有的数据，所有的省份 2.获取所有的城市,根据拼音进行排序
  async mounted() {
    const {status, data: { districts:[{ districts }]} } = await this.$axios.get('https://restapi.amap.com/v3/config/district?subdistrict=2&key=b598c12de310236d9d40d3e28ea94d03')
    if (status === 200) {
      //获取全部数据
      this.public = districts
      // 获取省份
      this.province = districts.map(item => {
        return {
          value: item.adcode,
          label: item.name
        }
      })
      // 获取所有的城市
      let r = []
      this.public.forEach((item, i) => {
        item.districts.forEach((item, j) => {
          r[j] = item
          this.cities.push(r[j])
        })
      })
      // 根据拼音进行排序
      let p 
      let c 
      let d = {}
      this.cities.forEach(item => {
        p = jspy.getFullChars(item.name).toLocaleLowerCase().slice(0, 1)
        c = p.charCodeAt(0)
        if (c>96 && c<123) {
          if (!d[p]) {
            d[p] = []
          }
          d[p].push(item.name)
        }
      })
      let blocks = []
      for( let [k, v] of Object.entries(d)) {
        blocks.push({
          title: k.toUpperCase(),
          city: v
        })
      }
      blocks.sort((a, b) =>a.title.charCodeAt(0)-b.title.charCodeAt(0))
      this.block = blocks
    } else {
      this.province = ''
    }
  }
}
</script>

<style lang="scss">
  .changeCity {
    box-sizing: border-box;
    width: 1190px;
    margin: 20px auto 40px;
    padding: 20px;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    .up {
      margin-bottom: 30px;
      .search {
        margin-left: 40px;
      }
      .el-select {
        margin: 0 10px;
      }
    }
    .middle {
      box-sizing: border-box;
      padding: 30px 0;
      border-top: 1px solid #e5e5e5;
      dl {
        height: 28px;
        line-height: 28px;
      }
      dt {
        margin-right: 30px;
        float: left;
        font-size: 16px;
      }
      dd {
        margin-right: 30px;
        float: left;
        font-size: 14px;
        &>a{
          color: #666
        }
        &>a:hover {
          color: #31BBAC;
        }
      }
    }
    .down {
      .select {
        padding: 30px 0;
        border-top: 1px solid #e5e5e5;
        height: 28px;
        line-height: 28px;
        dt {
          margin-right: 20px;
          float: left;
          font-size: 16px;
        }
        dd {
          margin-right: 30px;
          float: left;
          font-size: 14px;
          &>a{
            color: #666;
          }
          &>a:hover {
            color: #31BBAC;
          }
        }
      }
      .result {
        display: flex;
        padding: 13px 30px 13px 10px;
        border-radius: 10px;

        &:hover {
          background: #f8f8f8;
        }

        dt {
          box-sizing: border-box;
          display: inline-block;
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border-radius: 50%;
          color: #fff;
          background: #13d1be;
          box-shadow: 0 4px 5px 0 rgba(39, 178, 164, 0.22);
        }

        dd {
          flex: 1;

          a {
            margin: 10px 20px;
            color: #666;
            display: inline-block;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>

