<template>
  <v-content
    id="app-fab">
    <v-btn
      id="app-fab-btn"
      v-if="settingsPanelBtn"
      small
      fab
      dark
      falt
      fixed
      top="top"
      right="right"
      color="error"
      @click="toggleSettingsPanel"
    >
      <v-icon>settings</v-icon>
    </v-btn>
    <v-navigation-drawer
      id="app-fab-drawer"
      right
      disable-resize-watcher
      :temporary="temporary"
      :fixed="fixed"
      :app="app"
      :value="settingsPanelShow"
      @input="stateSettingsPanel"
    >
      <v-toolbar
        :dense="toolbarDense"
        color="secondary"
        dark
      >
        <v-toolbar-title>
          {{ $t('settings.title') }}
        </v-toolbar-title>
        <v-tooltip left>
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              absolute
              dark
              fab
              bottom
              right
              small
              color="error"
              @click.stop="setDefaultSettingsPanel"
            >
              <v-icon>refresh</v-icon>
            </v-btn>
          </template>
          <span>{{ $t('settings.default') }}</span>
        </v-tooltip>
      </v-toolbar>

      <v-subheader>{{ $t('settings.position') }}</v-subheader>
      <v-divider></v-divider>

      <v-container fluid>
        <v-switch
          color="secondary"
          :input-value="toolbarDense"
          :label="`${$t('settings.toolbarDense')}: ${toolbarDense ? 'on' : 'off'}`"
          @change="toggleToolbarDense"
          hide-details
        ></v-switch>
        <v-switch
          color="secondary"
          :input-value="navbarLogo"
          :label="`${$t('settings.navbarLogo')}: ${navbarLogo ? 'on' : 'off'}`"
          @change="toggleNavbarLogo"
          hide-details
        ></v-switch>
        <v-switch
          color="secondary"
          :input-value="settingsPanelBtn"
          :label="`${$t('settings.settingsBtn')}: ${settingsPanelBtn ? 'on' : 'off'}`"
          @change="toggleSettingsPanelBtn"
          hide-details
        ></v-switch>
      </v-container>

      <v-subheader>{{ $t('settings.theme') }}</v-subheader>
      <v-divider></v-divider>

      <v-container fluid>

      </v-container>

    </v-navigation-drawer>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppFab',
  data: () => ({
    temporary: false,
    fixed: true,
    app: true
  }),
  computed: {
    ...mapGetters([
      'settingsPanelBtn',
      'settingsPanelShow',
      'toolbarDense',
      'navbarLogo'
    ])
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
    toggleNavbarLogo() {
      this.$store.dispatch('NavbarLogoToggle');
    },
    toggleSettingsPanelBtn() {
      this.$store.dispatch('SettingsPanelBtnToggle');
    },
    setDefaultSettingsPanel() {
      this.$store.dispatch('SettingsPanelDefault');
    }
  }
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
</style>
