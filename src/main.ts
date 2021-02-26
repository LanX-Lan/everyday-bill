import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store/';
import Layout from '@/components/Layout.vue';
import Nav from '@/components/Nav.vue';
import Icon from '@/components/Icon.vue';
import {Picker} from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Tabs from '@/components/Tabs.vue';
import PickerDate from '@/components/PickerDate.vue';

import '@/assets/style/reset.scss';

Vue.use(Picker);

Vue.config.productionTip = false;
Vue.component('Layout', Layout);
Vue.component('Nav', Nav);
Vue.component('Icon', Icon);
Vue.component('Tabs', Tabs);
Vue.component('PickerDate', PickerDate);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


if (document.documentElement.clientWidth > 500) {
  window.alert('请使用手机打开本页面，以保住浏览效果');
}
