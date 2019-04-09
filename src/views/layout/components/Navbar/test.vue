<template>
  <v-navigation-drawer
    dark
    fixed
    app
    :value="navbarShow"
    @input="setNavbarShowState"
    width="250"
  >
    <v-divider></v-divider>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="(admin, i) in admins"
            :key="i"
            @click="1"
          >
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Actions</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="(crud, i) in cruds"
            :key="i"
            @click="1"
          >
            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
    <v-divider></v-divider>
    <navbar-list :routes="permissionRoutes"/>
  </v-navigation-drawer>
</template>

<script>
import menu from '@/api/menu';
import { mapGetters } from 'vuex';
import NavbarList from './NavbarList.vue';

export default {
  name: 'Navbar',
  components: {
    // NavbarItem,
    NavbarList
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
      menus: menu,
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ]
    };
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
    }
  }
};

</script>
