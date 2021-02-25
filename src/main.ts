import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store/';
import Layout from '@/components/Layout.vue';
import Nav from '@/components/Nav.vue';
import '@/assets/style/helper.scss';
import Icon from '@/components/Icon.vue';
import {Picker} from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Tabs from '@/components/Tabs.vue';

Vue.use(Picker);

Vue.config.productionTip = false;
Vue.component('Layout', Layout);
Vue.component('Nav', Nav);
Vue.component('Icon', Icon);
Vue.component('Tabs', Tabs);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
