<template>
  <div>
    <nav-tree></nav-tree>
    <h1 class="aa">{{$t("message.hello")}}</h1>
    <h1>{{$t("message.Model")}}</h1>
    <h2 class="bbb" v-for="item in menu" :key="item.id">{{item}}</h2>
    <div class="sss">
    <select class="" v-model="locale">
        <!-- <option disabled value="">请选择语言</option> -->
        <option v-for="option in options" :key="option.id" :value="option.key">{{option.value}}</option>
    </select>
    <span>{{locale}}</span>
    </div>
  </div>
</template>

<script>
import navTree from '../../components/Nav-tree/nav'
// import LangStorage from '../../../static/lang'
export default {
  data() {
    return {
      options: [
        { value: 'ENGHLIS/英语', key: 'en' },
        { value: 'CHINESE/中文', key: 'zh' }
      ],
      menu: [],
      locale: 'en'
    }
  },
  computed: {},
  watch: {
    locale(val) {
      return (this.$i18n.locale = val)
    }
  },
  components: {
    navTree
  }
}
</script>

<style>
.aa {
  position: relative;
  top: 200px;
}
.sss {
  position: relative;
  top: 200px;
}
.bbb {
  position: relative;
  top: 200px;
}
</style>
