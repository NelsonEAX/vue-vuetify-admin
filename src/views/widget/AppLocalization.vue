<template>
  <v-menu
    offset-y
    origin="center center"
    :nudge-bottom="10"
    transition="scale-transition"
  >
    <template v-slot:activator="{on}">
      <v-btn
        icon
        text
        v-on="on"
      >
        <v-icon>
          mdi-translate
        </v-icon>
      </v-btn>
    </template>
    <v-list class="pa-0">
      <v-list-item
        v-for="(item,index) in locales"
        :key="index"
        ripple="ripple"
        :target="item.target"
        rel="noopener"
        @click="setLocale(item.locale)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { locales } from '@/locale';

export default {
  name: 'AppLocalization',
  data: () => ({
    locales,
  }),
  methods: {
    async setLocale(locale) {
      await this.$store.dispatch('SetLocale', { locale });
    },
  },
};
</script>
