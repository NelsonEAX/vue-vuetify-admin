import { vuetifyThemeToggle, vuetifyThemeDarkToggle } from '@/plugins/vuetifyThemes';

const settingsDefault = {
  language: 'ru',
  dense: true,
  footer: false,
  navbar: {
    dense: false,
    show: true,
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
};

const settings = {
  state: JSON.parse(JSON.stringify(settingsDefault)), // Deep Clone

  getters: {
    language: (state) => state.language,
    toolbarDense: (state) => state.dense,
    navbarDense: (state) => state.navbar.dense,
    navbarShow: (state) => state.navbar.show,
    navbarLogo: (state) => state.navbar.logo,
    fullscreenBtn: (state) => state.fullscreen.btn,
    fullscreenShow: (state) => state.fullscreen.show,
    settingsPanelBtn: (state) => state.settingsPanel.btn,
    settingsPanelShow: (state) => state.settingsPanel.show,
    footerShow: (state) => state.footer,
    themeIndex: (state) => state.theme.index,
    themeDark: (state) => state.theme.dark,
  },

  mutations: {
    SET_SETTINGS: (state, payload) => {
      state.language = payload.language || state.language;
      state.dense = typeof payload.dense === 'boolean' ? payload.dense : state.dense;
      state.navbar = payload.navbar || state.navbar;
      state.fullscreen = payload.fullscreen || state.fullscreen;
      state.settingsPanel = payload.settingsPanel || state.settingsPanel;
      state.theme = payload.theme || state.theme || 0;
      state.footer = payload.footer || state.footer;
    },
    SET_SETTINGS_DEFAULT: (state, payload) => {
      state.language = payload.language;
      state.dense = payload.dense;
      state.navbar = payload.navbar;
      state.fullscreen = payload.fullscreen;
      state.settingsPanel = payload.settingsPanel;
      state.theme = payload.theme;
      state.footer = payload.footer;
    },
    LANGUAGE_TOGGLE: (state, payload) => {
      state.language = payload.state;
    },
    THEME_TOGGLE: (state, payload) => {
      state.theme.index = payload.index;
    },
    THEME_DARK_TOGGLE: (state) => {
      state.theme.dark = !state.theme.dark;
    },
    TOOLBAR_DENSE_TOGGLE: (state) => {
      state.dense = !state.dense;
    },
    NAVBAR_DENSE_TOGGLE: (state) => {
      state.navbar.dense = !state.navbar.dense;
    },
    NAVBAR_LOGO_TOGGLE: (state) => {
      state.navbar.logo = !state.navbar.logo;
    },
    NAVBAR_TOGGLE: (state) => {
      state.navbar.show = !state.navbar.show;
    },
    NAVBAR_STATE: (state, payload) => {
      state.navbar.show = payload.state;
    },
    FULLSCREEN_TOGGLE: (state, payload) => {
      state.fullscreen.show = payload.state;
    },
    FULLSCREEN_BTN: (state, payload) => {
      state.fullscreen.btn = payload.state;
    },
    SETTINGS_PANEL_BTN_TOGGLE: (state) => {
      state.settingsPanel.btn = !state.settingsPanel.btn;
    },
    SETTINGS_PANEL_TOGGLE: (state) => {
      state.settingsPanel.show = !state.settingsPanel.show;
    },
    SETTINGS_PANEL_STATE: (state, payload) => {
      state.settingsPanel.show = payload.state;
    },
    FOOTER_TOGGLE: (state) => {
      state.footer = !state.footer;
    },
  },
  actions: {
    LanguageToggle: async (context, payload) => {
      context.commit('LANGUAGE_TOGGLE', payload);
    },
    ThemeToggle: async (context, payload) => {
      context.commit('THEME_TOGGLE', payload);
      vuetifyThemeToggle(payload.vuetify, payload.index);
    },
    ThemeDarkToggle: async (context, payload) => {
      await context.commit('THEME_DARK_TOGGLE');
      vuetifyThemeDarkToggle(payload.vuetify, context.state.theme.dark);
    },
    ToolbarDenseToggle: async (context) => {
      context.commit('TOOLBAR_DENSE_TOGGLE');
    },
    NavbarDenseToggle: async (context) => {
      context.commit('NAVBAR_DENSE_TOGGLE');
    },
    NavbarLogoToggle: async (context, payload) => {
      context.commit('NAVBAR_LOGO_TOGGLE', payload);
    },
    NavbarToggle: async (context, payload) => {
      context.commit('NAVBAR_TOGGLE', payload);
    },
    NavbarState: async (context, payload) => {
      context.commit('NAVBAR_STATE', payload);
    },
    FullscreenToggle: async (context, payload) => {
      context.commit('FULLSCREEN_TOGGLE', payload);
    },
    FullscreenBtn: async (context, payload) => {
      context.commit('FULLSCREEN_BTN', payload);
    },
    SettingsPanelBtnToggle: async (context, payload) => {
      context.commit('SETTINGS_PANEL_BTN_TOGGLE', payload);
    },
    SettingsPanelToggle: async (context, payload) => {
      context.commit('SETTINGS_PANEL_TOGGLE', payload);
    },
    SettingsPanelState: async (context, payload) => {
      context.commit('SETTINGS_PANEL_STATE', payload);
    },
    SettingsPanelDefault: async (context, payload) => {
      context.commit('SET_SETTINGS_DEFAULT', JSON.parse(JSON.stringify(settingsDefault)));
      vuetifyThemeToggle(payload.vuetify, settingsDefault.theme.index);
      vuetifyThemeDarkToggle(payload.vuetify, settingsDefault.theme.dark);
    },
    FooterToggle: async (context) => {
      context.commit('FOOTER_TOGGLE');
    },
  },
};

export default settings;
