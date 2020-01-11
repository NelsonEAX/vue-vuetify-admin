<template>
  <div class="v-application--wrap">
    <app-drawer />
    <app-toolbar />
    <app-content />
    <app-fab />
    <app-to-top-fab />
  </div>
</template>

<script>
import {
  AppDrawer, AppToolbar, AppContent, AppFab, AppToTopFab,
} from './components';

export default {
  name: 'Layout',
  components: {
    AppDrawer,
    AppToolbar,
    AppContent,
    AppFab,
    AppToTopFab,
  },
  data: () => ({}),
};
</script>
