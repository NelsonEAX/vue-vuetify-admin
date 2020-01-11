<template>
  <v-content>
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </v-content>
</template>

<script>
export default {
  name: 'AppContent',
  data: () => ({}),
};
</script>
