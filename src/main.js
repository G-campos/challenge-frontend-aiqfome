import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import http from './plugins/axios'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  http,
  render: h => h(App)
}).$mount('#app')
