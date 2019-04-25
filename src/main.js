import 'normalize.css/normalize.css';
import './styles/index.styl';
import 'vuetify/dist/vuetify.min.css';

/* icons */
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'font-awesome/css/font-awesome.css';
/* fonts */
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import Vue2Storage from 'vue2-storage';
import i18n from './lang'; // Internationalization

import App from './App.vue';
import router from './router';
import store from './store';
/* import VueI18n from 'vue-i18n'; */
import './permission'; // permission control
import './registerServiceWorker';

Vue.use(Vuetify, {
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  },
  // iconfont: 'mdi' || 'md' || 'mdi' || 'fa' || 'fa4'
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  customProperties: true
});

Vue.use(Vue2Storage, {
  prefix: 'vva_',
  driver: 'local',
  ttl: 60 * 60 * 24 * 1000
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
