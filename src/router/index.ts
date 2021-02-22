import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import NotFound from '@/views/NotFound.vue';


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money',
  },
  {
    path: '/money',
    name: 'Money',
    component: () => import('@/views/Money.vue')
  },
  {
    path: '/bill',
    name: 'Bill',
    component: () => import('@/views/Bill.vue'),
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('@/views/Statistics.vue'),
  },
  {
    path: '*',
    component: NotFound,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
