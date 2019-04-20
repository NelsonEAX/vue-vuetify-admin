<template>
  <v-toolbar
    app
    dense
  >
    <v-toolbar-side-icon @click.stop="toggleNavbar"></v-toolbar-side-icon>
    <breadcrumbs></breadcrumbs>
    <v-spacer></v-spacer>
    <v-btn icon @click="toggleFullScreen()">
      <v-icon>{{ toggleFullScreenIcon }}</v-icon>
    </v-btn>
    <notification/>
    <localization/>
    <profile/>
  </v-toolbar>
</template>

<script>
import Breadcrumbs from './Breadcrumbs.vue';
import Localization from './Localization.vue';
import Notification from './Notification.vue';
import Profile from './Profile.vue';

const toggleFullScreen = () => {
  const doc = window.document;
  const docEl = doc.documentElement;

  const requestFullScreen = docEl.requestFullscreen
    || docEl.mozRequestFullScreen
    || docEl.webkitRequestFullScreen
    || docEl.msRequestFullscreen;
  const cancelFullScreen = doc.exitFullscreen
    || doc.mozCancelFullScreen
    || doc.webkitExitFullscreen
    || doc.msExitFullscreen;

  if (!doc.fullscreenElement
    && !doc.mozFullScreenElement
    && !doc.webkitFullscreenElement
    && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
    return true;
  }

  cancelFullScreen.call(doc);
  return false;
};

export default {
  name: 'Toolbar',
  components: {
    Breadcrumbs,
    Localization,
    Notification,
    Profile
  },
  data() {
    return {};
  },
  methods: {
    toggleFullScreen() {
      this.$store.dispatch('fullscreenToggle', { state: toggleFullScreen() });
    },
    toggleNavbar() {
      this.$store.dispatch('navbarToggle');
    }
  },
  computed: {
    toggleFullScreenIcon() {
      return this.$store.getters.fullscreenState ? 'fullscreen_exit' : 'fullscreen';
    }
  }
};
</script>
