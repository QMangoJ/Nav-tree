import Vue from 'vue'
import app from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
// import Cookies from 'js-cookie'
// import LangStorage from '../static/lang'
import EN from '../static/en'
import CH from '../static/ch'

Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  // fallbackLocale: 'en',
  messages: {
    en: EN,
    ch: CH
  }
})

new Vue({
  router,
  i18n,
  render: h => h(app)
}).$mount('#app')
