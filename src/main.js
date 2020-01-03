import 'normalize.css/normalize.css';
// import '@/styles/variables.scss'; // global variables
// import '@/styles/index.scss'; // global css
import 'vuetify/dist/vuetify.min.css';

/* icons */
// import '@mdi/font/css/materialdesignicons.css';
// import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import 'font-awesome/css/font-awesome.css';
/* fonts */
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import Vue from 'vue';
import vuetify from './plugins/vuetify';
import i18n from './locale'; // Internationalization

import App from './App.vue';
import router from './router';
import store from './store';

import './permission';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
