<template>
  <v-app-bar
    id="app-toolbar"
    app
    :dense="toolbarDense"
  >
    <v-app-bar-nav-icon
      id="hamburger-container"
      @click.stop="toggleNavbar"
    >
      <v-icon>{{ toggleNavbarIcon }}</v-icon>
    </v-app-bar-nav-icon>
    <breadcrumbs id="breadcrumbs-container" />
    <v-spacer />
    <full-screen-toggle id="fullscreen-container" />
    <notification id="notification-container" />
    <localization id="localization-container" />
    <profile id="profile-container" />
  </v-app-bar>
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
    Profile,
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      'toolbarDense',
      'navbarShow',
    ]),
    toggleNavbarIcon() {
      return this.navbarShow ? 'mdi-format-indent-decrease' : 'mdi-format-indent-increase';
    },
  },
  methods: {
    toggleNavbar() {
      this.$store.dispatch('NavbarToggle');
    },
  },
};
</script>
