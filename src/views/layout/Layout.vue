<template>
  <v-app id="inspire">
    <navbar></navbar>
    <toolbar></toolbar>
    <xontent></xontent>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Xontent from './components/Content.vue';
import Toolbar from './components/Toolbar.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Xontent,
    Toolbar,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
