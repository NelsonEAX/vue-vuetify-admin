<template>
  <v-container class="fill-height">
    <v-row
      no-gutters
      align="center"
      justify="center"
    >
      <v-col class="text-center">
        <v-card :class="`cyan accent-${nestedLevel}`">
          <v-card-text>{{ $t(this.$route.meta.title) }}</v-card-text>
          <transition
            name="fade-transform"
            mode="out-in"
          >
            <router-view :nested-level="nestedLevel + 1" />
          </transition>
        </v-card>
      </v-col>
    </v-row>
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
};
</script>
