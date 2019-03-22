import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import Router from './router';
import Store from './store';
//import VueI18n from 'vue-i18n'
import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false;



new Vue({
  Router,
  Store,
  render: h => h(App),
}).$mount('#app');
