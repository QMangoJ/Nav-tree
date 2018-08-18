let vLocation = {
  inserted: function(el, binding, vnode) {
    // 获取父节点
    let tParent = vnode.elm.parentNode
    // 获取父节点的层级
    let deepth = parseInt(tParent.getAttribute('deepth')) || 0
    // 获取网页可见区域宽度
    let screenWidth = window.matchMedia('(min-width:992px)')
    // 屏幕尺寸变化时，实现元素定位变化
    if (screenWidth.matches) {
      el.style.position = 'absolute'
      el.style.top = `${deepth === 1 ? tParent.offsetHeight : 0}px`
      el.style.left = `${deepth === 1 ? 0 : tParent.offsetWidth}px`
    } else {
      el.style.position = ''
      el.style.top = 0 + 'px'
      el.style.left = 0 + 'px'
    }
  }
}

export default vLocation
