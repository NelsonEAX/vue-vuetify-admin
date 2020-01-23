/**
 * vva v0.0.5
 * (c) 2019 NelsonEAX
 * @license MIT
 */

import Vue from 'vue';
import VueI18n from 'vue-i18n';

import vuetify from '@/locale/vuetify';
import en from './en';
import ru from './ru';

Vue.use(VueI18n);

const messages = {
  en: {
    ...en,
    $vuetify: vuetify.en,
  },
  ru: {
    ...ru,
    $vuetify: vuetify.ru,
  },
};

/**
 * Available locales
 */
export const locales = [
  {
    title: 'English',
    locale: 'en',
    abbr: 'ENG',
  },
  {
    title: 'Русский',
    locale: 'ru',
    abbr: 'RUS',
  },
];

const defaultLocale = locales[1];

/**
 * VueI18n instance
 */
const i18n = new VueI18n({
  // set locale options: en | ru
  locale: defaultLocale.locale,
  // set locale messages
  messages,
});

/**
 * Set locale to new value at Vue and Vuex.
 *
 * @param {Boolean} newLocale themeDark new value
 */
export async function setLocale(locale) {
  if (i18n.locale !== locale) {
    console.log(`[Locale] Set to "${locale}"`);
    i18n.locale = locale || defaultLocale.locale;
  } else {
    console.warn(`[Locale] "${locale}" is current`);
  }
}

export default i18n;
