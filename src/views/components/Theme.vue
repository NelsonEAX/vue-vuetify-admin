<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-alert
          :value="true"
          color="info"
          outline
        >
          {{ $t('components.palette') }}
          <a
            class="link-type"
            href="//theme-generator.vuetifyjs.com"
          >Theme Generator</a>
        </v-alert>
      </v-flex>

      <v-flex d-flex xs12 sm4 offset-sm4>
        <app-widget
          :title="$t('ui.theme')"
          class="text-xs-center"
          :padding="false"
          icon="color_lens"
        >
          <div slot="widget-content">
            <v-card-title primary-title>
              {{ $t('components.theme') }}
            </v-card-title>

            <v-card-title primary-title>
              <theme-widget xs="xs3"/>
            </v-card-title>
          </div>
        </app-widget>
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
import ThemeWidget from '@/styles/Theme.vue';
import AppWidget from '@/views/layout/components/AppWidget.vue';

export default {
  name: 'Theme',
  components: { ThemeWidget, AppWidget },
  data: () => ({
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
  }
};
</script>
