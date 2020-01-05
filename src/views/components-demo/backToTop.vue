<template>
  <v-container class="container--fluid grid-list-md">
    <v-row>
      <v-col
        class="flex-grow-1"
        cols="12"
      >
        <v-alert
          :value="true"
          color="info"
          outlined
          dense
        >
          {{ $t('components.backToTop') }}
        </v-alert>
      </v-col>
      <v-col cols="12">
        <div class="placeholder-container">
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
          <div>placeholder</div>
        </div>
      </v-col>
    </v-row>
    <app-to-top-fab />
  </v-container>
</template>

<script>
import AppToTopFab from '@/views/layout/components/AppToTopFab.vue';

export default {
  name: 'BackToTopDemo',
  components: { AppToTopFab },
  data: () => ({}),
};
</script>

<style scoped>
.placeholder-container div {
  margin: 10px;
}
</style>
