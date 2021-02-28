import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import Labels from '@/views/Labels.vue';
import AddLabel from '@/views/AddLabel.vue';
import Money from '@/views/Money.vue';
import Bill from '@/views/Bill.vue';
import Statistics from '@/views/Statistics.vue';
import EditBill from '@/views/EditBill.vue';


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money',
  },
  {
    path: '/money',
    name: 'Money',
    component: Money
  },
  {
    path: '/bill',
    name: 'Bill',
    component: Bill,
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics,
  },
  {
    path:'/money/label',
    name: 'Label',
    component:Labels,
  },
  {
    path:'/money/label/addLabel/',
    name: 'AddLabel',
    component: AddLabel,
  },
  {
    path:'/bill/editBill',
    name:'EditBill',
    component:EditBill,
  },
  {
    path: '*',
    component: NotFound,
  }
];

const router = new VueRouter({
  routes
});

export default router;
