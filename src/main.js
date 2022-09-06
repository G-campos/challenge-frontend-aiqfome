import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import api from './plugins/axios'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  api,
  router,
  render: h => h(App)
}).$mount('#app')
