/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-05 20:58:17
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-05 21:28:14
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const app = new Vue({
  render: (h) => h(App),
  router,
});
app.$mount('#app');
console.log(app);
