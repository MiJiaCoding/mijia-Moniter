
import { lazyReport } from './report';
import { getPathTo } from './util';

/**
 * 手动上报
 */
export function tracker(actionType, data) {
  lazyReport('action', {
    actionType,
    data
  });
}

/**
 * 自动上报
 */
export function autoTrackerReport() {
  // 自动上报
  document.body.addEventListener('click', function (e) {
    const clickedDom = e.target;

    // 获取标签上的data-target属性的值
    let target = clickedDom?.getAttribute('data-target');

    // 获取标签上的data-no属性的值
    let no = clickedDom?.getAttribute('data-no');
    // 避免重复上报
    if (no) {
      return;
    }

    if (target) {
      lazyReport('action', {
        actionType: 'click',
        data: target
      });
    } else {
      // 获取被点击元素的dom路径
      const path = getPathTo(clickedDom);
      lazyReport('action', {
        actionType: 'click',
        data: path
      });
    }
  }, false);
}
