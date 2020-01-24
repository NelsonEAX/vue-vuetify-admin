<template>
  <v-container class="container--fluid grid-list-md">
    <v-row no-gutters>
      <v-col cols="12">
        <v-alert
          :value="true"
          color="info"
          outlined
          dense
        >
          {{ $t('components.palette') }}
          <a
            class="link-type"
            href="//theme-generator.vuetifyjs.com"
          >Theme Generator</a>
        </v-alert>
      </v-col>

      <v-col
        md="4"
        offset-md="4"
        sm="8"
        offset-sm="2"
        cols="12"
      >
        <app-widget
          :title="$t('ui.theme')"
          class="text-center"
          icon="mdi-palette"
          padding-hide
        >
          <div slot="widget-content">
            <v-card-title>
              {{ $t('components.theme') }}
            </v-card-title>

            <v-card-text>
              <app-theme cols="3" />
            </v-card-text>
          </div>
        </app-widget>
      </v-col>
    </v-row>

    <v-row align="center">
      <v-col
        cols="6"
        md="2"
        class="text-center"
      >
        <v-col
          v-for="item in items"
          :key="item.color"
          cols="12"
        >
          <v-btn
            :color="item.color"
            small
          >
            {{ $t(`ui.${item.color}`) }}
          </v-btn>
        </v-col>
      </v-col>
      <v-col
        cols="6"
        md="2"
        class="text-center"
      >
        <v-switch
          v-for="item in items"
          :key="item.color"
          v-model="turn"
          :color="item.color"
          :label="item.color"
          hide-details
        />
      </v-col>
      <v-col
        cols="6"
        md="4"
      >
        <v-alert
          v-for="item in items"
          :key="item.color"
          :color="item.color"
          :value="true"
          :icon="item.icon"
          outlined
          dense
        >
          This is a {{ item.color }} outline alert.
        </v-alert>
      </v-col>
      <v-col
        cols="6"
        md="4"
      >
        <v-alert
          v-for="item in items"
          :key="item.color"
          :color="item.color"
          :value="true"
          :icon="item.icon"
          dense
        >
          This is a {{ item.color }} alert.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppTheme from '@/views/widget/AppTheme.vue';
import AppWidget from '@/views/widget/AppWidget.vue';

export default {
  name: 'Theme',
  components: { AppTheme, AppWidget },
  data: () => ({
    turn: true,
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
};
</script>
