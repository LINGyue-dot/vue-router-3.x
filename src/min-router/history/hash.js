/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-05 19:33:43
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-05 19:43:17
 * @Description:
 */

import BaseHistory from './base';

export default class HashHistory extends BaseHistory {
  constructor(router) {
    super(router);

    ensureSlash();
  }

  // 监听 url 变化修改 current
  setUpListenter() {
    window.addEventListener('hashchange', () => {
      // 改变 current
      this.transitionTo(this.getCurrentLocation());
    });
  }

  // 获取去除 # 后的 url
  getCurrentLocation() {
    let href = window.location.href;

    // 获取第一个 # 的索引
    const index = href.indexOf('#');

    // 没有 #
    if (index < 0) return '';
    href = href.slice(index + 1);

    return href;
  }
}

// 确保第一次加上 #
function ensureSlash() {
  if (window.location.hash) {
    return;
  }
  // 如果没有 hash ，只需要加上 / 他就会自动补为 /#/
  window.location.hash = '/';
}
