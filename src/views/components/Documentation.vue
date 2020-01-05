<template>
  <app-center>
    <template v-slot:page>
      <v-btn
        color="info"
        href="https://github.com/NelsonEAX/vue-vuetify-admin/blob/master/README.md"
        target="_blank"
      >
        Documentation
      </v-btn>
      <v-btn
        color="info"
        href="https://github.com/NelsonEAX/vue-vuetify-admin/"
        target="_blank"
      >
        Github Repository
      </v-btn>
    </template>
  </app-center>
</template>

<script>
import AppCenter from '@/views/layout/components/AppCenter.vue';

export default {
  name: 'Documentation',
  components: {
    AppCenter,
  },
};
</script>
