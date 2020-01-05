<template>
  <app-center>
    <template v-slot:page>
      <h1 class="display-2 primary--text">
        {{ `${$t('errors.whoops')}, ${errorCode}` }}
      </h1>
      <p>{{ $t(`errors.${errorCode}`) }}</p>
      <v-btn
        to="/dashboard"
        outlined
        color="primary"
      >
        {{ $t('errors.back') }}
      </v-btn>
    </template>
  </app-center>
</template>

<script>
import AppCenter from '@/views/layout/components/AppCenter.vue';

export default {
  name: 'ErrorPage',
  components: {
    AppCenter,
  },
  props: {
    errorCode: {
      type: Number,
      default: 404,
    },
  },
  data: () => ({
    lineChartData: '',
  }),
};
</script>
