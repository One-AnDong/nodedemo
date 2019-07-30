const mysql = require('mysql')
const cfg = require('./mysqlCfg')
const connection = mysql.createConnection(cfg)
module.exports = {
  //获取所有英雄数据
  getAllHero(callback) {
    connection.query(
      'select * from user where isdelete=0',
      'utf-8',
      (err, data) => {
        callback && callback(err, data)
      }
    )
  },
  //删除英雄，软删除
  deleteHero(id, callback) {
    const sql = 'UPDATE user SET isdelete=1 WHERE id=?'
    connection.query(sql, id, (err, data) => {
      callback && callback(err, data)
    })
  },
  //添加英雄
  addHero(heroData, callback) {
    const sql = 'INSERT INTO user SET ?'
    connection.query(sql, heroData, (err, data) => {
      callback && callback(err, data)
    })
  },
  //获取英雄
  getHero(id, callback) {
    const sql = 'SELECT * FROM user WHERE id=?'
    connection.query(sql, id, (err, data) => {
      callback && callback(err, data)
    })
  },
  //更新英雄信息
  editHero(heroData, id, callback) {
    const sql = 'UPDATE user SET ? WHERE id=?'
    connection.query(sql, [heroData, id], (err, data) => {
      callback && callback(err, data)
    })
  }
}
