$(function() {
  const oBtn = $('#sub')
  const oName = $('#myform input[name=name]')
  const oDate = $('#myform input[name=birthday]')
  oBtn.on('click', handleClick)
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
    console.log(data)
    //发起请求
    $.ajax({
      url: '/api/addHero',
      type: 'POST',
      dataType: 'JSON',
      data: data,
      success: function(data) {
        alert(data.msg)
      }
    })
  }
})
