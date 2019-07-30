const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const app = express()

// 设置 ejs 为 express 的 渲染引擎
app.set('view engine', 'pug')
// 设置 ejs 的模板文件的目录
app.set('views', './views')
//引入路由
//监听端口
app.listen('8888', () => {
  console.log('服务器启动成功:http://127.0.0.1:8888')
})
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)
