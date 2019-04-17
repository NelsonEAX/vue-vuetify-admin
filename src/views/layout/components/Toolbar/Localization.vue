<template>
  <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
    <v-btn icon large flat slot="activator">
      <v-icon>language</v-icon>
    </v-btn>
    <v-list class="pa-0">
      <v-list-tile
        v-for="(item,index) in langitems"
        @click="item.click"
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
export default {
  name: 'Localization',
  data() {
    return {
      langitems: [
        {
          title: 'English',
          click: e => {
            console.log(e);
            this.$i18n.locale = 'en';
          }
        },
        {
          title: 'Русский',
          click: e => {
            console.log(e);
            this.$i18n.locale = 'ru';
          }
        }
      ]
    };
  }
};
</script>
