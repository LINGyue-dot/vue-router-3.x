/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-05 21:01:24
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-05 21:08:15
 * @Description:
 */

import Vue from 'vue';
import VueRouter from './min-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/demo',
    component: () => import('./pages/Demo.vue'),
    children: [
      {
        path: 'nest',
        component: () => import('./components/NestCom.vue'),
      },
    ],
  },
  {
    path: '/test',
    component: () => import('./pages/Test.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
