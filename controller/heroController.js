const Model = require('../model/heroModel')
module.exports = {
  //首页显示列表
  showIndex(req, res) {
    Model.getAllHero((err, data) => {
      if (err) res.end('服务器错误')
      data.forEach(item => {
        //时间戳转换
        const time = new Date(item.birthday)
        let year = time.getFullYear()
        let mon = time.getMonth() + 1
        let day = time.getDate()
        item.birthday = `${year}-${mon}-${day}`
      })
      res.render('index', {
        list: data
      })
    })
  },
  //显示添加页面
  showAdd(req, res) {
    res.render('add', {})
  },
  //删除英雄，软删除
  deleteHero(req, res) {
    const id = req.query.id
    Model.deleteHero(id, (err, data) => {
      let response = null
      if (err) {
        response = {
          status: 401,
          msg: '服务器错误'
        }
      } else if (data.affectedRows !== 1) {
        response = {
          status: 401,
          msg: '删除失败'
        }
      } else {
        response = {
          status: 200,
          msg: '删除成功'
        }
      }
      res.send(response)
    })
  },
  //添加英雄
  addHero(req, res) {
    Model.addHero(req.body, (err, data) => {
      let response = null
      if (err) {
        response = {
          status: 401,
          msg: '添加失败'
        }
      } else {
        response = {
          status: 200,
          msg: '添加成功'
        }
      }
      res.send(response)
    })
  },
  //获取英雄 通过id
  getHero(req, res) {
    Model.getHero(req.query.id, (err, data) => {
      let response = null
      if (err) {
        response = {
          status: 401,
          msg: '查询失败'
        }
      } else {
        response = {
          status: 200,
          msg: 'success',
          data: data
        }
      }
      res.send(response)
    })
  },
  //修改英雄信息
  editHero(req, res) {
    console.log('qq')
    Model.editHero(req.body, req.body.id, (err, data) => {
      let response = null
      if (err) {
        response = {
          status: 401,
          msg: '服务器错误'
        }
      } else if (data.affectedRows !== 1) {
        response = {
          status: 401,
          msg: '添加失败'
        }
      } else {
        response = {
          status: 200,
          msg: '添加成功'
        }
      }
      res.send(response)
    })
  }
}
