/**
 * 防抖函数
 * @param {}} fn 函数
 * @param {*} time 防抖时间
 * @returns fn
 */
export function debounce(fn, time) {
  let timeoutId
  return () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(fn, time)
  }
}
