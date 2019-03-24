import Vue from 'vue';
import VueI18n from 'vue-i18n';

import enLocaleVuetify from 'vuetify/es5/locale/en'; // vuetify lang
import ruLocaleVuetify from 'vuetify/es5/locale/ru'; // vuetify lang

import enLocale from './en';
import ruLocale from './ru';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...enLocaleVuetify,
  },
  ru: {
    ...ruLocale,
    ...ruLocaleVuetify,
  },
};

const i18n = new VueI18n({
  // set locale
  // options: en | ru
  locale: /* Cookies.get('language') || */ 'ru',
  // set locale messages
  messages,
});

export default i18n;
