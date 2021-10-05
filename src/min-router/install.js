/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-05 18:42:39
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-05 20:44:41
 * @Description:
 */

import link from './components/link';
import view from './components/view';

export let _Vue = null;

export default function install(Vue) {
  _Vue = Vue;

  _Vue.mixin({
    beforeCreate() {
      // !!! ???
      if (this.$options.router) {
        // !!! 保存 Vue 的作用？
        // 保存 Vue
        this._routerRoot = this;
        // 保存 Vue Router 实例
        this._router = this.$options.router;
        // 调用 init 函数 初始化
        this._router.init(this);

        // 创建一个响应式的值
        // 第一个是绑定对象 第二个名称 第三个值
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        // 如果有父组件就将父组件的 _routerRoot (Vue) 给子组件
        // 没有父组件就将 this (Vue) 给子组件
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
    },
  });

  Vue.component('router-view', view);
  Vue.component('router-link', link);

  Object.defineProperty(Vue.prototype, '$router', {
    get() {
      // _routerRoot 是 Vue 他的 _router 是 Vue-Router 实例
      return this._routerRoot._router;
    },
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get() {
      // 当前路由
      return this._routerRoot._route;
    },
  });
}
