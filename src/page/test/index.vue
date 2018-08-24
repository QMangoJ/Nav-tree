<template>
  <div>
    <nav-tree></nav-tree>
    <h1 class="aa">{{$t("message.help")}}</h1>
    <h1>{{$t("message.about")}}</h1>
    <h2 class="bbb" v-for="item in menu" :key="item.id">{{$t("message.item")}}</h2>
    <div class="sss">
    <select class="" v-model="locale">
        <!-- <option disabled value="">请选择语言</option> -->
        <option v-for="option in options" :key="option.id" :value="option.key">{{option.value}}</option>
    </select>
    <span>{{locale}}</span>
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in menu" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
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
        { value: 'CHINESE/中文', key: 'ch' }
      ],
      menu: ['help', 'about', 'case', 'module'],
      locale: 'en'
    }
  },
  computed: {
    menu(val) {
      for (i of val) {
        return menu.push(this.$t('i'))
      }
    }
  },
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
