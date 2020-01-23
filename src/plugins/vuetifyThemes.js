/**
 * vva v0.0.5
 * (c) 2019 NelsonEAX
 * @license MIT
 */

import colors from 'vuetify/es5/util/colors';

const dark = {
  primary: '#2196F3',
  secondary: '#424242',
  accent: '#FF4081',
  success: '#4CAF50',
  error: '#FF5252',
  warning: '#FB8C00',
  info: '#2196F3',
};

/**
 * Vuetify theme options.
 */
const themes = [
  {
    light: {
      primary: '#1976D2',
      secondary: '#424242',
      accent: '#82B1FF',
      success: '#4CAF50',
      error: '#FF5252',
      warning: '#FB8C00',
      info: '#2196F3',
    },
    dark,
  },
  {
    light: {
      primary: colors.blue.darken2, // #1976D2
      secondary: colors.grey.darken3, // #424242
      accent: colors.blue.accent1, // #82B1FF
      success: colors.green.base, // #4CAF50
      error: colors.red.accent2, // #FF5252
      warning: colors.amber.base, // #FFC107
      info: colors.blue.base, // #2196F3
    },
    dark,
  },
  {
    light: {
      primary: colors.blue.base,
      secondary: colors.blueGrey.base,
      accent: colors.lightBlue.base,
      success: colors.green.base,
      error: colors.red.base,
      warning: colors.amber.base,
      info: colors.cyan.base,
    },
    dark,
  },
  {
    light: {
      primary: colors.blue.darken3,
      secondary: colors.blueGrey.darken3,
      accent: colors.lightBlue.darken3,
      success: colors.green.darken3,
      error: colors.red.darken3,
      warning: colors.amber.darken3,
      info: colors.cyan.darken3,
    },
    dark,
  },
  {
    light: {
      primary: colors.amber.darken3,
      secondary: colors.green.base,
      accent: colors.indigo.base,
      success: colors.lime.darken3,
      error: colors.red.base,
      warning: colors.deepOrange.base,
      info: colors.cyan.base,
    },
    dark,
  },
  {
    light: {
      primary: colors.cyan.base,
      secondary: colors.purple.base,
      accent: colors.lightBlue.base,
      success: colors.teal.base,
      error: colors.red.base,
      warning: colors.orange.base,
      info: colors.indigo.base,
    },
    dark,
  },
  {
    light: {
      primary: colors.indigo.base,
      secondary: colors.cyan.base,
      accent: colors.red.base,
      success: colors.teal.base,
      error: colors.pink.base,
      warning: colors.purple.base,
      info: colors.deepPurple.base,
    },
    dark,
  },
  {
    light: {
      primary: colors.red.base,
      secondary: colors.cyan.base,
      accent: colors.blueGrey.base,
      success: colors.teal.base,
      error: colors.brown.base,
      warning: colors.amber.base,
      info: colors.indigo.base,
    },
    dark,
  },
];
export default themes;
