<template>
  <div class="m-container">
    <div class="scenes-container">
      <dl @mouseover="over">
        <dt class="dt">有格调</dt>
        <!-- <dd keywords="美食|spa|电影|酒店" kind="all">全部</dd> -->
        <dd keywords="美食">约会聚餐</dd>
        <dd keywords="SPA">丽人SPA</dd>
        <dd keywords="电影">电影演出</dd>
        <dd keywords="酒店">品质出游</dd>
      </dl>
      <div class="detial">
        <nuxt-link to="item.url" v-for="(item, i) in list" :key="item.name">
          <img :src='item.photos[0].url' alt="美团">
          <ul>
            <li class="title">{{ item.name }}</li>
            <li class="other">{{ item.adname }}&nbsp;&nbsp;&nbsp;{{ item.address }}</li>
            <li class="price">
              <span>¥{{ item.biz_ext.cost.length?item.biz_ext.cost:'暂无' }}</span>
            </li>
          </ul>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: 'all',
      keywords: '',
      list: []
    }
  },
  methods: {
    async over(e) {
      const current = e.target.tagName.toLowerCase()
      if (current === 'dd') {
        this.keywords = e.target.getAttribute('keywords')
        const {status, data: {pois}} = await this.$axios.get(`https://restapi.amap.com/v3/place/text?keywords=${this.keywords}&city=${this.$store.state.geo.position.city}&offset=10&page=1&key=b598c12de310236d9d40d3e28ea94d03&extensions=all`)
        if (status === 200) {
          const r = pois.filter(item => item.photos.length)
          this.list= r.slice(0, 6)
        } else {
          this.list = []
        }
      }
    }
  },
  async mounted() {
    const {status, data: { pois }} = await this.$axios.get('https://restapi.amap.com/v3/place/text?keywords=美食&city=梅州&offset=100&page=1&key=b598c12de310236d9d40d3e28ea94d03&extensions=all')
    if (status === 200) {
      const r = pois.filter((item) => item.biz_ext.cost.length && item.photos.length)
      this.list = r.slice(0, 6)
    } else {
      this.list = []
    }
  }
}
</script>

<style lang="scss">
  .m-container {
    .scenes-container {
      width: 1190px;
      margin: 40px auto;
      dl {
        height: 44px;
        line-height: 44px;
        background-color: #C0AA81;
        color: white;
        dt {
          float: left;
          margin: 0 10px;
          font-size: 18px;
        }
        dd {
          float: left;
          padding: 0 5px;
          font-size: 14px;
          cursor: pointer;
        }
      }
      .detial {
        width: 100%;
        height: 650px;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        background-color: #fff;
        padding: 10px;
        a {
          float: left;
          display: block;
          box-sizing: border-box;
          width: 33.3%;
          height: 314px;
          padding: 10px;
        }
        img {
          width: 100%;
          height: 208px;
        }
        .title {
          font-size: 16px;
          color: #222;
          margin: 8px 0;
        }
        .other {
          font-size: 12px;
          color: #999;
          margin-bottom: 8px;
        }
        .price {
          position: relative;
          font-size: 12px;
          color: #999;
          span:first-child {
            font-size: 22px;
            color: #BE9E4D;
            margin-right: 6px;
          }
          i {
            position: absolute;
            top: 10px;
            right: 0px;
            font-style: normal;
          }
        }
      }
    }
  }
</style>

