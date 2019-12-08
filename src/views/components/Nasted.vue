<template>
  <v-container
    container--fluid
    fill-height
  >
    <v-layout
      justify-center
      align-center
    >
      <v-flex text-center>
        <v-card :class="`cyan accent-${nestedLevel}`">
          <v-card-text>{{ $t(this.$route.meta.title) }}</v-card-text>
          <transition
            name="fade-transform"
            mode="out-in"
          >
            <router-view :nested-level="nestedLevel+1" />
          </transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Nasted',
  props: {
    nestedLevel: {
      type: Number,
      default: 1,
    },
  },
  beforeMount() {
    console.log(this.$route);
  },
};
</script>
