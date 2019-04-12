const handleParams = require('./handleParams')
/**
 * element表单--校验手机号
 * 使用场景：手机号
 */
module.exports = (rule, value, callback, ...params) => {
  let index = handleParams(params)
  let reg = /^1\d{10}$/
  if (value && !reg.test(value)) {
    callback(new Error(params[index] || '请输入正确的手机号码'))
  } else {
    callback()
  }
}
