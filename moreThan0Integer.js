const handleParams = require('./handleParams')
/**
 * element表单--校验大于0的整数
 * 使用场景：暂无
 */
module.exports = (rule, value, callback, ...params) => {
  let index = handleParams(params)
  let reg = /^([1-9]\d*|0)$/
  if ((value && !reg.test(value)) || (value && reg.test(value) && Number(value) < 2)) {
    callback(new Error(params[index] || '请输入大于0的整数'))
  } else {
    callback()
  }
}
