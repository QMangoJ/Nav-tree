import Vue from 'vue'
import VueI18n from 'vue-i18n'
import LangEn from './en'
import LangZhCHS from './zhCHS'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: LangEn,
    zh: LangZhCHS
  }
})
