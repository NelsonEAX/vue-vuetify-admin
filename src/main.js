import 'normalize.css/normalize.css';
import '@/styles/index.scss'; // global css
import 'vuetify/dist/vuetify.min.css';

/* icons */
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'font-awesome/css/font-awesome.css';
/* fonts */
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import i18n from './locale'; // Internationalization

import App from './App.vue';
import router from './router';
import themes from './styles/themes';
import store from './store';
/* import VueI18n from 'vue-i18n'; */
import './permission'; // permission control
import './registerServiceWorker';

Vue.use(Vuetify, {
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  },
  // iconfont: 'mdi' || 'md' || 'mdi' || 'fa' || 'fa4'
  theme: themes[0],
  customProperties: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
