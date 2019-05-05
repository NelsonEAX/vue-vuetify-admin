<template>
  <v-app id="inspire">
    <app-drawer/>
    <app-toolbar/>
    <app-main/>
    <app-fab/>
  </v-app>
</template>

<script>
import {
  AppDrawer, AppToolbar, AppMain, AppFab
} from './components';

export default {
  name: 'Layout',
  components: {
    AppDrawer,
    AppToolbar,
    AppMain,
    AppFab
  },
  data: () => ({})
};
</script>
