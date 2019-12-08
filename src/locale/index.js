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

const i18n = new VueI18n({
  // set locale
  // options: en | ru
  locale: defaultLocale.locale,
  // set locale messages
  messages,
});

export async function changeLocale(newLocale, store) {
  if (i18n.locale !== newLocale) {
    console.log(`Change locale to "${newLocale}"`);
    i18n.locale = newLocale || defaultLocale.locale;

    store.dispatch('LanguageToggle', { state: i18n.locale });
  } else {
    console.warn(`"${newLocale}" is current locale `);
  }
}

export default i18n;
