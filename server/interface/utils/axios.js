// import axios from 'axios'
const axios = require('axios')
const instance = axios.create({
  baseURL: `http://${process.env.HOST||'127.0.0.1'}:${process.env.PORT||3000}`,
  // baseURL: `http://${'127.0.0.1' || process.env.HOST}:${3000 || process.env.PORT}`,
  timeout: 1000, // `timeout` 指定请求超时的毫秒数(0 表示无超时时间) 如果请求话费了超过 `timeout` 的时间，请求将被中断
  header: {

  }
})

module.exports = instance