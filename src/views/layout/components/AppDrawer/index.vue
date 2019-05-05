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
  /* beforeUpdate() {
    console.groupCollapsed('NavbarItemsUpdate');
  }, */
  beforeMount() {
    console.groupCollapsed('NavbarItemsMount');
  },
  /* updated() {
    console.groupEnd();
  }, */
  mounted() {
    this.$nextTick(() => {
      console.groupEnd();
    });
  },
  methods: {
    stateNavbarShow(state) {
      this.$store.dispatch('NavbarState', { state });
    },
    genChildTarget(item, subItem) {
      // if (subItem.path) return subItem.path;
      /* if (subItem.component) {
        return {
          name: subItem.component
        };
      } */
      return { name: `${item.path}/${(subItem.path)}` };
    },
    toggleUser() {
      // this.$store.dispatch('GenerateRoutes', { roles: ['admin'] });
    }
  },
  created() {
    this.toggleUser();
  }
};

</script>
