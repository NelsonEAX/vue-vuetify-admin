export const Locales = [
  {
    title: 'English',
    locale: 'en'
  },
  {
    title: 'Русский',
    locale: 'ru'
  }
];

export function changeLocale(lang) {
  if (this.$i18n.locale !== lang) {
    console.info(`Change locale to "${lang}"`);
    this.$i18n.locale = lang;
  } else {
    console.info(`"${lang}" is current locale `);
  }
}
