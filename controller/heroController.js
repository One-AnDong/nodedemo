const Model = require('../model/heroModel')
const formidable = require('formidable')
const path = require('path')
//首页显示列表
function showIndex(req, res) {
  Model.getAllHero((err, data) => {
    if (err) res.end('服务器错误')
    res.render('index', {
      list: data
    })
  })
}
//显示添加页面
function showAdd(req, res) {
  res.render('add', {})
}
//显示编辑页面
function showEdit(req, res) {
  const id = req.query.id
  Model.getHero(id, (err, result) => {
    res.render('edit', { data: result })
  })
}
//上传图片
function uploadImg(req, res) {
  let form = new formidable.IncomingForm()
  form.uploadDir = path.join(__dirname, '../static/images')
  form.keepExtensions = true
  form.parse(req, (err, fidles, files) => {
    // console.log(files)
    let response = null
    if (err) {
      response = {
        status: 401,
        msg: '图片上传失败'
      }
    } else {
      const path = files.pic.path
      response = {
        status: 200,
        msg: '上传成功',
        name: path.substring(path.indexOf('upload')),
        base: '/static/images/'
      }
    }
    res.send(response)
  })
}
//删除英雄，软删除
function deleteHero(req, res) {
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
}
//添加英雄
function addHero(req, res) {
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
}
//获取英雄 通过id
function getHero(req, res) {
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
}
//修改英雄信息
function editHero(req, res) {
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
        msg: '修改失败'
      }
    } else {
      response = {
        status: 200,
        msg: '修改成功'
      }
    }
    res.send(response)
  })
}
const controller = {
  showIndex,
  showAdd,
  uploadImg,
  deleteHero,
  addHero,
  getHero,
  editHero,
  showEdit
}
module.exports = controller
