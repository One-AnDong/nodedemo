$(function() {
  const oBtn = $('#sub')
  const oName = $('#myform input[name=name]')
  const oDate = $('#myform input[name=birthday]')
  const oFile = $('#img')
  const oImg = $('#photo')
  const oImgSrc = $('#headSrc')
  const oAddModal = $('#edit__info')
  const oAddModalText = $('#edit__info .container-fluid')
  const oEnter = $('#edit__info .modal-footer button:last-child')
  //绑定事件
  oFile.on('change', handleUpload)
  oBtn.on('click', handleClick)
  //点击事件处理函数
  function handleClick(e) {
    //阻止默认行为
    e.preventDefault()
    //判断用户名和生日不能为空
    let nameVal = oName.val()
    let dateVal = oDate.val()
    if (nameVal.trim().length === 0) return alert('用户名不能为空')
    if (!dateVal) return alert('生日不能为空')
    //获取表单数据
    let data = $('#myform').serialize()
    //发起请求
    $.ajax({
      url: '/api/editHero',
      type: 'POST',
      dataType: 'JSON',
      data: data,
      success: function(data) {
        oAddModal.modal()
        if (data.status === 200) {
          oAddModalText.text(`${data.msg}`)
          //点击确认按钮跳转跳转
          oEnter.on('click', () => {
            window.location.href = '/index'
          })
        } else {
          oAddModalText.text(data.msg)
        }
      }
    })
  }
  //上传图片事件处理
  function handleUpload() {
    let formData = new FormData()
    formData.append('pic', this.files[0])
    const oMask = $('.mask')
    const oProgress = $('.progress')
    const oProgressBar = $('.progress-bar')
    //显示
    oMask.show()
    oProgress.show()
    $.ajax({
      url: '/api/uploadImg',
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      xhr: function() {
        let xhr = new XMLHttpRequest()
        xhr.upload.onprogress = function(e) {
          let percent = Math.floor((e.loaded / e.total) * 10000) / 100 + '%'
          oProgressBar.css('width', percent)
          oProgressBar.html(percent)
        }
        return xhr
      },
      complete: function() {
        oMask.hide()
        oProgress.hide()
        oProgressBar.html('0%')
        oProgressBar.css('width', 0)
      },
      error: function() {
        alert('上传失败')
      },
      success: function(data) {
        if (data.status === 200) {
          oImg.attr('src', data.base + data.name)
          oImgSrc.val(data.name)
        }
      }
    })
  }
})
