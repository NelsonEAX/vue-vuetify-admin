<template>
  <v-container
    container--fluid
    grid-list-md
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        flex-grow-1
        xs12
      >
        <v-alert
          :value="true"
          color="info"
          outlined
        >
          {{ $t('components.palette') }}
          <a
            class="link-type"
            href="//theme-generator.vuetifyjs.com"
          >Theme Generator</a>
        </v-alert>
      </v-flex>

      <v-flex
        flex-grow-1
        xs12
        sm4
        offset-sm4
      >
        <app-widget
          :title="$t('ui.theme')"
          class="text-center"
          :padding="false"
          icon="mdi-palette"
        >
          <div slot="widget-content">
            <v-card-title primary-title>
              {{ $t('components.theme') }}
            </v-card-title>

            <v-card-title primary-title>
              <theme-widget xs="xs3" />
            </v-card-title>
          </div>
        </app-widget>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      align-center
    >
      <v-flex
        xs6
        md2
        text-center
      >
        <v-flex
          v-for="item in items"
          :key="item.color"
          xs12
        >
          <v-btn
            :color="item.color"
          >
            {{ $t(`ui.${item.color}`) }}
          </v-btn>
        </v-flex>
      </v-flex>
      <v-flex
        xs6
        md2
        text-center
      >
        <v-switch
          v-for="item in items"
          :key="item.color"
          v-model="sw_on"
          :color="item.color"
          :label="item.color"
          hide-details
        />
      </v-flex>
      <v-flex
        xs6
        md4
      >
        <v-alert
          v-for="item in items"
          :key="item.color"
          :color="item.color"
          :value="true"
          :icon="item.icon"
          outlined
        >
          This is a {{ item.color }} outline alert.
        </v-alert>
      </v-flex>
      <v-flex
        xs6
        md4
      >
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
      // { color: 'default', icon: 'mdi-check-circle' },
      { color: 'primary', icon: 'mdi-check-circle' },
      { color: 'secondary', icon: 'mdi-check-circle' },
      { color: 'accent', icon: 'mdi-check-circle' },
      { color: 'success', icon: 'mdi-check-circle' },
      { color: 'error', icon: 'mdi-alert' },
      { color: 'warning', icon: 'mdi-alert' },
      { color: 'info', icon: 'mdi-alert-circle' },
    ],
  }),
  computed: {
    ...mapGetters([
      'toolbarDense',
    ]),
  },
};
</script>
