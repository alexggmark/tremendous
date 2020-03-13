import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import PageHomepage from '@/components/PageHomepage';

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
      name: 'Test',
      path: '/test',
      component: () => import('@/components/PageTest'),
      meta: {
        layout: 'default',
      }
    },
    {
      name: 'Article',
      path: '/article/:handle',
      component: () => import('@/components/PageArticle'),
      meta: {
        layout: 'default',
      }
    },
    {
      name: 'Contact',
      path: '/contact',
      component: () => import('@/components/PageContact'),
      meta: {
        layout: 'page',
        contentId: '7bV3O9Tl8v48qvSwpuGDFw',
      }
    }
  ]
});