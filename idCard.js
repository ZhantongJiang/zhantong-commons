const handleParams = require('./handleParams')
/**
 * element表单--校验身份证号
 * 使用场景：身份证号
 */
module.exports = (rule, value, callback, ...params) => {
  let index = handleParams(params)
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (value && !reg.test(value)) {
    callback(new Error(params[index] || '请输入正确的身份证号码'))
  } else {
    callback()
  }
}
