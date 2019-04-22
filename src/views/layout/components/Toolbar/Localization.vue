<template>
  <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
    <v-btn icon large flat slot="activator">
      <v-icon>language</v-icon>
    </v-btn>
    <v-list class="pa-0">
      <v-list-tile
        v-for="(item,index) in locales"
        @click="changeLocale(item.locale)"
        ripple="ripple"
        :target="item.target" rel="noopener" :key="index">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import { Locales, changeLocale } from '@/api/localization';

export default {
  name: 'Localization',
  data() {
    return {
      locales: Locales
    };
  },
  methods: {
    changeLocale
  }
};
</script>
