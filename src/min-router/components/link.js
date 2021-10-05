/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-05 20:00:22
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-05 20:01:54
 * @Description: router-link tag
 */

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  render(h) {
    return h(
      'a',
      {
        domProps: {
          href: '#' + this.to,
        },
      },
      [this.$slots.default]
    );
  },
};
