const handleParams = require('./handleParams')
/**
 * element表单--校验大于1的整数
 * 使用场景：卡片数量
 */
module.exports = (rule, value, callback, ...params) => {
  let index = handleParams(params)
  let reg = /^[1-9]\d*$/
  if ((value && !reg.test(value)) || (value && reg.test(value) && Number(value) < 2)) {
    callback(new Error(params[index] || '请输入大于1的整数'))
  } else {
    callback()
  }
}
