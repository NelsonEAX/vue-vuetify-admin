<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-alert
          :value="true"
          color="info"
          outline
        >
          {{ $t('components.baseOn') }}
          <a
            class="link-type"
            href="//vuetifyjs.com/en/framework/theme"
          >vue-i18n</a>
        </v-alert>
      </v-flex>

      <v-flex d-flex xs12 sm4 offset-sm4>
        <v-card>
          <v-toolbar
            :dense="toolbarDense"
          >
            <v-toolbar-side-icon>
              <v-icon>color_lens</v-icon>
            </v-toolbar-side-icon>
            <v-toolbar-title>{{ $t('ui.theme') }}</v-toolbar-title>
          </v-toolbar>

          <v-card-title primary-title>
            <div>
              <div class="headline">Top western road trips</div>
              <span class="grey--text">1,000 miles of wonder</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat @click.stop="changeTheme()">Share</v-btn>
            <v-btn flat color="purple">Explore</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap align-center>
      <v-flex xs6 md2 text-xs-center>
        <v-flex xs12
                v-for="item in items"
                :key="item.color">
          <v-btn
            :color="item.color"
          >{{ $t(`ui.${item.color}`) }}</v-btn>
        </v-flex>
      </v-flex>
      <v-flex xs6 md2 text-xs-center>
        <v-switch
          v-for="item in items"
          :key="item.color"
          :color="item.color"
          :label="item.color"
          v-model="sw_on"
          hide-details
        ></v-switch>
      </v-flex>
      <v-flex xs6 md4>
        <v-alert
          v-for="item in items"
          :key="item.color"
          :color="item.color"
          :value="true"
          :icon="item.icon"
          outline
        >
          This is a {{ item.color }} outline alert.
        </v-alert>
      </v-flex>
      <v-flex xs6 md4>
        <v-alert
          v-for="item in items"
          :key="item.color"
          :color="item.color"
          :value="true"
          :icon="item.icon"
        >
          This is a {{ item.color }} alert.
        </v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import colors from 'vuetify/es5/util/colors';

export default {
  name: 'Theme',
  data: () => ({
    colors: colors,
    sw_on: true,
    items: [
      // { color: 'default', icon: 'check_circle' },
      { color: 'primary', icon: 'check_circle' },
      { color: 'secondary', icon: 'check_circle' },
      { color: 'success', icon: 'check_circle' },
      { color: 'error', icon: 'warning' },
      { color: 'warning', icon: 'priority_high' },
      { color: 'info', icon: 'info' }
    ]
  }),
  computed: {
    ...mapGetters([
      'toolbarDense'
    ])
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.primary = this.colors['cyan'].base;
      this.$vuetify.dark = true;
    }
  }
};
</script>
