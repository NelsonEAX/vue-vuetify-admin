<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      v-for="(item, index) in themes"
      :key="index"
      text-center
      :class="[{'elevation-5 pa-2': themeIndex == index}, xs]"
      @click.stop="toggleTheme(index)"
    >
      <div
        v-for="(color, title) in item.light"
        :key="title"
        class="white--text"
        :style="{ background: color }"
      >
        {{ title }}
      </div>
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
      default: 'xs6',
    },
  },
  data: () => ({
    themes,
  }),
  computed: {
    ...mapGetters([
      'themeIndex',
    ]),
  },
  methods: {
    toggleTheme(index) {
      if (this.$vuetify.theme.themes !== this.themes[index]) {
        console.log(`Change theme to "${index}"`);
        this.$vuetify.theme.themes.light = this.themes[index].light || this.themes[0].light;
        this.$vuetify.theme.themes.dark = this.themes[index].dark || this.themes[0].dark;
        this.$store.dispatch('ThemeToggle', { index });
      } else {
        console.warn(`"${index}" is current theme `);
      }
    },
  },
};
</script>
