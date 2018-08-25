import Vue from 'vue'
import app from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

import LangEn from '../i18n/en'
import LangZhCHS from '../i18n/zhCHS'

Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  // fallbackLocale: 'en',
  messages: {
    en: LangEn,
    zh: LangZhCHS
  }
})

new Vue({
  router,
  i18n,
  render: h => h(app)
}).$mount('#app')
