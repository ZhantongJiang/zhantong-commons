const handleParams = require('./handleParams')
/**
 * element表单--校验电子邮箱
 * 使用场景：电子邮箱
 */
module.exports = (rule, value, callback, ...params) => {
  let index = handleParams(params)
  let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/g
  if (value && !reg.test(value)) {
    callback(new Error(params[index] || '请输入正确的电子邮箱'))
  } else {
    callback()
  }
}
