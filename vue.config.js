'use strict';
const path = require('path');
const defaultSettings = require('./src/settings.js');

function resolve(dir) {
  return path.join(__dirname, dir);
};

const name = defaultSettings.title || 'Vue Vuetify Admin'; // page title

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-vuetify-admin/'
    : '/',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
};
