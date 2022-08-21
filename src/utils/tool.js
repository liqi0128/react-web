/**
 * 时间格式化处理
 * yyyy-MM-dd hh:mm:ss
 * */
export function dateFormat(date,fmt='yyyy-MM-dd'){ //author: meizz  
  if(typeof date == 'string'){
    date = new Date(date)
  }
  if(!(date instanceof Date)) return '';
  var o = {   
    "M+" : date.getMonth()+1,                 //月份   
    "d+" : date.getDate(),                    //日   
    "h+" : date.getHours(),                   //小时   
    "m+" : date.getMinutes(),                 //分   
    "s+" : date.getSeconds(),                 //秒   
    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
    "S"  : date.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}

/** *
 * 防抖
 * @parmas fn 回调函数
 * @parmas time 规定时间
 */
 const debounce = (function () {
  let timer = {}
  return function (func, wait = 500) {
      let context = this // 注意 this 指向
      let args = arguments // arguments中存着e
      let name = arguments[0].name || 'arrow' //箭头函数
      if (timer[name]) clearTimeout(timer[name])
      timer[name] = setTimeout(() => {
          func.apply(this, args)
      }, wait)
  }
})()

/** *
 * 节流(规定的时间才触发)
 * @parmas fn 结束完运行的回调
 * @parmas delay 规定时间
 */
 export const throttle = (function () {
  let timeout = null
  return function (func, wait= 500) {
      let context = this
      let args = arguments
      if (!timeout) {
          timeout = setTimeout(() => {
              timeout = null
              func.apply(context, args)
          }, wait)
      }
  }
})()