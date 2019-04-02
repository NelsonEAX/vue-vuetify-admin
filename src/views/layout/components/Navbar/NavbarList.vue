<template>
  <v-list>
    <navbar-item v-for="(route, i) in routes" :key="i" :route="route"/>
  </v-list>
</template>

<script>
import NavbarItem from './NavbarItem.vue';

export default {
  name: 'NavbarList',
  components: {
    NavbarItem
  },
  props: {
    routes: {
      type: Array,
      default: () => {}
    }
  }
};

</script>
