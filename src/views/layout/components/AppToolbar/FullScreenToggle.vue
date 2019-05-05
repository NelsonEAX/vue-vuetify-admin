<template>
  <v-btn icon @click="toggleFullScreen()">
    <v-icon>{{ toggleFullScreenIcon }}</v-icon>
  </v-btn>
</template>

<script>
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
  name: 'FullScreenToggle',
  methods: {
    toggleFullScreen() {
      this.$store.dispatch('FullscreenToggle', { state: toggleFullScreen() });
    }
  },
  computed: {
    toggleFullScreenIcon() {
      return this.$store.getters.fullscreenState ? 'fullscreen_exit' : 'fullscreen';
    }
  }
};
</script>
