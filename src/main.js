/* eslint-disable */
//import 'normalize.css/normalize.css';
import 'vuetify/dist/vuetify.min.css'
/* icons */
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'font-awesome/css/font-awesome.css';
/* fonts */
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
/* import VueI18n from 'vue-i18n'; */
import './registerServiceWorker';

Vue.use(Vuetify, {
  // iconfont: 'mdi' || 'md' || 'mdi' || 'fa' || 'fa4'
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  customProperties: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
