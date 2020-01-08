# vue-vuetify-admin

<p align="center">
  <img width="100" src="https://camo.githubusercontent.com/728ce9f78c3139e76fa69925ad7cc502e32795d2/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67">
  <img width="100" src="https://github.com/NelsonEAX/vue-vuetify-admin/blob/master/public/img/icons/Android/Icon-192.png?raw=true">
  <img width="100" src="https://camo.githubusercontent.com/41759602ad091b02adf7b4986b55b0a870471b98/68747470733a2f2f63646e2e767565746966796a732e636f6d2f696d616765732f6c6f676f732f6c6f676f2e737667">
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.11-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/vuetifyjs/vuetify">
    <img src="https://img.shields.io/badge/vuetify-2.1.15-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://travis-ci.org/NelsonEAX/vue-vuetify-admin" rel="nofollow">
    <img src="https://travis-ci.org/NelsonEAX/vue-vuetify-admin.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/NelsonEAX/vue-vuetify-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://github.com/NelsonEAX/vue-vuetify-admin/releases">
    <img src="https://img.shields.io/github/release/NelsonEAX/vue-vuetify-admin.svg" alt="GitHub release">
  </a>
  <a href="https://t.me/vue_vuetify_admin">
    <img src="https://img.shields.io/badge/telegram-join%20chat-blue.svg" alt="Telegram">
  </a>
</p>

## Introduction

[vue-vuetify-admin](https://nelsoneax.github.io/vue-vuetify-admin/) is a production-ready front-end solution 
for admin interfaces. It based on [vue](https://github.com/vuejs/vue) and use the 
material design component framework [vuetify](https://github.com/vuetifyjs/vuetify).

It is a magical vue admin based on the newest development stack of vue, built-in i18n solution, 
typical templates for enterprise applications, lots of awesome features. It helps you build a 
large complex Single-Page Applications. I believe whatever your needs are, this project will help you.

- [Preview](https://NelsonEAX.github.io/vue-vuetify-admin)

**The current version is `v0.0.1-alpha` build on `vue-cli`. If you find a problem, please put 
[issue](https://github.com/NelsonEAX/vue-vuetify-admin/issues/new).**

**This project does not support low version browsers (e.g. IE). Please add polyfill by yourself.**

## Preparation

You need to install [node](https://nodejs.org/) and [git](https://git-scm.com/) locally. 
The project is based on [ES2015+](https://es6.ruanyifeng.com/), 
[vue](https://cn.vuejs.org/index.html), 
[vuex](https://vuex.vuejs.org/zh-cn/), 
[vue-router](https://router.vuejs.org/zh-cn/), 
[vue-cli](https://github.com/vuejs/vue-cli) , 
[axios](https://github.com/axios/axios) and 
[vuetify](https://github.com/vuetifyjs/vuetify), 
all request data is simulated using [Mock.js](https://github.com/nuysoft/Mock).
Understanding and learning this knowledge in advance will greatly help the use of this project.

<p align="center">
  <img width="900" src="https://github.com/NelsonEAX/vue-vuetify-admin/blob/master/docs/img/Dashboard.png?raw=true">
</p>

## Features

```
- Login / Logout

- Permission Authentication
  - Page permission [expected]
  - Directive permission [expected]
  - Permission configuration page [expected]
  - Two-step login

- Multi-environment build
  - dev sit stage prod [expected]

- Global Features
  - I18n
  - Multiple dynamic themes
  - Dynamic sidebar (supports multi-level routing)
  - Dynamic breadcrumb
  - Tags-view (Tab page Support right-click operation) [expected]
  - Svg Sprite [expected]
  - Mock data
  - Screenfull
  - Responsive Sidebar

- Editor
  - Rich Text Editor [expected]
  - Markdown Editor [expected]
  - JSON Editor [expected]

- Excel
  - Export Excel [expected]
  - Upload Excel [expected]
  - Visualization Excel [expected]
  - Export zip [expected]

- Table
  - Dynamic Table [expected]
  - Drag And Drop Table [expected]
  - Inline Edit Table [expected]

- Error Page
  - 301
  - 401
  - 403
  - 404
  - 500

- Components
  - Avatar Upload
  - Back To Top
  - Drag Dialog [expected]
  - Drag Select [expected]
  - Drag Kanban
  - Drag List [expected]
  - SplitPane 
  - Dropzone 
  - Sticky
  - CountTo

- Advanced Example [expected]
- Error Log [expected]
- Dashboard
- Guide Page
- ECharts
- Clipboard [expected]
- Markdown to html
```

## Getting started

```bash
# clone the project
git clone https://github.com/NelsonEAX/vue-vuetify-admin.git

# enter the project directory
cd vue-vuetify-admin

# install dependency
npm install

# develop
npm run serve
```

This will automatically open http://localhost:8080

## Build and Test

```bash
# build
npm run build

# run e2e test
npm run test:e2e

# run unit test
npm run test:unit
```

Refer to [Documentation](https://NelsonEAX.github.io/vue-vuetify-admin-site/guide/essentials/deploy.html) for more information

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/NelsonEAX/vue-vuetify-admin/releases).

## Online Demo

[Preview](https://NelsonEAX.github.io/vue-vuetify-admin)

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## License

[MIT](https://github.com/NelsonEAX/vue-vuetify-admin/blob/master/LICENSE)

Copyright (c) 2019-present NelsonEAX
