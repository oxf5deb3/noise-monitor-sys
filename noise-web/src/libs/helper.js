import _ from 'lodash'
const $helper={
  fmtDate(date, fmt) {
    if (!date) return '';
    date = new Date(date);
    let ret;
    const opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      }
      ;
    }
    ;
    return fmt;
  },
  fmtThousands(num) {
    //const num = parseFloat(str);
    if (num) {
      const str = num.toString()
      const reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
      return str.replace(reg, '$1,')
    } else {
      return num
    }
  },
  fmtApproveStatus(status){
    if(status=='1')
    {
      return '已审核';
    }
    return '未审核';
  },
  ..._,
}

export default $helper;
