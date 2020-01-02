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
      :temporary="temporary"
      :fixed="fixed"
      :app="app"
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
          <template v-slot:activator="{ on }">
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

      <v-container container--fluid>
        <v-switch
          color="secondary"
          :input-value="toolbarDense"
          :label="`${$t('settings.toolbarDense')}: ${toolbarDense ? 'on' : 'off'}`"
          hide-details
          @change="toggleToolbarDense"
        />
        <v-switch
          color="secondary"
          :input-value="navbarLogo"
          :label="`${$t('settings.navbarLogo')}: ${navbarLogo ? 'on' : 'off'}`"
          hide-details
          @change="toggleNavbarLogo"
        />
        <v-switch
          color="secondary"
          :input-value="settingsPanelBtn"
          :label="`${$t('settings.settingsBtn')}: ${settingsPanelBtn ? 'on' : 'off'}`"
          hide-details
          @change="toggleSettingsPanelBtn"
        />
      </v-container>

      <v-subheader>{{ $t('settings.theme') }}</v-subheader>
      <v-divider />

      <v-container grid-list-md>
        <theme xs="xs6" />
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
  data: () => ({
    temporary: true,
    fixed: true,
    app: true,
  }),
  computed: {
    ...mapGetters([
      'settingsPanelBtn',
      'settingsPanelShow',
      'toolbarDense',
      'navbarLogo',
    ]),
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
</style>
