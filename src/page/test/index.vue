<template>
  <div>
    <nav-tree></nav-tree>
    <!-- <h1 @click="change">Name</h1>
    <div v-for="n in $t('menuss')" :key="n.id" @click="onclick(n)">
      {{n.name }}
      <div v-if=n.isShow>
        <div v-for="n2 in n.child" :key="n2.id">
          {{n2.name}}
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import navTree from '../../components/Nav-tree/nav'
export default {
  data() {
    return {}
  },
  components: {
    navTree
  },
  mounted: function() {
    // console.log(this.$t('nav.message'))
  },
  methods: {
    // onclick: function(n) {
    //   n.isShow = !n.isShow
    // },
    // change: function() {
    //   this.$i18n.locale = this.$i18n.locale === 'en' ? 'zh' : 'en'
    // }
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
