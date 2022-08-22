import { getCache, addCache, clearCache } from './cache';

let timer = null;

/**
 * 上报
 * @param {*} type 
 * @param {*} params 
 */
export function lazyReport(type, params) {
  const appId = window['_monitor_app_id_'];
  const userId = window['_monitor_user_id_'];
  const delay = window['_monitor_delay_'];

  const logParams = {
    appId, // 项目的appId
    userId, // 用户id
    type, // error/action/visit/user
    data: params, // 上报的数据
    currentTime: new Date().getTime(), // 时间戳
    currentPage: window.location.href, // 当前页面
    ua: navigator.userAgent, // ua信息
  };

  let logParamsString = JSON.stringify(logParams);
  addCache(logParamsString);

  const data = getCache();

  if (delay === 0) { // delay=0相当于不做延迟上报
    report(data);
    return;
  }

  if (data.length > 10) {
    report(data);
    clearTimeout(timer);
    return;
  }

  clearTimeout(timer);
  timer = setTimeout(() => {
    report(data)
  }, delay);
}

export function report(data) {
  const url = window['_monitor_report_url_'];

  // ------- fetch方式上报 -------
  // 跨域问题
  // fetch(url, {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // }).then(res => {
  //   console.log(res);
  // }).catch(err => {
  //   console.error(err);
  // })

  // ------- navigator/img方式上报 -------
  // 不会有跨域问题
  if (navigator.sendBeacon) { // 支持sendBeacon的浏览器
    navigator.sendBeacon(url, JSON.stringify(data));
  } else { // 不支持sendBeacon的浏览器
    let oImage = new Image();
    oImage.src = `${url}?logs=${data}`;
  }
  clearCache();
}
