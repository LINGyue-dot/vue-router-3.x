/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-05 19:02:21
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-05 19:31:55
 * @Description:
 */

import createRouteMap from './createRouterMap';
import createRoute from './utils';

/**
 *
 * @param {*} router
 * @returns
 */
export default function createMatcher(router) {
  //
  const { pathList, pathMap } = createRouteMap(router);

  // 返回当前 path 对应的路由祖先映射数组即当前 path 对应的页面所需要渲染的所有父路由对象( path,component 等)
  function match(path) {
    const record = pathMap[path];
    // 如果存在
    if (record) {
      return createRoute(record, path);
    }
    return createRoute(null, path);
  }

  function addRoutes(router) {
    createRouteMap(router, pathList, pathMap);
  }

  return {
    match,
    addRoutes,
  };
}
