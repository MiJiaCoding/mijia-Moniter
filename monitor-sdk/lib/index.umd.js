(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.monitorSdk = factory());
})(this, (function () { 'use strict';

  function report$1() {
    var url = window['_monitor_report_url_'];

    if (navigator.sendBeacon) {
      // 支持sendBeacon的浏览器
      navigator.sendBeacon(url, logParamsString);
    } else {
      // 不支持sendBeacon的浏览器
      var oImage = new Image();
      oImage.src = "".concat(url, "?logs=").concat(logParamsString);
    }
  }

  /**
   * 手动上报
   */
  function tracker(actionType, data) {
    report$1();
  }
  /**
   * 自动上报
   */

  function autoTrackerReport() {
    // 自动上报
    window.addEventListener('click', function (e) {
      var clickedDom = e.target; // 获取data-target属性值

      var target = clickedDom === null || clickedDom === void 0 ? void 0 : clickedDom.getAttribute('data-target');

      if (target) {
        // 如果设置data-target属性就上报对应的值
        report$1();
      } else {
        // 如果没有设置data-target属性就上报被点击元素的html路径
        getPathTo(clickedDom);
        report$1();
      }
    }, false);
  }

  /**
   * history路由监听
   */

  function historyPageTrackerReport() {
    /**
     * 重写pushState和replaceState方法
     * @param {*} name 
     * @returns 
     */


    var createHistoryEvent = function createHistoryEvent(name) {
      var origin = window.history[name];
      return function () {
        var res = origin.apply(this, arguments);
        var e = new Event(name);
        e.arguments = arguments;
        window.dispatchEvent(e);
        return res;
      };
    };

    window.history.pushState = createHistoryEvent('pushState');
    window.history.replaceState = createHistoryEvent('replaceState');


    window.addEventListener('popstate', function () {
      currentTrigger();
    }); // history.pushState

    window.addEventListener('pushState', function () {
      currentTrigger();
    }); // history.replaceState

    window.addEventListener('replaceState', function () {
      currentTrigger();
    }); // hash路由监听

    window.addEventListener('hashchange', function () {
      currentTrigger();
    }); // 页面load监听

    window.addEventListener('load', function () {
      currentTrigger();
    });
  }
  /**
   * hash路由监听
   */

  function hashPageTrackerReport() {

    function listener() {
      report$1();
      report$1();
    } // hash路由监听


    window.addEventListener('hashchange', function () {
      listener();
    }); // 页面load监听

    window.addEventListener('load', function () {
      listener();
    });
  }

  /**
   * 全局错误捕获
   */

  function errorTrackerReport() {
    // --------  js error ---------
    var originOnError = window.onerror;

    window.onerror = function (msg, url, row, col, error) {
      // 处理原有的onerror
      if (originOnError) {
        originOnError.call(window, msg, url, row, col, error);
      } // 错误上报


      report$1();
    }; // ------  promise error  --------


    window.addEventListener('unhandledrejection', function (error) {
      report$1('promiseError', {
        message: e.reason,
        error: error
      });
    }); // ------- resource error --------

    window.addEventListener('error', function (error) {
      var target = error.target;
      var isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLinkElement || target instanceof HTMLImageElement;

      if (!isElementTarget) {
        return; // js error不再处理
      }

      reporter('resourceError', {
        message: "加载 " + target.tagName + " 资源错误",
        file: target.src,
        error: target
      });
    });
  }
  /**
   * 手动捕获错误
   */

  function errorCaptcher(error, msg) {
    reporter('catchError', {
      message: msg,
      error: error
    });
  }

  /**
   * 加载配置
   * @param {*} options 
   */

  function loadConfig(options) {
    var appId = options.appId,
        userId = options.userId,
        reportUrl = options.reportUrl,
        autoTracker = options.autoTracker,
        hashPageTracker = options.hashPageTracker,
        historyPageTracker = options.historyPageTracker,
        errorTracker = options.errorTracker;

    if (appId) {
      window['_monitor_app_id_'] = appId; // 系统id
    }

    if (userId) {
      window['_monitor_user_id_'] = userId; // 用户id
    }

    if (reportUrl) {
      window['_monitor_report_url_'] = reportUrl; // 上报的url
    }

    if (autoTracker) {
      autoTrackerReport(); // 是否开启无痕埋点
    }

    if (hashPageTracker) {
      hashPageTrackerReport(); // hash路由上报
    }

    if (historyPageTracker) {
      historyPageTrackerReport(); // hash路由上报
    }

    if (errorTracker) {
      errorTrackerReport(); // 是否开启错误监控
    }
  }
  /**
   * 获取元素的dom路径
   * @param {*} element 
   * @returns 
   */

  function getPathTo(element) {
    if (element.id !== '') return 'id("' + element.id + '")';
    if (element === document.body) return element.tagName;
    var ix = 0;
    var siblings = element.parentNode.childNodes;

    for (var i = 0; i < siblings.length; i++) {
      var sibling = siblings[i];
      if (sibling === element) return getPathTo(element.parentNode) + '>' + element.tagName + '[' + (ix + 1) + ']';
      if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
    }
  }

  /**
   * 初始化配置
   * @param {*} options 
   */

  function init(options) {
    Object.assign({
      autoTracker: true,
      pageTracker: true,
      errorTracker: true
    }, options);
    loadConfig(options); // 加载配置

    report('user', '加载应用'); // uv统计
  }

  var index = {
    init: init,
    tracker: tracker,
    errorCaptcher: errorCaptcher
  };

  return index;

}));
