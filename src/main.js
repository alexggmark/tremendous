import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

// Layouts
import Standard from '@/layouts/Standard'
Vue.component('default', Standard);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
