/**
 * 完成Boolean、Null、String转换为Number类型，并支持以向上取整、向下取整、四舍五入的方式保留指定数位
 * @param {Boolean || Null || String || Number} val 转换目标
 * @param {Number} precision 精确数位，默认保留两位小数
 * @param {String} type 转换方式，默认round四舍五入，同时支持ceil向上取整、floor向下取整
 * @return 符合条件的返回转换后的数字，不符合条件的返回null
 */
const toNumber = (val, precision=2, type='round') => {
  // 刨除非Boolean、Null、String、Number这四种的类型
  // typeof null === 'object'
  if (typeof val !== 'boolean' && typeof val !== 'string' && typeof val !== 'number' && val !== null) {
    return null
  }

  // 刨除是字符串类型但不能解析成数字的输入
  if (typeof val === 'string' && isNaN(Number(val))) {
    return null
  }

  // 待填充
}