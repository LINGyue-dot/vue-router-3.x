/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-05 20:00:18
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-05 21:43:42
 * @Description:
 */

export default {
  render(h) {
    // route 即为 _route 的响应式 即 current
    const route = this.$route;

    let depth = 0;
    this.routerView = true;

    let parent = this.$parent;

    while (parent) {
      if (parent.routerView) {
        depth++;
      }
      parent = parent.$parent;
    }

    // !!! route.matched 数组什么时候更新
    const record = route.matched[depth];

    if (!record) {
      return h();
    }

    const component = record.component;

    return h(component);
  },
};
