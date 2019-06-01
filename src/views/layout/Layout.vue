<template>
  <v-app id="inspire">
    <app-drawer/>
    <app-toolbar/>
    <app-main/>
    <app-fab/>
    <app-to-top-fab/>
  </v-app>
</template>

<script>
import {
  AppDrawer, AppToolbar, AppMain, AppFab, AppToTopFab
} from './components';

export default {
  name: 'Layout',
  components: {
    AppDrawer,
    AppToolbar,
    AppMain,
    AppFab,
    AppToTopFab
  },
  data: () => ({})
};
</script>
