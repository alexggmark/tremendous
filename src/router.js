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