## Nav 接口描述文档

Nav，又称为导航栏组件。用来构建网站导航模块。

### 组件结构

- 基础组件：Tree.vue 为导航的基础组件
- 插件：
  - TreePack.js 主要通过树级递归算法对导航数据进行打包，数据整理的功能
  - vEvent.js 主要实现对导航进行状态控制
  - vLocation.js 主要实现对浏览器不同窗口宽度下进行导航的位置控制
  - menu.js 需要你自己编写，格式为数组形式，包含导航的层级关系数据及属性
  - default.css 这是我们提供的导航树基础样式，不喜欢也可以自己定义

### 使用示例

#### 基础导航树使用示例

首先引入基础导航组件，同时选择相关的插件

```js
// user.vue <script>
import rawData from './menu' // 1.导入你自己编写的menu.js文件,这里包含导航的层级关系数据
import Tree from './Tree' // 2.导入Tree组件
import TreePack from './TreePack.js' // 3.导入打包插件，下面我们会调用他为我们的数据进行加工
export default {
  components: {
    Tree, // 4.定义为本地组件
    ...
  },
  data(){
    return{
      menu:[] // 5.将加工过的数据存入menu，稍后我们会用到它
    }
  }
  mounted(){
      for (let data of rawData) {
      let m1 = TreePack.dataPack(data, 0)
      this.menu.push(m1)  // 6.将导航数据加工后，添加到menu中
    }
  }
  <style scoped lang="scss">
  @import url('./default.css'); // 7.引入导航树基础样式，如果你不喜欢也可以不使用
  </style>
```

```html
<!-- nav.vue <template>-->
    <ul >
       <tree v-for="m in menu"  :key="m.id" :tree="m":root-tree="m"></tree> // 7.引入tree标签，并且利用v-for 将刚才加工好的数据进行循环，并把每一项传递到子组件Tree中
     </ul>
```

#### 整体导航实现示例

在 nav.vue 中，我们不需要引入任何插件，比如 xxx.js，我们不需要，但是我们需要自己编写 html 及 css，去实现我们想要的导航效果。css 样式我们可以引入外部 css，例如引入 index.css

```
<style scoped lang="scss">
@import url('./index.css');
</style>
```

我们提供了响应式的按钮及使用方式

```js
export default {
  data() {
    return {
      menu: [],
      showMenu: true // 1.添加showMenu值，稍后我们会通过改变它的值控制导航显隐
    }
  },
  components: {
    Tree
  },
  mounted() {
    for (let data of rawData) {
      let m1 = TreePack.dataPack(data, 0)
      this.menu.push(m1)
    }
    // 2.为window对象添加窗口变化监听事件，实现窗口宽度小于992px时自动隐藏导航栏
    window.addEventListener('resize', () => {
      let screenWidth = document.body.clientWidth
      if (screenWidth > 992) return (this.showMenuM = true)
      this.showMenu = false
    })
  },
  methods: {
    // 3.移动端，实现点击菜单按钮显示导航
    showM: function() {
      this.showMenu = !this.showMenu
    }
  }
}
```

```html
  <ul class="menu-zdy" v-show="showMenu"> // 4.在浏览器宽度变化时，对导航树进行显隐自动控制
    <tree v-for="m in menu"  :key="m.id" :tree="m" :root-tree="m"></tree>
  </ul>
  <div  @click="showM"><img src="../../assets/img/menu.png" alt=""></div> // 5.在移动端时，对导航进行手动显隐控制的按钮
```
