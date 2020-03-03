import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/components/PageHomepage'),
      meta: {
        layout: 'default'
      }
    },
    {
      name: 'Article',
      path: '/article',
      component: () => import('@/components/PageArticle'),
      meta: {
        layout: 'default'
      }
    },
  ]
});