/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-05 18:51:00
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-05 18:59:58
 * @Description:
 */

/**
 * 根据 routes 生成路由表 pathList 以及 pathMap
 * @param {*} routes
 * @param {*} oldPathList
 * @param {*} oldPathMap
 * @returns
 */
export default function createRouteMap(routes, oldPathList, oldPathMap) {
  // !!! 传入的动态路由
  const pathList = oldPathList || [];
  const pathMap = oldPathMap || [];

  routes.forEach((route) => {
    // 记录路由
    addRouteRecord(route, pathList, pathMap);
  });

  // 返回新路由以及对应关系
  return {
    pathList,
    pathMap,
  };
}

/**
 *
 * @param {*} route 路由数据
 * @param {*} pathList
 * @param {*} pathMap
 * @param {*} parentRecord 父路由
 */
function addRouteRecord(route, pathList, pathMap, parentRecord) {
  //
  const path = parentRecord ? `${parentRecord.path}/${route.path}` : route.path;
  // record 记录路由基本数据
  const record = {
    path,
    component: route.component,
    parent: parentRecord,
  };

  // 判断是否在路由列表中
  if (!pathMap[path]) {
    pathList.push(path);
    pathMap[path] = record;
  }

  // 如果当前路由有子路由，有的话就进行递归将其添加到 pathMap 以及 pathList 中
  if (route.children) {
    route.children.forEach((childRoute) => {
      addRouteRecord(childRoute, pathList, pathMap, record);
    });
  }
}
