module.exports = {
  dbs: `mongodb://${process.env.HOST || '127.0.0.1'}:27017/student`,
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return 'zhanglichun333@qq.com'
    },
    get pass() {
      return 'azlsmawljhesihce'
    },
    get code() {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    get expire() {
      return () => {
        return new Date().getTime() + 60*1000 
        // 返回距 1970 年 1 月 1 日之间的毫秒数
      }
    }
  }
  // sign: "a3c9fe0782107295ee9f1709edd15218"
  // requestUrl: "http://cp-tools.cn"
}