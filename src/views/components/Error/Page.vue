<template>
  <v-container fluid fill-height>
    <v-layout align-center>
      <v-flex text-xs-center>
        <h1 class="display-2 primary--text">{{ `${$t('errors.whoops')}, ${errorCode}` }}</h1>
        <p>{{ $t(`errors.${errorCode}`) }}</p>
        <v-btn
          to="/dashboard"
          outline
          color="primary"
        >{{ $t('errors.back') }}</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    errorCode: {
      type: Number,
      default: 404
    }
  },
  data: () => ({
    lineChartData: ''
  })
};
</script>
