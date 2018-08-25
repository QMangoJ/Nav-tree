 <template>
   <li :data-jdh='tree.index'
       :class='[tree.selfStyle]'
       @click="showm(rootTree)" :deepth="tree.deepth">
       <a :href='tree.url'> {{tree.name}}</a>
    <ul v-if="tree.isShow"
         :class="tree.childStyle"
         v-Location
         v-Event="rootTree">
      <tree v-for="d in tree.child"
            :key="d.index"
            :tree="d"
            :rootTree="-1">
      </tree>
    </ul>
  </li>
</template>

<script>
import Location from './vLocation' // 位置关系采用指令来实现
import Event from './vEvent' // 事件监听与绑定采用指令来实现
/**
 * 该组件为导航树的子组件，也是整个导航最核心的一部分-组件递归，在此文件中集合了显隐状态控制功能，各层级树定位功能
 * @vue-prop {Object:Tree} tree - 需要以tree的形式显示的当前节点
 * @vue-prop {Object:Tree} rootTree=-1 - 全局tree根节点，只在初始渲染中有效，在迭代子过程中被失效，具体方式是将其赋值为-1
 * @module Nav-tree/Tree
 */

export default {
  directives: { Location, Event },
  props: ['tree', 'rootTree'],
  name: 'tree',
  data() {
    return {}
  },
  methods: {
    /**
     * 通过此方法控制导航树显隐
     */
    showm(m) {
      if (m === -1) return
      m.isShow = true
    }
  }
}
</script>

<style scoped lang="scss">
@import url('./default.css');
</style>
