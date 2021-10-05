/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-05 19:22:46
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-05 19:48:07
 * @Description:
 */

import createRoute from '../utils';

export default class BaseHistory {
  /**
   *
   * @param {*} router 路由对象 Vue-Router 实例
   */
  constructor(router) {
    this.router = router;

    // 默认路径 / 生成当前路由表
    this.current = createRoute(null, '/');

    // cb 是一个回调函数，用于修改响应式路由的值 _route 对应的视图就刷新
    this.cb = null;
  }

  listen(cb) {
    this.cb = cb;
  }

  /**
   * 跳转函数
   * @param {*} path 路由地址
   * @param {*} onComplete 回调函数
   */
  transitionTo(path, onComplete) {
    // 当前路由映射表
    this.current = this.router.matcher.match(path);

    this.cb && this.cb(this.current);

    onComplete && onComplete();
  }
}
