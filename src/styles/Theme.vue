<template>
  <v-layout row wrap>
    <v-flex
      text-xs-center
      v-for="(item, index) in themes"
      :key="index"
      @click.stop="toggleTheme(index)"
      :class="[{'elevation-10 pa-2': themeIndex == index}, xs]"
    >
      <div
        v-for="(color, title) in item"
        :key="title"
        class="white--text"
        :style="{ background: color }"
      >{{title}}</div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import themes from './themes';

export default {
  name: 'Theme',
  props: {
    xs: {
      type: String,
      default: 'xs6'
    }
  },
  data: () => ({
    themes
  }),
  computed: {
    ...mapGetters([
      'themeIndex'
    ])
  },
  methods: {
    toggleTheme(index) {
      if (this.$vuetify.theme !== this.themes[index]) {
        console.log(`Change theme to "${index}"`);
        this.$vuetify.theme = this.themes[index] || this.themes[0];
        this.$store.dispatch('ThemeToggle', { index });
      } else {
        console.warn(`"${index}" is current theme `);
      }
    }
  }
};
</script>
