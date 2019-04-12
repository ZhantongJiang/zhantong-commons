/**
 * 处理params，以支持指定的提示语
 * 返回值：第一个提示语参数的下标
 */
module.exports = (params) => {
  for (let i = 0; i < params.length; i++) {
    if (typeof params[i] === "string") {
      return i
    }
  }
}
