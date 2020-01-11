<template>
  <v-content
    id="app-fab"
  >
    <v-btn
      v-if="settingsPanelBtn"
      id="app-fab-btn"
      small
      fab
      falt
      fixed
      top="top"
      right="right"
      color="error"
      @click="toggleSettingsPanel"
    >
      <v-icon>mdi-settings</v-icon>
    </v-btn>
    <v-navigation-drawer
      id="app-fab-drawer"
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

      <v-subheader>{{ $t('settings.position') }}</v-subheader>
      <v-divider />

      <v-container class="container--fluid">
        <v-switch
          v-for="(toggle, i) in switches"
          :key="i"
          dense
          hide-details
          color="secondary"
          :disabled="toggle.value === null"
          :input-value="toggle.value"
          :label="toggle.label"
          @change="toggle.change"
        />
      </v-container>

      <v-subheader>{{ $t('settings.theme') }}</v-subheader>
      <v-divider />

      <v-container>
        <theme cols="6" />
      </v-container>
    </v-navigation-drawer>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex';
import Theme from '@/styles/Theme.vue';

export default {
  name: 'AppFab',
  components: { Theme },
  data: () => ({}),
  computed: {
    ...mapGetters([
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
        // Expected ----------------------------------------------
        {
          value: null,
          label: `${this.$t('settings.footer')}: 'off'`,
          change: () => {},
        },
        {
          value: null,
          label: `${this.$t('settings.dark')}: 'off'`,
          change: () => {},
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
    setDefaultSettingsPanel() {
      this.$store.dispatch('SettingsPanelDefault');
    },
  },
};
</script>

<style lang="scss" scoped>
  #app-fab {
    position: absolute;
    #app-fab-btn {
      top: 50%!important;
      right: 0;
      border-radius: 0
    }
  }
  .v-input--selection-controls {
    margin-top: 4px;
  }
</style>
