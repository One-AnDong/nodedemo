$(function() {
  const oDelete = $('table')
  oDelete.on('click', '.delete', handleDelete)
  function handleDelete(e) {
    const self = this
    //取消默认行为
    e.preventDefault()
    //是否确认删除
    let state = confirm('确定要删除吗？')
    if (!state) return
    //获取id
    let id = $(this)
      .parents('tr')
      .children('td')[0].innerText
    //发起请求
    $.ajax({
      url: '/api/deleteHero?id=' + id,
      type: 'GET',
      dataType: 'JSON',
      success: function(data) {
        console.log(data.msg)
        if (data.status === 200) {
          $(self)
            .parents('tr')
            .remove()
        }
      }
    })
  }
})
