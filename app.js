const express = require('express')
const router = require('./router')
// const bodyParser = require('body-parser')
const app = express()
const querystring = require('querystring')
//实现bodyParser中间件
app.use(function(req, res, next) {
  let data = ''
  req.on('data', chunk => {
    data += chunk
  })
  req.on('end', err => {
    if (err) throw err
    const result = querystring.parse(data)
    req.body = result
    next()
  })
})
//实现cors跨域
app.use(function(req, res, next) {
  // 限定哪些域名可以过来跨域访问 如果写* 代表谁都可以
  res.header('Access-Control-Allow-Origin', '*')
  // 允许哪些请求方式可以跨域访问
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  // 允许头
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  // 允许 - 不同的 协议名
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})
// app.use(bodyParser.urlencoded({ extended: false }))
// 设置 ejs 为 express 的 渲染引擎
app.set('view engine', 'pug')
// 设置 ejs 的模板文件的目录
app.set('views', './views')
//监听端口
app.listen('8888', () => {
  console.log('服务器启动成功:http://127.0.0.1:8888')
})

//引入路由
app.use(router)
