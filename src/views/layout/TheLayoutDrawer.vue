<template>
  <v-navigation-drawer
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
            src="img/icons/android-icon-36x36.png"
            alt="VVA"
          >
        </v-avatar>
        <span>{{ $t('toolbar.appname') }}</span>
      </v-toolbar-title>
    </v-app-bar>
    <the-layout-drawer-list
      :dense="navbarDense"
      :routes="permissionRoutes"
      icon-show
    />
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import TheLayoutDrawerList from './TheLayoutDrawerList.vue';

export default {
  name: 'TheLayoutDrawer',
  components: {
    TheLayoutDrawerList,
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
  methods: {
    stateNavbarShow(state) {
      this.$store.dispatch('NavbarState', { state });
    },
  },
};
</script>
