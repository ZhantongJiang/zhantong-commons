const handleParams = require('./handleParams')
/**
 * element表单--校验银行卡号，首位非0、15到19位
 * 使用场景：银行卡号
 */
module.exports = (rule, value, callback, ...params) => {
  let index = handleParams(params)
  let val = value ? value.replace(/\s+/g, '') : ''
  let reg = /^([1-9]{1})(\d{14}|\d{15}|\d{16}|\d{17}|\d{18})$/
  if (val && !reg.test(val)) { // 替换了输入中的空格，注意传参数时后端的需求
    callback(new Error(params[index] || '请输入正确的银行卡号码'))
  } else {
    callback()
  }
}
