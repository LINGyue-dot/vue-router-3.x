# Vue-Router-3.x



## 基础

实现 3.x 版本的 vue-router 与 4.x 版本由于 vue@2.x 和 vue@3.x 插件入口不同所以入口实现上略有不同



```js
// router.js
Vue.use(VueRouter) // install 函数可以直接挂载到 VueRouter 上
const router = new VueRouter({...})

// main.js
import router from './router'
new Vue({
    router // 实现注入
})
// 注入:会将 router 这个对象作为属性挂在到 Vue.$options.router 上,使得全局都可获取
```







## 基本设计思路

在 install 函数中利用 `mixin` 混入 `beforeCreate` 初始化类配置开启监听 URL ,拦截默认的 location 跳转事件对其进行组件替换实现更新

唯一数据: `_route` (借助 `Vue` 的响应式来与 URL 同步改变,本质上就是 URL 的响应式数据)

存在的数据

```js
// 路由对象
{
    path:,
  	component
    parent
}

// 全局 $route


// 全局的路由信息
所有路由对象组成的数组
```



## 功能实现



### router-view 

`router-view` 全局注册组件利用 Vue 中的 jsx 的 `render h` 函数来进行对路由对应的不同组件进行渲染

#### 层级渲染如何解决

循环查找路由对象的所有父路由对象,组成数组,解析路由,根据层级渲染不同的组件





### router-link

本质上就是 `a` 标签,阻止默认事件,修改 `_route` 





### hash





### history































## Refrence

https://juejin.cn/post/6988316779818778631
