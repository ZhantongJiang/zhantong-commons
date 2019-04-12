const handleParams = require('./handleParams')
/**
 * element表单--校验大于0并且小于100，最多支持两位小数
 * 使用场景：折扣
 */
module.exports = (rule, value, callback, ...params) => {
  let index = handleParams(params)
  let reg = /^([1-9]\d?(\.\d{1,2})?|0\.\d{1,2}|100)$/
  if (value && !reg.test(value)) {
    callback(new Error(params[index] || '请输入0-100之间的数，最多支持两位小数'))
  } else {
    callback()
  }
}
