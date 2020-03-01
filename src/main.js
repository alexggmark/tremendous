import Vue from 'vue'
import App from '@/App.vue'
import Router from 'vue-router'

// Layouts
import Standard from '@/layouts/Standard'
Vue.component('default', Standard);

// Routing
import routes from '@/router'
const router = new Router({routes})

Vue.use(Router);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
