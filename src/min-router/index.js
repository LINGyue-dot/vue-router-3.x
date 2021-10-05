import createMatcher from './createMatcher';
import HashHistory from './history/hash';
import install from './install';

/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-05 17:18:05
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-05 21:06:23
 * @Description:
 */
export default class VueRouter {
  constructor(options) {
    this._options = options;
    this._routes = options.routes || [];

    this.matcher = createMatcher(this._routes);

    this.mode = options.mode || 'hash';
    switch (this.mode) {
      case 'history':
        this.history = new HashHistory(this);
        break;
      case 'hash':
        this.history = new HashHistory(this);

        break;
      default:
        throw new Error('mode dose not exist');
    }
  }

  init(Vue) {
    const history = this.history;

    history.transitionTo(history.getCurrentLocation(), () => {
      // 监听 url 设置 this.current
      history.setUpListenter();
    });
    history.listen((route) => {
      Vue._route = route;
    });
  }
}

VueRouter.install = install;
