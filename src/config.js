const packageJson = require('../package.json');

module.exports = {
  title: packageJson.title,

  /**
   * @type {String} '0.0.1'
   * @description Application version.
   * After the release of the new version, it is reset to the default settings.
   */
  version: packageJson.version,

  /**
   * @type {String} 'localStorage' | 'sessionStorage'
   * @description Storage for user settings and sessions.
   */
  storage: 'localStorage',

  /**
   * @type {String} 'vva_'
   * @description Key prefix for data in storage.
   */
  prefix: 'vva_',

  /**
   * @type {Number} 604800
   * @description User session storage time in seconds.
   * Default 7 days
   */
  ttl: /* 7 * 24 * 60 * */ 60,

  /**
   * @type {Object}
   * @description Default application settings.
   */
  settings: {
    locale: 'en',
    dense: true,
    footer: false,
    navbar: {
      show: true,
      dense: false,
      logo: false,
    },
    fullscreen: {
      show: false,
      btn: true,
    },
    settingsPanel: {
      show: false,
      btn: true,
    },
    theme: {
      index: 0,
      dark: false,
    },
  },

  /**
   * @type {boolean} true | false
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  // errorLog: 'production',
};
