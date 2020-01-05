<template>
  <v-btn
    color="error"
    disabled
    icon
  >
    <v-icon>mdi-bug</v-icon>
  </v-btn>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ErrorLog',
  computed: {
    ...mapGetters([]),
  },
  methods: {
  },
};
</script>
