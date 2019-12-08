<template>
  <v-content>
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <router-view />
    </transition>
  </v-content>
</template>

<script>
export default {
  name: 'AppMain',
  data: () => ({}),
};
</script>
