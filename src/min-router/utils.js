/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-05 19:09:01
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-05 19:27:36
 * @Description:
 */

/**
 * 更具路由生成具有祖先关系的当前路由映射表
 *  [parentRecord,childRecord] type 保存 即越前面祖先级越高 方便 router-view 的嵌套层级渲染
 * @param {*} record
 * @param {*} path
 * @returns
 */
export default function createRoute(record, path) {
  // 保存路由记录以 [parentRecord,childRecord] type 保存
  //???
  const matched = [];

  // 寻找父节点一直将其插入到头
  while (record) {
    matched.unshift(record);
    record = record.parent;
  }

  // 返回 path 和 matched 方便 router-view 渲染
  return {
    path,
    matched,
  };
}
