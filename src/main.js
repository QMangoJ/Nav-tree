import Vue from 'vue'
import app from './App.vue'
import router from './router'
import i18n from './i18n'
console.log(i18n)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(app)
}).$mount('#app')
