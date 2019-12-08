<template>
  <v-navigation-drawer
    id="app-drawer"
    dark
    fixed
    app
    :value="navbarShow"
    width="250"
    @input="stateNavbarShow"
  >
    <v-app-bar
      v-if="navbarLogo"
      :dense="toolbarDense"
      dark
    >
      <v-toolbar-title class="text-center">
        <v-avatar
          size="32px"
          tile
        >
          <img
            src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
            alt="Vuetify"
          >
        </v-avatar>
        <span>{{ $t('toolbar.appname') }}</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-divider />
    <app-drawer-list
      :routes="permissionRoutes"
      :icon-show="true"
    />
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import AppDrawerList from './AppDrawerList.vue';

export default {
  name: 'AppDrawer',
  components: {
    AppDrawerList,
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      'permissionRoutes',
      'navbarShow',
      'navbarLogo',
      'toolbarDense',
    ]),
  },
  beforeMount() {
    console.groupCollapsed('NavbarItemsMount');
  },
  mounted() {
    this.$nextTick(() => {
      console.groupEnd();
    });
  },
  methods: {
    stateNavbarShow(state) {
      this.$store.dispatch('NavbarState', { state });
    },
  },
};
</script>
