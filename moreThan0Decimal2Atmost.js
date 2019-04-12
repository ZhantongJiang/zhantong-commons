const handleParams = require('./handleParams')
/**
 * element表单--校验大于或者等于0，最多支持两位小数
 * 使用场景：套内资费
 */
module.exports = (rule, value, callback, ...params) => {
  let index = handleParams(params)
  let reg = /^[0-9]+([.]{1}[0-9]{1,2})?$/
  if (value && !reg.test(value)) {
    callback(new Error(params[index] || '请输入大于等于0的数字，最多支持两位小数'))
  } else {
    callback()
  }
}
