<template>
  <v-toolbar
    id="app-toolbar"
    app
    :dense="toolbarDense"
  >
    <v-toolbar-side-icon
      id="hamburger-container"
      @click.stop="toggleNavbar"
    ></v-toolbar-side-icon>
    <breadcrumbs id="breadcrumbs-container"/>
    <v-spacer></v-spacer>
    <full-screen-toggle id="fullscreen-container"/>
    <notification id="notification-container"/>
    <localization id="localization-container"/>
    <profile id="profile-container"/>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';
import Breadcrumbs from './Breadcrumbs.vue';
import FullScreenToggle from './FullScreenToggle.vue';
import Localization from './Localization.vue';
import Notification from './Notification.vue';
import Profile from './Profile.vue';

export default {
  name: 'AppToolbar',
  components: {
    Breadcrumbs,
    FullScreenToggle,
    Localization,
    Notification,
    Profile
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      'toolbarDense'
    ])
  },
  methods: {
    toggleNavbar() {
      this.$store.dispatch('NavbarToggle');
    }
  }
};
</script>
