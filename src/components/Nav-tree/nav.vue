<template>
  <div class="container-fluid">
    <div class="header row">
      <!-- logo-begin -->
      <div class=" logo">
        <img src="../../assets/img/logo.png" width="140px" height="48px" />
      </div>
      <!-- logo-end -->
      <!-- nav-begin -->
      <div class="nav-zdy">
        <ul class="menu-zdy" v-show="showMenu">
          <tree v-for="m in menu" :key="m.id" :tree="m" :root-tree="m"></tree>
        </ul>
      </div>
      <!-- nav-end -->
      <!-- search-begin -->
      <div class="search">
        <div class="change">
          <select class="change-select">
            <option disabled value="">请选择语言</option>
            <option v-for="option in options" :key="option.id" :value="option.value">{{option.text}}</option>
          </select>
        </div>
        <div class="input">
          <input type="text" v-model="name" class="search-input" />
          <div class="icon"><img src="../../assets/img/search.png" width="30px" height="30px" /></div>
        </div>
        <div class="qiehuan" @click="showM"><img src="../../assets/img/menu.png" alt=""></div>
      </div>
      <!-- search-end -->
    </div>
  </div>
</template>

<script>
import rawData from './menu'
import Tree from './Tree'
import TreePack from './TreePack.js'
/**
 * 该组件为父组件，具体参考{@tutorial Nav};在此组件引入和注册组件子组件Tree
 * @vue-data {Array} menu - 将导航数据处理成数组形式的数据
 * @vue-data {Bool}  [showMenu=true] - 通过改变showMenu值，进行控制不同屏幕尺寸下的导航显示和隐藏
 * @copyright jidenghao 2018.08.20.
 * @module Nav-tree/nav
 */

export default {
  data() {
    return {
      name: '',
      options: [
        { value: 'ENGLISH', text: 'ENGLISH/英语' },
        { value: 'CHINESE', text: 'CHINESE/中文' }
      ],
      menu: [],
      showMenu: true
    }
  },
  components: {
    Tree
  },
  // 完成el和data的挂载
  mounted() {
    let rawData = this.$t('menuss')
    // console.log(this.$t('menu'))
    for (let data of rawData) {
      let m1 = TreePack.dataPack(data, 0)
      console.log('aa', m1)
      this.menu.push(m1)
    }
    // 为window对象添加窗口变化监听事件，实现窗口宽度小于992px时自动隐藏导航栏
    window.addEventListener('resize', () => {
      let screenWidth = document.body.clientWidth
      if (screenWidth > 992) return (this.showMenu = true)
      this.showMenu = false
    })
  },
  methods: {
    /**
     *  移动端，实现点击菜单按钮显示导航
     */
    showM: function() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
<style scoped lang="scss">
@import url('./index.css');
.logo {
  min-width: 240px;
}
</style>
