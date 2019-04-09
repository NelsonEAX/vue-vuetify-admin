<template>
  <v-list>
    <!--<navbar-item v-for="(route, i) in routes" :key="i" :route="route"/>-->
    <v-list-group
      v-for="item in routes"
      :key="item.title"
      v-model="item.active"
      :prepend-icon="item.meta ? item.meta.icon : ''"
      no-action
    >
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>

      <v-list-tile
        v-for="subItem in item.children"
        :key="subItem.name"
        @click="1"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ subItem.name }}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <!--<v-icon>{{ subItem.meta ? subItem.meta.icon : '' }}</v-icon>-->
        </v-list-tile-action>
      </v-list-tile>
    </v-list-group>
  </v-list>
</template>

<script>
// import NavbarItem from './NavbarItem.vue';

export default {
  name: 'NavbarList',
  components: {
    // NavbarItem
  },
  props: {
    routes: {
      type: Array,
      default: () => {}
    }
  }
};

</script>
