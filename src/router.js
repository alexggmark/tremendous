import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import PageHomepage from '@/components/PageHomepage';
import PageArticle from '@/components/PageArticle';
import PageType from '@/components/PageType';


PageArticle

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: PageHomepage,
      meta: {
        layout: 'default',
      }
    },
    {
      name: 'Article',
      path: '/article/:handle',
      component: PageArticle,
      meta: {
        layout: 'default',
      }
    },
    {
      name: 'Page',
      path: '/page/:type/:id',
      component: PageType,
      meta: {
        layout: 'default',
      }
    }
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});