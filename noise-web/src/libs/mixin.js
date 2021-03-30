import $helper from './helper'

export default {
  filters: {
    toFixed(value) {
      if (isNaN(value)) return (0).toFixed(2);
      return parseFloat(value).toFixed(2);
    },
    fmtSheetNo(sheet_no) {
      const transNo = sheet_no.substring(0, 2);
      const branchNo = sheet_no.substring(2, 6);
      const dateStr = sheet_no.substring(6, 12);
      const no = sheet_no.substring(12, 16);
      return transNo + "-" + branchNo + "-" + dateStr + "-" + no;
    },
    ...$helper
  },
  mounted() {
    this.$_storeUrlParams();
    const shopid = this.$_getUrlParams('shopid');
    if(shopid==undefined || shopid==''){
      this.$toast('无法获取到商户号！');
    }
  },
  methods: {
    //全局统一返回上一级方法
    $_handleBack() {
      window.history.go(-1)
    },
    //储存url参数信息到sessionStorage
    $_storeUrlParams() {
      // sessionStorage.setItem('shopid','90000120'||'90000209')//'90000094'||'90000217'||'90000143'||
      // sessionStorage.setItem('operid','1001')
      // sessionStorage.setItem('branchno','0000')
      console.log(window.location.search)
      if (window.location.search && window.location.search.length > 0) {
        const arr = window.location.search.substr(1).split('&');
        let query = {};
        $helper.forEach(arr, (item, index, arr) => {
          const pair = item.split('=');
          if (pair && pair.length > 1) {
            query[pair[0]] = pair[1];
          }
        })
        console.dir(query);
        if (query.shopid) {
          sessionStorage.setItem('shopid', query.shopid)
        }
        if (query.oper_id) {
          sessionStorage.setItem('operid', query.oper_id)
        }
        if (query.login_branchno) {
          sessionStorage.setItem('branchno', query.login_branchno)
        }
      }
    },
    //从url或者sessionStorage取出参数
    $_getUrlParams(name) {
      return this.$route.query[name] || sessionStorage.getItem(name);
    },
    //对比两个版本，如果a(v20100613)比b新或者一样新，那么返回true，否则false
    $_versionCompare(a = "", b = "") {
      if (!a) {
        return false;
      }
      let y1 = a.substring(3, 7);
      let y2 = b.substring(3, 7);
      if (y1 > y2) {
        return true
      } else if (y1 < y2) {
        return false
      }
      ;
      let m1 = a.substring(7, 9);
      let m2 = b.substring(7, 9);
      if (m1 > m2) {
        return true
      } else if (m1 < m2) {
        return false
      }
      ;
      let d1 = a.substring(9, 11);
      let d2 = b.substring(9, 11);
      if (d1 < d2) {
        return false
      } else {
        return true
      }
      ;
    }
  },

}
