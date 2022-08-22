import { lazyReport } from './report';

/**
 * 全局错误捕获
 */
export function errorTrackerReport() {
  // --------  js error ---------
  const originOnError = window.onerror;
  window.onerror = function (msg, url, row, col, error) {
    // 处理原有的onerror
    if (originOnError) {
      originOnError.call(window, msg, url, row, col, error);
    }
    // 错误上报
    lazyReport('error', {
      message: msg,
      file: url,
      row,
      col,
      error,
      errorType: 'jsError'
    });
  }

  // ------  promise error  --------
  window.addEventListener('unhandledrejection', (error) => {
    lazyReport('error', {
      message: error.reason,
      error,
      errorType: 'promiseError'
    });
  });

  // ------- resource error --------
  window.addEventListener('error', (error) => {
    let target = error.target;
    let isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLinkElement || target instanceof HTMLImageElement;
    if (!isElementTarget) {
      return; // js error不再处理
    }
    lazyReport('error', {
      message: "加载 " + target.tagName + " 资源错误",
      file: target.src,
      errorType: 'resourceError'
    });
  }, true)
}

/**
 * 手动捕获错误
 */
export function errorCaptcher(error, msg) {
  // 上报错误
  lazyReport('error', {
    message: msg,
    error: error,
    errorType: 'catchError'
  });
}