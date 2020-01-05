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
    <app-drawer-list
      :dense="navbarDense"
      :routes="permissionRoutes"
      icon-show
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
      'navbarDense',
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
