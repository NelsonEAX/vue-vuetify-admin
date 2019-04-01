<template>
  <v-navigation-drawer
    dark
    fixed
    app
    :value="navbarShow"
    @input="setNavbarShowState"
    width="250"
  >
    <v-toolbar
      dense
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
    <v-list dense expand>
      <!--<navbar-item v-for="(item, i) in permission_routes"></navbar-item>-->
      <template v-for="(item, i) in permission_routes">
        <!--group with subitems-->
        <v-list-group
          v-if="item.children && !item.hidden"
          :key="item.name"
          :group="item.name"
          :prepend-icon="item.meta ? item.meta.icon : 'view_module'"
          no-action="no-action">
          <v-list-tile slot="activator" ripple="ripple">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.meta ? $t(item.meta.title) : item.name }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <template
            v-for="(subItem, i) in item.children">
            <!--sub group-->
            <v-list-group
              v-if="subItem.children && !subItem.hidden"
              :key="subItem.name"
              :group="subItem.group"
              sub-group="sub-group">
              <v-list-tile slot="activator" ripple="ripple">
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.path }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                v-for="(grand, i) in subItem.children"
                :key="i"
                :to="`${item.path}/${(subItem.path)}`"
                :href="`${item.path}/${(subItem.path)}`"
                ripple="ripple">
                <v-list-tile-content>
                  <v-list-tile-title>{{ grand.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <!--child item-->
            <v-list-tile
              v-else
              :key="i"
              :to="`${item.path}/${(subItem.path)}`"
              :href="`${item.path}/${(subItem.path)}`"
              :disabled="subItem.disabled"
              :target="subItem.target"
              ripple="ripple">
              <v-list-tile-content>
                <v-list-tile-title><span>{{ subItem.title }}</span></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action v-if="subItem.action">
                <v-icon
                  :class="[subItem.actionClass || 'success--text']">{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list-group>
        <v-subheader
          v-else-if="item.header"
          :key="i">{{ item.path }}</v-subheader>
        <v-divider
          v-else-if="item.divider"
          :key="i"></v-divider>
        <!--top-level link-->
        <v-list-tile
          v-else
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          rel="noopener"
          :key="item.name">
          <v-list-tile-action
            v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.path }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action
            v-if="item.subAction">
            <v-icon class="success--text">{{ item.subAction }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import menu from '@/api/menu';
import { mapGetters } from 'vuex';
// import NavbarItem from './NavbarItem.vue';

export default {
  name: 'Navbar',
  components: {
    // NavbarItem
  },
  data() {
    return {
      items: [
        {
          icon: 'dashboard',
          'icon-alt': 'dashboard',
          text: 'route.dashboard',
          href: 'dashboard',
          model: true
        },
        {
          icon: 'apps',
          'icon-alt': 'apps',
          text: 'route.vuetify.components',
          model: true,
          children: [
            { icon: 'arrow_right', text: 'route.vuetify.alert', href: '/vuetify/alert' },
            { icon: 'arrow_right', text: 'route.vuetify.buttons', href: '/vuetify/buttons' },
            { icon: 'arrow_right', text: 'route.vuetify.calendar', href: '/vuetify/calendar' }
          ]
        }
      ],
      menus: menu
    };
  },
  computed: {
    toggleNavbarShowState() {
      return this.$store.getters.navbarShow;
    },
    ...mapGetters([
      'permission_routes',
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
    }
  }
};
</script>

<style scoped>

</style>
