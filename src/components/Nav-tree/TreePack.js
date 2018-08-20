/**
 * 递归函数，遍历对象的各个子节点
 * @module Nav-tree/TreePack
 */

/**
 * 将menu打包
 * @param {string} tree 导航树所有内容
 * @param {string} index 索引值
 */
function dataPack(tree, index) {
  let n = tree

  // 对单个节点进行打包
  n.child = n.child || [] // 考虑到Tree.vue中的应用逻辑，故加此默认项
  n.selfStyle = n.selfStyle || 'parent-default'
  n.childStyle = n.childStyle || 'child-default '
  n.url = n.url || 'https://baidu.com'

  n.isShow = n.isShow || false
  n.index = index

  // 处理子节点的问题
  if (n.child && n.child.length > 0) {
    let tList = []
    for (let m of n.child) {
      tList.push(dataPack(m, tList.length))
    }
    n.child = tList
  } else {
    n.child = []
  }
  return n
}

export default { dataPack }
