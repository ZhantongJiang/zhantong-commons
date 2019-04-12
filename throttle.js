/**
 * 节流，以防止某函数调用次数过多阻塞渲染进程，采取的每间隔一段时间再次执行的机制
 * @param {Function} func 用于节流的函数
 * @param {Numbet} wait 间隔的时间
 * @return {Function}
 */
module.exports = (func, wait) => {
  var timeout, context, args
  var previous = 0

  var later = function () {
    previous = +new Date()
    timeout = null
    func.apply(context, args)
  }

  var throttled = function () {
    var now = +new Date()
    // 下次触发 func 剩余的时间
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    // 如果没有剩余的时间了或者你改了系统时间
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      setTimeout(() => {
        previous = now
        func.apply(context, args)
      }, 10)
    } else if (!timeout) {
      timeout = setTimeout(later, remaining)
    }
  }
  return throttled
}
