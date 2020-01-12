<template>
  <v-container class="container--fluid fill-height">
    <v-row
      no-gutters
      dense
      align="center"
      justify="center"
    >
      <v-col class="text-center">
        <slot name="page" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AppCenter',
  data: () => ({}),
};
</script>
