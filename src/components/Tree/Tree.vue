 <template>
   <li :data-jdh='tree.index'
       :class='[tree.selfStyle]'
       @mousemove="showm(rootTree)" :deepth="tree.deepth">
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
 * 该组件的目的主要是实现组件的递归 参考：https://segmentfault.com/q/1010000008438636
 * @vue-prop {Object:Tree} tree - 需要以tree的形式显示的当前节点
 * @vue-prop {Object:Tree} rootTree - 全局tree根节点，只在初始渲染中有效，在迭代子过程中被失效，具体方式是将其赋值为-1
 */

export default {
  directives: { Location, Event },
  props: ['tree', 'rootTree'],
  name: 'tree',
  methods: {
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
