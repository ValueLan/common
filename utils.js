const utils = {
   async *getYield(list) {
    let newList = {};
    list.map((item, index) => {
      newList[index] = Promise.resolve(item).then((data) => {
        return { data, index }
      })
    });
    async function* go() {
      let val = Object.values(newList);
      if (val.length == 0) return;
      let res = Promise.race(val).then(({ data, index }) => {
        delete newList[index];
        return data;
      })
      yield res;
      await res
      yield* go();
    }
    return yield* go();
  },
  formatDate(datetime, format) {
    if (!format) format = 'YYYY-MM-DD HH:mm';
    if (typeof(datetime) == 'string') {
      datetime = datetime.replace(/\-/g, '/');
      datetime = new Date(datetime);
    } else if (typeof(datetime) == 'number') {
      datetime = new Date(datetime * 1000);
    } else if (!(datetime instanceof Date)) {
      datetime = new Date();
    }

    var week = ['日', '一', '二', '三', '四', '五', '六'];
    return format.replace(/YYYY|YY|MM|DD|HH|hh|mm|SS|ss|week/g, function(key) {
      switch (key) {
        case 'YYYY':
          return datetime.getFullYear();
        case 'YY':
          return (datetime.getFullYear() + '').slice(2);
        case 'MM':
          return datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        case 'DD':
          return datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate();
        case 'HH':
        case 'hh':
          return datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours();
        case 'mm':
          return datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes();
        case 'SS':
        case 'ss':
          return datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
        case 'week':
          return week[datetime.getDay()];
      }
    });
  },
  dataReplace(str, data) {
    return str.replace(/\${([^}]+)}/g, function (item, $1) {
      try {
        var fn = new Function('data', `return data.${$1}`);
        return fn(data)
      } catch (e) {
        return item
      }
    })
  },
  formatCoin(number) {
    number = (number * 1 || 0);
    return (number.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  },
  getBase64(file, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
      typeof(callback) == 'function' && callback(e.currentTarget.result);
    }
  },
  getBlob(base64) {
    var arr = base64.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
      type: mime
    });
  },
  doubleNumber(n) {
    if (Number(n) < 10) return '0' + n;
    return n;
  },
  checkCut(a, b) {
    return Math.min(a.x,b.x) <= Math.max(c.x,d.x) &&
            Math.min(c.y,d.y) <= Math.max(a.y,b.y) &&
            Math.min(c.x,d.x) <= Math.max(a.x,b.x) &&
            Math.min(a.y,b.y) <= Math.max(c.y,d.y)
  },
  getDiffData(level0) {
    level0 = (Math.abs(level0) / 1000) >> 0;

    let oneDay = 86400;
    let day = Math.floor(level0 / oneDay);
    let leave1 = level0 % oneDay;

    let oneHour = 3600;
    let hours = Math.floor(leave1 / oneHour);

    let oneMinutes = 60;
    let leave2 = leave1 % oneHour
    let minutes = Math.floor(leave2 / oneMinutes)

    let leave3 = leave2 % oneMinutes
    let seconds = Math.floor(leave3);
    return {
      day,
      hours,
      minutes,
      seconds
    };
  },

}

export default utils;
