<template>
  <v-toolbar
    app
    dense
  >
    <v-toolbar-side-icon @click.stop="toggleNavbar"></v-toolbar-side-icon>
    <breadcrumbs/>
    <v-spacer></v-spacer>
    <full-screen-toggle/>
    <notification/>
    <localization/>
    <profile/>
  </v-toolbar>
</template>

<script>
import Breadcrumbs from './Breadcrumbs.vue';
import FullScreenToggle from './FullScreenToggle.vue';
import Localization from './Localization.vue';
import Notification from './Notification.vue';
import Profile from './Profile.vue';

export default {
  name: 'Toolbar',
  components: {
    Breadcrumbs,
    FullScreenToggle,
    Localization,
    Notification,
    Profile
  },
  data() {
    return {};
  },
  methods: {
    toggleNavbar() {
      this.$store.dispatch('navbarToggle');
    }
  }
};
</script>
