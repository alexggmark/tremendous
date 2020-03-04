import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import VueLazyload from 'vue-lazyload'

// Layouts
import Standard from '@/layouts/Standard'
import Page from '@/layouts/Page'
Vue.component('default', Standard);
Vue.component('page', Page);

Vue.use(VueLazyload);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
