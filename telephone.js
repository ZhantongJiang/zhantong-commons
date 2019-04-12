const handleParams = require('./handleParams')
/**
 * element表单--校验电话号码（大陆）
 * 使用场景：电话号码（大陆）
 */
module.exports = (rule, value, callback, ...params) => {
  let index = handleParams(params)
  let reg = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/
  if (value && !reg.test(value)) {
    callback(new Error(params[index] || '请输入正确的电话号码'))
  } else {
    callback()
  }
}
