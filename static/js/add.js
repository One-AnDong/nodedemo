$(function() {
  const oBtn = $('#sub')
  const oName = $('#myform input[name=name]')
  const oDate = $('#myform input[name=birthday]')
  const oFile = $('#img')
  const oImg = $('#photo')
  const oImgSrc = $('#headSrc')
  const oAddModal = $('#add__info')
  const oAddModalText = $('#add__info .container-fluid')
  const oEnter = $('#add__info .modal-footer button:last-child')
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
      url: '/api/addHero',
      type: 'POST',
      dataType: 'JSON',
      data: data,
      success: function(data) {
        oAddModal.modal()
        if (data.status === 200) {
          oAddModalText.text(`${data.msg},点击确认跳转到首页`)
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
    const formData = new FormData()
    formData.append('pic', this.files[0])
    // console.log(this.files[0])
    $.ajax({
      url: '/api/uploadImg',
      type: 'POST',
      data: formData,
      success: function(data) {
        if (data.status === 200) {
          oImg.attr('src', data.base + data.name)
          oImgSrc.val(data.name)
        }
      },
      contentType: false,
      processData: false
    })
  }
})
