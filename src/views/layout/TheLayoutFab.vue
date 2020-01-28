<template>
  <v-content class="layout-fab">
    <v-btn
      v-if="settingsPanelBtn"
      small
      fab
      falt
      fixed
      top="top"
      right="right"
      color="error"
      class="layout-fab__btn"
      @click="toggleSettingsPanel"
    >
      <v-icon>mdi-settings</v-icon>
    </v-btn>
    <v-navigation-drawer
      right
      disable-resize-watcher
      temporary
      fixed
      app
      :value="settingsPanelShow"
      @input="stateSettingsPanel"
    >
      <v-app-bar
        :dense="toolbarDense"
        color="secondary"
        dark
      >
        <v-toolbar-title>
          {{ $t('settings.title') }}
        </v-toolbar-title>
        <v-tooltip left>
          <template v-slot:activator="{on}">
            <v-btn
              absolute
              dark
              fab
              bottom
              right
              small
              color="error"
              v-on="on"
              @click.stop="setDefaultSettingsPanel"
            >
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </template>
          <span>{{ $t('settings.default') }}</span>
        </v-tooltip>
      </v-app-bar>

      <v-subheader class="layout-fab__header">
        {{ $t('settings.version') }}: {{ version }}
      </v-subheader>
      <v-divider />

      <v-expansion-panels accordion>
        <v-expansion-panel>
          <v-expansion-panel-header class="layout-fab__header">
            {{ $t('settings.position') }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-switch
              v-for="(toggle, i) in switches"
              :key="i"
              dense
              hide-details
              color="secondary"
              class="layout-fab__switch"
              :disabled="toggle.value === null"
              :input-value="toggle.value"
              :label="toggle.label"
              @change="toggle.change"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="layout-fab__header">
            {{ $t('settings.theme') }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-theme cols="6" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex';
import AppTheme from '@/views/widget/AppTheme.vue';

export default {
  name: 'TheLayoutFab',
  components: { AppTheme },
  data: () => ({}),
  computed: {
    ...mapGetters([
      'version',
      'themeDark',
      'settingsPanelBtn',
      'settingsPanelShow',
      'toolbarDense',
      'navbarDense',
      'navbarLogo',
      'footerShow',
    ]),
    switches() {
      return [
        {
          value: this.toolbarDense,
          label: `${this.$t('settings.toolbarDense')}: ${this.toolbarDense ? 'on' : 'off'}`,
          change: this.toggleToolbarDense,
        },
        {
          value: this.navbarDense,
          label: `${this.$t('settings.navbarDense')}: ${this.navbarDense ? 'on' : 'off'}`,
          change: this.toggleNavbarDense,
        },
        {
          value: this.navbarLogo,
          label: `${this.$t('settings.navbarLogo')}: ${this.navbarLogo ? 'on' : 'off'}`,
          change: this.toggleNavbarLogo,
        },
        {
          value: this.settingsPanelBtn,
          label: `${this.$t('settings.settingsBtn')}: ${this.settingsPanelBtn ? 'on' : 'off'}`,
          change: this.toggleSettingsPanelBtn,
        },
        {
          value: this.footerShow,
          label: `${this.$t('settings.footer')}: 'off'`,
          change: this.toggleFooterToggle,
        },
        {
          value: this.themeDark,
          label: `${this.$t('settings.dark')}: 'off'`,
          change: this.toogleThemeDark,
        },
      ];
    },
  },
  methods: {
    stateSettingsPanel(state) {
      this.$store.dispatch('SettingsPanelState', { state });
    },
    toggleSettingsPanel() {
      this.$vuetify.goTo(0);
      this.$store.dispatch('SettingsPanelToggle');
    },
    toogleThemeDark() {
      this.$store.dispatch('ThemeDarkToggle');
    },
    toggleToolbarDense() {
      this.$store.dispatch('ToolbarDenseToggle');
    },
    toggleNavbarDense() {
      this.$store.dispatch('NavbarDenseToggle');
    },
    toggleNavbarLogo() {
      this.$store.dispatch('NavbarLogoToggle');
    },
    toggleSettingsPanelBtn() {
      this.$store.dispatch('SettingsPanelBtnToggle');
    },
    toggleFooterToggle() {
      this.$store.dispatch('FooterToggle');
    },
    setDefaultSettingsPanel() {
      this.$store.dispatch('SettingsPanelDefault');
    },
  },
};
</script>

<style>
  .layout-fab {
    position: absolute;
  }
  .layout-fab__btn {
    margin-top: 4px; /* fixme: vertical align */
    top: 50% !important;
    right: 0 !important;
    border-radius: 0 !important;
  }
  .layout-fab__switch {
    margin-top: 4px;
  }
  .layout-fab__header {
    padding: 0 12px 0 12px !important;
  }
  .v-expansion-panel-content__wrap {
    padding:0 12px 12px;
  }
</style>
