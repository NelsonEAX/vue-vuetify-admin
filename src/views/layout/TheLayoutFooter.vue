<template>
  <v-footer
    v-if="footerShow"
    app
    padless
    inset
  >
    <v-card
      flat
      tile
      width="100%"
      class="secondary text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <v-icon
            size="24px"
            class="white--text"
          >
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider />

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vue Vuetify Admin</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheLayoutFooter',
  components: {},
  data: () => ({
    icons: [
      'mdi-home',
      'mdi-email',
      'mdi-calendar',
      'mdi-delete',
    ],
  }),
  computed: {
    ...mapGetters([
      'footerShow',
    ]),
  },
  methods: {},
};
</script>
