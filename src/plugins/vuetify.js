import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import store from '@/store';
import themes from '@/styles/themes';
import i18n from '@/locale/index';
import locales from '@/locale/vuetify';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: false,
    themes: themes[store.getters.themeIndex],
  },
  icons: {
    iconfont: 'mdi', // 'fa4',
  },
  lang: {
    locales,
    current: 'ru',
    t: (key, ...params) => i18n.t(key, params),
  },
});
