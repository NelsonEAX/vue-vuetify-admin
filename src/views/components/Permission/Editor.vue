<template>
  <app-center>
    <template v-slot:page>
      <v-col class="display-4">
        Editor
      </v-col>
    </template>
  </app-center>
</template>

<script>
import AppCenter from '@/views/widget/AppCenter.vue';

export default {
  name: 'Editor',
  components: {
    AppCenter,
  },
};
</script>

<style scoped>

</style>
