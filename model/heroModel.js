const mysql = require('mysql')
const cfg = require('./mysqlCfg')
const connection = mysql.createConnection(cfg)
//获取所有英雄数据
function getAllHero(callback) {
  connection.query(
    'select * from user where isdelete=0',
    'utf-8',
    (err, data) => {
      const result = formatDate(data)
      callback && callback(err, result)
    }
  )
}
//删除英雄，软删除
function deleteHero(id, callback) {
  const sql = 'UPDATE user SET isdelete=1 WHERE id=?'
  connection.query(sql, id, (err, data) => {
    callback && callback(err, data)
  })
}
//添加英雄
function addHero(heroData, callback) {
  const sql = 'INSERT INTO user SET ?'
  connection.query(sql, heroData, (err, data) => {
    callback && callback(err, data)
  })
}
//获取英雄
function getHero(id, callback) {
  const sql = 'SELECT * FROM user WHERE id=?'
  connection.query(sql, id, (err, data) => {
    const result = formatDate(data)
    callback && callback(err, result)
  })
}
//转换日期
function formatDate(data) {
  return data.map(item => {
    //时间戳转换
    const time = new Date(item.birthday).toLocaleDateString()
    const timeItem = time.split('-')
    item.birthday = addZero(timeItem).join('-')
    return item
  })
}
//补零
function addZero(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] < 10) {
      data[i] = '0' + data[i]
    }
  }
  return data
}
//更新英雄信息
function editHero(heroData, id, callback) {
  const sql = 'UPDATE user SET ? WHERE id=?'
  connection.query(sql, [heroData, id], (err, data) => {
    callback && callback(err, data)
  })
}
const model = {
  getAllHero,
  deleteHero,
  addHero,
  getHero,
  editHero
}
module.exports = model
