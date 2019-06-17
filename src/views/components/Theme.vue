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

          <v-card-title primary-title>
            <v-flex
              xs3
              text-xs-center
              v-for="(item, index) in themes"
              :key="index"
              @click.stop="changeTheme(index)"
            >
              <div class="white--text" :style="{ background: item.primary }">primary</div>
              <div class="white--text" :style="{ background: item.secondary }">secondary</div>
              <div class="white--text" :style="{ background: item.accent }">accent</div>
              <div class="white--text" :style="{ background: item.success }">success</div>
              <div class="white--text" :style="{ background: item.error }">error</div>
              <div class="white--text" :style="{ background: item.warning }">warning</div>
              <div class="white--text" :style="{ background: item.info }">info</div>
            </v-flex>
          </v-card-title>

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
import themes from '@/styles/themes';

export default {
  name: 'Theme',
  data: () => ({
    colors,
    themes,
    sw_on: true,
    items: [
      // { color: 'default', icon: 'check_circle' },
      { color: 'primary', icon: 'check_circle' },
      { color: 'secondary', icon: 'check_circle' },
      { color: 'accent', icon: 'check_circle' },
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
    changeTheme(index) {
      console.log(this.$vuetify.theme);
      this.$vuetify.theme = this.themes[index];
    }
  }
};
</script>
