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
    ...enLocaleVuetify
  },
  ru: {
    ...ruLocale,
    ...ruLocaleVuetify
  }
};

export const locales = [
  {
    title: 'English',
    locale: 'en'
  },
  {
    title: 'Русский',
    locale: 'ru'
  }
];

const defaultLocale = locales[1];

const i18n = new VueI18n({
  // set locale
  // options: en | ru
  locale: defaultLocale.locale,
  // set locale messages
  messages
});

export function changeLocale(newLocale) {
  return new Promise((resolve, reject) => {
    try {
      if (i18n.locale !== newLocale) {
        console.log(`Change locale to "${newLocale}"`);
        i18n.locale = newLocale || defaultLocale.locale;
      } else {
        console.warn(`"${newLocale}" is current locale `);
      }
      resolve(i18n.locale);
    } catch (e) {
      reject(e);
    }
  });
}

export default i18n;
