<template>
  <v-app id="inspire">
    <navbar/>
    <toolbar/>
    <app-main/>
  </v-app>
</template>

<script>
import { Navbar, Toolbar, AppMain } from './components';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Toolbar,
    AppMain,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
