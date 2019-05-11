<template>
  <v-navigation-drawer
    dark
    fixed
    app
    :value="navbarShow"
    @input="stateNavbarShow"
    width="250"
  >
    <v-toolbar
      v-if="navbarLogo"
      :dense="toolbarDense"
      dark
    >
      <v-toolbar-title class="text-xs-center">
        <v-avatar size="32px" tile>
          <img
            src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
            alt="Vuetify"
          >
        </v-avatar>
        <span>{{ $t('toolbar.appname') }}</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <app-drawer-list :routes="permissionRoutes" :iconShow="true"/>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import AppDrawerList from './AppDrawerList.vue';

export default {
  name: 'AppDrawer',
  components: {
    AppDrawerList
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'permissionRoutes',
      'navbarShow',
      'navbarLogo',
      'toolbarDense'
    ])
  },
  methods: {
    stateNavbarShow(state) {
      this.$store.dispatch('NavbarState', { state });
    }
  },
  beforeMount() {
    console.groupCollapsed('NavbarItemsMount');
  },
  mounted() {
    this.$nextTick(() => {
      console.groupEnd();
    });
  }
};

</script>

<style lang="scss">
  .scroll-area {
    position: relative;
    margin: auto;
    width: 400px;
    height: 300px;
  }
</style>
