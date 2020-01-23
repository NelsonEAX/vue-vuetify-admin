<template>
  <v-row dense>
    <v-col
      v-for="(item, index) in themes"
      :key="index"
      :cols="cols"
      :class="['text-center', {'elevation-5 pa-2': themeIndex === index}]"
      @click.stop="toggleTheme(index)"
    >
      <div
        v-for="(color, title) in item.light"
        :key="title"
        class="white--text"
        :style="{background: color}"
      >
        {{ title }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import themes from '@/plugins/vuetifyThemes';

export default {
  name: 'AppTheme',
  props: {
    cols: {
      type: String,
      default: '6',
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
      this.$store.dispatch('ThemeToggle', { index, vuetify: this.$vuetify });
    },
  },
};
</script>
