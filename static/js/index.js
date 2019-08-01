$(function() {
  const oDelete = $('table')
  const oModal = $('#modelId')
  const oInfoModal = $('#delete__info')
  const oInfoModalText = $('#delete__info .container-fluid')
  const oEnter = $('#modelId .modal-footer button:last-child')
  //添加事件
  oDelete.on('click', '.delete', handleDelete)
  //处理删除按钮事件
  function handleDelete(e) {
    //取消默认行为
    e.preventDefault()
    //弹出提示框
    oModal.modal()
    //绑定事件
    oEnter.on('click', handleEnter.bind(this))
  }
  //处理用户确认删除按钮事件
  function handleEnter() {
    //获取id
    let id = $(this)
      .parents('tr')
      .children('td')[0].innerText
    //发起请求
    $.ajax({
      url: '/api/deleteHero?id=' + id,
      type: 'GET',
      dataType: 'JSON',
      success: data => {
        //隐藏确认弹出框
        oModal.modal('hide')
        //提示删除状态
        if (data.status === 200) {
          //弹出删除状态提示框
          oInfoModal.modal()
          //修改提升框文字
          oInfoModalText.text(data.msg)
          //移除修改的行
          $(this)
            .parents('tr')
            .remove()
        } else {
          //弹出提示框
          oInfoModal.modal()
          //修改提示信息
          oInfoModalText.text(data.msg)
        }
      }
    })
  }
})
