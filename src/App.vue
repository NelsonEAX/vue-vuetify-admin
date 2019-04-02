<template>
  <v-app id="inspire">
     <transition>
      <keep-alive>
        <router-view/>
        <layout/>
      </keep-alive>
    </transition>
  </v-app>
</template>

<script>
import Layout from './views/layout/Layout.vue';

export default {
  name: 'App',
  components: {
    Layout
  },
  data() {
    return {};
  }
};

</script>
