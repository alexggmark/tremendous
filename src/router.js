import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import PageHomepage from '@/components/PageHomepage';
import PageTest from '@/components/PageTest';
import PageArticle from '@/components/PageArticle';
import PageContact from '@/components/PageContact';


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
      name: 'Test',
      path: '/test',
      component: PageTest,
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
      name: 'Contact',
      path: '/contact',
      component: PageContact,
      meta: {
        layout: 'page',
        contentId: '7bV3O9Tl8v48qvSwpuGDFw',
      }
    }
  ]
});