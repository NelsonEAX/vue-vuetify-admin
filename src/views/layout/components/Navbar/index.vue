<template>
  <v-navigation-drawer
    dark
    fixed
    app
    :value="navbarShow"
    @input="setNavbarShowState"
    width="250"
  >
    <!--<v-toolbar-->
      <!--dense-->
      <!--dark-->
    <!--&gt;-->
      <!--<v-toolbar-title class="text-xs-center">-->
        <!--<v-avatar size="32px" tile>-->
          <!--<img-->
            <!--src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"-->
            <!--alt="Vuetify"-->
          <!--&gt;-->
        <!--</v-avatar>-->
        <!--<span>{{ $t('toolbar.appname') }}</span>-->
      <!--</v-toolbar-title>-->
    <!--</v-toolbar>-->
    <v-divider></v-divider>
    <navbar-list :routes="permissionRoutes" :iconShow="true"/>

  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import NavbarList from './NavbarList.vue';

export default {
  name: 'Navbar',
  components: {
    NavbarList
  },
  data() {
    return {};
  },
  computed: {
    toggleNavbarShowState() {
      return this.$store.getters.navbarShow;
    },
    ...mapGetters([
      'permissionRoutes',
      'navbarShow'
    ])
  },
  methods: {
    setNavbarShowState(state) {
      this.$store.dispatch('navbarState', { state });
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
      this.$store.dispatch('generateRoutes', { roles: ['admin'] });
    }
  },
  created() {
    this.toggleUser();
  }
};

</script>
