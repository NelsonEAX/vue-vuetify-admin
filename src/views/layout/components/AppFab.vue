<template>
  <v-content
    id="app-fab">
    <v-btn
      v-if="settingsPanelBtn"
      small
      fab
      dark
      falt
      fixed
      top="top"
      right="right"
      class="setting-panel"
      color="red"
      @click="toggleSettingsPanel"
    >
      <v-icon>settings</v-icon>
    </v-btn>
    <v-navigation-drawer
      class="setting-drawer"
      temporary
      right
      hide-overlay
      fixed
      :value="settingsPanelShow"
      @input="stateSettingsPanel"
    >
      <v-toolbar
        :dense="toolbarDense"
        color="blue"
        dark
      >
        <v-toolbar-title>
          {{ $t('settings.title') }}
        </v-toolbar-title>
      </v-toolbar>
      <v-container fluid>
        <v-switch
          :input-value="toolbarDense"
          :label="`${$t('settings.toolbarDense')}: ${toolbarDense ? 'on' : 'off'}`"
          @change="toggleToolbarDense"
        ></v-switch>
        <v-switch
          :input-value="navbarLogo"
          :label="`${$t('settings.navbarLogo')}: ${navbarLogo ? 'on' : 'off'}`"
          @change="toggleNavbarLogo"
        ></v-switch>
        <v-switch
          :input-value="settingsPanelBtn"
          :label="`${$t('settings.settingsBtn')}: ${settingsPanelBtn ? 'on' : 'off'}`"
          @change="toggleSettingsPanelBtn"
        ></v-switch>
        <v-divider></v-divider>
        <v-btn
          color="error"
          @click.stop="setDefaultSettingsPanel"
        >
          {{ $t('settings.default') }}
        </v-btn>
      </v-container>
    </v-navigation-drawer>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppFab',
  data: () => ({
    expanded: true,
    rightDrawer: false,
    snackbar: {
      show: false,
      text: '',
      color: ''
    }
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

<style lang="stylus" scoped>
  #app-fab
    position absolute;
  .setting-panel
    top:50%!important;
    right:0;
    border-radius:0
</style>
